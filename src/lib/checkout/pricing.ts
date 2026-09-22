import {
  CHECKOUT_CURRENCY,
  GATEWAY_PLATFORM_FEE_RATE,
  getCatalogItem,
  type CheckoutCatalogItem,
} from "@/data/checkout";
import type { CheckoutCartSelection, CheckoutLineItem } from "@/types/checkout";

export function calculateTokenAmountPaise(item: CheckoutCatalogItem, tokens: number): number {
  const base = Math.round((tokens / 1000) * item.pricePerThousandTokensPaise);
  if (item.appliesPlatformFee) {
    return Math.round(base * (1 + GATEWAY_PLATFORM_FEE_RATE));
  }
  return base;
}

export function formatTokenLineDescription(
  item: CheckoutCatalogItem,
  tokens: number,
): string {
  const formatted = tokens.toLocaleString("en-IN");
  if (item.appliesPlatformFee) {
    return `${formatted} tokens (incl. 5% platform fee)`;
  }
  return `${formatted} tokens`;
}

export function buildLineItem(
  item: CheckoutCatalogItem,
  selection: CheckoutCartSelection,
): CheckoutLineItem | null {
  if (!selection.enabled) {
    return null;
  }

  const tokens = Math.min(
    item.maxTokens,
    Math.max(item.minTokens, selection.tokens ?? item.defaultTokens),
  );
  const amount = calculateTokenAmountPaise(item, tokens);
  if (amount <= 0) {
    return null;
  }

  return {
    id: item.id,
    name: item.name,
    description: formatTokenLineDescription(item, tokens),
    unitAmount: amount,
    currency: CHECKOUT_CURRENCY,
    quantity: 1,
    interval: "one_time",
    tokens,
  };
}

export function buildLineItems(selections: CheckoutCartSelection[]): CheckoutLineItem[] {
  return selections
    .map((selection) => {
      const item = getCatalogItem(selection.itemId);
      if (!item) {
        return null;
      }
      return buildLineItem(item, selection);
    })
    .filter((line): line is CheckoutLineItem => line != null);
}

export function calculateTotalPaise(lineItems: CheckoutLineItem[]): number {
  return lineItems.reduce((sum, item) => sum + item.unitAmount * item.quantity, 0);
}

export function formatTokenCount(tokens: number): string {
  return tokens.toLocaleString("en-IN");
}
