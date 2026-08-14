# Atelier 01 : modéliser un panier

## Contexte

Une boutique en ligne fictive vend des articles à l'unité. Le panier doit calculer
un total, appliquer une remise et refuser les quantités négatives.

## Objectif

Écrire le type `Panier` et la fonction `total`, en partant des tests fournis.

## Étapes

1. Créer le type `Ligne` avec un prix et une quantité
2. Écrire `total` qui somme les lignes
3. Ajouter la remise, exprimée en pourcentage
4. Refuser une quantité négative

## Contraintes

| Règle | Valeur attendue |
|---|---|
| Panier vide | total à zéro |
| Remise maximale | 50 % |
| Quantité négative | erreur explicite |

## Point de départ

```typescript
type Ligne = { prix: number; quantite: number };

export function total(lignes: readonly Ligne[]): number {
  throw new Error('à implémenter');
}
```
