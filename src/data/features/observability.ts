import { observabilityGraphics } from "@/assets/observability";
import { faqParagraphs } from "@/data/products/shared";
import type { ProductFaqItem, ProductLink } from "@/data/products/types";

export const observabilityHero = {
  heading: "LLM Observability: Get the full picture of AI usage",
  body: "Gain complete visibility into how AI is used across your organization – from shadow tools and prompts to Gateway-level traffic, performance & spend.",
  primary: { label: "Get API key", href: "/pricing" } satisfies ProductLink,
  secondary: { label: "Talk to Solutions Engineer", href: "/contact-sales" } satisfies ProductLink,
  trustCaption: "Chosen by leading engineering teams",
  visualAlt: "Person at a laptop beside nexos.ai dashboards showing total AI spend and usage by team",
  info: {
    label: "What is LLM observability?",
    heading: "What is LLM observability?",
    paragraphs: [
      "LLM observability is the ability to monitor, measure, and audit how large language models (LLMs) are used across your business. It brings transparency to every interaction, helping you understand not just what AI delivers, but how it gets there.",
    ],
  },
};

export const observabilityControl = {
  heading: "One place to see and control AI usage",
  items: [
    {
      id: "tools",
      label: "See every AI tool in use",
      body: "From ChatGPT in the browser to Cursor and Claude Code on the desktop, all tracked.",
      image: observabilityGraphics.tools,
      alt: "Per-tool AI usage chart showing Cursor, Claude Code, Codex, Antigravity and GPT with member counts and share of use",
    },
    {
      id: "shadow",
      label: "Uncover shadow AI",
      body: "Tools outside your approved list, flagged and ranked by risk.",
      image: observabilityGraphics.shadow,
      alt: "Findings by category donut chart with 1,994 findings split across secrets and credentials, financial data and personal identifiers",
    },
    {
      id: "cost",
      label: "Attribute AI usage and costs",
      body: "Which teams use AI most, what it costs, and the ROI you're getting",
      image: observabilityGraphics.attribute,
      alt: "Active users and most-used app tiles above a usage breakdown list of teams by share of AI usage",
    },
    {
      id: "leaks",
      label: "Catch data leaks",
      body: "Sensitive data, blocked before it leaves your business.",
      image: observabilityGraphics.leaks,
      alt: "Sensitive data in a prompt alert with a block action, above a recent findings table of members, apps and finding categories",
    },
    {
      id: "dayone",
      label: "Get insights from day one",
      body: "No setup or disruption for your team, just instant visibility into AI usage.",
      image: observabilityGraphics.insights,
      alt: "Three-step onboarding cards: install across every device, set the policies, see full visibility instantly",
    },
  ],
};

export const observabilityExplore = {
  heading: "Explore the platform",
  organisation: {
    heading: "Organisation",
    body: "Your workspace, the devices it licenses, and who can reach the console.",
  },
  nav: [
    {
      id: "organisation",
      label: "Organisation",
      group: "General",
    },
    {
      id: "security",
      label: "Security",
      group: "AI Visibility",
    },
    {
      id: "adoption",
      label: "Adoption",
      group: "AI Visibility",
    },
    {
      id: "knowledge",
      label: "Knowledge",
      badge: "BETA",
      group: "AI Visibility",
    },
    {
      id: "policy",
      label: "Policy",
      group: "Data Protection",
      disabled: true,
    },
    {
      id: "reports",
      label: "Reports",
      badge: "BETA",
      group: "Financials",
      disabled: true,
    },
    {
      id: "spend",
      label: "Model spend",
      badge: "Coming soon",
      group: "Financials",
      disabled: true,
    },
  ],
  orgTabs: [
    {
      id: "profile",
      label: "Profile",
      image: observabilityGraphics.exploreOrg,
      alt: "nexos.ai Observer console — Organisation, Profile tab",
    },
    {
      id: "usage",
      label: "Usage",
      image: observabilityGraphics.exploreOrgUsage,
      alt: "nexos.ai Observer console — Organisation, Usage tab",
    },
    {
      id: "audit",
      label: "Audit log",
      image: observabilityGraphics.exploreOrgAudit,
      alt: "nexos.ai Observer console — Organisation, Audit log tab",
    },
    {
      id: "tokens",
      label: "Enrollment tokens",
      disabled: true,
    },
    {
      id: "devices",
      label: "Devices",
      count: "10800",
      disabled: true,
    },
  ],
  views: {
    security: {
      image: observabilityGraphics.exploreSecurity,
      alt: "nexos.ai Observer console — Security view",
    },
    adoption: {
      image: observabilityGraphics.exploreAdoption,
      alt: "nexos.ai Observer console — Adoption overview",
    },
    knowledge: {
      image: observabilityGraphics.exploreKnowledge,
      alt: "nexos.ai Observer console — Knowledge base view",
    },
  },
};

export const observabilityObserve = {
  pill: "AI GATEWAY",
  heading: "Observe and manage LLM requests",
  intro:
    "nexos.ai gives you one place to monitor how AI is being used so you can optimize model choices, caching habits, spend controls, and more.",
  cards: [
    {
      id: "usage",
      title: "See usage by team, project, and user",
      body: "Track requests, tokens, models, and API keys per team, user, or project.",
      image: observabilityGraphics.usage,
      alt: "Token usage chart broken down by model",
    },
    {
      id: "performance",
      title: "Track performance and routing efficiency",
      body: "Monitor latency, errors, and throughput across models and providers.",
      image: observabilityGraphics.performance,
      alt: "Completions chart with total completions and completion errors",
    },
    {
      id: "costs",
      title: "Monitor token usage and costs",
      body: "Break down spend by model, application, project, team, user, API key, and individual request.",
      image: observabilityGraphics.costs,
      alt: "Cost chart with a model, user and team breakdown toggle",
    },
    {
      id: "logs",
      title: "Investigate any request",
      body: "Use logs and traces to see tokens, latency, routing decisions, cache behavior, costs, and errors behind any request.",
      image: observabilityGraphics.logs,
      alt: "Request logs list showing model, timestamp and request id",
    },
  ],
};

export const observabilityBenefits = {
  headingBefore: "Business benefits of",
  headingAccent: "AI observability",
  intro:
    "AI observability isn’t just for technical teams. It’s a business-critical layer that gives security, finance, and visibility into how AI is used, what it costs, and where issues or risks emerge.",
  cards: [
    {
      id: "risk",
      title: "Reduce risk exposure",
      body: "Spot policy violations, unusual usage, and potential risks with visibility into AI activity across your organization.",
    },
    {
      id: "cost",
      title: "Control costs across your stack",
      body: "See exactly what AI is costing you, by team, tool, and project, and cut unnecessary spend wherever it happens.",
    },
    {
      id: "compliance",
      title: "Prove compliance, build trust",
      body: "Show stakeholders and regulators how AI is being used, and what protections are in place. Logs and reports make your policies verifiable, not just theoretical.",
    },
    {
      id: "roi",
      title: "Prove AI adoption and ROI",
      body: "See which teams are actually using AI day to day, not just who has a license, so you can prove your rollout is working.",
    },
  ],
};

export const observabilityBlind = {
  heading: "What happens without full AI observability",
  introBefore: "When you can’t see how AI is being used, you can’t control the risks it creates. Blind spots in your AI stack and infrastructure create serious ",
  introLink: { label: "LLM challenges", href: "/blog/llm-challenges/" },
  introAfter: " — from data leaks to runaway costs:",
  cards: [
    {
      id: "leaks",
      title: "Undetected data leaks through AI prompts and outputs",
    },
    {
      id: "spend",
      title: "Unmanaged spending that spirals out of control",
    },
    {
      id: "behavior",
      title: "Inconsistent behavior across teams and applications",
    },
    {
      id: "compliance",
      title: "Compliance gaps that go unnoticed until it’s too late",
    },
  ],
};

export const observabilityCta = {
  heading: "From “we use AI” to “we know exactly how”",
  body: "Uncover what’s driving AI usage and cost.",
  primary: { label: "Talk to Solutions Engineer", href: "/contact-sales" } satisfies ProductLink,
  secondary: { label: "Get API Key", href: "/pricing" } satisfies ProductLink,
};

export const observabilityFaq: ProductFaqItem[] = [
  {
    id: "security",
    question: "What are the most frequent security issues that LLMs present to an organization?",
    answer: faqParagraphs(
      "The most common AI security risks include data leakage through unfiltered prompts, exposure of sensitive customer or company data, and lack of control over which models employees use. Without proper observability, you risk shadow AI usage and compliance failures. Implementing observability tools and AI guardrails together is the best way to mitigate these risks.",
    ),
  },
  {
    id: "admins",
    question: "Can the LLM admins access all the analytics and logs from all the users?",
    answer: faqParagraphs(
      "Yes. With nexos.ai AI Gateway, admins get full visibility into every user interaction across all connected LLM models and AI Agents. You can review prompt histories, outputs, token usage, and triggered guardrails — all logged for auditability and compliance checks.",
    ),
  },
  {
    id: "users",
    question: "Can the user see the analytics and statistics of their usage?",
    answer: faqParagraphs(
      "End users cannot access detailed logs or full usage analytics, this data is only visible to authorized personnel, such as platform admins or security teams. However, users can still access their secure file storage to review generated outputs, and see basic statistics like prompt response times in the Workspace.",
    ),
  },
  {
    id: "choose",
    question: "How do you choose an LLM observability solution?",
    answer: faqParagraphs(
      "Look for an LLM observability platform that provides:\n\nFull stack visibility: From user prompts to model responses, every interaction should be logged and traceable.\n\nChain and agent-level tracing: Understand how multi-agent workflows and chained prompts perform.\n\nData protection and guardrails: Protect sensitive inputs and outputs in real time.\n\nScalability and integration: Ensure the solution works across all your apps, models, and teams.\n\nUser and admin access: Provide the right level of visibility to both technical teams and business users.\n\nUnlike single-purpose monitoring tools or model-specific dashboards, nexos.ai combines LLM observability, security, routing, and management in one platform.",
    ),
  },
  {
    id: "diff",
    question: "What are the differences between LLM Monitoring and LLM Observability?",
    answer: faqParagraphs(
      "LLM monitoring and LLM observability are often mentioned together, but they solve different parts of the AI operations puzzle.\n\nLLM monitoring focuses on surface-level metrics like uptime, error rates, and latency. It alerts you when something goes wrong, but it rarely provides context about why it happened or how to fix it. Monitoring helps with incident detection, but not deep diagnostics.\n\nLLM observability, on the other hand, gives you full visibility into the entire lifecycle of every model interaction — from the user’s input to the model’s response, and all the steps in between. It provides traces, logs, token-level insights, and usage patterns. Observability helps you understand behavior and ensure compliance across teams.",
    ),
  },
];
