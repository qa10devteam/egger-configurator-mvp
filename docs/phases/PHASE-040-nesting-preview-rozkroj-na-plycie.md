# Faza 40 — Nesting Preview (Rozkroj na plycie)

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-040 |
| **Kategoria** | UX Polish |
| **Priorytet** | Beta |
| **Szacowany czas** | 5h |
| **Zaleznosci** | PHASE-021, PHASE-017 |

---

## Opis

Wizualizacja rozkroju na standardowej plycie 2800x2070mm.

---

## Stack technologiczny

- Canvas 2D
- Bin packing algorithm
- React

---

## Zadania

1. 2D Canvas: plate 2800x2070mm scaled
2. Bin packing: first-fit decreasing (FFD)
3. Grain direction constraint
4. Parts placed with 4mm saw kerf
5. Color coding per part + label
6. Waste calculation (% unused)
7. Multiple plates if needed
8. Zoom/pan on 2D view
9. Optimization score (minimize waste)
10. Print nesting layout

---

## Kryteria akceptacji

- [ ] Parts placed correctly on plate
- [ ] Grain direction respected
- [ ] Kerf gap between parts
- [ ] Waste % calculated accurately
- [ ] Multiple plates when overflow
- [ ] Zoom/pan smooth

---

## Ryzyka

- Bin packing NP-hard (heuristic only)
- Grain constraint reduces efficiency

---

## Pliki do utworzenia/zmodyfikowania

```
src/features/export/components/NestingPreview.tsx
src/features/export/utils/binPacking.ts
src/features/export/utils/nestingOptimizer.ts
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 40/80 | UX Polish | Beta*
