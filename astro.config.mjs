import { defineConfig } from 'astro/config';
import deck from '@conveycode/deck';

export default defineConfig({
  integrations: [
    deck({
      // Chaque entrée remplace celle du package. Retirer une ligne suffit à
      // revenir au thème livré.
      styles: {
        presentation: '/src/styles/theme-presentation.scss',
      },
    }),
  ],

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
