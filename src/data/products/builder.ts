import { builderShots } from "@/assets/builder";
import { productDocs } from "@/data/products/shared";
import type { ProductFaqItem, RichSegment } from "@/data/products/types";

export const builderHero = {
  headingBefore: "AI Agent Builder:",
  headingAfter: "Create AI Agents in a single prompt",
  body: "Build AI Agents with no code and automate work that's slowing you down.",
  cta: { label: "Get nexos.ai", href: "/pricing" },
  guarantee: "14-day money-back guarantee",
};

export const builderIntro = {
  heading: "Building Agents is the easiest task you'll do today",
  body: "Automate repetitive to-dos and unlock non-stop work with specialized Agents tailored to every team and task. Your first Agent is minutes away.",
};

export const builderFeatures = [
  {
    id: "no-code",
    eyebrow: "No-code Agent Builder",
    title: "Build your Agent – no dev needed",
    body: [
      "Tell your Agent what to do in plain language, without a single line of code. AI Agent Builder asks follow-up questions, refines instructions, defines Agent workflows, and shows up ready to work. No IT team, no dev, just simple convo to build Agent from scratch.",
    ] satisfies RichSegment[],
    alt: "create agent from scratch or use template",
    image: builderShots.createAgent,
    visual: "right" as const,
  },
  {
    id: "integrations",
    eyebrow: "Integrations",
    title: "Works with all the tools you already use",
    body: [
      "Your Agent responds based on your Slack, Google Workspace, SharePoint, Jira, and more. Securely connect Agent Builder to your favorite work apps, files, and data. Enjoy work with no tab-switching, no disruption.",
    ] satisfies RichSegment[],
    alt: "founder integrations apps",
    image: builderShots.integrations,
    visual: "left" as const,
  },
  {
    id: "templates",
    eyebrow: "Agent templates",
    title: "Get a head start with expert-build templates",
    body: [
      "Pick from a library of specialized ",
      { href: "/features/ai-agents", label: "AI Agents" },
      ", pre-built for Marketing, Sales, HR, and more. Tested, refined, and ready to run. Deploy Agents as is, or customize to fit the way you work.",
    ] satisfies RichSegment[],
    alt: "nexos homepage agent templates",
    image: builderShots.templates,
    visual: "right" as const,
  },
  {
    id: "models",
    eyebrow: "Model-agnostic",
    title: "Find the right AI model for you",
    body: [
      "Run your Agents on ChatGPT, Claude, Gemini, and more, or let us auto-pick the best model for the job: complex tasks or easy Q&A. The right brain for every task, without you having to think about ",
      { href: "/ai-workspace-for-multiple-llms", label: "multiple LLMs" },
      ".",
    ] satisfies RichSegment[],
    alt: "model selection sales",
    image: builderShots.models,
    visual: "left" as const,
  },
  {
    id: "schedule",
    eyebrow: "Scheduling",
    title: "Set Agents to work on schedule",
    body: [
      "Set your Agents to run on your terms – hourly, daily, or on a custom trigger. Whether it’s generating a weekly report or generating a digest of Slack or Teams messages every morning, your Agent stays on top of the work so you don’t have to.",
    ] satisfies RichSegment[],
    alt: "agents schedule",
    image: builderShots.schedule,
    visual: "right" as const,
  },
  {
    id: "hitl",
    eyebrow: "Human in the loop",
    title: "Stay in control while agents do the work",
    body: [
      "Before an Agent sends a message, creates a ticket, or updates a record, it pauses and waits for your approval. You can see exactly what’s about to happen, every time. And, you get to decide whether to approve it.",
    ] satisfies RichSegment[],
    alt: "human in the loop",
    image: builderShots.humanInTheLoop,
    visual: "left" as const,
  },
];

export const builderSecurity = {
  title: "Your data stays yours",
  body: "AI Agents operate on enterprise-grade security, powered by SSO and RBAC, and comply with SOC 2 Type 2, ISO 27001, and GDPR. Focus on automation, and leave security to us.",
};

export const builderSteps = {
  heading: "How to build AI Agents with nexos.ai?",
  body: "If you can describe it, you can build it. Building Agents is a few steps away.",
  items: [
    {
      id: "describe",
      title: "Describe your Agent",
      body: "Tell the AI Agent Builder what you need in plain language. No tech specs, no code. Just describe the job as if you were briefing a new hire.",
    },
    {
      id: "refine",
      title: "Refine it",
      body: "The AI Agent Builder asks follow-up questions and sharpens the instructions until your Agent behavior is exactly right. You review, approve, and move on.",
    },
    {
      id: "connect",
      title: "Connect your tools",
      body: "Enable the Integrations your Agent needs. Slack, Jira, Google Workspace, SharePoint, and more. Your Agent works inside the tools you already use.",
    },
    {
      id: "test",
      title: "Test it",
      body: "Try prompting your Agent straight away to see it in action and make any quick adjustments.",
    },
    {
      id: "launch",
      title: "Launch your Agent",
      body: "Your Agent is ready. Run Agents and watch them handle the work you've been doing manually.",
    },
    {
      id: "share",
      title: "Share with your team",
      body: "Share your Agent across the team in one click. Everyone gets the same AI-powered output, every time.",
    },
  ],
};

export const builderCta = {
  heading: "Try Agent Builder",
  primary: { label: "Buy nexos.ai", href: "/pricing" },
};

export const builderTodo = {
  heading: "Your to-do list just got a new hire",
  bodyBefore: "Build ",
  bodyLink: { href: "/blog/types-of-ai-agents", label: "different types of specialized Agents" },
  bodyAfter: " for any team and business task.",
  placeholder: "What would you like to automate?",
};

export const builderUseCases = [
  {
    id: "sales",
    department: "Sales",
    icon: "sales" as const,
    body: "You spend too much time on research and admin, not enough on actual sales. Custom AI Agents handle the groundwork so your reps show up to every call ready to close.",
    quote:
      "“We built an Agent to automate account verification from start to finish. I can jump straight into sales calls with potential clients, AI does all the research.”",
    name: "Vismantas",
    portrait: "vismantas" as const,
    role: "Outbound Sales Lead",
    company: "Nord Security",
  },
  {
    id: "marketing",
    department: "Marketing",
    icon: "marketing" as const,
    body: "Your marketing moves faster when AI Agents handle the heavy lifting between ideas and execution.",
    quote:
      "“Research, idea generation, and audience classification are faster than ever. We created custom Agents for every product we work with, so now we can do content reviews and edits in no time.”",
    name: "Ilma",
    portrait: "ilma" as const,
    role: "Head of Communication",
    company: "NordVPN",
  },
  {
    id: "hr",
    department: "Recruitment & HR",
    icon: "hr" as const,
    body: "Finding great people is hard enough. Your HR shouldn't spend hours on admin. AI Agents screen, evaluate, and summarize so your team focuses on the humans, not the paperwork.",
    quote:
      "“nexos.ai saves us 10+ hours each week. We created a custom Agent that analyzes, evaluates, and writes candidate feedback. Now, we find high-quality talent in minutes.”",
    name: "Lauryna",
    portrait: "lauryna" as const,
    role: "Head of Talent Acquisition",
    company: "Nord Security",
  },
  {
    id: "legal",
    department: "Legal",
    icon: "legal" as const,
    body: "Precise control matters in legal. Your AI Agents pull from your own internal policies and knowledge, so every answer is accurate, compliant, and on your terms.",
    quote:
      "“We built an AI Agent to answer legal questions using our internal knowledge and policies. AI fully manages employee FAQs so our legal team can focus on high-value, strategic work.”",
    name: "Giedrė",
    portrait: "giedre" as const,
    role: "Legal Operations Lead",
    company: "Nord Security",
  },
];

export const builderFaq: ProductFaqItem[] = [
  {
    id: "best",
    question: "What is the best AI agent builder for small businesses and teams?",
    answer: [
      [
        "The best AI Agent Builder for small businesses and teams is one that lets anyone start building Agents without technical skills, connects to the AI tools your team already uses, and scales as your needs grow. nexos.ai ticks all of those boxes. You get a no-code AI Agent Builder with a full library of ready-made Agent templates, seamless Integrations with your existing tools, and enterprise-grade Agents that work for a team of five or a team of five hundred. You can build and deploy AI Agents in minutes, run complex Agent Workflows without a developer, and rely on dedicated customer support every step of the way.",
      ],
    ],
  },
  {
    id: "no-code",
    question: "Can you build AI agents without coding?",
    answer: [
      [
        "Yes, with nexos.ai, building Agents to handle complex tasks is possible with no code and the Agent development kit. Create Agents using the AI Agent Builder with natural language input, so you describe what you want your Agent to do in plain language, and the builder handles the rest. No code, no technical prompting, no dev required.",
      ],
    ],
  },
  {
    id: "cost",
    question: "How much does it cost to build AI agents?",
    answer: [
      [
        "Purchase any plan and get full access to the AI Agent Builder, Agent templates, and Integrations from day one.",
      ],
      [
        "For larger organizations, nexos.ai offers custom Enterprise pricing and extra features like ",
        { href: "/features/llm-observability", label: "observability" },
        " and ",
        { href: "/features/ai-governance", label: "governance" },
        ". You only pay for what your team actually uses.",
      ],
    ],
  },
  {
    id: "technical",
    question: "Do I need technical software to manage my AI agents?",
    answer: [
      [
        "You do not need a highly technical orchestration platform to create Agents and get serious results from an Agent Builder. nexos.ai is designed to handle Agent behaviour, Agent output, and autonomous Agents all in one place, without the engineering overhead that traditional orchestration platforms demand.",
      ],
      [
        "The nexos.ai Agent Builder gives you the full control you need to build, run, and manage your Agents from a single interface. You define the Agent behaviour, connect your tools, and monitor outputs without stitching together separate systems. If your needs grow into multi-Agent Workflows, nexos.ai scales with you. One platform, no extra infrastructure, no technical complexity.",
      ],
    ],
  },
];

export { productDocs };
