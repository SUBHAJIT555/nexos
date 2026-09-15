import { agentsAppIcons, agentsShots } from "@/assets/agents";
import { homepageTestimonials } from "@/data/homepage";
import { productDocs, workspaceSecurityCards } from "@/data/products/shared";
import type { ProductFaqItem, SecurityCard } from "@/data/products/types";

export const agentsHero = {
  headingBefore: "Agents for any team:",
  headingAfter: "Build with no code, in minutes",
  bullets: [
    "Start with pre-built Agent templates",
    "Securely connect your work tools to AI",
    "Your data is protected from day one",
  ],
  cta: { label: "Get nexos.ai", href: "/pricing" },
  guarantee: "14-day money-back guarantee",
  info: {
    label: "What are AI Agents?",
    heading: "What are AI agents?",
    paragraphs: [
      "AI Agents are intelligent Agents that leverage large language models (LLMs) and artificial intelligence to handle repetitive tasks with minimal human intervention. Unlike basic chatbots, AI Agents work with your tools and data, follow a defined role, and can pause for approval before they act.",
    ],
  },
};

export const agentsBuilt = {
  heading: "Built for productivity, scaled for teams",
  body: "Move beyond basic prompts. Let no-code Agents handle routine tasks while you focus on high-impact work.",
};

export const agentsFeatures = [
  {
    id: "custom",
    title: "Create custom no-code Agents in minutes",
    body: "Build powerful, custom Agents without writing a single line of code. Start fast with expert-built templates designed for real business teams in Marketing, Sales, and HR.",
    alt: "AI Agent template for SEO keyword researcher",
    image: agentsShots.createAgent,
    visual: "left" as const,
    chips: [
      { label: "Marketing", bg: "#E3FCEC", color: "#0C7E67", icon: "megaphone" as const },
      { label: "Sales", bg: "#F5F3FC", color: "#6B3EFF", icon: "trend" as const },
      { label: "Recruitment and HR", bg: "#D4F0FF", color: "#196087", icon: "users" as const },
    ],
  },
  {
    id: "templates",
    title: "Start fast with pre-built Agent templates",
    body: "Kick off with ready-to-use agent templates designed for real professionals, including your marketing, sales, legal, finance, and HR teams. Then customize them further to match the way you work.",
    alt: "An AI platform library of expert-built AI Agent templates for any team.",
    image: agentsShots.templates,
    visual: "right" as const,
  },
  {
    id: "tools",
    title: "Securely connect your work tools",
    body: "Generic AI doesn’t know your business, but nexos.ai Agents do. Securely connect to your knowledge base and favorite work tools, including Slack, Google Workspace, and MS Office.",
    alt: "Integrations with work tools like SharePoint, Slack, and Confluence, inside AI Agents.",
    image: agentsShots.integrations,
    visual: "left" as const,
    tools: [
      { label: "Slack", icon: agentsAppIcons.slack },
      { label: "Google Workspace", icon: agentsAppIcons.googleWorkspace },
      { label: "Microsoft Office", icon: agentsAppIcons.microsoftOffice },
    ],
  },
  {
    id: "control",
    title: "Stay in control while agents do the work",
    body: "Before an Agent sends a message, creates a ticket, or updates a record, it pauses and waits for your approval. You can see exactly what’s about to happen, every time. And, you get to decide whether to approve it.",
    alt: "human in the loop",
    image: agentsShots.humanInTheLoop,
    visual: "right" as const,
  },
  {
    id: "share",
    title: "Connect your team like never before",
    body: "Empower your whole team with AI. Work smarter together by sharing purposeful pre-built Agents across your department.",
    alt: "Sharing and permissions screen for collaborative AI Agents",
    image: agentsShots.share,
    visual: "left" as const,
  },
];

export const agentsIntegrations = {
  eyebrow: "Integrations",
  heading: "Bring your work knowledge with you",
  body: "Connect your AI platform to Slack, SharePoint, Google Drive, Confluence, and more. Let your Agents and Workflows work with real context, not generic prompts.",
  cta: { label: "Explore Integrations", href: productDocs.integrations },
};

export const agentsGallery = {
  heading: "No-code Agent for every task",
  body: "Turn repetitive tasks into high-performing Agents so you can focus on what matters.",
  ctaHeading: "Find the perfect Agent template for you",
  categoryHeadings: {
    Sales: "Accelerate your sales pipeline",
    Marketing: "Scale your marketing reach",
    "Recruitment / HR": "Hire top talent faster",
    Productivity: "Get your best work done fast",
  },
};

export const agentsTemplateCopy: Record<string, string> = {
  "Sales training assistant":
    "Help sales team members practice, learn, and improve discovery and closing skills.",
  "Persona feedback simulator":
    "Reviews content from a specific persona's perspective. Shares feedback, objections, and what resonates.",
};

export const agentsSecurityExtra: SecurityCard = {
  id: "trust",
  title: "Know exactly how your data is protected",
  body: "Our Trust Center is your one-stop shop for compliance certificates, security policies, audit reports, and answers to every security question you might have.",
};

export const agentsSecurity = {
  heading: "Your data is always secure",
  cards: [
    workspaceSecurityCards[0],
    workspaceSecurityCards[1],
    workspaceSecurityCards[2],
    {
      ...workspaceSecurityCards[3],
      body: "SOC 2 Type 2 and ISO 27001-certified. Fully compliant with the GDPR.",
    },
  ],
  extraCard: agentsSecurityExtra,
  trustHref: productDocs.trustCenter,
  trustLabel: "Visit the Trust Center",
};

const departmentById: Record<string, string> = {
  vytautas: "Marketing",
  lauryna: "HR / People",
  ilma: "Marketing",
  vismantas: "Sales",
  giedre: "Legal",
  juras: "Operations",
  dainius: "Product",
  boyko: "Operations",
  romas: "QA",
};

const quoteOrder = [
  "vytautas",
  "lauryna",
  "ilma",
  "vismantas",
  "giedre",
  "juras",
  "dainius",
  "boyko",
  "romas",
] as const;

export const agentsQuotes = {
  heading: "See what teams achieve with nexos.ai",
  slides: quoteOrder.map((id) => {
    const item = homepageTestimonials.items.find((entry) => entry.id === id);
    if (!item) {
      throw new Error(`Missing testimonial ${id}`);
    }
    return {
      id: item.id,
      quote: item.quote,
      name: item.name,
      role: item.role,
      company: item.company,
      department: departmentById[item.id],
    };
  }),
};

export const agentsCta = {
  heading: "Let the boring work run itself",
  primary: { label: "Get nexos.ai", href: "/pricing" },
};

export const agentsFaq: ProductFaqItem[] = [
  {
    id: "types",
    question: "What are the types of AI agents?",
    answer: [
      [
        "AI agents range from basic tools to advanced systems that learn over time. Simple Reflex Agents follow basic “if-then” rules to react to immediate triggers, while Model-Based Agents use internal data to track things they cannot see directly. Goal-Based Agents act with a specific objective in mind, and Utility-Based Agents go further by choosing the “best” or most efficient way to reach that goal. The most advanced are Learning Agents, which analyze past experiences and your specific data to improve their performance and provide more personalized results.",
      ],
    ],
  },
  {
    id: "safe",
    question: "Is it safe to use AI agents?",
    answer: [
      [
        "In general, the safety of AI agents depends on the governance and security protocols of the platform they run on. Since some agents don’t only access your data but also perform tasks and handle complex tasks autonomously, it is critical to use systems that offer granular control over what the agents can see and do.",
      ],
      [
        "At nexos.ai, your data stays private and protected from day one. We solve security concerns by providing enterprise-grade governance where organization owners have full control. Users cannot connect to unauthorized personal tools and can only toggle company-approved connections. You are always in charge: you choose the models and define the boundaries, ensuring that as you deploy AI across your team, your work remains secure and compliant.",
      ],
    ],
  },
  {
    id: "integrate",
    question: "Can AI agents integrate with existing tools?",
    answer: [
      [
        "Yes, the true power of intelligent agents lies in their ability to integrate directly with your tech stack to perform tasks such as creating tickets, updating CRM records, or drafting documents. While standard AI only provides information, nexos.ai Agents use secure integrations to act as a context-aware extension of your team. Eventually, it will unlock multi-Agent systems and complex workflows to automate routine tasks end-to-end.",
      ],
    ],
  },
  {
    id: "choose",
    question: "How do you choose the best AI agents for your business?",
    answer: [
      [
        "When evaluating AI agents, look for solutions that prioritize security, ease of integration, and the ability to perform tasks within your specific business context. The best agents should handle complex tasks that currently require excessive human intervention, allowing your human agents to focus on strategy rather than busywork. Unlike many other AI agents that operate in a vacuum, a high-quality agent must securely connect to your existing data to be truly effective.",
      ],
      [
        "At nexos.ai, we balance power with accessibility. Our Agents are designed for real-world impact to handle the repeatable parts of your workflow so you can multiply your output without increasing your workload. Whether you are looking for specific use cases or building from scratch, nexos.ai provides the flexibility to choose the best models for your needs while ensuring your data remains protected.",
      ],
    ],
  },
];
