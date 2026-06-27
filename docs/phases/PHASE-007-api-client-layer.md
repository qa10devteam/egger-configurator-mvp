# Faza 07 — API Client Layer

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-007 |
| **Kategoria** | Foundation |
| **Priorytet** | MVP |
| **Szacowany czas** | 2h |
| **Zaleznosci** | PHASE-001, PHASE-006 |

---

## Opis

Typowany klient HTTP z interceptorami, retry logic i error handling.

---

## Stack technologiczny

- fetch API (native)
- TypeScript generics
- zod (response validation)

---

## Zadania

1. Bazowy api.ts - fetch wrapper z generics
2. Request interceptor: Authorization header
3. Response interceptor: parse JSON, handle 401, handle 5xx
4. Error class: ApiError { status, message, details }
5. Retry logic: exponential backoff (1s, 2s, 4s), max 3, only 5xx/network
6. Environment-based URL: VITE_API_URL
7. Typowane endpointy per feature
8. Request cancellation (AbortController)
9. Response validation z Zod schemas

---

## Kryteria akceptacji

- [ ] API calls dzialaja do backend
- [ ] 401 auto redirect to login
- [ ] Network error - retry 3x - show error toast
- [ ] Request cancelled on unmount
- [ ] TypeScript: response type inferred
- [ ] No axios dependency

---

## Ryzyka

- CORS issues Vercel frontend vs backend
- Retry on POST idempotency

---

## Pliki do utworzenia/zmodyfikowania

```
src/shared/api/client.ts
src/shared/api/endpoints.ts
src/shared/api/types.ts
src/shared/api/errors.ts
src/shared/api/schemas.ts
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 7/80 | Foundation | MVP*
