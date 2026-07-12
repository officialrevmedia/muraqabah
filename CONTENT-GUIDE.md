# Content Guide

How to make everyday edits without touching layout code. After any change, commit and push to `main`; the site rebuilds automatically.

## House style

- Canadian English ("honour", "centre", "program" not "programme")
- No em dashes anywhere; use commas, periods, or parentheses
- Times in Eastern Time, written as "2:00 PM Eastern" (not EST)
- Names: Shaykh Zakaria Abdilaziz, Shaykh Nuh Sanders
- Never state a religious ruling, statistic, date, or quotation that has not been verified
- Testimonials remain off until real, approved quotations exist

## The one-stop config: `src/config/site.ts`

- **announcement** - the bar at the very top. Set `enabled: false` to hide it, or change `text`, `href`, and `cta`.
- **links** - all Zeffy and video URLs. Change here once and every button on the site updates.
- **pricing.chainsOfTrust** - the course price shown on the course page.
- **forms** - form endpoints (see FORM-SETUP.md).
- **analytics** - fill in `plausibleDomain` or `ga4` to enable analytics; leave empty for none.
- **features.testimonials** - keep `false` until approved quotes exist.
- **yearOneStats** - the four homepage statistics.

## Programs: `src/data/programs.ts`

Each program has a `status`: `'enrolling' | 'coming-soon' | 'completed'`. Change the status and the badges, buttons, and ordering update everywhere (home, programs, events).

Typical launches:

- **Gardens of Paradise goes live:** set `status: 'enrolling'`, fill in `schedule`, `venue`, and point `cta.href` at the new Zeffy page (add the link in `src/config/site.ts` and reference it).
- **Chains of Trust closes:** set `status: 'completed'` and update the announcement bar.

## Scholars: `src/data/scholars.ts`

Bios, roles, and photos. Photos live in `public/images/photos/`. Keep bios factual; anything uncertain goes to CONTENT-VERIFICATION.md first.

## Campaigns: `src/data/campaigns.ts`

All Ramadan and Qurbani figures, breakdowns, and partner lists. Add a new campaign object here and create a page under `src/pages/campaigns/` modelled on an existing one.

## Articles: `src/content/articles/`

Create a new `.md` file with this frontmatter:

```markdown
---
title: "Your Title"
description: "One to two sentences shown in cards and search results."
category: "Sacred Knowledge"
author: "Muraqabah Initiative"
reviewer: "Reviewed by Shaykh Zakaria Abdilaziz"
reviewStatus: "reviewed"        # or "pending"
pubDate: 2026-08-01
readingTime: "6 minute read"
heroImage: "/images/photos/manuscript-open.webp"
heroAlt: "Describe the image for screen readers"
tags: ["knowledge"]
draft: false                     # true keeps it out of the build
---

Article body in Markdown.
```

Rules baked into the site: religious content shows a "pending scholarly review" notice until `reviewStatus: "reviewed"`; `draft: true` removes the article from the build and the RSS feed entirely. Valid categories are listed in `src/content.config.ts`.

## Images

1. Export as WebP around 1600px wide for photos (aim for under 250 KB).
2. Place in `public/images/photos/`.
3. Reference as `/images/photos/your-image.webp` with meaningful `alt` text.
4. For the gallery, add an entry in `src/data/gallery.ts` with `alt`, `caption`, and a `category`.

Do not use the old tree logo (`LOGO.jpeg` in the archive). Only the current arch logo files in `public/images/brand/` are approved, and they must not be stretched or recoloured.

## Videos: `src/data/videos.ts`

Add entries with the YouTube ID, title, description, category, and date. The `/videos/` page grid appears automatically once the list has entries. To change the featured video, edit `featuredVideo`.

## Navigation: `src/data/navigation.ts`

Header and footer links. Keep the header to eight items or fewer so it fits on one line at desktop widths.

## Things that require a developer

- New page layouts or sections
- Design-system changes (`src/styles/global.css`)
- Structured-data changes (`src/lib/schema.ts`)
- Redirects (`astro.config.mjs`)
