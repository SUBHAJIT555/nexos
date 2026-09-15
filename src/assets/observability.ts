import type { StaticImageData } from "next/image";
import hero from "@/assets/images/observability/hero.webp";
import tools from "@/assets/images/observability/ai-tool-in-use.webp";
import shadow from "@/assets/images/observability/uncover-shadow-ai.webp";
import attribute from "@/assets/images/observability/attribute-usage.webp";
import leaks from "@/assets/images/observability/prevent-data-leaks.webp";
import insights from "@/assets/images/observability/get-insights.webp";
import usage from "@/assets/images/observability/usage.webp";
import performance from "@/assets/images/observability/performance.webp";
import costs from "@/assets/images/observability/costs.webp";
import logs from "@/assets/images/observability/logs.webp";
import exploreOrg from "@/assets/images/llm-observability/observer-organisation-profile.webp";
import exploreOrgUsage from "@/assets/images/llm-observability/observer-organisation-usage.webp";
import exploreOrgAudit from "@/assets/images/llm-observability/observer-organisation-audit-log.webp";
import exploreSecurity from "@/assets/images/observability/explore-security.webp";
import exploreAdoption from "@/assets/images/observability/explore-adoption.webp";
import exploreKnowledge from "@/assets/images/observability/explore-knowledge.webp";
import { homeLogos } from "@/assets/home";

export const observabilityGraphics = {
  hero,
  tools,
  shadow,
  attribute,
  leaks,
  insights,
  usage,
  performance,
  costs,
  logs,
  exploreOrg,
  exploreOrgUsage,
  exploreOrgAudit,
  exploreSecurity,
  exploreAdoption,
  exploreKnowledge,
  trustedWhite: homeLogos.trustedWhite,
  trustedWhiteMobile: homeLogos.trustedWhiteMobile,
} as const satisfies Record<string, string | StaticImageData>;
