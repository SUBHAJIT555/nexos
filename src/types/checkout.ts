export type BillingInterval = "month" | "year" | "one_time";

export type CheckoutProduct = "gateway" | "workspace";

export type CheckoutPlanId = "payg" | "month";

export type CheckoutLineItem = {
  id: string;
  name: string;
  description?: string;
  unitAmount: number;
  currency: string;
  quantity: number;
  interval?: BillingInterval;
};

export type CheckoutCustomer = {
  email: string;
  name: string;
  company?: string;
};

export type CheckoutSessionStatus =
  | "pending"
  | "awaiting_payment"
  | "completed"
  | "cancelled";

/**
 * Provider-agnostic checkout session shape.
 * A payment adapter can map this to Stripe, Adyen, or another provider later
 * without changing page-level component APIs.
 */
export type CheckoutSessionInput = {
  product: CheckoutProduct;
  planId: CheckoutPlanId;
  items: CheckoutLineItem[];
  customer: CheckoutCustomer;
  successUrl: string;
  cancelUrl: string;
};

export type CheckoutSession = CheckoutSessionInput & {
  id: string;
  status: CheckoutSessionStatus;
  createdAt: string;
};

export type CheckoutSessionResponse = {
  sessionId: string;
  status: CheckoutSessionStatus;
  /** Populated once a payment provider is connected. */
  paymentUrl?: string;
  clientSecret?: string;
};
