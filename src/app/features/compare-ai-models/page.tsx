import type { Metadata } from "next";
import { ComparePage } from "@/components/compare/ComparePage";

export const metadata: Metadata = {
  title: "Compare AI Models, experiment with AI tools",
  description:
    "Test capabilities of any AI model and find the right LLM for the task.",
};

export default function Page() {
  return <ComparePage />;
}
