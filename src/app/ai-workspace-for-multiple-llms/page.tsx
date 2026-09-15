import type { Metadata } from "next";
import { WorkspacePage } from "@/components/workspace/WorkspacePage";

export const metadata: Metadata = {
  title: "AI Workspace for Multiple LLMs",
  description:
    "Replace scattered AI tools with one workspace that helps your entire team work faster, more securely, and at scale.",
};

export default function Page() {
  return <WorkspacePage />;
}
