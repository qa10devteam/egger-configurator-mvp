# Faza 59 — Room Visualizer (AR-lite)

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-059 |
| **Kategoria** | Advanced Features |
| **Priorytet** | Full |
| **Szacowany czas** | 5h |
| **Zaleznosci** | PHASE-009, PHASE-011, PHASE-012, PHASE-017 |

---

## Opis

Meble w kontekscie pomieszczenia - customizable room, multiple items.

---

## Stack technologiczny

- Three.js
- @react-three/drei
- Custom room geometry

---

## Zadania

1. Room template: 4 walls + floor + ceiling (parametric)
2. Floor material picker (wood, tile, carpet)
3. Wall color picker
4. Place furniture: click in room to position
5. Multiple furniture items
6. Drag to reposition
7. Lighting: window position affects light
8. Room presets: kitchen, living, office, bedroom

---

## Kryteria akceptacji

- [ ] Room renders with walls/floor
- [ ] Floor/wall materials changeable
- [ ] Furniture places correctly
- [ ] Multiple items coexist
- [ ] Drag repositions smoothly
- [ ] Lighting realistic

---

## Ryzyka

- Room + furniture = heavy scene
- Lighting computation expensive

---

## Pliki do utworzenia/zmodyfikowania

```
src/features/room/components/RoomScene.tsx
src/features/room/components/RoomBuilder.tsx
src/features/room/hooks/useRoom.ts
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 59/80 | Advanced Features | Full*
