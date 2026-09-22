import { Card } from "@/components/ui/Card";
import { PaymentMarks } from "@/components/pricing/PricingIcons";
import { formatCurrency } from "@/lib/checkout/format";

type CheckoutPaymentStepProps = {
  amountCents: number;
  currency: string;
  sessionId: string;
  isSubmitting: boolean;
  error?: string | null;
  onComplete: () => void;
  onBack: () => void;
};

export function CheckoutPaymentStep({
  amountCents,
  currency,
  sessionId,
  isSubmitting,
  error,
  onComplete,
  onBack,
}: CheckoutPaymentStepProps) {
  return (
    <Card className="p-6 md:p-8">
      <p className="text-xs font-medium uppercase tracking-[0.08em] text-neutral-600">
        Payment
      </p>
      <h2 className="mt-2 font-heading text-[28px] leading-[1.2] font-semibold tracking-[-0.02em] text-neutral-900">
        Complete your order
      </h2>
      <p className="mt-3 text-sm leading-6 text-neutral-600">
        Card payments will be processed here once your payment provider is connected.
        This app does not collect or store card details directly.
      </p>

      <div className="mt-6 rounded-md border border-dashed border-neutral-300 bg-neutral-100 px-4 py-8 text-center">
        <PaymentMarks />
        <p className="mt-4 text-sm font-medium text-neutral-900">
          Payment provider integration pending
        </p>
        <p className="mt-2 text-sm text-neutral-600">
          Connect Stripe, Adyen, or another provider at{" "}
          <code className="rounded bg-white px-1.5 py-0.5 text-xs">/api/checkout/session</code>.
        </p>
        <p className="mt-4 text-xs text-neutral-500">Session: {sessionId}</p>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-neutral-200 pt-4">
        <p className="text-sm text-neutral-600">Amount due</p>
        <p className="font-heading text-[24px] font-semibold text-neutral-900">
          {formatCurrency(amountCents, currency)}
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
          onClick={onComplete}
          disabled={isSubmitting}
          className="inline-flex h-12 flex-1 items-center justify-center rounded-full border border-neutral-1000 bg-neutral-1000 px-7 text-base font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {isSubmitting ? "Completing…" : "Complete order (test mode)"}
        </button>
      </div>
    </Card>
  );
}
