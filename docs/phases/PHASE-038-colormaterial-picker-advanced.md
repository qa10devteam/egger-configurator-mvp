# Faza 38 — Color/Material Picker (Advanced)

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-038 |
| **Kategoria** | UX Polish |
| **Priorytet** | Beta |
| **Szacowany czas** | 3h |
| **Zaleznosci** | PHASE-013, PHASE-012, PHASE-011 |

---

## Opis

Zaawansowany picker - compare mode, per-face apply, texture zoom.

---

## Stack technologiczny

- React
- Three.js
- shadcn/ui

---

## Zadania

1. Compare mode: 2 materials side by side split model
2. Click face in 3D - MaterialSelector for that face
3. Zoom texture: hover shows 1:1 grain detail
4. Structure preview: ST10 vs ST12 visual comparison
5. Color harmony: suggest matching decors (Egger collections)
6. Apply to all / apply to selected face
7. Recently + favorites quick-access bar

---

## Kryteria akceptacji

- [ ] Compare mode shows split correctly
- [ ] Click face selects only that face
- [ ] Zoom shows texture detail clearly
- [ ] Harmony suggestions are relevant
- [ ] Apply to all/single works
- [ ] Quick access bar accessible

---

## Ryzyka

- Split model rendering complexity
- Face selection raycasting accuracy

---

## Pliki do utworzenia/zmodyfikowania

```
src/features/configurator/components/AdvancedMaterialPicker.tsx
src/features/viewer3d/hooks/useFaceSelection.ts
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 38/80 | UX Polish | Beta*
