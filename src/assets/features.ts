import type { StaticImageData } from "next/image";
import integrationsHero from "@/assets/images/integrations/integrations-hero.webp";
import nexosIntegrationApps from "@/assets/images/integrations/nexos-integration-apps.webp";
import integrationsSelect from "@/assets/images/integrations/integrations-select.webp";
import chatIntegration from "@/assets/images/integrations/chat-integration.webp";
import secureFiles from "@/assets/images/integrations/secure-files.webp";
import integrationsFiles from "@/assets/images/integrations/integrations-files.webp";
import messagingHero from "@/assets/images/messaging/nexosai-assistant-2.webp";
import messagingConnected from "@/assets/images/messaging/connected-to-data.webp";
import messagingBrain from "@/assets/images/messaging/pick-the-right-brain.webp";
import messagingMemory from "@/assets/images/messaging/conversation-memory.webp";
import messagingFormats from "@/assets/images/messaging/different-formats.webp";
import messagingSales from "@/assets/images/messaging/sales-team-slack.webp";
import messagingMarketing from "@/assets/images/messaging/marketing-team-slack.webp";
import messagingHr from "@/assets/images/messaging/hr-team-slack.webp";
import messagingOps from "@/assets/images/messaging/operations-team-slack.webp";
import messagingRole from "@/assets/images/messaging/your-role-slack.webp";
import extensionHeroShot from "@/assets/images/extension/browser-extension-2.webp";
import extensionModels from "@/assets/images/extension/extension-models.webp";
import extensionAssistant from "@/assets/images/extension/extension-assistant.webp";
import extensionWalkthrough from "@/assets/images/extension/videobanner-mikas-xl.webp";
import deepResearchHero from "@/assets/images/deep-research/deep-research-hero.webp";
import deepSaveTime from "@/assets/images/deep-research/save-time.webp";
import deepChooseModel from "@/assets/images/deep-research/choose-model.webp";
import deepInsights from "@/assets/images/deep-research/deeper-insights.webp";
import deepMarketing from "@/assets/images/deep-research/marketing.webp";
import deepSales from "@/assets/images/deep-research/sales.webp";
import deepProduct from "@/assets/images/deep-research/product.webp";
import deepHr from "@/assets/images/deep-research/hr.webp";
import observabilityHero from "@/assets/images/observability/hero.webp";
import observabilityTools from "@/assets/images/observability/ai-tool-in-use.webp";
import observabilityShadow from "@/assets/images/observability/uncover-shadow-ai.webp";
import observabilityAttribute from "@/assets/images/observability/attribute-usage.webp";
import observabilityLeaks from "@/assets/images/observability/prevent-data-leaks.webp";
import observabilityInsights from "@/assets/images/observability/get-insights.webp";
import observabilityUsage from "@/assets/images/observability/usage.webp";
import observabilityPerformance from "@/assets/images/observability/performance.webp";
import observabilityCosts from "@/assets/images/observability/costs.webp";
import observabilityLogs from "@/assets/images/observability/logs.webp";
import observabilityExploreOrg from "@/assets/images/observability/explore-organisation.webp";
import observabilityExploreSecurity from "@/assets/images/observability/explore-security.webp";
import observabilityExploreAdoption from "@/assets/images/observability/explore-adoption.webp";
import observabilityExploreKnowledge from "@/assets/images/observability/explore-knowledge.webp";
import euHeroXl from "@/assets/images/eu/eu-data-residency-hero-xl.svg";
import euHeroXs from "@/assets/images/eu/eu-data-residency-hero-xs.svg";
import euApiUrl from "@/assets/images/eu/eu-data-api-url.svg";
import euGovernance from "@/assets/images/eu/eu-secure-ai-governance.webp";
import euResidencyBadge from "@/assets/images/eu/badge-data-residency.svg";

export const integrationShots = {
  hero: integrationsHero,
  apps: nexosIntegrationApps,
  select: integrationsSelect,
  chat: chatIntegration,
  secure: secureFiles,
  files: integrationsFiles,
} as const satisfies Record<string, StaticImageData>;

export const messagingShots = {
  hero: messagingHero,
  connected: messagingConnected,
  brain: messagingBrain,
  memory: messagingMemory,
  formats: messagingFormats,
  sales: messagingSales,
  marketing: messagingMarketing,
  hr: messagingHr,
  ops: messagingOps,
  role: messagingRole,
} as const satisfies Record<string, StaticImageData>;

export const extensionShots = {
  hero: extensionHeroShot,
  models: extensionModels,
  assistant: extensionAssistant,
  walkthrough: extensionWalkthrough,
} as const satisfies Record<string, StaticImageData>;

export const deepResearchShots = {
  hero: deepResearchHero,
  saveTime: deepSaveTime,
  chooseModel: deepChooseModel,
  insights: deepInsights,
  marketing: deepMarketing,
  sales: deepSales,
  product: deepProduct,
  hr: deepHr,
} as const satisfies Record<string, StaticImageData>;

export const observabilityShots = {
  hero: observabilityHero,
  tools: observabilityTools,
  shadow: observabilityShadow,
  attribute: observabilityAttribute,
  leaks: observabilityLeaks,
  insights: observabilityInsights,
  usage: observabilityUsage,
  performance: observabilityPerformance,
  costs: observabilityCosts,
  logs: observabilityLogs,
  exploreOrg: observabilityExploreOrg,
  exploreSecurity: observabilityExploreSecurity,
  exploreAdoption: observabilityExploreAdoption,
  exploreKnowledge: observabilityExploreKnowledge,
} as const satisfies Record<string, StaticImageData>;

export const euShots = {
  heroXl: euHeroXl,
  heroXs: euHeroXs,
  apiUrl: euApiUrl,
  governance: euGovernance,
  badge: euResidencyBadge,
} as const satisfies Record<string, string | StaticImageData>;
