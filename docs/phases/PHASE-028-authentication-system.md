# Faza 28 — Authentication System

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-028 |
| **Kategoria** | Projects and Auth |
| **Priorytet** | Beta |
| **Szacowany czas** | 4h |
| **Zaleznosci** | PHASE-005, PHASE-007, PHASE-003 |

---

## Opis

Login/register/session z JWT, protected routes, password reset.

---

## Stack technologiczny

- JWT
- httpOnly cookies
- Zustand authStore
- React Router guards

---

## Zadania

1. LoginForm.tsx - email + password + remember me + forgot link
2. RegisterForm.tsx - name, email, company, password, confirm
3. Auth flow: POST /auth/login - JWT in httpOnly cookie
4. Token refresh: background before expiry
5. AuthProvider.tsx - context with user + logout
6. Protected routes: redirect /login if no token
7. Password reset: email flow
8. ProfileMenu.tsx - avatar + dropdown (profile, settings, logout)
9. Social login buttons (Google, future)
10. Logout: clear token + store + redirect
11. Remember me: persistent vs session token

---

## Kryteria akceptacji

- [ ] Login valid credentials - redirect dashboard
- [ ] Invalid - generic error message
- [ ] Register creates account - auto login
- [ ] Token refresh transparent
- [ ] Protected routes redirect
- [ ] Logout clears state

---

## Ryzyka

- Token storage security (XSS vs CSRF)
- Refresh token race conditions

---

## Pliki do utworzenia/zmodyfikowania

```
src/features/auth/components/LoginForm.tsx
src/features/auth/components/RegisterForm.tsx
src/features/auth/components/ProfileMenu.tsx
src/features/auth/components/PasswordReset.tsx
src/features/auth/hooks/useAuth.ts
src/app/providers/AuthProvider.tsx
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 28/80 | Projects and Auth | Beta*
