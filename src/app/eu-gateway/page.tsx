import type { Metadata } from "next";
import { EuGatewayPage } from "@/components/eu-gateway/EuGatewayPage";

export const metadata: Metadata = {
  title: "Claude, GPT, Gemini & Mistral: EU-Hosted, AI Act Ready",
  description:
    "One endpoint for Claude, GPT, Gemini and Mistral – EU-hosted gateway, zero data retention, one line of code.",
};

export default function Page() {
  return <EuGatewayPage />;
}
