# Legal pages + cookie consent audit

Reference site: https://nexos.ai/  
Audited: 2026-09-16 against live public pages + cookie preferences UI.

---

## Terms of Use

| | |
| --- | --- |
| Reference URL | https://nexos.ai/legal/terms-of-use/ |
| Local URL | `/legal/terms-of-use/` |
| Title | Terms of Use |
| Last updated | Effective date: 1 Oct 2026 |

### Section inventory

- Intro + definitions block
- Main numbered clauses 1–20 (Definitions through General)
- Schedule A – Product Description (Overview, Functional Components, …)
- Schedule B – API Access
- Schedule C – Data Processing Agreement
- Schedule D – Security Measures
- ANNEX 1 – Sub-processors
- ANNEX 2 – Technical and Organisational Measures

75 `legal-h2` headings extracted; includes all schedules and annexes.

### Heading hierarchy

- H1: page title (`legal-h1`)
- H2: numbered clauses and section headings (`legal-h2`)
- H3: schedule titles (`legal-h3`, e.g. Schedule B)

### Lists / links / formatting

- Bulleted lists with circular markers (live-style)
- Numbered sub-clauses preserved as inline spans/paragraphs
- Internal links mapped to local routes where applicable (`/legal/privacy-policy/`, `/legal/cookie-policy/`, `/legal/fair-use-policy/`)
- Fair Use Policy link text restored from live reference

### Layout

- Container: `col-span-12 lg:col-start-3 lg:col-span-8` inside 12-col grid
- Max width: 1168px (`--container-standard`)
- Desktop (1440): centered document column, heading-2xl-scale title, body-md-scale copy
- Mobile (390): full-width with `mx-4`, stacked sections, no horizontal overflow

---

## Privacy Policy

| | |
| --- | --- |
| Reference URL | https://nexos.ai/legal/privacy-policy/ |
| Local URL | `/legal/privacy-policy/` |
| Title | Privacy Policy of nexos.ai |
| Last updated | Last updated on 27 February 2026 |

### Section inventory

25 major sections including:

- Role of nexos.ai
- What personal data do we process… (multiple category/purpose/legal-basis blocks)
- Information supplied by users / website / other sources
- Retention, sharing, international transfers
- User rights, cookies, security
- Changes to this Privacy Policy
- Contacting us (`legal@nexos.ai`)

### Layout

Same legal document grid as Terms of Use.

---

## Cookie Policy

| | |
| --- | --- |
| Reference URL | https://nexos.ai/legal/cookie-policy/ |
| Local URL | `/legal/cookie-policy/` |
| Title | Cookie Policy of nexos.ai |
| Last updated | This statement was last updated on 14 January 2025. |

### Section inventory

1. What are Cookies?
2. Why does nexos.ai use Cookies?
3. How can I make choices about Cookies and my privacy?
4. What Cookies does nexos.ai use?
5. Contacting us

### Cookie provider grid

CSS grid (3 columns desktop, 1 column mobile) — not HTML `<table>`:

| Name | Purpose | Privacy link |
| --- | --- | --- |
| z-cookies-consent-nexos.ai | Technical cookie for consent preferences | Privacy Policy |
| Linkedin | Analytics, advertising | LinkedIn Privacy Policy |
| Google Inc. | Analytics, advertising, security | Google Policy |

---

## Security Practices

| | |
| --- | --- |
| Reference URL | https://nexos.ai/security-practices/ |
| Local URL | `/security-practices/` |
| Title | nexos.ai Security Practices |
| Last updated | None on live page |

### Section inventory

1. Overview
2. Scope
3. How to Submit a Vulnerability Report (`security@nexos.ai`)
4. Required Information
5. Responsible Disclosure Guidelines (Expected Conduct + Prohibited Activities)
6. Bug Bounty Program (no monetary program)
7. Legal Framework (safe harbor)

**Not** Trust Center content.

---

## Cookie Preferences

| | |
| --- | --- |
| Type | Modal overlay (not a page) |
| Trigger | First visit (no stored consent); footer “Cookie preferences” button |
| Storage key | `z-cookies-consent-nexos.ai` (localStorage) |

### Modal structure

- Title: Cookie preferences
- Close: × upper-right
- Intro: 2 paragraphs with Google Privacy & Terms (external) + Cookie Policy (→ `/legal/cookie-policy/`)
- Categories:
  - Essential — Always on (not toggleable)
  - Functionality — toggle
  - Analytics — toggle
  - Advertising — toggle
- Buttons: Accept all | Reject all | Confirm selection

### Behavior

| Action | Result |
| --- | --- |
| Accept all | essential + functionality + analytics + advertising enabled |
| Reject all | essential only |
| Confirm selection | saves current toggles |
| Close (×) | dismisses without saving (reopens on next visit if no consent stored) |

### Desktop geometry

- Centered modal, max-width ~720px
- White background, rounded-2xl, dark translucent overlay
- Sticky footer with 3 buttons (stack on mobile)

### Mobile (390)

- Bottom-anchored sheet style with rounded top corners
- Inner scroll for content
- Buttons stack vertically in footer

### Optional scripts

No analytics/advertising scripts exist in this project. Consent UI stores preferences only.

---

## Footer Legal Navigation

Required links (Trust center **removed**):

1. Terms of use → `/legal/terms-of-use/`
2. Privacy policy → `/legal/privacy-policy/`
3. Cookie policy → `/legal/cookie-policy/`
4. Security practices → `/security-practices/`
5. Cookie preferences → opens modal (button, not route)

No `/trust-center/` page created.
