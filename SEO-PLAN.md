# SEO Plan

How the site is built for search, what each page targets, and what to do after launch.

## Technical foundation (already built)

- Clean, descriptive URLs with trailing slashes and directory-style builds
- Unique title and meta description on every page
- Canonical URLs, Open Graph, and Twitter card tags on every page
- XML sitemap at `/sitemap-index.xml`, referenced by `robots.txt`
- RSS feed at `/rss.xml`
- Structured data (JSON-LD): Organization and WebSite site-wide, plus Course, Person, Article, VideoObject, FAQPage, and BreadcrumbList where relevant
- 301-style redirects for legacy paths: `/teachers/` to `/scholars/`, `/academics/` to `/programs/`, `/donations/` to `/donate/`
- Fast static pages: optimized WebP images, lazy loading, click-to-play video facades, self-hosted fonts
- Canadian English (`en-CA`) locale throughout

## Page-by-page keyword targeting

| Page | Primary target | Supporting phrases |
|---|---|---|
| Home | Muraqabah Initiative | Islamic education Toronto, traditional Islamic knowledge Canada |
| About | about Muraqabah Initiative | Islamic nonprofit Toronto, muraqabah meaning |
| Programs | Islamic courses Toronto | Islamic classes GTA, online Islamic courses Canada |
| Chains of Trust | hadith sciences course | learn hadith online, Bayquniyyah course, ulum al-hadith class |
| Gardens of Paradise | Islamic character course | ethics of speech Islam, upcoming Islamic program Toronto |
| Spheres of Faith | Islam Iman Ihsan course | Islamic creed and spirituality program |
| Scholars | traditional Islamic scholars Toronto | Tarim trained scholars Canada |
| Scholar profiles | (scholar name) | Dar al-Mustafa student, hadith teacher Toronto |
| Events | Islamic events Toronto | Islamic seminars GTA, Islamic intensives Hamilton |
| Rihla 2027 | Islamic trip Istanbul | rihla Turkey 2027, sacred travel Istanbul, Islamic heritage tour |
| Impact | Muslim charity impact Toronto | community impact report, khidmah Canada |
| Ramadan 2026 | Ramadan food drive Toronto | feed families Ramadan GTA, iftar meals Hamilton |
| Qurbani 2026 | Qurbani Yemen | qurbani donation Tarim, udhiyah Yemen |
| Donate | donate Islamic education | support Islamic nonprofit Canada, sadaqah jariyah education |
| Volunteer | volunteer Muslim charity Toronto | Islamic volunteering GTA, khidmah volunteer |
| Partner With Us | partner Islamic nonprofit | mosque partnership Toronto, community sponsor GTA |
| Research / Blog | Islamic articles | muraqabah meaning, sanad in Islam, chains of transmission |
| Media / Videos | Islamic lectures video | Muraqabah YouTube, Islamic talks online |
| Gallery | (long tail via image alt text) | Islamic community events photos |

Article pages each target their own long-tail question (for example "what is muraqabah" and "why do chains of transmission matter").

## After launch

1. **Search Console.** Verify `www.muraqabah.ca` in Google Search Console and Bing Webmaster Tools, submit `/sitemap-index.xml`, and monitor coverage.
2. **Business profiles.** Ensure social profiles link back to the website. Consistent name, description, and link everywhere.
3. **Backlinks.** Ask the nine Ramadan partner organizations, venues, and any press to link to relevant pages (impact, campaigns, programs).
4. **Publishing rhythm.** One article per month is enough to compound. Prioritize questions students actually ask, publish only after scholarly review, and interlink articles with the related program pages.
5. **Refresh signals.** Update program statuses promptly (Enrolling, Coming Soon, Completed), keep campaign totals current, and retire stale announcements. Freshness on the homepage and programs page matters most.
6. **Analytics.** When ready, add Plausible (recommended, privacy-friendly) or GA4 by filling in `analytics` in `src/config/site.ts`. Conversion events are already wired via `data-event` attributes on key buttons (donate clicks, enrolment clicks, form submissions).
7. **Performance checks.** Run PageSpeed Insights quarterly. The site should score well; investigate regressions after adding new images (keep them WebP and appropriately sized).
