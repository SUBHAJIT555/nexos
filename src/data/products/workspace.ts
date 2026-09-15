import { productDocs, workspaceSecurityCards } from "@/data/products/shared";
import type { ProductFaqItem } from "@/data/products/types";

export const workspaceHero = {
  headingBefore: "AI Workspace:",
  headingAfter: "smarter AI adoption across multiple LLMs",
  body: "Replace scattered AI tools with one workspace that helps your entire team work faster, more securely, and at scale – without the subscriptions, complexity, or headaches.",
  bullets: [
    "One chat for 200+ AI models",
    "Compare model outputs side by side",
    "Automate work with no-code AI Agents",
  ],
  cta: { label: "Get nexos.ai", href: "/pricing" },
  trustCaption: "Trusted by",
};

export const workspaceShare = {
  heading: "Keep your team’s AI work in one place",
  body: "Make AI knowledge easy to share and reuse across your organization. Share Agents, prompts, and projects so your team keeps moving forward without starting from scratch every time.",
};

export const workspaceChat = {
  heading: "One Chat for every task",
  body: "One Chat interface with deep research, real-time web search, instant model switching, and file generation built in. The right model, the right answer, every time.",
  cta: { label: "Explore Chat", href: "/features/ai-chat" },
  items: [
    {
      id: "auto-model",
      title: "The right model, selected automatically",
      lead: "The best model for the job, picked for you.",
      body: "Describe what you need and Chat does the rest. It analyzes your prompt and selects the most capable model for the task, so you always get the sharpest result",
    },
    {
      id: "web-search",
      title: "Real-time web search",
      lead: "Always working with the latest information.",
      body: "Chat pulls fresh data from the web and surfaces sources alongside every answer. In result, you are grounded in what's actually happening, not just what the model was trained on.",
    },
    {
      id: "asks",
      title: "AI that asks before it assumes",
      lead: "AI that digs deeper before it answers.",
      body: "When your prompt needs more context, Chat pauses and asks – just like a good colleague would. The result is a sharper, more accurate output from the very first try.",
    },
    {
      id: "files",
      title: "Finished files, straight from your prompt",
      lead: "Work with AI like you would with a teammate.",
      body: "Instead of only replying to the exact prompt you type, nexos.ai can pause, ask follow-up questions, and guide the conversation when it needs more context. Sharper results, first try.",
    },
    {
      id: "memory",
      title: "AI that remembers how you work",
      lead: "Upload your data or describe what you need.",
      body: "AI Chat analyzes your request, cleans it up, and delivers a polished, ready-to-use file – doc, slides deck, and more. No switching between tools.",
    },
  ],
};

export const workspaceAgents = {
  heading: "Make AI Agents work your way",
  body: "Supercharge your team productivity with no-code Agents from a single endpoint for multiple LLMs.",
  cards: [
    {
      id: "custom",
      title: "Create custom no-code AI Agents in minutes",
      body: "Build powerful AI Agents without having to write a single line of code – simply define their role, set the scope of their work, and connect them to your company's data for instant action.",
      cta: { label: "Explore no-code Agents", href: "/features/ai-agents" },
    },
    {
      id: "templates",
      title: "Start fast with pre-built Agent templates",
      body: "Kick off with ready-to-use Agent templates designed for real professionals, including your marketing, sales, legal, finance, and HR teams. Then customize them further to match the way you work.",
    },
  ],
};

export const workspaceGallery = {
  heading: "AI agents for any task\nyou can describe",
  body: "Get started in seconds with expert-built Agent templates with proven use cases for any team – or get inspo for a custom Agent.",
  ctaHeading: "Find the perfect Agent template for you",
};

export const workspaceHow = {
  heading: "How the nexos.ai Workspace\nworks for your team",
  body: "The benefits of an AI workspace go beyond saving time on individual tasks – nexos.ai Workspace gives every person on your team everything they need to work more effectively.",
  items: [
    {
      id: "interface",
      title: "Single interface for multiple LLMs",
      body: "Access 200+ leading AI models from one interface, switch between them instantly, and compare outputs side by side – without breaking your workflow.",
    },
    {
      id: "multimodal",
      title: "Multi-modal support",
      body: "Interact using text, documents, images, or audio and get meaningful output from whichever model fits the task best.",
    },
    {
      id: "web-search",
      title: "Secure web search",
      body: "Safely retrieve and summarize information from the public web, with your organization’s guardrails and policies in place.",
    },
    {
      id: "agents",
      title: "AI Agents for repetitive work",
      body: "Build no-code Agents that research, write, summarize, and automate recurring tasks – set them up once and let them run.",
    },
    {
      id: "projects",
      title: "Projects for context-aware work",
      body: "Keep files, prompts, and conversations together for ongoing work, so nothing gets lost between sessions.",
    },
    {
      id: "storage",
      title: "Secure file storage",
      body: "Store replies and AI-generated files directly in Workspace. Access everything from one secure, centralized location.",
    },
    {
      id: "integrations",
      title: "Work tool integrations",
      body: "Ask questions and get instant answers pulled from Slack, Jira, Google Drive, SharePoint, Confluence, Zendesk, and more.",
    },
    {
      id: "monitoring",
      title: "Management and monitoring",
      body: "Monitor queries, outputs, and interactions across your organization, and control access, policies, and costs.",
    },
  ],
};

export const workspaceCta = {
  heading: "Ready to replace scattered AI tools with one workspace?",
  primary: { label: "Get nexos.ai", href: "/pricing" },
};

export const workspaceFaq: ProductFaqItem[] = [
  {
    id: "what",
    question: "What is an AI workspace?",
    answer: [
      [
        "An AI workspace is a centralized platform where individuals and teams can access multiple AI models, build automation, and get work done - all from one place. Instead of switching between separate tools and subscriptions, everyone works from a single, consistent environment. In nexos.ai Workspace that means chatting with 200+ leading AI models, comparing their outputs, generating content and documents, and building no-code Agents that handle recurring tasks automatically, with shared security policies and usage controls across the whole organization. Check the ",
        { href: productDocs.workspace, label: "nexos.ai Workspace documentation" },
        " to learn more about how it works.",
      ],
    ],
  },
  {
    id: "use-cases",
    question: "What are the main use cases of an AI workspace?",
    answer: [
      [
        "Teams use AI workspace to draft content, build presentations, produce reports, analyze data, summarize documents, research prospects, prepare for meetings, review contracts, write job descriptions, and search across internal tools. When any of those tasks starts happening on repeat, it becomes a no-code Agent that runs automatically in the background. Whether your team is in marketing, sales, legal, HR, or operations, Workspace adapts to how you work - not the other way around.",
      ],
    ],
  },
  {
    id: "choose-models",
    question: "Can I choose which LLMs to use on the nexos.ai chat interface?",
    answer: [
      [
        "Yes. You can choose which model to use before or during your prompt and even switch between LLMs within the same session. For example, you might start with Claude for creative ideation, swap to GPT-4 for data interpretation, and return to Claude to rephrase or summarize the results. Your admin controls which models are available to which teams.",
      ],
    ],
  },
  {
    id: "agents",
    question: "What can I use AI Agents for in the Workspace?",
    answer: [
      [
        "Agents are best for work that happens repeatedly - research, content drafts, email follow-ups, document summaries, and more. You build them once without writing any code, connect them to your existing tools and data, and they run automatically. Think of them as teammates that handle the predictable work so your team has more time for everything else.",
      ],
    ],
  },
  {
    id: "compare",
    question: "Can I have multiple LLMs provide output for the same prompt?",
    answer: [
      [
        "Yes. With Workspace's comparison mode, you can send one prompt to several models and view their outputs side by side. This is perfect for evaluating tone, depth, speed, or creativity without retyping your query or switching tools.",
      ],
    ],
  },
  {
    id: "why-multiple",
    question: "Why do I need multiple LLMs for work?",
    answer: [
      [
        "Having access to multiple LLMs via an all-in-one AI platform allows for greater flexibility and finding exactly the AI model you need for a particular task. For example, for code-specific workload, Claude would be the number-one choice, but for something like writing an email, ChatGPT would be the best value-to-cost option. Your AI agent builder should also support multiple LLM backends to avoid vendor lock-in.",
      ],
    ],
  },
];

export const workspaceSecurity = {
  heading: "Your data is always secure",
  cards: workspaceSecurityCards,
};
