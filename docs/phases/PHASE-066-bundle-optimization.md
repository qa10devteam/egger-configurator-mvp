# Faza 66 — Bundle Optimization

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-066 |
| **Kategoria** | Quality and Testing |
| **Priorytet** | Full |
| **Szacowany czas** | 3h |
| **Zaleznosci** | PHASE-001, PHASE-005, PHASE-009 |

---

## Opis

Minimal bundle - tree shaking, code splitting, selective Three.js.

---

## Stack technologiczny

- rollup-plugin-visualizer
- Vite chunking

---

## Zadania

1. Bundle analyzer: visualize composition
2. Three.js: selective imports only
3. Code splitting per route (verify)
4. Dynamic imports: DXF parser, nesting, PDF gen
5. Preload critical chunks
6. Vendor chunk: react + react-dom separate
7. Three.js chunk: separate (lazy loaded)
8. Target: < 150KB initial, < 400KB with Three.js

---

## Kryteria akceptacji

- [ ] Initial bundle < 150KB gzipped
- [ ] Three.js loaded only on configurator
- [ ] Dynamic imports work (no eager)
- [ ] Vendor chunk cached long-term
- [ ] No duplicate modules
- [ ] Analyzer report clean

---

## Ryzyka

- Dynamic import waterfalls
- Chunk too granular = many requests

---

## Pliki do utworzenia/zmodyfikowania

```
vite.config.ts (rollupOptions)
src/features/**/index.ts barrel exports
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 66/80 | Quality and Testing | Full*
