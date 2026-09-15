export type StoryInline =
  | string
  | { href: string; label: string }
  | { bold: string };

export const hostingerMeta = {
  title: "Hostinger Horizons powers AI builder with nexos.ai",
  description:
    "Discover how Hostinger Horizons powered its no-code AI web builder with nexos.ai. Avoid months of dev costs and use nexos.ai for AI orchestration.",
};

export const hostingerHero = {
  heading: "Hostinger Horizons scaled no-code AI web builder with nexos.ai",
  paragraphs: [
    "When Hostinger set out to launch their no-code web app builder, they already knew one thing: relying on a single AI model provider wouldn’t cut it.",
    "Building their own orchestration layer and centralized AI platform meant hiring AI developers, setting up infrastructure, and managing ever-evolving model APIs. That’s why they launched with nexos.ai.",
  ],
  author: "By Mia Lysikova",
  authorAlt: "Mia Lysikova",
  heroAlt: "hostinger hero",
  metrics: [
    { value: "30%", label: "Saved in developer hiring costs" },
    { value: "3M+", label: "Client websites on Hostinger" },
  ],
};

export const hostingerToc = {
  heading: "Table of Contents",
  groups: [
    {
      id: "the-challenge",
      label: "The challenge",
      href: "#the-challenge",
      children: [
        { label: "Costly in-house development", href: "#the-challenge" },
        { label: "Long-term maintenance", href: "#the-challenge" },
        { label: "Need of oversight", href: "#the-challenge" },
        { label: "Operational load", href: "#the-challenge" },
      ],
    },
    {
      id: "the-solution",
      label: "The solution",
      href: "#the-solution",
      children: [
        { label: "AI Gateway", href: "#ai-gateway" },
        { label: "Enterprise-grade scaling", href: "#enterprise-grade-scaling" },
        { label: "Built-in fallback logic", href: "#built-in-fallback-logic" },
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

export const hostingerQuote = {
  name: "Dainius Kavoliūnas",
  title: "Head of Product @Hostinger Horizons",
  alt: "Dainius Kavoliu nas",
};

export const hostingerChallenge = {
  heading: "The Challenge: Launch a no-code AI platform with custom AI gateway",
  intro: [
    "The Hostinger team was no stranger to AI before integrating nexos.ai. Both tech and non-tech teams experimented with LLMs:",
    "That simplicity is powered by some serious backend complexity:",
  ],
  bullets: [
    [
      "The team ",
      { bold: "anticipated heavy usage" },
      ". A constant stream of prompts and AI interactions would need to be processed with speed and reliability.",
    ] satisfies StoryInline[],
    [
      "To keep up, Horizons needed a system that could ",
      { bold: "route requests, maintain uptime" },
      ".",
    ] satisfies StoryInline[],
    [
      "At the same time, the team needed ",
      { bold: "enterprise-level governance" },
      " without the burden of building it all from scratch.",
    ] satisfies StoryInline[],
  ],
  quote: {
    before: "“If we tried building an AI gateway ourselves, it would have taken ",
    highlight: "months and a huge dev budget.",
    after: "”",
  },
  cardsIntro:
    "Building a custom AI gateway in-house mean a range of challenges Hostinger Horizons wasn’t ready to solve on their own:",
  cards: [
    {
      id: "costly",
      icon: "one" as const,
      title: "Costly in-house development",
      body: [
        "Developing a custom AI gateway in house came with exorbitant costs and timelines: the team estimated the need for ",
        { bold: "2+ specialized developers" },
        " and ",
        { bold: "months" },
        " of focus work. This was too slow and resource-intensive.",
      ] satisfies StoryInline[],
    },
    {
      id: "maintenance",
      icon: "two" as const,
      title: "Long-term maintenance",
      body: [
        "The challenge didn’t stop at AI gateway development. If such a robust infrastructure was implemented, it would’ve required more ",
        { bold: "costly, constant, dedicated maintenance and improvement" },
        ".",
      ] satisfies StoryInline[],
    },
    {
      id: "oversight",
      icon: "three" as const,
      title: "Need of oversight",
      body: [
        "Traditional approaches (like calling a single model API directly for every request) falter as an application scales. Costs can ",
        { bold: "spike, latency can increase, and reliability can suffer" },
        " if there’s no system to intelligently distribute and oversee the AI workload.",
      ] satisfies StoryInline[],
    },
    {
      id: "load",
      icon: "four" as const,
      title: "Operational load",
      body: [
        "When users are building apps, chatting with support bots, or analyzing data all at once, it puts serious pressure on AI services. Hostinger needed a bulletproof platform that ",
        { bold: "can support scale, not catch up to it" },
        " as the user base grows.",
      ] satisfies StoryInline[],
    },
  ],
};

export const hostingerMidCta = {
  heading: "Replace scattered AI tools and subscriptions",
  cta: { label: "Get nexos.ai", href: "/pricing" },
};

export const hostingerSolution = {
  heading: "The Solution",
  paragraphs: [
    [
      "With nexos.ai, Hostinger gained access to ",
      { href: "/ai-workspace-for-multiple-llms", label: "all the top models" },
      " through a ",
      { bold: "single control point" },
      ", with routing, caching, and observability built in.",
    ] satisfies StoryInline[],
    [
      "No Frankenstein stack. No vendor lock-in. Instead of Horizon’s front-end directly calling a single AI model, all requests now go through the ",
      { href: "/ai-gateway", label: "nexos.ai Gateway" },
      ". This gateway acts as a smart traffic controller between Hostinger’s application and various third-party AI models.",
    ] satisfies StoryInline[],
  ],
  numbersHeading: "Hostinger Horizons x nexos.ai success in numbers",
  numbersIntro: "Don’t hear it from us. The results speak for themselves.",
  metrics: [
    { value: "30%", label: "Saved in developer hiring costs" },
    { value: "3M+", label: "Client websites on Hostinger" },
    { value: "6+", label: "Months of development saved" },
  ],
};

export const hostingerHow = {
  heading: "Here’s how nexos.ai solved each challenge",
  gateway: {
    heading: "1. AI gateway",
    paragraphs: [
      [
        "With nexos.ai handling the complexity of AI, Hostinger’s developers and data scientists are freed from building and maintaining a custom AI infrastructure.",
      ] satisfies StoryInline[],
      [
        "Instead of spending months engineering a homegrown solution for load balancing or writing custom logic, they integrated an off-the-shelf orchestration platform and trusted its algorithms. The ",
        { bold: "savings were immediate" },
        ". Both in ",
        { bold: "engineering hours and budget" },
        ".",
      ] satisfies StoryInline[],
    ],
    alt: "workspace metrics observability",
    altXs: "workspace metrics observability xs",
  },
  scaling: {
    heading: "2. Enterprise-grade scaling",
    paragraphs: [
      [
        "By building on nexos.ai, Hostinger Horizons saved significant time and resources, not just in development, but in ",
        { bold: "long-term maintenance" },
        ". Hostinger Horizons handles ",
        { bold: "more users and more complex" },
        " projects without lag or drop in output quality.",
      ] satisfies StoryInline[],
      [
        "As demand grows, nexos.ai ",
        { bold: "dynamically scales AI usage" },
        " across providers to maintain snappy performance. This has a direct impact on user satisfaction: creators using Horizons get near-instant responses and can iterate on their app ideas rapidly, which is essential for a creative flow.",
      ] satisfies StoryInline[],
    ],
    alt: "metric and log spans details",
  },
  fallback: {
    heading: "3. Built-in fallback logic",
    paragraphs: [
      [
        "When your preferred provider goes down or starts timing out, nexos.ai automatically switches requests to a backup model. Behind the scenes, it balances traffic across providers to ",
        { bold: "reduce latency" },
        " and uses ",
        { bold: "intelligent caching to cut redundant calls" },
        ", lowering costs without sacrificing speed.",
      ] satisfies StoryInline[],
      [
        "Even top-tier AI APIs can experience outages or slowdowns, but with a smart gateway, your product keeps running. The user doesn’t notice anything. The request still completes. Your team doesn’t need to wake up and scramble for a hotfix.",
      ] satisfies StoryInline[],
    ],
    alt: "fallback model",
  },
};

export const hostingerResult = {
  heading: "The Result",
  paragraphs: [
    [
      "Hostinger Horizons didn’t cut corners. They built a modern, AI-powered no-code platform that can respond to users in real time and do it all securely.",
    ] satisfies StoryInline[],
    [
      "But building everything in-house can come at a cost in time, resources, and opportunity. With nexos.ai, they ",
      { bold: "stayed focused on product velocity and user experience" },
      ". The orchestration layer in a form of centralized AI platform handled itself.",
    ] satisfies StoryInline[],
  ],
  quote: {
    before: "“Integrating nexos.ai was seamless. It saved us the ",
    highlight: "equivalent of two yearly salaries",
    after: " in development cost.”",
  },
};

export const hostingerFinalCta = {
  heading: "Discover AI platform for your business",
  cta: { label: "Get nexos.ai", href: "/pricing" },
};
