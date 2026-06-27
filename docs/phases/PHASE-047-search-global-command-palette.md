# Faza 47 — Search (Global Command Palette)

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-047 |
| **Kategoria** | UX Polish |
| **Priorytet** | Beta |
| **Szacowany czas** | 3h |
| **Zaleznosci** | PHASE-003, PHASE-014, PHASE-026 |

---

## Opis

Command palette (Ctrl+K) - search decors, projects, actions.

---

## Stack technologiczny

- cmdk
- fuse.js
- shadcn Command

---

## Zadania

1. cmdk / shadcn Command component
2. Trigger: Ctrl+K or search icon
3. Categories: Dekory, Projekty, Akcje
4. Fuzzy search across categories
5. Keyboard: arrows, Enter, Escape
6. Recent searches (last 5)
7. Action results: navigate or trigger
8. Decor results: thumbnail + code + apply

---

## Kryteria akceptacji

- [ ] Opens on Ctrl+K
- [ ] Search finds across all categories
- [ ] Keyboard navigation works
- [ ] Recent searches shown on empty
- [ ] Actions execute correctly
- [ ] Fast: results < 100ms

---

## Ryzyka

- Search index size
- Keyboard shortcut conflicts

---

## Pliki do utworzenia/zmodyfikowania

```
src/shared/components/CommandPalette.tsx
src/shared/hooks/useGlobalSearch.ts
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 47/80 | UX Polish | Beta*
