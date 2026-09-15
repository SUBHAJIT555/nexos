# Browser Extension page audit

Reference: https://nexos.ai/features/browser-extension/  
Local: `/features/browser-extension`  
Audited: 2026-09-15 against the live public page + 7 supplied section screenshots.

Locked pages: `/`, `/ai-workspace-for-multiple-llms`, `/features/ai-agents`, `/ai-agent-builder`, `/features/ai-chat`, `/features/compare-ai-models`, `/features/ai-integrations`, `/features/messaging-apps`.

Chrome Web Store install links are marketing CTAs (external). “Sign in with nexos.ai account” is authorized setup copy on this page, not an auth screen. No social footer, phone, or WhatsApp-as-contact.

---

## Screenshot Map

| Attachment | Section | Notes |
| --- | --- | --- |
| 01 | Hero | H1 48px / 568. Disc bullets. Black Get nexos.ai + outline Install extension with Chrome mark. Still `browser-extension-2` 555. Grid `grid-centered-secondary-center`. Product UI is the still (browser frame + extension panel baked in), not HTML chrome. |
| 02 | What is | Two-column `#EFF4F8` rounded-md card. H2 32px left, body right with accent link “multiple AI models” → Workspace. |
| 03 | Key benefits | `#F8FAFC` band. H2 40px. Two 24px-radius image cards (models + assistants stills) then three icon cards (shield / archive / file, 48px secondary). |
| 04 | How it works | Centered H2 with wrap. Video banner 1168×296 (`videobanner-mikas-xl`) + Play video modal (YouTube `3D1rcPluLBY`). Three stepper cards, 01 accent + 26px rule. Step 1 “Click to install” + download icon. |
| 05 | How teams use | Centered H2. Three visible 368px white cards, 64px accent icon tiles, 3px progress (fill 3/5), circular prev/next. Five slides total. |
| 06 | CTA | Light `banner-light-glow`, rounded-md. Eyebrow “Browser extension”. H2 “Unlock AI where you already work”. Black Buy nexos.ai. |
| 07 | FAQ | Two-col: FAQ 40px left, four rounded bordered cards + chevrons right. Last answer links AI Chat (strip leaked `.strip-child-styles` CSS from live). |

---

## Exact section sequence

1. Hero — nexos.ai browser extension: Make AI work where you work
2. What is the nexos.ai browser extension?
3. Key benefits of using the nexos.ai browser extension
4. How does nexos.ai browser extension work
5. How teams use nexos.ai browser extension
6. Unlock AI where you already work
7. FAQ

No security band. No press strip. No GSAP pin.

---

## Section backgrounds / dimensions (1440 live)

| Section | Background | ~Height |
| --- | --- | --- |
| Hero | White + centered grid SVG | 747px |
| What is | White, inner card `#EFF4F8` | 328px |
| Benefits | `#F8FAFC` | 1377px |
| How | White | 850px |
| Use | Light / white | 830px |
| CTA | White, inner light glow | 456px |
| FAQ | White | 526px |

Page scroll height ~6028px. Container content ~1168px.

---

## Assets

| Role | Source | Local |
| --- | --- | --- |
| Hero still | `browser-extension-2` 1110×1110 | Reused `src/assets/images/extension/browser-extension-2.webp` |
| Hero grid | `grid-centered-secondary-center.svg` | Reused Agents |
| Models still | `extension-models` | Reused `src/assets/images/extension/extension-models.webp` |
| Assistants still | `extension-assistant` | Reused `src/assets/images/extension/extension-assistant.webp` |
| Walkthrough poster | `videobanner-mikas-xl` 1600×449 | Reused; cropped to 296px tall |
| Play icon (modal) | `play-filled.svg` | Reused Compare |
| Chrome mark | Inline SVG from live Install CTA | `ExtensionIcons` |
| CTA glow | `banner-light-glow` | Reused Integrations |
| Walkthrough video | YouTube embed `3D1rcPluLBY` | Modal iframe (live has no self-hosted `<video>`) |

---

## Animations / interactions

| Area | Behavior |
| --- | --- |
| Hero | Static still |
| Intro | Static; Workspace text link |
| Benefits | Static |
| How | Play video opens overlay + YouTube iframe (`autoplay=1`). Close via × or backdrop. |
| Use | Window of 3 cards. Prev/next. Progress fill `(start+3)/5`. Motion 220ms ease-out. Reduced motion: no translate. |
| FAQ | Card accordion (ProductFaq `variant="cards"`) |
| CTA | Static |

No GSAP. No autoplay product demo video in-page.

---

## Current local differences (before PAGE 08)

- Generic ProductHero (purple CTA, check bullets, no Chrome icon, no grid SVG)
- Intro stacked heading/body, not two-col card
- Benefits as mixed 2-col white cards; missing 2+3 layout and FA icons
- Walkthrough is a static poster + figcaption, no overlay or YouTube modal
- Step 02 copy stripped of “Sign in with nexos.ai account”
- Use carousel is a single-card slider, not 3-up + progress
- Dark ProductCta “Make AI work where you work” instead of light glow “Unlock AI…”
- FAQ already card-shaped but last answer missing AI Chat link

---

## Screenshot QA checklist

| Screenshot | Status |
| --- | --- |
| 01 Hero | TBD |
| 02 What is | TBD |
| 03 Benefits | TBD |
| 04 How | TBD |
| 05 Use | TBD |
| 06 CTA | TBD |
| 07 FAQ | TBD |
