# Design audit — live reference (nexos.ai)

Audited 2026-09-15 from the live public site at multiple widths. Values below are measured from computed styles, not screenshots.

This project is a **replaceable-brand** marketing site. Do not ship the Nexos wordmark, favicon, or product screenshots as our identity.

## Dual chrome

The reference is not a single dark SaaS theme.

| Surface | Homepage `/` | Inner pages (e.g. `/pricing`) |
| --- | --- | --- |
| Page background | `#071013` with a purple radial glow | `#ffffff` |
| Header | Transparent, white logo, white nav | Transparent/white, black logo, `#262b30` nav |
| Header outline CTA | Transparent, white text, border `#a3b4c2` | White fill, `#262b30` text, border `#dbe4eb` |
| Header solid CTA | White fill, `#262b30` text, border `#dbe4eb` | `#071013` fill, white text |
| Footer | Always white, `#262b30` text | Same |

Header bar: **69px** tall (`16px` vertical padding + **37px** CTA height). Horizontal padding `16px` (`p-4`), `24px` from `md` (`md:px-6`). Inner row max-width **1168px**. Logo displayed **136×24**. Nav `lg` breakpoint on the reference is **992px**.

Header is visually overlayed (transparent). No heavy border. No backdrop-filter on the resting homepage bar.

## Typography

Live families (variable fonts, OFL — **do not copy** the hashed `nexos.ai/_astro/fonts/*.woff2` files):

| Role | Family | Axis |
| --- | --- | --- |
| Body / UI / nav / buttons / footer | **Inter** | 100–900 |
| Display / headings | **Space Grotesk** | 300–700 |

Closest legal implementation: `next/font/google` Inter + Space Grotesk. Not a proprietary Nexos font.

| Style | Size | Weight | Line-height | Tracking | Notes |
| --- | --- | --- | --- | --- | --- |
| Display / H1 (desktop) | 64px (4rem) | 600 | 76.8px (1.2) | ≈ -0.75px | Space Grotesk, white on dark hero |
| H1 (mobile ~390) | ~36–40px | 600 | ~1.15 | tight | Same family |
| H2 | 28px light sections / 40px on dark cards | 600 | ~1.2 | slight negative | Space Grotesk |
| H3 | ~24px | 600 | ~1.3 | — | Space Grotesk |
| H4 / footer column | 16px | 600 | 24px | 0 | Inter `body-md-bold` |
| Body large | 16–18px | 400 | ~1.5–1.75 | 0 | Inter |
| Body | 16px | 400 | 24px | 0 | Inter, `#262b30` on light |
| Body small | 14px | 400–500 | 21px | 0 | Nav links 400; mega list 500 |
| Body xs / labels | 12px | 400 | 18px | 0 | Group labels; descriptions |
| Buttons (header) | 12px | 600 | — | 0 | Inter |
| Buttons (hero) | 16px | 600 | — | 0 | Inter, height 48px |
| Navigation | 14px | 400 | 21px | 0 | Inter |
| Footer links | 14–16px | 400 | 21–24px | 0 | Inter, `#262b30` |

## Color

Recurring CSS variables from the live `:root`:

| Token | Hex | Use |
| --- | --- | --- |
| neutral-0 | `#ffffff` | Light surfaces, footer, mega panel |
| neutral-100 | `#eff4f8` | Hover wash (`/70` on mega items) |
| neutral-200 | `#dbe4eb` | Default border, outline CTA border (light) |
| neutral-400 | `#a3b4c2` | Dark-header outline CTA border |
| tertiary text | `#65717b` | Mega descriptions (`text-tertiary`) |
| muted | `#8193a2` | Secondary copy |
| primary text | `#262b30` | Light-theme foreground |
| neutral-800 | `#363d44` | Link hover (`hover:text-neutral-800`) |
| dark surface | `#131921` | Dark cards |
| dark card border | `#1C232E` | Dark elevated borders |
| page dark | `#071013` | Homepage canvas, dark primary button |
| navy-950 | `#121b24` | Deep navy |
| accent / blue-600 | `#6b3eff` | Group labels, purple CTAs, links |
| blue-500 | `#7c70fa` | Periwinkle hero accent (“AI usage”) |
| blue-400 | `#9690f8` | Soft purple |
| blue-700 | `#5b12d9` | Pressed/deeper purple |
| gradient start | `#693bff` | Brand gradient |
| gradient end | `#8c50c8` | Brand gradient |

Homepage backdrop: dark navy `#071013` (~22%) blending through purple mid-stops back to `#071013`. Prefer CSS radial/linear gradients over bitmaps.

## Layout

| Measure | Value |
| --- | --- |
| Container xl / 2xl | **1168px** |
| Container lg | 960px |
| Container md | 736px |
| Container sm | 608px |
| Header inner | 1168px, `justify-between`, `gap-4` |
| Horizontal gutter | 16px default, 24px from `md` |
| Footer grid | 5 columns × 208px, `gap-32px`, `md+` |
| Footer column stack gap | 16px |
| Section padding | Large homepage blocks ≈ 80–128px; do not lock homepage sections in Phase 2 |
| Card padding | Often 24px (`p-6`) |
| Heading → body gap | 8–16px |

## Radius / border

| Element | Radius | Border |
| --- | --- | --- |
| Cards / mega panel | **16px** (`rounded-md`) | Mega: no 1px stroke; ring via shadow |
| Mega item hover | 8px featured, **6px** list rows | none |
| Buttons | **9999px** pill | 1px as above |
| Inputs / small | 4–8px | `#dbe4eb` |
| Mega shadow | `0 0 0 1px rgba(56,60,67,0.07), 0 3px 6px rgba(56,60,67,0.15)` | |

## Navigation IA (public)

Header: Products (mega), Resources (mega), Models, Docs (external), Pricing, Careers.

Products is a **toggle**, not a destination URL. Same for Resources.

**Products → For anyone:** Workspace, AI Agents, Agent Builder, Chat, Compare Models, AI Integrations, Messaging Apps, Browser Extension, Deep Research.

**Products → For developers:** AI Gateway, LLM caching, Smart LLM routing, Observability, EU data residency.

**Resources:** Blog, Customer stories, Partnerships, Reviews + featured story panel.

Header CTAs: Talk to sales (`/contact-sales`), Get started (`/pricing`). **Sign in is excluded.**

## Mega menu (Products)

- Width **536px**, padding **24px**, radius **16px**, white `#fff`
- Offset **26px** below the trigger (`mt-[26px]`), wrapper `absolute z-40 -left-5`
- Two featured cells on top (`flex gap-2`), then two lists (`flex gap-8`)
- Group label: 12px / 400 / `#6b3eff`
- Featured title: 16px / 600 / `#262b30` + accent arrow
- Featured description: 12px / 400 / `#65717b`
- List: 14px / 500, row padding 8px, hover `bg-neutral-100/70`
- Link color transition **150ms** `cubic-bezier(0, 0, 0.2, 1)` (Tailwind `ease-out`)
- Opened on hover; chevron flips. Avoid trigger↔panel dead gap (use padding, not margin).

Resources: left links + right featured story card. Reference uses a Payhawk photo — **do not download**. Use a local, brand-neutral panel.

## Mobile header (~390px)

- Logo left, **32×32** hamburger right (white bars on dark homepage)
- Bar padding 16px
- Overlay class on the live site: `fixed inset-0 bg-neutral-1000/50 z-200`
- Desktop nav hidden below **992px**
- Do not include Sign in, social, or phone
- Nested Products / Resources; CTAs at the bottom

## Footer

White, ~914px tall on desktop. Top row: logo + social (**exclude**) + Talk to sales + Get started (**exclude Sign in**). Then 5 columns: company links, Workspace, Gateway, Solutions, Careers. Bottom: `© 2026. All Rights Reserved`.

Column titles: 16px / 600. Mobile uses accordion column headers.

## Buttons

| Variant | Height | Padding | Radius | Notes |
| --- | --- | --- | --- | --- |
| Header | 37px | 7px 24px | pill | 12px / 600 |
| Hero / page | 48px | 11px 28px | pill | 16px / 600 |
| Accent (hero primary) | 48px | 11px 28px | pill | Fill `#6b3eff`, white text |

No lift/translate on header buttons. Color / background / border only, 150ms.

## Animation (global)

| Kind | Library | Spec |
| --- | --- | --- |
| Button / link / mega item hover | CSS / Motion | 150ms, `cubic-bezier(0,0,.2,1)` |
| Mega open/close | Motion | ~150–180ms opacity + 8px y |
| Mobile overlay | Motion | opacity 150ms; panel slide |
| Complex scroll / pin / stagger | GSAP + ScrollTrigger | Phase 3 homepage |
| Reduced motion | `MotionConfig reducedMotion="user"` + CSS | Disable translate/opacity motion; keep layout |

Do not use GSAP for button hover or menus.

## Backgrounds / glow (CSS)

Homepage canvas (for the Phase 2 shell only, not full hero content):

```css
background-color: #071013;
background-image:
  radial-gradient(ellipse 80% 55% at 50% -10%, rgba(107, 62, 255, 0.35), transparent 55%),
  radial-gradient(ellipse 60% 40% at 80% 20%, rgba(140, 80, 200, 0.18), transparent 50%);
```

Product-section grid overlays exist on the live homepage (`repeating-linear-gradient` purple 10% lines + `linear-gradient` purple wash). Those belong to Phase 3 sections, not global chrome.

## Assets policy

All live bitmaps/SVGs/fonts are Nord CDN or hashed Astro font files. **Not reused.** See `docs/assets.md`.
