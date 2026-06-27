# Faza 65 — CI/CD Pipeline

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-065 |
| **Kategoria** | Quality and Testing |
| **Priorytet** | Full |
| **Szacowany czas** | 3h |
| **Zaleznosci** | PHASE-062, PHASE-063, PHASE-064 |

---

## Opis

Automated quality gates - GitHub Actions, previews, bundle checks.

---

## Stack technologiczny

- GitHub Actions
- Vercel
- size-limit

---

## Zadania

1. GitHub Actions: .github/workflows/ci.yml
2. Jobs: lint - typecheck - unit test - build - e2e
3. Preview deployments: Vercel per-PR
4. Bundle size check: fail if > 200KB gzipped initial
5. Lighthouse CI: performance >= 90, a11y >= 90
6. Cache: node_modules between runs
7. Parallel jobs where possible
8. Status checks: block merge if CI fails

---

## Kryteria akceptacji

- [ ] CI runs on every push/PR
- [ ] All jobs pass on clean code
- [ ] Preview URL generated per PR
- [ ] Bundle check enforced
- [ ] Lighthouse scores tracked
- [ ] Merge blocked on failure

---

## Ryzyka

- CI flakiness
- Lighthouse score instability

---

## Pliki do utworzenia/zmodyfikowania

```
.github/workflows/ci.yml
.github/workflows/lighthouse.yml
size-limit.config.js
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 65/80 | Quality and Testing | Full*
