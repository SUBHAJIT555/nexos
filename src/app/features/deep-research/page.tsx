import type { Metadata } from "next";
import { DeepResearchPage } from "@/components/features/DeepResearchPage";

export const metadata: Metadata = {
  title: "Deep research for business teams",
  description:
    "Stop drowning in browser tabs – use Deep Research as your personal research assistant. Get pro-level reports in minutes, not days.",
};

export default function Page() {
  return <DeepResearchPage />;
}
