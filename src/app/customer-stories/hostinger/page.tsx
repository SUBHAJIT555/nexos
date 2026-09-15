import type { Metadata } from "next";
import { HostingerPage } from "@/components/customer-stories/hostinger/HostingerPage";
import { hostingerMeta } from "@/data/customer-stories/hostinger";

export const metadata: Metadata = {
  title: hostingerMeta.title,
  description: hostingerMeta.description,
  openGraph: {
    title: hostingerMeta.title,
    description: hostingerMeta.description,
  },
};

export default function Page() {
  return <HostingerPage />;
}
