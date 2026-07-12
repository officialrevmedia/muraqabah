# Form Setup

The site has five forms: contact, volunteer, partnership, Rihla 2027 interest, and the newsletter signup. They post to a static-site form service. **Until an endpoint is configured, each form automatically shows a polite email fallback instead of a broken form**, so the site is safe to launch first and wire forms after.

These instructions use Formspree (free tier: 50 submissions per month per form). Any service with a compatible POST endpoint also works.

## 1. Create the Formspree forms

1. Sign up at https://formspree.io using **info@muraqabah.ca** so submissions arrive in the shared inbox.
2. Create a project called "Muraqabah Website".
3. Create five forms inside it, named: Contact, Volunteer, Partnership, Rihla Interest, Newsletter.
4. Each form gets an endpoint that looks like `https://formspree.io/f/abcdwxyz`. Copy each one.

## 2. Paste the endpoints into the site

Open `src/config/site.ts` and fill in the `forms` object:

```ts
export const forms = {
  contact:     'https://formspree.io/f/XXXXXXXX',
  volunteer:   'https://formspree.io/f/XXXXXXXX',
  rihla:       'https://formspree.io/f/XXXXXXXX',
  partnership: 'https://formspree.io/f/XXXXXXXX',
  newsletter:  'https://formspree.io/f/XXXXXXXX'
};
```

Commit and push. The forms go live on the next deploy.

## 3. Recommended Formspree settings

For each form, in the Formspree dashboard:

- **Notification email:** info@muraqabah.ca
- **reCAPTCHA:** leave Formspree's spam filtering on. The site also includes a honeypot field (`_gotcha`) that silently catches most bots.
- **Restrict to domain:** set the allowed domain to `www.muraqabah.ca` so other sites cannot post to your endpoints.
- **Autoresponse (optional):** a short "we received your message" reply improves the experience.

## 4. How the forms behave on the site

- Client-side validation highlights missing required fields before submission.
- Submissions are sent with JavaScript (no page reload) and a status message confirms success or failure. If JavaScript is unavailable, the form falls back to a normal POST to Formspree.
- Every form includes a required consent checkbox and links to the privacy policy.
- Analytics events fire on submission when analytics is enabled.

## 5. Testing checklist

After configuring, on the live site:

1. Submit each form once with test data and confirm delivery to info@muraqabah.ca.
2. Try submitting with a required field empty and confirm the inline error appears.
3. Confirm the consent checkbox is required.
4. Check the submission appears in the Formspree dashboard.
5. Delete the test submissions.

## Notes

- The Rihla interest form is on `/rihla-2027/` and collects trip-planning details (party size, room preference, dietary and accessibility needs). Expect these submissions to need a personal reply.
- If a form starts receiving spam despite protections, enable reCAPTCHA v2 in Formspree for that form.
- If you outgrow the free tier, Formspree paid plans or alternatives (Basin, FormBackend, Web3Forms) work with the same markup; only the endpoint URL changes.
