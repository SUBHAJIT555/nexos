import { getCheckoutPlan, isCheckoutPlanId, isCheckoutProduct } from "@/data/checkout";
import type {
  CheckoutCustomer,
  CheckoutPlanId,
  CheckoutProduct,
  CheckoutSessionInput,
} from "@/types/checkout";

export type CheckoutValidationResult =
  | { ok: true; input: CheckoutSessionInput }
  | { ok: false; error: string };

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function parseCheckoutCustomer(value: unknown): CheckoutCustomer | null {
  if (!value || typeof value !== "object") {
    return null;
  }

  const record = value as Record<string, unknown>;
  const email = typeof record.email === "string" ? record.email.trim() : "";
  const name = typeof record.name === "string" ? record.name.trim() : "";
  const company =
    typeof record.company === "string" && record.company.trim().length > 0
      ? record.company.trim()
      : undefined;

  if (!email || !name || !isValidEmail(email)) {
    return null;
  }

  return { email, name, company };
}

export function validateCheckoutSessionPayload(
  payload: unknown,
): CheckoutValidationResult {
  if (!payload || typeof payload !== "object") {
    return { ok: false, error: "Invalid request body." };
  }

  const body = payload as Record<string, unknown>;
  const product = typeof body.product === "string" ? body.product : null;
  const planId = typeof body.plan === "string" ? body.plan : null;
  const successUrl = typeof body.successUrl === "string" ? body.successUrl : "";
  const cancelUrl = typeof body.cancelUrl === "string" ? body.cancelUrl : "";
  const customer = parseCheckoutCustomer(body.customer);

  if (!isCheckoutProduct(product) || !isCheckoutPlanId(planId)) {
    return { ok: false, error: "Unknown product or plan." };
  }

  if (!customer) {
    return { ok: false, error: "Valid customer name and email are required." };
  }

  if (!successUrl.startsWith("/") || !cancelUrl.startsWith("/")) {
    return { ok: false, error: "Invalid redirect URLs." };
  }

  const plan = getCheckoutPlan(product, planId);
  if (!plan) {
    return { ok: false, error: "Selected plan is unavailable." };
  }

  return {
    ok: true,
    input: {
      product,
      planId,
      customer,
      successUrl,
      cancelUrl,
      items: [
        {
          id: `${product}-${planId}`,
          name: plan.name,
          description: plan.description,
          unitAmount: plan.unitAmount,
          currency: plan.currency,
          quantity: plan.quantity,
          interval: plan.interval,
        },
      ],
    },
  };
}

export function resolveCheckoutSelection(
  productParam: string | null | undefined,
  planParam: string | null | undefined,
): { product: CheckoutProduct; planId: CheckoutPlanId } | null {
  if (!isCheckoutProduct(productParam) || !isCheckoutPlanId(planParam)) {
    return null;
  }

  const plan = getCheckoutPlan(productParam, planParam);
  if (!plan) {
    return null;
  }

  return { product: productParam, planId: planParam };
}
