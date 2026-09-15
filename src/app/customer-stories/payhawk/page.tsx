import type { Metadata } from "next";
import { PayhawkPage } from "@/components/customer-stories/payhawk/PayhawkPage";
import { payhawkMeta } from "@/data/customer-stories/payhawk";

export const metadata: Metadata = {
  title: payhawkMeta.title,
  description: payhawkMeta.description,
};

export default function Page() {
  return <PayhawkPage />;
}
