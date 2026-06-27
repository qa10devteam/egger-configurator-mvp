# Faza 42 — Dark Mode

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-042 |
| **Kategoria** | UX Polish |
| **Priorytet** | Beta |
| **Szacowany czas** | 2h |
| **Zaleznosci** | PHASE-002, PHASE-004, PHASE-009 |

---

## Opis

Pelny dark mode z adaptacja sceny 3D.

---

## Stack technologiczny

- Tailwind dark:
- CSS variables
- localStorage

---

## Zadania

1. Theme toggle button (sun/moon icon)
2. Tailwind dark: classes on all components
3. CSS variables swap (surface, text, borders)
4. 3D scene: dark background, adjusted lighting
5. System preference detection (prefers-color-scheme)
6. Persist in localStorage
7. No FOUC on page load

---

## Kryteria akceptacji

- [ ] Toggle switches theme instantly
- [ ] All components styled correctly in dark
- [ ] 3D scene adapts (dark bg, brighter lights)
- [ ] System preference auto-detected
- [ ] Persists across sessions
- [ ] No flash of wrong theme

---

## Ryzyka

- FOUC on initial load
- 3D materials look different in dark

---

## Pliki do utworzenia/zmodyfikowania

```
src/shared/hooks/useTheme.ts
src/shared/components/ThemeToggle.tsx
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 42/80 | UX Polish | Beta*
