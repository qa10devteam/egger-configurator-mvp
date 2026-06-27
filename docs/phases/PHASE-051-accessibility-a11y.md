# Faza 51 — Accessibility (a11y)

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-051 |
| **Kategoria** | Advanced Features |
| **Priorytet** | Full |
| **Szacowany czas** | 3h |
| **Zaleznosci** | PHASE-003, PHASE-004, PHASE-030 |

---

## Opis

WCAG 2.1 AA compliance - ARIA, keyboard, screen reader, contrast.

---

## Stack technologiczny

- ARIA
- axe-core
- eslint-plugin-jsx-a11y

---

## Zadania

1. ARIA labels on all interactive elements
2. Tab order logical (left-right, top-bottom)
3. Focus indicators visible (2px ring)
4. Screen reader: 3D scene aria-label
5. Skip links: Skip to main content
6. Color contrast >= 4.5:1
7. Reduced motion preference support
8. Form labels associated
9. Error announcements: aria-live

---

## Kryteria akceptacji

- [ ] axe-core audit: zero violations
- [ ] Tab navigation covers all interactive
- [ ] Focus ring visible on all focusable
- [ ] Screen reader announces 3D content
- [ ] Skip link works
- [ ] Contrast passes all text

---

## Ryzyka

- 3D content inherently inaccessible
- Complex widgets (slider) a11y tricky

---

## Pliki do utworzenia/zmodyfikowania

```
src/shared/components/SkipLink.tsx
.eslintrc (jsx-a11y plugin)
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 51/80 | Advanced Features | Full*
