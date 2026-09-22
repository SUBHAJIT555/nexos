import type { CheckoutPlanId, CheckoutProduct } from "@/types/checkout";

export const CHECKOUT_CURRENCY = "inr";

/** Platform fee applied to gateway token usage (5%). */
export const GATEWAY_PLATFORM_FEE_RATE = 0.05;

export type CheckoutCatalogItem = {
  id: string;
  category: "gateway" | "workspace" | "addon";
  productLabel: string;
  name: string;
  description: string;
  /** Paise per 1,000 tokens. */
  pricePerThousandTokensPaise: number;
  /** When true, 5% platform fee is added (gateway only). */
  appliesPlatformFee?: boolean;
  minTokens: number;
  /** Upper bound for the slider control. Manual entry has no upper limit. */
  maxTokens: number;
  defaultTokens: number;
  tokenStep: number;
  features: string[];
};

export const checkoutCatalog: CheckoutCatalogItem[] = [
  {
    id: "gateway-tokens",
    category: "gateway",
    productLabel: "AI Gateway",
    name: "Token credits",
    description: "Pay-as-you-go API access. Billed by estimated token usage.",
    pricePerThousandTokensPaise: 40,
    appliesPlatformFee: true,
    minTokens: 10_000,
    maxTokens: 5_000_000,
    defaultTokens: 10_000,
    tokenStep: 10_000,
    features: [
      "Access all major LLM models",
      "Intelligent routing and caching",
      "Unified API access",
      "Usage and cost observability",
    ],
  },
  {
    id: "workspace-subscription",
    category: "workspace",
    productLabel: "AI Workspace",
    name: "Workspace tokens",
    description: "Workspace access, agents, and credits — billed by token usage.",
    pricePerThousandTokensPaise: 35,
    minTokens: 10_000,
    maxTokens: 2_000_000,
    defaultTokens: 10_000,
    tokenStep: 10_000,
    features: [
      "Unlimited AI Agents",
      "200+ top AI models",
      "Monthly credit pool",
      "Connect AI to your work tools",
    ],
  },
  {
    id: "addon-observability",
    category: "addon",
    productLabel: "Add-on",
    name: "LLM Observability",
    description: "Tracing, logs, and spend visibility — billed by token usage.",
    pricePerThousandTokensPaise: 25,
    minTokens: 10_000,
    maxTokens: 1_000_000,
    defaultTokens: 10_000,
    tokenStep: 10_000,
    features: ["Full request tracing", "Cost dashboards", "Alerting"],
  },
  {
    id: "addon-routing",
    category: "addon",
    productLabel: "Add-on",
    name: "Smart LLM routing",
    description: "Intelligent model routing — billed by token usage.",
    pricePerThousandTokensPaise: 20,
    minTokens: 10_000,
    maxTokens: 1_000_000,
    defaultTokens: 10_000,
    tokenStep: 10_000,
    features: ["Automatic model selection", "Fallback routing", "Latency optimization"],
  },
  {
    id: "addon-caching",
    category: "addon",
    productLabel: "Add-on",
    name: "LLM caching",
    description: "Response caching to reduce repeat token spend.",
    pricePerThousandTokensPaise: 15,
    minTokens: 10_000,
    maxTokens: 1_000_000,
    defaultTokens: 10_000,
    tokenStep: 10_000,
    features: ["Semantic cache", "Configurable TTL", "Cache hit analytics"],
  },
  {
    id: "addon-eu-residency",
    category: "addon",
    productLabel: "Add-on",
    name: "EU data residency",
    description: "EU-hosted routing — billed by token usage.",
    pricePerThousandTokensPaise: 30,
    minTokens: 10_000,
    maxTokens: 1_000_000,
    defaultTokens: 10_000,
    tokenStep: 10_000,
    features: ["EU-hosted gateway", "Regional routing controls", "Compliance reporting"],
  },
];

const catalogById = new Map(checkoutCatalog.map((item) => [item.id, item]));

export function getCatalogItem(id: string): CheckoutCatalogItem | undefined {
  return catalogById.get(id);
}

export function checkoutItemHref(itemId: string, tokens?: number): string {
  const params = new URLSearchParams({ items: itemId });
  if (tokens != null && Number.isFinite(tokens)) {
    params.set("tokens", String(Math.round(tokens)));
  }
  return `/checkout?${params.toString()}`;
}

export function checkoutHref(product?: CheckoutProduct, planId?: CheckoutPlanId, tokens?: number): string {
  if (product === "gateway" && planId === "payg") {
    return checkoutItemHref("gateway-tokens", tokens);
  }
  if (product === "workspace" && planId === "month") {
    return checkoutItemHref("workspace-subscription", tokens);
  }
  return "/checkout";
}

/** @deprecated Legacy helpers kept for pricing page compatibility. */
export function isCheckoutProduct(value: string | null | undefined): value is CheckoutProduct {
  return value === "gateway" || value === "workspace";
}

/** @deprecated Legacy helpers kept for pricing page compatibility. */
export function isCheckoutPlanId(value: string | null | undefined): value is CheckoutPlanId {
  return value === "payg" || value === "month";
}

export function parsePreselectedItems(raw: string | null | undefined): string[] {
  if (!raw) {
    return [];
  }
  return raw
    .split(",")
    .map((id) => id.trim())
    .filter((id) => catalogById.has(id));
}

function clampTokens(item: CheckoutCatalogItem, tokens: number) {
  if (!Number.isFinite(tokens)) {
    return item.minTokens;
  }
  return Math.max(item.minTokens, Math.floor(tokens));
}

export function defaultCartSelections(preselected: string[] = [], tokenAmount?: number) {
  return checkoutCatalog.map((item) => ({
    itemId: item.id,
    enabled: preselected.includes(item.id),
    tokens:
      preselected.includes(item.id) && tokenAmount != null && Number.isFinite(tokenAmount)
        ? clampTokens(item, tokenAmount)
        : item.defaultTokens,
  }));
}
