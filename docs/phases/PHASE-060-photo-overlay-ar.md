# Faza 60 — Photo Overlay (AR)

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-060 |
| **Kategoria** | Advanced Features |
| **Priorytet** | Full |
| **Szacowany czas** | 5h |
| **Zaleznosci** | PHASE-059, PHASE-009, PHASE-011 |

---

## Opis

Nalozenie 3D mebla na zdjecie pomieszczenia - perspective matching.

---

## Stack technologiczny

- Three.js
- Canvas 2D
- Perspective matrix

---

## Zadania

1. Upload photo: drag-drop or camera
2. Perspective matching: 4 corners vanishing points
3. 3D model overlay with matching perspective
4. Scale tool: adjust size relative to photo
5. Shadow on ground plane
6. Rotation to match room angle
7. Save composition as PNG/JPG
8. Before/after split-screen

---

## Kryteria akceptacji

- [ ] Photo loads as background
- [ ] Perspective matches after 4 points
- [ ] Model overlay looks natural
- [ ] Shadow adds realism
- [ ] Save produces clean image
- [ ] Before/after comparison works

---

## Ryzyka

- Perspective matching UX complex
- Shadow not realistic enough

---

## Pliki do utworzenia/zmodyfikowania

```
src/features/room/components/PhotoOverlay.tsx
src/features/room/utils/perspectiveMatch.ts
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 60/80 | Advanced Features | Full*
