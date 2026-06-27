# Faza 76 — Security Hardening

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-076 |
| **Kategoria** | Optimization and Ops |
| **Priorytet** | Full |
| **Szacowany czas** | 2.5h |
| **Zaleznosci** | PHASE-028, PHASE-007 |

---

## Opis

Frontend security - CSP, XSS, CSRF, audit.

---

## Stack technologiczny

- CSP headers
- DOMPurify
- npm audit

---

## Zadania

1. CSP headers Vercel config
2. DOMPurify user content
3. CSRF tokens requests
4. Secure cookie flags
5. npm audit zero critical
6. Dependabot auto PRs
7. 429 friendly message
8. No secrets in bundle

---

## Kryteria akceptacji

- [ ] CSP blocks inline
- [ ] XSS sanitized
- [ ] CSRF validated
- [ ] Cookies secure
- [ ] Zero critical vulns
- [ ] 429 graceful

---

## Ryzyka

- CSP breaks third-party
- Overly strict blocks features

---

## Pliki do utworzenia/zmodyfikowania

```
vercel.json headers
src/shared/utils/sanitize.ts
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 76/80 | Optimization and Ops | Full*
