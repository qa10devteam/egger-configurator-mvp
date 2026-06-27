# Faza 06 — Zustand Store Architecture

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-006 |
| **Kategoria** | Foundation |
| **Priorytet** | MVP |
| **Szacowany czas** | 3h |
| **Zaleznosci** | PHASE-001 |

---

## Opis

Centralny state management - Zustand stores z persist, devtools, i temporal (undo/redo).

---

## Stack technologiczny

- Zustand 5
- zustand/middleware (persist, devtools)
- immer

---

## Zadania

1. Instalacja Zustand + immer middleware
2. configuratorStore.ts - dimensions, material, edges, hardware, joints, template
3. uiStore.ts - sidebar open, active panel, modals, toasts
4. projectStore.ts - lista projektow, active project, dirty flag
5. authStore.ts - user, token, isAuthenticated
6. Middleware: persist to localStorage
7. Middleware: devtools (Redux DevTools integration)
8. Selektory z useShallow (avoid unnecessary re-renders)
9. Actions: setDimensions, setMaterial, setEdge, resetConfig, loadTemplate

---

## Kryteria akceptacji

- [ ] Store zmiany widoczne w Redux DevTools
- [ ] Persist: refresh page zachowuje state
- [ ] Zmiana dimensions - model re-renders < 16ms
- [ ] No unnecessary re-renders (React Profiler)
- [ ] Full type safety na store i selektorach
- [ ] Actions are atomic

---

## Ryzyka

- Persist serialization issues
- localStorage size limit (5MB)

---

## Pliki do utworzenia/zmodyfikowania

```
src/features/configurator/store/configuratorStore.ts
src/features/configurator/store/uiStore.ts
src/features/configurator/store/projectStore.ts
src/features/auth/store/authStore.ts
src/features/configurator/types/configurator.types.ts
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 6/80 | Foundation | MVP*
