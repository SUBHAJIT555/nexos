# LLM Observability — page audit

## Reference URL

https://nexos.ai/features/llm-observability/

## Local URL

http://localhost:3000/features/llm-observability

## Screenshot Map

| Screenshot | Section |
| --- | --- |
| Screenshot 01 | Hero + trusted-by logo strip |
| Screenshot 02 | Shared Observer tile: Control accordion + Explore the platform (Organisation Profile) |
| Screenshot 03 | Observe and manage LLM requests (4-slide chart carousel, 3 visible) |
| Screenshot 04 | Business benefits of AI observability (split heading + 4 glow-icon rows) |
| Screenshot 05 | What happens without full AI observability (4 title-only cards) |
| Screenshot 06 | Final CTA |
| Screenshot 07 | FAQ (white card accordions) |

## Exact live section inventory (1440)

HEADER (sticky, dark until FAQ ~5750px)

↓

HERO `#hero` — 760px. Page-level linear `#071013 → purple → #071013`. Left copy + 555px product still (person + Total AI spend / Usage by team). CirclePlus “What is LLM observability?”. CTAs: Get API key (purple) then Talk (white).

↓

TRUSTED LOGOS `#trusted-by` — 176px. Same page gradient (purple band). Caption “Chosen by leading engineering teams”. White trusted-by SVG.

↓

SHARED TILE `#ai-tracker` — max-w 1232, radius 24px, radial purple overlay.

CONTROL `#ai-usage-tracker` — Observer 🔥 pill, H2 “One place to see and control AI usage”, auto-progress two-col accordion (text left / 555px image right). 5 items with bodies.

EXPLORE `#explore-platform` — Observer 🔥 pill, H2 “Explore the platform”, HTML Observer chrome (sidebar + inner screenshots). Organisation inner tabs: Profile / Usage / Audit log / Enrollment tokens (disabled) / Devices 10800 (disabled). Security / Adoption / Knowledge are live nav items. Policy / Reports BETA / Model spend Coming soon disabled.

↓

OBSERVE `#ai-gateway` — 945px. Dark `#071013`. AI GATEWAY pill. 4-card horizontal slider (token usage, completions, cost, logs).

↓

BUSINESS BENEFITS `#business-benefits` — 599px. Dark. Split H2 with purple “AI observability”. Right: one card, 4 glow-icon rows.

↓

WITHOUT OBSERVABILITY `#without-observability` — 650px. Dark. Intro with “LLM challenges” link. 4 title-only cards.

↓

CTA `#bottom-banner` — 593px. Dark-to-white purple gradient. Talk then Get API Key.

↓

FAQ `#faq` — 778px. White card accordions, 5 questions.

↓

FOOTER (light; social/auth excluded locally)

Page scroll height live: ~7484px. Videos: none. Charts: baked into permitted WebP stills, not live canvas.

## Authorized copy

Matches live public-facing copy, including:

- Hero H1, body, info dialog, CTA order
- Control item labels + bodies
- Explore Organisation body
- Observe intro + 4 card titles/bodies
- Benefits heading split + 4 rows
- Blind 4 card titles + LLM challenges link
- CTA body “Uncover what’s driving AI usage and cost.”
- FAQ 5 questions and answers

## Images / product screenshots

Reused from `src/assets/images/observability/` (same underlying live assets):

- `hero.webp` — Observability-hero-mobile (used at all breakpoints on live)
- Control: `ai-tool-in-use.webp`, `uncover-shadow-ai.webp`, `attribute-usage.webp`, `prevent-data-leaks.webp`, `get-insights.webp`
- Observe charts: `usage.webp`, `performance.webp`, `costs.webp`, `logs.webp`
- Explore: `explore-organisation.webp`, `explore-security.webp`, `explore-adoption.webp`, `explore-knowledge.webp`

Downloaded to `src/assets/images/llm-observability/`:

- `observer-organisation-usage.webp`
- `observer-organisation-audit-log.webp`
- `observer-adoption-detail.webp` (live DOM extra; not shown as a dedicated tab)

Logos: reused `trusted-white.svg` / `trusted-white-mobile.svg`.

Videos: none.

## Charts / logs / traces

- Token usage, completions, cost, request logs: permitted WebP product stills in the Observe carousel.
- Observer Organisation Profile / Usage / Audit: permitted Storyblok stills inside HTML chrome.
- No fake chart libraries, no random runtime data, no real telemetry backend.

## Animations / interactions

- Hero: static still (no video).
- Control accordion: 5s auto-progress; pause on hover/click; image crossfade 300ms; left-border accent on active item.
- Explore: sidebar nav + Organisation inner pill tabs (deterministic local state).
- Observe: drag/snap slider + progress bar + prev/next (ObservabilitySlider, isolated from Routing).
- FAQ: Motion accordion.
- Header: dark until FAQ threshold (~5750). Isolated path gate; Routing/Caching/Gateway/Homepage thresholds unchanged.

## Desktop / tablet / mobile

- 1440: two-col hero; shared rounded tile; 3 of 4 Observe cards visible; benefits split; 4 blind cards in a row.
- 1024 / 768: Observe slider; Explorer chrome stacks (horizontal nav on mobile).
- 390: hero stacks; control image above accordion on small (live image is `lg:order-2`); Explorer horizontal sidebar; Observe cards full-bleed width; blind 1–2 cols.

## Original vs local (pre-rebuild)

Local was a light ProductHero template: wrong chrome, no shared Observer tile, Explore as simple tabs, Observe as 2×2 grid, missing Observe intro/4th card copy, missing CTA body, missing blind cards, generic FAQ/CTA components.

## Screenshot-by-screenshot QA

Recorded after implementation in the finish report.
