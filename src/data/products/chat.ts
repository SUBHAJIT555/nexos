import { productDocs, workspaceSecurityCards } from "@/data/products/shared";
import type { ProductFaqItem, SecurityCard } from "@/data/products/types";

export const chatHero = {
  headingLine1: "AI chat built for",
  headingLine2: "real work",
  body: "Chat with leading AI models to explore ideas, solve problems, and work faster. Turn your prompts into real outputs – from quick answers to full reports.",
  cta: { label: "Get NexEco AI", href: "/pricing" },
  trustCaption: "Trusted by leading teams:",
};

export const chatModels = {
  heading: "The world’s top AI models, one powerful Chat",
  body: "Work with the world’s best AI models – including ChatGPT, Claude, and Gemini – at the same time. Without being tied to a single provider.",
};

export const chatInside = {
  heading: "What’s inside Chat",
  body: "A single Chat for Deep Research, real-time Web Search, file generation, and instant model switch. Find the right answers for any task.",
  items: [
    {
      id: "auto",
      title: "Automatically choose the right model",
      lead: "Let us Auto Select the best model for the job.",
      body: "Chat automatically analyzes your prompt and picks the best model based on quality and specialization.",
    },
    {
      id: "search",
      title: "Search the web in real time",
      lead: "Supercharge your Chat with Web Search and get relevant AI answers, backed by the most up-to-date data.",
      body: "Chat searches the web for you and provides sources for every fact.",
    },
    {
      id: "research",
      title: "Run Deep Research",
      lead: "Turn any question into a complete research report and save hours of manual search.",
      body: "AI finds, analyzes, and combines information from multiple sources to deliver a structured, reliable research file.",
    },
    {
      id: "collaborate",
      title: "Collaborate with Interactive Chat",
      lead: "Work with AI like you would with a teammate.",
      body: "Instead of only replying to the exact prompt you type, NexEco AI can pause, ask follow-up questions, and guide the conversation when it needs more context. Sharper results, first try.",
    },
    {
      id: "files",
      title: "Create ready-to-use files",
      lead: "Upload your data or describe what you need.",
      body: "AI Chat analyzes your request, cleans it up, and delivers a polished, ready-to-use file – doc, slides deck, and more. No switching between tools.",
    },
    {
      id: "memory",
      title: "Stop repeating yourself to AI",
      lead: "Set your role and preferences once. Memory keeps that context across every chat.",
      body: "The more you work together, the sharper your results get.",
    },
  ],
};

export const chatPrompt = {
  heading: "Start with a prompt. Leave with the result.",
  body: "Use AI to research, write, summarize, brainstorm, and create ready-to-share outputs.",
  placeholder: "What would you like to automate?",
};

export const chatTeams = {
  heading: "How teams use NexEco AI",
  body: "Generate files in seconds, analyze customer data instantly, write eye-catching emails, and beyond – find your Chat.",
  cards: [
    {
      id: "marketing",
      title: "Marketing",
      body: "Chat handles the repetitive work – content writing, formatting, SEO, reporting, campaign visuals, optimization – so you focus on strategy instead of production.",
      alt: "Business performance analysis",
    },
    {
      id: "sales",
      title: "Sales",
      body: "Close more deals with AI for sales teams: automate prospect research, outreach personalization, call preparation, and more.",
      alt: "Dashboard generation",
    },
    {
      id: "ta",
      title: "Talent Acquisition",
      body: "Hire top talent faster: Chat acts as your recruiting assistant, taking care of repetitive tasks so you can focus on interviewing and closing candidates.",
      alt: "Executive reports",
    },
  ],
};

export const chatCompare = {
  heading: "Compare Models: Find the best AI for the task",
  body: "Pick multiple AI models from an extensive list. Run the same prompt for all selected models side by side. Compare the replies, choose the best one for the task.",
  cta: { label: "See compare models", href: "/features/compare-ai-models" },
};

export const chatSecurityExtra: SecurityCard = {
  id: "trust",
  title: "Know exactly how your data is protected",
  body: "Our Trust Center is your one-stop shop for compliance certificates, security policies, audit reports, and answers to every security question you might have.",
};

export const chatCta = {
  heading: "One AI Chat you’ll ever need for work",
  primary: { label: "Get NexEco AI", href: "/pricing" },
};

export const chatFaq: ProductFaqItem[] = [
  {
    id: "switch",
    question: "Can I switch AI models in NexEco AI Chat?",
    answer: [
      [
        "Yes, NexEco AI is model-agnostic, meaning our platform allows users to switch between different AI models that your enterprise enables. For example, Engineering teams will benefit from advanced Claude models, while creative Marketing teams are more likely to pick GPT-4o and Gemini. You can switch between models anytime, even mid-conversation. Check the ",
        { href: productDocs.chat, label: "NexEco AI Chat documentation" },
        " to learn more about how it works.",
      ],
    ],
  },
  {
    id: "vs-gpt",
    question: "What’s the difference between NexEco AI Chat and ChatGPT?",
    answer: [
      [
        "ChatGPT is an LLM provider that gives users access to a single AI model (GPT-5 for all, plus earlier versions for paid users). NexEco AI is not an LLM, but an all-in-one AI platform that allows you to pick from a list of advanced AI models in one platform. In a single chat interface, you can chat with GPT-5, Claude Opus 4, and Grok 4, and many others. Instead of paying for separate LLM subscriptions and switching tools, you can enjoy all advanced models under one roof.",
      ],
    ],
  },
  {
    id: "why",
    question: "Why use AI Chat?",
    answer: [
      [
        "Chat is designed to boost productivity by automating repetitive tasks and give teams the space to experiment with advanced AI models for more complex tasks and use cases. Teams use it to generate and review content, summarize documents, analyze data, and get quick answers. Chat works best for quick Q&A, web search, and singular tasks that aren’t likely to be repeated again.",
      ],
    ],
  },
];

export const chatSecurity = {
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
  extraCard: chatSecurityExtra,
  trustHref: productDocs.trustCenter,
  trustLabel: "Visit the Trust Center",
};
