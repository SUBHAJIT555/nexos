import { siteConfig } from "@/config/site";
import type { ProductFaqItem, ProductLink, SecurityCard } from "@/data/products/types";

function docsHref(path: string) {
  const base = siteConfig.docsUrl.replace(/\/$/, "");
  return `${base}/${path.replace(/^\//, "")}`;
}

export const productDocs = {
  workspace: docsHref("workspace"),
  chat: docsHref("workspace/chat"),
  agents: docsHref("workspace/agents"),
  gateway: docsHref("gateway-api"),
  models: docsHref("gateway-api/models"),
  integrations: "/features/ai-integrations",
  trustCenter: "/trust-center",
};

export const workspaceSecurityCards: SecurityCard[] = [
  {
    id: "no-training",
    title: "No training on your data",
    body: "Your data stays yours. Your data will never be used to train AI models unless you explicitly allow it. You can also enable zero data retention at the LLM level.",
  },
  {
    id: "sso",
    title: "SSO and access control",
    body: "Your workspace is secured with SSO and RBAC to protect sensitive information.",
  },
  {
    id: "europe",
    title: "Hosted in Europe",
    body: "The NexEco AI platform and most of our available models are hosted in Europe. You can freely decide which LLM to use based on your preferences and compliance requirements.",
  },
  {
    id: "certified",
    title: "Fully certified and secure",
    body: "SOC 2 Type 2, ISO 42001 & 27001-certified. Fully compliant with the GDPR.",
  },
];

export const gatewaySecurityCards: SecurityCard[] = [
  workspaceSecurityCards[0],
  {
    id: "sso",
    title: "SSO and access control",
    body: "NexEco AI Gateway is secured with SSO and RBAC to protect sensitive information.",
  },
  workspaceSecurityCards[2],
  {
    id: "certified",
    title: "Fully certified and secure",
    body: "SOC 2 Type 2, ISO 27001 and ISO 42001-certified. Fully compliant with the GDPR. Check NexEco AI trust center for more information.",
  },
];

export const integrationsCopy = {
  eyebrow: "Integrations",
  heading: "Bring your knowledge with you",
  body: "Connect your AI platform to Slack, SharePoint, Google Drive, Confluence, and more. Let your Agents and Workflows work with real context, not generic prompts.",
  cta: {
    label: "Explore Integrations",
    href: productDocs.integrations,
  } satisfies ProductLink,
  tools: ["MS Teams", "Confluence", "Outlook", "Jira", "Slack", "Google Drive", "SharePoint"],
};

export const guaranteeLabel = "14-day money-back guarantee";

export function faqParagraphs(text: string): ProductFaqItem["answer"] {
  return text
    .split(/\n\n+/)
    .map((paragraph) => [paragraph.trim()])
    .filter((paragraph) => paragraph[0].length > 0);
}
