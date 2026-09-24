import type { Metadata } from "next";
import {
  CheckoutSuccessContent,
  CheckoutSuccessSupport,
} from "@/components/checkout/CheckoutSuccessContent";
import { Section } from "@/components/layout/Section";

export const metadata: Metadata = {
  title: "Order confirmed",
  description: "Your checkout was completed successfully.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CheckoutSuccessPage() {
  return (
    <Section size="md">
      <div className="mx-auto max-w-xl">
        <CheckoutSuccessContent />
        <CheckoutSuccessSupport />
      </div>
    </Section>
  );
}
