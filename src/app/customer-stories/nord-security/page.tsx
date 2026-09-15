import type { Metadata } from "next";
import { NordSecurityPage } from "@/components/customer-stories/nord-security/NordSecurityPage";
import { nordSecurityMeta } from "@/data/customer-stories/nord-security";

export const metadata: Metadata = {
  title: nordSecurityMeta.title,
  description: nordSecurityMeta.description,
  openGraph: {
    title: nordSecurityMeta.title,
    description: nordSecurityMeta.description,
  },
};

export default function Page() {
  return <NordSecurityPage />;
}
