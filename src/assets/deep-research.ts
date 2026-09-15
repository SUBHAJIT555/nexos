import type { StaticImageData } from "next/image";
import { agentsIllustrations } from "@/assets/agents";
import { deepResearchShots as existingShots } from "@/assets/features";
import bannerLightGlow from "@/assets/images/ai-integrations/banner-light-glow.webp";
import providers from "@/assets/images/deep-research/deep-research-providers.svg";

export const deepResearchPageShots = {
  hero: existingShots.hero,
  saveTime: existingShots.saveTime,
  chooseModel: existingShots.chooseModel,
  insights: existingShots.insights,
  marketing: existingShots.marketing,
  sales: existingShots.sales,
  product: existingShots.product,
  hr: existingShots.hr,
  ctaGlow: bannerLightGlow,
} as const satisfies Record<string, StaticImageData>;

export const deepResearchPageGraphics = {
  gridCentered: agentsIllustrations.gridCentered,
  providers,
};
