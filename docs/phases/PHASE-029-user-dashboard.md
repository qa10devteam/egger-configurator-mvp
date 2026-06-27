# Faza 29 — User Dashboard

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-029 |
| **Kategoria** | Projects and Auth |
| **Priorytet** | Beta |
| **Szacowany czas** | 2.5h |
| **Zaleznosci** | PHASE-026, PHASE-025, PHASE-028 |

---

## Opis

Panel glowny po zalogowaniu - recent projects, active orders, quick stats.

---

## Stack technologiczny

- React
- shadcn/ui Cards
- Recharts mini charts

---

## Zadania

1. DashboardHome.tsx - overview layout
2. Welcome: Czesc {name}! with date
3. Recent Projects: last 5 with thumbnails
4. Active Orders: stepper preview, status badge
5. Quick Stats: projects count, orders count, total m2
6. Quick Actions: Nowy projekt, Kontynuuj ostatni, Przegladaj katalog
7. Mini chart: orders per month (sparkline)
8. Notifications: unread badge + dropdown
9. Responsive: stack on mobile
10. Loading: skeleton per section

---

## Kryteria akceptacji

- [ ] Dashboard loads < 2s
- [ ] Recent projects clickable - opens configurator
- [ ] Active orders correct status
- [ ] Quick actions navigate correctly
- [ ] Stats accurate
- [ ] Empty states for new users

---

## Ryzyka

- Multiple API calls waterfall
- Stats calculation complex

---

## Pliki do utworzenia/zmodyfikowania

```
src/features/dashboard/components/DashboardHome.tsx
src/features/dashboard/components/RecentProjects.tsx
src/features/dashboard/components/ActiveOrders.tsx
src/features/dashboard/components/StatsWidget.tsx
src/features/dashboard/components/QuickActions.tsx
src/features/dashboard/hooks/useDashboard.ts
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 29/80 | Projects and Auth | Beta*
