# Launch Checklist

Work through this top to bottom before announcing the new site.

## Content sign-off

- [ ] Read every page once, out loud if possible, checking names, dates, and figures
- [ ] Resolve the items in CONTENT-VERIFICATION.md marked "must confirm before launch" (Shaykh Nuh's surname spelling, qira'at wording, tax-receipt wording, Chains of Trust price and schedule)
- [ ] Confirm the announcement bar text and link are current (`src/config/site.ts`)
- [ ] Confirm program statuses are correct: Chains of Trust (Enrolling Now), Gardens of Paradise (Coming Soon), Spheres of Faith (Completed)
- [ ] Confirm Rihla 2027 page contains no dates or prices presented as final
- [ ] Spot-check article review notices display correctly on `/blog/` articles

## Links and integrations

- [ ] Click every Zeffy button (donate, Chains of Trust, campaign pages) and confirm each lands on the right live page
- [ ] Click every social link in the footer and contact page
- [ ] Play the featured video on the home, videos, and Qurbani pages
- [ ] Test all five forms per FORM-SETUP.md (or confirm the email fallback shows if endpoints are not yet configured)
- [ ] Test `/contact/?subject=gardens-of-paradise` prefills the topic

## Technical QA

- [ ] `npm run build` completes with no errors or warnings
- [ ] Visit `/sitemap-index.xml`, `/robots.txt`, `/rss.xml`, and a made-up URL (confirm the 404 page)
- [ ] Confirm legacy redirects: `/teachers/`, `/academics/`, `/donations/`
- [ ] Test on a phone: navigation drawer, gallery lightbox (tap, swipe, close), forms, tap targets
- [ ] Test keyboard-only: skip link, menu, FAQ accordions, gallery lightbox (arrows and Escape)
- [ ] Check with prefers-reduced-motion enabled: no animations or counting numbers
- [ ] Run PageSpeed Insights on the home page and one program page; investigate anything unusual
- [ ] Validate structured data with Google's Rich Results Test on the home page, a course page, a scholar page, and an article

## Domain and hosting

- [ ] GitHub Pages source set to GitHub Actions and the deploy workflow is green
- [ ] Custom domain `www.muraqabah.ca` set in repository Pages settings
- [ ] DNS records in place (CNAME for www, four A records for the apex)
- [ ] "Enforce HTTPS" checked and the certificate issued
- [ ] `https://muraqabah.ca` redirects to `https://www.muraqabah.ca`
- [ ] Old site (if any) redirected or retired so it does not compete in search

## Post-launch (first week)

- [ ] Verify the site in Google Search Console and Bing Webmaster Tools; submit the sitemap
- [ ] Update the website link on Instagram, Facebook, X, YouTube, TikTok, and the WhatsApp community description
- [ ] Ask Ramadan partner organizations to update any links to the old site
- [ ] Announce the new site on all channels, linking to `/programs/chains-of-trust/` while enrolment is open
- [ ] Monitor form deliveries and the info@muraqabah.ca inbox
- [ ] Fix anything the community reports, then re-run the technical QA items you touched
