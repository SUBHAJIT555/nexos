# Customer Stories listing

- Reference URL: https://nexos.ai/customer-stories/
- Local URL: http://localhost:3000/customer-stories
- Detail pages: **not built in this phase** except the already-approved Payhawk route (`/customer-stories/payhawk`). Listing cards may point at future `/customer-stories/[slug]` URLs.

## Screenshot Map

| Screenshot | Section |
| --- | --- |
| Screenshot 01 | Hero: “Customer Stories” eyebrow, H1 “Meet the companies already using nexos.ai”, static logo strip (pigu.lt, NordVPN, payabl., Surfshark, Hostinger), featured Marijus Briedis / Nord Security testimonial |
| Screenshot 02 | Directory: “Learn how companies are using nexos.ai”, Search stories…, Filter by Department (All Departments), 6 story cards in 3 columns |
| Screenshot 03 | Department filter = Finance → Payhawk card only |
| Screenshot 04 | Department dropdown open (All / Finance / Engineering / E-commerce), Engineering selected → 4 cards |
| Screenshot 05 | Department filter = E-commerce → Pigu.lt card only |
| Screenshot 06 | Final CTA “Discover AI platform for your business” / Get nexos.ai |

Continuous sections: 01 is hero + featured; 02–05 are one directory section under different filter states; 06 is the closing banner.

## Exact section inventory

HEADER (shared, light chrome)
↓
CUSTOMER STORIES HERO (`#hero`) — eyebrow, H1, static logo SVG (desktop + mobile sources)
↓
FEATURED CUSTOMER STORY (`#featured-story`) — Marijus Briedis portrait, Nord Security logo, quote, “Read customer story”
↓
CUSTOMER-STORY DIRECTORY (`#stories`) — H2, search, department filter, 3-col card grid
↓
FINAL CTA (`#discover-banner`) — dark/purple banner
↓
FOOTER (shared)

No blog-style pagination, no CMS, no extra invented stories.

## Hero

- Eyebrow: `Customer Stories` — 16px/24px medium, accent `#6B3EFF`, centered.
- H1: `Meet the companies already using nexos.ai` — Space Grotesk 48px/57.6 desktop, 32px/40 mobile, centered, max content in `lg:col-start-3 lg:col-span-8`.
- Background: white (live `bg-secondary` computes to white).
- Section padding: `pt-16 pb-16`.
- Logo strip: static SVG, not a JS marquee. Desktop `logo-carousel-customer-stories-v3.svg` (`hidden md:block` equivalent via `<picture>`), mobile `mobile-logo-carousel-customer-stories-v3.svg`.
- Not the Blog or feature-page hero.

## Featured customer story

- Live leftover section id is `payhawkstory`; local uses `#featured-story`. Content is Nord / Marijus, not Payhawk.
- Outer tile: `rounded-md` (16px) with `linear-gradient(270deg, #ffffff 0%, #eff4f8 100%)`, `p-6`.
- Desktop: 12-col grid, portrait `sm:col-span-3` (~256×298), copy `sm:col-span-9`.
- Portrait: `object-cover object-top`, name overlay bottom-left, white 14px/21px: **Marijus Briedis** (semibold) / **CTO @NordVPN**.
- Logo: Nord Security wordmark ~164×74.
- Quote: body 20px/30px, exact live copy including wrapping quotation marks.
- CTA: accent pill 48px, “Read customer story” + arrow → `/customer-stories/nord-security` (detail not built this phase).
- Below `lg`, portrait stacks above copy (live `block lg:hidden` duplicate).

## Directory

- Heading: `Learn how companies are using nexos.ai` — same 48px/57.6 as H1, centered in 8-col.
- Search: full-width up to 736px, `h-12` pill, `border-neutral-600`, search icon left, placeholder `Search stories...`. Instant client-side filter on title, company, department.
- Filter label: `Filter by Department:` + native select `min-w-[180px]` pill. Options (live, not invented): All Departments, Finance, Engineering, E-commerce.
- Search + department combine with `filter(matchesSearch).filter(matchesDepartment)`.
- Empty: `No stories match your search.`
- Grid: `grid-cols-1 md:grid-cols-3 gap-y-8 sm:gap-x-8`. Incomplete last row is left incomplete.
- Cards: `rounded-md border-neutral-200 p-6` ~368×300 on 1440-class container. Company logo (not photos), title `20px/30px medium`, CTA `Read the story` accent + arrow.
- Whole card is a link to `/customer-stories/{slug}`.

## Current story cards (live order)

| Company | Title | Department | Slug | Detail this phase |
| --- | --- | --- | --- | --- |
| Nord Security | Nord Security automated 75% of customer support with 86% CSAT | Engineering | `cybercare-nordsecurity` | Not built |
| Nord Security | Nord Security cuts coding-agent LLM costs by 46% with nexos.ai | Engineering | `nord-security` | Not built |
| Pigu.lt | Pigu.lt integrates AI at the core of e-commerce with nexos.ai | E-commerce | `pigu-lt` | Not built |
| Payhawk | Payhawk cuts security investigation time by 80% with nexos.ai | Finance | `payhawk` | Existing approved page — **unchanged** |
| Oxylabs | Oxylabs doubles AI output and slashes costs with nexos.ai | Engineering | `oxylabs` | Built — see `customer-story-oxylabs.md` |
| Hostinger | Hostinger Horizons scales no-code AI web builder with nexos.ai | Engineering | `hostinger` | Built — see `customer-story-hostinger.md` |

Card “images” on the live listing are company logos, not photographs.

## Final CTA

- Heading: `Discover AI platform for your business`
- Button: `Get nexos.ai` → `/pricing`
- Same permitted banner blob / purple mask assets already used on Payhawk, via a listing-specific `CustomerStoriesCta` (Payhawk components not edited).

## Assets

See `docs/assets.md` Customer Stories listing table. Portraits, logos, carousel SVGs, and CTA blobs are local. No production hotlinking.

## Animations / interactions

- No GSAP, no scroll-pin, no logo marquee, no card stagger.
- Search is instant.
- Department uses a native select (closed/open/selected/hover are OS-native, matching live).
- Featured CTA: existing Button accent hover (`#5B12D9`).
- Card CTA: `hover:text-[var(--accent-hover)]`.
- Card is a static bordered tile (live has no image zoom).

## Desktop / tablet / mobile

- **1440 / 1280:** 3-col cards, featured 3/9, search centered, filter below search (stacked `flex-col` even on md, `items-center`).
- **1024:** featured still 3/9 until `<lg` (1024); at 1023px portrait stacks. Cards remain 3-col from `md` (768).
- **768:** 3-col cards (live `md:grid-cols-3`), tighter tiles.
- **390:** H1 wraps two lines, logo mobile SVG, featured stacks portrait → logo → quote → CTA, search full width, filter row wraps/centers, cards 1-col.

## Original vs local (known)

| Item | Notes |
| --- | --- |
| Featured section id | Live leftover `#payhawkstory` → local `#featured-story` |
| Header/auth/social | Project exclusions; shared Header/Footer unchanged |
| Missing detail routes | Cards link to future slugs; only Payhawk resolves |
| Search empty state | Live does not show a designed empty illustration; local uses a short sentence |
| Logo carousel | Static SVG (verified), not CSS marquee |

## Screenshot-by-screenshot QA

Filled after local browser pass.

| Screenshot | Result |
| --- | --- |
| 01 Hero + featured | Pending local pass |
| 02 Directory all cards | Pending local pass |
| 03 Finance filter | Pending local pass |
| 04 Engineering dropdown | Pending local pass |
| 05 E-commerce filter | Pending local pass |
| 06 Final CTA | Pending local pass |
