# Faza 43 — Toast and Notification System

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-043 |
| **Kategoria** | UX Polish |
| **Priorytet** | Beta |
| **Szacowany czas** | 1.5h |
| **Zaleznosci** | PHASE-003 |

---

## Opis

System in-app notifications - toast z auto-dismiss i stacking.

---

## Stack technologiczny

- Sonner
- shadcn toast

---

## Zadania

1. Sonner integration
2. Types: success, error, info, warning
3. Auto-dismiss: 5s, persistent for errors
4. Stack: max 3 visible
5. Actions in toast: Undo, View, Retry
6. Position: bottom-right desktop, bottom-center mobile
7. Escape dismisses top toast

---

## Kryteria akceptacji

- [ ] Toasts appear with correct styling
- [ ] Auto-dismiss after 5s
- [ ] Error toasts persist
- [ ] Stack max 3
- [ ] Actions work (undo triggers action)
- [ ] Responsive positioning

---

## Ryzyka

- Toast overlaps with bottom sheet mobile
- Too many toasts overwhelming

---

## Pliki do utworzenia/zmodyfikowania

```
src/shared/hooks/useToast.ts
src/shared/components/Toaster.tsx
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 43/80 | UX Polish | Beta*
