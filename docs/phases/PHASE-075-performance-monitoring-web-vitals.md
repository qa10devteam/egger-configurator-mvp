# Faza 75 — Performance Monitoring (Web Vitals)

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-075 |
| **Kategoria** | Optimization and Ops |
| **Priorytet** | Full |
| **Szacowany czas** | 2h |
| **Zaleznosci** | PHASE-001, PHASE-065 |

---

## Opis

Continuous tracking - LCP, INP, CLS, TTFB.

---

## Stack technologiczny

- web-vitals
- Vercel Analytics

---

## Zadania

1. web-vitals integration
2. Metrics: LCP < 2.5s, INP < 200ms, CLS < 0.1
3. Report to Vercel Analytics
4. Dashboard: Speed Insights
5. Alerts on regression
6. RUM real users
7. Performance budgets CI

---

## Kryteria akceptacji

- [ ] Metrics reported
- [ ] Dashboard trends
- [ ] Alerts fire
- [ ] RUM collected
- [ ] Budgets enforced
- [ ] History available

---

## Ryzyka

- Collection overhead
- False alerts

---

## Pliki do utworzenia/zmodyfikowania

```
src/shared/utils/webVitals.ts
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 75/80 | Optimization and Ops | Full*
