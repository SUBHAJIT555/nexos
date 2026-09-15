import type { StaticImageData } from "next/image";
import { integrationShots as existingShots } from "@/assets/features";
import { agentsIllustrations } from "@/assets/agents";
import bannerLightGlow from "@/assets/images/ai-integrations/banner-light-glow.webp";

export const integrationsShots = {
  hero: existingShots.hero,
  apps: existingShots.apps,
  select: existingShots.select,
  chat: existingShots.chat,
  secure: existingShots.secure,
  files: existingShots.files,
  ctaGlow: bannerLightGlow,
} as const satisfies Record<string, StaticImageData>;

export const integrationsIllustrations = {
  gridCentered: agentsIllustrations.gridCentered,
};
