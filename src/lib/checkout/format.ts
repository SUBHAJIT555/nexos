import type { BillingInterval } from "@/types/checkout";
import { CHECKOUT_CURRENCY } from "@/data/checkout";

export function formatCurrency(amountPaise: number, currency = CHECKOUT_CURRENCY): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: currency.toUpperCase(),
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amountPaise / 100);
}

export function formatBillingInterval(interval: BillingInterval): string {
  switch (interval) {
    case "month":
      return "per month";
    case "year":
      return "per year";
    case "one_time":
      return "one-time";
    default:
      return interval;
  }
}
