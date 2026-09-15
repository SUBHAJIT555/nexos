import type { Metadata } from "next";
import { PricingPage } from "@/components/pricing/PricingPage";
import { pricingMeta } from "@/data/pricing";

export const metadata: Metadata = {
  title: pricingMeta.title,
  description: pricingMeta.description,
  openGraph: {
    title: pricingMeta.title,
    description: pricingMeta.description,
  },
};

export default function Page() {
  return <PricingPage />;
}
