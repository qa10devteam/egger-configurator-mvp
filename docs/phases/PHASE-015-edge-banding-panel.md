# Faza 15 — Edge Banding Panel

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-015 |
| **Kategoria** | Core Configurator |
| **Priorytet** | MVP |
| **Szacowany czas** | 4h |
| **Zaleznosci** | PHASE-003, PHASE-006, PHASE-011 |

---

## Opis

Konfiguracja obrzezy (krawedzi) plyty - per-edge toggle, grubosc, material, wizualizacja 3D.

---

## Stack technologiczny

- React
- Zustand
- Three.js edge highlighting

---

## Zadania

1. EdgeBandingPanel.tsx - panel z 4 krawedziami
2. Visual diagram: prostokat z clickable edges
3. Per-edge toggle: on/off checkbox
4. Per-edge thickness: 0.4mm, 1mm, 2mm
5. Per-edge material: default = same as face, lub custom
6. Presets: All edges, Visible edges only, None
7. 3D visualization: colored lines on model edges
8. Color coding: green = banding, gray = no banding
9. Highlight on hover: panel edge hover - 3D glow
10. Impact on cutting list: edged dimensions = netto
11. Summary: total meters of edge banding

---

## Kryteria akceptacji

- [ ] Toggle edge on/off - visual update in 3D
- [ ] Thickness affects cutting list
- [ ] Preset All edges toggles all on
- [ ] Hover panel edge - 3D edge glows
- [ ] Custom material per edge works
- [ ] Total edge meters calculated
- [ ] Mobile: diagram tappable (44px)

---

## Ryzyka

- Edge highlighting shader complexity
- Per-edge material UX complexity

---

## Pliki do utworzenia/zmodyfikowania

```
src/features/configurator/components/EdgeBandingPanel.tsx
src/features/configurator/components/EdgeDiagram.tsx
src/features/viewer3d/components/EdgeHighlight.tsx
src/features/configurator/hooks/useEdgeBanding.ts
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 15/80 | Core Configurator | MVP*
