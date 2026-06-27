# Faza 64 — E2E Tests (Playwright)

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-064 |
| **Kategoria** | Quality and Testing |
| **Priorytet** | Full |
| **Szacowany czas** | 5h |
| **Zaleznosci** | PHASE-001, PHASE-005, PHASE-028, PHASE-024, PHASE-030 |

---

## Opis

End-to-end testy krytycznych flow - Playwright z CI.

---

## Stack technologiczny

- Playwright
- GitHub Actions

---

## Zadania

1. Playwright setup: config, fixtures, helpers
2. E2E: Full config (template - dimensions - material - export)
3. E2E: Save project - load - verify state
4. E2E: Order submission wizard
5. E2E: Login - dashboard - recent projects
6. E2E: Mobile viewport bottom sheet
7. E2E: Catalog search - find - apply
8. Visual regression: screenshots
9. CI: run on PR

---

## Kryteria akceptacji

- [ ] 10+ E2E scenarios passing
- [ ] Visual regression catches layout changes
- [ ] Mobile tests pass
- [ ] CI runs on every PR
- [ ] Tests stable (no flakes)
- [ ] Total runtime < 5 minutes

---

## Ryzyka

- Playwright + WebGL rendering
- CI environment differences

---

## Pliki do utworzenia/zmodyfikowania

```
playwright.config.ts
e2e/configurator.spec.ts
e2e/projects.spec.ts
e2e/orders.spec.ts
.github/workflows/e2e.yml
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 64/80 | Quality and Testing | Full*
