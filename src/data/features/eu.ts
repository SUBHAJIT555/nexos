import type { ProductFaqItem, ProductLink } from "@/data/products/types";

export const euHero = {
  heading: "Run the best AI models through EU-hosted infrastructure",
  bodyBeforeBreak: "One endpoint for Claude, GPT, Gemini and Mistral – EU-hosted gateway,",
  bodyAfterBreak: "zero data retention, one line of code.",
  primary: { label: "Talk to Solutions Engineer", href: "/contact-sales" } satisfies ProductLink,
  secondary: { label: "Get API access", href: "/pricing" } satisfies ProductLink,
};

export const euQuoteWords = [
  "You",
  "shouldn't",
  "have",
  "to",
  "choose",
  "between",
  "the",
  "best",
  "model",
  "and",
  "where",
  "your",
  "data",
  "lives.",
  "Building",
  "with",
  "AI",
  "shouldn't",
  "mean",
  "losing",
  "control",
  "of",
  "your",
  "data.",
  "Access",
  "the",
  "world's",
  "leading",
  "AI",
  "models",
  "through",
  "EU-hosted",
  "infrastructure",
  "designed",
  "to",
  "support",
  "security,",
  "governance,",
  "routing,",
  "failover",
  "and",
  "data",
  "protection,",
  "giving",
  "your",
  "teams",
  "greater",
  "control",
  "over",
  "every",
  "AI",
  "request.",
] as const;

export const euNeeds = {
  heading: "Everything compliance needs, everything developers want",
  cards: [
    {
      id: "inference",
      title: "EU-resident inference",
      body: "AI requests are processed through EU-hosted infrastructure.",
    },
    {
      id: "retention",
      title: "Zero data retention",
      body: "Supported models do not retain prompts or responses after delivery.",
    },
    {
      id: "sdk",
      title: "OpenAI SDK compatible",
      body: "Switch in minutes with minimal code changes.",
    },
    {
      id: "failover",
      title: "Automatic failover",
      body: "One provider goes down, traffic reroutes automatically.",
    },
  ],
};

export const euMigrate = {
  heading: "Migrate to EU infrastructure with one line of code",
  steps: [
    {
      n: "01",
      title: "Get your API key",
      body: "Sign up and generate your API key. Access leading AI models through a single EU-hosted endpoint with full usage visibility.",
    },
    {
      n: "02",
      title: "Swap one line of code",
      body: "Replace your existing OpenAI base URL. Your application starts routing through an EU-hosted AI Gateway in minutes.",
    },
    {
      n: "03",
      title: "Stay compliant",
      body: "Run AI workloads through EU-hosted infrastructure with zero data retention, helping simplify your organization's compliance requirements.",
    },
  ],
};

export const euWhy = {
  heading: "Why organizations are choosing EU-hosted AI infrastructure",
  lockIn: {
    title: "Avoid vendor lock-in",
    body: "Switch between leading models without the need to change your application. No longer will you need to play a game of whack-a-mole to avoid dependencies.",
  },
  governance: {
    title: "The EU is setting secure AI governance standards",
    body: "The EU AI Act has increased the focus on AI governance and responsible data handling. Many organizations choose EU-hosted infrastructure to strengthen data protection.",
  },
  europe: {
    title: "Keep AI data in Europe",
    body: "Process AI requests within European infrastructure to help protect sensitive data.",
  },
  control: {
    title: "Control your AI usage",
    body: "Set budget limits, gain visibility into AI usage across your organization, and control which AI models your teams can use.",
  },
};

export const euModels = {
  heading: "Every frontier model, fully EU-resident",
  cards: [
    {
      id: "anthropic",
      name: "Anthropic",
      models: "Claude Opus, Sonnet, Haiku & Fable on Vertex AI EU.",
      description:
        "Strong reasoning, coding and long-form writing, with the largest context windows in the lineup.",
    },
    {
      id: "openai",
      name: "OpenAI",
      models: "GPT-5, GPT-4.1 & GPT-4o on Azure EU.",
      description: "Broad general-purpose performance across text, code and multimodal tasks.",
    },
    {
      id: "gemini",
      name: "Google gemini AI",
      models: "Gemini 2.5 & Gemini 3.5 on Vertex AI EU.",
      description:
        "Native multimodal input and long-context retrieval, tightly integrated with Google Cloud.",
    },
    {
      id: "mistral",
      name: "Mistral",
      models: "Codestral, Devstral & Mistral models on Mistral AI EU.",
      description: "Lightweight, code-focused models built for speed and cost efficiency.",
    },
  ],
};

export type EuCompareIcon = "check" | "dash" | "x";

export type EuCompareCell = {
  icon: EuCompareIcon;
  text?: string;
};

export const euCompare = {
  headingBefore: "nexos.ai",
  headingAfter: " vs going direct",
  left: "nexos.ai",
  right: "Direct provider",
  footnote:
    "Features may differ depending on specific consumer's preferences or legal exceptions.",
  rows: [
    {
      label: "EU-region model access",
      nexos: { icon: "check" },
      direct: { icon: "dash", text: "Varies" },
    },
    {
      label: "Data retention",
      nexos: { icon: "check", text: "Zero retention (model dependent)" },
      direct: { icon: "dash", text: "Logs stored" },
    },
    {
      label: "Multiple AI providers",
      nexos: { icon: "check" },
      direct: { icon: "dash", text: "One" },
    },
    {
      label: "OpenAI compatible",
      nexos: { icon: "check" },
      direct: { icon: "x" },
    },
    {
      label: "Migration / set up",
      nexos: { icon: "check", text: "One-line code" },
      direct: { icon: "dash", text: "Separate SDKs" },
    },
    {
      label: "Contracts",
      nexos: { icon: "check", text: "One DPA" },
      direct: { icon: "dash", text: "One DPA per provider" },
    },
    {
      label: "Reliability",
      nexos: { icon: "check", text: "Automatic failover" },
      direct: { icon: "x", text: "Dependent on one provider" },
    },
    {
      label: "Cost optimization",
      nexos: { icon: "check", text: "Routing & caching" },
      direct: { icon: "x", text: "No cross-provider routing" },
    },
    {
      label: "Analytics",
      nexos: { icon: "check" },
      direct: { icon: "dash", text: "Separate dashboards" },
    },
  ] satisfies { label: string; nexos: EuCompareCell; direct: EuCompareCell }[],
};

export const euCta = {
  heading: "Compliance-ready, without compromise",
  body: "Keep your data in the EU without giving up the best models.",
  primary: { label: "Talk to Solutions Engineer", href: "/contact-sales" } satisfies ProductLink,
  secondary: { label: "Get API Key", href: "/pricing" } satisfies ProductLink,
};

export const euFaq: ProductFaqItem[] = [
  {
    id: "gdpr",
    question: "Is nexos.ai GDPR compliant?",
    answer: [
      [
        "Yes, nexos.ai platform is built to the highest security standards, ensuring your data is protected by enterprise-grade protocols. nexos.ai is fully GDPR-compliant.",
      ],
    ],
  },
  {
    id: "retain",
    question: "Does nexos.ai retain my data?",
    answer: [
      [
        "Supported models in nexos.ai can be used with zero data retention, and we never train on your data. Limited personal and operational data may be retained as described in our ",
        { href: "/legal/terms-of-use", label: "Terms of Use" },
        ".",
      ],
    ],
  },
  {
    id: "openai",
    question: "Is nexos.ai API OpenAI-compatible?",
    answer: [
      [
        "Yes. If you're already using an OpenAI-compatible SDK, migrating to nexos.ai typically requires only updating your base URL and API key.",
      ],
    ],
  },
  {
    id: "models",
    question: "Which AI models are available in nexos.ai?",
    answer: [
      [
        "Access Claude, GPT, Gemini, Mistral, and other leading AI models through a single OpenAI-compatible endpoint. Model availability in nexos.ai may vary by provider and deployment.",
      ],
    ],
  },
  {
    id: "gateway",
    question: "Why use a Gateway instead of going directly?",
    answer: [
      [
        "An ",
        { href: "/ai-gateway", label: "AI gateway" },
        " gives you access to multiple AI providers with built-in routing, caching, automatic failover, and centralized observability, without managing separate integrations.",
      ],
    ],
  },
  {
    id: "certs",
    question: "What security certifications do you hold?",
    answer: [
      [
        "nexos.ai holds SOC 2 Type II and ISO 27001 certifications, independently validating our security and operational controls.",
      ],
    ],
  },
];
