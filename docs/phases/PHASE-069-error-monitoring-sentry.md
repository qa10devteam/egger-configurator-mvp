# Faza 69 — Error Monitoring (Sentry)

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-069 |
| **Kategoria** | Optimization and Ops |
| **Priorytet** | Full |
| **Szacowany czas** | 2h |
| **Zaleznosci** | PHASE-001, PHASE-045 |

---

## Opis

Real-time error tracking - Sentry SDK, source maps, performance.

---

## Stack technologiczny

- @sentry/react
- @sentry/vite-plugin

---

## Zadania

1. Sentry SDK integration
2. DSN from env variable
3. Source maps upload on build
4. ErrorBoundary - Sentry.captureException
5. Performance transactions per route
6. User context: email/id attached
7. Breadcrumbs: API calls, clicks, routes
8. Alert rules: Slack on new error

---

## Kryteria akceptacji

- [ ] Errors in Sentry dashboard
- [ ] Source maps resolve correctly
- [ ] Performance tracked
- [ ] User identified
- [ ] Alerts fire
- [ ] No PII leak

---

## Ryzyka

- Source map security
- Sentry bundle overhead

---

## Pliki do utworzenia/zmodyfikowania

```
src/shared/utils/sentry.ts
vite.config.ts (sentry plugin)
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 69/80 | Optimization and Ops | Full*
