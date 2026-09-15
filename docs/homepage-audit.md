# Homepage audit — live reference (nexos.ai)

Audited 2026-09-15 from the current public homepage at https://nexos.ai/. Copy below is the source of truth for Phase 3. Do not rewrite, paraphrase, shorten, or invent replacements.

Visual assets from Nord CDN / nexos hashed files are **not stored**. Layout replacements are original CSS/SVG of matching dimensions. Person photos and official certification seals are not copied.

## Exclusions (override the reference)

Not copied, with layout rebalanced (no blank slots, no fake equivalents):

- Sign in / Login / Sign up / Register / Account / Profile / Dashboard
- Social icons and social URLs
- Phone numbers / WhatsApp

## CTA routing

| Visible label | Live href | Our href |
| --- | --- | --- |
| Get API key | `/pricing/` | `/pricing` |
| Book a demo | `/contact-sales/` | `/contact-sales` |
| Get nexos.ai | `/pricing/` | `/pricing` |
| Explore AI Gateway | `/ai-gateway/` | `/ai-gateway` |
| Explore LLM observability | `/features/llm-observability/` | `/features/llm-observability` |
| Explore AI governance | `/features/ai-governance/` | `/features/ai-governance` |
| Explore AI Workspace | `/ai-workspace-for-multiple-llms/` | `/ai-workspace-for-multiple-llms` |
| Read customer story | `/customer-stories/nord-security/` | `/customer-stories` |
| Smart LLM routing | `/features/smart-llm-routing/` | `/features/smart-llm-routing` |
| LLM Caching | `/features/llm-caching/` | `/features/llm-caching` |
| Integration chips | `docs.nexos.ai/...` | `NEXT_PUBLIC_DOCS_URL` or `/docs/...` |
| FAQ “nexos.ai reviews” | `/reviews/` | `/reviews` |
| FAQ “pricing page” | `/pricing/` | `/pricing` |

No fake authentication pages.

## Global homepage canvas

- Page background `#071013` through integrations.
- Testimonials on a light wash (`#eff4f8` / white cards).
- Closing CTA returns to dark navy with purple glow.
- FAQ on white, then the existing white footer.
- Header is dark on the hero; live site swaps to a white bar once the hero is left. Match that swap.
- Container **1168px**, gutters 16/24px.
- Headings: Space Grotesk 600. Body/UI: Inter.
- Homepage videos: **none** (empty `<source>` tags on the live page).

## 1. Hero

| Field | Live copy |
| --- | --- |
| Eyebrow/badge | Rotating pill: **EU HOSTED** / **ISO 27001** / **ISO 42001** / **SOC2 TYPE2** |
| Heading | Get full visibility / and control of **AI usage** |
| Supporting | One AI platform to access 200+ LLMs, see every request, and optimize spend. |
| CTAs | Get API key · Book a demo |
| Secondary link | What is an AI platform? |

Notes:

- First heading line is a `display:block` span (intentional wrap). “AI usage” uses an animated 100° purple→mint text gradient (`#743cff` / `#5ff3e4`), 6s sweep.
- H1 desktop: 64px / 76.8 / 600, max-width **741px**, centered.
- Subhead: 20px / 30px / 400, `#bfcbd4`, width 741px.
- Get API key: 48px pill, key icon, radial purple fill, comet border. Full width below `md`.
- Book a demo: 48px white pill, `#262b30` text, `#dbe4eb` border.
- Platform link: `#6b3eff` label, circular info icon in white.
- Hero height at 1440 ≈ 551px before the logo row.

## 2. “What is an AI platform?” (modal, not a page section)

Opened from the hero link (`data-modal-open="ai_platform_definition"`).

| Field | Live copy |
| --- | --- |
| Heading | What is an AI platform? (28px / 36.4 / 600) |
| Paragraph 1 | An AI platform is a unified environment used to access, build, and manage AI models, applications, and agents in one place. It combines model access, observability, governance and AI tools in one platform, so technical and business teams don’t have to manage separate providers, tools, and invoices. |
| Paragraph 2 | The nexos.ai platform covers both sides of the organization. Engineering teams access 200+ leading LLMs through one API endpoint, track usage and spend, and govern how AI is used. Business teams work with AI through Chat and Agents, from text generation and image creation to no-code AI agents, in one simple interface and with no separate subscription for each of your AI tools. |

## 3. Trusted by

| Field | Live copy |
| --- | --- |
| Caption | Trusted by teams building and running AI in production |

- 16px / 24px / 500, `#a3b4c2`, full container width, centered.
- Logo strip 1168×64 (mobile variant exists). **Replacement:** original geometric marks in a marquee. Do not copy customer wordmarks from the CDN SVG.

## 4. Product tabs

Desktop labels above tabs (12px / 18px / 500, mint `#5ff3e4`): **For developers** (over the first three tabs) · **For business teams** (over AI Workspace).

| Tab | Description | CTA |
| --- | --- | --- |
| AI Gateway | Route all your LLM traffic through one API and switch models without changing your code. | Explore AI Gateway |
| Observability | See every LLM request, track model performance, and know exactly where your spend goes. | Explore LLM observability |
| Governance & Control | Control who can use which models, set budgets and usage limits, and manage permissions across your organization. | Explore AI governance |
| AI Workspace | Give every team one secure place to chat with leading AI models, connect their work tools, and build no-code AI agents. | Explore AI Workspace |

Layout: folder tabs (active `#131921` + periwinkle title + gradient underline; inactive stepped purples). Panel is two columns: 40px title, 20px/`#a3b4c2` body, 20px/600 outline “Explore …” + arrow; right side 632×540 product visual.

**Replacement visuals** (alt text preserved for accessibility): original CSS instrument panels, not CDN screenshots.

## 5. Reduce AI costs

| Field | Live copy |
| --- | --- |
| Heading | Reduce AI costs without giving up quality (48px / 57.6 / 600, width 500) |
| Body | nexos.ai optimizes every request by routing it to the right model, reusing repeated context, and reducing unnecessary tokens while keeping the context that matters. |

Cards (dark `#131921`, 16px radius, `#1C232E` border, sticky stack on `lg`):

| # | Title | Description |
| --- | --- | --- |
| 01 | Smart Routing | Route each request to the best model for quality and cost with **Smart LLM routing**. |
| 02 | LLM Caching | Reuse repeated context to lower costs and speed up responses **LLM Caching**. |
| 03 | Context compression | Compress long inputs to keep only important information and send fewer tokens. |
| 04 | Fallbacks & failovers | Automatically reroute traffic when a provider slows or fails. |

Product names in 01/02 are in-copy links. Do not “fix” the Caching sentence.

Diagrams: original SVG, matching described scenes. Section ~2507px tall at 1440 because of the sticky stack.

## 6. Security and compliance

| Field | Live copy |
| --- | --- |
| Heading | Security and compliance, built in |
| Body | Run AI with enterprise-grade security, privacy, and compliance controls, designed to protect your data and meet organizational requirements. |

| Card | Description |
| --- | --- |
| EU-hosted | Keep supported model requests and data within EU-hosted infrastructure. |
| Zero data retention | Supported models don’t retain prompts or responses after delivery. |
| No training on your data | Your data stays yours and is never used to train AI models. |
| SSO and access control | Manage secure access across teams and projects with SSO/SAML and RBAC. |

Titles 16px/600 Inter. Four cards ~230px. Official GDPR/AICPA/ISO seals **not copied** — original 108×108 round badges with the same labels.

## 7. Integrations

| Field | Live copy |
| --- | --- |
| Heading | Works with the AI stack you already use |
| Body | Connect nexos.ai to the models, applications, coding agents, and work tools your teams already rely on, without replacing your existing AI stack. |

| Group | Names (exact) |
| --- | --- |
| Coding and AI Agents | Claude Code, Cline, Openbox, OpenAI Codex, Kilo Code, Opencode, Roo Code |
| Build and Automation Tools | n8n, Langfuse, Braintrust, LangGraph, Zapier, LangChain, Make |
| Models | Claude, Kimi, Grok, GPT, Qwen, GLM, Gemini, DeepSeek, Mistral |
| Everyday work tools | Slack, Gmail, SharePoint, YouTube, Jira, Google Drive, Figma, Canva, Confluence, MS Teams, LinkedIn |

2×2 dark cards, colored dots, horizontally overflowing chips with name + arrow. Third-party brand glyphs **not copied** — original marks beside the live names.

## 8. Testimonials

| Field | Live copy |
| --- | --- |
| Heading | What leading teams say about us |
| Featured name / role | Marijus Briedis · CTO @NordVPN |
| Badge | AI Gateway |
| Stat | 46% |
| Stat label | Reduction in total LLM costs (`#6b3eff`, 20px) |
| Quote | "nexos.ai helped us reduce coding-agent LLM costs by 46% without changing our prompts, models, or developer workflows. The optimization was transparent to our engineers, while giving us much better visibility into AI usage and spend." |
| CTA | Read customer story |

Carousel (product badge + name / role / company + quote). Headshots **not copied** — initial/gradient stand-ins of the same 48×48 / 272×343 slots.

## 9. Closing CTA

| Field | Live copy |
| --- | --- |
| Heading | Get complete visibility / and control over AI |
| Break | `<br class="hidden lg:block">` — keep this intentional break |
| Body | Track LLM usage, manage spend, and stay in control across every team. |
| CTAs | Get nexos.ai · Book a demo |

Heading 48px, width 768, centered. Body 20px `#bfcbd4`.

## 10. FAQ

| Field | Live copy |
| --- | --- |
| Heading | FAQ (40px) |
| Tabs | AI Platform · About nexos.ai · Security |

Items start **collapsed**. Answers are 16px / 24px / `#464e56`.

### AI Platform

**What’s the difference between an AI platform and ChatGPT?**  
ChatGPT is a great personal assistant, but it often operates as a siloed chatbot, with disconnected context and tools. An AI platform like nexos.ai gives access to leading AI models, full visibility into LLM usage and spend, with centralized control in one place.

**What should I look for when choosing the best AI platform for my team?**  
When choosing the best AI platform for your team, look at how well it fits both your people and your AI infrastructure. It should connect with the tools your teams already use, provide access to leading AI models, and give you visibility and control over usage and spend.  
For technical teams, consider one API across providers, model flexibility, budgets, and request-level visibility. For business teams, look for no-code agents and integrations that help automate everyday work.

**Why do organizations need an AI platform?**  
An AI platform brings models, tools, providers, and AI usage under one layer, giving teams access to the AI they need while the organization maintains visibility and control over usage, access, and spend. As AI adoption grows, this makes it easier to manage complexity and scale AI across the organization.

### About nexos.ai

**What is nexos.ai?**  
nexos.ai is an all-in-one AI platform that enables business teams to reach their full potential. We move beyond simple chat by allowing anyone to build custom, no-code AI Agents and automate complex Workflows from a single, unified interface. Check out recent nexos.ai reviews to see what leading industry experts say about our AI platform.

**How does nexos.ai reduce cost?**  
nexos.ai reduces AI costs through Smart Routing, prompt caching, context compression, and spend controls. Requests can be routed to the right model based on task complexity, cost, quality, and performance, while caching and compression reduce unnecessary token usage and budgets and limits help keep spend under control.

**How much does nexos.ai cost?**  
nexos.ai pricing depends on how you use the platform. AI Gateway is usage-based, while AI Chat and Agents are available on a monthly plan. Enterprise plans are customized based on your organization’s needs. See our pricing page for current plans and rates.

**What models can I use with nexos.ai?**  
nexos.ai gives you access to 200+ AI models from leading providers, including OpenAI, Anthropic, Google, Mistral, and more. Choose between frontier and open-weight models and switch models as your needs change, without being locked into a single provider.

**How does nexos.ai integrate with existing applications?**  
nexos.ai works with the applications and tools your teams already use. Technical teams can connect existing applications, frameworks, and coding tools through one API, while business teams can connect AI Chat and Agents to workplace tools such as Google Workspace, SharePoint, and Slack.

**What if I already have a deal with an LLM provider?**  
You can keep your existing provider agreements and use nexos.ai alongside them, without vendor lock-in. Route selected AI traffic through nexos.ai to access additional models, centralized observability and governance, and cost optimization without replacing your existing setup.

### Security

**How does nexos.ai support internal security policies?**  
nexos.ai helps organizations enforce internal AI policies through centralized access controls, SSO/SAML, role-based permissions, and model access policies. Audit logs provide a record of AI activity for internal reviews and security assessments.

**Is nexos.ai compliant and certified?**  
Yes. The nexos.ai AI platform is GDPR-compliant, and its infrastructure is SOC 2, ISO 27001, and ISO 42001 certified. EU-hosted infrastructure and Zero Data Retention are also available for supported models and use cases

(Live answer has no terminal period.)

## Interactions / animation audit

Live values inspected 2026-09-15 at 1440×900 and in CSS. Homepage videos: none.

| Section | Trigger | Animation | Technology |
| --- | --- | --- | --- |
| Hero backdrop | paint | Radial gradient `3828×2856 at 50% -752px` with `--homepage-backdrop-stops` covering hero + trusted-by + product tabs | CSS |
| Hero badges | 2s interval | Overlapping pills translate/scale/mask; comet ring on active | CSS + React interval |
| “AI usage” | continuous | 100° `#743cff`→`#5ff3e4` sweep, 6s, `background-size: 300%` | CSS |
| Get API key | continuous | Comet-orbit border (live) / radial purple fill | CSS |
| Platform dialog | click | Modal open | Motion |
| Trusted-by logos | none | Static combined SVG (not a marquee). Mobile uses a separate SVG | CSS `picture` |
| Product tabs | click | Desktop: `display` swap + `fadeIn` 0.4s ease-out. Mobile: height 100px→18px + panel grid-rows 0fr→1fr, 500ms. Active tab `#131921`, underline `#683afe`→`#5ee7e4`, 16px folder corners | Motion + CSS |
| Cost stack | scroll | CSS `sticky` with staggered `--sc-top` 120/158/199/247. `sc-behind` clips to peek ~46–51px. Not GSAP pin. Mobile also sticky (120/157/196/240) | CSS sticky + scroll listener |
| Security | none | Static 108px badge images | — |
| Integrations | continuous | Chip marquee | CSS |
| Testimonials | overflow | Horizontal scroll row | CSS |
| FAQ | click | Accordion | Motion |

## Responsive QA targets

1440 · 1280 · 1024 · 768 · 430 · 390 · 375

Watch H1/H2 wrap, 741px hero column, 500px cost copy, 768px integration/CTA headings, full-width mobile CTAs. Do not add extra `<br>` except the live CTA break and the hero block span.

## Cookie banner

Not part of the marketing recreation. Omit.

## Implementation map

Copy lives in `src/data/homepage.ts`. Sections in `src/components/home/`. Compare each section to the live page before calling it done.
