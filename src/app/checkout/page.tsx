import type { Metadata } from "next";
import { CheckoutPageContent } from "@/components/checkout/CheckoutPageContent";
import { Section } from "@/components/layout/Section";
import { parsePreselectedItems } from "@/data/checkout";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Build your custom plan and complete checkout in INR.",
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
  const itemsParam = typeof params.items === "string" ? params.items : null;

  // Legacy pricing links: ?product=gateway&plan=payg
  const product = typeof params.product === "string" ? params.product : null;
  const plan = typeof params.plan === "string" ? params.plan : null;
  const legacyItems =
    product === "gateway" && plan === "payg"
      ? ["gateway-tokens"]
      : product === "workspace" && plan === "month"
        ? ["workspace-subscription"]
        : [];

  const preselectedItems = parsePreselectedItems(itemsParam ?? legacyItems.join(","));
  const tokensParam = typeof params.tokens === "string" ? Number(params.tokens) : undefined;
  const preselectedTokens = Number.isFinite(tokensParam) ? tokensParam : undefined;

  return (
    <Section size="md">
      <div className="mx-auto max-w-[1120px]">
        <CheckoutPageContent
          preselectedItems={preselectedItems}
          preselectedTokens={preselectedTokens}
        />
      </div>
    </Section>
  );
}
