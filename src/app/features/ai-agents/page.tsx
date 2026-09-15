import type { Metadata } from "next";
import { AgentsPage } from "@/components/agents/AgentsPage";

export const metadata: Metadata = {
  title: "No-code Agents for any team",
  description:
    "Build with no code, in minutes. Start with pre-built Agent templates and securely connect your work tools to AI.",
};

export default function Page() {
  return <AgentsPage />;
}
