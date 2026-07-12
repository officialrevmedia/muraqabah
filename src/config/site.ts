/**
 * Central site configuration.
 * Most day-to-day edits (announcement, pricing, links, form endpoints,
 * statistics) happen in this one file. See CONTENT-GUIDE.md.
 */

export const site = {
  name: 'Muraqabah Initiative',
  url: 'https://www.muraqabah.ca',
  email: 'info@muraqabah.ca',
  tagline: 'Rooted in Faith, Grounded in Purpose',
  description:
    'Muraqabah Initiative connects seekers to traditional Islamic scholarship, meaningful spiritual formation, and sincere community service in the Greater Toronto Area and online.',
  locale: 'en_CA',
  ogImage: '/images/og-default.jpg'
};

/** Announcement bar. Set enabled to false to hide it. */
export const announcement = {
  enabled: true,
  text: 'Now Enrolling: Chains of Trust with Shaykh Nuh Sanders',
  href: '/programs/chains-of-trust/',
  cta: 'View Course'
};

/** External registration and donation links (Zeffy). */
export const links = {
  donate: 'https://www.zeffy.com/en-CA/donation-form/preserve-knowledge-transform-hearts',
  chainsOfTrust: 'https://www.zeffy.com/en-CA/ticketing/chains-of-trust-foundations-of-hadith-sciences',
  spheresOfFaith: 'https://www.zeffy.com/en-CA/ticketing/spheres-of-faith-islam-iman-ihsan-and-irfan-course',
  qurbani2026: 'https://www.zeffy.com/en-CA/ticketing/qurbani-2026-yemen',
  ramadan2026: 'https://www.zeffy.com/en-CA/donation-form/feed-1000-people-this-ramadan',
  beginningOfGuidance: 'https://www.zeffy.com/en-CA/ticketing/the-beginning-of-guidance',
  featuredVideo: 'https://www.youtube.com/watch?v=wizaPMOFPt4'
};

/** Course pricing lives in one place so it never drifts across pages. */
export const pricing = {
  chainsOfTrust: {
    amount: '$50',
    period: 'per month',
    note: 'Enrolment renews monthly through Zeffy and includes recordings for enrolled students.'
  }
};

/**
 * Form endpoints (Formspree or a compatible static-site form service).
 * Leave a value empty ('') and the site shows a graceful email fallback
 * instead of a broken form. See FORM-SETUP.md for setup instructions.
 * Example value: 'https://formspree.io/f/abcdwxyz'
 */
export const forms = {
  contact: '',
  volunteer: '',
  rihla: '',
  partnership: '',
  newsletter: ''
};

/**
 * Optional, privacy-conscious analytics. Leave empty to disable entirely.
 * plausibleDomain example: 'muraqabah.ca'   ga4 example: 'G-XXXXXXXXXX'
 */
export const analytics = {
  plausibleDomain: '',
  ga4: ''
};

/** Feature switches. */
export const features = {
  /** Testimonials stay off until verified quotations are approved. */
  testimonials: false
};

/** First-year impact figures, sourced from the 2026 donor presentation. */
export const yearOneStats = [
  { value: '600+', label: 'Students reached across courses, intensives, and programs' },
  { value: '10,000+', label: 'People fed through khidmah campaigns at home and in Yemen' },
  { value: '2', label: 'Sold-out one-day intensives, with 100+ at the debut event' },
  { value: '80+', label: 'Weekly attendees at the Spheres of Faith flagship program' },
  { value: '$14,725', label: 'Raised during the 2026 Ramadan campaign, with no administrative fees taken' },
  { value: '$20,000+', label: 'Raised for Qurbani 2026, delivered in Tarim, Yemen' }
];
