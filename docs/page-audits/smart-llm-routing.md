# Smart LLM Routing — page audit

## Reference URL

https://nexos.ai/features/smart-llm-routing/

## Local URL

http://localhost:3000/features/smart-llm-routing

## Screenshot Map

| Screenshot | Section |
| --- | --- |
| Screenshot 01 | Hero + trusted-by logo strip |
| Screenshot 02 | Benefits of Smart LLM routing (4-slide carousel, 3 visible) |
| Screenshot 03 | Smart routing is more than choosing the cheapest model (84% + two stacked cards) |
| Screenshot 04 | How does nexos.ai Smart LLM routing work (code still + 01–04 steps + CTAs) |
| Screenshot 05 | Smart LLM routing use cases (2×2 cards) |
| Screenshot 06 | Security and compliance, built in (4 cards + certification pills) |
| Screenshot 07 | Comparison table + final CTA |
| Screenshot 08 | FAQ (white card accordions) |

## Exact live section inventory (1440)

HEADER (sticky, dark until FAQ)

↓

HERO `#hero` — 760px. Gradient `#071013 → #35137c`. Left copy + 555×555 animated SVG (GLM 5.2 / Claude Opus 5 / Kimi K3 score cards). CirclePlus “What is LLM routing?” dialog.

↓

TRUSTED LOGOS `#trusted-logos-chosen-by-leading-engineering-teams` — 136px. Purple band `#35137c → #4915ab`. White logo strip.

↓

BENEFITS `#benefits-of-smart-llm-routing` — 921px. Purple-to-dark gradient. 4-card horizontal slider (3 visible).

↓

MORE THAN CHEAPEST `#dark-section-smart-routing-is-more-than-choosing-the-cheapest-model` — 687px. Dark `#071013`. 84% purple card + two stacked dark cards.

↓

HOW IT WORKS `#how-does-nexosai-smart-llm-routing-work` — 1059px. `#071013 → #22165d`. Code screenshot left, numbered steps right, CTAs.

↓

USE CASES `#smart-llm-routing-use-cases` — 909px. `#22165d → #071013`. 2×2 purple-border cards.

↓

SECURITY `#security-and-compliance` — 536px. Dark. 4 cards + marquee pills.

↓

COMPARE `#dark-section-smart-llm-routing-vs-one-default-model` — 635px. Dark table.

↓

CTA `#bottom-banner-cut-your-ai-costs-with-smart-llm-routing` — 607px. Dark-to-white purple gradient.

↓

FAQ `#faq` — 808px. White card accordions.

↓

FOOTER (light; social/auth excluded locally)

Page scroll height live: ~7972px. Videos: none.

## Authorized copy

Matches live public-facing copy, including:

- Hero H1, body, 3 bullets, info dialog
- How body: completions, responses, and messages endpoints; AI Gateway link
- Use-case coding “caching” link; agentic “most expensive model”
- Security “EU-hosted infrastructure” link
- Comparison “Cost tide to selected model”
- CTA body: “Match every request to the right model…”
- FAQ 6 questions / answers as live

## Images / product stills / routing visuals

| Asset | Type | Role |
| --- | --- | --- |
| `smart-llm-routing-hero.svg` | Animated SVG 555×555 | Hero routing score cards |
| `cut-costs-not-quality.webp` | WebP 662×530 | Benefits slide 1 |
| `improve-reliability.webp` | WebP 662×530 | Benefits slide 2 |
| `no-routing-logic.webp` | WebP 662×530 | Benefits slide 3 |
| `continuous-learning.webp` | WebP 662×530 | Benefits slide 4 |
| `how-routing-works.webp` | WebP code window | How-it-works left visual |
| Homepage `trusted-white.svg` / mobile | SVG | Logo strip |

Hero is HTML+SVG (not video). How-it-works code panel is a still image, not live syntax highlighting. Benefits diagrams are product stills. 84% block is HTML/CSS. Comparison is HTML table. No dashboard UI, no videos.

## Icons / SVGs

Live Font Awesome paths copied into `src/components/routing/RoutingIcons.tsx` (hero checks, 84% split/trend/check, use-case code/headset/share/landmark, security globe/fingerprint/briefcase/sparkle, pills globe/uptime/shield/seal/cloud). CirclePlus / Key / Chevron use the project icon system.

## Animations / interactions

- Hero SVG: internal CSS/SMIL in the downloaded animated SVG (score highlight, connectors)
- Benefits: drag/snap carousel + progress bar + prev/next (disabled gray / active purple)
- Security pills: CSS marquee (`home-marquee` 40s)
- FAQ: Motion accordion
- Info dialog: modal
- No GSAP / no scroll-pin on this page
- No model-selection interactive state beyond the hero SVG’s built-in animation
- Fallback/reliability shown as stills (benefits slide 2–3, how step 04), not a live sequence

## Desktop / tablet / mobile

- 1440: two-column hero, 3-up benefits, 84% + stacked cards, how 2-col, 2×2 use cases, 4 security cards
- 1024 / 768: columns stack; slider still horizontal; table min-width with overflow-x
- 390: stacked hero visual below copy; slider one card; 84% then stacked cards; how image then steps; use cases 1-col; security 1-col; FAQ stacked heading + cards. Live does **not** rotate the hero SVG; it scales.

## Original vs previous local

Previous local used the light `ProductHero` template, 2×2 white benefit cards, missing how steps, missing pills, wrong how/use-case copy, and light FAQ/CTA. Replaced with isolated `src/components/routing/*` dark chrome page.

## Screenshot-by-screenshot QA

| Screenshot | Local section | Result |
| --- | --- | --- |
| 01 Hero + logos | Hero SVG + trusted-by | PASS |
| 02 Benefits carousel | 4-slide purple band | PASS |
| 03 84% + stacked cards | More-than-cheapest | PASS |
| 04 How code + steps | How it works | PASS |
| 05 Use cases 2×2 | Use cases | PASS |
| 06 Security + pills | Security marquee | PASS |
| 07 Compare + CTA | Table + purple CTA | PASS |
| 08 FAQ | White card accordions | PASS |

Remaining visible differences (not claimed pixel-perfect):

- Local section heights are slightly taller/shorter than live (hero 684 vs 760; CTA 495 vs 607) from padding and card wrap.
- Benefits/how/use-case stills crop slightly differently inside cards vs live `object-top` at some widths.
- Certification pill marquee start offset is time-dependent (same pills, different first visible chip).
- Header/footer use local Brand chrome, not production nexos.ai wordmark.

## Definition of done

Audited live page, mapped all 8 screenshots, isolated `src/components/routing/*`, dark-chrome path-gated for `/features/smart-llm-routing` only. Typecheck, lint (no errors), and production build passed. Locked pages not redesigned. STOP — no Observability / EU Data Residency work.
