# Faza 46 — Onboarding Tour

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-046 |
| **Kategoria** | UX Polish |
| **Priorytet** | Beta |
| **Szacowany czas** | 3h |
| **Zaleznosci** | PHASE-004, PHASE-008, PHASE-013, PHASE-010, PHASE-023 |

---

## Opis

Interactive tutorial - step-by-step z highlights.

---

## Stack technologiczny

- react-joyride
- localStorage

---

## Zadania

1. react-joyride integration
2. Steps: 1.Template 2.Dimensions 3.Materials 4.3D 5.Export
3. Highlight: pulse animation on target
4. Tooltip: description + Next/Skip
5. Trigger: first visit OR Help - Start Tour
6. Progress: step X of Y
7. Dont show again: checkbox + localStorage
8. Contextual hints: ? icon per section

---

## Kryteria akceptacji

- [ ] Tour starts on first visit
- [ ] Steps highlight correct elements
- [ ] Skip ends tour, remembers preference
- [ ] Manual trigger from Help menu
- [ ] Progress shows correctly
- [ ] Hints show relevant info

---

## Ryzyka

- Element positions change - tour breaks
- Mobile layout different - steps wrong

---

## Pliki do utworzenia/zmodyfikowania

```
src/shared/components/OnboardingTour.tsx
src/shared/hooks/useOnboarding.ts
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 46/80 | UX Polish | Beta*
