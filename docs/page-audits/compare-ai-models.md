# Compare AI Models page audit

Reference: https://nexos.ai/features/compare-ai-models/  
Local: `/features/compare-ai-models`  
Audited: 2026-09-15 against the live public page + 7 supplied section screenshots.

Locked pages: `/`, `/ai-workspace-for-multiple-llms`, `/features/ai-agents`, `/ai-agent-builder`, `/features/ai-chat`.

---

## SCREENSHOT MAP

| Attachment | Section | Notes |
| --- | --- | --- |
| 01 | Hero + trusted-by | H1 48px/568. Black “Get nexos.ai”. Still `ai-compare-models` 555×555. Grid `grid-centered-secondary-center`. Caption “Trusted by enterprises:” + Oxylabs, Payhawk, Nord Security, Hostinger wordmarks (not the combined carousel SVG). |
| 02 | Tour banner + How to use | Gradient `paid-banner-bg` tile + “Watch platform tour” white pill. Then centered H2 40px and a 3-step timeline (purple numbers, accent dots, `bg-blue-300` connectors). Not cards. |
| 03 | Experiment intro + Marketing | Centered H2 + “AI Workspace” accent link. Marketing row: copy LEFT / still RIGHT (`data-analytics-no-bg`). Black pill eyebrow. Sparkle list icons. |
| 04 | Developers | Still LEFT (`engineering-no-bg`) / copy RIGHT. Light gray-blue section. |
| 05 | Legal | Copy LEFT / still RIGHT (`legal-no-bg`). Same light section. |
| 06 | CTA | Rounded `rounded-lg` dark card. `animated-gradient-single.svg`. Two-line heading. White “Buy nexos.ai”. Not the full-bleed homepage CTA. |
| 07 | FAQ | Two-column, 4 card accordions. |

---

## Exact section sequence

1. Hero — Compare AI Models and find the perfect LLM for your team
2. Trusted by enterprises (4 logos)
3. How enterprise teams use Compare Models (tour banner)
4. How to use Compare Models (3 steps)
5. Experiment with AI for any team and department + Marketing row
6. Developers row
7. Legal row
8. CTA — Experiment with AI models securely
9. FAQ

No security grid. No HTML model-vs-model playground. Product UI is still images. Videos: **none**.

---

## Section backgrounds / dimensions (1440 live)

| Section | Background | ~Height |
| --- | --- | --- |
| Hero | White + centered grid | 747px |
| Trusted-by | White | 128px |
| Tour | White | 240px |
| How to use | White | 485px |
| Experiment + Marketing | White | 811px |
| Developers | Light (`#F8FAFC` / similar) | 603px |
| Legal | Light | 603px |
| CTA | White around a dark rounded card | 424px |
| FAQ | White | 622px |

Page scroll height ~5575px.

---

## Assets

| Role | Source | Local plan |
| --- | --- | --- |
| Hero still | `ai-compare-models` | Download |
| Hero grid | `grid-centered-secondary-center.svg` | Reuse Agents |
| Trust logos | Oxylabs, Payhawk, NordSecurity, Hostinger SVGs | Nord reused; others download |
| Tour banner | `paid-banner-bg-xl` (+ xs/md) | Download |
| Play icon | `play-filled.svg` | Download |
| Marketing still | `data-analytics-no-bg-xl-xs` | Download |
| Developers still | `engineering-no-bg-xl-xs` | Download |
| Legal still | `legal-no-bg-xl-xs` | Download |
| CTA gradient | `animated-gradient-single.svg` | Download |
| List icon | FA sparkle/plus path | Inline (same as Workspace how-to `agents` glyph) |

Watch platform tour on live opens a dialog (YouTube thumbnail present). Local: InfoDialog with authorized walkthrough copy. No YouTube embed.

---

## Animations / interactions

| Area | Behavior |
| --- | --- |
| Hero | Static still |
| Trust | Static logos |
| Tour | Clickable banner → dialog |
| How to use | Static timeline |
| Team rows | Static stills; accent links |
| CTA | SVG gradient artwork (decorative) |
| FAQ | Card accordion |

No GSAP pin. No model-selector playground.

---

## Current local differences (before PAGE 05)

- Fake `CompareHeroVisual` CSS mock
- Purple hero CTA (should be black)
- Combined TrustMarquee instead of 4 wordmarks
- Invented interactive model picker + textarea
- Team use cases as 3 text cards, no stills
- Full-bleed ProductCta instead of rounded gradient card
- FAQ divider variant instead of cards

---

## Screenshot QA checklist

| Screenshot | Status |
| --- | --- |
| 01 Hero | TBD |
| 02 Tour + how-to | TBD |
| 03 Marketing | TBD |
| 04 Developers | TBD |
| 05 Legal | TBD |
| 06 CTA | TBD |
| 07 FAQ | TBD |
