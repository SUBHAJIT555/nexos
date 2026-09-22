import { salesMailto } from "@/config/contact";
import { siteConfig } from "@/config/site";

function docsHref(path: string) {
  const base = siteConfig.docsUrl.replace(/\/$/, "");
  return `${base}/${path.replace(/^\//, "")}`;
}

export type HomepageLink = {
  label: string;
  href: string;
};

export type RichSegment = string | { href: string; label: string };

export const homepageHero = {
  badges: [
    { id: "eu-hosted", label: "EU HOSTED" },
    { id: "iso-27001", label: "ISO 27001" },
    { id: "iso-42001", label: "ISO 42001" },
    { id: "soc2", label: "SOC2 TYPE2" },
  ],
  headingLine1: "Get full visibility",
  headingBeforeAccent: "and control of ",
  headingAccent: "AI usage",
  subhead:
    "One AI platform to access 200+ LLMs, see every request, and optimize spend.",
  primaryCta: { label: "Get API key", href: "/pricing" },
  secondaryCta: { label: "Book a demo", href: salesMailto },
  platformLink: { label: "What is an AI platform?", href: "#ai-platform" },
} as const;

export const homepagePlatformDialog = {
  id: "ai-platform",
  heading: "What is an AI platform?",
  paragraphs: [
    "An AI platform is a unified environment used to access, build, and manage AI models, applications, and agents in one place. It combines model access, observability, governance and AI tools in one platform, so technical and business teams don’t have to manage separate providers, tools, and invoices.",
    "The NexEco AI platform covers both sides of the organization. Engineering teams access 200+ leading LLMs through one API endpoint, track usage and spend, and govern how AI is used. Business teams work with AI through Chat and Agents, from text generation and image creation to no-code AI agents, in one simple interface and with no separate subscription for each of your AI tools.",
  ],
} as const;

export const homepageTrustedBy = {
  caption: "Trusted by teams building and running AI in production",
} as const;

export const homepageProductTabs = {
  groups: [
    { id: "developers", label: "For developers" },
    { id: "business", label: "For business teams" },
  ],
  tabs: [
    {
      id: "ai-gateway",
      group: "developers",
      title: "AI Gateway",
      description:
        "Route all your LLM traffic through one API and switch models without changing your code.",
      cta: { label: "Explore AI Gateway", href: "/ai-gateway" },
      visual:
        "The NexEco AI model catalogue, listing available models with their provider, region and per-token price",
    },
    {
      id: "observability",
      group: "developers",
      title: "Observability",
      description:
        "See every LLM request, track model performance, and know exactly where your spend goes.",
      cta: { label: "Explore LLM observability", href: "/features/llm-observability" },
      visual:
        "The NexEco AI usage dashboard, charting total completions, token usage and error rates over time",
    },
    {
      id: "governance",
      group: "developers",
      title: "Governance & Control",
      description:
        "Control who can use which models, set budgets and usage limits, and manage permissions across your organization.",
      cta: { label: "Explore AI governance", href: "/features/ai-governance" },
      visual:
        "The NexEco AI API key management screen, showing per-user token budgets and limits",
    },
    {
      id: "workspace",
      group: "business",
      title: "AI Workspace",
      description:
        "Give every team one secure place to chat with leading AI models, connect their work tools, and build no-code AI agents.",
      cta: { label: "Explore AI Workspace", href: "/ai-workspace-for-multiple-llms" },
      visual:
        "The NexEco AI workspace, with a new chat open and the model picker listing Claude, GPT and Gemini",
    },
  ],
} as const;

export const homepageCost = {
  heading: "Reduce AI costs without giving up quality",
  body: "NexEco AI optimizes every request by routing it to the right model, reusing repeated context, and reducing unnecessary tokens while keeping the context that matters.",
  cards: [
    {
      id: "smart-routing",
      index: "01",
      title: "Smart Routing",
      beforeLink: "Route each request to the best model for quality and cost with ",
      link: { label: "Smart LLM routing", href: "/features/smart-llm-routing" },
      afterLink: ".",
      visual:
        "Diagram: a request is scored across candidate models and routed to the highest-scoring one",
    },
    {
      id: "llm-caching",
      index: "02",
      title: "LLM Caching",
      beforeLink: "Reuse repeated context to lower costs and speed up responses ",
      link: { label: "LLM Caching", href: "/features/llm-caching" },
      afterLink: ".",
      visual:
        "Chart: cost with and without caching over time, alongside total savings from the cache",
    },
    {
      id: "context-compression",
      index: "03",
      title: "Context compression",
      beforeLink:
        "Compress long inputs to keep only important information and send fewer tokens.",
      visual:
        "Diagram: a long prompt compressed to fewer tokens before it reaches the model",
    },
    {
      id: "fallbacks",
      index: "04",
      title: "Fallbacks & failovers",
      beforeLink: "Automatically reroute traffic when a provider slows or fails.",
      visual:
        "Diagram: the gateway routes around an unavailable primary model to a healthy fallback",
    },
  ],
} as const;

export const homepageSecurity = {
  heading: "Security and compliance, built in",
  body: "Run AI with enterprise-grade security, privacy, and compliance controls, designed to protect your data and meet organizational requirements.",
  cards: [
    {
      id: "eu-hosted",
      title: "EU-hosted",
      body: "Keep supported model requests and data within EU-hosted infrastructure.",
      icon: "cloud",
    },
    {
      id: "zero-retention",
      title: "Zero data retention",
      body: "Supported models don’t retain prompts or responses after delivery.",
      icon: "lock",
    },
    {
      id: "no-training",
      title: "No training on your data",
      body: "Your data stays yours and is never used to train AI models.",
      icon: "file",
    },
    {
      id: "sso",
      title: "SSO and access control",
      body: "Manage secure access across teams and projects with SSO/SAML and RBAC.",
      icon: "users",
    },
  ],
  badges: [
    { id: "gdpr", label: "GDPR" },
    { id: "soc2", label: "SOC 2" },
    { id: "iso-27001", label: "ISO 27001" },
    { id: "iso-42001", label: "ISO 42001" },
  ],
} as const;

export type IntegrationChip = {
  name: string;
  href?: string;
};

export const homepageIntegrations = {
  heading: "Works with the AI stack you already use",
  body: "Connect NexEco AI to the models, applications, coding agents, and work tools your teams already rely on, without replacing your existing AI stack.",
  groups: [
    {
      id: "coding",
      title: "Coding and AI Agents",
      accent: "#6b3eff",
      items: [
        { name: "Claude Code", href: docsHref("gateway-api/integrations/claude-code") },
        { name: "Cline" },
        { name: "Openbox" },
        { name: "OpenAI Codex", href: docsHref("gateway-api/integrations/codex-cli") },
        { name: "Kilo Code" },
        { name: "Opencode", href: docsHref("gateway-api/integrations/opencode") },
        { name: "Roo Code", href: docsHref("gateway-api/integrations/roo-code") },
      ] satisfies IntegrationChip[],
    },
    {
      id: "build",
      title: "Build and Automation Tools",
      accent: "#0c7e67",
      items: [
        { name: "n8n", href: docsHref("gateway-api/integrations/n8n") },
        { name: "Langfuse", href: docsHref("gateway-api/integrations/langfuse") },
        { name: "Braintrust" },
        { name: "LangGraph", href: docsHref("gateway-api/integrations/langgraph") },
        { name: "Zapier" },
        { name: "LangChain", href: docsHref("gateway-api/integrations/langchain") },
        { name: "Make" },
      ] satisfies IntegrationChip[],
    },
    {
      id: "models",
      title: "Models",
      accent: "#f35863",
      items: [
        { name: "Claude", href: docsHref("gateway-api/models") },
        { name: "Kimi", href: docsHref("gateway-api/models") },
        { name: "Grok", href: docsHref("gateway-api/models") },
        { name: "GPT", href: docsHref("gateway-api/models") },
        { name: "Qwen", href: docsHref("gateway-api/models") },
        { name: "GLM", href: docsHref("gateway-api/models") },
        { name: "Gemini", href: docsHref("gateway-api/models") },
        { name: "DeepSeek", href: docsHref("gateway-api/models") },
        { name: "Mistral", href: docsHref("gateway-api/models") },
      ] satisfies IntegrationChip[],
    },
    {
      id: "work",
      title: "Everyday work tools",
      accent: "#196087",
      items: [
        { name: "Slack", href: docsHref("workspace/integrations/slack") },
        { name: "Gmail", href: docsHref("workspace/integrations/google-mail") },
        { name: "SharePoint", href: docsHref("workspace/integrations/microsoft-sharepoint") },
        { name: "YouTube" },
        { name: "Jira" },
        { name: "Google Drive", href: docsHref("workspace/integrations/google-drive") },
        { name: "Figma" },
        { name: "Canva" },
        { name: "Confluence" },
        { name: "MS Teams", href: docsHref("workspace/integrations/microsoft-teams") },
        { name: "LinkedIn" },
      ] satisfies IntegrationChip[],
    },
  ],
} as const;

export const homepageTestimonials = {
  heading: "What leading teams say about us",
  featured: {
    name: "Marijus Briedis",
    role: "CTO @NordVPN",
    product: "AI Gateway",
    stat: "46%",
    statLabel: "Reduction in total LLM costs",
    quote:
      '"NexEco AI helped us reduce coding-agent LLM costs by 46% without changing our prompts, models, or developer workflows. The optimization was transparent to our engineers, while giving us much better visibility into AI usage and spend."',
    cta: { label: "Read customer story", href: "/customer-stories" },
  },
  items: [
    {
      id: "juras",
      name: "Juras Juršėnas",
      role: "COO",
      company: "Oxylabs",
      product: "AI Gateway",
      quote:
        "“NexEco AI has significantly accelerated our AI transformation journey. With seamless access to the latest models and transparent cost management, we’ve gained both agility and clarity.”",
    },
    {
      id: "dainius",
      name: "Dainius Kavoliūnas",
      role: "Head of Product",
      company: "Hostinger Horizons",
      product: "AI Gateway",
      quote:
        "“Integrating NexEco AI was seamless. It saved us the equivalent of two yearly salaries in development cost.”",
    },
    {
      id: "boyko",
      name: "Boyko Karadzhov",
      role: "Co-Founder and CTO",
      company: "Payhawk",
      product: "AI Gateway",
      quote:
        "“Teams were exploring AI independently: great for innovation, but terrible for coordination, compliance, and budget. We needed a centralized platform that maintained security and let all teams benefit from AI at the same time.”",
    },
    {
      id: "romas",
      name: "Romas Strabeika",
      role: "CIO and Head of IT",
      company: "Pigu.lt",
      product: "AI Gateway",
      quote:
        "“NexEco AI transformed the core of our e-commerce operations. What would have taken us three years and millions of euros to accomplish manually, we achieved in just six weeks at a fraction of the cost.”",
    },
    {
      id: "vytautas",
      name: "Vytautas Romeika",
      role: "CMO",
      company: "Pigu.lt",
      product: "AI Workspace",
      quote:
        "“Our content team needed to optimize 4 million products in our catalog – that’s a lot. And to do it by hand would take 3 years and cost us millions of euros. That’s extremely expensive. With NexEco AI, optimizing one item is 99.8% cheaper than doing it manually.”",
    },
    {
      id: "ilma",
      name: "Ilma Vienažindytė",
      role: "Head of Communication",
      company: "NordVPN",
      product: "AI Workspace",
      quote:
        "“Using NexEco AI has helped us save time and energy by making such everyday processes as article research, idea generation, and target audience segment classification faster and more efficient. With the help of Agents customized for every product we work with, we can now perform content review and implement suggested changes in no time.”",
    },
    {
      id: "vismantas",
      name: "Vismantas Balčius",
      role: "Outbound Sales Lead",
      company: "Nord Security",
      product: "AI Workspace",
      quote:
        "“Account verification and research used to take hours. We built an Agent to automate the process from start to finish. It handles deep account analysis and data cleanup for us, so we can jump straight into conversations with potential clients.”",
    },
    {
      id: "giedre",
      name: "Giedrė Šteinė",
      role: "Legal Operations Lead",
      company: "Nord Security",
      product: "AI Workspace",
      quote:
        "“We built an AI Agent to answer routine legal questions using our internal knowledge and policies. AI fully manages employee FAQs so our legal team can focus on high-value, strategic work.”",
    },
    {
      id: "lauryna",
      name: "Lauryna Girėnienė",
      role: "Head of Talent Acquisition",
      company: "Nord Security",
      product: "AI Workspace",
      quote:
        "“NexEco AI saves us 10+ hours each week. We created a custom Agent that analyzes, evaluates, and writes feedback for candidates based on objective metrics. Now, we find high-quality talent in minutes and don’t waste hours writing feedback from scratch.”",
    },
  ],
} as const;

export const homepageCta = {
  headingLine1: "Get complete visibility",
  headingLine2: "and control over AI",
  body: "Track LLM usage, manage spend, and stay in control across every team.",
  primaryCta: { label: "Get NexEco AI", href: "/pricing" },
  secondaryCta: { label: "Book a demo", href: salesMailto },
} as const;

export type FaqItem = {
  id: string;
  question: string;
  answer: RichSegment[][];
};

export const homepageFaq = {
  heading: "FAQ",
  tabs: [
    { id: "ai-platform", label: "AI Platform" },
    { id: "about", label: "About NexEco AI" },
    { id: "security", label: "Security" },
  ],
  items: {
    "ai-platform": [
      {
        id: "chatgpt",
        question: "What’s the difference between an AI platform and ChatGPT?",
        answer: [
          [
            "ChatGPT is a great personal assistant, but it often operates as a siloed chatbot, with disconnected context and tools. An AI platform like NexEco AI gives access to leading AI models, full visibility into LLM usage and spend, with centralized control in one place.",
          ],
        ],
      },
      {
        id: "choose",
        question:
          "What should I look for when choosing the best AI platform for my team?",
        answer: [
          [
            "When choosing the best AI platform for your team, look at how well it fits both your people and your AI infrastructure. It should connect with the tools your teams already use, provide access to leading AI models, and give you visibility and control over usage and spend.",
          ],
          [
            "For technical teams, consider one API across providers, model flexibility, budgets, and request-level visibility. For business teams, look for no-code agents and integrations that help automate everyday work.",
          ],
        ],
      },
      {
        id: "why",
        question: "Why do organizations need an AI platform?",
        answer: [
          [
            "An AI platform brings models, tools, providers, and AI usage under one layer, giving teams access to the AI they need while the organization maintains visibility and control over usage, access, and spend. As AI adoption grows, this makes it easier to manage complexity and scale AI across the organization.",
          ],
        ],
      },
    ],
    about: [
      {
        id: "what",
        question: "What is NexEco AI?",
        answer: [
          [
            "NexEco AI is an all-in-one AI platform that enables business teams to reach their full potential. We move beyond simple chat by allowing anyone to build custom, no-code AI Agents and automate complex Workflows from a single, unified interface. Check out recent ",
            { href: "/reviews", label: "NexEco AI reviews" },
            " to see what leading industry experts say about our AI platform.",
          ],
        ],
      },
      {
        id: "reduce-cost",
        question: "How does NexEco AI reduce cost?",
        answer: [
          [
            "NexEco AI reduces AI costs through Smart Routing, prompt caching, context compression, and spend controls. Requests can be routed to the right model based on task complexity, cost, quality, and performance, while caching and compression reduce unnecessary token usage and budgets and limits help keep spend under control.",
          ],
        ],
      },
      {
        id: "pricing",
        question: "How much does NexEco AI cost?",
        answer: [
          [
            "NexEco AI pricing depends on how you use the platform. AI Gateway is usage-based, while AI Chat and Agents are available on a monthly plan. Enterprise plans are customized based on your organization’s needs. See our ",
            { href: "/pricing", label: "pricing page" },
            " for current plans and rates.",
          ],
        ],
      },
      {
        id: "models",
        question: "What models can I use with NexEco AI?",
        answer: [
          [
            "NexEco AI gives you access to 200+ AI models from leading providers, including OpenAI, Anthropic, Google, Mistral, and more. Choose between frontier and open-weight models and switch models as your needs change, without being locked into a single provider.",
          ],
        ],
      },
      {
        id: "integrate",
        question: "How does NexEco AI integrate with existing applications?",
        answer: [
          [
            "NexEco AI works with the applications and tools your teams already use. Technical teams can connect existing applications, frameworks, and coding tools through one API, while business teams can connect AI Chat and Agents to workplace tools such as Google Workspace, SharePoint, and Slack.",
          ],
        ],
      },
      {
        id: "existing-deal",
        question: "What if I already have a deal with an LLM provider?",
        answer: [
          [
            "You can keep your existing provider agreements and use NexEco AI alongside them, without vendor lock-in. Route selected AI traffic through NexEco AI to access additional models, centralized observability and governance, and cost optimization without replacing your existing setup.",
          ],
        ],
      },
    ],
    security: [
      {
        id: "policies",
        question: "How does NexEco AI support internal security policies?",
        answer: [
          [
            "NexEco AI helps organizations enforce internal AI policies through centralized access controls, SSO/SAML, role-based permissions, and model access policies. Audit logs provide a record of AI activity for internal reviews and security assessments.",
          ],
        ],
      },
      {
        id: "compliant",
        question: "Is NexEco AI compliant and certified?",
        answer: [
          [
            "Yes. The NexEco AI AI platform is GDPR-compliant, and its infrastructure is SOC 2, ISO 27001, and ISO 42001 certified. EU-hosted infrastructure and Zero Data Retention are also available for supported models and use cases",
          ],
        ],
      },
    ],
  } satisfies Record<string, FaqItem[]>,
} as const;
