export const cybercareMeta = {
  title: "How Nord Security automated 75% of customer support with 86% CSAT",
  description:
    "See how CyberCare and NexEco AI helped Nord Security automate 75% of customer support with 86% CSAT and first response under 10 seconds.",
};

export const cybercareHero = {
  logosAlt: "Nord Security, CyberCare, and NexEco AI logos",
  heading: "How Nord Security automated 75% of customer support with 86% CSAT",
  intro:
    "With millions of users across the globe, Nord Security handles thousands of customer support requests every day. The aim was to deliver instant, reliable support in the most efficient way possible at that scale, without compromising the security, privacy, and customer experience standards of a leading cybersecurity company. Nord Security partnered with CyberCare AI Labs who built an agentic AI support platform. The platform is powered by NexEco AI AI Gateway that stands as an infrastructure layer providing multi-model access, intelligent routing, automatic fallbacks, observability, and cost control. The results speak for themselves:",
  chartAlt: "CyberCare and NexEco AI automated support",
  metrics: [
    { value: "75%", label: "of customer support answers automated, up from ~40%" },
    { value: "86%", label: "customer satisfaction score (CSAT)" },
    { value: "10s", label: "average first response time, down from 70s" },
  ],
};

export const cybercareCompanies = {
  heading: "The companies behind the story",
  cards: [
    {
      key: "nord" as const,
      title: "Nord Security",
      body: "Nord Security is one of Europe's leading cybersecurity companies, with a portfolio that includes Saily, and NordVPN, one of the world's most recognized privacy and security solutions. With millions of users relying on its products every day, Nord needed customer support that could scale across products and markets without compromising its strict standards for privacy, reliability, and quality.",
      logoAlt: "Nord Security logo",
    },
    {
      key: "cybercare" as const,
      title: "CyberCare",
      body: "CyberCare builds AI-powered customer support solutions that help companies deliver faster, more personalized experiences. Rather than a simple chatbot, CyberCare created an agentic AI platform that understands customer requests, retrieves relevant information, coordinates specialized AI agents, and works alongside human teams. For Nord Security, CyberCare designed and built the support solution.",
      logoAlt: "CyberCare logo",
    },
    {
      key: "nexeco" as const,
      title: "NexEco AI",
      body: "NexEco AI AI Gateway is the infrastructure layer that powers CyberCare's platform. Through a single AI Gateway, it gives CyberCare secure access to every leading AI model – with the routing, fallbacks, observability, and cost control needed to run AI reliably in production, so CyberCare can focus on building great support instead of managing infrastructure.",
      logoAlt: "NexEco AI logo",
    },
  ],
};

export const cybercareGlance = {
  heading: "At a glance",
  cards: [
    {
      icon: "clock" as const,
      title: "Resolution time",
      before: "2 hours",
      after: "Under 20 mins",
    },
    {
      icon: "comment" as const,
      title: "First response time",
      before: "70 seconds",
      after: "Under 10 seconds",
    },
    {
      icon: "gear" as const,
      title: "Automation rate",
      before: "~40%",
      after: "~75%",
    },
    {
      icon: "trend" as const,
      title: "CSAT",
      before: "76–78% market avg.",
      after: "~86%",
    },
    {
      icon: "globe" as const,
      title: "Region",
      before: null,
      after: "Europe",
    },
    {
      icon: "cart" as const,
      title: "Industry",
      before: null,
      after: "Cybersecurity, Consumer Software, AI",
    },
  ],
  comesInHeading: "Where NexEco AI comes in",
  pills: [
    "AI Gateway",
    "Multi-model access",
    "Automatic fallbacks",
    "Intelligent caching",
    "Cost & usage observability",
  ],
};

export const cybercareChallenge = {
  kicker: "The Challenge",
  heading: "Reliable AI support, without compromise",
  paragraphs: [
    "For Nord Security, customer support is a brand-defining moment. The support assistant is the first place a user turns when something goes wrong, and with a highly technical user base that holds support to a higher standard – a slow or unreliable answer chips at the trust a cybersecurity brand depends on. Nord Security operates under a strict no-log policy, so the assistant starts each conversation with limited context about the user, and still has to resolve the issue.",
    "The bar, then, was demanding: resolve issues fast, at the scale of millions of users, without ever loosening the security and privacy standards Nord Security is known for.",
    "CyberCare AI Labs built an agentic support platform for exactly this. The team behind the product came from a customer support background themselves – so they knew a high-performing AI experience is about far more than connecting an LLM to a help center. Success depends on deeply understanding the client's business, customer journeys, and support operations.",
  ],
  panelIntro:
    "At the time when CyberCare started building the product, no enterprise-ready AI platform combined all the requirements they needed, which created a clear gap in the market. These were the non-negotiables:",
  items: [
    {
      title: "Speed & reliability",
      body: "Support is a customer's first stop for help so answers must be fast and dependable, every time.",
    },
    {
      title: "Strict data protection",
      body: "Nord Security privacy standards leave no room for compromise. No AI model may ever train on customer data.",
    },
    {
      title: "Predictable behavior",
      body: "Representing a trusted brand means the AI stays safe, consistent, and never off-script.",
    },
    {
      title: "Full observability",
      body: "Every conversation is traceable, from the resolution logic to the sources the AI agents used.",
    },
  ],
};

export const cybercareQuotes = {
  karolis: {
    quote:
      "“We're obsessed with helping customers. So the real challenge was never building a customer support platform. It was building an AI support solution that enterprises could actually trust in production.”",
    name: "Karolis Valaika",
    title: "Head of AI Labs, CyberCare",
    alt: "Karolis Valaika",
  },
  justas: {
    quote:
      "“Customer support leaves no room for downtime or inconsistency. An AI platform has to be fast, reliable, and accurate at every interaction. Our role is to give CyberCare a foundation they can depend on as their solution matures and their model needs evolve, so their team can focus entirely on the customer experience, not the infrastructure underneath it.”",
    name: "Justas Morkūnas",
    title: "COO at NexEco AI",
    alt: "Justas Morkūnas",
  },
  karina: {
    quote:
      "“Our customers trust us to protect their privacy, and that standard has to extend to every interaction – including support. This platform lets us help our customers resolve issues faster than ever, without ever compromising the promise our brand is built on.”",
    name: "Karina Dirvonskienė",
    title: "COO at Nord Security",
    alt: "Karina Dirvonskienė",
  },
  tomas: {
    quote:
      "“NexEco AI team responded quickly and managed to find quick solutions for every situation along the way. I see this as a true partnership, not a client-vendor relationship.”",
    name: "Tomas Vilčinskas",
    title: "Engineering manager, CyberCare",
    alt: "Tomas Vilčinskas",
  },
};

export const cybercareSolution = {
  kicker: "The Solution",
  heading: "Agentic AI support powered by NexEco AI",
  intro:
    "CyberCare built an agentic customer support platform: a system of specialized AI agents that resolve customer inquiries autonomously and hand off to humans when needed. Three things define it:",
  cards: [
    {
      title: "Multi-agent by design",
      body: "A supervisor agent orchestrates specialized expert agents, each with its own topic, tools, and knowledge, deciding which handles a task, in what order, and how to split messages that span several topics. Splitting knowledge this way keeps answers accurate and controllable.",
    },
    {
      title: "Grounded in knowledge",
      body: "CyberCare turns each client's help centers and knowledge base into a structured, vectorized knowledge the agents search to answer, backed by domain-scoped web search and live status pages when needed. The agents can't fall back on their own knowledge, which keeps hallucinations out of production.",
    },
    {
      title: "Observable end to end",
      body: "Every answer is traceable, so teams can follow the resolution logic and the sources used. With Points of Interest (POI), AI analyzes each conversation to surface insights: tagging feature requests, extracting refund reasons, and counting signals like human-agent requests.",
    },
  ],
};

export const cybercareRelies = {
  heading: "Where CyberCare relies on NexEco AI",
  lead: "A customer support platform like that is only as reliable as the AI infrastructure beneath it, and that's the layer CyberCare chose not to build themselves.",
  paragraphs: [
    "Through NexEco AI, CyberCare gets full visibility into how the platform performs: cost per model and per conversation, token usage and pricing (including spikes), response latency, request success and failure rates, and model usage across traffic.",
    "CyberCare had used Azure, but needed more than it offered: greater stability, real fallback handling, higher reliability, and a faster, easier way to configure and deploy. Managing individual contracts and integrations with every model provider was its own drain – especially early on.",
  ],
  callout:
    "NexEco AI removed that entire class of problems. It sits as the AI infrastructure layer between CyberCare's agentic platform and the underlying LLM providers – a single API endpoint to every leading model, with the reliability, security, and visibility an enterprise support product demands.",
  closing:
    "It also gave CyberCare room to evolve the solution as it matured. Early on, the team leaned on premium frontier models to get the quality right, then shifted to more efficient ones to make the solution sustainable at scale, all through one provider, without re-integrating anything. Here are the capabilities that mattered most:",
  teamAlt: "CyberCare and NexEco AI",
  capabilities: [
    {
      title: "One integration, every model",
      body: "No separate providers to manage or maintain.",
    },
    {
      title: "Automatic fallbacks",
      body: "If a model doesn't respond within seconds, the request reroutes automatically.",
    },
    {
      title: "99.99% uptime SLA",
      body: "Critical, because customer support cannot afford downtime.",
    },
    {
      title: "No training on customer data",
      body: "The hard requirement clients would never compromise on.",
    },
    {
      title: "Fast to start",
      body: "No lengthy enterprise agreement to deploy or experiment.",
    },
    {
      title: "Full control",
      body: "Observability and cost control built in.",
    },
  ],
};

export const cybercareResult = {
  kicker: "The Result",
  heading: "Faster support, better customer experience",
  intro:
    "The combination – CyberCare's support-first design and NexEco AI's reliability – produced results that speak the language of both support leaders and CFOs.",
  cards: [
    {
      icon: "gear" as const,
      body: "Around 75% of Nord Security inquiries are now automated. AI agents work alongside human teams, helping customers get faster answers while allowing support specialists to focus on more complex cases.",
    },
    {
      icon: "comment" as const,
      body: "First response time dropped from 70 seconds to under 10 seconds, and resolution time from 2 hours to under 20 minutes, which is exactly why CyberCare prioritizes AI resolution, handing off to a human (with full context) only when AI can't deliver.",
    },
    {
      icon: "trend" as const,
      body: "CSAT sits around 86%, comfortably above the 76–78% market average.",
    },
    {
      icon: "comments" as const,
      body: "The volume of chats reaching human agents has been cut in half. And the ones they do handle are the genuinely complex cases, where human judgment matters most.",
    },
    {
      icon: "wallet" as const,
      body: "Cost per conversation stays low: intelligent routing sends simple, repetitive tickets to cheaper models and reserves frontier models for complex cases. Combined with caching, costs keep dropping with every new customer onboarded.",
    },
    {
      icon: "gear" as const,
      body: "And for CyberCare's own engineering team, the impact is just as real: they no longer manage individual provider integrations, fallback logic, uptime, or cost tracking. That work is handled – so their people build better support experiences instead of maintaining plumbing.",
    },
  ],
};

export const cybercarePartnership = {
  headingBefore: "A real partnership,",
  headingAfter: "not a vendor relationship",
  intro: "What stood out most to CyberCare was how NexEco AI showed up.",
  cards: [
    {
      icon: "users" as const,
      body: "In those moments, what CyberCare valued was a team that responded fast, engaged with the actual problem, and treated their success as a shared goal rather than a support ticket to close.",
    },
    {
      icon: "trophy" as const,
      body: "That responsiveness compounds. When the infrastructure layer is dependable and the people behind it are, too, CyberCare's engineers can commit fully to what they do best.",
    },
  ],
};

export const cybercareLookingAhead = {
  heading: "Looking ahead",
  paragraphs: [
    "What began as a solution for Nord Security is now available to the wider market. CyberCare offers a 360-degree customer support solution: AI-automated and powered by NexEco AI, with real people ready to step in whenever needed, across chat, email, and voice. The customer support platform resolves requests instantly; a human takes over with full context when the issue complexity increases. In the end, the customer simply feels looked after, no matter the channel.",
    "Built on an AI infrastructure layer they can trust, CyberCare is scaling enterprise-grade support without scaling the risk. And they're just getting started.",
  ],
};

export const cybercareRelated = {
  heading: "Explore more customer stories",
  stories: [
    {
      slug: "payhawk",
      title: "Payhawk cuts security investigation time by 80% with NexEco AI",
      image: "relatedPayhawk" as const,
      alt: "payhawk hero",
    },
    {
      slug: "oxylabs",
      title: "Oxylabs doubles AI output and slashes costs with NexEco AI",
      image: "relatedOxylabs" as const,
      alt: "oxylabs hero",
    },
    {
      slug: "hostinger",
      title: "Hostinger Horizons scaled no-code AI web builder with NexEco AI",
      image: "relatedHostinger" as const,
      alt: "hostinger hero",
    },
    {
      slug: "nord-security",
      title: "Nord Security cuts coding-agent LLM costs by 46% with NexEco AI",
      image: "relatedNord" as const,
      alt: "Nord Security x NexEco AI",
    },
  ],
};
