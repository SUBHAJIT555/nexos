import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { checkoutHref, listCheckoutPlans } from "@/data/checkout";
import { formatBillingInterval, formatCurrency } from "@/lib/checkout/format";

export function CheckoutPlanPicker() {
  const plans = listCheckoutPlans();

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {plans.map((plan) => (
        <Card key={`${plan.product}-${plan.planId}`} className="flex h-full flex-col p-6 md:p-8">
          <p className="text-sm font-medium text-accent">{plan.productLabel}</p>
          <h2 className="mt-2 font-heading text-[28px] leading-[1.2] font-semibold tracking-[-0.02em] text-neutral-900">
            {plan.name}
          </h2>
          <p className="mt-2 text-sm leading-6 text-neutral-600">{plan.description}</p>
          <p className="mt-6 font-heading text-[40px] leading-none font-semibold tracking-[-0.03em] text-neutral-900">
            {formatCurrency(plan.unitAmount, plan.currency)}
          </p>
          <p className="mt-1 text-sm text-neutral-600">{formatBillingInterval(plan.interval)}</p>
          <Link
            href={checkoutHref(plan.product, plan.planId)}
            className="mt-6 inline-flex h-12 items-center justify-center rounded-full border border-neutral-1000 bg-neutral-1000 px-7 text-base font-semibold text-white transition-opacity hover:opacity-90"
          >
            Select plan
          </Link>
        </Card>
      ))}
    </div>
  );
}
