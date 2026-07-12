/**
 * Curated social posts for the Media page. The site never scrapes Instagram
 * at runtime. Save a thumbnail into /public/images/social/ and add entries:
 *
 * {
 *   platform: 'Instagram',
 *   href: 'https://www.instagram.com/p/POST_ID/',
 *   image: '/images/social/post-1.webp',
 *   alt: 'Describe the image for screen readers',
 *   caption: 'Short caption shown under the thumbnail'
 * }
 */

export interface SocialPost {
  platform: 'Instagram' | 'Facebook' | 'X' | 'YouTube' | 'TikTok';
  href: string;
  image: string;
  alt: string;
  caption: string;
}

export const socialPosts: SocialPost[] = [];
