# Faza 61 — Component Library Documentation (Storybook)

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-061 |
| **Kategoria** | Quality and Testing |
| **Priorytet** | Full |
| **Szacowany czas** | 4h |
| **Zaleznosci** | PHASE-003, PHASE-008, PHASE-013, PHASE-015 |

---

## Opis

Storybook 8 z stories per component - variants, states, props.

---

## Stack technologiczny

- Storybook 8
- Vite builder
- autodocs

---

## Zadania

1. Storybook 8 setup (Vite builder)
2. Stories: Button, Input, Select, Slider variants
3. Stories: Card, Dialog, Tabs, Toast
4. Stories: DimensionsPanel, MaterialSelector, EdgeBandingPanel
5. Auto-generated props docs (autodocs)
6. Design tokens page
7. Interaction tests in Storybook
8. Deploy to Chromatic or Vercel

---

## Kryteria akceptacji

- [ ] 30+ stories covering all shared components
- [ ] Props auto-documented
- [ ] Interaction tests pass
- [ ] Accessible via URL
- [ ] Design tokens visible
- [ ] CI builds Storybook

---

## Ryzyka

- Storybook config conflicts Vite
- Three.js components in Storybook complex

---

## Pliki do utworzenia/zmodyfikowania

```
.storybook/main.ts
.storybook/preview.ts
src/shared/ui/Button.stories.tsx
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 61/80 | Quality and Testing | Full*
