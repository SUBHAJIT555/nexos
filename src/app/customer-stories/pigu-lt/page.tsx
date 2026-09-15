import type { Metadata } from "next";
import { PiguPage } from "@/components/customer-stories/pigu-lt/PiguPage";
import { piguLtMeta } from "@/data/customer-stories/pigu-lt";

export const metadata: Metadata = {
  title: piguLtMeta.title,
  description: piguLtMeta.description,
  openGraph: {
    title: piguLtMeta.title,
    description: piguLtMeta.description,
  },
};

export default function Page() {
  return <PiguPage />;
}
