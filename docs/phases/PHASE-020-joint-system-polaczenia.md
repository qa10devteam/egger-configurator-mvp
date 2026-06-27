# Faza 20 — Joint System (Polaczenia)

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-020 |
| **Kategoria** | Furniture System |
| **Priorytet** | MVP |
| **Szacowany czas** | 4h |
| **Zaleznosci** | PHASE-006, PHASE-017 |

---

## Opis

System polaczen miedzy plytami - typ lacznika, auto-rozmieszczenie, wplyw na DXF.

---

## Stack technologiczny

- TypeScript
- Three.js dot indicators

---

## Zadania

1. JointPanel.tsx - wybor typu polaczenia
2. Typy: Konfirmat (7x50mm), Kolek (8x30mm), Minifix (15mm), Lamello
3. Global setting: domyslny typ dla calego mebla
4. Per-joint override: specific connection different type
5. Auto-placement: konfirmaty co 320mm (32mm system), min 50mm from edge
6. Kolki: co 128mm, min 40mm from edge
7. Minifix: 37mm from edge, max 2 per connection
8. Visual: small spheres/dots on model at joint positions
9. Color coding: blue=konfirmat, green=kolek, orange=minifix
10. DXF impact: joint positions to drilling coordinates
11. Joint count summary for BOM

---

## Kryteria akceptacji

- [ ] Joint type selection updates store
- [ ] Auto-placement correct per 32mm system
- [ ] Dots visible on model
- [ ] Joint count in cutting list/BOM
- [ ] Dimensions change - joints recalculate
- [ ] Per-joint override works

---

## Ryzyka

- 32mm system alignment edge cases
- Too many joints visual clutter

---

## Pliki do utworzenia/zmodyfikowania

```
src/features/configurator/components/JointPanel.tsx
src/features/configurator/utils/jointPlacer.ts
src/features/viewer3d/components/JointVisualizer.tsx
src/features/configurator/data/joint-types.ts
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 20/80 | Furniture System | MVP*
