# Faza 54 — Admin Panel (Catalog Management)

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-054 |
| **Kategoria** | Advanced Features |
| **Priorytet** | Full |
| **Szacowany czas** | 5h |
| **Zaleznosci** | PHASE-028, PHASE-014, PHASE-005 |

---

## Opis

Panel admina - zarzadzanie katalogiem, cenami, uzytkownikami.

---

## Stack technologiczny

- React
- TanStack Table
- Role-based access

---

## Zadania

1. Admin route /admin/* (role check)
2. Decor CRUD: add/edit/delete with texture upload
3. Bulk import CSV
4. User management: list, roles, deactivate
5. Price management: bulk update
6. Audit log: who changed what
7. Dashboard: system stats
8. Settings: email templates, API keys

---

## Kryteria akceptacji

- [ ] Admin-only access enforced
- [ ] CRUD works for decors
- [ ] CSV import processes correctly
- [ ] User roles changeable
- [ ] Audit log records all changes
- [ ] Non-admins get 403

---

## Ryzyka

- Admin privilege escalation
- Bulk operations timeout

---

## Pliki do utworzenia/zmodyfikowania

```
src/features/admin/components/AdminLayout.tsx
src/features/admin/components/DecorManager.tsx
src/features/admin/components/UserManager.tsx
src/features/admin/components/AuditLog.tsx
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 54/80 | Advanced Features | Full*
