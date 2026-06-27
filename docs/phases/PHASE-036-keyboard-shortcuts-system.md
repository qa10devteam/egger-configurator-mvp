# Faza 36 — Keyboard Shortcuts System

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-036 |
| **Kategoria** | UX Polish |
| **Priorytet** | Beta |
| **Szacowany czas** | 2h |
| **Zaleznosci** | PHASE-010, PHASE-032, PHASE-016, PHASE-035 |

---

## Opis

Power-user shortcuts z cheatsheet modal.

---

## Stack technologiczny

- react-hotkeys-hook

---

## Zadania

1. react-hotkeys-hook integration
2. 1/2/3/4 = Front/Right/Top/Iso view
3. E = toggle explode, D = toggle dimensions, G = grid
4. Ctrl+S = save, Ctrl+E = export, Ctrl+K = command palette
5. ? = shortcuts cheatsheet modal
6. Shortcuts disabled when input focused
7. Customizable (settings, future)

---

## Kryteria akceptacji

- [ ] All shortcuts trigger correct actions
- [ ] Disabled in input fields
- [ ] Cheatsheet shows all shortcuts
- [ ] Ctrl+S prevents browser save dialog
- [ ] Works on Mac (Cmd) and Windows (Ctrl)

---

## Ryzyka

- Browser shortcut conflicts
- Different keyboard layouts

---

## Pliki do utworzenia/zmodyfikowania

```
src/shared/hooks/useKeyboardShortcuts.ts
src/shared/components/ShortcutsModal.tsx
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 36/80 | UX Polish | Beta*
