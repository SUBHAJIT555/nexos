"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { formatCurrency } from "@/lib/checkout/format";
import type { PaymentMethod } from "@/types/checkout";

const paymentMethods: {
  id: PaymentMethod;
  label: string;
  description: string;
  available: boolean;
}[] = [
  {
    id: "upi",
    label: "UPI",
    description: "Pay with Google Pay, PhonePe, Paytm, or any UPI app.",
    available: true,
  },
  {
    id: "card",
    label: "Card",
    description: "Credit and debit cards.",
    available: false,
  },
  {
    id: "netbanking",
    label: "Online banking",
    description: "Net banking through your bank.",
    available: false,
  },
];

type CheckoutPaymentStepProps = {
  amountPaise: number;
  sessionId: string;
  isSubmitting: boolean;
  error?: string | null;
  onComplete: (paymentMethod: PaymentMethod, upiId: string) => void;
  onBack: () => void;
};

export function CheckoutPaymentStep({
  amountPaise,
  sessionId,
  isSubmitting,
  error,
  onComplete,
  onBack,
}: CheckoutPaymentStepProps) {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("upi");
  const [upiId, setUpiId] = useState("");

  const selected = paymentMethods.find((method) => method.id === paymentMethod);

  return (
    <Card className="p-6 md:p-8">
      <p className="text-xs font-medium uppercase tracking-[0.08em] text-neutral-600">
        Step 2 of 2
      </p>
      <h2 className="mt-2 font-heading text-[28px] leading-[1.2] font-semibold tracking-[-0.02em] text-neutral-900">
        Payment
      </h2>
      <p className="mt-3 text-sm leading-6 text-neutral-600">
        Choose a payment method. Only UPI is available right now.
      </p>

      <div className="mt-6 flex flex-col gap-3">
        {paymentMethods.map((method) => (
          <button
            key={method.id}
            type="button"
            disabled={!method.available || isSubmitting}
            onClick={() => method.available && setPaymentMethod(method.id)}
            className={cn(
              "rounded-lg border p-4 text-left transition-colors",
              method.available
                ? paymentMethod === method.id
                  ? "border-accent bg-[#faf8ff]"
                  : "border-neutral-200 bg-white hover:border-neutral-300"
                : "cursor-not-allowed border-neutral-200 bg-neutral-50 opacity-60",
            )}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-base font-semibold text-neutral-900">{method.label}</p>
                <p className="mt-1 text-sm text-neutral-600">{method.description}</p>
              </div>
              {!method.available ? (
                <span className="shrink-0 rounded-full bg-neutral-200 px-2.5 py-0.5 text-xs font-medium text-neutral-600">
                  Unavailable
                </span>
              ) : null}
            </div>
          </button>
        ))}
      </div>

      {paymentMethod === "upi" && selected?.available ? (
        <div className="mt-6 rounded-lg border border-neutral-200 bg-neutral-50 p-4">
          <label htmlFor="upi-id" className="text-xs font-medium text-neutral-900">
            UPI ID
          </label>
          <input
            id="upi-id"
            type="text"
            inputMode="email"
            placeholder="yourname@upi"
            value={upiId}
            disabled={isSubmitting}
            onChange={(event) => setUpiId(event.target.value)}
            className="mt-2 h-[50px] w-full rounded-sm border border-neutral-500 bg-white px-4 text-base text-neutral-900 outline-none placeholder:text-neutral-500 focus-visible:border-accent"
          />
          <p className="mt-2 text-xs text-neutral-600">
            You will confirm payment in your UPI app once the provider is connected.
          </p>
        </div>
      ) : null}

      <div className="mt-6 flex items-center justify-between border-t border-neutral-200 pt-4">
        <p className="text-sm text-neutral-600">Amount due</p>
        <p className="font-heading text-[24px] font-semibold text-neutral-900">
          {formatCurrency(amountPaise)}
        </p>
      </div>

      {error ? (
        <p className="mt-4 text-sm text-red-600" role="alert">
          {error}
        </p>
      ) : null}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={onBack}
          disabled={isSubmitting}
          className="inline-flex h-12 items-center justify-center rounded-full border border-neutral-200 bg-white px-7 text-base font-semibold text-neutral-900 transition-colors hover:bg-neutral-50 disabled:opacity-50"
        >
          Back
        </button>
        <button
          type="button"
          onClick={() => onComplete(paymentMethod, upiId.trim())}
          disabled={isSubmitting || paymentMethod !== "upi" || upiId.trim().length < 3}
          className="inline-flex h-12 flex-1 items-center justify-center rounded-full border border-neutral-1000 bg-neutral-1000 px-7 text-base font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {isSubmitting ? "Processing…" : "Pay with UPI"}
        </button>
      </div>

      <p className="mt-4 text-xs text-neutral-500">Session: {sessionId}</p>
    </Card>
  );
}
