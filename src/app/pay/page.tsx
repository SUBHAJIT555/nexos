import type { Metadata } from "next";
import { Suspense } from "react";
import { CheckoutPayPage } from "@/components/checkout/CheckoutPayPage";
import { Section } from "@/components/layout/Section";

export const metadata: Metadata = {
  title: "Pay with UPI",
  description: "Complete your NexEco AI UPI payment.",
  robots: { index: false, follow: false },
};

export default function PayPage() {
  return (
    <Section size="md">
      <Suspense
        fallback={
          <p className="text-center text-sm text-neutral-600">Preparing payment…</p>
        }
      >
        <CheckoutPayPage />
      </Suspense>
    </Section>
  );
}
