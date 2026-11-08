import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const eigenSite = process.env.SITE_URL;
const [eigenaar, repository] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const pagesSite = eigenaar ? `https://${eigenaar.toLowerCase()}.github.io` : 'http://localhost:4321';
const isProjectsite = repository && repository.toLowerCase() !== `${eigenaar.toLowerCase()}.github.io`;

export default defineConfig({
  site: eigenSite || pagesSite,
  base: !eigenSite && isProjectsite ? `/${repository}` : '/',
  output: 'static',
  integrations: [sitemap()],
  vite: {
    build: {
      assetsInlineLimit: 0,
      chunkSizeWarningLimit: 1100
    }
  }
});
