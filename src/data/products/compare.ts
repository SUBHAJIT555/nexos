import { productDocs } from "@/data/products/shared";
import type { ProductFaqItem } from "@/data/products/types";

export const compareHero = {
  heading: "Compare AI Models and find the perfect LLM for your team",
  body: "Test capabilities of any AI model and find the right LLM for the task. Experiment with Compare Models through our model-agnostic approach:",
  bullets: [
    "Pick two or more LLMs from an extensive list.",
    "Run the same prompt for all selected models side by side.",
    "Compare the outputs, choose the best one for the task.",
  ],
  cta: { label: "Get NexEco AI", href: "/pricing" },
  trustCaption: "Trusted by enterprises:",
};

export const compareTour = {
  heading: "How enterprise teams use Compare Models",
  ctaLabel: "Watch platform tour",
  dialogHeading: "How enterprise teams use Compare Models",
  paragraphs: [
    "Compare Models lets teams send one prompt to multiple LLMs and read the answers side by side. Marketing, engineering, and legal teams use it to judge tone, depth, and accuracy before they pick a default model.",
    "This tour is a marketing walkthrough of the public Compare Models experience. It does not connect to a live model API.",
  ],
};

export const compareHow = {
  heading: "How to use Compare Models",
  body: "Comparing AI models in your daily routine is easy, no matter your role, team, or task at hand.",
  steps: [
    {
      id: "add",
      n: "1",
      title: "Add AI models",
      body: "Browse dozens of top industry AI models, available via Workspace, and pick two (or more) to compare.",
    },
    {
      id: "prompt",
      n: "2",
      title: "Input your prompt",
      body: "Ask a question, the same way as in a regular AI chat. Compare Models will run the same query for all selected AI models.",
    },
    {
      id: "compare",
      n: "3",
      title: "Compare tone, speed, and output",
      body: "All chosen AI models will generate responses to your prompt side by side. Refine, iterate, choose best output.",
    },
  ],
};

export const compareTeams = {
  heading: "Experiment with AI for any team and department",
  bodyBefore: "Having a centralized ",
  bodyLink: { href: "/ai-workspace-for-multiple-llms", label: "AI Workspace" },
  bodyAfter: " makes comparing LLMs simple. Find or create a custom use case for any task.",
  cards: [
    {
      id: "marketing",
      eyebrow: "Marketing",
      title: "Find the perfect brand voice",
      bodyBefore:
        "Compare outputs across top AI models to nail your brand's tone, style, and messaging every time with ",
      linkLabel: "AI for marketing",
      bodyAfter: ".",
      href: "/features/ai-agents/for-marketing",
      items: [
        "Test messaging variations across Claude, GPT-4, and Gemini to find what resonates.",
        "Compare creative approaches for campaigns, socials, and emails side-by-side.",
        "Refine brand voice consistency: evaluate tone differences across multiple AI models.",
      ],
    },
    {
      id: "developers",
      eyebrow: "Developers",
      title: "Get multiple coding perspectives",
      bodyBefore:
        "Compare code solutions, architecture approaches, and technical explanations with ",
      linkLabel: "AI for developers",
      bodyAfter: ".",
      href: "/features/ai-agents/for-productivity",
      items: [
        "Evaluate different coding approaches for the same problem across specialized AI models.",
        "Compare code quality to choose the best implementation strategy.",
        "Test documentation styles to find the clearest technical explanations for your team.",
      ],
    },
    {
      id: "legal",
      eyebrow: "Legal",
      title: "Compare legal approaches side-by-side",
      bodyBefore: "Get multiple perspectives from ",
      linkLabel: "AI for lawyers",
      bodyAfter: " on legal language, contract terms, and client communications.",
      href: "/features/ai-agents/for-managers",
      items: [
        "Compare formal vs. conversational tones for client and internal communications.",
        "Evaluate contract language variations to find the most precise terms.",
        "Test compliance explanations across AI models to ensure clarity and accuracy.",
      ],
    },
  ],
};

export const compareCta = {
  heading: "Experiment with AI models securely.",
  body: "Find the best LLM for your teams.",
  primary: { label: "Get NexEco AI", href: "/pricing" },
};

export const compareFaq: ProductFaqItem[] = [
  {
    id: "llms",
    question: "What LLMs are available in Compare Models?",
    answer: [
      [
        "NexEco AI is an all-in-one AI platform for enterprise that follows a model-agnostic approach. That means we don’t focus on just one provider, like ChatGPT or Claude, but provide access to all leading LLMs under one roof. Browse all available models in our ",
        { href: productDocs.models, label: "NexEco AI Models documentation" },
        ".",
      ],
    ],
  },
  {
    id: "vs-chat",
    question: "What’s the difference between NexEco AI Chat and Compare Models features?",
    answer: [
      [
        "With AI Chat on NexEco AI, you pick just one AI model to work with. You can change them anytime, but only receive one output per query. With Compare Models, you choose multiple AI models from the start and get multiple AI answers side by side. That way, it’s easier to get a range of answers simultaneously and pick the best option for the task, instead of running different models separately in different chats.",
      ],
    ],
  },
  {
    id: "used-for",
    question: "What is Compare Models used for?",
    answer: [
      [
        "Compare Models is designed for AI experimentation and iteration, whether you’re trying to find the best AI model for the task or looking for a new alternative to your default model. For example, marketing team members ask multiple models to create a social media post and compare the tone of voice, style, and format to find the better version.",
      ],
    ],
  },
  {
    id: "secure",
    question: "Is Compare Models secure?",
    answer: [
      [
        "Compare Models, along with all other features available in NexEco AI Workspace, is secure and enterprise-ready. Centralized dashboard with LLM observability controls helps admins enforce policies, assign models and define permissions.",
      ],
    ],
  },
];
