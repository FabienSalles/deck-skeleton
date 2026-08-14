# Corrigé 01 : modéliser un panier

## Solution

```typescript
type Ligne = { prix: number; quantite: number };

export function total(lignes: readonly Ligne[], remise = 0): number {
  if (remise < 0 || remise > 50) {
    throw new RangeError('remise hors bornes');
  }

  const brut = lignes.reduce((somme, ligne) => {
    if (ligne.quantite < 0) {
      throw new RangeError('quantité négative');
    }
    return somme + ligne.prix * ligne.quantite;
  }, 0);

  return brut * (1 - remise / 100);
}
```

## Points d'attention

- le panier vide renvoie zéro sans cas particulier, `reduce` s'en charge
- la remise est validée avant la boucle, pour échouer tôt
- l'erreur porte un type précis plutôt qu'un `Error` générique

## Pour aller plus loin

Remplacer le nombre par un type dédié évite de confondre un prix et une quantité,
et supprime toute une classe de bugs d'inversion d'arguments.
