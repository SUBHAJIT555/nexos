import { CHECKOUT_CURRENCY, getCatalogItem } from "@/data/checkout";
import { buildLineItems, calculateTotalPaise } from "@/lib/checkout/pricing";
import type {
  CheckoutCartSelection,
  CheckoutCustomer,
  CheckoutSessionInput,
  PaymentMethod,
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

function parsePaymentMethod(value: unknown): PaymentMethod | null {
  if (value === "upi" || value === "card" || value === "netbanking") {
    return value;
  }
  return null;
}

function parseSelections(value: unknown): CheckoutCartSelection[] | null {
  if (!Array.isArray(value)) {
    return null;
  }

  const selections: CheckoutCartSelection[] = [];

  for (const entry of value) {
    if (!entry || typeof entry !== "object") {
      continue;
    }
    const record = entry as Record<string, unknown>;
    const itemId = typeof record.itemId === "string" ? record.itemId : "";
    const enabled = record.enabled === true;
    const tokens = typeof record.tokens === "number" ? record.tokens : undefined;

    if (!itemId || !getCatalogItem(itemId)) {
      continue;
    }

    const catalogItem = getCatalogItem(itemId)!;
    const min = catalogItem.minTokens;
    const max = catalogItem.maxTokens;
    const resolvedTokens = Math.min(
      max,
      Math.max(min, tokens ?? catalogItem.defaultTokens),
    );
    selections.push({ itemId, enabled, tokens: resolvedTokens });
  }

  return selections;
}

function validateCheckoutCore(payload: unknown): CheckoutValidationResult {
  if (!payload || typeof payload !== "object") {
    return { ok: false, error: "Invalid request body." };
  }

  const body = payload as Record<string, unknown>;
  const successUrl = typeof body.successUrl === "string" ? body.successUrl : "";
  const cancelUrl = typeof body.cancelUrl === "string" ? body.cancelUrl : "";
  const customer = parseCheckoutCustomer(body.customer);
  const selections = parseSelections(body.selections);

  if (!customer) {
    return { ok: false, error: "Valid customer name and email are required." };
  }

  if (!selections || selections.length === 0) {
    return { ok: false, error: "Invalid plan selection." };
  }

  if (!successUrl.startsWith("/") || !cancelUrl.startsWith("/")) {
    return { ok: false, error: "Invalid redirect URLs." };
  }

  const items = buildLineItems(selections);
  if (items.length === 0) {
    return { ok: false, error: "Select at least one plan item." };
  }

  const totalAmount = calculateTotalPaise(items);
  if (totalAmount <= 0) {
    return { ok: false, error: "Order total must be greater than zero." };
  }

  return {
    ok: true,
    input: {
      items,
      customer,
      paymentMethod: "upi",
      successUrl,
      cancelUrl,
      totalAmount,
      currency: CHECKOUT_CURRENCY,
    },
  };
}

export function validateCheckoutSessionPayload(payload: unknown): CheckoutValidationResult {
  const result = validateCheckoutCore(payload);
  if (!result.ok) {
    return result;
  }

  if (!payload || typeof payload !== "object") {
    return { ok: false, error: "Invalid request body." };
  }

  const paymentMethod = parsePaymentMethod((payload as Record<string, unknown>).paymentMethod);
  if (!paymentMethod) {
    return { ok: false, error: "Select a payment method." };
  }

  if (paymentMethod !== "upi") {
    return { ok: false, error: "Only UPI payments are available right now." };
  }

  return {
    ok: true,
    input: { ...result.input, paymentMethod },
  };
}

export function validateCheckoutCreatePayload(payload: unknown): CheckoutValidationResult {
  return validateCheckoutCore(payload);
}
