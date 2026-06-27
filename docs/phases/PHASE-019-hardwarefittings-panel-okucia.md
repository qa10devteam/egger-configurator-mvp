# Faza 19 — Hardware/Fittings Panel (Okucia)

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-019 |
| **Kategoria** | Furniture System |
| **Priorytet** | MVP |
| **Szacowany czas** | 5h |
| **Zaleznosci** | PHASE-003, PHASE-006, PHASE-017 |

---

## Opis

Konfiguracja okuc - zawiasy, prowadnice, nozki, uchwyty z wizualizacja na modelu.

---

## Stack technologiczny

- React
- Zustand
- Three.js simplified fittings

---

## Zadania

1. HardwarePanel.tsx - tabs per hardware category
2. Tab Zawiasy: typ (standard 110, push-to-open, soft-close), ilosc auto
3. Tab Prowadnice: typ (rolkowe, kulkowe, full-extension), depth
4. Tab Nozki/Cokol: typ (regulowane, cokol PCV, aluminium), height
5. Tab Uchwyty: typ (bar, knob, J-profile), position, spacing
6. 3D visualization: simplified shapes at positions
7. Zawiasy: small cylinders on door edges
8. Prowadnice: thin rails inside cabinet
9. Nozki: cylinders under bottom
10. Auto-placement rules: zawiasy 100mm from top/bottom
11. Price impact: each hardware has unit price

---

## Kryteria akceptacji

- [ ] Hardware selections save to store
- [ ] 3D shows hardware positions
- [ ] Auto-quantity rules work
- [ ] Tab navigation smooth
- [ ] Price updates real-time
- [ ] Hardware visible in exploded view

---

## Ryzyka

- 3D hardware models too detailed
- Auto-placement complex for non-standard

---

## Pliki do utworzenia/zmodyfikowania

```
src/features/configurator/components/HardwarePanel.tsx
src/features/configurator/components/HingeConfig.tsx
src/features/configurator/components/DrawerSlideConfig.tsx
src/features/configurator/components/LegConfig.tsx
src/features/configurator/components/HandleConfig.tsx
src/features/viewer3d/components/HardwareVisualizer.tsx
src/features/configurator/data/hardware-catalog.ts
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 19/80 | Furniture System | MVP*
