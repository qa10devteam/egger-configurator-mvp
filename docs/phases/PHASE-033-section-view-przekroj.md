# Faza 33 — Section View (Przekroj)

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-033 |
| **Kategoria** | UX Polish |
| **Priorytet** | Beta |
| **Szacowany czas** | 3h |
| **Zaleznosci** | PHASE-009, PHASE-017 |

---

## Opis

Przekroj mebla - clipping plane z hatch i axis control.

---

## Stack technologiczny

- Three.js ClippingPlane
- Custom shader hatch

---

## Zadania

1. Three.js renderer.clippingPlanes
2. Axis selector: X, Y, Z buttons
3. Slider: plane position along axis
4. Cross-section fill: hatch pattern on cut faces
5. Toggle on/off in toolbar
6. Material visible on cut face
7. Clip only furniture, not environment

---

## Kryteria akceptacji

- [ ] Clipping works on all axes
- [ ] Slider moves plane smoothly
- [ ] Hatch pattern visible on cut
- [ ] Toggle hides/shows clip
- [ ] Environment unaffected
- [ ] Performance stable with clip active

---

## Ryzyka

- Hatch shader complexity
- Stencil buffer issues mobile

---

## Pliki do utworzenia/zmodyfikowania

```
src/features/viewer3d/components/SectionView.tsx
src/features/viewer3d/shaders/hatch.glsl
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 33/80 | UX Polish | Beta*
