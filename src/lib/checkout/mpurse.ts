import type { CheckoutCustomer, CheckoutLineItem } from "@/types/checkout";

export const PENDING_ORDER_KEY = "nea_pending_order_id";

export function preferredUpiMode(): "INTENT" | "QR" {
  if (typeof navigator === "undefined") {
    return "QR";
  }
  return /Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  )
    ? "INTENT"
    : "QR";
}

export function splitCustomerName(fullName: string): { firstName: string; lastName: string } {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) {
    return { firstName: "Customer", lastName: "User" };
  }
  if (parts.length === 1) {
    return { firstName: parts[0], lastName: parts[0] };
  }
  return { firstName: parts[0], lastName: parts.slice(1).join(" ") };
}

export function lineItemsToCartItems(lineItems: CheckoutLineItem[]) {
  return lineItems.map((item) => ({
    name: item.description ? `${item.name} — ${item.description}` : item.name,
    quantity: item.quantity,
    price: item.unitAmount / 100,
  }));
}

export function validateCustomerForPayment(customer: CheckoutCustomer): string | null {
  if (!customer.name.trim()) {
    return "Enter your full name.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customer.email.trim())) {
    return "Enter a valid email address.";
  }
  const phone = (customer.phone ?? "").replace(/\D/g, "");
  if (!/^[6-9]\d{9}$/.test(phone.length === 12 && phone.startsWith("91") ? phone.slice(2) : phone)) {
    return "Enter a valid 10-digit Indian mobile number for UPI.";
  }
  if (!(customer.address ?? "").trim()) {
    return "Enter your billing address.";
  }
  if (!(customer.town ?? "").trim()) {
    return "Enter your city.";
  }
  return null;
}

export type MpurseStartResponse = {
  success?: boolean;
  error?: string;
  order_id?: string;
  flow?: string;
  checkout_url?: string;
};

export async function startMpurseCheckout(payload: Record<string, unknown>): Promise<MpurseStartResponse> {
  const res = await fetch("/api/mpurse.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const raw = await res.text();
  let result: MpurseStartResponse = {};
  try {
    result = raw ? (JSON.parse(raw) as MpurseStartResponse) : {};
  } catch {
    throw new Error(
      "Payment server is not running. In a second terminal run: yarn php:api",
    );
  }
  if (!res.ok || !result.order_id) {
    throw new Error(result.error ?? "Failed to start UPI payment.");
  }
  return result;
}
