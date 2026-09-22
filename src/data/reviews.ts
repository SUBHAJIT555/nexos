import { salesMailto } from "@/config/contact";
import type { StaticImageData } from "next/image";
import type { ProductFaqItem } from "@/data/products/types";
import {
  reviewsAwardLogos,
  reviewsCreators,
  reviewsEventShots,
  reviewsFeaturedLogos,
  reviewsPortraits,
  reviewsWhyShots,
} from "@/assets/reviews";

export const reviewsMeta = {
  title: "NexEco AI reviews and testimonials 2026",
  description:
    "Teams trust NexEco AI to work smarter and move faster. Read real NexEco AI reviews and testimonials from users, experts, and industry leaders in 2026.",
} as const;

export const reviewsHero = {
  headingAccent: "NexEco AI ",
  headingRest: "review in 2026",
  body: "Don't take our word for it. Here's what the people actually using NexEco AI have to say.",
  bullets: [
    "Hear reviews from real teams that use NexEco AI daily",
    "Read what leading industry experts say about our AI platform",
    "Learn more about our award-winning AI solution",
  ],
  primaryCta: { label: "Talk to Solutions Engineer", href: salesMailto },
  secondaryCta: { label: "Get API Key", href: "/pricing" },
  imageAlt: "NexEco AI ai review",
} as const;

export const reviewsIntro = {
  headingLine1: "NexEco AI reviews:",
  headingLine2: "See what experts and users think",
  beforeBrand: "Is ",
  brand: "NexEco AI",
  afterBrand: " the best AI platform for work productivity? Let’s ask our users and tech experts.",
} as const;

export const reviewsTabs = [
  { id: "podcasts", label: "Podcasts" },
  { id: "featured", label: "Featured" },
  { id: "users", label: "Users" },
  { id: "awards", label: "Awards" },
  { id: "events", label: "Events" },
] as const;

export type ReviewsTabId = (typeof reviewsTabs)[number]["id"];

export type ReviewQuoteCard = {
  id: string;
  title: string;
  quote: string;
  logo: StaticImageData | string;
  logoAlt: string;
  logoHeightClass: string;
};

export const reviewsPodcastColumns: ReviewQuoteCard[][] = [
  [
    {
      id: "20vc",
      title: "The Twenty Minute VC (20VC)",
      quote:
        "“NexEco AI gives you complete visibility and control over all AI use in your company. Business teams use the models they actually need. It’s not about stopping innovation, it’s about enabling it safely.”",
      logo: reviewsCreators.twentyVc,
      logoAlt: "creator 20VC",
      logoHeightClass: "h-16 w-auto",
    },
    {
      id: "focused",
      title: "Focused",
      quote:
        "“Prevent confidential data leaks, create custom reusable AI agents for repetitive tasks, and help your team save time and work more efficiently on a secure unified platform.\"",
      logo: reviewsCreators.focused,
      logoAlt: "creator Focused",
      logoHeightClass: "h-16 w-auto",
    },
  ],
  [
    {
      id: "this-week",
      title: "This Week In Startups",
      quote:
        "“NexEco AI is the unified AI platform for secure AI adoption and productivity.”",
      logo: reviewsCreators.thisWeek,
      logoAlt: "creator This week",
      logoHeightClass: "h-16 w-auto",
    },
    {
      id: "cortex",
      title: "Cortex",
      quote:
        "\"NexEco AI brings it all under one roof, a unified platform with workspaces, model access and reusable assistance. Less chaos, lower costs, more growth.\"",
      logo: reviewsCreators.cortex,
      logoAlt: "creator Cortex",
      logoHeightClass: "h-16 w-auto",
    },
    {
      id: "upgrade",
      title: "Upgrade",
      quote:
        "\"A unified platform that brings workspaces, model access, and governance together.”",
      logo: reviewsCreators.upgrade,
      logoAlt: "creator Upgrade",
      logoHeightClass: "h-16 w-auto",
    },
  ],
  [
    {
      id: "economics-help",
      title: "Economics Help",
      quote:
        "“NexEco AI unlocks all the leading AI models – ChatGPT, Claude, Gemini, and more – all in one place. For teams, you can jump between LLMs and build custom AI agents. For admins, replace dozens of AI subscriptions with one tool.”",
      logo: reviewsCreators.economicsHelp,
      logoAlt: "creator Economics Help",
      logoHeightClass: "h-16 w-auto",
    },
    {
      id: "productive",
      title: "A Productive Conversation",
      quote:
        "“Teams can move faster, leadership stays in control, and confidential data stays protected. Think of it as the safe path to innovation. You still get the speed and flexibility of AI, but with the peace of mind that your data is secure.\"",
      logo: reviewsCreators.productiveConversation,
      logoAlt: "creator Productive Conversation",
      logoHeightClass: "h-16 w-auto",
    },
  ],
];

export const reviewsFeaturedColumns: ReviewQuoteCard[][] = [
  [
    {
      id: "techcrunch",
      title: "",
      quote:
        "“There's a big gap between running AI as pilots and going into production... We’ve finally gone beyond the hype of AI, and now the real-world applications are coming.”",
      logo: reviewsFeaturedLogos.techcrunch,
      logoAlt: "TechCrunch",
      logoHeightClass: "h-[60px] w-auto",
    },
    {
      id: "cybernews",
      title: "",
      quote:
        "“NexEco AI addresses the fundamental infrastructure gap to prevent teams from capturing AI's value while maintaining security control.”",
      logo: reviewsFeaturedLogos.cybernews,
      logoAlt: "cybernews",
      logoHeightClass: "h-6 w-auto",
    },
  ],
  [
    {
      id: "bloomberg",
      title: "",
      quote:
        "“NexEco AI is sorting the AI mess into one central hub by scale, speed, and security.”",
      logo: reviewsFeaturedLogos.bloomberg,
      logoAlt: "Bloomberg",
      logoHeightClass: "h-[60px] w-auto",
    },
    {
      id: "politico",
      title: "",
      quote:
        "“More and more critical data is leaving companies and other organizations, ending up with large AI companies. NexEco AI enables an organization to harness large language models while keeping security and cost management front and center.”",
      logo: reviewsFeaturedLogos.politico,
      logoAlt: "POLITICO",
      logoHeightClass: "h-[60px] w-auto",
    },
  ],
  [
    {
      id: "forbes",
      title: "",
      quote:
        "“NexEco AI can reach the organization horizontally to meet 60-70% of the organization’s AI needs.”",
      logo: reviewsFeaturedLogos.forbes,
      logoAlt: "Forbes",
      logoHeightClass: "h-[25px] w-auto",
    },
    {
      id: "techradar",
      title: "",
      quote:
        "“We've built NexEco AI to be the platform that makes working with AI as intuitive as working with human teams.”",
      logo: reviewsFeaturedLogos.techradar,
      logoAlt: "techradar",
      logoHeightClass: "h-6 w-auto",
    },
  ],
];

export type ReviewUserBadge = "marketing" | "hr" | "operations" | "product" | "qa";

export type ReviewUser = {
  id: keyof typeof reviewsPortraits;
  badge: ReviewUserBadge;
  badgeLabel: string;
  name: string;
  role: string;
  company: string;
  quote: string;
};

export const reviewsUsers: ReviewUser[] = [
  {
    id: "vytautas",
    badge: "marketing",
    badgeLabel: "Marketing",
    name: "Vytautas Romeika",
    role: "CMO",
    company: "Pigu.lt",
    quote:
      "“Our content team needed to optimize 4 million products in our catalog – that’s a lot. And to do it by hand would take 3 years and cost us millions of euros. That’s extremely expensive. With NexEco AI, optimizing one item is 99.8% cheaper than doing it manually.”",
  },
  {
    id: "lauryna",
    badge: "hr",
    badgeLabel: "HR / People",
    name: "Lauryna Girėnienė",
    role: "Head of Talent Acquisition",
    company: "Nord Security",
    quote:
      "“NexEco AI saves us 10+ hours each week. We created a custom Agent that analyzes, evaluates, and writes feedback for candidates based on objective metrics. Now, we find high-quality talent in minutes and don’t waste hours writing feedback from scratch.”",
  },
  {
    id: "ilma",
    badge: "marketing",
    badgeLabel: "Marketing",
    name: "Ilma Vienažindytė",
    role: "Head of Communication",
    company: "NordVPN",
    quote:
      "\"Using NexEco AI has helped us save time and energy by making such everyday processes as article research, idea generation, and target audience segment classification faster and more efficient. With the help of agents customized for every product we work with, we can now perform content review and implement suggested changes in no time.”",
  },
  {
    id: "juras",
    badge: "operations",
    badgeLabel: "Operations",
    name: "Juras Juršėnas",
    role: "COO",
    company: "Oxylabs",
    quote:
      "“NexEco AI has significantly accelerated our AI transformation journey. With seamless access to the latest models and transparent cost management, we’ve gained both agility and clarity.”",
  },
  {
    id: "dainius",
    badge: "product",
    badgeLabel: "Product",
    name: "Dainius Kavoliūnas",
    role: "Head of Product",
    company: "Hostinger Horizons",
    quote:
      "“Integrating NexEco AI was seamless. It saved us the equivalent of two yearly salaries in development cost.”",
  },
  {
    id: "boyko",
    badge: "operations",
    badgeLabel: "Operations",
    name: "Boyko Karadzhov",
    role: "CO-Founder and CTO",
    company: "Payhawk",
    quote:
      "“Teams were exploring AI independently: great for innovation, but terrible for coordination, compliance, and budget. We needed a centralized platform that maintained security and let all teams benefit from AI at the same time.”",
  },
  {
    id: "romas",
    badge: "qa",
    badgeLabel: "QA",
    name: "Romas Strabeika",
    role: "CIO and Head of IT",
    company: "Pigu.lt",
    quote:
      "“NexEco AI transformed the core of our e-commerce operations. What would have taken us three years and millions of euros to accomplish manually, we achieved in just six weeks at a fraction of the cost.”",
  },
];

export const reviewsUserBadgeStyle: Record<
  ReviewUserBadge,
  { bg: string; color: string }
> = {
  marketing: { bg: "#E3FCEC", color: "#0C7E67" },
  hr: { bg: "#D4F0FF", color: "#196087" },
  operations: { bg: "#D9E0FF", color: "#6B3EFF" },
  product: { bg: "#C6F3EE", color: "#0A8550" },
  qa: { bg: "#DCE9FF", color: "#385AFF" },
};

export type ReviewAward = {
  id: string;
  caption: string;
  logos: { src: StaticImageData | string; alt: string; className: string }[];
};

export const reviewsAwards: ReviewAward[] = [
  {
    id: "vilnius",
    caption: "Emerging Vilnius Ambassador 2026",
    logos: [
      {
        src: reviewsAwardLogos.vilnius,
        alt: "Vilnius TechFusion",
        className: "h-[60px] w-auto max-w-[160px]",
      },
    ],
  },
  {
    id: "gra",
    caption: "Global Recognition Award 2026",
    logos: [
      { src: reviewsAwardLogos.gra, alt: "GRA", className: "h-[60px] w-auto" },
    ],
  },
  {
    id: "disruptors",
    caption: "Disruptors 60\nList",
    logos: [
      {
        src: reviewsAwardLogos.greenfield,
        alt: "Greenfield Partners",
        className: "h-[60px] w-auto max-w-[128px]",
      },
      {
        src: reviewsAwardLogos.techcrunch,
        alt: "TechCrunch",
        className: "h-[30px] w-auto max-w-[132px]",
      },
    ],
  },
  {
    id: "firstpick",
    caption: "The most promising startup 2025",
    logos: [
      {
        src: reviewsAwardLogos.firstpick,
        alt: "Firstpick",
        className: "h-[60px] w-auto max-w-[128px]",
      },
      {
        src: reviewsAwardLogos.verslo,
        alt: "Verslo žinios",
        className: "h-[60px] w-auto max-w-[89px]",
      },
    ],
  },
  {
    id: "euro-seed",
    caption: "Europe’s 50 most promising seed-stage startups",
    logos: [
      {
        src: reviewsAwardLogos.euroSeed,
        alt: "Euro Seed 50",
        className: "h-[60px] w-auto max-w-[89px]",
      },
    ],
  },
];

export const reviewsEvents = [
  {
    id: "gartner",
    title: "Gartner IT Symposium/Xpo™ 2025",
    image: reviewsEventShots.gartner,
    imageAlt: "event gartner xpo",
  },
  {
    id: "hackathon",
    title: "AI-Only Hackathon",
    image: reviewsEventShots.hackathon,
    imageAlt: "event ai hackathon",
  },
] as const;

export type ReviewRichSegment = string | { href: string; label: string };

export const reviewsWhy = {
  heading: "Why choose NexEco AI?",
  body: "Keep work moving with AI Agents and no-code automation. Manage everything from one AI platform.",
  blocks: [
    {
      id: "custom",
      visual: "right" as const,
      title: "Create custom no-code AI Agents in minutes",
      body: [
        "Build powerful AI Agents without having to write a single line of code – simply define their role, set the scope of their work, and connect them to your company's data via ",
        { href: "/features/projects", label: "Projects" },
        " for instant action.",
      ] satisfies ReviewRichSegment[],
      cta: { label: "Explore NexEco AI Agents", href: "/features/ai-agents" },
      image: reviewsWhyShots.createAgent,
      imageAlt: "Agents create agent",
    },
    {
      id: "templates",
      visual: "left" as const,
      title: "Start fast with pre-built Agent templates",
      body: [
        "Kick off with ready-to-use Agent templates designed for real professionals, including your marketing, sales, legal, finance, and HR teams. Then customize them further to match the way you work.",
      ] satisfies ReviewRichSegment[],
      image: reviewsWhyShots.templates,
      imageAlt: "An AI platform library of expert-built AI Agent templates for any team.",
    },
    {
      id: "chat",
      visual: "right" as const,
      title: "Chat with the best AI models",
      body: [
        "Work with all of the world’s best AI models (including ChatGPT, Claude, and Gemini) at the same time. Our single unified chat lets you use deep reasoning and real-time web search, switch models instantly, ",
        { href: "/features/compare-ai-models", label: "compare models" },
        ", and find the right answers for any task.",
      ] satisfies ReviewRichSegment[],
      cta: { label: "Explore AI Workspace", href: "/ai-workspace-for-multiple-llms" },
      image: reviewsWhyShots.modelSelection,
      imageAlt: "Selection of leading AI models for Chat in the all-in-one AI platform.",
    },
    {
      id: "control",
      visual: "left" as const,
      title: "Have full control over your AI",
      body: [
        { href: "/features/llm-observability", label: "LLM Observability" },
        " gives you a real-time view of every interaction, every cost, and every model your team uses. You set the rules via ",
        { href: "/features/ai-governance", label: "AI Governance" },
        ", NexEco AI enforces them.",
      ] satisfies ReviewRichSegment[],
      image: reviewsWhyShots.observability,
      imageAlt: "LLM Observability spend and usage dashboard.",
    },
  ],
} as const;

export const reviewsIntegrations = {
  eyebrow: "Integrations",
  heading: "Bring your knowledge with you",
  body: "Connect your AI platform to your work tools like Slack, SharePoint, Google Drive, and Confluence. Give your Agents real context, not generic prompts.",
  cta: { label: "Explore Integrations", href: "/features/ai-integrations" },
} as const;

export const reviewsHow = {
  heading: "How does NexEco AI work?",
  steps: [
    {
      id: "01",
      title: "Get started with NexEco AI.",
      body: [
        { href: "/pricing", label: "Choose the plan" },
        " that fits you best and start using AI across your work.",
      ] satisfies ReviewRichSegment[],
    },
    {
      id: "02",
      title: "Sign in to the platform.",
      body: [
        "Follow the instructions in your email inbox and set up your account.",
      ] satisfies ReviewRichSegment[],
    },
    {
      id: "03",
      title: "Start working with AI.",
      body: [
        "There are several ways to get started: choose an AI model to chat, pick an Agent template, or build a custom no-code Agent.",
      ] satisfies ReviewRichSegment[],
    },
  ],
} as const;

export const reviewsCommunity = {
  heading: "Discover NexEco AI community",
  cards: [
    {
      id: "advice",
      icon: "globe" as const,
      title: "Expert advice",
      body: "Ask questions and get practical answers from daily users.",
    },
    {
      id: "workflows",
      icon: "servers" as const,
      title: "Real workflows",
      body: "See how others automate tasks and scale their output.",
    },
    {
      id: "impact",
      icon: "inbox" as const,
      title: "Product impact",
      body: "Share feedback to help shape future improvements.",
    },
    {
      id: "inspiration",
      icon: "sparkles" as const,
      title: "Fresh inspiration",
      body: "Discover new tips, prompts, and setup ideas.",
    },
  ],
  ctaLabel: "Join the NexEco AI community",
} as const;

export const reviewsFaq = {
  heading: "FAQ",
  items: [
    {
      id: "trustworthy",
      question: "Is NexEco AI trustworthy?",
      answer: [
        [
          "Yes. NexEco AI is SOC 2 Type 2 and ISO 27001-certified, fully GDPR-compliant, and hosted in Europe. Our platform has been covered by TechCrunch, Forbes, Bloomberg, and TechRadar. Thousands of professionals trust NexEco AI with their daily work.",
        ],
      ],
    },
    {
      id: "safe",
      question: "Is NexEco AI safe for my business?",
      answer: [
        [
          "Absolutely. Your data is never used to train AI models unless you explicitly allow it. You can enable zero data retention at the model level. Every interaction is logged in a full audit trail. Guardrails let you define exactly what your team can and can't do. And your AI Workspace is secured with SSO and role-based access controls.",
        ],
      ],
    },
    {
      id: "recommend",
      question: "Why do users recommend NexEco AI?",
      answer: [
        [
          "Teams who use NexEco AI save 10+ hours a week by automating repetitive tasks with AI. Companies reduce AI costs by accessing dozens of LLM subscriptions into one platform. And unlike other tools, NexEco AI gives leadership full visibility while giving individual contributors the freedom to move fast. It's the rare tool that works for everyone in the organization at the same time.",
        ],
      ],
    },
    {
      id: "compare",
      question: "How does NexEco AI compare to other AI platforms?",
      answer: [
        [
          "NexEco AI brings together everything that other tools keep separate. Model access, AI Agents, AI Security and Governance, and Observability, all in one place. You don't need five subscriptions to get one complete AI stack. Check out our in-depth reviews and comparisons to see how we stack up.",
        ],
      ],
    },
  ] satisfies ProductFaqItem[],
};
