import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.offaxis.partners',
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => !['/legal/', '/privacy/', '/fr/mentions-legales/', '/fr/confidentialite/'].some((path) => page.endsWith(path)),
    }),
  ],
  build: {
    assets: '_assets',
  },
});
