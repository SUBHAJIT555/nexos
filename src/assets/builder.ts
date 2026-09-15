import type { StaticImageData } from "next/image";
import hero from "@/assets/images/ai-agent-builder/hero.webp";
import createAgent from "@/assets/images/ai-agent-builder/create-agent.webp";
import integrations from "@/assets/images/ai-agent-builder/integrations.webp";
import models from "@/assets/images/ai-agent-builder/models.webp";
import schedule from "@/assets/images/ai-agent-builder/schedule.webp";
import videoPoster from "@/assets/images/ai-agent-builder/video-poster.jpg";
import promptGridBg from "@/assets/images/ai-agent-builder/prompt-grid-bg.svg";
import promptGridBgXs from "@/assets/images/ai-agent-builder/prompt-grid-bg-xs.svg";
import nordSecurity from "@/assets/logos/nord-security.svg";
import { agentsShots } from "@/assets/agents";

export const builderShots = {
  hero,
  createAgent,
  integrations,
  templates: agentsShots.templates,
  models,
  schedule,
  humanInTheLoop: agentsShots.humanInTheLoop,
  videoPoster,
} as const satisfies Record<string, StaticImageData>;

export const builderIllustrations = {
  promptGridBg,
  promptGridBgXs,
};

export const builderLogos = {
  nordSecurity,
};

export const builderVideoSrc = "/videos/ai-agent-builder/agent-builder.mp4";
