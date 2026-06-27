# Faza 37 — Drag and Drop Parts

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-037 |
| **Kategoria** | UX Polish |
| **Priorytet** | Beta |
| **Szacowany czas** | 4h |
| **Zaleznosci** | PHASE-017, PHASE-009 |

---

## Opis

Przeciaganie elementow z katalogu na scene 3D.

---

## Stack technologiczny

- HTML5 DnD
- Three.js Raycaster

---

## Zadania

1. Draggable library items in sidebar
2. HTML5 DnD API for initiation
3. Drop zone = Canvas (detect raycasting)
4. Ghost preview: semi-transparent mesh follows cursor
5. Snap-to-grid: align to 32mm
6. Snap-to-parts: magnetic attach to faces
7. Drop - add part to assembly
8. Cancel: Escape or drop outside

---

## Kryteria akceptacji

- [ ] Drag from sidebar to canvas works
- [ ] Ghost visible during drag
- [ ] Snap-to-grid aligns correctly
- [ ] Snap-to-part attaches
- [ ] Part added to assembly on drop
- [ ] Cancel restores original state

---

## Ryzyka

- DnD API limitations with WebGL canvas
- Ghost mesh z-fighting

---

## Pliki do utworzenia/zmodyfikowania

```
src/features/configurator/components/DraggablePart.tsx
src/features/viewer3d/hooks/useDropZone.ts
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 37/80 | UX Polish | Beta*
