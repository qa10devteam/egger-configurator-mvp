# Faza 45 — Error Handling and Boundaries

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-045 |
| **Kategoria** | UX Polish |
| **Priorytet** | Beta |
| **Szacowany czas** | 3h |
| **Zaleznosci** | PHASE-005, PHASE-007, PHASE-009 |

---

## Opis

Graceful error recovery - error boundaries, offline, user-friendly messages.

---

## Stack technologiczny

- React ErrorBoundary
- navigator.onLine

---

## Zadania

1. Global ErrorBoundary: catch + recovery UI
2. 3D ErrorBoundary: WebGL crash - fallback 2D + retry
3. API error: human-readable messages
4. Offline banner: Brak polaczenia + disable submit
5. Retry button per failed section
6. Error logging: console dev, Sentry prod
7. Form validation: inline per-field, scroll to first

---

## Kryteria akceptacji

- [ ] App never shows white screen of death
- [ ] WebGL crash shows fallback image
- [ ] API errors user-friendly (not status codes)
- [ ] Offline banner appears instantly
- [ ] Retry works without full reload
- [ ] Forms scroll to first error

---

## Ryzyka

- ErrorBoundary doesnt catch async errors
- Offline detection unreliable on some networks

---

## Pliki do utworzenia/zmodyfikowania

```
src/shared/components/ErrorBoundary.tsx
src/shared/components/WebGLFallback.tsx
src/shared/components/OfflineBanner.tsx
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 45/80 | UX Polish | Beta*
