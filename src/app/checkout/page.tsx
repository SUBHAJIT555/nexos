import type { Metadata } from "next";
import { CheckoutPageWithSearchParams } from "@/components/checkout/CheckoutPageWithSearchParams";
import { Section } from "@/components/layout/Section";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Build your custom plan and complete checkout in INR.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CheckoutPage() {
  return (
    <Section size="md">
      <div className="mx-auto max-w-[1120px]">
        <CheckoutPageWithSearchParams />
      </div>
    </Section>
  );
}
