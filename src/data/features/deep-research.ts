import { deepResearchShots } from "@/assets/features";
import { faqParagraphs } from "@/data/products/shared";
import type { ProductFaqItem, ProductLink } from "@/data/products/types";

export const deepHero = {
  headingBefore: "Deep Research:",
  headingAfter: "Hours of work, done in minutes",
  body: "Stop drowning in browser tabs – use Deep Research as your personal research assistant. Get pro-level reports in minutes, not days.",
  primary: { label: "Get NexEco AI", href: "/pricing" } satisfies ProductLink,
  guarantee: "No credit card required.",
  info: {
    label: "What is Deep Research?",
    heading: "What is Deep Research?",
    paragraphs: [
      "Deep Research is an agentic system designed to handle complex research tasks and projects in minutes rather than hours.",
      "NexEco AI Deep Research feature analyzes your request using a Large Language Model (LLM), breaks it down, plans the structure, performs a web search, and generates comprehensive reports in a matter of minutes. It also adjusts the final result per request and answers follow-up questions to refine the research.",
    ],
  },
};

export const deepDepth = {
  heading: "The depth of a human analyst. The speed of AI.",
  intro:
    "See why high-performance teams choose NexEco AI Deep Research as their go-to productivity tool.",
  cards: [
    {
      id: "time",
      title: "Save time",
      body: "Days of manual research, condensed into minutes. AI generates comprehensive, cited reports in 5-20 minutes while you focus on the bigger picture.",
      image: deepResearchShots.saveTime,
      alt: "Deep research in progress — 5 minutes remaining",
      theme: "lavender" as const,
    },
    {
      id: "model",
      title: "Choose an AI model",
      bodyBefore: "Don't settle for one AI model. ",
      linkLabel: "Access all LLMs in one place",
      href: "/ai-workspace-for-multiple-llms",
      bodyAfter:
        ", including Claude, ChatGPT, and more. Choose the model you trust and go straight to Deep Research.",
      image: deepResearchShots.chooseModel,
      alt: "AI model picker with Gemini, Llama, Claude, and GPT — Claude selected",
      theme: "dark" as const,
    },
    {
      id: "insights",
      title: "Get deeper insights",
      body: "Most AI just summarizes – Deep Research conducts comprehensive, multi-step investigations and delivers structured reports with full source citations.",
      image: deepResearchShots.insights,
      alt: "Found sources (24) — list of cited source icons",
      theme: "light" as const,
    },
  ],
};

export const deepHow = {
  heading: "How does Deep Research work",
  intro:
    "Need expert-level insights on complex topics, not quick answers? Deep Research reads all available online sources and produces a detailed analysis in 5 to 20 minutes.",
  steps: [
    {
      id: "ask",
      title: "Ask",
      body: "Deep Research is seamlessly integrated into the AI Chat you’re already using. Simply toggle Deep Research on and ask a question. Make sure to include all relevant context.",
    },
    {
      id: "plan",
      title: "Plan",
      body: "NexEco AI structures how to process your request and creates a strategic research plan.",
    },
    {
      id: "search",
      title: "Search",
      body: "NexEco AI browses dozens of websites for you, checking multiple angles and sources.",
    },
    {
      id: "analyze",
      title: "Analyze & synthesize",
      body: "NexEco AI analyzes the findings, spots patterns, and generates deep insights that reveal the core context.",
    },
    {
      id: "report",
      title: "Report",
      body: "NexEco AI generates an easy-to-understand cited report, with tables, key findings, and actionable insights.",
    },
  ],
  note: "After completing Deep Research, the Chat auto-switches to standard quick-answer mode for follow-up questions.",
};

export const deepTeams = {
  heading: "How teams use Deep Research",
  intro: "An intuitive and powerful tool designed to help every team, no matter the context and level of complexity.",
  items: [
    {
      id: "marketing",
      label: "Find marketing intel",
      body: "Track competitor pricing, map audience sentiment, and pinpoint SEO gaps based on live web data in one click. Refine marketing strategy using data, not guesswork.",
      image: deepResearchShots.marketing,
      alt: "deep research marketing",
    },
    {
      id: "sales",
      label: "Vet prospects fast",
      body: "Find out everything you need to know about a sales lead with a quick deep dive based on web data. Investigate the company, its funding, leadership history, and market shifts.",
      image: deepResearchShots.sales,
      alt: "deep research sales",
    },
    {
      id: "product",
      label: "Get expert-level insights",
      body: "Understand the \"why\" behind the \"what.\" Research tech, analyze user reviews of competitor products, and summarize technical whitepapers to guide your roadmap.",
      image: deepResearchShots.product,
      alt: "deep research product",
    },
    {
      id: "hr",
      label: "Level-up your hiring with data-based insights",
      body: "Use a single prompt to find industry salary data, benefit trends, and competitor Glassdoor reviews. Turn fragmented web data into a clear plan for your next hiring project.",
      image: deepResearchShots.hr,
      alt: "deep research HR",
    },
  ],
};

export const deepCompare = {
  eyebrow: "NexEco AI",
  heading: "Deep Research vs. other providers",
  p1: "While ChatGPT (OpenAI) and Gemini (Google) have introduced their own Deep Research modes, they lock you into a single ecosystem. Perplexity is excellent for quick cited searches, and Claude is a leader in deep analysis, but NexEco AI is the only platform that brings them all together.",
  p2: "On NexEco AI, users aren't locked into a single provider. You have the ability to choose the reasoning of OpenAI’s o1, the creative synthesis of Claude 3.5, or the speed of Gemini – all within a specialized agentic workflow designed for professional reporting. We offer higher query limits and a more robust structure than standard retail AI apps, making it the top choice for business teams.",
  columns: ["Feature", "NexEco AI", "ChatGPT & Gemini", "Perplexity"],
  rows: [
    ["Model choice", "Multi-model (Choose yourself)", "Locked to one provider", "Restricted to their stack"],
    ["Research depth", "Up to 20 mins of autonomous search", "Varies; often high-level", "Optimized for speed over depth"],
    ["Output type", "Multi-heading, cited reports", "Conversational chat", 'Detailed "Answer" pages'],
    ["Query limits", "High-capacity (Professional)", "Strict daily caps", "Variable caps"],
  ],
};

export const deepCta = {
  eyebrow: "Deep Research",
  heading: "Cut hours of manual research from your workflows",
  body: "Get Deep Research and see a boost in productivity for yourself.",
  primary: { label: "Get NexEco AI", href: "/pricing" } satisfies ProductLink,
};

export const deepFaq: ProductFaqItem[] = [
  {
    id: "how",
    question: "How does deep research work?",
    answer: faqParagraphs(
      "Unlike a standard search in ChatGPT or Claude, Deep Research uses an agentic workflow. It doesn't just provide a quick answer but plans a search strategy, breaks your prompt into multiple sub-queries, and autonomously navigates the live web. By analyzing and synthesizing data across dozens of sources, it mimics a human analyst to build a structured, cited report with minimal AI hallucinations.",
    ),
  },
  {
    id: "limits",
    question: "What are the deep research query limits on NexEco AI?",
    answer: faqParagraphs(
      "While platforms like OpenAI and other new models often impose strict daily caps on their most advanced models, NexEco AI is built for the volume of high-performing teams. We offer significantly higher limits than the standard ChatGPT Plus or Gemini Advanced tiers, ensuring your team can run comprehensive investigations and access the necessary findings in 5-20 minutes without hitting a \"usage ceiling\" mid-project.",
    ),
  },
  {
    id: "time",
    question: "How long does deep research take?",
    answer: faqParagraphs(
      "It typically takes 1 to 20 minutes for Deep Research to generate a full report with key findings. The speed depends on the complexity of your request and the AI model (such as Claude or ChatGPT) chosen to process it. While a simple query is nearly instant, high-capacity tasks involving niche web sources may take longer to ensure total accuracy.",
    ),
  },
  {
    id: "benefits",
    question: "What are the benefits of using deep research?",
    answer: faqParagraphs(
      "The primary benefit of Deep Research is autonomous intelligence. Instead of users manually sifting through Perplexity or Google results, our Deep Research feature handles the legwork. You get access to a ready-to-use report with verified citations, allowing you to focus on the core strategy of your project rather than a time-consuming manual search. Different teams benefit from Deep Research in various ways:\n\nMarketing: Track competitor pricing, map audience sentiment, and pinpoint SEO gaps in one click.\n\nDevelopers: Research deep technical questions and get expert-level insights on product queries.\n\nSales: Surface deep-tier prospect data, industry pain points, and real-time triggers for the perfect outreach.",
    ),
  },
  {
    id: "limits2",
    question: "What are the limitations of deep research?",
    answer: faqParagraphs(
      "While Deep Research is more powerful than a basic chat, it relies on the quality of available data and how detailed your prompt is. Users should note that if a topic is extremely obscure or has zero digital footprint, the AI may require more specific context from your internal workspace files to generate a high-quality result.",
    ),
  },
  {
    id: "best",
    question: "What is the best AI tool for deep research?",
    answer: faqParagraphs(
      "While the Gemini app and Perplexity, for example, offer users helpful search capabilities, NexEco AI is the best choice for professional research. Agent and Deep Research capabilities allow you to plan and execute deep dives using any top-tier model – ChatGPT, Claude, or Gemini – in one place. By combining a multi-step search process with high report quality, NexEco AI provides the depth of research needed by fast-paced teams.",
    ),
  },
];
