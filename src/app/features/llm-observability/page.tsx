import type { Metadata } from "next";
import { ObservabilityPage } from "@/components/features/ObservabilityPage";

export const metadata: Metadata = {
  title: "LLM observability solution for your business",
  description:
    "Gain complete visibility into how AI is used across your organization – from shadow tools and prompts to Gateway-level traffic, performance & spend.",
};

export default function Page() {
  return <ObservabilityPage />;
}
