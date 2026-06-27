# Faza 03 — shadcn/ui Component Library Setup

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-003 |
| **Kategoria** | Foundation |
| **Priorytet** | MVP |
| **Szacowany czas** | 3h |
| **Zaleznosci** | PHASE-001, PHASE-002 |

---

## Opis

Baza komponentow UI oparta o shadcn/ui - copy-paste ownership, natywna integracja z Tailwind.

---

## Stack technologiczny

- shadcn/ui
- Radix UI primitives
- class-variance-authority
- clsx
- tailwind-merge

---

## Zadania

1. Inicjalizacja shadcn/ui (npx shadcn-ui@latest init)
2. Import komponentow: Button, Input, Label, Select, Slider, Checkbox
3. Import: Card, Dialog (Modal), Sheet, Tabs, Tooltip
4. Import: Toast (Sonner), Dropdown Menu, Command (cmdk)
5. Customizacja theme pod Egger palette (CSS variables)
6. Utility: cn() helper (clsx + tailwind-merge)
7. Komponent Spinner/Loading (custom)

---

## Kryteria akceptacji

- [ ] 15+ komponentow UI zaimportowanych i dzialajacych
- [ ] Kazdy komponent renderuje sie w Egger kolorystyce
- [ ] Komponenty sa fully accessible (ARIA, keyboard nav)
- [ ] Bundle impact: < 30KB per component (tree-shaken)
- [ ] TypeScript props exported per component

---

## Ryzyka

- shadcn/ui version conflicts z Radix
- Tailwind 4 compatibility

---

## Pliki do utworzenia/zmodyfikowania

```
components.json
src/shared/ui/button.tsx
src/shared/ui/input.tsx
src/shared/ui/select.tsx
src/shared/ui/slider.tsx
src/shared/ui/card.tsx
src/shared/ui/dialog.tsx
src/shared/ui/tabs.tsx
src/shared/ui/toast.tsx
src/lib/utils.ts
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 3/80 | Foundation | MVP*
