// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import tailwindcss from '@tailwindcss/vite';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  site: 'https://calcit.io',
  integrations: [mdx(), sitemap({
      filter: (page) => {
        // Exclude pages in the '/blog' directory temporarily
        if (page.includes('/blog/')) {
          return false;
        }
        // Include all other pages
        return true;
      },
    }), svelte()],

  adapter: cloudflare({
    platformProxy: {
      enabled: true
    },

    imageService: "cloudflare"
  }),

  vite: {
    plugins: [tailwindcss()],
  },
});