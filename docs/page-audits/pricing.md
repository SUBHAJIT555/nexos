# Pricing page audit

Reference: https://nexos.ai/pricing/  
Local: `/pricing/`  
Audited: 2026-09-16 against the live public page + 10 supplied section screenshots.

This is a **dual-product pricing page** (AI Gateway default, AI Workspace via `#ai-workspace`). It is not a monthly/annual billing toggle, not `/models/`, not checkout, and not a generic SaaS template. Isolate in `src/components/pricing/*` and `src/data/pricing.ts`. Light chrome (`getHeaderTone` does not include `/pricing`). Do not change Homepage, Models, Reviews, Partnerships, Checkout, Header, or Footer.

CTAs: Get started / Get nexos.ai → `/checkout`. Talk to Solutions Engineer / Talk to sales / Custom pricing → `/contact-sales`. Model limitations “Read more.” → docs `models/limitations`. No Stripe/Paddle/auth.

No monthly/annual toggle on the current live page. Workspace card is **1-month $39** only. FAQ text may mention 12-month/annual plans; those cards are **not** displayed.

---

## Screenshot Map

| Attachment | Section | Product | Notes |
| --- | --- | --- | --- |
| 01 | Hero + product tabs + plan cards | Gateway | H2 “Stop overspending on AI / and get real value”. Pill tabs AI Gateway / AI Workspace. Pay-as-you-go highlighted lavender gradient + Enterprise white card. No dollar price on Gateway. |
| 02 | Compare plans matrix | Gateway | 3-col CSS grid (feature / PAYG / Enterprise). Green checks; red X on SSO/SAML, RBAC, Audit logs, Enterprise SLAs. BYOK + Coming soon. Payment logos vs Invoicing. Footer CTAs. |
| 03 | FAQ | Gateway | H2 FAQ left. Tabs Plans & pricing / Platform & security. Card accordions. |
| 04 | Hero + product tabs + plan cards | Workspace | H1 “One subscription / instead of multiple AI tools” + model logo strip. 1-month $39 + Custom Enterprise. |
| 05 | Integrations + credits banner | Workspace | Logo chips. “1000 credits power your daily AI work” split banner + 4 bullets. |
| 06 | Turn repetitive work into AI work | Workspace | 6 cards: Create slides, Generate files, Get your daily brief, Research competitors, Draft content, Summarize meetings. |
| 07 | Compare nexos.ai with other AI tools | Workspace | 4-col matrix: nexos.ai (purple highlight) / Chat GPT / Perplexity / Lindy. Outline checks, red X, Limited, Partial, Best for. |
| 08 | Your data is always secure | Workspace | 3 cards + Compliance bar (ISO, SOC 2 Type 1, GDPR). Copy differs from shared workspace security (Type 1, not Type 2). |
| 09 | Trusted by leading teams | Workspace | Logo strip + 3-up quote cards (Vytautas / Ilma / Juras first) + carousel. |
| 10 | FAQ | Workspace | Tabs Plans & features / Billing & management. |

---

## Exact section sequence

### AI Gateway (default, `/pricing`)

1. Header (shared, light)
2. Hero H2 + product tabs
3. Plan cards (Pay-as-you-go, Enterprise)
4. Compare plans
5. FAQ (Plans & pricing / Platform & security)
6. Footer (shared)

### AI Workspace (`/pricing#ai-workspace`)

1. Header (shared, light)
2. Hero H1 + model logos + product tabs
3. Plan cards (1-month $39, Custom Enterprise)
4. Integrations
5. 1000 credits banner
6. Turn repetitive work into AI work
7. Compare nexos.ai with other AI tools
8. Your data is always secure
9. Trusted by leading teams
10. FAQ (Plans & features / Billing & management)
11. Bottom CTA “Stop doing repetitive work manually”
12. Footer (shared)

---

## Hero

- Background white. Tabs `max-w-[608px]`, track `#F1F4F7`, selected white + accent + light shadow, inactive `#65717B`, 48px pills.
- Gateway H2 `heading-4xl` ~64px, two lines with `<br class="hidden lg:block">`.
- Workspace H1 same type; headings occupy the same grid cell and crossfade (`opacity` 300ms).
- Workspace model strip 176×44 (`pricing-model-icons-2` desktop, `pricing-model-icons` mobile).
- Hash: `#ai-workspace` selects Workspace. Gateway uses `/pricing` with no hash.

## Billing controls

**None.** No monthly/annual toggle. No discount badges. No “Save X%”.

## Plans

| Order | Product | Name | Price | CTA |
| --- | --- | --- | --- | --- |
| 1 | Gateway | Pay-as-you-go | none (5% platform fee in features) | Get started → `/checkout` |
| 2 | Gateway | Enterprise | none | Talk to Solutions Engineer → `/contact-sales` |
| 1 | Workspace | 1-month plan | **$39** monthly; “Renews at $39” | Get nexos.ai → `/checkout` |
| 2 | Workspace | Custom plan | **Enterprise** (word, not a dollar amount) | Talk to sales → `/contact-sales` |

Pay-as-you-go / 1-month use dual-gradient highlight (`#fff` → `#ebe0fc` fill + `#c0b9ff`/`#dabcff` border). Enterprise / Custom are white `#dbe4eb` cards. 2 columns from 480px.

Workspace 1-month includes 14-day money-back guarantee and “Model limitations may apply. Read more.”

## Gateway comparison

25 rows (header + 23 features + footer CTAs). Cells match live/screenshot 02. Mobile: PAYG / Enterprise pill tabs + stacked rows (`md:hidden`).

## Workspace competitor matrix

Columns: nexos.ai, Chat GPT, Perplexity, Lindy. Purple outline checks for nexos.ai; gray outline / red X / Limited / Partial for others. Horizontal scroll below ~860px (no hide).

## FAQ

Gateway 5+5 questions; Workspace 5+5 questions. Exact live answers. Workspace “How can I renew my subscription?” answer is present when expanded on live.

## Final CTA

Workspace only: ProductCta pattern, “Stop doing repetitive work manually”, Get nexos.ai, 14-day money-back guarantee.

## Images / SVGs / icons

Downloaded to `src/assets/images/pricing/`. Reused integrations carousel, customer-stories logos, product cert badges (first 3), homepage portraits, banner-light-glow, grid-glow CTA assets. Feature glyphs are live Font Awesome paths in `PricingIcons.tsx`. No nordcdn hotlinking.

## Animations / interactions

- Product tab crossfade (headings + content swap)
- FAQ accordion (existing ProductFaq / Motion)
- Testimonial carousel scroll + progress
- Gateway mobile compare tabs
- CTA hover (shared Button)
- No GSAP. No price slot-machine. No universal fade-up.

## Responsive

| Viewport | Behavior |
| --- | --- |
| 1440 | 2 plan cards, full Gateway table, 4-col tool compare, 3 security + compliance, 3 testimonial cards |
| 1024 | Same columns; tool compare may scroll |
| 768 | Plans 2-col until stacked near 480; Gateway table → mobile tabs |
| 430 / 390 / 375 | Stacked cards, full-width CTAs, compare scroll/tabs, FAQ stacked |

## Original vs local

- Brand wordmark is local identity, not Nexos logo.
- `/checkout` and `/contact-sales` are project-safe public destinations (live uses workspace.nexos.ai checkout and HubSpot hashes).
- AICPA badge artwork is the existing product SVG (screenshot caption is Type 1; live copy says Type 1; other pages say Type 2 — pricing copy is isolated).
- Payment marks are simplified Visa/Mastercard/Google Pay glyphs matching the billing cell, not remote brand kits.

## Screenshot QA

| Shot | Result |
| --- | --- |
| 01 Gateway hero/cards | PASS (copy, order, highlight, no invented $) |
| 02 Compare plans | PASS (rows, checks/X, BYOK badge, CTAs) |
| 03 Gateway FAQ | PASS |
| 04 Workspace hero/cards | PASS ($39, Renews at $39, Custom Enterprise) |
| 05 Integrations + credits | PASS |
| 06 Work cards | PASS |
| 07 Tool compare | PASS |
| 08 Security | PASS (isolated Type 1 copy) |
| 09 Testimonials | PASS |
| 10 Workspace FAQ | PASS |

## Pricing-data QA

- [x] plan names / order / descriptions / $39 / 5% fee / $5 top-up
- [x] no invented plan, price, discount, feature, or usage limit
- [x] no monthly/annual toggle invented
- [x] FAQ exact
- [x] comparison cells exact

## Interaction QA

- [x] product tabs + hash
- [x] FAQ accordion
- [x] Gateway mobile compare tabs
- [x] testimonial carousel
- [x] plan CTAs navigate (no payment logic)

Locked pages were not modified.
