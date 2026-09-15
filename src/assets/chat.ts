import type { StaticImageData } from "next/image";
import hero from "@/assets/images/ai-chat/hero.webp";
import models from "@/assets/images/ai-chat/models.webp";
import deepResearch from "@/assets/images/ai-chat/deep-research.webp";
import marketing from "@/assets/images/ai-chat/marketing.webp";
import sales from "@/assets/images/ai-chat/sales.webp";
import talent from "@/assets/images/ai-chat/talent.webp";
import compare from "@/assets/images/ai-chat/compare.webp";
import customerStoriesXs from "@/assets/logos/customer-stories-v2-xs.svg";
import gridGlowBottomLight from "@/assets/illustrations/grid-glow-bottom-light.svg";
import { workspaceShots } from "@/assets/products";
import { agentsIllustrations } from "@/assets/agents";
import { builderIllustrations } from "@/assets/builder";

export const chatShots = {
  hero,
  models,
  autoSelect: workspaceShots["auto-model"],
  webSearch: workspaceShots["web-search"],
  deepResearch,
  interactive: workspaceShots.asks,
  files: workspaceShots.files,
  memory: workspaceShots.memory,
  marketing,
  sales,
  talent,
  compare,
} as const satisfies Record<string, StaticImageData>;

export const chatIllustrations = {
  gridCentered: agentsIllustrations.gridCentered,
  integrationsLogos: agentsIllustrations.integrationsLogos,
  promptGridBg: builderIllustrations.promptGridBg,
  promptGridBgXs: builderIllustrations.promptGridBgXs,
  gridGlowBottomLight,
};

export const chatLogos = {
  customerStoriesXs,
};
