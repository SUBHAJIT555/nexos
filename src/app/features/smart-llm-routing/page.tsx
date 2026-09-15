import type { Metadata } from "next";
import { RoutingPage } from "@/components/routing/RoutingPage";

export const metadata: Metadata = {
  title: "Smart LLM routing: automatically route to the right model",
  description:
    "Send every request to the model that fits the task best, without overpaying for simple work and compromising on complex-work quality.",
};

export default function Page() {
  return <RoutingPage />;
}
