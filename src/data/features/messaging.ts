import type { StaticImageData } from "next/image";
import { messagingPageShots } from "@/assets/messaging";
import { guaranteeLabel, workspaceSecurityCards } from "@/data/products/shared";
import type { ProductLink, SecurityCard } from "@/data/products/types";

export const messagingHero = {
  heading: "Bring nexos.ai to your messaging apps",
  body: "Send a message, a voice note, or a file in Slack, Telegram or Whatsapp with nexos.ai. It connects to your messaging apps, handles the task, and replies with the result, be it a jira task or an email.",
  primary: { label: "Get started now", href: "/pricing" } satisfies ProductLink,
  guarantee: guaranteeLabel,
};

export const messagingMore = {
  headingBefore: "More than a chat bot.",
  headingAfter: "nexos.ai gets things done in the conversation",
  cards: [
    {
      id: "acts",
      title: "It acts, not just replies",
      body: "Connected to your tools – Jira, GitHub, Salesforce, Google Drive, Confluence, and more. It doesn't hand you the output. It delivers it where it needs to go.",
      image: messagingPageShots.connected,
      alt: "Integration logos",
      visualFirst: false,
      background: "linear-gradient(to bottom, #dee7f5, #e5ecf2)",
    },
    {
      id: "brain",
      title: "It picks the right brain automatically",
      body: "You don't have to select the model or pick the Agent, because nexos.ai reads your request and routes it to the best fit across top AI models and specialized no-code Agents.",
      bodyBefore:
        "You don't have to select the model or pick the Agent, because nexos.ai reads your request and routes it to the best fit across top AI models and specialized ",
      linkLabel: "no-code Agents",
      href: "/features/ai-agents",
      bodyAfter: ".",
      image: messagingPageShots.brain,
      alt: "Data analysis agent example",
      visualFirst: true,
      background: "linear-gradient(to bottom, #b9b5f5, #d6d4f7)",
    },
    {
      id: "memory",
      title: "It remembers you",
      body: "Full conversation memory. It knows the context, builds on what you've shared before, and never makes you repeat yourself.",
      image: messagingPageShots.memory,
      alt: "Slack chat showing memory",
      visualFirst: false,
      background: "#e3f2ff",
    },
    {
      id: "formats",
      title: "Describe what you need. Get it done",
      body: "Text, voice message, image – nexos.ai understands you in different ways and replies in the format that makes the most sense, whether it’s a structured summary, a generated image, a clean paragraph.",
      image: messagingPageShots.formats,
      alt: "Voice waveform and message preview",
      visualFirst: true,
      background: "linear-gradient(to bottom, #dee7f5, #f8fafc)",
    },
  ],
};

export const messagingRoles = {
  heading: "Built for every team, every role",
  items: [
    {
      id: "sales",
      label: "Sales",
      body: "Show up to your next client call ready for anything. Get an instant brief with details pulled from recent emails, a strategic talking point to move the discussion forward or an automatic CRM update. You focus on the conversation, nexos.ai will handle the prep work.",
      image: messagingPageShots.sales,
      alt: "Sales team Slack assistant outcome",
    },
    {
      id: "marketing",
      label: "Marketing",
      body: "Stop digging through dashboards to learn which campaigns are winning – get a simple breakdown of your best and worst Instantly performers. An update is drafted for you, ready to share with the team.",
      image: messagingPageShots.marketing,
      alt: "Marketing team Slack assistant outcome",
    },
    {
      id: "hr",
      label: "HR",
      body: "Move your hiring processes forward faster. Get an instant, objective summary from any interview transcript. nexos.ai can evaluate candidates, draft structured feedback, and you get to make consistent decisions – spending less time on repetitive work.",
      image: messagingPageShots.hr,
      alt: "HR team Slack assistant outcome",
    },
    {
      id: "ops",
      label: "Operations",
      body: "Stop hunting for agendas and walk into every conversation ready. Get nexos.ai to prepare an automatic morning brief that flags which meetings need prep and pulls up the right documents for you.",
      image: messagingPageShots.ops,
      alt: "Operations team Slack assistant outcome",
    },
    {
      id: "role",
      label: "Your role",
      body: "If you can describe what needs to be done in plain language or with imagery, nexos.ai can take a run at it. Research, summarizing, writing, filing, pulling data, scheduling, analyzing and everything in between. The best way to find out what it can do for you is to just ask it.",
      image: messagingPageShots.role,
      alt: "Your role team Slack assistant outcome",
    },
  ] satisfies Array<{
    id: string;
    label: string;
    body: string;
    image: StaticImageData;
    alt: string;
  }>,
};

export const messagingCompare = {
  headingBefore: "Tired of AI that only talks?",
  headingAfter: "This one acts",
  left: "With nexos.ai in messaging apps",
  right: "Other AI tools",
  struggles: "Common Struggles",
  rows: [
    {
      label: "Manual work",
      ours: "Ask it. It acts and confirms back. You never leave the thread.",
      others: "Leave the chat, open another app, do the thing, come back.",
      band: true,
    },
    {
      label: "Multiple subscriptions",
      ours: "Top AI models and Agents in one conversation, matched to your task.",
      others: "One AI tool for text, another for images, another for code.",
      band: false,
    },
    {
      label: "One-app AI",
      ours: "Full capabilities across Slack, Telegram, and WhatsApp.",
      others: "Slack-only AI leaves out Telegram and WhatsApp users.",
      band: true,
    },
    {
      label: "Passive AI",
      ours: "Files the ticket, posts the update, pulls the report. All done.",
      others: "Stops at the answer. You still have to do the work.",
      band: false,
    },
    {
      label: "No memory",
      ours: "Picks up where you left off, every time.",
      others: "Re-explaining context every session.",
      band: true,
    },
  ],
  cta: { label: "Get nexos.ai", href: "/pricing" } satisfies ProductLink,
};

export const messagingChannels = {
  heading: "One nexos.ai. One context across messaging apps.",
  intro: "nexos.ai fits into the way you already work.",
  body: "nexos.ai brings the same memory, models, and actions across every channel, so you can access the same context across your messaging apps.",
  items: [
    {
      id: "slack",
      name: "Slack",
      eyebrow: "Fully built into where your team works",
      body: "nexos.ai is fully embedded in Slack. Home Tab, sidebar, right-click shortcuts, workspace-wide install. Ask in a channel, turn a message into a task, or pull a summary without leaving the thread.",
      tile: "slackTile",
      background: "linear-gradient(to bottom, #dee7f5, #f8fafc)",
    },
    {
      id: "telegram",
      name: "Telegram",
      eyebrow: "Stay with nexos.ai, wherever the day takes you",
      body: "For remote and mobile-first teams, nexos.ai runs natively inside Telegram. Send a DM, record a voice note, or drop in a file. It understands what you need and replies with the result.",
      tile: "telegramTile",
      background: "linear-gradient(to top, #f8fafc, #f0f4f8)",
    },
    {
      id: "whatsapp",
      name: "WhatsApp",
      eyebrow: "The world's most used app",
      body: "Billions already have WhatsApp on their phone, and now nexos.ai is there too. The most familiar messaging surface is fully live, with the same capabilities as Slack and Telegram.",
      tile: "whatsappTile",
      background: "linear-gradient(to top, #f8fafc, #f5f3fc)",
    },
    {
      id: "teams",
      name: "Microsoft Teams",
      eyebrow: "Run your day in Teams?",
      body: "nexos.ai is heading there next, bringing everything it already does in Slack, Telegram, and WhatsApp.",
      tile: "teamsTile",
      background: "linear-gradient(to top, #f8fafc, #f0f4f8)",
    },
  ],
  cta: { label: "Put nexos.ai to work", href: "/pricing" } satisfies ProductLink,
};

export const messagingSetup = {
  heading: "Get it up and running in under a minute",
  body: "Most powerful tools often come with a setup cost, a week of onboarding or hours wasted. Solo or team, it takes minutes to get nexos.ai working.",
  steps: [
    {
      id: "plug",
      n: "01",
      title: "Plug it in",
      body: "Find nexos.ai in Slack or MS Teams Marketplace, search \"nexos.ai\" on Telegram or open it in WhatsApp to start using it instantly.",
    },
    {
      id: "connect",
      n: "02",
      title: "Connect your tools",
      body: "Connect Gmail, Calendar, Google Ads and other work tools so nexos.ai can pull updates, answer questions and take actions across your workflow. Learn how: My Apps.",
      bodyBefore:
        "Connect Gmail, Calendar, Google Ads and other work tools so nexos.ai can pull updates, answer questions and take actions across your workflow. Learn how: ",
      linkLabel: "My Apps",
      href: "/features/ai-integrations",
      bodyAfter: ".",
    },
    {
      id: "ask",
      n: "03",
      title: "Ask & get results",
      body: "Talk to nexos.ai like your co-worker – ask your questions, request to pull updates or get things done across your connected tools.",
    },
  ],
  cta: { label: "Setup nexos.ai in minutes", href: "/pricing" } satisfies ProductLink,
};

export const messagingCta = {
  heading: "Bring nexos.ai into every conversation",
  primary: { label: "Get started now", href: "/pricing" } satisfies ProductLink,
  guarantee: "14-day money-back guarantee.",
};

export const messagingSecurity = {
  heading: "Your data is always secure",
  cards: [
    workspaceSecurityCards[0],
    workspaceSecurityCards[1],
    workspaceSecurityCards[2],
    {
      ...workspaceSecurityCards[3],
      body: "SOC 2 Type 2 and ISO 27001-certified. Fully compliant with the GDPR.",
    },
  ] satisfies SecurityCard[],
};
