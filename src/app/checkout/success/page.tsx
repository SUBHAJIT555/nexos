import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { LinkButton } from "@/components/ui/LinkButton";
import { Section } from "@/components/layout/Section";
import { getCheckoutPlan, isCheckoutPlanId, isCheckoutProduct } from "@/data/checkout";
import { formatCurrency } from "@/lib/checkout/format";

export const metadata: Metadata = {
  title: "Order confirmed",
  description: "Your checkout was completed successfully.",
  robots: {
    index: false,
    follow: false,
  },
};

type CheckoutSuccessPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function CheckoutSuccessPage({ searchParams }: CheckoutSuccessPageProps) {
  const params = await searchParams;
  const productParam = typeof params.product === "string" ? params.product : null;
  const planParam = typeof params.plan === "string" ? params.plan : null;
  const sessionId = typeof params.session === "string" ? params.session : null;

  const product = isCheckoutProduct(productParam) ? productParam : null;
  const planId = isCheckoutPlanId(planParam) ? planParam : null;
  const plan = product && planId ? getCheckoutPlan(product, planId) : null;

  return (
    <Section size="md">
      <div className="mx-auto max-w-xl">
        <Card className="p-8 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.08em] text-accent">
            Order confirmed
          </p>
          <h1 className="mt-3 type-h2 text-neutral-900">Thank you for your order</h1>
          <p className="mt-4 text-base leading-6 text-neutral-600">
            {plan
              ? `Your ${plan.productLabel} — ${plan.name} order is confirmed.`
              : "Your order is confirmed."}
          </p>

          {plan ? (
            <p className="mt-2 text-sm text-neutral-600">
              Total: {formatCurrency(plan.unitAmount * plan.quantity, plan.currency)}
            </p>
          ) : null}

          {sessionId ? (
            <p className="mt-2 text-xs text-neutral-500">Reference: {sessionId}</p>
          ) : null}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <LinkButton href="/" variant="primary">
              Back to home
            </LinkButton>
            <LinkButton href="/pricing" variant="outline">
              View pricing
            </LinkButton>
          </div>
        </Card>

        <p className="mt-6 text-center text-sm text-neutral-600">
          Need help?{" "}
          <Link href="mailto:support@nexos.ai" className="text-accent hover:text-[var(--accent-hover)]">
            Contact support
          </Link>
        </p>
      </div>
    </Section>
  );
}
