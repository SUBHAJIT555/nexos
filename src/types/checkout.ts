export type BillingInterval = "month" | "year" | "one_time";

export type CheckoutProduct = "gateway" | "workspace";

export type CheckoutPlanId = "payg" | "month";

export type PaymentMethod = "upi" | "card" | "netbanking";

export type CheckoutLineItem = {
  id: string;
  name: string;
  description?: string;
  unitAmount: number;
  currency: string;
  quantity: number;
  interval?: BillingInterval;
  tokens?: number;
};

export type CheckoutCustomer = {
  email: string;
  name: string;
  company?: string;
  /** Required for mPurse Direct UPI (10-digit Indian mobile). */
  phone?: string;
  address?: string;
  town?: string;
  state?: string;
  postcode?: string;
};

export type CheckoutCartSelection = {
  itemId: string;
  enabled: boolean;
  tokens?: number;
};

export type CheckoutSessionStatus =
  | "pending"
  | "awaiting_payment"
  | "completed"
  | "cancelled";

export type CheckoutSessionInput = {
  items: CheckoutLineItem[];
  customer: CheckoutCustomer;
  paymentMethod: PaymentMethod;
  successUrl: string;
  cancelUrl: string;
  totalAmount: number;
  currency: string;
};

export type CheckoutSession = CheckoutSessionInput & {
  id: string;
  status: CheckoutSessionStatus;
  createdAt: string;
};

export type CheckoutSessionResponse = {
  sessionId: string;
  status: CheckoutSessionStatus;
  totalAmount: number;
  currency: string;
  paymentUrl?: string;
};
