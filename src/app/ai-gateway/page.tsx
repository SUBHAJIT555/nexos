import type { Metadata } from "next";
import { GatewayPage } from "@/components/gateway/GatewayPage";

export const metadata: Metadata = {
  title: "AI gateway — secure and scalable LLM management",
  description:
    "One secure, lightweight layer to access, route, and manage 200+ models with real-time monitoring, cost controls, and full governance.",
};

export default function Page() {
  return <GatewayPage />;
}
