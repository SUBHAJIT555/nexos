import type { Metadata } from "next";
import { CheckoutCancelContent } from "@/components/checkout/CheckoutCancelContent";
import { Section } from "@/components/layout/Section";

export const metadata: Metadata = {
  title: "Checkout cancelled",
  description: "Your checkout was cancelled.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CheckoutCancelPage() {
  return (
    <Section size="md">
      <div className="mx-auto max-w-xl">
        <CheckoutCancelContent />
      </div>
    </Section>
  );
}
