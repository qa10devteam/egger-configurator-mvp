# Faza 22 — DXF Preview Panel

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-022 |
| **Kategoria** | Export and Orders |
| **Priorytet** | MVP |
| **Szacowany czas** | 5h |
| **Zaleznosci** | PHASE-007, PHASE-017 |

---

## Opis

Podglad wygenerowanego DXF w przegladarce - parser DXF to SVG z warstwami.

---

## Stack technologiczny

- dxf-parser
- SVG/Canvas 2D
- React

---

## Zadania

1. DxfPreview.tsx - panel podgladu
2. DXF parser: load .dxf - extract entities
3. Renderer: DXF entities to SVG paths
4. Warstwy: contours (black), drilling (red), edge banding (green), dimensions (blue)
5. Layer toggle: show/hide per layer
6. Zoom/pan: mouse wheel zoom, drag to pan
7. Fit-to-view button
8. Grid background (10mm)
9. Entity info on hover
10. Download button: save .dxf
11. Compare: show dimensions on drawing
12. Status: Generating... to Ready

---

## Kryteria akceptacji

- [ ] DXF renders correctly as SVG
- [ ] Layers color-coded and toggleable
- [ ] Zoom/pan smooth
- [ ] Download saves correct .dxf
- [ ] Drilling points visible as circles
- [ ] Edge banding on correct edges

---

## Ryzyka

- DXF format variations
- Complex entities not supported

---

## Pliki do utworzenia/zmodyfikowania

```
src/features/export/components/DxfPreview.tsx
src/features/export/utils/dxfParser.ts
src/features/export/utils/dxfRenderer.ts
src/features/export/components/LayerControls.tsx
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 22/80 | Export and Orders | MVP*
