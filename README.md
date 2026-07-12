# Muraqabah Initiative Website

Production website for Muraqabah Initiative, built with Astro and deployed to GitHub Pages at https://www.muraqabah.ca.

- **Framework:** Astro 5 with TypeScript
- **Styling:** Custom design-token CSS (no framework) in `src/styles/global.css`
- **Content:** Astro Content Collections for articles, typed data files for everything else
- **Hosting:** GitHub Pages via GitHub Actions, custom domain with HTTPS

## 1. Local development

Requirements: Node.js 20 or 22 (LTS) and npm.

```bash
# install Node with nvm if you do not have it
# https://github.com/nvm-sh/nvm
nvm install 22

npm install        # install dependencies
npm run dev        # start dev server at http://localhost:4321
npm run build      # production build into dist/
npm run preview    # preview the production build locally
```

## 2. Create the GitHub repository

1. Create a new repository (for example `muraqabah-website`) under your GitHub account or organization.
2. From this project folder:

```bash
git init
git add .
git commit -m "Muraqabah Initiative website"
git branch -M main
git remote add origin https://github.com/YOUR-ACCOUNT/muraqabah-website.git
git push -u origin main
```

## 3. Enable GitHub Pages

1. In the repository, go to **Settings > Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the **Actions** tab). The included workflow at `.github/workflows/deploy.yml` builds the site and deploys it.

## 4. Connect the custom domain

1. In **Settings > Pages > Custom domain**, enter `www.muraqabah.ca` and save. The repository already contains `public/CNAME` with this value, so deployments keep the domain.
2. At your DNS provider, create these records:

| Type  | Host | Value                  |
|-------|------|------------------------|
| CNAME | www  | YOUR-ACCOUNT.github.io |
| A     | @    | 185.199.108.153        |
| A     | @    | 185.199.109.153        |
| A     | @    | 185.199.110.153        |
| A     | @    | 185.199.111.153        |

The A records make the apex domain `muraqabah.ca` resolve so GitHub can redirect it to `www.muraqabah.ca`.

3. Wait for DNS to propagate (minutes to a few hours), then in **Settings > Pages** check **Enforce HTTPS**. GitHub provisions the certificate automatically.

## 5. Configure the forms

Forms use a static-site form service (Formspree or compatible). Until endpoints are configured, each form shows a friendly email fallback rather than a broken form. Follow **FORM-SETUP.md**, then paste your endpoints into `src/config/site.ts` under `forms`.

## 6. Everyday content edits

Most edits live in a handful of files. See **CONTENT-GUIDE.md** for full instructions. Quick reference:

| To change                        | Edit                                   |
|----------------------------------|----------------------------------------|
| Announcement bar                 | `src/config/site.ts` (`announcement`)  |
| Zeffy and video links            | `src/config/site.ts` (`links`)         |
| Course pricing                   | `src/config/site.ts` (`pricing`)       |
| Year-one statistics              | `src/config/site.ts` (`yearOneStats`)  |
| Program status and details       | `src/data/programs.ts`                 |
| Scholar bios                     | `src/data/scholars.ts`                 |
| Campaign figures                 | `src/data/campaigns.ts`                |
| Gallery photos                   | `src/data/gallery.ts` + `public/images/photos/` |
| Videos                           | `src/data/videos.ts`                   |
| Articles                         | `src/content/articles/*.md`            |
| Navigation                       | `src/data/navigation.ts`               |

After editing, commit and push to `main`. The site rebuilds and deploys automatically.

## 7. Project structure

```
public/               static files (images, favicons, CNAME, robots.txt)
src/
  components/         reusable UI (header, footer, forms, cards, bands)
  config/site.ts      one-stop site configuration
  content/articles/   Markdown articles (blog / research)
  content.config.ts   article schema, including the review-status fields
  data/               typed content: programs, scholars, campaigns, gallery...
  layouts/Base.astro  SEO head, JSON-LD, announcement bar, global scripts
  lib/schema.ts       structured-data (JSON-LD) builders
  pages/              one folder or file per route
  styles/global.css   the complete design system
.github/workflows/    GitHub Pages deployment
```

## 8. Companion documents

- **CONTENT-GUIDE.md** - how to edit every kind of content
- **CONTENT-VERIFICATION.md** - facts that need confirmation before or shortly after launch
- **FORM-SETUP.md** - connecting Formspree endpoints
- **SEO-PLAN.md** - page-by-page keyword targeting and ongoing SEO tasks
- **LAUNCH-CHECKLIST.md** - final QA before going live

## Notes

- The original high-resolution asset package (about 300 MB) is not committed to this repository. The site uses an optimized WebP image library in `public/images` (about 4 MB). Keep the original ZIP archived separately.
- Testimonials are disabled by design (`features.testimonials` in `src/config/site.ts`) until verified quotations are collected and approved.
