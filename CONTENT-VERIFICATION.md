# Content Verification

Items the Muraqabah team should confirm before launch or shortly after. The site was built strictly from the supplied assets and live Zeffy and social pages. Where sources conflicted or details were missing, the site uses the safest accurate wording and the open question is recorded here.

## Must confirm before launch

1. **Shaykh Nuh's surname: "Sanders" vs "Saunders."**
   The master instructions specify **Sanders**, and the site uses Sanders everywhere. However, the Zeffy Chains of Trust page and some flyers in the asset package spell it **Saunders**, and at least one flyer uses the honorific **Ustadh** rather than **Shaykh**. Confirm the correct spelling and preferred honorific with him directly, then update `src/data/scholars.ts` if needed and ask Zeffy page admins to align.

2. **Qur'anic recitation credential wording.**
   Sources conflict on the precise scope of Shaykh Nuh's qira'at training (one source references the seven canonical recitations, another the ten). The site uses the safe wording "advanced training and authorization in Qur'anic recitation." Confirm the exact credential and tighten the wording if desired.

3. **Tax receipts and charitable status.**
   The donor presentation lists registered charitable status as a future goal. The donate page therefore says receipts are **not** issued at this time. Confirm this is still accurate. If status is obtained later, update `/donate/` (FAQ) and `/privacy/`.

4. **Chains of Trust price and schedule.**
   The site states $50 per month, Sundays 2:00 to 3:00 PM Eastern, on Zoom, per the live Zeffy page at build time. Verify nothing has changed before launch. Pricing lives in `src/config/site.ts`.

## Confirm when details are decided

5. **Gardens of Paradise schedule and venue.**
   Listed as Coming Soon with themes drawn from the Weight of Words materials. A flyer in the asset package carries a stale "Starting May 2026" date, so dated flyers were intentionally kept off the live pages. When the real start date, format, and registration link are set, update `src/data/programs.ts`.

6. **Rihla 2027 (Istanbul) details.**
   Dates, pricing, itinerary, and capacity are all marked as to be announced. Themes on the page are labelled illustrative. Update `/rihla-2027/` content and `src/data/programs.ts` when the trip is finalized.

7. **Newsletter delivery.**
   The signup band collects emails via the form endpoint (or email fallback). Decide where subscribers should actually live (mailing tool, spreadsheet, WhatsApp funnel) and configure accordingly.

## Editorial policies encoded in the site

8. **Testimonials are off.** No testimonial content exists in the sources, so the feature flag `features.testimonials` is false and no quotes appear anywhere. Collect written permission and exact quotations before enabling.

9. **Article review status.** Articles carry a `reviewStatus` field. "What is Muraqabah" and "Why Chains of Transmission Matter" are marked **pending scholarly review** and display a notice saying so. "Knowledge in Action" (Ramadan report) is marked reviewed against the published impact report figures. "The Weight of Words" is a **draft** and is excluded from the build until Gardens of Paradise details are confirmed.

10. **No invented facts.** Every statistic on the site traces to the 2026 donor presentation, the Ramadan 2026 impact report, the Qurbani 2026 materials, or live Zeffy pages. If a figure needs updating, change it in `src/config/site.ts` or `src/data/campaigns.ts` rather than in page copy, so it stays consistent site-wide.

## Verified against live sources at build time

- Zeffy links for donations, Chains of Trust, Spheres of Faith, Qurbani 2026, Ramadan 2026, and Beginning of Guidance
- Social profiles: Instagram, Facebook, X, YouTube, TikTok, WhatsApp community link
- Featured YouTube video (Qurbani 2026 documentary)
- Ramadan 2026 figures: $14,725.80 raised, zero admin fees for that campaign, 380 family packages, 648 hot meals, $3,850 in monetary support, 9 partner organizations
- Qurbani 2026 figures: $20,000+ raised, roughly 100 animals, 300+ households in Tarim
