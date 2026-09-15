import type { AgentCategory, AgentTemplate } from "@/data/products/types";
import type { ProductToolId } from "@/assets/products";

export const agentTemplateTools: Record<string, ProductToolId[]> = {
  "Account snapshot agent": ["ms-teams", "confluence", "ms-outlook"],
  "Case study writer": ["jira", "confluence", "slack", "ms-teams"],
  "Sales prospect researcher": [
    "g-mail",
    "ms-outlook",
    "ms-teams",
    "ms-onedrive",
    "confluence",
  ],
  "Sales outreach copywriter": ["slack", "ms-sharepoint", "g-mail", "g-calendar"],
  "Sales call summarizer": ["g-docs", "slack", "ms-sharepoint"],
  "Sales knowledge agent": ["ms-teams", "ms-onedrive", "confluence"],
  "Sales training assistant": ["salesforce", "confluence", "g-docs"],
  "Persona feedback simulator": ["confluence", "jira", "g-docs"],
  "Lead scoring helper": ["jira", "confluence", "slack", "salesforce", "ms-sharepoint"],
  "Smart language translator": ["google", "g-docs"],
  "Brand content writer & editor": ["ms-sharepoint", "slack", "confluence"],
  "Competitor intelligence scout": ["g-docs", "confluence"],
  "Campaign asset generator": ["confluence", "ms-sharepoint", "google", "g-docs"],
  "SEO content reviewer": ["ms-sharepoint", "google", "g-docs"],
  "SEO keyword researcher": ["ms-sharepoint", "google", "g-docs"],
  "Campaign brief writer": ["google", "jira"],
  "Social media writer": ["google", "g-docs", "ms-sharepoint", "confluence"],
  "HR policy & benefits agent": ["ms-teams", "confluence", "google"],
  "Employee onboarding guide": ["slack", "ms-teams", "confluence", "jira"],
  "Job role description generator": ["confluence", "google"],
  "Interview summary agent": ["g-mail", "g-calendar", "slack", "ms-sharepoint"],
  "Manager coach": ["confluence", "ms-sharepoint"],
  "Employee engagement analyzer": ["hibob"],
  "HR handbook agent": ["confluence"],
  "HiBob profile checker": ["hibob", "slack"],
  "Daily calendar briefing": ["ms-outlook", "g-calendar"],
  "Inbox catch-up agent": ["slack", "ms-outlook", "ms-teams"],
  "Meeting recap agent": ["ms-outlook", "g-calendar"],
  "Quiz generator": ["confluence", "google"],
  "Channel digest generator": ["slack"],
  "Process flow visualizer": ["ms-outlook", "g-calendar", "confluence"],
  "Custom agent builder": ["confluence", "slack"],
  "nexos.ai helper": ["confluence", "google", "ms-sharepoint"],
  "Sprint risk manager": ["slack", "jira"],
  "Inquiry responder": ["g-drive", "salesforce"],
  "Step-by-step support guide": ["slack", "jira", "confluence"],
  "Order tracker": ["g-mail", "salesforce"],
  "Sentiment analyzer": ["g-drive", "slack", "jira", "confluence"],
  "Conversation trend analyzer": ["salesforce", "confluence"],
  "Customer data manager": ["hubspot", "salesforce"],
  "Contract review assistant": ["g-docs", "ms-sharepoint", "confluence"],
  "Legal policy Q&A agent": ["confluence", "ms-sharepoint"],
  "NDA summarizer": ["g-docs", "ms-outlook"],
  "Expense manager": ["g-drive", "confluence", "ms-sharepoint"],
  "Invoice processing assistant": ["g-drive", "ms-outlook", "ms-sharepoint"],
  "Financial report summarizer": ["g-docs", "ms-sharepoint", "confluence"],
};

export const agentCategories: AgentCategory[] = [
  { id: "sales", label: "Sales", heading: "" },
  { id: "marketing", label: "Marketing", heading: "" },
  {
    id: "recruitment",
    label: "Recruitment / HR",
    heading: "",
  },
  { id: "productivity", label: "Productivity", heading: "" },
];

export const agentTemplates: AgentTemplate[] = [
  {
    id: "sales-0",
    category: "Sales",
    title: "Account snapshot agent",
    description:
      "Creates account briefs for upcoming meetings by synthesizing CRM, emails, calls, and docs.",
  },
  {
    id: "sales-1",
    category: "Sales",
    title: "Case study writer",
    description:
      "Transforms customer data from interviews, notes, and CRM into structured case studies.",
  },
  {
    id: "sales-2",
    category: "Sales",
    title: "Sales prospect researcher",
    description:
      "Creates a concise company snapshot to prepare for first sales meetings.",
  },
  {
    id: "sales-3",
    category: "Sales",
    title: "Sales outreach copywriter",
    description:
      "Writes and sharpens cold emails, call scripts, and meeting follow-ups.",
  },
  {
    id: "sales-4",
    category: "Sales",
    title: "Sales call summarizer",
    description:
      "Analyzes sales call transcripts, delivers structured summaries and insights for sales teams.",
  },
  {
    id: "sales-5",
    category: "Sales",
    title: "Sales knowledge agent",
    description:
      "Helps internal sales teams and new joiners quickly find answers to recurring questions.",
  },
  {
    id: "sales-6",
    category: "Sales",
    title: "Sales training assistant",
    description:
      "Helps sales team members practice, learn, and improve discovery and closing skills.",
  },
  {
    id: "sales-7",
    category: "Sales",
    title: "Persona feedback simulator",
    description:
      "Reviews marketing content from a specific persona's perspective. Shares feedback, objections, and what resonates.",
  },
  {
    id: "sales-8",
    category: "Sales",
    title: "Lead scoring helper",
    description: "Researches sales leads and scores them.",
  },
  {
    id: "marketing-0",
    category: "Marketing",
    title: "Smart language translator",
    description:
      "Translates content while preserving meaning, tone, audience intent, and industry-specific context.",
  },
  {
    id: "marketing-1",
    category: "Marketing",
    title: "Brand content writer & editor",
    description:
      "Writes and edits content to consistently match your brand voice, tone, and style.",
  },
  {
    id: "marketing-2",
    category: "Marketing",
    title: "Competitor intelligence scout",
    description:
      "Tracks competitor product updates and real customer sentiment to surface strategic insights.",
  },
  {
    id: "marketing-3",
    category: "Marketing",
    title: "Campaign asset generator",
    description:
      "Turns one core message into ready-to-use assets tailored for each marketing channel.",
  },
  {
    id: "marketing-4",
    category: "Marketing",
    title: "SEO content reviewer",
    description:
      "Reviews SEO content and suggests the key fixes to improve rankings and readability.",
  },
  {
    id: "marketing-5",
    category: "Marketing",
    title: "SEO keyword researcher",
    description:
      "Discovers high-value keywords by analyzing search volume, competition, and ranking potential.",
  },
  {
    id: "marketing-6",
    category: "Marketing",
    title: "Persona feedback simulator",
    description:
      "Reviews marketing content from a specific persona's perspective. Shares feedback, objections, and what resonates.",
    tools: ["google", "confluence"],
  },
  {
    id: "marketing-7",
    category: "Marketing",
    title: "Campaign brief writer",
    description:
      "Creates structured, actionable briefs for your campaigns, content, and projects.",
  },
  {
    id: "marketing-8",
    category: "Marketing",
    title: "Social media writer",
    description:
      "Writes clear, engaging social media posts that showcase your personal brand and expertise.",
  },
  {
    id: "hr-0",
    category: "Recruitment / HR",
    title: "HR policy & benefits agent",
    description:
      "Answers employee questions using your internal policy and benefits documentation.",
  },
  {
    id: "hr-1",
    category: "Recruitment / HR",
    title: "Employee onboarding guide",
    description:
      "Guides new hires through key onboarding steps and helps them get up to speed quickly.",
  },
  {
    id: "hr-2",
    category: "Recruitment / HR",
    title: "Job role description generator",
    description:
      "Creates company-standard role descriptions with accurate scope, seniority, and salary range.",
  },
  {
    id: "hr-3",
    category: "Recruitment / HR",
    title: "Interview summary agent",
    description:
      "Summarizes candidate interviews into structured insights, ready to be shared with hiring managers.",
  },
  {
    id: "hr-4",
    category: "Recruitment / HR",
    title: "Manager coach",
    description: "Helps managers write clear and actionable performance reviews.",
  },
  {
    id: "hr-5",
    category: "Recruitment / HR",
    title: "Employee engagement analyzer",
    description:
      "Analyzes employee feedback and sentiment to identify engagement trends, key themes, and actionable insights.",
  },
  {
    id: "hr-7",
    category: "Recruitment / HR",
    title: "HR handbook agent",
    description:
      "Answers employee questions using your internal HR handbook and policies.",
  },
  {
    id: "hr-8",
    category: "Recruitment / HR",
    title: "HiBob profile checker",
    description:
      "Finds missing critical data in HiBob employee profiles to ensure records are complete.",
  },
  {
    id: "prod-0",
    category: "Productivity",
    title: "Daily calendar briefing",
    description:
      "Analyzes your schedule to suggest focus blocks and provides prep briefs for external meetings.",
  },
  {
    id: "prod-1",
    category: "Productivity",
    title: "Inbox catch-up agent",
    description:
      "Briefs you on the messages you missed on internal Slack, Outlook, and Teams.",
  },
  {
    id: "prod-2",
    category: "Productivity",
    title: "Meeting recap agent",
    description: "Summarizes meetings with actions and owners. Helps teams stay aligned.",
  },
  {
    id: "prod-3",
    category: "Productivity",
    title: "Quiz generator",
    description: "Creates customized quizzes for team training and knowledge assessment.",
  },
  {
    id: "prod-4",
    category: "Productivity",
    title: "Channel digest generator",
    description: "Summarizes key updates, decisions, and blockers from team channels.",
  },
  {
    id: "prod-5",
    category: "Productivity",
    title: "Process flow visualizer",
    description:
      "Creates visual flowcharts based on process descriptions and meeting transcripts.",
  },
  {
    id: "prod-6",
    category: "Productivity",
    title: "Custom agent builder",
    description: "Helps you turn ideas into fully configured nexos.ai agents ready to run.",
  },
  {
    id: "prod-7",
    category: "Productivity",
    title: "nexos.ai helper",
    description: "Answers your questions about nexos.ai using official documentation.",
  },
  {
    id: "prod-8",
    category: "Productivity",
    title: "Sprint risk manager",
    description:
      "Flags sprint risks and delivery blockers early by reviewing sprint tasks, dependencies, and progress.",
  },
  {
    id: "support-0",
    category: "Customer Support",
    title: "Inquiry responder",
    description:
      "Answers routine customer queries automatically, handing off to human agents for more complicated issues.",
  },
  {
    id: "support-1",
    category: "Customer Support",
    title: "Step-by-step support guide",
    description:
      "Guides customers through support issues with clear instructions and personalized answers.",
  },
  {
    id: "support-2",
    category: "Customer Support",
    title: "Order tracker",
    description:
      "Sends order status and tracking updates, so customers feel proactively informed instead of left guessing.",
  },
  {
    id: "support-3",
    category: "Customer Support",
    title: "Sentiment analyzer",
    description:
      "Detects frustration, urgency, and positive feedback in individual customer interactions. Teams can step in when needed.",
  },
  {
    id: "support-4",
    category: "Customer Support",
    title: "Conversation trend analyzer",
    description:
      "Analyzes customer conversations at scale to find recurring questions, issues, and experience trends.",
  },
  {
    id: "support-5",
    category: "Customer Support",
    title: "Customer data manager",
    description:
      "Updates customer records, keeps data accurate, and reduces repetitive admin for support teams.",
  },
  {
    id: "legal-0",
    category: "Legal",
    title: "Contract review assistant",
    description:
      "Reviews contracts and flags risky clauses, missing terms, and deviations from your standards.",
  },
  {
    id: "legal-1",
    category: "Legal",
    title: "Legal policy Q&A agent",
    description:
      "Answers employee questions using your internal legal policies and compliance documentation.",
  },
  {
    id: "legal-2",
    category: "Legal",
    title: "NDA summarizer",
    description: "Summarizes NDAs into key obligations, restrictions, and expiration terms.",
  },
  {
    id: "finance-0",
    category: "Finance",
    title: "Expense manager",
    description:
      "Analyses your expenses, summarizing your spending trends, identifying anomalies, and giving you actionable insights.",
  },
  {
    id: "finance-1",
    category: "Finance",
    title: "Invoice processing assistant",
    description:
      "Extracts key details from invoices and receipts, and prepares them for approval and bookkeeping.",
  },
  {
    id: "finance-2",
    category: "Finance",
    title: "Financial report summarizer",
    description:
      "Summarizes financial reports into key metrics, trends, and takeaways for stakeholders.",
  },
];

export const extraAgentCategories: AgentCategory[] = [
  { id: "support", label: "Customer Support", heading: "" },
  { id: "legal", label: "Legal", heading: "" },
  { id: "finance", label: "Finance", heading: "" },
];

export const workspaceAgentCategories: AgentCategory[] = [
  ...agentCategories,
  ...extraAgentCategories,
];
