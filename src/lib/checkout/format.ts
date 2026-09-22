import type { BillingInterval } from "@/types/checkout";

export function formatCurrency(amountCents: number, currency = "usd"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.toUpperCase(),
  }).format(amountCents / 100);
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
