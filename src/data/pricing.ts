import { salesMailto } from "@/config/contact";
import { checkoutHref } from "@/data/checkout";
import { siteConfig } from "@/config/site";
import { faqParagraphs } from "@/data/products/shared";
import type { ProductFaqItem, RichSegment } from "@/data/products/types";

function docsHref(path: string) {
  const base = siteConfig.docsUrl.replace(/\/$/, "");
  return `${base}/${path.replace(/^\//, "")}`;
}

export const pricingMeta = {
  title: "Pricing plans — Get your subscription",
  description:
    "Choose from 3 pricing plans. Find the right NexEco AI subscription for you or book an intro with our team to discuss a custom quote based on your needs.",
};

export type PricingTabId = "gateway" | "workspace";

export const pricingTabs = [
  { id: "gateway" as const, label: "AI Gateway", hash: "" },
  { id: "workspace" as const, label: "AI Workspace", hash: "#ai-workspace" },
];

export const pricingCtas = {
  getStarted: { label: "Get started", href: checkoutHref("gateway", "payg") },
  getNexos: { label: "Get NexEco AI", href: checkoutHref("workspace", "month") },
  talkEngineer: { label: "Talk to Solutions Engineer", href: salesMailto },
  talkSales: { label: "Talk to sales", href: salesMailto },
  customPricing: { label: "Custom pricing", href: salesMailto },
};

export const pricingHero = {
  gateway: {
    heading: "Stop overspending on AI and get real value",
    headingLines: ["Stop overspending on AI", "and get real value"] as const,
  },
  workspace: {
    heading: "One subscription instead of multiple AI tools",
    headingLines: ["One subscription", "instead of multiple AI tools"] as const,
    modelAlt: "AI model logos: OpenAI, Anthropic, Meta, Google Gemini, and more",
  },
};

export type PricingFeatureItem = {
  icon: string;
  label: string;
};

export type PricingPlanCard = {
  id: string;
  name: string;
  description: string;
  highlight: boolean;
  cta: { label: string; href: string };
  detailsLabel: string;
  features: PricingFeatureItem[];
  /** Links to checkout catalog item and renders a token slider. */
  catalogItemId?: string;
  price?: {
    amount: string;
    period: string;
    renews: string;
  };
  guarantee?: string;
  note?: { text: string; linkLabel: string; href: string };
};

export const gatewayPlans: PricingPlanCard[] = [
  {
    id: "payg",
    name: "Pay-as-you-go",
    description: "For developers building AI products",
    highlight: true,
    catalogItemId: "gateway-tokens",
    cta: pricingCtas.getStarted,
    detailsLabel: "Plan details:",
    features: [
      { icon: "percent", label: "Provider LLM rates + 5% platform fee when purchasing credits" },
      { icon: "piggy", label: "Top up from 10,000 tokens — no monthly minimum" },
      { icon: "chip", label: "Access all major LLM models" },
      { icon: "rotate", label: "Intelligent routing and caching" },
      { icon: "star", label: "Unified API access" },
      { icon: "chart", label: "Usage & cost observability" },
      { icon: "sliders", label: "AI cost control" },
      { icon: "list", label: "Unified billing" },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Built for enterprise AI adoption",
    highlight: false,
    cta: pricingCtas.talkEngineer,
    detailsLabel: "Everything in Pay-as-you-go, plus:",
    features: [
      { icon: "list", label: "Custom pricing & invoicing" },
      { icon: "shield", label: "Enterprise security & governance" },
      { icon: "gear", label: "Dedicated rate limits & SLAs" },
      { icon: "headset", label: "Dedicated support" },
    ],
  },
];

export const workspacePlans: PricingPlanCard[] = [
  {
    id: "month",
    name: "1-month plan",
    description: "For individuals and teams — billed by token usage",
    highlight: true,
    catalogItemId: "workspace-subscription",
    cta: pricingCtas.getNexos,
    detailsLabel: "",
    guarantee: "14-day money-back guarantee",
    features: [
      { icon: "agents", label: "Unlimited AI Agents" },
      { icon: "chip-alt", label: "200+ Top AI models" },
      { icon: "credits", label: "Flexible token allocation" },
      { icon: "star", label: "Bonus credits" },
      { icon: "connect", label: "Connect AI to your work tools" },
      { icon: "slides", label: "AI slides, AI files, AI charts, and more" },
    ],
    note: {
      text: "Model limitations may apply.",
      linkLabel: "Read more.",
      href: docsHref("models/limitations"),
    },
  },
  {
    id: "custom",
    name: "Custom plan",
    description: "Scale secure AI adoption for teams of 50+",
    highlight: false,
    cta: pricingCtas.talkSales,
    detailsLabel: "",
    price: {
      amount: "Enterprise",
      period: "",
      renews: "",
    },
    features: [
      { icon: "shield", label: "Tailored security" },
      { icon: "trend", label: "Usage tracking" },
      { icon: "key", label: "SSO" },
      { icon: "headset", label: "Dedicated support for large companies." },
    ],
  },
];

export type GatewayCompareKind = "check" | "x" | "text" | "link" | "payments";

export type GatewayCompareCell = {
  kind: GatewayCompareKind;
  value?: string;
  href?: string;
};

export type GatewayCompareRow = {
  label: string;
  badge?: string;
  payg: GatewayCompareCell;
  enterprise: GatewayCompareCell;
};

export const gatewayCompare = {
  heading: "Compare plans",
  columns: [
    { id: "payg", name: "Pay-as-you-go", description: "For developers building AI products" },
    { id: "enterprise", name: "Enterprise", description: "Built for enterprise AI adoption" },
  ],
  rows: [
    { label: "Platform fee", payg: { kind: "text", value: "5%" }, enterprise: { kind: "link", value: "Custom pricing", href: salesMailto } },
    { label: "Available models", payg: { kind: "text", value: "200+" }, enterprise: { kind: "text", value: "200+" } },
    { label: "Unified API access", payg: { kind: "check" }, enterprise: { kind: "check" } },
    { label: "EU-data residency", payg: { kind: "check" }, enterprise: { kind: "check" } },
    { label: "Bring your own API keys (BYOK)", badge: "Coming soon", payg: { kind: "check" }, enterprise: { kind: "check" } },
    { label: "Smart-routing", payg: { kind: "check" }, enterprise: { kind: "check" } },
    { label: "Prompt caching", payg: { kind: "check" }, enterprise: { kind: "check" } },
    { label: "AI cost controls", payg: { kind: "check" }, enterprise: { kind: "check" } },
    { label: "Budgets & hard caps", payg: { kind: "check" }, enterprise: { kind: "check" } },
    { label: "API key management", payg: { kind: "check" }, enterprise: { kind: "check" } },
    { label: "Admin controls", payg: { kind: "check" }, enterprise: { kind: "check" } },
    { label: "Usage & cost observability", payg: { kind: "check" }, enterprise: { kind: "check" } },
    { label: "Enterprise policy enforcement", payg: { kind: "check" }, enterprise: { kind: "check" } },
    { label: "Context compression", payg: { kind: "check" }, enterprise: { kind: "check" } },
    { label: "RAG", payg: { kind: "check" }, enterprise: { kind: "check" } },
    { label: "SSO/SAML", payg: { kind: "x" }, enterprise: { kind: "check" } },
    { label: "RBAC", payg: { kind: "x" }, enterprise: { kind: "check" } },
    { label: "Audit logs", payg: { kind: "x" }, enterprise: { kind: "check" } },
    { label: "Enterprise SLAs", payg: { kind: "x" }, enterprise: { kind: "check" } },
    { label: "Rate limits", payg: { kind: "text", value: "High" }, enterprise: { kind: "text", value: "Dedicated (optional)" } },
    { label: "Billing options", payg: { kind: "payments" }, enterprise: { kind: "text", value: "Invoicing" } },
    { label: "Minimum commitment", payg: { kind: "text", value: "None" }, enterprise: { kind: "text", value: "Custom" } },
    { label: "Support", payg: { kind: "text", value: "Chat via platform, email" }, enterprise: { kind: "text", value: "Dedicated support" } },
  ] satisfies GatewayCompareRow[],
};

function answer(text: string, extras?: RichSegment[][]): ProductFaqItem["answer"] {
  const base = faqParagraphs(text);
  return extras ? [...base, ...extras] : base;
}

export const gatewayFaq = {
  heading: "FAQ",
  tabs: [
    {
      id: "plans",
      label: "Plans & pricing",
      items: [
        {
          id: "fee",
          question: "How does the 5% platform fee work?",
          answer: answer(
            "The platform fee is added on top of the AI model provider's pricing. For example, if a model costs $10 per 1M tokens, you'll pay $10.50 per 1M tokens through NexEco AI. The fee includes access to AI Gateway features such as smart routing, prompt caching, AI spend controls, observability, API key management, and enterprise-grade security.",
          ),
        },
        {
          id: "payg-vs-ent",
          question: "What's the difference between Pay-as-you-go and Enterprise?",
          answer: answer(
            "NexEco AI Pay-as-you-go is designed for developers and growing teams who want to start building immediately. Enterprise adds governance features such as SSO/SAML, RBAC, audit logs, policy enforcement, dedicated support, and custom commercial terms.",
          ),
        },
        {
          id: "minimum",
          question: "Is there a minimum spend on AI usage?",
          answer: answer(
            "There's no monthly minimum and no long-term commitment. The only minimum is a 10,000-token top-up to add credits to your account and you then draw from that balance as you use AI models, plus the platform fee.",
          ),
        },
        {
          id: "upgrade",
          question: "Can I upgrade to Enterprise later?",
          answer: answer(
            "Yes. Most NexEco AI customers start with Pay-as-you-go and upgrade when they need organization-wide governance, dedicated support, or advanced security features.",
          ),
        },
        {
          id: "payments",
          question: "Which payment methods does NexEco AI support?",
          answer: answer(
            "NexEco AI Pay-as-you-go supports credit cards, Apple Pay, and Google Pay. Enterprise customers can pay by invoice.",
          ),
        },
      ] satisfies ProductFaqItem[],
    },
    {
      id: "platform",
      label: "Platform & security",
      items: [
        {
          id: "costs",
          question: "How does AI Gateway reduce AI costs?",
          answer: answer(
            "AI Gateway automatically routes requests to the most appropriate model, helping avoid paying frontier-model prices for every request. Combined with prompt caching, budgets, and observability, it helps maximize the value of every AI dollar.",
          ),
        },
        {
          id: "models",
          question: "Which AI models can I access?",
          answer: answer(
            "Access 200+ AI models from leading providers through one OpenAI-compatible API. New models become available as soon as they're supported.",
          ),
        },
        {
          id: "byok",
          question: "Can I bring my own API keys?",
          answer: answer(
            "Yes. You can connect your existing API keys from supported AI providers while managing usage, routing, and security through a single gateway.",
          ),
        },
        {
          id: "vs-direct",
          question: "How is AI Gateway different from using AI providers directly?",
          answer: answer(
            "Instead of integrating multiple providers individually, AI Gateway gives you one API, centralized AI cost controls, intelligent routing, governance, observability, and access to 200+ models through a single platform.",
          ),
        },
        {
          id: "data",
          question: "Where is my data stored?",
          answer: answer(
            "NexEco AI is hosted in Europe and supports EU data residency. Your data is never used to train third-party AI models, and Enterprise customers can apply additional governance policies.",
          ),
        },
      ] satisfies ProductFaqItem[],
    },
  ],
};

export const workspaceIntegrations = {
  heading: "Integrations",
};

export const workspaceCredits = {
  heading: "Your tokens power your daily AI work",
  body: "Tokens let you run top AI models, AI Agents, and automate repetitive tasks — choose how many you need.",
  cta: pricingCtas.getNexos,
  bullets: [
    { icon: "search", label: "Get competitor and market research done in minutes" },
    { icon: "files", label: "Turn ideas into slides, reports, and download-ready documents" },
    { icon: "megaphone", label: "Create content for social media, email, and marketing campaigns with a plain text prompt" },
    { icon: "agents", label: "Let custom no-code AI agents handle repetitive tasks" },
  ],
};

export const workspaceWork = {
  heading: "Turn repetitive work into AI work",
  body: "Use AI to handle repetitive tasks while you or your team focuses on higher-impact tasks.",
  items: [
    {
      id: "slides",
      title: "Create slides",
      body: "Turn ideas into polished presentations in minutes.",
      icon: "slides",
      iconBg: "#feeeec",
      iconColor: "#e07450",
    },
    {
      id: "files",
      title: "Generate files",
      body: "Let AI analyze raw data and create documents, spreadsheets, and reports instantly.",
      icon: "files",
      iconBg: "#c0d8fa",
      iconColor: "#2560b3",
    },
    {
      id: "brief",
      title: "Get your daily brief",
      body: "Wake up to AI-generated updates from Slack, Gmail, and Calendar.",
      icon: "brief",
      iconBg: "#e3fcec",
      iconColor: "#0c7e67",
    },
    {
      id: "research",
      title: "Research competitors",
      body: "Track companies, trends, and market changes automatically.",
      icon: "search",
      iconBg: "#d9e0ff",
      iconColor: "#6b3eff",
    },
    {
      id: "draft",
      title: "Draft content",
      body: "Generate posts, emails, and marketing content faster.",
      icon: "draft",
      iconBg: "#c6f3ee",
      iconColor: "#0c7e67",
    },
    {
      id: "meetings",
      title: "Summarize meetings",
      body: "Turn meeting notes into clear action items and reports.",
      icon: "meetings",
      iconBg: "#d4f0ff",
      iconColor: "#196087",
    },
  ],
};

export type ToolCompareKind = "check-accent" | "check-muted" | "x" | "text";

export type ToolCompareCell = {
  kind: ToolCompareKind;
  value?: string;
  icons?: "models" | "tools";
};

export const workspaceToolCompare = {
  headingBefore: "Compare ",
  headingAccent: "NexEco AI",
  headingAfter: " with other AI tools",
  body: "Instead of using separate tools for AI chat, research, and automations, NexEco AI brings everything together in one platform. Compare how NexEco AI stacks up against popular AI tools below.",
  columns: [
    { id: "nexeco", label: "NexEco AI" },
    { id: "chatgpt", label: "Chat GPT" },
    { id: "perplexity", label: "Perplexity" },
    { id: "lindy", label: "Lindy" },
  ],
  rows: [
    {
      label: "Work with top AI models in one place",
      icons: "models" as const,
      cells: [
        { kind: "check-accent" },
        { kind: "text", value: "Chat GPT only" },
        { kind: "text", value: "Limited" },
        { kind: "text", value: "Limited" },
      ] satisfies ToolCompareCell[],
    },
    {
      label: "One subscription instead of multiple AI tools",
      cells: [
        { kind: "check-accent" },
        { kind: "x" },
        { kind: "x" },
        { kind: "x" },
      ] satisfies ToolCompareCell[],
    },
    {
      label: "Compare answers from top AI models side-by-side",
      cells: [
        { kind: "check-accent" },
        { kind: "x" },
        { kind: "x" },
        { kind: "x" },
      ] satisfies ToolCompareCell[],
    },
    {
      label: "AI research across the web with citations and sources",
      cells: [
        { kind: "check-accent" },
        { kind: "check-muted" },
        { kind: "check-muted" },
        { kind: "x" },
      ] satisfies ToolCompareCell[],
    },
    {
      label: "Build AI Agents that run repetitive work automatically",
      cells: [
        { kind: "check-accent" },
        { kind: "text", value: "Limited" },
        { kind: "text", value: "Limited" },
        { kind: "check-muted" },
      ] satisfies ToolCompareCell[],
    },
    {
      label: "Connect your everyday work tools",
      icons: "tools" as const,
      cells: [
        { kind: "check-accent" },
        { kind: "check-muted" },
        { kind: "check-muted" },
        { kind: "check-muted" },
      ] satisfies ToolCompareCell[],
    },
    {
      label: "Switch between top AI models instantly",
      cells: [
        { kind: "check-accent" },
        { kind: "x" },
        { kind: "text", value: "Limited" },
        { kind: "text", value: "Limited" },
      ] satisfies ToolCompareCell[],
    },
    {
      label: "AI that works across your tools, not just chat",
      cells: [
        { kind: "check-accent" },
        { kind: "text", value: "Limited" },
        { kind: "text", value: "Limited" },
        { kind: "check-muted" },
      ] satisfies ToolCompareCell[],
    },
    {
      label: "Your data is not used to train AI models",
      cells: [
        { kind: "check-accent" },
        { kind: "text", value: "Partial" },
        { kind: "text", value: "Partial" },
        { kind: "check-muted" },
      ] satisfies ToolCompareCell[],
    },
    {
      label: "Zero data retention",
      cells: [
        { kind: "check-accent" },
        { kind: "text", value: "Partial" },
        { kind: "text", value: "Partial" },
        { kind: "text", value: "Partial" },
      ] satisfies ToolCompareCell[],
    },
    {
      label: "Best for",
      cells: [
        { kind: "text", value: "Replacing multiple AI tools with one platform" },
        { kind: "text", value: "AI conversations" },
        { kind: "text", value: "AI-powered search" },
        { kind: "text", value: "Workflow automation" },
      ] satisfies ToolCompareCell[],
    },
  ],
};

export const workspaceSecurity = {
  eyebrow: "Protecting your data",
  heading: "Your data is always secure",
  cards: [
    {
      id: "no-training",
      title: "Your data is not used for model training",
      body: "Your data stays your data, never used for model training by default. Encryption at rest and in transit by default.",
      icon: "file-shield" as const,
    },
    {
      id: "sso",
      title: "SSO and access control",
      body: "SSO and role‑based controls for sensitive information.",
      icon: "key" as const,
    },
    {
      id: "europe",
      title: "Hosted in Europe",
      body: "NexEco AI platform is hosted in Europe - as are most of the available models.",
      icon: "cloud" as const,
    },
  ],
  compliance: {
    title: "Compliance",
    body: "Compliant with ISO, SOC 2 Type 1 and GDPR.",
  },
};

export const workspaceTestimonials = {
  eyebrow: "Customer stories",
  heading: "Trusted by leading teams",
  slides: [
    {
      id: "vytautas",
      portrait: "vytautas" as const,
      badge: "Marketing",
      badgeTone: "mint" as const,
      name: "Vytautas Romeika",
      role: "CMO",
      company: "Pigu.lt",
      quote:
        "“Our content team needed to optimize 4 million products in our catalog – that’s a lot. And to do it by hand would take 3 years and cost us millions of euros. That’s extremely expensive. With NexEco AI, optimizing one item is 99.8% cheaper than doing it manually.”",
    },
    {
      id: "ilma",
      portrait: "ilma" as const,
      badge: "Marketing",
      badgeTone: "mint" as const,
      name: "Ilma Vienažindytė",
      role: "Head of Communication",
      company: "NordVPN",
      quote:
        "“Using NexEco AI has helped us save time and energy by making such everyday processes as article research, idea generation, and target audience segment classification faster and more efficient. With the help of agents customized for every product we work with, we can now perform content review and implement suggested changes in no time.”",
    },
    {
      id: "juras",
      portrait: "juras" as const,
      badge: "Operations",
      badgeTone: "violet" as const,
      name: "Juras Juršėnas",
      role: "COO",
      company: "Oxylabs",
      quote:
        "“NexEco AI has significantly accelerated our AI transformation journey. With seamless access to the latest models and transparent cost management, we’ve gained both agility and clarity.”",
    },
    {
      id: "boyko",
      portrait: "boyko" as const,
      badge: "Operations",
      badgeTone: "violet" as const,
      name: "Boyko Karadzhov",
      role: "CO-Founder and CTO",
      company: "Payhawk",
      quote:
        "“Teams were exploring AI independently: great for innovation, but terrible for coordination, compliance, and budget. We needed a centralized platform that maintained security and let all teams benefit from AI at the same time.”",
    },
    {
      id: "lauryna",
      portrait: "lauryna" as const,
      badge: "HR / People",
      badgeTone: "mint" as const,
      name: "Lauryna Girėnienė",
      role: "Head of Talent Acquisition",
      company: "Nord Security",
      quote:
        "“NexEco AI saves us 10+ hours each week. We created a custom Agent that analyzes, evaluates, and writes feedback for candidates based on objective metrics. Now, we find high-quality talent in minutes and don’t waste hours writing feedback from scratch.”",
    },
    {
      id: "vismantas",
      portrait: "vismantas" as const,
      badge: "Sales",
      badgeTone: "mint" as const,
      name: "Vismantas Balčius",
      role: "Outbound Sales Lead",
      company: "Nord Security",
      quote:
        "“Account verification and research used to take hours. We built an Agent to automate the process from start to finish. It handles deep account analysis and data cleanup for us, so we can jump straight into conversations with potential clients.”",
    },
    {
      id: "giedre",
      portrait: "giedre" as const,
      badge: "Legal",
      badgeTone: "violet" as const,
      name: "Giedrė Šteinė",
      role: "Legal Operations Lead",
      company: "Nord Security",
      quote:
        "“We built an AI agent to answer routine legal questions using our internal knowledge and policies. AI fully manages employee FAQs so our legal team can focus on high-value, strategic work.”",
    },
    {
      id: "dainius",
      portrait: "dainius" as const,
      badge: "Product",
      badgeTone: "violet" as const,
      name: "Dainius Kavoliūnas",
      role: "Head of Product",
      company: "Hostinger Horizons",
      quote:
        "“Integrating NexEco AI was seamless. It saved us the equivalent of two yearly salaries in development cost.”",
    },
    {
      id: "romas",
      portrait: "romas" as const,
      badge: "QA",
      badgeTone: "mint" as const,
      name: "Romas Strabeika",
      role: "CIO and Head of IT",
      company: "Pigu.lt",
      quote:
        "“NexEco AI transformed the core of our e-commerce operations. What would have taken us three years and millions of euros to accomplish manually, we achieved in just six weeks at a fraction of the cost.”",
    },
  ],
};

export const workspaceFaq = {
  heading: "FAQ",
  tabs: [
    {
      id: "plans",
      label: "Plans & features",
      items: [
        {
          id: "cost",
          question: "How much does NexEco AI cost?",
          answer: answer(
            "NexEco AI offers flexible monthly and annual plans for individuals and teams. Pricing depends on the plan you choose, with annual plans offering the best value. Enterprise pricing is customized based on your organization's needs.",
          ),
        },
        {
          id: "difference",
          question: "What's the difference between NexEco AI plans?",
          answer: answer(
            "NexEco AI 1-month and 12-month plans are perfect for individuals and small teams who want daily access to top AI models, custom Agent builder, and our extensive template library. Our Enterprise plan includes everything in the standard plans, plus enhanced security features, team management tools, and detailed analytics – ideal for secure, large-scale AI adoption.",
          ),
        },
        {
          id: "guarantee",
          question: "Does NexEco AI offer a money-back guarantee?",
          answer: answer("Yes. Every NexEco AI plan includes a 14-day money-back guarantee."),
        },
        {
          id: "enterprise",
          question: "Does NexEco AI offer custom enterprise plans?",
          answer: [
            [
              "Yes, NexEco AI offers flexible enterprise plans customized to meet your organization's needs. ",
              { href: salesMailto, label: "Talk to sales" },
              " to get a custom quote.",
            ],
          ],
        },
        {
          id: "users",
          question: "How many users are supported on each subscription plan?",
          answer: answer(
            "Both our 1-month and 12-month NexEco AI plans work great for individuals or small to medium-sized teams. The Enterprise plan is designed specifically for larger organizations that need advanced management, security, and collaboration features. Reach out to our sales team to learn more about Enterprise plan options.",
          ),
        },
      ] satisfies ProductFaqItem[],
    },
    {
      id: "billing",
      label: "Billing & management",
      items: [
        {
          id: "methods",
          question: "What payment methods are accepted at NexEco AI?",
          answer: answer(
            "You can purchase NexEco AI using any major credit card. For Enterprise plans, please contact sales to discuss alternative payment options, such as invoicing.",
          ),
        },
        {
          id: "renew",
          question: "How can I renew my subscription?",
          answer: [
            [
              "You can easily renew your NexEco AI subscription in Billing. For Enterprise plans, contact your sales representative to renew. Check the NexEco AI Workspace Billing documentation for more details.",
            ],
          ],
        },
        {
          id: "frequency",
          question: "What’s the frequency of NexEco AI billing?",
          answer: answer(
            "You have the flexibility between monthly and annual billing cycles. Our annual plans offer discounts compared to monthly payments.",
          ),
        },
        {
          id: "cancel",
          question: "Can I cancel my NexEco AI subscription anytime?",
          answer: answer(
            "We value flexibility and your satisfaction. If you're unsatisfied with NexEco AI, you can cancel your plan within 14 days of purchase from the Billing section. For Enterprise plan users, contact your sales representative.",
          ),
        },
        {
          id: "support",
          question: "How can I get support regarding my subscription?",
          answer: [
            [
              "For any questions about your NexEco AI subscription, just email our support team at ",
              { href: "mailto:info@nexeco-ai.com", label: "info@nexeco-ai.com" },
              ".",
            ],
          ],
        },
      ] satisfies ProductFaqItem[],
    },
  ],
};

export const workspaceBottomCta = {
  heading: "Stop doing repetitive work manually",
  body: "Let AI Agents handle research, reports, outreach, slides, and daily tasks while your team focuses on bigger work.",
  primary: pricingCtas.getNexos,
  guarantee: "14-day money-back guarantee.",
};
