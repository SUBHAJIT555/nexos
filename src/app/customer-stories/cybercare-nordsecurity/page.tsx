import type { Metadata } from "next";
import { CyberCarePage } from "@/components/customer-stories/cybercare-nordsecurity/CyberCarePage";
import { cybercareMeta } from "@/data/customer-stories/cybercare-nordsecurity";

export const metadata: Metadata = {
  title: cybercareMeta.title,
  description: cybercareMeta.description,
  openGraph: {
    title: cybercareMeta.title,
    description: cybercareMeta.description,
  },
};

export default function Page() {
  return <CyberCarePage />;
}
