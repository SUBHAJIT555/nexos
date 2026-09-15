export type StoryInline =
  | string
  | { href: string; label: string }
  | { bold: string };

export const payhawkMeta = {
  title: "Payhawk cuts spending with AI orchestration",
  description:
    "Discover how Payhawk made 200+ LLMs work for multiple teams and learn how to get the same results with nexos.ai.",
};

export const payhawkHero = {
  heading: "Payhawk cuts security investigation time by 80% with nexos.ai",
  paragraphs: [
    "Payhawk, a leading expense management platform, helps businesses control company spend and automate 90% of manual work. To help finance teams across Europe work smarter and better, Payhawk needed to scale their operations with AI.",
    "Here, Payhawk faced a paradox: growing with LLM tools vs. potentially exposing sensitive financial data to shadow AI. That's when nexos.ai stepped in.",
  ],
  author: "By Mia Lysikova",
  authorAlt: "Mia Lysikova",
  heroAlt: "Payhawk",
  metrics: [
    { value: "98%+", label: "Data accuracy rates with AI" },
    { value: "75%+", label: "Active user adoption rate" },
    { value: "40%+", label: "Reduced overall processing costs" },
  ],
};

export const payhawkToc = {
  heading: "Table of Contents",
  groups: [
    {
      id: "the-challenge",
      label: "The challenge",
      href: "#the-challenge",
      children: [
        { label: "Lack of security & compliance", href: "#lack-of" },
        { label: "Low usage limits", href: "#lack-of" },
        { label: "Little to no customization", href: "#lack-of" },
        { label: "Lack of control", href: "#lack-of" },
      ],
    },
    {
      id: "the-solution",
      label: "The solution",
      href: "#the-solution",
      children: [
        { label: "AI Guardrails", href: "#ai-guardrails" },
        { label: "200+ LLMs in one place", href: "#llm-one-place" },
        { label: "Customization control", href: "#customization-control" },
        { label: "Observability", href: "#observability" },
      ],
    },
    {
      id: "the-result",
      label: "The result",
      href: "#the-result",
      children: [],
    },
  ],
};

export const payhawkQuote = {
  name: "Boyko Karadzhov",
  title: "Co-Founder and CTO @Payhawk",
  alt: "Boyko Karadzhov",
};

export const payhawkChallenge = {
  heading: "The Challenge: Scale fintech with AI at no security risk",
  intro:
    "The Payhawk team was no stranger to AI before integrating nexos.ai. Both tech and non-tech teams experimented with LLMs:",
  teams: [
    {
      id: "finance",
      icon: "arrowUp" as const,
      title: "Finance",
      body: "Gathered data and generated ideas for critical decision-making and planning, but couldn't risk inputting sensitive financial data into LLMs.",
    },
    {
      id: "support",
      icon: "users" as const,
      title: "Customer Support",
      body: "Built an AI chatbot to resolve client queries 24/7, but struggled to connect internal databases to give context-aware answers.",
    },
    {
      id: "operations",
      icon: "clock" as const,
      title: "Operations",
      body: "Cut time on repetitive tasks by AI automation, but also procured many models with overlapping features that could've all been one app.",
    },
  ],
  quote: {
    before: "“Teams were exploring AI independently: great for innovation, but ",
    highlight: "terrible for coordination, compliance, and budget",
    after:
      ". We needed a centralized platform that maintained security and let all teams benefit from AI at the same time.”",
  },
};

export const payhawkLack = {
  heading:
    "By the start of 2025, scattered AI tools couldn’t support sustainable scalability anymore.",
  intro: "Payhawk faced these challenges:",
  cards: [
    {
      id: "security",
      icon: "eyeSlash" as const,
      title: "Lack of security & compliance",
      body: [
        "Payhawk ",
        { bold: "processes huge amounts of financial data" },
        " for some of the biggest companies in the EU. That meant unparalleled data privacy was an absolute must-have. Separate LLMs couldn't guarantee it.",
      ] satisfies StoryInline[],
    },
    {
      id: "limits",
      icon: "arrowDown" as const,
      title: "Low usage limits",
      body: [
        "Restrictive LLM usage posed another challenge. No matter how many AI tools Payhawk procured, there were ",
        { bold: "never enough tokens" },
        " for every team, volume, and types of AI queries.",
      ] satisfies StoryInline[],
    },
    {
      id: "customization",
      icon: "ban" as const,
      title: "Little to no customization",
      body: [
        "Payhawk struggled to find a ",
        { bold: "highly-customizable LLM" },
        " to fine-tune API to meet specific business needs. Previous attempts at AI integration resulted in low adoption rates and slow onboarding.",
      ] satisfies StoryInline[],
    },
    {
      id: "control",
      icon: "eyeOff" as const,
      title: "Lack of control",
      body: [
        "Just having an AI tool that works wasn't enough. The C-level team sought ",
        { bold: "complete transparency" },
        ": a feature to track both company-wide AI usage and individual, granular insights by each employee.",
      ] satisfies StoryInline[],
    },
  ],
};

export const payhawkMidCta = {
  kicker: "Centralize your AI operations with a single platform.",
  heading: "Replace scattered AI tools and subscriptions",
  cta: { label: "Buy now", href: "/pricing" },
};

export const payhawkSolution = {
  heading: "The Solution",
  paragraphs: [
    "nexos.ai turned Payhawk's fragmented AI toolkit into a secure, centralized AI powerhouse. The company stopped paying for and juggling multiple models.",
    "Instead, every tech and non-tech team gained instant access to 200+ LLMs through a single platform. All the convenience with enterprise-grade security, perfect for a fintech solution, built in.",
  ],
  numbersHeading: "Payhawk x nexos.ai success in numbers",
  numbersIntro: "Don't hear it from us. The results speak for themselves.",
};

export const payhawkHow = {
  heading: "Here's how nexos.ai solved each challenge.",
  guardrails: {
    heading: "1. AI Guardrails for fintech-ready security",
    paragraphs: [
      "AI guardrails help enforce precise controls over what data can be entered, helping Payhawk prevent any accidental sharing or processing of sensitive information.",
      "Payhawk set specific rules for company-wide AI usage:",
    ],
    bullets: [
      "Employees can’t input certain sensitive information.",
      "AI models aren’t allowed to process certain input types or produce specific responses.",
    ],
    closing:
      "Every interaction stays secure and compliant. Support can now automate responses without risking customer information. Finance can get information without risking leaks.",
    horizontalAlt: "how quardrails work horizontal",
    verticalAlt: "how quardrails work vertical",
  },
  llms: {
    heading: "2. Access to 200+ LLMs in one place",
    paragraphs: [
      [
        "nexos.ai's high usage limits meant every team, from Operations to Development, had the AI tools they needed.",
      ] satisfies StoryInline[],
      [
        "Payhawk unlocked ",
        {
          href: "/ai-workspace-for-multiple-llms#compare-models",
          label: "access to all leading LLMs from a single interface",
        },
        " in a single subscription. Employees switch models within the same window and keep workflow uninterrupted.",
      ] satisfies StoryInline[],
    ],
    alt: "elevate progress wheel model selection",
  },
  customization: {
    heading: "3. Full customization control",
    paragraphs: [
      [
        "Granular access controls let IT manage permissions at individual, department, or team level. For example, when HR needed access to GPT-4 for automating daily comms, Payhawk easily unlocked it for the whole department, but restricted the more expensive and unnecessarily complex models like Claude to Development team use only.",
      ] satisfies StoryInline[],
      [
        { href: "/ai-gateway", label: "AI Gateway" },
        " also serves as a fully customizable API architecture to scale features within Payhawk. Instead of building a custom solution in-house, nexos.ai handles it all at a fraction of the cost.",
      ] satisfies StoryInline[],
    ],
    alt: "function team management",
  },
  observability: {
    heading: "4. Complete usage transparency with Observability",
    paragraphs: [
      [
        "One ",
        { href: "/features/llm-observability", label: "Observability" },
        " dashboard reveals everything: who used what model, when, and how much it cost.",
      ] satisfies StoryInline[],
      [
        "Leadership could track AI spend by department, identify inefficiencies, and optimize usage in real-time.",
      ] satisfies StoryInline[],
    ],
    alt: "nexos metrics tokens usage",
  },
};

export const payhawkResult = {
  heading: "The Result",
  paragraphs: [
    "With nexos.ai, Payhawk achieved 98% data accuracy, slashed costs by 40%, and cut security response time by 80%, all while maintaining zero compliance violations.",
    "Today, every Payhawk uses AI. Finance processes billions securely. Support automates without exposing data. Development innovates with confidence.",
  ],
  quote:
    "“Before, teams were using ChatGPT and Gemini. Today, 75% of our workforce confidently uses enterprise AI. nexos.ai gave us 40% cost reduction and bulletproof security in one platform.”",
};

export const payhawkFinalCta = {
  heading: "Discover AI platform for your business",
  cta: { label: "Get nexos.ai", href: "/pricing" },
};
