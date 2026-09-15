# AI Agents page audit

Reference: https://nexos.ai/features/ai-agents/  
Local: `/features/ai-agents`  
Audited: 2026-09-15 against the live public page + 13 supplied section screenshots.

Homepage `/` and AI Workspace `/ai-workspace-for-multiple-llms` stay locked. This page is not based on those layouts.

Videos: none (`<video>` count = 0). Do not invent video.

---

## Route map

| | URL |
| --- | --- |
| Original | https://nexos.ai/features/ai-agents/ |
| Local | `/features/ai-agents` |

---

## Screenshot → section map

| Attachment | Section | Notes |
| --- | --- | --- |
| 01 | Hero | H1 split (black + purple), FA checks, CirclePlus “What are AI Agents?” **between** bullets and CTA, guarantee on the **same row** as Get nexos.ai, photo+Meeting recap overlay (baked into `agents-hero-2`) |
| 02 | Built for productivity intro + Create custom | Centered H2/body, then **visual LEFT** / copy RIGHT. Category chips Marketing / Sales / Recruitment and HR |
| 03 | Start fast with pre-built Agent templates | Copy LEFT / **visual RIGHT**. Template-library still, not fake cards |
| 04 | Securely connect your work tools | Visual LEFT / copy RIGHT. Slack / Google Workspace / Microsoft Office pills |
| 05 | Stay in control while agents do the work | Copy LEFT / visual RIGHT. Human-in-the-loop Slack approval still |
| 06 | Connect your team like never before | Visual LEFT / copy RIGHT. Sharing/permissions still |
| 07 | Bring your work knowledge with you | Centered Integrations eyebrow, `integrations-logos.svg` strip, Explore Integrations → |
| 08 | No-code Agent for every task + dual CTA | Search, 4 tabs, category H3, 3×3 cards, purple pill bar + Get nexos.ai |
| 09 | Your data is always secure | 3+2 card grid; certified col-span-2; 3 badges (no ISO 42001); Trust Center text link |
| 10 | See what teams achieve with nexos.ai | Customer logo strip + 9-card carousel with **department** chips, not product chips |
| 11 | Featured in | Bloomberg, TechCrunch, Forbes, techradar, cybernews (live 5th file is `TechCrunch.svg`) |
| 12 | Let the boring work run itself | Dark grid-glow CTA, white Get nexos.ai |
| 13 | FAQ | Two-column, card accordion |

“What are AI Agents?” is a **hero modal**, not a standalone page section.

---

## Exact section sequence (after Header, before Footer)

1. **Hero** — Agents for any team / Build with no code, in minutes
2. **What are AI Agents?** modal (opened from hero)
3. **Built for productivity, scaled for teams** (intro) + five split still rows
4. **Bring your work knowledge with you**
5. **No-code Agent for every task** (gallery + pill CTA)
6. **Your data is always secure**
7. **See what teams achieve with nexos.ai**
8. **Featured in**
9. **Let the boring work run itself**
10. **FAQ**

---

## Assets per section

| Section | Type | Local path | Source |
| --- | --- | --- | --- |
| Hero grid | SVG | `src/assets/illustrations/grid-centered-secondary-center.svg` | live original |
| Hero still | WebP 1110×1110 | `src/assets/images/ai-agents/hero.webp` | `agents-hero-2` |
| Create custom | WebP | `src/assets/images/ai-agents/create-agent.webp` | `Agents-create-agent` |
| Templates | WebP | `src/assets/images/ai-agents/templates.webp` | `nexos-homepage-agent-templates` |
| Connect tools | WebP | `src/assets/images/ai-agents/integrations.webp` | `agents-integrations-2` |
| HITL | WebP | `src/assets/images/ai-agents/human-in-the-loop.webp` | `human-in-the-loop` |
| Share | WebP | `src/assets/images/ai-agents/share.webp` | `Agents-share-with-your-team` |
| Tool pills | SVG | `src/assets/icons/apps/{slack,google-workspace,microsoft-office}.svg` | live originals |
| Integrations strip | SVG | `src/assets/logos/integrations-logos.svg` | live original |
| Gallery grid | SVG | `src/assets/illustrations/grid-homepage-{xl,xs}-v2.svg` | live originals |
| Agent tool glyphs | PNG 72×72 | `src/assets/icons/tools/*` | reused |
| Cert badges | SVG | `src/assets/images/product/badge-{gdpr,aicpa,iso-27001}.svg` | reused, **3 only** |
| Customer strip | SVG | `src/assets/logos/customer-stories.svg` | reused |
| Portraits | WebP 96×96 | `src/assets/images/home/testimonial-*.webp` | reused |
| Press | SVG | `src/assets/logos/press/{bloomberg,techcrunch,forbes,techradar,cybernews}.svg` | live originals |
| Final CTA glow | SVG | `src/assets/illustrations/grid-glow-bottom-dark.svg` | reused |

`google-workspace.svg` is a 20×20 SVG with an embedded raster (~1.2MB). That is the live file, not a failed download.

---

## Interactions

| Control | Behavior |
| --- | --- |
| What are AI Agents? | Opens InfoDialog |
| Category tabs | Filter 3×3 cards; H3 swaps (Accelerate / Scale / Hire / Get your best work…) |
| Agent cards | Hover border/shadow |
| Testimonials | Drag/swipe + arrows + progress bar; 9 slides |
| FAQ | Motion accordion |
| Explore Integrations | `/features/ai-integrations` |
| Get nexos.ai | `/pricing` |

---

## Responsive notes

| Viewport | Behavior |
| --- | --- |
| 1440 | Two-column hero and feature rows; 3-col gallery; 3 visible testimonial cards |
| 1024 | Feature rows stack later; gallery 2–3 cols |
| 768 | Feature stills stack above copy (except templates/HITL which follow live order); gallery 2 cols; pill CTA stacks |
| 390 | Single column; logo strips use xs variants; FAQ stacks heading above cards |

Primary QA: 1440 and 390.

---

## Current local differences (pre-implementation)

Stand-in page: ProductHero + fake AgentsHeroVisual, 5 white feature cards instead of split stills, IntegrationsBand carousel SVG, gallery without category H3s / v2 grid, ProductSecurity hanging 4 badges, QuoteCarousel single card, no Featured in, FAQ on white.

---

## Animation audit

| Section | Live | Implementation |
| --- | --- | --- |
| Hero | Static still | CSS grid bg only |
| Feature rows | Static product stills | No fake GSAP |
| Gallery tabs | Instant filter | React state + CSS hover |
| Testimonials | Horizontal snap/drag | Pointer carousel (same pattern as homepage cards, without featured tile) |
| FAQ | Height accordion | Existing Motion |
| CTA | Static dark grid | Reuse ProductCta |
| Logo strips | Static SVGs | CSS, no marquee |

No pinned/scrub sections on the live Agents page. Do not apply a global fadeUp().

---

## Copy exceptions vs shared data

Do **not** mutate `agent-templates.ts` (workspace lock). Override on this page only:

- Sales training assistant → “Help sales team members…”
- Persona feedback simulator → “Reviews content from a specific persona…”
- Security certified → “SOC 2 Type 2 and ISO 27001-certified. Fully compliant with the GDPR.” (no ISO 42001)
- Testimonial chips → department labels (Marketing, HR / People, Sales, Legal, Operations, Product, QA)

---

## Homepage / Workspace lock

Shared edits are opt-in props with unchanged defaults:

- `ProductSecurity` `layout="agents"`
- `AgentGallery` optional `categoryHeadings` / `gridXl` / `gridXs`
- `ProductFaq` optional `className`
- `ProductCta` optional `primaryVariant` / `primaryClassName`
- `BuildingColumnsIcon` additive
