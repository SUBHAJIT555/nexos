import type { Metadata } from "next";
import { ExtensionPage } from "@/components/features/ExtensionPage";

export const metadata: Metadata = {
  title: "nexos.ai browser extension: Make AI work where you work",
  description:
    "Research, summarize, write, and ask questions – work with AI directly in the browser. Get context-aware AI answers based on company knowledge.",
};

export default function Page() {
  return <ExtensionPage />;
}
