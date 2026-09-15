export type BillingInterval = "month" | "year" | "one_time";

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
  email?: string;
  name?: string;
};

/**
 * Provider-agnostic checkout session shape.
 * A payment adapter can map this to Stripe, Adyen, or another provider later
 * without changing page-level component APIs.
 */
export type CheckoutSessionInput = {
  items: CheckoutLineItem[];
  customer?: CheckoutCustomer;
  successUrl: string;
  cancelUrl: string;
};
