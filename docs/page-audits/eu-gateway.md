# EU Gateway — page audit

## Reference URL

https://nexos.ai/eu-gateway/

## Local URL

http://localhost:3000/eu-gateway

## Screenshot Map

| Screenshot | Section | Notes |
| --- | --- | --- |
| Screenshot 01 | Hero (`#you-shouldnt-have-to-choose` copy + diagram) | Dark hero, EU Data Residency badge, H1, body with `lg` line break, Talk (purple) + Get API access (white + key). Animated SVG diagram (GPT / Claude / Gemini / Mistral cards + GDPR / Zero Data Retention / EU-Hosted / ISO / Type 2 pills baked into the SVG). |
| Screenshot 02 | Quote band (same live section as hero) | Word-by-word scroll reveal on the purple-to-white gradient. |
| Screenshot 03 | Needs `#everything-compliance-needs` | Centered H2, 4 light cards with distinctive icons. |
| Screenshot 04 | Migrate `#migrate-to-eu` | 3 numbered steps left, OpenAI SDK code SVG right. |
| Screenshot 05 | Why `#why-organizations` | Mosaic: large vendor-lock-in image card left; governance + keep-in-Europe + control cards right. |
| Screenshot 06 | Models `#every-frontier-model` | 2×2 provider cards on dotted field. |
| Screenshot 07 | Compare `#nexosai-vs-going-direct` | 3-col CSS grid; accent-bordered nexos.ai column. |
| Screenshot 08 | CTA `#bottom-banner-ready-to-elevate-your-content` | Grid-glow dark CTA; Talk black, Get API Key white + key. |
| Screenshot 09 | FAQ `#faq` | White card accordions, 6 questions. |

Screenshots 01–02 are one continuous live section (`#you-shouldnt-have-to-choose`, ~1348px).

## Exact live section inventory (1440)

HEADER (sticky, dark until white needs ~1280–1348px)

↓

HERO + QUOTE `#you-shouldnt-have-to-choose` — ~1348px. Page-level linear `#071013 → #5F16DD → #8862D3 → #E3D8FF → #FFFFFF`. Centered badge SVG, H1, body, two CTAs, animated hero SVG (1168×360). Quote is `data-reveal-word` spans (opacity-10 → 100).

↓

NEEDS `#everything-compliance-needs` — White. Centered H2. 4 cards (`bg-subtle`, icon tile with shadow).

↓

MIGRATE `#migrate-to-eu` — `#FFFFFF → #EFF4F8`. Centered H2. 01/02/03 steps + `eu-data-api-url` SVG.

↓

WHY `#why-organizations` — White (`bg-primary`). Centered H2. `md:grid-cols-2` mosaic.

↓

MODELS `#every-frontier-model` — `#EFF4F8 → #FFFFFF` with dotted field. 2×2 Anthropic / OpenAI / Google gemini AI / Mistral cards.

↓

COMPARE `#nexosai-vs-going-direct` — White. CSS grid 3 columns × 10 rows. Mobile: pilled tabs (nexos.ai / Direct provider).

↓

CTA `#bottom-banner-ready-to-elevate-your-content` — Dark grid glow. Talk (rgb(7,16,19)) then Get API Key (white + key).

↓

FAQ `#faq` — White card accordions, 6 questions. Retain answer links Terms of Use; gateway answer links AI gateway.

↓

FOOTER (light; social/auth excluded locally)

Page scroll height live: ~7536px. Videos: none. No Europe map. Certification pills are inside the hero SVG, not a separate selector.

## Authorized copy

Matches live public-facing copy, including:

- Hero H1, body (`<br class="hidden lg:block">` before “zero data retention”), CTAs (hero secondary is **Get API access**; CTA secondary is **Get API Key**)
- Quote word list (including shouldn’t / world’s)
- Needs 4 titles + bodies
- Migrate 01/02/03 titles + bodies
- Why 4 cards
- Models 4 provider names + Vertex/Azure/Mistral EU lines
- Compare 9 rows + footnote
- CTA “Compliance-ready, without compromise”
- FAQ 6 questions and answers (Terms of Use, AI gateway links)

## Backgrounds

| Section | Treatment |
| --- | --- |
| Hero + quote | CSS linear-gradient 180deg as live |
| Needs | White |
| Migrate | `#FFFFFF → #EFF4F8` |
| Why | White |
| Models | `#EFF4F8 → #FFFFFF` + CSS dotted field (live SVG was 10MB; visual match via CSS) |
| Compare | White |
| CTA | `grid-glow-bottom-dark` / `xs` (same ProductCta illustration family as live `grid-glow-bottom-dark-2`) |
| FAQ | White |

## Images / product screenshots

| Asset | Role |
| --- | --- |
| `eu-secure-ai-governance.webp` | Why mosaic left visual (vendor lock-in / model fan) |

No other product UI screenshots. Hero diagram is SVG, not a dashboard still.

## EU Gateway / infrastructure / geographic visuals

- Hero diagram: animated SVG (`eu-data-residency-hero-xl.svg` / dark `xs`). Includes Gateway node, four provider cards, connector animation, compliance pills.
- No Europe map, country flags, or invented data-center graphics on the current live page.

## Provider / model artwork

Hero: baked into the animated SVG (do not rebuild as HTML cards).

Models section:

- Anthropic “A” path, `currentColor`
- OpenAI blossom path, `currentColor`
- Gemini colorful SVG (`src/assets/icons/integrations/gemini.svg`)
- Mistral colorful tiles (`src/assets/icons/integrations/mistral.svg`)

## Security / compliance / certification

- Hero pills (GDPR Compliant, Zero Data Retention, EU-Hosted, ISO 21007, Type 2 Certified) are part of the hero SVG.
- Needs / why icons: live path data (globe+shield, binary 01/10, SDK window, sparkles, lock, data scanner).
- FAQ states GDPR, SOC 2 Type II, ISO 27001. No interactive certification selector.

## Videos

None.

## SVGs

| Local path | Role |
| --- | --- |
| `src/assets/images/eu-gateway/badge-data-residency-dark.svg` | Hero badge |
| `src/assets/images/eu-gateway/eu-data-residency-hero-xl.svg` | Hero md+ (CSS keyframe connectors / card borders, 5.6s loop) |
| `src/assets/images/eu-gateway/eu-data-residency-hero-xs.svg` | Hero mobile |
| `src/assets/images/eu-gateway/eu-data-api-url.svg` | Migrate code window |
| `src/assets/illustrations/grid-glow-bottom-dark.svg` | CTA (reused) |
| `src/assets/illustrations/grid-glow-bottom-dark-xs.svg` | CTA mobile (reused) |

## Icons

Isolated in `src/components/eu-gateway/EuIcons.tsx` from live path data. Compare uses success check / amber dash / red X. CTA/hero reuse `KeyIcon`. FAQ chevron is Lucide (equivalent to live).

## Animations

| Location | Mechanism |
| --- | --- |
| Hero diagram | CSS `@keyframes` inside permitted SVG (path trim, card border pulse). Do not rebuild in HTML. |
| Quote | GSAP ScrollTrigger toggling `data-active` on words (opacity-10 → 100, 500ms). |
| FAQ | Motion height accordion. |
| Compare mobile | Local tab state. |
| No generic fadeUp on sections. |

## Interactions

- FAQ accordion
- Compare mobile pilled tabs (nexos.ai / Direct provider)
- CTAs: Talk → `/contact-sales`; Get API access / Get API Key → `/pricing`

## Desktop / tablet / mobile behavior

- 1440: hero diagram 1168 wide; quote ~900 max; needs 4-col; migrate 2-col; why mosaic; models 2×2; compare 3-col grid.
- 1024 / 768: needs 2-col; migrate stacks; why mosaic stacks; compare still desktop grid at md+.
- 390: hero uses `eu-data-residency-hero-xs.svg` (does not crop the XL asset); CTAs full-width; compare tabs; FAQ stacks heading above cards.

## Original vs local (pre-rebuild)

Generic light ProductHero-style page: missing quote reveal, missing migrate steps, why as 2×2 text cards, models as a single image, HTML table compare, wrong hero chrome. Replaced with isolated `src/components/eu-gateway/*`.

## Screenshot-by-screenshot QA

Recorded after implementation (see session report). Locked pages are not modified except path-gated Header chrome for `/eu-gateway` only.
