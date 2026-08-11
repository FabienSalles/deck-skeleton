## Slide volontairement surchargée

Cette slide dépasse largement la hauteur disponible. Le moteur doit réduire la taille du texte
jusqu'à ce que tout entre, sans faire apparaître de barre de défilement.

- point numéro un, avec une formulation délibérément longue pour occuper toute la largeur
- point numéro deux, tout aussi bavard, afin de pousser le contenu vers le bas
- point numéro trois, qui poursuit l'accumulation
- point numéro quatre, encore un
- point numéro cinq, on continue
- point numéro six, la slide déborde franchement maintenant
- point numéro sept, le redimensionnement doit entrer en jeu
- point numéro huit, dernière ligne de la liste

```typescript
export function strategieDeSecours(contenu: Contenu): Resultat {
  const mesure = mesurer(contenu);
  if (mesure.deborde) {
    return reduire(contenu, mesure.ratio);
  }
  return { contenu, reduit: false };
}
```

Note: Sert à vérifier les stratégies de redimensionnement, y compris sur le bloc de code.
