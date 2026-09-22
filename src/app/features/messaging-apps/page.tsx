import type { Metadata } from "next";
import { MessagingPage } from "@/components/features/MessagingPage";

export const metadata: Metadata = {
  title: "AI for messaging apps: Slack, Telegram, WhatsApp & MS Teams",
  description:
    "Send a message, a voice note, or a file in Slack, Telegram or Whatsapp with NexEco AI. It connects to your messaging apps, handles the task, and replies with the result.",
};

export default function Page() {
  return <MessagingPage />;
}
