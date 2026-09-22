import { productDocs, workspaceSecurityCards } from "@/data/products/shared";
import type { ProductLink, SecurityCard } from "@/data/products/types";

export const integrationsHero = {
  heading: "Unlock AI integrations for your favorite work tools",
  body: "Bring your files and workflows straight into Chats and Projects with an MCP integration. Instantly, securely, and without interrupting your workflow.",
  primary: { label: "Get NexEco AI", href: "/pricing" } satisfies ProductLink,
};

export const integrationsApps = {
  headingBefore: "Your most-used apps",
  headingAfter: "already in AI Workspace",
};

export const integrationsWhy = {
  heading: "Why integrate your work tools with AI?",
  lead: "Turn your files and apps into an instant, secure AI knowledge base.",
  cards: [
    {
      id: "faster",
      title: "Work faster with fewer steps",
      body: "Select and add files directly within NexEco AI. No more downloading files to your computer and re-uploading them to your Chats or Projects.",
    },
    {
      id: "knowledge",
      title: "Transform work apps into an AI knowledge source",
      body: "Turn your data into a powerful AI knowledge base. Give your AI context from your organization's most valuable resources – files, tasks, and knowledge bases.",
    },
    {
      id: "secure",
      title: "Keep your files secure and up-to-date",
      body: "Maintain your tools’ access controls and permissions. When documents, tasks, and action items update in your tools, they automatically update in your AI Workspace.",
      bodyBefore:
        "Maintain your tools’ access controls and permissions. When documents, tasks, and action items update in your tools, they automatically update in your ",
      linkLabel: "AI Workspace",
      href: "/ai-workspace-for-multiple-llms",
      bodyAfter: ".",
    },
  ],
};

export const integrationsHow = {
  heading: "How do AI Integrations work?",
  lead: "An easy 3-step process to bring all your docs directly into AI Workspace.",
  steps: [
    {
      id: "choose",
      n: "01",
      title: "Choose your tool",
      body: "Choose the work tool you want to integrate into NexEco AI.",
    },
    {
      id: "connect",
      n: "02",
      title: "Connect",
      body: "Sign in to connect your account. This is a one-time authentication – we won’t ask for a login every time.",
    },
    {
      id: "library",
      n: "03",
      title: "Access library",
      body: "Access your entire file library, tasks, and docs directly from Chat. The AI will find granular answers based on your work tools – no need to upload individual files.",
    },
  ],
};

export const integrationsAnalyze = {
  heading: "Let AI analyze your docs and other input types.",
  body: "No downloads or uploads required. All secure and from the same web app window.",
};

export type IntegrationItem = {
  id: string;
  name: string;
  body: string;
  comingSoon?: boolean;
};

export const integrationsCatalog = {
  heading: "All integrations",
  intro: "Our platform unifies sophisticated AI capabilities into one seamless interface",
  searchPlaceholder: "Search for integration",
  empty: "No results found matching your search",
  pageSize: 12,
  items: [
    {
      id: "hibob",
      name: "HiBob",
      body: "Quickly retrieve employee info and company policies whenever you need them.",
    },
    {
      id: "sharepoint",
      name: "SharePoint",
      body: "Access all documents instantly and use them for more accurate AI responses.",
    },
    {
      id: "slack",
      name: "Slack",
      body: "Sort through and find the exact info you need in thousands of work chats.",
    },
    {
      id: "jira",
      name: "Jira",
      body: "Pull your tickets and project data with AI answers without switching between apps.",
    },
    {
      id: "confluence",
      name: "Confluence",
      body: "Let AI instantly reference all your team's documentation and wikis.",
    },
    {
      id: "compass",
      name: "Compass",
      body: "Connect your Compass data for instant access to technical documentation.",
    },
    {
      id: "gmail",
      name: "Gmail",
      body: "Search through years of correspondence and extract relevant info instantly.",
    },
    {
      id: "google-drive",
      name: "Google Drive",
      body: "Get instant access to all your files and let AI find exactly what you need in seconds.",
    },
    {
      id: "google-calendar",
      name: "Google Calendar",
      body: "Let AI access meeting schedules and agendas for context-aware assistance.",
    },
    {
      id: "google-docs",
      name: "Google Docs",
      body: "Access all your docs and let AI surface the context you need instantly.",
    },
    {
      id: "google-slides",
      name: "Google Slides",
      body: "Build and design entire presentations with AI.",
    },
    {
      id: "google-sheets",
      name: "Google Sheets",
      body: "Pull data directly from your sheets, uncover insights, and get answers without tab switching.",
    },
    {
      id: "google-ads",
      name: "Google Ads",
      body: "Track campaign performance and spot opportunities without manual digging.",
    },
    {
      id: "github",
      name: "Github",
      body: "Get instant access to your repositories, pull requests, and code discussions.",
    },
    {
      id: "gitlab",
      name: "Gitlab",
      body: "Pull repository data, issues, and requests directly into your AI conversations.",
    },
    {
      id: "looker",
      name: "Looker",
      body: "Query your dashboards and reports to get data-driven answers in seconds.",
    },
    {
      id: "outlook",
      name: "Microsoft Outlook",
      body: "Access and manage your emails with AI search and context-aware responses.",
    },
    {
      id: "ms-calendar",
      name: "Microsoft Calendar",
      body: "Review your schedule and meeting details for smarter AI assistance.",
    },
    {
      id: "ms-teams",
      name: "Microsoft Teams",
      body: "Find key decisions, chats, info, and updates buried in your team channels.",
    },
    {
      id: "onedrive",
      name: "Microsoft One Drive",
      body: "Access cloud-stored files and enrich AI responses with relevant context.",
    },
    {
      id: "bigquery",
      name: "Google Big Query",
      body: "Run queries and pull insights from your data warehouse directly through AI.",
      comingSoon: true,
    },
    {
      id: "salesforce",
      name: "Salesforce",
      body: "Access CRM records, pipeline data, and customer insights directly through AI.",
      comingSoon: true,
    },
    {
      id: "zendesk",
      name: "Zendesk",
      body: "Surface support tickets and customer interactions to speed up issue resolution.",
    },
  ] satisfies IntegrationItem[],
};

export const integrationsSecurity = {
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
  extraCard: {
    id: "trust",
    title: "Know exactly how your data is protected",
    body: "Our Trust Center is your one-stop shop for compliance certificates, security policies, audit reports, and answers to every security question you might have.",
  } satisfies SecurityCard,
  trustHref: productDocs.trustCenter,
  trustLabel: "Visit the Trust Center",
};

export const integrationsCta = {
  eyebrow: "Unified AI integrations",
  heading: "Bring your tools directly into AI Workspace",
  body: "Transform how your team works with AI by bringing all your knowledge directly to your AI.",
  primary: { label: "Get NexEco AI", href: "/pricing" } satisfies ProductLink,
};
