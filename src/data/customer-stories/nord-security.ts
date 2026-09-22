import { salesMailto } from "@/config/contact";

export const nordSecurityMeta = {
  title: "Nord Security cuts coding-agent LLM costs",
  description:
    "See how Nord Security cut coding-agent LLM costs by 46% with nexos.ai without changing prompts, models, or developer workflows.",
};

export const nordSecurityHero = {
  heading: "Nord Security cuts coding-agent LLM costs by 46% with nexos.ai",
  intro:
    "Nord Security is one of Europe's leading cybersecurity companies, protecting millions of users across multiple products (NordPass, NordVPN). As AI coding agents became part of engineering workflows, LLM usage grew rapidly, making it harder to understand where costs came from and how to optimize them. That's when the nexos.ai AI Gateway stepped in.",
  author: "By Vytautas Vaitkevicius",
  authorAlt: "Vytautas Vaitkevicius",
  heroAlt: "nexos.ai and Nord Security, AI costs down 46%",
  metrics: [
    { value: "46%", label: "Reduction in total LLM costs" },
    { value: "77%", label: "Prompt cache hit rate, up from 14%" },
    { value: "0", label: "Workflow changes required" },
  ],
};

export const nordSecurityToc = {
  heading: "TABLE OF CONTENTS",
  groups: [
    {
      id: "the-challenge",
      label: "The challenge",
      href: "#the-challenge",
      children: [
        { label: "Growing LLM spend", href: "#growing-llm-spend" },
        { label: "Limited AI observability", href: "#limited-ai-observability" },
        { label: "Limited cost controls", href: "#limited-cost-controls" },
        { label: "Redundant token processing", href: "#redundant-token-processing" },
      ],
    },
    {
      id: "the-solution",
      label: "The solution",
      href: "#the-solution",
      children: [
        { label: "A real-traffic audit", href: "#real-traffic-audit" },
        { label: "Gateway caching", href: "#gateway-caching" },
        { label: "Zero disruption", href: "#zero-disruption" },
        { label: "Better visibility & control", href: "#better-visibility" },
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

export const nordSecurityQuote = {
  name: "Marijus Briedis",
  title: "CTO @NordVPN",
  alt: "Marijus Briedis",
};

export const nordSecurityChallenge = {
  heading: "The challenge: AI costs grew faster than visibility and control",
  intro:
    "Engineering teams at Nord Security leaned on AI coding agents like Claude Code, Roo Code, OpenCode, and Zed to accelerate software development. Adoption took off fast, and that was a win. But as AI requests climbed, so did the bill, faster than the team could see, control and optimize where the money was going.",
  cards: [
    {
      id: "growing-llm-spend",
      icon: "trend" as const,
      title: "Growing LLM spend",
      body: "AI adoption increased faster than infrastructure efficiency could keep pace, and costs rose with it.",
    },
    {
      id: "redundant-token-processing",
      icon: "rotate" as const,
      title: "Redundant token processing",
      body: "Repeated prompt context was being processed from scratch instead of being reused, increasing LLM costs unnecessarily.",
    },
    {
      id: "limited-cost-controls",
      icon: "wallet" as const,
      title: "Limited cost controls",
      body: "Spotting optimization opportunities before costs escalated was difficult.",
    },
    {
      id: "limited-ai-observability",
      icon: "search" as const,
      title: "Limited AI observability",
      body: "It was hard to track where AI usage and costs originated across teams and tools.",
    },
  ],
  quote:
    '"Our engineers adopted AI coding agents quickly, and that was exactly what we wanted. But our AI bill grew faster than our ability to understand where the money was going. We needed better visibility and cost control without slowing developers down."',
};

export const nordSecurityMidCta = {
  kicker: "Bring every AI request through one secure AI Gateway",
  heading: "Gain visibility, optimize costs, and keep developers moving",
  primary: { label: "Talk to Solutions Engineer", href: salesMailto },
  secondary: { label: "Get API Key", href: "/pricing" },
};

export const nordSecuritySolution = {
  heading: "The Solution",
  paragraphs: [
    "nexos.ai turned Nord Security's rising, hard-to-see AI spend into immediate, measurable savings. We didn't touch a single prompt, model, or agent.",
    "Instead, every coding-agent request kept flowing exactly as before, while the nexos.ai AI Gateway quietly reused repeated prompt context before requests reached the LLM. All the savings, with zero disruption to how engineers work, built in.",
  ],
  numbersHeading: "Nord Security x nexos.ai success in numbers",
  numbersIntro: "Don't hear it from us. The results speak for themselves.",
  metrics: [
    { value: "46%", label: "Reduction in total LLM costs" },
    { value: "77%", label: "Prompt cache hit rate (up from 14%)" },
    { value: "0", label: "Workflow changes required" },
  ],
};

export const nordSecurityHow = {
  kicker: "How nexos.ai stepped in",
  headingBefore: "Here's how ",
  headingAccent: "nexos.ai",
  headingAfter: " solved each challenge.",
  steps: [
    {
      id: "real-traffic-audit",
      icon: "one" as const,
      title: "A real-traffic audit that pinpointed the overspend",
      paragraphs: [
        "nexos.ai analyzed the production AI traffic already flowing through the AI Gateway to measure how effectively repeated prompt context was being reused through caching.",
        "The audit found:",
      ],
      bullets: [
        "Prompt reuse was extremely high across coding agents.",
        "Caching captured only a fraction of it, with an initial cache hit rate of just 14%.",
      ],
      bulletWeight: "normal" as const,
      closing:
        "For coding agents, 70 to 80% is considered excellent, so most repeated context was still being processed from scratch on every call. The savings were sitting in plain sight.",
    },
    {
      id: "gateway-caching",
      icon: "two" as const,
      title: "Gateway caching at the infrastructure layer",
      paragraphs: [
        "Following the assessment, nexos.ai implemented gateway-level caching that automatically reuses repeated prompt context before requests ever reach the LLM.",
        "By processing only the new information and serving repeated context from cache, the Gateway reduced repeated LLM processing, and it stayed completely transparent to developers.",
      ],
      bullets: [],
      bulletWeight: "normal" as const,
      closing: null,
    },
    {
      id: "zero-disruption",
      icon: "three" as const,
      title: "Zero disruption to engineering",
      paragraphs: [
        "The optimization ran entirely behind the scenes. No prompt re-engineering. No model migration. No application changes.",
      ],
      bullets: ["Same models", "Same agents", "Same workflow"],
      bulletWeight: "semibold" as const,
      closing:
        "Engineers continued working with the same tools, models, and agents while the optimization happened transparently at the gateway layer.",
    },
    {
      id: "better-visibility",
      icon: "four" as const,
      title: "Better visibility and control over AI spend",
      paragraphs: [
        "Beyond caching, the engagement gave Nord Security greater visibility into production AI traffic.",
        "With a centralized gateway layer, the team could better understand AI usage patterns, identify optimization opportunities, and manage LLM spend as adoption continued to grow.",
      ],
      bullets: [],
      bulletWeight: "normal" as const,
      closing: null,
    },
  ],
};

export const nordSecurityResult = {
  heading: "The Result",
  paragraphs: [
    'With the nexos.ai AI Gateway, Nord Security cut total LLM costs by 46% and lifted its prompt cache hit rate from 14% to 77%, into the "excellent" band for coding agents. All of it landed with no application changes, no workflow disruption, and immediate infrastructure optimization.',
    "Today, Nord Security's engineers keep moving at full speed on the same models, prompts, and agents, while leadership finally has the visibility and cost control that scaling AI requires.",
  ],
  quote:
    '"nexos.ai helped us reduce coding-agent LLM costs by 46% without changing our prompts, models, or developer workflows. The optimization was transparent to our engineers, while giving us much better visibility into AI usage and spend."',
};

export const nordSecurityFinalCta = {
  heading: "Bring your AI spend under control",
  primary: { label: "Talk to Solutions Engineer", href: salesMailto },
  secondary: { label: "Get API Key", href: "/pricing" },
};

export const nordSecurityRelated = {
  heading: "Explore more customer stories",
  stories: [
    {
      slug: "payhawk",
      title: "Payhawk cuts security investigation time by 80% with nexos.ai",
      image: "relatedPayhawk" as const,
      alt: "Payhawk",
    },
    {
      slug: "hostinger",
      title: "Hostinger Horizons scales no-code AI web builder with nexos.ai",
      image: "relatedHostinger" as const,
      alt: "Hostinger",
    },
    {
      slug: "pigu-lt",
      title: "Pigu.lt integrates AI at the core of e-commerce with nexos.ai",
      image: "relatedPigu" as const,
      alt: "Pigu.lt",
    },
    {
      slug: "oxylabs",
      title: "Oxylabs doubles AI output and slashes costs with nexos.ai",
      image: "relatedOxylabs" as const,
      alt: "Oxylabs",
    },
  ],
};
