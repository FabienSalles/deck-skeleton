# deck-skeleton

Starter project for [`@conveycode/deck`](https://github.com/FabienSalles/deck), an
Astro integration that turns markdown into Reveal.js presentations with exercise
pages, correction pages and PDF export.

It ships a demo deck that exercises every rendering capability, so you can see
what the package does before writing your own content.

## Getting started

```bash
npm install
npm run dev          # http://localhost:4321
```

> **Heads-up:** `@conveycode/deck` is not published to npm yet, and installing it
> straight from GitHub does not build its `dist/`. Until it is published, build a
> tarball from a local clone and install that:
>
> ```bash
> git clone https://github.com/FabienSalles/deck.git ../deck
> (cd ../deck && npm install && npm run build && npm pack)
> npm install ../deck/conveycode-deck-0.1.0.tgz
> ```
>
> Linking the clone directly with `file:../deck` does **not** work: Astro fails to
> resolve the injected routes through the symlink.

## Content layout

A deck is any folder holding a `slides/` directory. Anything outside `slides/` is
never treated as a deck, so loose notes stay invisible.

```
src/content/decks/
└── <deck>/
    └── <session>/
        ├── _meta.yaml       # id, title, tags, reveal overrides
        ├── _images/         # referenced as ../_images/foo.svg from slides/
        ├── slides/          # 01-intro.md, 02-….md, concatenated in order
        ├── exercices/       # optional, one page per file
        └── corrections/     # optional, one page per file
```

Slide separators follow Reveal: `---` starts a horizontal slide, `--` a vertical
one, and `Note:` holds speaker notes.

## What the demo shows

| Slide | Capability |
|---|---|
| Ateliers et corrigés | cards linking to exercise and correction pages |
| Code TypeScript / PHP | syntax highlighting |
| Mermaid ×4 | flowcharts and a sequence diagram, per-slide background |
| Images | single image, two columns, oversized image scaled down |
| Tableaux | default and `compact-table` density |
| Liste compacte, Densité réduite | density classes |
| Slide surchargée | automatic resizing when content overflows |

## Useful slide classes

`title-slide`, `center`, `compact-list`, `compact-quote`, `compact-table`,
`small-content`, `smaller-content`, `smallest-content`, `two-columns`.

A title slide needs a real background, otherwise its white type is invisible:

```markdown
<!-- .slide: class="title-slide center" data-background-gradient="linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)" -->
```

Diagram backgrounds are per slide:

```markdown
<!-- .slide: style="--mermaid-bg: transparent;" -->
```

## PDF export

Start the server first, then export. Output lands in `public/pdf/<deck>/`.

```bash
npm run preview
npm run pdf:all
npm run pdf -- slides demo/session-1
```

## Configuration

`astro.config.mjs` needs nothing beyond the integration. Options: `collection`,
`contentBase`, `exercises`, `corrections`, `homePage`, `reveal`.

```js
integrations: [deck()]
```
