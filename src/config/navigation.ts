import { navGraphics } from "@/assets/nav";
import type {
  FeaturedPanel,
  FooterNavGroup,
  NavigationCta,
  NavigationGroup,
  NavigationItem,
} from "@/types/navigation";

const productsForAnyone: NavigationItem[] = [
  {
    id: "workspace",
    label: "Workspace",
    href: "/ai-workspace-for-multiple-llms",
    featured: true,
    description:
      "Access 200+ top AI models in one secure, centralized interface",
  },
  {
    id: "ai-agents",
    label: "AI Agents",
    href: "/features/ai-agents",
  },
  {
    id: "agent-builder",
    label: "Agent Builder",
    href: "/ai-agent-builder",
  },
  {
    id: "chat",
    label: "Chat",
    href: "/features/ai-chat",
  },
  {
    id: "compare-models",
    label: "Compare Models",
    href: "/features/compare-ai-models",
  },
  {
    id: "ai-integrations",
    label: "AI Integrations",
    href: "/features/ai-integrations",
  },
  {
    id: "messaging-apps",
    label: "Messaging Apps",
    href: "/features/messaging-apps",
  },
  {
    id: "browser-extension",
    label: "Browser Extension",
    href: "/features/browser-extension",
  },
  {
    id: "deep-research",
    label: "Deep Research",
    href: "/features/deep-research",
  },
];

const productsForDevelopers: NavigationItem[] = [
  {
    id: "ai-gateway",
    label: "AI Gateway",
    href: "/ai-gateway",
    featured: true,
    description:
      "One secure endpoint to access, route, and manage 200+ AI models.",
  },
  {
    id: "llm-caching",
    label: "LLM caching",
    href: "/features/llm-caching",
  },
  {
    id: "smart-llm-routing",
    label: "Smart LLM routing",
    href: "/features/smart-llm-routing",
  },
  {
    id: "observability",
    label: "Observability",
    href: "/features/llm-observability",
  },
  {
    id: "eu-data-residency",
    label: "EU data residency",
    href: "/eu-gateway",
  },
];

const productGroups: NavigationGroup[] = [
  {
    id: "for-anyone",
    label: "For anyone",
    items: productsForAnyone,
  },
  {
    id: "for-developers",
    label: "For developers",
    items: productsForDevelopers,
  },
];

const resourcesLinks: NavigationItem[] = [
  { id: "blog", label: "Blog", href: "/blog" },
  { id: "customer-stories", label: "Customer stories", href: "/customer-stories" },
  { id: "partnerships", label: "Partnerships", href: "/partnerships" },
  { id: "reviews", label: "Reviews", href: "/reviews" },
];

const resourcesFeaturedPanel: FeaturedPanel = {
  id: "featured-story",
  title: "Payhawk",
  href: "/customer-stories/payhawk",
  ctaLabel: "Read the full success story",
  image: navGraphics.payhawkStory,
  imageAlt: "Payhawk",
};

export const headerNavigation: NavigationItem[] = [
  {
    id: "products",
    label: "Products",
    groups: productGroups,
  },
  {
    id: "resources",
    label: "Resources",
    children: resourcesLinks,
    featuredPanel: resourcesFeaturedPanel,
  },
  {
    id: "models",
    label: "Models",
    href: "/models",
  },
  {
    id: "home",
    label: "Home",
    href: "/",
  },
  {
    id: "pricing",
    label: "Pricing",
    href: "/pricing",
  },
];

export const headerCtas: NavigationCta[] = [
  {
    id: "talk-to-sales",
    label: "Talk to sales",
    href: "/contact-sales",
    variant: "outline",
  },
  {
    id: "get-started",
    label: "Get started",
    href: "/pricing",
    variant: "primary",
  },
];

export const footerNavigation: FooterNavGroup[] = [
  {
    id: "company",
    title: "Company",
    items: [
      { id: "pricing", label: "Pricing", href: "/pricing" },
      { id: "blog", label: "Blog", href: "/blog" },
      { id: "customer-stories", label: "Customer stories", href: "/customer-stories" },
      { id: "partnerships", label: "Partnerships", href: "/partnerships" },
      { id: "reviews", label: "Reviews", href: "/reviews" },
    ],
  },
  {
    id: "workspace",
    title: "Workspace",
    items: [
      { id: "ai-workspace", label: "AI workspace", href: "/ai-workspace-for-multiple-llms" },
      { id: "no-code-agents", label: "No code Agents", href: "/features/ai-agents" },
      { id: "agent-builder", label: "Agent Builder", href: "/ai-agent-builder" },
      { id: "chat", label: "Chat", href: "/features/ai-chat" },
      { id: "compare-models", label: "Compare Models", href: "/features/compare-ai-models" },
      { id: "ai-integrations", label: "AI Integrations", href: "/features/ai-integrations" },
      { id: "messaging-apps", label: "Messaging Apps", href: "/features/messaging-apps" },
      { id: "browser-extension", label: "Browser Extension", href: "/features/browser-extension" },
    ],
  },
  {
    id: "gateway",
    title: "Gateway",
    items: [
      { id: "ai-gateway", label: "AI Gateway", href: "/ai-gateway" },
      { id: "observability", label: "Observability", href: "/features/llm-observability" },
      { id: "eu-data-residency", label: "EU data residency", href: "/eu-gateway" },
      { id: "smart-llm-routing", label: "Smart LLM routing", href: "/features/smart-llm-routing" },
      { id: "llm-caching", label: "LLM Caching", href: "/features/llm-caching" },
    ],
  },
];

export const footerLegal: NavigationItem[] = [
  { id: "terms", label: "Terms of use", href: "/legal/terms-of-use" },
  { id: "privacy", label: "Privacy policy", href: "/legal/privacy-policy" },
  { id: "cookies", label: "Cookie policy", href: "/legal/cookie-policy" },
  { id: "security", label: "Security practices", href: "/security-practices" },
];
