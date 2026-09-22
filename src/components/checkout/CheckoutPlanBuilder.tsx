"use client";

import { cn } from "@/lib/utils";
import { checkoutCatalog, type CheckoutCatalogItem } from "@/data/checkout";
import { CheckoutTokenSlider } from "@/components/checkout/CheckoutTokenSlider";
import {
  calculateTokenAmountPaise,
  formatTokenCount,
} from "@/lib/checkout/pricing";
import { formatCurrency } from "@/lib/checkout/format";
import type { CheckoutCartSelection } from "@/types/checkout";

type CheckoutPlanBuilderProps = {
  selections: CheckoutCartSelection[];
  onChange: (selections: CheckoutCartSelection[]) => void;
  disabled?: boolean;
};

function getSelection(selections: CheckoutCartSelection[], itemId: string) {
  return selections.find((entry) => entry.itemId === itemId);
}

function updateSelection(
  selections: CheckoutCartSelection[],
  itemId: string,
  patch: Partial<CheckoutCartSelection>,
): CheckoutCartSelection[] {
  return selections.map((entry) =>
    entry.itemId === itemId ? { ...entry, ...patch } : entry,
  );
}

function ItemPrice({ item, selection }: { item: CheckoutCatalogItem; selection: CheckoutCartSelection }) {
  const tokens = selection.tokens ?? item.defaultTokens;
  const amount = calculateTokenAmountPaise(item, tokens);

  return (
    <p
      className={cn(
        "text-sm font-semibold",
        selection.enabled ? "text-neutral-900" : "text-neutral-500",
      )}
    >
      {formatCurrency(amount)}{" "}
      <span className="font-normal text-neutral-600">
        for {formatTokenCount(tokens)} tokens
      </span>
    </p>
  );
}

export function CheckoutPlanBuilder({
  selections,
  onChange,
  disabled = false,
}: CheckoutPlanBuilderProps) {
  return (
    <div className="flex flex-col gap-4">
      {checkoutCatalog.map((item) => {
        const selection = getSelection(selections, item.id) ?? {
          itemId: item.id,
          enabled: false,
          tokens: item.defaultTokens,
        };
        const enabled = selection.enabled;
        const tokens = selection.tokens ?? item.defaultTokens;

        return (
          <div
            key={item.id}
            className={cn(
              "rounded-lg border p-5 transition-colors",
              enabled ? "border-accent bg-[#faf8ff]" : "border-neutral-200 bg-white",
            )}
          >
            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                checked={enabled}
                disabled={disabled}
                onChange={(event) =>
                  onChange(
                    updateSelection(selections, item.id, {
                      enabled: event.target.checked,
                    }),
                  )
                }
                className="mt-1 size-4 shrink-0 accent-[var(--accent)]"
              />
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <p className="text-xs font-medium text-accent">{item.productLabel}</p>
                    <p className="text-base font-semibold text-neutral-900">{item.name}</p>
                  </div>
                  <ItemPrice item={item} selection={selection} />
                </div>
                <p className="mt-1 text-sm leading-6 text-neutral-600">{item.description}</p>
              </div>
            </label>

            <div className="mt-4 border-t border-neutral-200 pt-4 pl-7">
              <CheckoutTokenSlider
                item={item}
                tokens={tokens}
                disabled={disabled}
                onChange={(nextTokens) =>
                  onChange(
                    updateSelection(selections, item.id, {
                      tokens: nextTokens,
                    }),
                  )
                }
              />
            </div>

            {item.features.length > 0 ? (
              <ul className="mt-3 flex flex-col gap-1 pl-7 text-sm text-neutral-700">
                {item.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
