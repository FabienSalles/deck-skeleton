## Tableau aéré

| Étape | Commande | Durée |
|---|---|---|
| Construire | `npm run build` | 5 s |
| Prévisualiser | `npm run preview` | instantané |
| Exporter | `npm run pdf:all` | quelques minutes |

---

<!-- .slide: class="compact-table" -->

## Tableau dense

| Option | Défaut | Rôle |
|---|---|---|
| `collection` | `decks` | nom de la collection Astro |
| `contentBase` | `decks` | dossier sous `src/content/` |
| `exercises` | `true` | génère les pages d'atelier |
| `corrections` | `true` | génère les pages de corrigé |
| `homePage` | `true` | génère la page d'accueil |
| `reveal` | `{}` | surcharges Reveal.js |
| `--base-url` | `localhost:4321` | serveur visé à l'export |
| `--output-dir` | `public/pdf` | destination des PDF |
| `--content-dir` | `src/content/decks` | racine du contenu |
| `--concurrency` | `3` | exports simultanés |
| `--verbose` | `false` | journalisation détaillée |
| `slideClass` | — | classe appliquée à la slide |
| `notes` | — | notes présentateur |
| `transition` | `slide` | transition Reveal |
| `backgroundImage` | — | image de fond de slide |
| `backgroundColor` | — | couleur de fond de slide |
| `--mermaid-bg` | `--bg-secondary` | fond des diagrammes |

Note: Dix-sept lignes, que la classe compact-table fait tenir dans la slide.
