"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { CheckoutCustomerForm } from "@/components/checkout/CheckoutCustomerForm";
import { CheckoutOrderSummary } from "@/components/checkout/CheckoutOrderSummary";
import { CheckoutPaymentStep } from "@/components/checkout/CheckoutPaymentStep";
import { CheckoutPlanBuilder } from "@/components/checkout/CheckoutPlanBuilder";
import { Card } from "@/components/ui/Card";
import { defaultCartSelections } from "@/data/checkout";
import { buildLineItems, calculateTotalPaise } from "@/lib/checkout/pricing";
import {
  lineItemsToCartItems,
  PENDING_ORDER_KEY,
  preferredUpiMode,
  splitCustomerName,
  startMpurseCheckout,
  validateCustomerForPayment,
} from "@/lib/checkout/mpurse";
import type { CheckoutCartSelection, CheckoutCustomer, PaymentMethod } from "@/types/checkout";

const customerDraftKey = "checkout-customer-draft";
const cartDraftKey = "checkout-cart-draft";

type CheckoutStep = "configure" | "payment";

type CheckoutPageContentProps = {
  preselectedItems: string[];
  preselectedTokens?: number;
};

export function CheckoutPageContent({
  preselectedItems,
  preselectedTokens,
}: CheckoutPageContentProps) {
  const [step, setStep] = useState<CheckoutStep>("configure");
  const [selections, setSelections] = useState<CheckoutCartSelection[]>(() =>
    defaultCartSelections(preselectedItems, preselectedTokens),
  );
  const [customer, setCustomer] = useState<CheckoutCustomer>({
    email: "",
    name: "",
    company: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const lineItems = useMemo(() => buildLineItems(selections), [selections]);
  const totalPaise = useMemo(() => calculateTotalPaise(lineItems), [lineItems]);

  useEffect(() => {
    try {
      const storedCustomer = window.localStorage.getItem(customerDraftKey);
      if (storedCustomer) {
        const parsed = JSON.parse(storedCustomer) as Partial<CheckoutCustomer>;
        setCustomer((current) => ({
          email: parsed.email ?? current.email,
          name: parsed.name ?? current.name,
          company: parsed.company ?? current.company,
          phone: parsed.phone ?? current.phone,
          address: parsed.address ?? current.address,
          town: parsed.town ?? current.town,
          state: parsed.state ?? current.state,
          postcode: parsed.postcode ?? current.postcode,
        }));
      }

      const storedCart = window.localStorage.getItem(cartDraftKey);
      if (storedCart) {
        const parsed = JSON.parse(storedCart) as CheckoutCartSelection[];
        setSelections(
          defaultCartSelections(preselectedItems).map((defaults) => {
            const saved = parsed.find((entry) => entry.itemId === defaults.itemId);
            if (!saved) {
              return defaults;
            }
            return {
              ...defaults,
              enabled: preselectedItems.length > 0 ? defaults.enabled : saved.enabled,
              tokens: saved.tokens ?? defaults.tokens,
            };
          }),
        );
      }
    } catch {
      // Ignore invalid draft data.
    }
  }, [preselectedItems.length]);

  useEffect(() => {
    try {
      window.localStorage.setItem(customerDraftKey, JSON.stringify(customer));
      window.localStorage.setItem(cartDraftKey, JSON.stringify(selections));
    } catch {
      // Ignore storage failures.
    }
  }, [customer, selections]);

  function continueToPayment() {
    if (lineItems.length === 0) {
      setError("Select at least one item to continue.");
      return;
    }
    const validationError = validateCustomerForPayment(customer);
    if (validationError) {
      setError(validationError);
      return;
    }
    setError(null);
    setStep("payment");
  }

  async function completeOrder(paymentMethod: PaymentMethod) {
    if (paymentMethod !== "upi") {
      setError("Only UPI is available right now.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const { firstName, lastName } = splitCustomerName(customer.name);
      const notes = customer.company ? `Company: ${customer.company}` : "";
      const result = await startMpurseCheckout({
        action: "create_session",
        payment_method: "upi",
        upi_mode: preferredUpiMode(),
        billing_first_name: firstName,
        billing_last_name: lastName,
        billing_email: customer.email.trim(),
        billing_phone: customer.phone,
        billing_address: customer.address,
        billing_town: customer.town,
        billing_state: customer.state ?? "",
        billing_postcode: customer.postcode ?? "",
        notes,
        cart_items: lineItemsToCartItems(lineItems),
      });

      sessionStorage.setItem(PENDING_ORDER_KEY, result.order_id!);
      window.location.assign(`/pay?order_id=${encodeURIComponent(result.order_id!)}`);
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Unable to start UPI payment.");
      setIsSubmitting(false);
    }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
      <div>
        {step === "configure" ? (
          <div className="flex flex-col gap-6">
            <Card className="p-6 md:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.08em] text-neutral-600">
                Step 1 of 2
              </p>
              <h1 className="mt-2 type-h2 text-neutral-900">Build your custom plan</h1>
              <p className="mt-3 text-sm leading-6 text-neutral-600">
                Select multiple products and set token usage. All prices are calculated in INR
                based on your selections.
              </p>
              <div className="mt-8">
                <CheckoutPlanBuilder
                  selections={selections}
                  onChange={setSelections}
                  disabled={isSubmitting}
                />
              </div>
            </Card>

            <Card className="p-6 md:p-8">
              <h2 className="type-h4 text-neutral-900">Your details</h2>
              <p className="mt-2 text-sm leading-6 text-neutral-600">
                We&apos;ll use this information for your order confirmation and account setup.
              </p>
              <form
                className="mt-6"
                onSubmit={(event) => {
                  event.preventDefault();
                  continueToPayment();
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
                    disabled={isSubmitting || lineItems.length === 0}
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
          </div>
        ) : (
          <CheckoutPaymentStep
            amountPaise={totalPaise}
            isSubmitting={isSubmitting}
            error={error}
            onComplete={(method) => void completeOrder(method)}
            onBack={() => {
              setStep("configure");
              setError(null);
            }}
          />
        )}
      </div>

      <aside className="lg:sticky lg:top-[calc(var(--header-height)+1.5rem)]">
        <CheckoutOrderSummary lineItems={lineItems} totalPaise={totalPaise} />
      </aside>
    </div>
  );
}
