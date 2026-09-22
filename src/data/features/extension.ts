import { faqParagraphs } from "@/data/products/shared";
import type { ProductFaqItem, ProductLink } from "@/data/products/types";

export const CHROME_STORE =
  "https://chromewebstore.google.com/detail/nexosai-make-ai-work-wher/oekflhblfcpkcopglgkomdcaopmejfdm";

export const extensionHero = {
  heading: "NexEco AI browser extension: Make AI work where you work",
  bullets: [
    "Research, summarize, write, and ask questions – work with AI directly in the browser",
    "Get context-aware AI answers based on company knowledge",
    "All AI interactions follow the same rules configured in the AI Workspace",
  ],
  primary: { label: "Get NexEco AI", href: "/pricing" } satisfies ProductLink,
  secondary: { label: "Install extension", href: CHROME_STORE } satisfies ProductLink,
};

export const extensionIntro = {
  heading: "What is the NexEco AI browser extension?",
  bodyBefore:
    "The NexEco AI extension is a secure browser tool that brings leading AI models directly into your web experience. It integrates seamlessly with Chrome, allowing you to interact with ",
  linkLabel: "multiple AI models",
  linkHref: "/ai-workspace-for-multiple-llms",
  bodyAfter:
    ", leverage AI Assistants, and maintain full security while working on any webpage without switching tabs or losing context.",
};

export const extensionBenefits = {
  heading: "Key benefits of using the NexEco AI browser extension",
  intro: "The extension transforms how your team uses AI daily. Here's why it matters.",
  featured: [
    {
      id: "models",
      title: "Access multiple LLMs in one interface while browsing",
      body: "Switch between ChatGPT, Claude, Gemini, and other models directly from the extension sidebar. No more juggling between different AI tools or browser tabs. Select from the same range of leading AI models available in your AI Workspace.",
      shot: "models" as const,
      alt: "AI model selection in NexEco AI browser extension",
    },
    {
      id: "assistants",
      title: "AI Assistants at your fingertips",
      body: "Bring your custom AI Assistants directly to browser chats. Access pre-built Assistants wherever you browse. Apply their specialized capabilities to web content for immediate answers.",
      shot: "assistant" as const,
      alt: "AI assistants available directly in NexEco AI browser extension",
    },
  ],
  icons: [
    {
      id: "governance",
      icon: "shield" as const,
      title: "Enterprise-grade governance and security",
      body: "The same company-wide Guardrails, governance, and AI policies that apply to AI Workspace also apply to the browser extension. No shadow AI, full AI observability, and complete compliance tracking. Your security team maintains control while your teams gain productivity.",
    },
    {
      id: "history",
      icon: "archive" as const,
      title: "Synced AI chat history",
      body: "All interactions within the browser extension are automatically saved to your AI Workspace chat history. Come back to your conversations whenever you need them.",
    },
    {
      id: "context",
      icon: "fileLines" as const,
      title: "Context-aware AI assistance",
      body: "Instantly summarize any webpage or “chat with website.” The extension reads and understands webpage content even when the LLM can't access it natively, providing relevant assistance, analysis, and data extraction.",
    },
  ],
};

export const extensionHow = {
  headingBefore: "How does NexEco AI",
  headingAfter: "browser extension work",
  caption: "Mikas Stankevičius, Product Manager at NexEco AI",
  walkthrough: "Browser extension walkthrough",
  playLabel: "Play video",
  duration: "1 min watch",
  steps: [
    {
      id: "install",
      n: "01",
      title: "Install the extension",
      body: "Visit Chrome Web Store and search for \"NexEco AI\" or click the installation link below. Click \"Add to Chrome.\"",
      link: { label: "Click to install", href: CHROME_STORE } satisfies ProductLink,
    },
    {
      id: "configure",
      n: "02",
      title: "Log in and configure",
      body: "Sign in with NexEco AI account. Pin extension for easy access",
    },
    {
      id: "start",
      n: "03",
      title: "Start using",
      body: "Go to the page you want and click on the extension. Start using AI immediately with the content you're viewing.",
    },
  ],
};

export const extensionUse = {
  headingBefore: "How teams use NexEco AI",
  headingAfter: "browser extension",
  introBefore: "The extension transforms everyday workflows across departments.",
  introAfter: "Here's how different teams leverage it.",
  items: [
    {
      id: "research",
      icon: "fileMagnifying" as const,
      title: "Research and content analysis",
      body: "Summarize long articles, web pages, documentation, or research papers without switching contexts. Extract key insights from webpages as you read them.",
    },
    {
      id: "writing",
      icon: "pen" as const,
      title: "Writing and content creation",
      body: "Generate content based on the website you're viewing. Get AI assistance while drafting emails or documents without leaving your current page.",
    },
    {
      id: "support",
      icon: "headset" as const,
      title: "Customer support and communication",
      body: "Draft personalized responses using customer context from Projects and AI Assistants – your AI knowledge layer. Translate communications in real-time right where you're reading them.",
    },
    {
      id: "extract",
      icon: "listCheck" as const,
      title: "Data extraction and automation",
      body: "Extract structured data from web pages with a single prompt. Automate repetitive browser tasks, research, and reading with AI assistance.",
    },
    {
      id: "chat",
      icon: "comments" as const,
      title: "AI Chat and Assistants",
      body: "Chat with any AI model side by side with the web page you're viewing. Pull information from AI Assistants from the browser for immediate insights.",
    },
  ],
};

export const extensionCta = {
  eyebrow: "Browser extension",
  heading: "Unlock AI where you already work",
  primary: { label: "Get NexEco AI", href: "/pricing" } satisfies ProductLink,
};

export const extensionFaq: ProductFaqItem[] = [
  {
    id: "browsers",
    question: "What browsers support the NexEco AI extension?",
    answer: faqParagraphs(
      "Currently, the NexEco AI browser extension is available for Google Chrome, Brave, Opera, and all Chromium-based browsers. We're working on supporting more browsers soon.",
    ),
  },
  {
    id: "account",
    question: "Do I need a NexEco AI account to use the extension?",
    answer: faqParagraphs(
      "Yes, you need a NexEco AI account to access the extension's features. The extension maintains the same security standards, guardrails, and permissions as the AI Workspace.",
    ),
  },
  {
    id: "cost",
    question: "How much does the browser extension cost?",
    answer: faqParagraphs(
      "The browser extension is included with your NexEco AI subscription at no additional cost. We want to make AI accessible to you and your team throughout your workflow, whether that means in-app or in your browser tab.",
    ),
  },
  {
    id: "difference",
    question: "What's the difference between the web app and browser extension?",
    answer: [
      [
        "The browser extension brings core AI Workspace functionality directly to your browsing experience, allowing you to work with AI without switching contexts. This includes simple ",
        { href: "/features/ai-chat", label: "AI Chat" },
        ", AI Assistant chat, along with all guardrails applied to AI interactions. All chat history is synced to the Workspace.",
      ],
    ],
  },
];
