import type { StaticImageData } from "next/image";
import hero from "@/assets/images/ai-agents/hero.webp";
import createAgent from "@/assets/images/ai-agents/create-agent.webp";
import templates from "@/assets/images/ai-agents/templates.webp";
import integrations from "@/assets/images/ai-agents/integrations.webp";
import humanInTheLoop from "@/assets/images/ai-agents/human-in-the-loop.webp";
import share from "@/assets/images/ai-agents/share.webp";
import gridCentered from "@/assets/illustrations/grid-centered-secondary-center.svg";
import gridHomepageXlV2 from "@/assets/illustrations/grid-homepage-xl-v2.svg";
import gridHomepageXsV2 from "@/assets/illustrations/grid-homepage-xs-v2.svg";
import integrationsLogos from "@/assets/logos/integrations-logos.svg";
import slack from "@/assets/icons/apps/slack.svg";
import googleWorkspace from "@/assets/icons/apps/google-workspace.svg";
import microsoftOffice from "@/assets/icons/apps/microsoft-office.svg";
import bloomberg from "@/assets/logos/press/bloomberg.svg";
import techcrunch from "@/assets/logos/press/techcrunch.svg";
import forbes from "@/assets/logos/press/forbes.svg";
import techradar from "@/assets/logos/press/techradar.svg";
import cybernews from "@/assets/logos/press/cybernews.svg";

export const agentsShots = {
  hero,
  createAgent,
  templates,
  integrations,
  humanInTheLoop,
  share,
} as const satisfies Record<string, StaticImageData>;

export const agentsIllustrations = {
  gridCentered,
  gridHomepageXlV2,
  gridHomepageXsV2,
  integrationsLogos,
};

export const agentsAppIcons = {
  slack,
  googleWorkspace,
  microsoftOffice,
};

export const agentsPressLogos = [
  { id: "bloomberg", src: bloomberg, alt: "Bloomberg" },
  { id: "techcrunch", src: techcrunch, alt: "TechCrunch" },
  { id: "forbes", src: forbes, alt: "Forbes" },
  { id: "techradar", src: techradar, alt: "techradar" },
  { id: "cybernews", src: cybernews, alt: "cybernews" },
] as const;
