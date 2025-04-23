// astro.config.mjs
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tinaDirective from "./astro-tina-directive/register";
// tailwind.config.js
import tailwind from '@astrojs/tailwind'; 

export default defineConfig({
  site: process.env.SITE_URL || `https://${process.env.VERCEL_URL}`,
  integrations: [
    tailwind(),
    mdx(), 
    sitemap(), 
    react(), 
    tinaDirective(),
  ],
  // Use Astro's built-in i18n support
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar'],
    routing: {
      strategy: 'prefix',
    }
  }
});