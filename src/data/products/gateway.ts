import { gatewayShots } from "@/assets/gateway";
import { homepageTestimonials } from "@/data/homepage";
import { gatewaySecurityCards, productDocs } from "@/data/products/shared";

export const gatewayHero = {
  headingBefore: "AI Gateway:",
  headingAfter: "unified LLM access, full AI spend control",
  body: "One secure, lightweight layer to access, route, and manage 200+ models. Real-time monitoring, cost controls, and full governance keep your teams shipping fast and your AI spend predictable.",
  primary: { label: "Talk to Solutions Engineer", href: "/contact-sales" },
  secondary: { label: "Get API Key", href: "/pricing" },
  info: {
    label: "What is an AI Gateway?",
    heading: "What is an AI Gateway?",
    paragraphs: [
      "An AI Gateway is a unified control layer between your applications and large language models. It gives you one API to access, route, and govern 200+ models, with observability, cost controls, and security built in.",
      "Instead of wiring every provider separately, teams send traffic through a single endpoint and keep visibility over how AI is used across the organization.",
    ],
  },
};

export const gatewayLogos = {
  caption: "Chosen by leading engineering teams",
};

export const gatewayPills = [
  "One API endpoint",
  "Europe-hosted",
  "Zero Data Retention",
  "99.99% uptime",
  "200+ AI models",
];

export const gatewayUnified = {
  heading: "One unified Gateway for every AI application",
  body: "From chatbots to AI agents, every AI application goes through one lightweight, secure layer.",
};

export const gatewayApi = {
  cards: [
    {
      id: "one-api",
      title: "One API for every LLM",
      bodyBefore: "Connect through a ",
      linkLabel: "single API endpoint",
      href: productDocs.gateway,
      bodyAfter:
        " – no separate providers, integrations, or infrastructure to maintain. Our lightweight orchestration layer gives your apps one secure connection to every leading LLM, with the visibility, reliability, and control to scale AI safely.",
    },
    {
      id: "costs",
      title: "Optimize AI costs from day one",
      body: "Reduce AI costs automatically through intelligent routing, prompt caching, and context compression. Monitor usage, enforce governance, and keep every AI application running reliably.",
    },
  ],
};

export const gatewayObservability = {
  heading: "See what your data is really telling you",
};

export const gatewayDataSlides = [
  {
    id: "connect",
    title: "Connect to every model through one secure layer",
    body: "One AI Gateway platform replaces every provider integration you'd otherwise build and babysit. The nexos.ai Gateway is a lightweight, secure layer that gives your teams instant access to 200+ LLMs through a single endpoint, and the moment a new model ships, it's already available to you.",
    image: gatewayShots.connect,
    gradient: "linear-gradient(rgb(222, 231, 245) 0%, rgb(248, 250, 252) 100%)",
    alt: "nexos.ai AI gateway providing unified access to GPT-4, Claude, and Gemini through a single secure connection.",
  },
  {
    id: "optimize",
    title: "Optimize costs with smart routing",
    body: "You don't need a frontier model for every single prompt. The nexos.ai Gateway reads each request and sends it to the best model for the job, balanced across cost, quality, and latency, automatically.",
    image: gatewayShots.optimize,
    gradient: "linear-gradient(rgb(185, 181, 245) 0%, rgb(239, 244, 248) 100%)",
    alt: "nexos.ai gateway evaluating responses from Gemini, Claude, and GPT-4 to route each request to the best performing model.",
  },
  {
    id: "costs",
    title: "See exactly what your AI costs, in real time",
    body: "The nexos.ai Gateway makes every LLM call visible across every provider, then lets you control it. Cap budgets by user, team, or project before overruns happen. Logs and traces capture every prompt, response, and error, so you can see which teams, and models drive your AI costs, and act on it without guessing.",
    image: gatewayShots.costs,
    gradient: "linear-gradient(0deg, rgb(245, 243, 252) 0%, rgb(225, 215, 255) 100%)",
    alt: "nexos.ai gateway cost visibility dashboard showing monthly LLM spend per team across Product, Data, and Developers.",
  },
  {
    id: "team",
    title: "One AI Gateway for every team",
    body: "Built for both technical and non-technical users. One invoice, one control plane, one set of policies. The nexos.ai Gateway gives you one governed home for engineers and business teams, one bill that covers every team and project, and the same security and usage rules applied to every team, automatically.",
    image: gatewayShots.everyTeam,
    gradient: "linear-gradient(rgb(222, 231, 245) 0%, rgb(248, 250, 252) 100%)",
    alt: "nexos.ai gateway governance panel showing one policy, single invoice, and custom budgets for multiple teams using AI.",
  },
  {
    id: "invoice",
    title: "Move fast, without the scary invoice",
    body: "Most Gateways force a bad trade: throttle your teams to protect the budget, or let throughput run and brace for the bill. The nexos.ai Gateway removes the trade. You get enterprise-grade rate limits so productivity never gets blocked, while smart routing and budgets keep spend predictable as you scale.",
    image: gatewayShots.moveFast,
    gradient: "linear-gradient(0deg, rgb(248, 250, 252) 0%, rgb(245, 243, 252) 100%)",
    alt: "nexos.ai gateway admin settings panel for setting a monthly AI budget limit to control LLM costs.",
  },
  {
    id: "secure",
    title: "Secure by default, simple by design",
    body: "Security here isn't a setting you switch on later, it's the foundation the Gateway is built on. Your data stays in the EU, is never used to train models, and can run with zero data retention at the LLM level. Enterprise-grade protection your CISO signs off on quickly, without slowing the people doing the work.",
    image: gatewayShots.secure,
    gradient: "linear-gradient(0deg, rgb(245, 243, 252) 0%, rgb(225, 215, 255) 100%)",
    alt: "Security and compliance badges showing the nexos.ai gateway is EU-hosted, GDPR compliant, ISO 27001 compliant, and SOC 2 Type 2 certified.",
  },
];

export const gatewayPain = {
  heading: "One AI Gateway solution for your LLM integration pain points",
  body: "Whether you're launching your first model or scaling AI company-wide, nexos.ai helps you solve the biggest AI integration challenges:",
  cards: [
    {
      id: "dev-cost",
      title: "High development costs",
      body: "Building an LLM Gateway architecture from scratch and then maintaining it requires a significant development budget.",
    },
    {
      id: "ops",
      title: "Operational overhead",
      body: "Managing multiple API integrations, figuring out performance issues, and optimizing cost is a continuous challenge.",
    },
    {
      id: "obs",
      title: "Lack of observability",
      body: "Without centralized control, there's no way to see how AI is used across your organization or prevent employees from leaking sensitive data to AI systems.",
    },
  ],
  close:
    "nexos.ai helps you solve these and other LLM usage challenges with a single, secure Gateway that centralizes model access, eliminates integration overhead, and gives you full visibility over how AI is used.",
};

export const gatewayWhy = {
  heading: "Why your business needs an AI Gateway",
  body: "The nexos.ai Gateway gives you direct, policy-enforced access to 200+ AI models, while keeping cost control, security, and observability front and center. Here are the main features of nexos.ai Gateway.",
  slides: [
    {
      id: "routing",
      title: "Smart LLM routing",
      body: "Automatically select the best model for each prompt, without manual model switching. You get high-quality results, always powered by the most capable model for the task, at the lowest sensible cost.",
    },
    {
      id: "cost",
      title: "Cost tracking",
      body: "Monitor token usage and spending across teams, projects, or models. Set custom budgets to prevent overruns and keep AI adoption financially sustainable.",
    },
    {
      id: "observability",
      title: "LLM observability",
      body: "Get a single, real-time view of how AI performs across your entire stack. Spot errors, latency spikes, and runaway usage early, then optimize and enforce your policies at scale.",
    },
    {
      id: "logs",
      title: "Logs and traces",
      body: "Track how AI is used across your organization with detailed logs and execution traces. Gain full transparency into prompts, responses, and usage patterns.",
    },
    {
      id: "fallbacks",
      title: "Fallbacks",
      body: "Keep your AI running even when a provider doesn't. If a model slows down or goes offline, the nexos.ai Gateway reroutes traffic to a backup automatically, so your apps and users never feel the outage.",
    },
    {
      id: "caching",
      title: "Intelligent caching",
      body: "Save tokens and reduce latency with automatic LLM caching for repeat or similar queries. Configure the scope per user or team.",
    },
    {
      id: "keys",
      title: "API keys management",
      body: "Generate and govern API keys per user, team, or service from one place. Apply limits and permissions, rotate keys, and revoke access instantly, so teams move fast while you keep full control.",
    },
    {
      id: "search",
      title: "Web search",
      body: "Give your models access to live information from the web. Pull in current, real-time context for accurate, up-to-date answers, instead of being limited to what a model learned during training.",
    },
  ],
};

export const gatewayQuotes = {
  heading: "What leading teams say about nexos.ai",
  slides: [
    {
      id: "marijus",
      badge: "Technology" as const,
      quote:
        "“nexos.ai helped us reduce coding-agent LLM costs by 46% without changing our prompts, models, or developer workflows. The optimization was transparent to our engineers, while giving us much better visibility into AI usage and spend.”",
      name: "Marijus Briedis",
      role: "CTO",
      company: "NordVPN",
      portrait: "featured" as const,
    },
    {
      id: "dainius",
      badge: "Product" as const,
      quote:
        "“Integrating nexos.ai was seamless. It saved us the equivalent of two yearly salaries in development cost.”",
      name: "Dainius Kavoliūnas",
      role: "Head of Product",
      company: "Hostinger Horizons",
      portrait: "dainius" as const,
    },
    {
      id: "vytautas",
      badge: "Marketing" as const,
      quote:
        "“Our content team needed to optimize 4 million products in our catalog – that’s a lot. And to do it by hand would take 3 years and cost us millions of euros. That’s extremely expensive. With nexos.ai, optimizing one item is 99.8% cheaper than doing it manually.”",
      name: "Vytautas Romeika",
      role: "CMO",
      company: "Pigu.lt",
      portrait: "vytautas" as const,
    },
    {
      id: "juras",
      badge: "Operations" as const,
      quote: homepageTestimonials.items[0].quote,
      name: homepageTestimonials.items[0].name,
      role: homepageTestimonials.items[0].role,
      company: homepageTestimonials.items[0].company,
      portrait: "juras" as const,
    },
    {
      id: "boyko",
      badge: "Operations" as const,
      quote: homepageTestimonials.items[2].quote,
      name: homepageTestimonials.items[2].name,
      role: homepageTestimonials.items[2].role,
      company: homepageTestimonials.items[2].company,
      portrait: "boyko" as const,
    },
  ],
};

export const gatewaySecurity = {
  heading: "With nexos.ai your data is always secure",
  cards: gatewaySecurityCards,
};

export const gatewayCta = {
  heading: "All your AI. One secure Gateway.",
  body: "Book a personalized demo to see how nexos.ai simplifies AI adoption.",
  primary: { label: "Talk to Solutions Engineer", href: "/contact-sales" },
  secondary: { label: "Get API Key", href: "/pricing" },
};

export { gatewayFaqAbout, gatewayFaqProduct } from "@/data/products/gateway-faq";

export { productDocs };
