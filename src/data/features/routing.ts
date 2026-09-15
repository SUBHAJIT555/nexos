import { routingGraphics } from "@/assets/routing";
import { faqParagraphs } from "@/data/products/shared";
import type { ProductFaqItem, ProductLink } from "@/data/products/types";

export const routingHero = {
  heading: "Smart LLM routing: automatically route to the right model",
  body: "Send every request to the model that fits the task best, without overpaying for simple work and compromising on complex-work quality.",
  bullets: [
    "Optimize AI costs on every request",
    "Route for quality that fits the task",
    "Faster responses, fewer outages",
  ],
  primary: { label: "Talk to Solutions Engineer", href: "/contact-sales" } satisfies ProductLink,
  secondary: { label: "Get API Key", href: "/pricing" } satisfies ProductLink,
  trustCaption: "Chosen by leading engineering teams",
  visualAlt: "nexos.ai routes each request to the large language model that fits the task best",
  info: {
    label: "What is LLM routing?",
    heading: "What is LLM routing?",
    paragraphs: [
      "LLM routing is a technique that intelligently directs each incoming request to the most suitable large language model (LLM) instead of sending everything to one default, weighing prompt complexity, use case, response quality, latency, and cost efficiency.",
      "A one-line question about a config file and a full service refactor are not the same job, but a single-model setup charges you as if they were.",
    ],
  },
};

export const routingBenefits = {
  heading: "Benefits of Smart LLM routing for your business",
  intro:
    "Smart LLM routing replaces a single default model – cutting your costs, reducing failed requests, and eliminating the engineering overhead of hand-built routing logic.",
  cards: [
    {
      id: "costs",
      title: "Cut costs, not quality",
      body: "Many LLM workloads vary in complexity – some requests genuinely need a frontier model, and the rest can be handled fine on a lower-cost one. Smart routing draws that line automatically, so you stop paying premium prices for routine work.",
      image: routingGraphics.cutCosts,
      imageAlt: "Requests are routed to a lower-cost one",
    },
    {
      id: "reliability",
      title: "Improve reliability and performance",
      body: "Smart LLM routing directs requests based on model performance and availability. If a model slows down or becomes unavailable, traffic can shift to another option, helping maintain faster responses and fewer failed requests.",
      image: routingGraphics.reliability,
      imageAlt: "nexos.ai gateway routes requests based on model performance and availability",
    },
    {
      id: "logic",
      title: "No routing logic to build or maintain",
      body: "Connect to the nexos.ai Gateway and routing is handled for you. No custom logic to write, test, or keep in sync across multiple providers. As your model stack grows, Smart Routing scales with it automatically.",
      image: routingGraphics.noLogic,
      imageAlt: "Fallback logic, model selection, routing handled by nexos.ai gateway",
    },
    {
      id: "learning",
      title: "Continuous learning",
      body: "The routing system gets smarter over time, learning from new patterns and adapting as tasks, workloads, and model capabilities evolve. This helps keep routing decisions effective as new models emerge and performance changes, without constant manual tuning.",
      image: routingGraphics.learning,
      imageAlt: "nexos.ai routing system gets smarter over time learning from new patterns and adapting",
    },
  ],
};

export const routingMore = {
  heading: "Smart routing is more than choosing the cheapest model",
  stat: "84%",
  statBody: "of coding traffic can be routed to an open-weight models, while frontier models stay ready for the hard calls.",
  p1: "Routing on price alone creates trade-offs. A cheaper model can lose quality on complex tasks, and switching models unnecessarily breaks prompt caching, forcing the same context to be reprocessed from scratch.",
  p2: "Smart LLM routing accounts for the whole request – task complexity, model capability, cost, performance, and cache efficiency together, not cost in isolation.",
};

export const routingHow = {
  heading: "How does nexos.ai Smart LLM routing work",
  bodyBefore: "Smart LLM routing is built directly into the nexos.ai ",
  bodyLink: "AI Gateway",
  bodyAfter:
    ", giving you 200+ large language models (LLMs) through one connection. It works with any coding agent or harness across completions, responses, and messages endpoints. No plugins, no separate router, no changes to your tooling.",
  imageAlt: "nexos.ai Gateway API setup in code environment",
  steps: [
    {
      n: "01",
      title: "Input",
      body: "Your request hits the gateway.",
    },
    {
      n: "02",
      title: "Analyze",
      body: "The router reads the query itself – metadata, tags, type, complexity, even intent and sentiment – to work out what the request actually needs.",
    },
    {
      n: "03",
      title: "Select model",
      body: "It picks the best-fit LLM based on request structure, accuracy, latency, and cost.",
    },
    {
      n: "04",
      title: "Fallback",
      body: "If the selected model fails, times out, or comes back low-confidence, the router redirects to a backup model automatically – no dropped requests.",
    },
  ],
  primary: { label: "Talk to Solutions Engineer", href: "/contact-sales" } satisfies ProductLink,
  secondary: { label: "Get API Key", href: "/pricing" } satisfies ProductLink,
};

export const routingUse = {
  heading: "Smart LLM routing use cases",
  intro: "Here's where smart routing makes the biggest difference – the patterns teams put into production first.",
  cards: [
    {
      id: "coding",
      title: "Coding agents and developer tooling",
      before:
        "Coding agents generate a huge request volume, ranging from routine lookups to complex reasoning. Smart routing matches each task to the right model tier – without the unnecessary model switching that can hurt prompt ",
      link: "caching",
      after: " efficiency – choosing the most cost-optimized model for each request without sacrificing quality.",
    },
    {
      id: "support",
      title: "Customer support and chat triage",
      body: "Support requests range from simple lookups to complex troubleshooting. Smart routing sends routine questions to fast, cost-efficient models and reserves stronger models for requests that need deeper reasoning. Response times drop on the easy questions, and quality holds where it matters.",
    },
    {
      id: "agentic",
      title: "Agentic workflows and multi-step automations",
      body: "A single AI workflow can involve many steps, from extracting data and calling tools to planning and complex reasoning. Smart routing matches each step with the right level of model capability, so you don't run the entire workflow on your most expensive model.",
    },
    {
      id: "compliance",
      title: "Compliance-sensitive routing",
      body: "Apply routing rules to keep sensitive requests within approved models, providers, or regions, while everything else routes freely on cost, task complexity, quality, or speed.",
    },
  ],
};

export const routingSecurity = {
  heading: "Security and compliance, built in",
  cards: [
    {
      id: "eu",
      title: "EU-resident inference",
      before: "AI requests are processed through ",
      link: "EU-hosted infrastructure",
      after: ".",
    },
    {
      id: "zdr",
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
  pills: [
    { id: "iso", label: "ISO 21007 & 42001" },
    { id: "uptime", label: "99.99% Uptime" },
    { id: "gdpr", label: "GDPR Compliant" },
    { id: "soc2", label: "Soc 2 Type 2 Certified" },
    { id: "eu", label: "EU Hosted" },
  ],
};

export const routingCompare = {
  heading: "Smart LLM routing vs one default model",
  intro:
    "Running every request through a single model is the simplest setup – but it means paying the same price whether the task needs it or not.",
  left: "nexos.ai Smart LLM routing",
  right: "Single default model",
  rows: [
    ["Model selection", "Best-fit model selected per request", "One model for every request"],
    ["Cost efficiency", "Reduced costs by using mix of the frontier and lower-cost models", "Cost tide to selected model"],
    ["Response quality", "Quality matched to task complexity", "Limited to capabilities of one model"],
    ["Performance", "Model matched by task complexity", "Dependent on one model"],
    ["Adapting to change", "Adapts as tasks, workloads, and models evolve", "Requires manual re-evaluation"],
  ],
};

export const routingCta = {
  heading: "Cut your AI costs with Smart LLM routing",
  body: "Match every request to the right model that fits the task, balancing cost, quality, and performance automatically.",
  primary: { label: "Talk to Solutions Engineer", href: "/contact-sales" } satisfies ProductLink,
  secondary: { label: "Get API key", href: "/pricing" } satisfies ProductLink,
};

export const routingFaq: ProductFaqItem[] = [
  {
    id: "multi",
    question: "Does nexos.ai Smart LLM routing work with multiple LLMs at once?",
    answer: faqParagraphs(
      "Yes. Smart LLM routing works across models connected to your AI Gateway, selecting the best fit for each request based on task requirements, cost, quality, and performance – without hard-coding requests to a single model.",
    ),
  },
  {
    id: "choose",
    question: "How does nexos.ai Smart Routing choose which model to use?",
    answer: faqParagraphs(
      "nexos.ai Smart Routing evaluates each request and selects the best-fit model based on factors like task complexity, quality, cost, and performance. Simpler tasks go to faster, lower-cost models; more complex requests go to models with stronger capabilities.",
    ),
  },
  {
    id: "cost",
    question: "How does nexos.ai Smart LLM routing reduce AI costs?",
    answer: faqParagraphs(
      "By matching each request to the model that fits its actual requirements, instead of sending everything to the same premium default LLM model. Simpler requests route to lower-cost models, and more capable models are reserved for the tasks that need them.",
    ),
  },
  {
    id: "adapt",
    question: "How does nexos.ai Smart Routing adapt as models evolve?",
    answer: faqParagraphs(
      "The nexos.ai routing engines periodically updated as model capabilities and performance evolve, so decisions keep pace with new and improved models without your team having to re-evaluate its stack manually.",
    ),
  },
  {
    id: "custom",
    question: "Can I customize nexos.ai Smart LLM routing rules for my use case?",
    answer: faqParagraphs(
      "nexos.ai Smart LLM Routing allows for company-level control. Admins can decide which models Smart Routing may choose from, with separate preferences for Workspace and API usage, and rules for whether teams can override the company default.",
    ),
  },
  {
    id: "change",
    question: "Do I need to change my application to use nexos.ai Smart Routing?",
    answer: faqParagraphs(
      "No. Smart Routing is built into the nexos.ai AI Gateway, so you don't need a separate router or any change to your application logic. Point your existing requests at the Gateway, and Smart Routing handles model selection automatically.",
    ),
  },
];
