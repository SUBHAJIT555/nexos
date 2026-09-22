import type { Metadata } from "next";
import { CachingPage } from "@/components/caching/CachingPage";

export const metadata: Metadata = {
  title: "LLM caching that optimizes AI costs",
  description:
    "Stop building separate caching logic for every provider. NexEco AI simplifies LLM caching through one integration, so your team can focus on building products.",
};

export default function Page() {
  return <CachingPage />;
}
