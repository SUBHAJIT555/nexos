# Marketing site

Public marketing website plus a future `/checkout` route. Inspired by a public reference, not a copy of that brand.

## Stack

- Next.js App Router, React 19, TypeScript (strict)
- Tailwind CSS v4
- GSAP + ScrollTrigger for scroll-linked and timeline animation
- Motion for hover, tap, dropdown, and lightweight enter/exit

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run typecheck
```

## Fonts

Inter (UI) and Space Grotesk (headings) via `next/font/google`. Both are OFL. Do not copy font files from the reference site.

## Assets

Reusable originals live in `src/assets/`. Favicon is `src/app/icon.svg`. Do not hotlink reference CDN files. See `docs/assets.md`.

## Routes

- `/` — dark chrome shell (homepage content is a later phase)
- `/checkout` — payment shell only

Do not add login, sign-in, registration, account, or dashboard routes.

## Design

Measured tokens and global chrome notes: `docs/design-audit.md`.
