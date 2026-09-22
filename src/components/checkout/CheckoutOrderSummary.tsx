import { Card } from "@/components/ui/Card";
import { formatBillingInterval, formatCurrency } from "@/lib/checkout/format";
import type { CheckoutLineItem } from "@/types/checkout";

type CheckoutOrderSummaryProps = {
  lineItems: CheckoutLineItem[];
  totalPaise: number;
};

export function CheckoutOrderSummary({ lineItems, totalPaise }: CheckoutOrderSummaryProps) {
  return (
    <Card className="p-6 md:p-8">
      <p className="text-xs font-medium uppercase tracking-[0.08em] text-neutral-600">
        Order summary
      </p>

      {lineItems.length === 0 ? (
        <p className="mt-4 text-sm text-neutral-600">
          Select one or more items to build your custom plan.
        </p>
      ) : (
        <ul className="mt-4 flex flex-col gap-4 border-b border-neutral-200 pb-4">
          {lineItems.map((item) => (
            <li key={item.id} className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-sm font-semibold text-neutral-900">{item.name}</p>
                {item.description ? (
                  <p className="mt-0.5 text-xs leading-5 text-neutral-600">{item.description}</p>
                ) : null}
                {item.interval ? (
                  <p className="mt-1 text-xs text-neutral-500">
                    {formatBillingInterval(item.interval)}
                  </p>
                ) : null}
              </div>
              <p className="shrink-0 text-sm font-semibold text-neutral-900">
                {formatCurrency(item.unitAmount * item.quantity, item.currency)}
              </p>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6 flex items-end justify-between border-t border-neutral-200 pt-4">
        <div>
          <p className="text-sm font-medium text-neutral-900">Due today</p>
          <p className="text-xs text-neutral-600">All amounts in INR</p>
        </div>
        <p className="font-heading text-[32px] leading-none font-semibold tracking-[-0.03em] text-neutral-900">
          {formatCurrency(totalPaise)}
        </p>
      </div>
    </Card>
  );
}
