import { Card } from "@/components/ui/Card";
import type { CheckoutPlanDefinition } from "@/data/checkout";
import { formatBillingInterval, formatCurrency } from "@/lib/checkout/format";

type CheckoutOrderSummaryProps = {
  plan: CheckoutPlanDefinition;
};

export function CheckoutOrderSummary({ plan }: CheckoutOrderSummaryProps) {
  const subtotal = plan.unitAmount * plan.quantity;

  return (
    <Card className="p-6 md:p-8">
      <p className="text-xs font-medium uppercase tracking-[0.08em] text-neutral-600">
        Order summary
      </p>
      <div className="mt-4 border-b border-neutral-200 pb-4">
        <p className="text-sm font-medium text-accent">{plan.productLabel}</p>
        <h2 className="mt-1 font-heading text-[28px] leading-[1.2] font-semibold tracking-[-0.02em] text-neutral-900">
          {plan.name}
        </h2>
        <p className="mt-2 text-sm leading-6 text-neutral-600">{plan.description}</p>
      </div>

      <ul className="mt-4 flex flex-col gap-2">
        {plan.features.map((feature) => (
          <li key={feature} className="text-sm leading-6 text-neutral-900">
            {feature}
          </li>
        ))}
      </ul>

      {plan.guarantee ? (
        <p className="mt-4 text-sm text-neutral-600">{plan.guarantee}</p>
      ) : null}

      {plan.billingNote ? (
        <p className="mt-2 text-sm text-neutral-600">{plan.billingNote}</p>
      ) : null}

      <div className="mt-6 flex items-end justify-between border-t border-neutral-200 pt-4">
        <div>
          <p className="text-sm font-medium text-neutral-900">Due today</p>
          <p className="text-xs text-neutral-600">{formatBillingInterval(plan.interval)}</p>
        </div>
        <p className="font-heading text-[32px] leading-none font-semibold tracking-[-0.03em] text-neutral-900">
          {formatCurrency(subtotal, plan.currency)}
        </p>
      </div>
    </Card>
  );
}
