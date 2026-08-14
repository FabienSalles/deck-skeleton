# Corrigé 02 : le flux de commande

## Solution

```typescript
type Etat = 'Brouillon' | 'Validee' | 'Expediee' | 'Annulee';
type Action = 'valider' | 'expedier' | 'annuler';

const TRANSITIONS: Record<Etat, Partial<Record<Action, Etat>>> = {
  Brouillon: { valider: 'Validee' },
  Validee: { expedier: 'Expediee', annuler: 'Annulee' },
  Expediee: {},
  Annulee: {},
};

export function transition(etat: Etat, action: Action): Etat {
  const suivant = TRANSITIONS[etat][action];

  if (suivant === undefined) {
    throw new Error(`transition interdite : ${etat} → ${action}`);
  }

  return suivant;
}
```

## Pourquoi une table plutôt que des conditions

La table rend les transitions autorisées lisibles d'un coup d'œil, et les états
terminaux se déclarent par un objet vide au lieu d'une absence de branche.

| Depuis | Action | Vers |
|---|---|---|
| Brouillon | valider | Validee |
| Validee | expédier | Expediee |
| Validee | annuler | Annulee |
| Expediee | toute action | refusée |
