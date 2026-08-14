# Atelier 02 : le flux de commande

## Contexte

La commande traverse plusieurs états. On veut interdire les transitions illégales.

## Objectif

Décrire la machine à états puis l'implémenter.

## Transitions autorisées

```mermaid
flowchart LR
    BR["Brouillon"]
    VA["Validée"]
    EX["✅ Expédiée"]
    AN["❌ Annulée"]

    BR --> VA
    VA --> EX
    VA --> AN

    style BR fill:#f5f5f5,stroke:#9e9e9e,color:#000
    style VA fill:#bbdefb,stroke:#1976d2,color:#000
    style EX fill:#c8e6c9,stroke:#388e3c,color:#000
    style AN fill:#ffcdd2,stroke:#c62828,color:#000
```

## À produire

1. Le type des états
2. La fonction `transition(etat, action)`
3. Un test par transition interdite

## Piège

Une commande expédiée ne peut plus être annulée. Vérifiez que votre implémentation
le refuse plutôt que de l'ignorer silencieusement.
