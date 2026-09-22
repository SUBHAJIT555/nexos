export type StoryInline =
  | string
  | { href: string; label: string }
  | { bold: string };

export const oxylabsMeta = {
  title: "Oxylabs partners with NexEco AI to slash costs",
  description:
    "Read more about our Oxylabs success story: from no centralized AI tool to a seamless, org-wide orchestration layer for productivity and AI features.",
};

export const oxylabsHero = {
  heading: "Oxylabs doubles AI output and slashes costs with NexEco AI",
  intro:
    "Oxylabs, an online proxy and web scraping service, aimed to pass the competition by adapting to the new reality as quickly as possible. To overcome the most common AI transformation hurdles, the company turned to NexEco AI and achieved remarkable results in record time. Here’s how they’ve done it.",
  author: "By Mia Lysikova",
  authorAlt: "Mia Lysikova",
  heroAlt: "oxylabs hero",
  metrics: [
    { value: "80%", label: "Onboarding rate reached in 30 days" },
    { value: "3x", label: "Boost in AI project development" },
    { value: "20%", label: "Drop in operational costs" },
  ],
};

export const oxylabsToc = {
  heading: "Table of Contents",
  groups: [
    {
      id: "the-challenge",
      label: "The challenge",
      href: "#the-challenge",
      children: [
        { label: "Keep up with new models", href: "#oxylabs-challenges" },
        { label: "Cost transparency", href: "#oxylabs-challenges" },
        { label: "Restrictive usage limits", href: "#oxylabs-challenges" },
      ],
    },
    {
      id: "the-solution",
      label: "The solution",
      href: "#the-solution",
      children: [
        { label: "Model-agnostic approach", href: "#model-agnostic-approach" },
        { label: "Observability", href: "#observability" },
        { label: "AI Gateway", href: "#ai-gateway" },
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

export const oxylabsQuote = {
  name: "Juras Juršėnas",
  challengeTitle: "COO @Oxylabs",
  resultTitle: "COO of Oxylabs",
  alt: "Justas",
};

export const oxylabsChallenge = {
  heading: "The Challenge: Implement a centralized AI platform",
  paragraphs: [
    [
      "As a business that offers proxies and public data extraction solutions for ",
      { bold: "e-commerce, brand protection, cybersecurity" },
      ", and other businesses, Oxylabs heavily relies on the latest AI advancements.",
    ] satisfies StoryInline[],
    [
      "With successful AI automation, the company is capable of optimizing, improving, and potentially expanding its services for the customer. However, before the business could implement the new AI transformation, it needed to sort out a few kinks.",
    ] satisfies StoryInline[],
  ],
  quote:
    "“We needed an AI platform that evolved rapidly to keep up with new, constantly emerging LLM models.”",
};

export const oxylabsChallenges = {
  heading: "Oxylabs faced these challenges:",
  intro: "Oxylabs faced these challenges:",
  cards: [
    {
      id: "models",
      icon: "one" as const,
      title: "Keep up with new models",
      body: [
        "The main challenge the business faced was the need for an AI platform that would evolve rapidly to keep up with the new LLM models. Procuring access to each model separately also meant wasting budget on tools that could’ve been accessible on one platform.",
      ] satisfies StoryInline[],
    },
    {
      id: "cost",
      icon: "two" as const,
      title: "Cost transparency",
      body: [
        "To implement the change, Oxylabs also needed to ",
        { bold: "optimize cost transparency" },
        " management and budget control for AI usage and tailor the ",
        { bold: "onboarding" },
        " processes that would speed up the team adoption of AI tools.",
      ] satisfies StoryInline[],
    },
    {
      id: "limits",
      icon: "three" as const,
      title: "Restrictive usage limits",
      body: [
        "Finally, limited access to cutting-edge AI models (due to ",
        { bold: "restrictive usage limits or deployment options" },
        ") posed difficulties in finding a solution that would provide the right amount of operational freedom.",
      ] satisfies StoryInline[],
    },
  ],
};

export const oxylabsMidCta = {
  heading: "Replace scattered AI tools and subscriptions",
  cta: { label: "Buy now", href: "/pricing" },
};

export const oxylabsSolution = {
  heading: "The Solution",
  paragraphs: [
    [
      "To solve these issues, Oxylabs turned to ",
      { href: "/", label: "NexEco AI" },
      " and unlocked ",
      { bold: "unified access to a wide range of AI models" },
      " and high usage limits. In addition, NexEco AI provided ",
      { bold: "self-host deployment options" },
      ", allowing the customer to self-host sensitive and compliance-critical AI workloads while saving time, expenses, and manpower.",
    ] satisfies StoryInline[],
    [
      "NexEco AI enterprise-ready features ensured simple access management: users didn’t require extensive permissions and could access over ",
      { bold: "200 AI models from various providers" },
      ".",
    ] satisfies StoryInline[],
  ],
  numbersHeading: "Oxylabs x NexEco AI success in numbers",
  numbersIntro: "Don’t hear it from us. The results speak for themselves.",
  metrics: [
    { value: "80%", label: "Onboarding rate reached in 30 days" },
    { value: "3x", label: "Active user adoption rate" },
    { value: "20%", label: "Drop in operational costs" },
  ],
};

export const oxylabsHow = {
  heading: "Here’s how NexEco AI solved each challenge",
  modelAgnostic: {
    heading: "1. Model-agnostic approach",
    paragraphs: [
      [
        "With NexEco AI’s model-agnostic approach, the entire Oxylabs teams gained access to ",
        {
          href: "/ai-workspace-for-multiple-llms",
          label: "all leading LLMs under one roof",
        },
        " from day one. With features like Compare Models, the employees were also able to experiment and find the best LLMs for their workloads with no vendor lock-in.",
      ] satisfies StoryInline[],
    ],
    alt: "ai workspace compare models 4x3",
  },
  observability: {
    heading: "2. Observability",
    paragraphs: [
      [
        "With 360° ",
        { href: "/features/llm-observability", label: "observability" },
        ", tech leaders and Oxylabs can now control costs across their entire AI tech stack, track real-time usage, and apply team-level budgets. This helped avoid runaway spending, even when using multiple models or providers.",
      ] satisfies StoryInline[],
    ],
    alt: "team cost control 4x3",
  },
  gateway: {
    heading: "3. AI Gateway",
    paragraphs: [
      [
        "Beyond productivity tools for creative and operational teams, Oxylabs needed a comprehensive ",
        { href: "/ai-gateway", label: "AI Gateway" },
        " to power AI feature deployment.",
      ] satisfies StoryInline[],
      [
        "With NexEco AI, the speed of Oxylabs AI-driven project ",
        { bold: "development increased three times" },
        ", enabling rapid experimentation and iteration. In just the first quarter, the company ",
        { bold: "doubled its AI-driven feature output" },
        ", hitting milestones that once seemed unattainable.",
      ] satisfies StoryInline[],
    ],
    alt: "workspace metrics observability",
    altXs: "workspace metrics observability xs",
  },
};

export const oxylabsResult = {
  heading: "The Result",
  paragraphs: [
    [
      "The results Oxylabs achieved in just the first month were exceptional. The onboarding rate reached ",
      { bold: "80% in 30 days" },
      " and allowed nearly all key team members to adopt the platform in the first weeks.",
    ] satisfies StoryInline[],
    [
      "Cost optimization also became a game-changer. NexEco AI’s transparent usage tracking gave the Oxylabs team ",
      { bold: "unmatched visibility into its AI spend" },
      ". By identifying and eliminating inefficiencies, operational costs around AI workloads dropped by ",
      { bold: "20%" },
      ".",
    ] satisfies StoryInline[],
  ],
  quote:
    "“NexEco AI has significantly accelerated our AI transformation journey. With seamless access to the latest models and transparent cost management, we’ve gained both agility and clarity.”",
};

export const oxylabsFinalCta = {
  heading: "Discover AI platform for your business",
  cta: { label: "Get NexEco AI", href: "/pricing" },
};
