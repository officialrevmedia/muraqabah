/**
 * Testimonials are DISABLED in production (see features.testimonials in
 * src/config/site.ts) until verified quotations are approved.
 *
 * Publish a testimonial only when: it comes from genuine feedback,
 * permission has been granted where necessary, attribution is accurate,
 * wording is unchanged, and any anonymity is intentional and approved.
 */

export interface Testimonial {
  quote: string;
  name: string;      // or 'Anonymous student' when approved
  context: string;   // e.g. 'Spheres of Faith student'
}

export const testimonials: Testimonial[] = [];
