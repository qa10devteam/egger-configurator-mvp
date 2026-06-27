# Faza 30 — Responsive Design (Mobile First)

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-030 |
| **Kategoria** | UX Polish |
| **Priorytet** | Beta |
| **Szacowany czas** | 5h |
| **Zaleznosci** | PHASE-004, PHASE-008, PHASE-009, PHASE-010, PHASE-013, PHASE-015 |

---

## Opis

Pelne UX na mobile i tablet - bottom sheet configurator, touch controls, adaptive layout.

---

## Stack technologiczny

- Tailwind responsive
- react-spring bottom sheet
- Touch events

---

## Zadania

1. Mobile (<768px): 3D viewer full-width + bottom sheet config
2. Bottom sheet: draggable (peek 80px, half 50%, full 90%)
3. Tablet (768-1279px): sidebar collapses to icon rail
4. Touch-optimized: all elements 44px+ hit area
5. Bottom nav bar (mobile): Home, Configure, Catalog, Projects, More
6. Swipe gestures between config panels
7. 3D controls: larger touch targets
8. Text scaling: min 16px body
9. Number inputs: numeric keyboard mobile
10. Landscape mobile: viewer left, config right
11. Safe areas: env(safe-area-inset-*)

---

## Kryteria akceptacji

- [ ] Usable on iPhone SE
- [ ] Bottom sheet smooth spring physics
- [ ] All features accessible mobile
- [ ] 3D doesnt conflict page scroll
- [ ] Tab bar with active state
- [ ] No horizontal overflow

---

## Ryzyka

- 3D touch conflicts system gestures
- Bottom sheet + keyboard viewport

---

## Pliki do utworzenia/zmodyfikowania

```
src/shared/layout/MobileLayout.tsx
src/shared/layout/BottomSheet.tsx
src/shared/layout/BottomNav.tsx
src/shared/layout/IconRail.tsx
src/shared/hooks/useMediaQuery.ts
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 30/80 | UX Polish | Beta*
