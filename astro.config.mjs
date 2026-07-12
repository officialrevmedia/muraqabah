// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.muraqabah.ca',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap()],
  // Lightweight static redirect pages for legacy routes from the previous website.
  redirects: {
    '/teachers/': '/scholars/',
    '/academics/': '/programs/',
    '/donations/': '/donate/'
  }
});
