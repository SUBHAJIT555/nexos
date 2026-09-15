import type { StaticImageData } from "next/image";
import bestAiGateway from "@/assets/images/blog/featured/best-ai-gateway-featured.webp";
import portkeyAlternatives from "@/assets/images/blog/featured/portkey-alternatives-featured.webp";
import claudeAlternatives from "@/assets/images/blog/featured/claude-alternatives-featured.webp";
import aiUsageTracking from "@/assets/images/blog/featured/ai-usage-tracking-featured.webp";
import litellmAlternatives from "@/assets/images/blog/featured/litellm-alternatives-featured.webp";
import isOpenrouterSafe from "@/assets/images/blog/featured/is-openrouter-safe-featured.webp";
import llmObservabilityTools from "@/assets/images/blog/featured/llm-observability-tools-featured.webp";
import openclawAlternatives from "@/assets/images/blog/featured/openclaw-alternatives-featured.webp";
import grok4Benchmarks from "@/assets/images/blog/featured/grok-4-benchmarks-featured.webp";
import mindaugasJancis from "@/assets/images/blog/authors/mindaugas-jancis.webp";
import eannaMotherway from "@/assets/images/blog/authors/eanna-motherway.webp";
import vytautasVaitkevicius from "@/assets/images/blog/authors/vytautas-vaitkevicius.webp";
import nexosaiExperts from "@/assets/images/blog/authors/nexosai-experts.webp";
import abstractGridXl from "@/assets/images/blog/shared/abstract-grid-bg-xl.webp";
import abstractGridXs from "@/assets/images/blog/shared/abstract-grid-bg-xs.webp";
import { assetSrc } from "@/assets/home";

export const blogFeaturedImages = {
  "best-ai-gateway-featured.webp": bestAiGateway,
  "portkey-alternatives-featured.webp": portkeyAlternatives,
  "claude-alternatives-featured.webp": claudeAlternatives,
  "ai-usage-tracking-featured.webp": aiUsageTracking,
  "litellm-alternatives-featured.webp": litellmAlternatives,
  "is-openrouter-safe-featured.webp": isOpenrouterSafe,
  "llm-observability-tools-featured.webp": llmObservabilityTools,
  "openclaw-alternatives-featured.webp": openclawAlternatives,
  "grok-4-benchmarks-featured.webp": grok4Benchmarks,
} as const satisfies Record<string, StaticImageData>;

export const blogAuthorImages = {
  "mindaugas-jancis.webp": mindaugasJancis,
  "eanna-motherway.webp": eannaMotherway,
  "vytautas-vaitkevicius.webp": vytautasVaitkevicius,
  "nexosai-experts.webp": nexosaiExperts,
} as const satisfies Record<string, StaticImageData>;

export const blogCtaGraphics = {
  gridXl: abstractGridXl,
  gridXs: abstractGridXs,
} as const;

export function blogFeaturedSrc(file: string): StaticImageData {
  return blogFeaturedImages[file as keyof typeof blogFeaturedImages] ?? aiUsageTracking;
}

export function blogAuthorSrc(file: string): StaticImageData {
  return blogAuthorImages[file as keyof typeof blogAuthorImages] ?? nexosaiExperts;
}

export { assetSrc };
