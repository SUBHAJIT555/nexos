import type { Metadata } from "next";
import { OxylabsPage } from "@/components/customer-stories/oxylabs/OxylabsPage";
import { oxylabsMeta } from "@/data/customer-stories/oxylabs";

export const metadata: Metadata = {
  title: oxylabsMeta.title,
  description: oxylabsMeta.description,
  openGraph: {
    title: oxylabsMeta.title,
    description: oxylabsMeta.description,
  },
};

export default function Page() {
  return <OxylabsPage />;
}
