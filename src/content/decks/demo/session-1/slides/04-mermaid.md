## Graphe de commits

<!-- .slide: style="--mermaid-bg: transparent;" -->

```mermaid
flowchart RL
    B((B)) --> A((A))
    C((C)) --> B
    D((D)) --> B
    E((E)) --> D

    MC(["<small>main</small>"]) -.- C
    MF(["<small>feature</small>"]) -.- E

    style A fill:#2563eb,color:#fff
    style B fill:#2563eb,color:#fff
    style C fill:#10b981,stroke:#059669,color:#fff
    style D fill:#7c3aed,stroke:#6d28d9,color:#fff
    style E fill:#7c3aed,stroke:#6d28d9,color:#fff
    style MC fill:#10b981,stroke:#059669,color:#fff
    style MF fill:#7c3aed,stroke:#6d28d9,color:#fff
```

Note: Formes rondes pour les commits, formes stade pour les étiquettes de branche.

---

## Chaîne de traitement

<!-- .slide: style="--mermaid-bg: transparent;" -->

```mermaid
flowchart LR
    subgraph SAISIE["🛒 Saisie"]
        P[Panier]
        V[Validation]
    end

    subgraph TRAITEMENT["⚙️ Traitement"]
        S[Stock]
        PA[Paiement]
    end

    subgraph SORTIE["📦 Sortie"]
        EX[Expédition]
    end

    P --> V
    V --> S
    S --> PA
    PA --> EX

    style P fill:#bbdefb,stroke:#1976d2,color:#000
    style V fill:#bbdefb,stroke:#1976d2,color:#000
    style S fill:#fff9c4,stroke:#f9a825,color:#000
    style PA fill:#fff9c4,stroke:#f9a825,color:#000
    style EX fill:#c8e6c9,stroke:#388e3c,color:#000
```

Note: Trois sous-graphes titrés avec emoji, une couleur par étape.

---

## Arbre de décision

<!-- .slide: style="--mermaid-bg: transparent;" -->

```mermaid
flowchart LR
    Q{"Stock disponible ?"}
    OK["✅ Réserver"]
    KO["⏳ Réapprovisionner"]
    EXP["📦 Expédier"]

    Q --> OK
    Q --> KO
    OK --> EXP
    KO --> EXP

    style Q fill:#f5f5f5,stroke:#9e9e9e,color:#000
    style OK fill:#c8e6c9,stroke:#388e3c,color:#000
    style KO fill:#ffcdd2,stroke:#c62828,color:#000
    style EXP fill:#2563eb,stroke:#1d4ed8,color:#fff
```

Note: L'issue est portée par le nœud, pas par un libellé de flèche.

---

## Échange entre acteurs

```mermaid
%%{init: {'sequence': {'mirrorActors': false}}}%%
sequenceDiagram
    participant C as Client
    participant A as API
    participant P as Paiement

    C->>A: valide le panier
    A->>P: demande le débit
    Note over P: 💳 Autorisation
    P-->>A: confirmation ✅
    A-->>C: commande créée 🎉
```
