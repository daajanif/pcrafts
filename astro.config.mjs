// astro.config.mjs
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tinaDirective from "./astro-tina-directive/register";
// tailwind.config.js
import tailwind from '@astrojs/tailwind'; 

export default defineConfig({
  site: 'https://p-crafts.com',
  output: 'static',
  integrations: [
    tailwind(),
    mdx(), 
    sitemap(), 
    react()
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