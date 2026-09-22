import type { BillingInterval, CheckoutPlanId, CheckoutProduct } from "@/types/checkout";

export type CheckoutPlanDefinition = {
  product: CheckoutProduct;
  planId: CheckoutPlanId;
  name: string;
  productLabel: string;
  description: string;
  unitAmount: number;
  currency: string;
  interval: BillingInterval;
  quantity: number;
  features: string[];
  guarantee?: string;
  billingNote?: string;
};

export const checkoutPlans: Record<
  CheckoutProduct,
  Partial<Record<CheckoutPlanId, CheckoutPlanDefinition>>
> = {
  gateway: {
    payg: {
      product: "gateway",
      planId: "payg",
      name: "Pay-as-you-go",
      productLabel: "AI Gateway",
      description: "For developers building AI products",
      unitAmount: 500,
      currency: "usd",
      interval: "one_time",
      quantity: 1,
      billingNote: "Minimum $5 credit top-up. Provider LLM rates + 5% platform fee.",
      features: [
        "Access all major LLM models",
        "Intelligent routing and caching",
        "Unified API access",
        "Usage and cost observability",
        "AI cost control",
        "Unified billing",
      ],
    },
  },
  workspace: {
    month: {
      product: "workspace",
      planId: "month",
      name: "1-month plan",
      productLabel: "AI Workspace",
      description: "One subscription instead of multiple AI tools",
      unitAmount: 3900,
      currency: "usd",
      interval: "month",
      quantity: 1,
      guarantee: "14-day money-back guarantee",
      billingNote: "Renews at $39/month until cancelled.",
      features: [
        "Unlimited AI Agents",
        "200+ top AI models",
        "1000 monthly credits",
        "Bonus credits",
        "Connect AI to your work tools",
        "AI slides, files, charts, and more",
      ],
    },
  },
};

export function checkoutHref(product: CheckoutProduct, planId: CheckoutPlanId): string {
  const params = new URLSearchParams({ product, plan: planId });
  return `/checkout?${params.toString()}`;
}

export function isCheckoutProduct(value: string | null | undefined): value is CheckoutProduct {
  return value === "gateway" || value === "workspace";
}

export function isCheckoutPlanId(value: string | null | undefined): value is CheckoutPlanId {
  return value === "payg" || value === "month";
}

export function getCheckoutPlan(
  product: CheckoutProduct,
  planId: CheckoutPlanId,
): CheckoutPlanDefinition | null {
  return checkoutPlans[product]?.[planId] ?? null;
}

export function listCheckoutPlans(): CheckoutPlanDefinition[] {
  return Object.values(checkoutPlans).flatMap((plans) =>
    Object.values(plans).filter(Boolean),
  ) as CheckoutPlanDefinition[];
}
