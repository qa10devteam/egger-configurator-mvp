# Faza 62 — Unit Tests (Vitest)

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-062 |
| **Kategoria** | Quality and Testing |
| **Priorytet** | Full |
| **Szacowany czas** | 5h |
| **Zaleznosci** | PHASE-001, PHASE-006, PHASE-011, PHASE-021, PHASE-039, PHASE-020 |

---

## Opis

Pokrycie testami logiki biznesowej - stores, calculations, utils.

---

## Stack technologiczny

- Vitest
- jsdom
- istanbul coverage

---

## Zadania

1. Vitest setup: config, jsdom, coverage
2. Tests: configuratorStore state transitions
3. Tests: geometryBuilder correct vertices/normals/UVs
4. Tests: cuttingListGenerator netto/brutto
5. Tests: priceCalculator totals
6. Tests: jointPlacer positions per 32mm
7. Tests: serializer roundtrip
8. Coverage target: >= 80% utils + store
9. CI: fail if coverage drops

---

## Kryteria akceptacji

- [ ] 50+ unit tests passing
- [ ] Coverage >= 80% business logic
- [ ] CI runs tests on every push
- [ ] No flaky tests
- [ ] Snapshot tests for critical outputs
- [ ] Fast: all tests < 10s

---

## Ryzyka

- Three.js geometry testing in jsdom
- Store testing with middleware

---

## Pliki do utworzenia/zmodyfikowania

```
vitest.config.ts
src/features/configurator/store/__tests__/
src/features/viewer3d/utils/__tests__/
src/features/export/utils/__tests__/
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 62/80 | Quality and Testing | Full*
