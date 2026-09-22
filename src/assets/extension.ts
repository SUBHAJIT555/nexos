import type { StaticImageData } from "next/image";
import { agentsIllustrations } from "@/assets/agents";
import { extensionShots as existingShots } from "@/assets/features";
import bannerLightGlow from "@/assets/images/ai-integrations/banner-light-glow.webp";

export const extensionPageShots = {
  hero: existingShots.hero,
  models: existingShots.models,
  assistant: existingShots.assistant,
  walkthrough: existingShots.walkthrough,
  ctaGlow: bannerLightGlow,
} as const satisfies Record<string, StaticImageData>;

export const extensionPageGraphics = {
  gridCentered: agentsIllustrations.gridCentered,
};

export const extensionYoutube = {
  id: "3D1rcPluLBY",
  title: "NexEco AI: Browser extension",
  embed: "https://www.youtube.com/embed/3D1rcPluLBY?autoplay=1&enablejsapi=1",
} as const;
