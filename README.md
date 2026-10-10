# deck-skeleton

A starter project with a demo presentation built with [`@fabiensalles/deck`](https://github.com/FabienSalles/deck).

## Getting started

```bash
npm install
npm run dev
```

Open <http://localhost:4321/> to browse the demo. Deck content lives under
`src/content/decks/`.

## Exporting PDFs

Install Chromium separately, start the site, then export:

```bash
npm run preview
PUPPETEER_EXECUTABLE_PATH=/path/to/chromium npm run pdf:all
```

See the [deck documentation](https://github.com/FabienSalles/deck#readme) for
content format, theming, slide features and configuration.
