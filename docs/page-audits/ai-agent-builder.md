# AI Agent Builder page audit

Reference: https://nexos.ai/ai-agent-builder/  
Local: `/ai-agent-builder`  
Audited: 2026-09-15 against the live public page + 14 supplied section screenshots.

Homepage `/`, AI Workspace `/ai-workspace-for-multiple-llms`, and AI Agents `/features/ai-agents` stay locked. This page is not a restyle of those layouts.

---

## Route map

| | URL |
| --- | --- |
| Original | https://nexos.ai/ai-agent-builder/ |
| Local | `/ai-agent-builder` |

---

## Screenshot → section map

| Attachment | Section | Notes |
| --- | --- | --- |
| 01 | Hero | Purple “AI Agent Builder:” + black “Create AI Agents in a single prompt”. Get nexos.ai + 14-day guarantee on one row. Square hero still (`agent-builder-hero`) with prompt overlay + Drive/Gmail/Slack chips baked in. |
| 02 | Building Agents intro + video | Centered H2 40px. Body under heading. `Agent-builder_44s_1920x1080.mp4` autoplay/muted/loop (typing “Generat|” UI is in the video, not HTML). |
| 03 | No-code Agent Builder | Eyebrow pill. Copy LEFT / still RIGHT. `create-agent-from-scratch-or-use-template`. |
| 04 | Integrations | Still LEFT / copy RIGHT. `founder-integrations-apps` (Slack, HiBob, Jira, Confluence, Compass, Sharepoint, Gmail, Calendar). |
| 05 | Agent templates | Copy LEFT / still RIGHT. Same `nexos-homepage-agent-templates` still as AI Agents (reused). |
| 06 | Model-agnostic | Still LEFT / copy RIGHT. `model-selection-sales`. “multiple LLMs” links to `/ai-workspace-for-multiple-llms`. |
| 07 | Scheduling | Copy LEFT / still RIGHT. `agents-schedule`. |
| 08 | Human in the loop | Still LEFT / copy RIGHT. Same `human-in-the-loop` still as AI Agents (reused). |
| 09 | Your data stays yours | Single `rounded-md` bar, radial purple gradient. Copy LEFT, 3 cert SVGs RIGHT (GDPR, AICPA SOC 2 Type 2, ISO 27001). Not the Agents 5-card grid. |
| 10 | Your to-do list just got a new hire | Centered H2 + “different types of specialized Agents” accent link. Prompt composer on `prompt-grid-bg.svg`. Visual-only + submit → `/pricing`. |
| 11 | Sales / use-case carousel | Keen-slider: Sales, Marketing, Recruitment & HR, Legal. Quote cards + portraits + Nord Security wordmark. Prev/next + progress. |
| 12 | How to build AI Agents with nexos.ai? | Two-column: heading LEFT, 6 steps RIGHT with Font Awesome–style accent icons and `hr` dividers. White→`#EFF4F8` gradient. Not a 3-col numbered grid. |
| 13 | Try Agent Builder CTA | Dark grid-glow. Heading only. Purple “Buy nexos.ai” → `/pricing`. |
| 14 | FAQ | Two-column, 4 card accordions, chevron. |

---

## Exact section sequence (after Header, before Footer)

1. **Hero** — AI Agent Builder: Create AI Agents in a single prompt
2. **Building Agents is the easiest task you'll do today** + intro video
3. **No-code Agent Builder** — Build your Agent – no dev needed
4. **Integrations** — Works with all the tools you already use
5. **Agent templates** — Get a head start with expert-build templates
6. **Model-agnostic** — Find the right AI model for you
7. **Scheduling** — Set Agents to work on schedule
8. **Human in the loop** — Stay in control while agents do the work
9. **Your data stays yours** (gradient cert bar)
10. **Your to-do list just got a new hire** (prompt composer)
11. **Use-case carousel** — Sales / Marketing / Recruitment & HR / Legal
12. **How to build AI Agents with nexos.ai?** (6-step list)
13. **Try Agent Builder** CTA
14. **FAQ**

---

## Section backgrounds / dimensions (1440 live)

| Section | Background | ~Height | Notes |
| --- | --- | --- | --- |
| Hero | White | 760px | 2-col, still 568×568, copy max 568 |
| Intro + features + security | White | 4862px | One live `<section>`; intro H2 40px/768; video 1168×657; feature rows 568; security bar 181×1168, radius 16px |
| To-do | White + prompt grid | 620px | Composer max 784px |
| Use cases | White | 599px | One slide at a time (keen-slider) |
| How to build | White→`#EFF4F8` | 1022px | 12-col: 5 / 7 on xl |
| CTA | `#071013` + grid glow | 584px | |
| FAQ | White | 526px closed | Cards 668px, radius 16px, border `#dbe4eb` |

---

## Assets per section

| Section | Type | Local path | Source |
| --- | --- | --- | --- |
| Hero still | WebP | `src/assets/images/ai-agent-builder/hero.webp` | `agent-builder-hero` |
| Intro video | MP4 3.5MB | `src/assets/videos/ai-agent-builder/agent-builder.mp4` (+ `public/videos/...` for `<video>`) | `Agent-builder_44s_1920x1080.mp4` |
| Video poster | JPEG 800×450 | `src/assets/images/ai-agent-builder/video-poster.jpg` | `webimage-Agent-builder_44s_1920x1080.jpg` |
| No-code still | WebP | `src/assets/images/ai-agent-builder/create-agent.webp` | `create-agent-from-scratch-or-use-template` |
| Integrations still | WebP | `src/assets/images/ai-agent-builder/integrations.webp` | `founder-integrations-apps` |
| Templates still | WebP | `src/assets/images/ai-agents/templates.webp` | reused (`nexos-homepage-agent-templates`) |
| Models still | WebP | `src/assets/images/ai-agent-builder/models.webp` | `model-selection-sales` |
| Schedule still | WebP | `src/assets/images/ai-agent-builder/schedule.webp` | `agents-schedule` |
| HITL still | WebP | `src/assets/images/ai-agents/human-in-the-loop.webp` | reused |
| Cert badges | SVG | `src/assets/images/product/badge-{gdpr,aicpa,iso-27001}.svg` | reused, 3 only |
| Prompt grid | SVG | `src/assets/images/ai-agent-builder/prompt-grid-bg.svg` | live original |
| Prompt grid xs | SVG | `src/assets/images/ai-agent-builder/prompt-grid-bg-xs.svg` | live original |
| Tool glyphs | PNG 72×72 | `src/assets/icons/tools/*` | reused in composer |
| Portraits | WebP 96×96 | `src/assets/images/home/testimonial-{vismantas,ilma,lauryna,giedre}.webp` | reused |
| Nord Security | SVG | `src/assets/logos/nord-security.svg` | live original (used on all 4 slides, including NordVPN) |
| CTA glow | SVG | `src/assets/illustrations/grid-glow-bottom-dark.svg` | reused |
| Process / department icons | Inline SVG | `src/components/builder/BuilderIcons.tsx` | live path data |

Videos: **one** playable MP4 on this page. No WebM source.

---

## Animations / interactions (from live, not screenshots)

| Area | Behavior |
| --- | --- |
| Hero | Static still (no entrance timeline beyond normal page paint) |
| Intro | Video autoplay, muted, loop, playsInline, poster |
| Feature stills | Static images; no scroll-pin |
| Security | Static gradient bar |
| To-do composer | Textarea; AI Tools panel; submit disabled until text, then `/pricing` |
| Use cases | Keen-slider equivalent: one slide, prev/next, progress bar, grab cursor |
| How to build | Static list + dividers (not scroll-scrubbed) |
| FAQ | Accordion (Motion height), card hover shadow |
| CTA | Static |

No GSAP pin/scrub on this page.

---

## Desktop / tablet / mobile

| Width | Behavior |
| --- | --- |
| 1440 / 1280 | 2-col hero and feature rows; 568 stills; carousel one slide |
| 1024 | Same 2-col where `md:` applies; how-to 6/6 then 5/7 at xl |
| 768 | Feature rows stack; video full width; composer on xs grid SVG |
| 390 | Stacked copy/visual; hero still full width; FAQ cards full width; carousel still one slide |

---

## Current local differences (before this recreation)

Stand-in `BuilderPage` used `ProductHero` + fake `BuilderHeroVisual` Frame UI, a 2-col generic feature card grid, `AgentGallery` instead of the to-do composer + use-case carousel, and a 3-col numbered step grid. Security was a card in that grid, not the gradient cert bar. No live stills, no intro video, no FAQ card layout match beyond shared `ProductFaq`.

---

## Locked pages

Do not change Homepage, AI Workspace, or AI Agents visuals. Shared `ProductCta` / `ProductFaq` changes are additive props with defaults unchanged.
