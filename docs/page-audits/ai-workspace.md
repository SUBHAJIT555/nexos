# AI Workspace page audit

Reference: https://nexos.ai/ai-workspace-for-multiple-llms/  
Local: `/ai-workspace-for-multiple-llms`  
Audited: 2026-09-15 against the live public page at 1440px.

Homepage `/` is locked. This page is not based on the homepage.

## Route map

| | URL |
| --- | --- |
| Original | https://nexos.ai/ai-workspace-for-multiple-llms/ |
| Local | `/ai-workspace-for-multiple-llms` |

Videos: none on the live page (`<video>` count = 0).

---

## Exact section sequence (after Header, before Footer)

1. **Hero** — H1, body, three check bullets, Get nexos.ai, 1110×1110 product still, Trusted by logo strip
2. **Keep your team’s AI work in one place** — 32px heading, 16px body, 976×732 still
3. **One Chat for every task** — 48px heading, 5-item accordion, sticky 16px-radius still that swaps
4. **Make AI Agents work your way** — 48px heading, two screenshot cards
5. **AI agents for any task you can describe** — search, category tabs, template cards, purple pill CTA
6. **How the nexos.ai Workspace works for your team** — 40px heading (not an H2 on live; heading-xl span), 8-item carousel
7. **Protecting your data / Your data is always secure** — hanging cert SVGs, four cards
8. **Bring your knowledge with you** — 48px heading, integrations logo strip
9. **Ready to replace scattered AI tools with one workspace?** — dark CTA + grid glow
10. **FAQs** — 48px heading, six questions

Excluded: Sign in, social, phone/WhatsApp, Payhawk mega tile, Nexos wordmark.

---

## Live type tokens (1440)

| Element | Live |
| --- | --- |
| H1 | 48px / 57.6px, Space Grotesk 600, width ~568 |
| Share H2 | **32px / 40px** |
| One Chat H2 | 48px / 57.6px, width 768 |
| Agents H2 | 48px / 57.6px |
| Gallery H2 | 48px / 57.6px |
| Pill CTA H2 | 22px / 28.6px **white** |
| How heading | 40px / 48px |
| How body | 16px / 24px, width 1168 |
| How card title | 22px |
| How card body | 14px / 21px |
| Security H2 | 48px |
| Integrations H2 | 48px |
| Final CTA H2 | 48px white |
| FAQ H2 | 48px, ~413px column |

---

## Asset inventory

See `docs/assets.md` Workspace table and `docs/page-audits/workspace.md`.

Hero still: `src/assets/images/workspace/hero.webp` (1110×1110)  
Accordion stills: five WebPs  
Agent cards: create-agent + agent-templates  
No videos.  
CTA glow: `grid-glow-bottom-dark.svg`  
Gallery grid: `grid-homepage-xl.svg`

---

## Animation audit

| Section | Trigger | Behavior | Implementation |
| --- | --- | --- | --- |
| Hero | None distinctive | Static still | — |
| Chat accordion | Click | Height/opacity panel; image crossfade; sticky visual | Motion |
| Accordion still | Open item | Instant swap with fade | Motion |
| Gallery tabs | Click | Filter | React |
| Gallery cards | Hover | Border/shadow | CSS |
| How-it-works | Prev/next | Horizontal scroll | CSS |
| FAQ | Click | Height/opacity | Motion |
| Pill CTA | None | Static gradient | CSS background |
| Final CTA | None | Static glow SVG | Asset |

No GSAP pin/scrub on live Workspace.

---

## Remaining differences

- Non-Sales gallery cards still use a letter fallback when live 72×72 stacks were not captured
- Header/footer are our chrome (Brand mark, no Sign in, no social)
- 8–20px spacing and container gutters vs live CSS tokens
- Live How heading is a `span.heading-xl`, we render an `h2` with the same type size for accessibility
- Shared inner-page components (FAQ/Integrations heading 48px, 16px checks) also apply on other product routes that reuse them; homepage does not import them
