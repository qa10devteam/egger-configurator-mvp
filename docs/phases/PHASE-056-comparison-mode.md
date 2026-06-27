# Faza 56 — Comparison Mode

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-056 |
| **Kategoria** | Advanced Features |
| **Priorytet** | Full |
| **Szacowany czas** | 3h |
| **Zaleznosci** | PHASE-027, PHASE-009, PHASE-006 |

---

## Opis

Porownanie 2 konfiguracji side-by-side - sync cameras, diff.

---

## Stack technologiczny

- React
- Three.js dual Canvas

---

## Zadania

1. Split view: 2 Canvas side by side
2. Load 2 projects from gallery OR current vs saved
3. Sync cameras: orbit one follows other
4. Diff table: highlight differences
5. Winner indicator: cheaper/less waste
6. Use this one button per side
7. Fullscreen toggle per side

---

## Kryteria akceptacji

- [ ] Two canvases render correctly
- [ ] Camera sync smooth
- [ ] Diff highlights real differences
- [ ] Use this loads selected config
- [ ] Fullscreen works per side
- [ ] Responsive: stack on mobile

---

## Ryzyka

- Dual Canvas performance (2x GPU)
- Camera sync edge cases

---

## Pliki do utworzenia/zmodyfikowania

```
src/features/configurator/components/ComparisonMode.tsx
src/features/viewer3d/hooks/useSyncedCameras.ts
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 56/80 | Advanced Features | Full*
