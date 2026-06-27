# Faza 11 — Parametric Box Geometry

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-011 |
| **Kategoria** | Core Configurator |
| **Priorytet** | MVP |
| **Szacowany czas** | 3h |
| **Zaleznosci** | PHASE-006, PHASE-009 |

---

## Opis

Dynamiczna geometria prostopadloscianu reagujaca na wymiary ze store.

---

## Stack technologiczny

- Three.js BufferGeometry
- @react-three/fiber
- Zustand

---

## Zadania

1. FurnitureModel.tsx - glowny komponent modelu 3D
2. Subscribe to configuratorStore.dimensions
3. Custom BufferGeometry z prawidlowymi UV coordinates
4. 6 osobnych grup (faces) - rozne materialy per face
5. Grubosc plyty (thickness) jako parametr - hollow box
6. Normalne poprawne per vertex
7. Centered: model zawsze w origin (0,0,0)
8. Scale factor: mm to scene units (1000mm = 1 unit)
9. useMemo na geometry (nie regeneruj jesli unchanged)
10. Dispose old geometry on change

---

## Kryteria akceptacji

- [ ] Model renderuje sie z poprawnymi wymiarami
- [ ] Zmiana width/depth/height - real-time update
- [ ] UV mapping poprawne (tekstura nie rozciagnieta)
- [ ] 6 face groups - osobny material per sciana
- [ ] Memory stable: geometry disposed on regeneration
- [ ] Thickness visible: model to hollow box

---

## Ryzyka

- UV seams visible at edges
- Geometry regeneration frame drops

---

## Pliki do utworzenia/zmodyfikowania

```
src/features/viewer3d/components/FurnitureModel.tsx
src/features/viewer3d/utils/geometryBuilder.ts
src/features/viewer3d/utils/uvMapping.ts
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 11/80 | Core Configurator | MVP*
