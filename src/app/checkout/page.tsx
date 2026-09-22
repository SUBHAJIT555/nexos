import type { Metadata } from "next";
import { CheckoutPageContent } from "@/components/checkout/CheckoutPageContent";
import { Section } from "@/components/layout/Section";
import { isCheckoutPlanId, isCheckoutProduct } from "@/data/checkout";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Review your plan and complete your nexos.ai subscription.",
  robots: {
    index: false,
    follow: false,
  },
};

type CheckoutPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function CheckoutPage({ searchParams }: CheckoutPageProps) {
  const params = await searchParams;
  const productParam = typeof params.product === "string" ? params.product : null;
  const planParam = typeof params.plan === "string" ? params.plan : null;

  const product = isCheckoutProduct(productParam) ? productParam : null;
  const planId = isCheckoutPlanId(planParam) ? planParam : null;

  return (
    <Section size="md">
      <div className="mx-auto max-w-[1120px]">
        <CheckoutPageContent product={product} planId={planId} />
      </div>
    </Section>
  );
}
