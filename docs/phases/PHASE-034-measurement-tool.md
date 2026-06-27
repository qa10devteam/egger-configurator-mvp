# Faza 34 — Measurement Tool

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-034 |
| **Kategoria** | UX Polish |
| **Priorytet** | Beta |
| **Szacowany czas** | 3h |
| **Zaleznosci** | PHASE-009, PHASE-010, PHASE-011 |

---

## Opis

Narzedzie pomiaru odleglosci w 3D - point-to-point z snap.

---

## Stack technologiczny

- Three.js Raycaster
- drei Html

---

## Zadania

1. Mode toggle: Measure tool active (cursor changes)
2. Click A (snap vertex/edge) - click B - show distance
3. Line + label between points (mm)
4. Multiple measurements (list panel)
5. Clear all / delete single
6. Snap indicators (dot on hover)
7. Units toggle: mm / cm / m

---

## Kryteria akceptacji

- [ ] Point-to-point measurement accurate
- [ ] Snap to vertices works
- [ ] Multiple measurements persist
- [ ] Clear all removes all lines
- [ ] Units conversion correct
- [ ] Works on mobile (tap-tap)

---

## Ryzyka

- Raycasting precision on complex geometry
- Snap detection performance

---

## Pliki do utworzenia/zmodyfikowania

```
src/features/viewer3d/components/MeasurementTool.tsx
src/features/viewer3d/hooks/useMeasurement.ts
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 34/80 | UX Polish | Beta*
