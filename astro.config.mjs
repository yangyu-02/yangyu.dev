import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import { addCopyButton } from 'shiki-transformer-copy-button';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx()],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      transformers: [
        addCopyButton({
          toggle: 1000, // Time in ms to show "Copied!" before reverting
        }),
      ],
    },
  },
});