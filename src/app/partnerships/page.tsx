import type { Metadata } from "next";
import { PartnershipsPage } from "@/components/partnerships/PartnershipsPage";
import { partnershipsMeta } from "@/data/partnerships";

export const metadata: Metadata = {
  title: partnershipsMeta.title,
  description: partnershipsMeta.description,
  openGraph: {
    title: partnershipsMeta.title,
    description: partnershipsMeta.description,
  },
};

export default function Page() {
  return <PartnershipsPage />;
}
