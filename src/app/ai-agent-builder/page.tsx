import type { Metadata } from "next";
import { BuilderPage } from "@/components/builder/BuilderPage";

export const metadata: Metadata = {
  title: "AI Agent Builder: Create AI Agents for yourself",
  description:
    "Build AI Agents with no code and automate work that's slowing you down.",
};

export default function Page() {
  return <BuilderPage />;
}
