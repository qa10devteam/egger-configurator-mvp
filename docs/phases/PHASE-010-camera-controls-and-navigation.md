# Faza 10 — Camera Controls and Navigation

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-010 |
| **Kategoria** | Core Configurator |
| **Priorytet** | MVP |
| **Szacowany czas** | 2.5h |
| **Zaleznosci** | PHASE-009 |

---

## Opis

Intuicyjna nawigacja kamery z presetami widokow, auto-framing i touch gestures.

---

## Stack technologiczny

- @react-three/drei OrbitControls
- spring animations

---

## Zadania

1. OrbitControls z damping (dampingFactor: 0.05)
2. Limity: minDistance 0.5, maxDistance 10, maxPolarAngle
3. Preset views: Front, Back, Top, Right, Left, Isometric
4. Zoom-to-fit: bounding box - frame object with padding
5. Auto-fit on first load + on template change
6. Double-click face - zoom to that face
7. Pan limits: nie pozwol zgubic obiektu
8. Touch: 1-finger rotate, 2-finger pan, pinch zoom
9. Mouse: left-drag rotate, right-drag pan, scroll zoom
10. View preset buttons w toolbar
11. Smooth camera transitions (lerp 500ms)

---

## Kryteria akceptacji

- [ ] Orbit smooth z dampingiem
- [ ] Preset buttons animuje kamere poprawnie
- [ ] Zoom-to-fit frames object z 20% padding
- [ ] Cannot lose object (pan limits)
- [ ] Touch gestures intuitive na iPad/iPhone
- [ ] Double-click face orbits to face side

---

## Ryzyka

- OrbitControls conflict z HTML overlays
- Touch gesture conflicts z page scroll

---

## Pliki do utworzenia/zmodyfikowania

```
src/features/viewer3d/components/CameraControls.tsx
src/features/viewer3d/components/ViewPresetToolbar.tsx
src/features/viewer3d/hooks/useCameraPresets.ts
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 10/80 | Core Configurator | MVP*
