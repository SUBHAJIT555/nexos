import type { StaticImageData } from "next/image";
import workspaceHero from "@/assets/images/workspace/hero.webp";
import workspaceSharedWork from "@/assets/images/workspace/shared-work.webp";
import workspaceAutoModel from "@/assets/images/workspace/auto-model-select.webp";
import workspaceWebSearch from "@/assets/images/workspace/web-search.webp";
import workspaceAsks from "@/assets/images/workspace/asks.webp";
import workspaceFiles from "@/assets/images/workspace/files.webp";
import workspaceMemory from "@/assets/images/workspace/memory.webp";
import workspaceCreateAgent from "@/assets/images/workspace/create-agent.webp";
import workspaceAgentTemplates from "@/assets/images/workspace/agent-templates.webp";
import customerStories from "@/assets/logos/customer-stories.svg";
import customerStoriesXs from "@/assets/logos/customer-stories-xs.svg";
import integrationsCarousel from "@/assets/logos/integrations-carousel.svg";
import integrationsCarouselSm from "@/assets/logos/integrations-carousel-sm.svg";
import checkIconRound from "@/assets/icons/ui/check-icon-round.svg";
import badgeGdpr from "@/assets/images/product/badge-gdpr.svg";
import badgeAicpa from "@/assets/images/product/badge-aicpa.svg";
import badgeIso27001 from "@/assets/images/product/badge-iso-27001.svg";
import badgeIso42001 from "@/assets/images/product/badge-iso-42001.svg";
import toolMsTeams from "@/assets/icons/tools/ms-teams.png";
import toolConfluence from "@/assets/icons/tools/confluence.png";
import toolMsOutlook from "@/assets/icons/tools/ms-outlook.png";
import toolJira from "@/assets/icons/tools/jira.png";
import toolSlack from "@/assets/icons/tools/slack.png";
import toolGmail from "@/assets/icons/tools/g-mail.png";
import toolMsOnedrive from "@/assets/icons/tools/ms-onedrive.png";
import toolMsSharepoint from "@/assets/icons/tools/ms-sharepoint.png";
import toolGCalendar from "@/assets/icons/tools/g-calendar.png";
import toolGDocs from "@/assets/icons/tools/g-docs.png";
import toolSalesforce from "@/assets/icons/tools/salesforce.png";
import toolGoogle from "@/assets/icons/tools/google.png";
import toolHibob from "@/assets/icons/tools/hibob.png";
import toolGDrive from "@/assets/icons/tools/g-drive.png";
import toolHubspot from "@/assets/icons/tools/hubspot.png";
import gridHomepageXl from "@/assets/illustrations/grid-homepage-xl.svg";
import gridHomepageXs from "@/assets/illustrations/grid-homepage-xs.svg";
import gridGlowBottomDark from "@/assets/illustrations/grid-glow-bottom-dark.svg";
import gridGlowBottomDarkXs from "@/assets/illustrations/grid-glow-bottom-dark-xs.svg";

export const workspaceShots = {
  hero: workspaceHero,
  sharedWork: workspaceSharedWork,
  "auto-model": workspaceAutoModel,
  "web-search": workspaceWebSearch,
  asks: workspaceAsks,
  files: workspaceFiles,
  memory: workspaceMemory,
  createAgent: workspaceCreateAgent,
  agentTemplates: workspaceAgentTemplates,
} as const satisfies Record<string, StaticImageData>;

export const productLogos = {
  customerStories,
  customerStoriesXs,
  integrationsCarousel,
  integrationsCarouselSm,
};

export const productIcons = {
  checkRound: checkIconRound,
};

export const productCertBadges = [
  { id: "gdpr", src: badgeGdpr, alt: "GDPR badge" },
  { id: "aicpa", src: badgeAicpa, alt: "AICPA SOC 2 Type 2 badge" },
  { id: "iso-27001", src: badgeIso27001, alt: "ISO 27001 badge" },
  { id: "iso-42001", src: badgeIso42001, alt: "ISO 42001 badge" },
] as const;

export const productToolIcons = {
  "ms-teams": toolMsTeams,
  confluence: toolConfluence,
  "ms-outlook": toolMsOutlook,
  jira: toolJira,
  slack: toolSlack,
  "g-mail": toolGmail,
  "ms-onedrive": toolMsOnedrive,
  "ms-sharepoint": toolMsSharepoint,
  "g-calendar": toolGCalendar,
  "g-docs": toolGDocs,
  salesforce: toolSalesforce,
  google: toolGoogle,
  hibob: toolHibob,
  "g-drive": toolGDrive,
  hubspot: toolHubspot,
} as const satisfies Record<string, StaticImageData>;

export type ProductToolId = keyof typeof productToolIcons;

export const productIllustrations = {
  gridHomepageXl,
  gridHomepageXs,
  gridGlowBottomDark,
  gridGlowBottomDarkXs,
};
