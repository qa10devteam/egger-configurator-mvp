# Faza 63 — Integration Tests (React Testing Library)

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-063 |
| **Kategoria** | Quality and Testing |
| **Priorytet** | Full |
| **Szacowany czas** | 4h |
| **Zaleznosci** | PHASE-008, PHASE-013, PHASE-015, PHASE-023, PHASE-028, PHASE-018 |

---

## Opis

Testy interakcji komponentow - RTL z custom render.

---

## Stack technologiczny

- React Testing Library
- Vitest
- msw API mocking

---

## Zadania

1. Custom render: all providers wrapped
2. Test: DimensionsPanel - store update - model props
3. Test: MaterialSelector click - texture change
4. Test: EdgeBandingPanel toggle - cutting list recalc
5. Test: Export flow - mock API - file download
6. Test: Auth flow - login - redirect
7. Test: TemplatePicker - load template - dimensions
8. 30+ integration tests

---

## Kryteria akceptacji

- [ ] All integration tests pass
- [ ] API calls properly mocked (msw)
- [ ] No false positives
- [ ] Tests isolated (no state leak)
- [ ] Fast: < 30s total
- [ ] Readable test descriptions

---

## Ryzyka

- Three.js canvas mocking
- Async state updates timing

---

## Pliki do utworzenia/zmodyfikowania

```
src/test-utils/render.tsx
src/test-utils/handlers.ts
src/features/**/__tests__/*.integration.test.tsx
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 63/80 | Quality and Testing | Full*
