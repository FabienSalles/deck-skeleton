import { defineConfig } from 'astro/config';
import deck from '@conveycode/deck';

export default defineConfig({
  integrations: [deck()],

  output: 'static',

  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },

  server: {
    port: 4321,
  },
});
