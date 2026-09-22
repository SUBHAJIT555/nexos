export type GatewayFaqBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export type GatewayFaqItem = {
  id: string;
  question: string;
  blocks: GatewayFaqBlock[];
};

export const gatewayFaqAbout: GatewayFaqItem[] = [
  {
    id: "use-cases",
    question: "What are the main use cases of an AI Gateway?",
    blocks: [
      { type: "p", text: "An AI Gateway is ideal for businesses that need to:" },
      {
        type: "ul",
        items: [
          "Route and manage traffic across multiple LLM providers.",
          "Enforce security and usage policies at the API level.",
          "Track and control LLM costs by user, team, or project.",
          "Add retrieval-augmented generation (RAG) to AI workflows.",
          "Orchestrate AI agents and structured tool use.",
          "Reduce latency and duplication through caching.",
          "Centralize prompt management and evaluation.",
        ],
      },
      {
        type: "p",
        text: "It’s a foundational layer for companies turning AI into production-ready infrastructure.",
      },
    ],
  },
  {
    id: "functions",
    question: "What are the key functions of an AI Gateway?",
    blocks: [
      { type: "p", text: "The most important functions of an AI Gateway include:" },
      {
        type: "ul",
        items: [
          "Standardized API access to LLMs across vendors and deployment environments.",
          "Model orchestration, versioning, and fallback logic.",
          "Prompt filtering for safe inputs and outputs.",
          "Load balancing and failover to keep AI systems reliable.",
          "Cost tracking with usage visibility across teams.",
          "Logs and observability for every prompt, file, and response.",
          "A unified LLM Gateway for smarter, context-aware automation.",
        ],
      },
      {
        type: "p",
        text: "With NexEco AI, these features are built-in – no extra setup or engineering required.",
      },
    ],
  },
  {
    id: "vs-api",
    question: "What are the differences between an AI Gateway and an API Gateway?",
    blocks: [
      {
        type: "p",
        text: "An API Gateway routes HTTP traffic between services. An AI Gateway is purpose-built for LLMs – it handles prompt orchestration, model routing, security filtering, caching, and cost controls tailored to generative AI workloads.",
      },
      {
        type: "p",
        text: "You may still use an API Gateway (e.g., for service-level routing), but when it comes to managing AI use across your stack, you need an AI Gateway.",
      },
    ],
  },
  {
    id: "choose",
    question: "What should you look for when choosing an AI Gateway for your business?",
    blocks: [
      {
        type: "p",
        text: "Choosing the best AI Gateway for your business is critical – the wrong decision can create a single point of failure or bottleneck for all your AI applications.",
      },
      { type: "p", text: "Look for an AI Gateway platform that offers:" },
      {
        type: "ul",
        items: [
          "Redundancy and resilience (fallbacks, load balancing, and cloud-native reliability).",
          "Built-in observability (logs, traces, and usage metrics).",
          "Security and filtering (reduces the risk of leaks and hallucinations).",
          "Model flexibility (no vendor lock-in and support for open/private models).",
          "Cost control (spend tracking and budgeting across teams).",
        ],
      },
      {
        type: "p",
        text: "NexEco AI checks all these boxes and continues evolving to keep up with the AI ecosystem. We help your teams stay productive and in control.",
      },
    ],
  },
  {
    id: "who",
    question: "Who needs an AI Gateway?",
    blocks: [
      {
        type: "p",
        text: "Not every company needs one – startups and very small teams running a single model on light usage can usually manage with direct provider access. An AI Gateway becomes important once AI use grows: multiple models, multiple teams, production traffic, and a need for cost, security, and observability controls in one place.",
      },
    ],
  },
  {
    id: "costs",
    question: "Can an AI Gateway actually help to reduce AI costs?",
    blocks: [
      {
        type: "p",
        text: "Yes, and cost reduction is one of the main reasons companies adopt one. An AI Gateway lowers AI costs in several ways. Smart routing sends each request to the most cost-effective model that can handle the task. Caching avoids repeating expensive work. Context compression reduces unnecessary tokens. Usage visibility and budgets stop spend from drifting across teams.",
      },
    ],
  },
];

export const gatewayFaqProduct: GatewayFaqItem[] = [
  {
    id: "why-nexeco",
    question: "Why choose NexEco AI as your AI Gateway product?",
    blocks: [
      {
        type: "p",
        text: "NexEco AI Gateway offers more than just model connectivity. You get one secure endpoint to manage all your LLM traffic with observability, fallbacks, cost controls, and governance built in – without assembling a custom stack.",
      },
    ],
  },
  {
    id: "models",
    question: "What types of models can I use with the NexEco AI Gateway?",
    blocks: [
      {
        type: "p",
        text: "NexEco AI Gateway supports models from top providers, including OpenAI, Anthropic (Claude), Google (Gemini), Meta (LLaMA), Grok, Kimi, DeepSeek and Mistral. You can also use privately hosted or open-source models through the same endpoint.",
      },
    ],
  },
  {
    id: "integrate",
    question: "How can I integrate NexEco AI Gateway?",
    blocks: [
      {
        type: "p",
        text: "You connect your applications, AI agents, internal tools, and customer-facing products to that one endpoint, then route requests to any supported model without wiring up each provider separately. If you already use an OpenAI-compatible SDK, switching is typically a base URL and API key change.",
      },
    ],
  },
  {
    id: "price",
    question: "How much does NexEco AI Gateway cost?",
    blocks: [
      {
        type: "p",
        text: "NexEco AI Gateway pricing depends on your business needs. For most organizations NexEco AI offer custom pricing based on your scale, usage, and requirements, so you only pay for what fits your team. Small teams can start from the public pricing page.",
      },
    ],
  },
];
