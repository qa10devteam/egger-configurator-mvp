# Faza 35 — Undo/Redo System

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-035 |
| **Kategoria** | UX Polish |
| **Priorytet** | Beta |
| **Szacowany czas** | 2.5h |
| **Zaleznosci** | PHASE-006 |

---

## Opis

Cofanie i ponawianie zmian - Zustand temporal middleware.

---

## Stack technologiczny

- zundo
- Zustand

---

## Zadania

1. Install zundo (zustand temporal)
2. Track: dimensions, material, edges, hardware changes
3. Keyboard: Ctrl+Z undo, Ctrl+Shift+Z redo
4. Toolbar buttons with disabled state
5. Max history: 50 states
6. Batch: rapid slider changes debounced into single step
7. Visual: toast Undone: material change

---

## Kryteria akceptacji

- [ ] Undo reverts last change
- [ ] Redo re-applies
- [ ] Keyboard shortcuts work
- [ ] Buttons disabled when empty
- [ ] Slider debouncing works
- [ ] History bounded at 50

---

## Ryzyka

- Large state objects in history (memory)
- Complex object diffing

---

## Pliki do utworzenia/zmodyfikowania

```
src/features/configurator/store/useHistory.ts
src/shared/components/UndoRedoButtons.tsx
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 35/80 | UX Polish | Beta*
