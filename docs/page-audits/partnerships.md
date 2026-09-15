# Partnerships

- Reference URL: https://nexos.ai/partnerships/
- Local URL: http://localhost:3000/partnerships
- Header: shared light chrome (unchanged)
- Footer: shared (unchanged)

This is a marketing/landing page, not a customer story. Locked customer-story routes were not used as a template.

## Screenshot Map

| Screenshot | Section |
| --- | --- |
| 01 | Hero: “Partner with nexos.ai”, body, Become a Partner (aurora), partners_program_hero |
| 02 | Find your partnership program — 3 program cards + Apply now |
| 03 | How we work together — Technology partner eyebrow + 3 visual cards |
| 04 | Why partner with nexos.ai? — Referral/reseller benefits (4) |
| 05 | Form: Want to partner with nexos.ai? + application fields |

Live has **no** FAQ, testimonials, logo marquee, statistics, related stories, or videos.

## Exact section inventory

HEADER (shared light)
↓
HERO (`#hero`) — grid illustration md+, H1 with accent “nexos.ai”, body, aurora CTA → `#form`, hero raster
↓
FIND PROGRAM (`#find-partnership`) — white→#EFF4F8 gradient, 3 icon cards, Apply now → `#form`
↓
HOW WE WORK (`#how-we-work-together`) — Technology partner, 3 image cards
↓
WHY PARTNER (`#why-partner`) — Referral and reseller partners, 4 icon+copy rows
↓
FORM (`#form`) — banner-light-glow, copy + frontend-only form
↓
FOOTER (shared)

## Hero

- H1: Partner with **nexos.ai** (`#6B3EFF`)
- Desktop 64/76.8 tracking −0.752; mobile 32/40
- Body: body-md-medium 16/24 `#464E56`, max 568
- CTA: aurora `Button variant="hero"`, scrolls to `#form`
- Visual: `partners_program_hero` 1110 RGBA (rounded photo baked in), displayed max 555
- Grid: `grid-centered-secondary-center.svg` md+, hidden on mobile

## Partnership types

1. Technology partner — screens icon, `#D9E0FF` / accent
2. Referral partner — messages+$ icon, `#E3FCEC` / `#0C7E67`
3. Reseller partner — handshake, `#C0D8FA` / `#2560B3`

## How we work

Cards use downloaded rasters (not rebuilt UI):

1. Integrate — gradient `#262B30 → #5938CB`, white type
2. Expand — gradient `#B9B5F5 → #EFF4F8`
3. Co-create — `bg-muted` `#EFF4F8`

## Why partner

Purple 48px circles (`p-3` + 32px icon). Titles `body-lg-medium` 20/30 font-medium.

## Form

Frontend only: `preventDefault`, no HubSpot, no reCAPTCHA, no database.

Fields match live names/placeholders. Submit does not send data.

## Animations

No GSAP, no fade-up. Hero/grid static. CTA hover from shared Button. Input focus border accent.

## Screenshot-by-screenshot QA

| Screenshot | Result |
| --- | --- |
| 01 Hero | PASS |
| 02 Programs | PASS |
| 03 How we work | PASS |
| 04 Why partner | PASS |
| 05 Form | PASS (no backend submit) |

## Content / asset / regression

- Authorized copy from live page
- No customer-story content mixed in
- Header/Footer/Homepage/Customer Stories/Blog not modified
