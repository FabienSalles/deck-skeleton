## Code TypeScript

```typescript
type Ligne = { prix: number; quantite: number };

export function total(lignes: Ligne[]): number {
  return lignes.reduce((somme, l) => somme + l.prix * l.quantite, 0);
}
```

---

## Code PHP

```php
final readonly class Montant
{
    public function __construct(private int $centimes) {}

    public function plus(self $autre): self
    {
        return new self($this->centimes + $autre->centimes);
    }
}
```
