"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { CheckoutCustomerForm } from "@/components/checkout/CheckoutCustomerForm";
import { CheckoutOrderSummary } from "@/components/checkout/CheckoutOrderSummary";
import { CheckoutPaymentStep } from "@/components/checkout/CheckoutPaymentStep";
import { CheckoutPlanPicker } from "@/components/checkout/CheckoutPlanPicker";
import { Card } from "@/components/ui/Card";
import { getCheckoutPlan } from "@/data/checkout";
import type { CheckoutCustomer, CheckoutPlanId, CheckoutProduct } from "@/types/checkout";

const draftStorageKey = "checkout-customer-draft";

type CheckoutStep = "details" | "payment";

type CheckoutPageContentProps = {
  product: CheckoutProduct | null;
  planId: CheckoutPlanId | null;
};

export function CheckoutPageContent({ product, planId }: CheckoutPageContentProps) {
  const router = useRouter();
  const plan = product && planId ? getCheckoutPlan(product, planId) : null;

  const [step, setStep] = useState<CheckoutStep>("details");
  const [customer, setCustomer] = useState<CheckoutCustomer>({
    email: "",
    name: "",
    company: "",
  });
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(draftStorageKey);
      if (!stored) {
        return;
      }
      const parsed = JSON.parse(stored) as Partial<CheckoutCustomer>;
      setCustomer((current) => ({
        email: parsed.email ?? current.email,
        name: parsed.name ?? current.name,
        company: parsed.company ?? current.company,
      }));
    } catch {
      // Ignore invalid draft data.
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(draftStorageKey, JSON.stringify(customer));
    } catch {
      // Ignore storage failures.
    }
  }, [customer]);

  const successUrl = useMemo(() => {
    if (!product || !planId) {
      return "/checkout/success";
    }
    const params = new URLSearchParams({ product, plan: planId });
    return `/checkout/success?${params.toString()}`;
  }, [product, planId]);

  const cancelUrl = useMemo(() => {
    if (!product || !planId) {
      return "/checkout/cancel";
    }
    const params = new URLSearchParams({ product, plan: planId });
    return `/checkout/cancel?${params.toString()}`;
  }, [product, planId]);

  async function createSession() {
    if (!product || !planId || !plan) {
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/checkout/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          product,
          plan: planId,
          customer,
          successUrl,
          cancelUrl,
        }),
      });

      const data = (await response.json()) as { sessionId?: string; error?: string; paymentUrl?: string };

      if (!response.ok || !data.sessionId) {
        throw new Error(data.error ?? "Unable to start checkout.");
      }

      setSessionId(data.sessionId);

      if (data.paymentUrl) {
        window.location.href = data.paymentUrl;
        return;
      }

      setStep("payment");
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Unable to start checkout.");
    } finally {
      setIsSubmitting(false);
    }
  }

  async function completeOrder() {
    if (!sessionId) {
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(`/api/checkout/session/${sessionId}/complete`, {
        method: "POST",
      });
      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Unable to complete checkout.");
      }

      router.push(`${successUrl}&session=${sessionId}`);
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Unable to complete checkout.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (!plan || !product || !planId) {
    return (
      <div>
        <h1 className="type-h1">Choose a plan</h1>
        <p className="mt-4 type-body text-muted-foreground">
          Select a subscription to continue to checkout.
        </p>
        <div className="mt-8">
          <CheckoutPlanPicker />
        </div>
        <p className="mt-8 text-sm text-neutral-600">
          Or browse all plans on the{" "}
          <Link href="/pricing" className="text-accent hover:text-[var(--accent-hover)]">
            pricing page
          </Link>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
      <div>
        {step === "details" ? (
          <Card className="p-6 md:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.08em] text-neutral-600">
              Step 1 of 2
            </p>
            <h1 className="mt-2 type-h2 text-neutral-900">Your details</h1>
            <p className="mt-3 text-sm leading-6 text-neutral-600">
              We&apos;ll use this information for your order confirmation and account setup.
            </p>

            <form
              className="mt-8"
              onSubmit={(event) => {
                event.preventDefault();
                void createSession();
              }}
            >
              <CheckoutCustomerForm
                value={customer}
                onChange={setCustomer}
                disabled={isSubmitting}
              />

              {error ? (
                <p className="mt-4 text-sm text-red-600" role="alert">
                  {error}
                </p>
              ) : null}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex h-12 items-center justify-center rounded-full border border-neutral-1000 bg-neutral-1000 px-7 text-base font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
                >
                  {isSubmitting ? "Continuing…" : "Continue to payment"}
                </button>
                <Link
                  href="/pricing"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-neutral-200 bg-white px-7 text-base font-semibold text-neutral-900 transition-colors hover:bg-neutral-50"
                >
                  Back to pricing
                </Link>
              </div>
            </form>
          </Card>
        ) : (
          <CheckoutPaymentStep
            amountCents={plan.unitAmount * plan.quantity}
            currency={plan.currency}
            sessionId={sessionId ?? ""}
            isSubmitting={isSubmitting}
            error={error}
            onComplete={() => void completeOrder()}
            onBack={() => {
              setStep("details");
              setError(null);
            }}
          />
        )}
      </div>

      <aside className="lg:sticky lg:top-[calc(var(--header-height)+1.5rem)]">
        <CheckoutOrderSummary plan={plan} />
      </aside>
    </div>
  );
}
