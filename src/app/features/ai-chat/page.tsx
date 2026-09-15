import type { Metadata } from "next";
import { ChatPage } from "@/components/chat/ChatPage";

export const metadata: Metadata = {
  title: "AI Chat for your enterprise teams",
  description:
    "Chat with leading AI models to explore ideas, solve problems, and work faster.",
};

export default function Page() {
  return <ChatPage />;
}
