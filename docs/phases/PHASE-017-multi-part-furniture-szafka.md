# Faza 17 — Multi-Part Furniture (Szafka)

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-017 |
| **Kategoria** | Furniture System |
| **Priorytet** | MVP |
| **Szacowany czas** | 6h |
| **Zaleznosci** | PHASE-011, PHASE-012, PHASE-006 |

---

## Opis

System kompozycji wielu plyt w mebel - template-driven, parametric, assembly constraints.

---

## Stack technologiczny

- TypeScript
- Three.js Group
- Zustand

---

## Zadania

1. Furniture template type: { id, name, parts: Part[], constraints: Constraint[] }
2. Part type: { id, role, dimensions, position, rotation, material, edges }
3. Roles: side_left, side_right, top, bottom, back, shelf, door, drawer_front
4. Constraint system: part_a.edge = part_b.edge
5. Parametric: zmiana overall height - adjust shelf positions
6. Template: Szafka = 2 boki + gora + dol + tyl + n polek
7. FurnitureAssembly.tsx - renders Group z Part meshes
8. Each Part = independent geometry + material
9. Part selection: click part in 3D - highlight + show properties
10. Part-specific material: click part - MaterialSelector for that part
11. Auto-gap: parts positioned with 0.1mm gap
12. Assembly validation: detect overlaps/gaps

---

## Kryteria akceptacji

- [ ] Szafka renderuje sie jako 6+ elementow
- [ ] Zmiana dimensions - all parts recalculate
- [ ] Click part - highlights (emissive glow)
- [ ] Part material independent: top can differ from sides
- [ ] Adding shelf - auto-positions evenly
- [ ] Removing part - assembly recalculates

---

## Ryzyka

- Complex constraint solver performance
- Many meshes = draw call explosion

---

## Pliki do utworzenia/zmodyfikowania

```
src/features/configurator/types/furniture.types.ts
src/features/viewer3d/components/FurnitureAssembly.tsx
src/features/viewer3d/components/PartMesh.tsx
src/features/configurator/utils/constraintSolver.ts
src/features/configurator/utils/parameterizer.ts
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 17/80 | Furniture System | MVP*
