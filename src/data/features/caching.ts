import { salesMailto } from "@/config/contact";
import { cachingGraphics } from "@/assets/caching";
import { faqParagraphs } from "@/data/products/shared";
import type { ProductFaqItem, ProductLink } from "@/data/products/types";

export const cachingHero = {
  heading: "LLM caching that optimizes AI costs",
  body: "Stop building separate caching logic for every provider. nexos.ai simplifies LLM caching through one integration, so your team can focus on building products.",
  bullets: [
    "Lower token costs – skip reprocessing repeated context.",
    "Faster responses – return cached responses with lower latency.",
    "One integration – no per-provider cache logic to maintain.",
  ],
  primary: { label: "Start building", href: "/pricing" } satisfies ProductLink,
  secondary: { label: "Talk to Solutions Engineer", href: salesMailto } satisfies ProductLink,
  trustCaption: "Chosen by leading engineering teams",
  visualAlt: "nexos.ai Gateway cache routes requests to cached responses or an LLM provider",
};

export const cachingWhat = {
  heading: "What is LLM caching?",
  body: "LLM caching stores and reuses previously processed prompts or responses. When identical or similar queries share a system prompt or repeated prompt prefixes, the LLM caching system returns a stored response instead of recomputing it – fewer redundant computations, lower token costs, faster responses.",
  contextsHeading: "Contexts commonly cached",
  contextsIntro:
    "This is especially useful for AI applications that repeatedly send large blocks of shared context, from API-driven agents to an AI workspace for multiple LLMs, such as:",
  contexts: [
    { id: "agent", title: "Agent instructions", icon: "list" as const },
    { id: "system", title: "System instructions", icon: "gear" as const },
    { id: "tools", title: "Tool definitions", icon: "list" as const },
    { id: "docs", title: "Long documents or codebases", icon: "books" as const },
    { id: "examples", title: "Examples and reference material", icon: "list" as const },
    { id: "history", title: "Conversation history", icon: "comments" as const },
  ],
};

export const cachingBenefits = {
  heading: "Benefits of LLM caching",
  cards: [
    {
      id: "eng",
      title: "Save engineering time",
      image: cachingGraphics.saveTime,
      imageAlt: "Save engineering time",
    },
    {
      id: "cost",
      title: "Reduce AI costs",
      image: cachingGraphics.reduceCost,
      imageAlt: "Reduce AI costs",
    },
    {
      id: "speed",
      title: "Improve response times",
      image: cachingGraphics.faster,
      imageAlt: "Improve response times",
    },
    {
      id: "scale",
      title: "Scale AI without rebuilding caching",
      image: cachingGraphics.scale,
      imageAlt: "Scale AI without rebuilding caching",
    },
  ],
};

export const cachingImprove = {
  headingBefore: "How ",
  headingAccent: "nexos.ai",
  headingAfter: " improves LLM caching",
  intro:
    "nexos.ai works on two levels. Exact repeats are answered instantly by the Gateway's own cache, no provider call needed. Everything else is structured to make the most of the provider's own caching, so nothing gets processed at full price unnecessarily.",
  primary: { label: "Talk to Solutions Engineer", href: salesMailto } satisfies ProductLink,
  secondary: { label: "Get API key", href: "/pricing" } satisfies ProductLink,
  cards: [
    {
      id: "workflow",
      icon: "list" as const,
      title: "No workflow changes",
      body: "Developers keep using the same models, prompts, coding agents, and applications. Caching improvements happen through the Gateway underneath, so cost savings show up without redesigning how your team works.",
    },
    {
      id: "missed",
      icon: "search" as const,
      title: "Catch missed opportunities",
      body: "Repeated context still gets processed at full price when caching is missing or misconfigured. nexos.ai helps identify repeated context and improve how effectively provider-side prompt caching is applied.",
    },
    {
      id: "providers",
      icon: "share" as const,
      title: "Handle provider differences",
      body: "Providers differ in how prompt caching is enabled, structured, and reported. nexos.ai manages those differences through one centralized integration, so you don't build a separate caching system for every provider.",
    },
    {
      id: "scale",
      icon: "scale" as const,
      title: "Stay effective as you scale",
      body: "New agents, changing prompts, and updated workflows can erode cache effectiveness over time. Centralized visibility helps teams monitor cache hit rates and keep caching working as AI usage grows.",
    },
  ],
};

export const cachingTwoWays = {
  headingBefore: "Two ways ",
  headingAccent: "nexos.ai",
  headingAfter: " makes caching work",
  intro:
    "Caching saves money in two different places: at the Gateway and inside the provider. nexos.ai handles both, so you get the benefit either way. Here's how:",
  cards: [
    {
      id: "response",
      icon: "comments" as const,
      title: "Response caching",
      body: "The Gateway keeps its own cache of past requests and responses. When an identical request comes in again, nexos.ai returns the stored response directly, with no call to the provider at all. This is the fastest possible outcome: no generation, no wait, no cost.",
    },
    {
      id: "prompt",
      icon: "window" as const,
      title: "Prompt caching",
      body: "Prompt caching lives on the provider's side, reusing repeated prompt prefixes, like a shared system prompt, so requests that begin the same way skip reprocessing. nexos.ai makes sure your requests are structured to take full advantage of it, so you capture these savings without extra work.",
    },
  ],
};

export const cachingComplexity = {
  heading: "The complexity of LLM caching",
  intro:
    "Provider caching isn't \"set and forget.\" It happens at the AI provider level, but keeping it effective is an ongoing job. Each provider has its own rules, so teams typically need to:",
  footer:
    "And it never stops. New agents, new use cases, and evolving workflows mean these configurations need constant review.",
  items: [
    { id: "params", icon: "gear" as const, title: "Configure parameters correctly", body: "Small misconfigurations quietly kill your cache hit rate." },
    { id: "validate", icon: "clipboard" as const, title: "Validate cache hit rates", body: "Confirm caching is actually firing, not just assumed." },
    { id: "prompts", icon: "comments" as const, title: "Optimize prompts", body: "Structure requests so repeated context is cacheable in the first place." },
    { id: "maintain", icon: "list" as const, title: "Maintain it across providers", body: "Then do it all again for the next model." },
  ],
};

export const cachingTackle = {
  headingBefore: "How ",
  headingAccent: "nexos.ai",
  headingAfter: " tackles these challenges",
  intro:
    "nexos.ai turns caching from a per-provider chore into one integration your team sets up once. Instead of administering caching model by model, the nexos.ai Gateway manages it centrally, giving you visibility into cache effectiveness across every provider from one place.",
  cards: [
    { id: "less", icon: "gear" as const, title: "Less implementation work", body: "No provider-specific caching to build and maintain for every model." },
    { id: "see", icon: "chart" as const, title: "Savings you can actually see", body: "See exactly how many tokens, and how much cost, caching saved you." },
    { id: "spot", icon: "search" as const, title: "Spot problems early", body: "Hit-rate data flags misconfigurations before they cost you savings." },
    { id: "setup", icon: "windows" as const, title: "No new setup per provider", body: "Connect a new provider without building separate caching logic for it." },
    { id: "scale", icon: "trend" as const, title: "Scales without extra setup", body: "Add new agents, models, or providers without adding new caching work." },
  ],
};

export const cachingResults = {
  heading: "Real-world results of LLM caching",
  body: "Nord Security is cutting costs and improving cache performance for their coding agents running on nexos.ai, without changing how their teams work. And the results speak for themselves:",
  stats: [
    { value: "46%", label: "Reduction in total LLM costs" },
    { value: "77%", label: "Cache hit rate, up from just 14%" },
    { value: "Zero", label: "Workflow changes required" },
  ],
  cta: { label: "Read the Nord Security case study", href: "/customer-stories" } satisfies ProductLink,
};

export const cachingCta = {
  heading: "Stop paying twice for the same context",
  body: "Turn repeated context into lower AI costs with nexos.ai LLM caching.",
  primary: { label: "Talk to Solutions Engineer", href: salesMailto } satisfies ProductLink,
  secondary: { label: "Start Building", href: "/pricing" } satisfies ProductLink,
};

export const cachingFaq: ProductFaqItem[] = [
  {
    id: "multi",
    question: "Does nexos.ai LLM caching work across multiple AI providers?",
    answer: faqParagraphs(
      "Yes. nexos.ai is model-agnostic by design, so caching applies across the different providers you connect through a single Gateway. Instead of managing caching provider by provider, you route your requests through one integration and let nexos.ai maximize cache hits across supported large language models, capturing savings across your entire AI stack rather than one model at a time.",
    ),
  },
  {
    id: "replace",
    question: "Does nexos.ai replace provider caching?",
    answer: faqParagraphs(
      "Partly – nexos.ai has its own AI Gateway cache that catches exact repeats before a request ever reaches the provider, on a hit, there's no call to the provider at all.\n\nThe AI gateway keeps its own cache of past requests and responses.",
    ),
  },
  {
    id: "separate",
    question: "Do I need separate caching implementations for each provider?",
    answer: faqParagraphs(
      "Not with nexos.ai. Normally, each provider caches on its own terms, which means teams end up configuring, and maintaining a different implementation for every model they use – then repeating that work for each new provider. nexos.ai removes that overhead. One integration with the Gateway handles caching across supported providers automatically, so your engineers don't need to manage it at all.",
    ),
  },
  {
    id: "models",
    question: "Which AI models support LLM caching?",
    answer: faqParagraphs(
      "LLM caching works across every model connected through the nexos.ai Gateway; support isn't limited to what each provider offers. The Gateway has its own cache that stores and returns responses independent of the provider, so caching works regardless of whether the underlying model supports it. Where providers do offer their own caching, nexos.ai takes advantage of that too, all managed through the same integration.",
    ),
  },
  {
    id: "changes",
    question: "Does LLM caching require changes to my application?",
    answer: faqParagraphs(
      "No. Developers don't need to rearchitect their applications or build provider-specific caching logic. Your requests keep flowing through the same single endpoint they always have, and nexos.ai handles caching underneath, so the cost savings and faster responses show up without any workflow changes. It's the same experience Nord Security had: better caching, zero changes required.",
    ),
  },
  {
    id: "secure",
    question: "Is cached data secure?",
    answer: faqParagraphs(
      "Yes. Caching happens within each provider's secure infrastructure, and nexos.ai never uses your data to train models. Cached requests are covered by the same protections as every other call through our platform for AI security.",
    ),
  },
];
