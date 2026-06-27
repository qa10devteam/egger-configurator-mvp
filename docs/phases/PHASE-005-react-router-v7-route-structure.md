# Faza 05 — React Router v7 + Route Structure

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-005 |
| **Kategoria** | Foundation |
| **Priorytet** | MVP |
| **Szacowany czas** | 2h |
| **Zaleznosci** | PHASE-001, PHASE-004 |

---

## Opis

Routing z code splitting, lazy loading i navigation guards.

---

## Stack technologiczny

- React Router 7
- React.lazy
- Suspense

---

## Zadania

1. Instalacja React Router v7
2. Definicja route tree w Router.tsx
3. Routes: /, /configurator, /catalog, /projects, /orders, /dashboard, /help
4. Lazy loading per route: React.lazy(() => import(...))
5. Suspense fallback: skeleton loader per route
6. 404 Not Found page
7. Error Boundary per route segment
8. Auth guard: redirect to /login if not authenticated
9. Breadcrumb generation from route hierarchy

---

## Kryteria akceptacji

- [ ] Nawigacja miedzy routes dziala (no full page reload)
- [ ] Code splitting active: chunk-per-route
- [ ] 404 page dla unknown routes
- [ ] Auth guard redirects unauthenticated users
- [ ] Browser back/forward dziala
- [ ] Deep linking works

---

## Ryzyka

- React Router 7 API changes vs v6
- Lazy chunk loading failures

---

## Pliki do utworzenia/zmodyfikowania

```
src/app/Router.tsx
src/app/routes.ts
src/pages/NotFound.tsx
src/shared/guards/AuthGuard.tsx
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 5/80 | Foundation | MVP*
