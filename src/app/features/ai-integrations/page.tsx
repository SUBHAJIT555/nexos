import type { Metadata } from "next";
import { IntegrationsPage } from "@/components/features/IntegrationsPage";

export const metadata: Metadata = {
  title: "AI Integrations: Unlock the full power of AI with Integrations",
  description:
    "Bring your files and workflows straight into Chats and Projects with an MCP integration. Instantly, securely, and without interrupting your workflow.",
};

export default function Page() {
  return <IntegrationsPage />;
}
