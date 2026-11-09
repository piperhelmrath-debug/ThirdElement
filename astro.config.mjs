// @ts-check
import { defineConfig } from 'astro/config';

// Served from the custom domain thirdelement.nl (GitHub Pages + Cloudflare DNS),
// so the site lives at the root path.
export default defineConfig({
  site: 'https://thirdelement.nl',
  base: '/',
});
