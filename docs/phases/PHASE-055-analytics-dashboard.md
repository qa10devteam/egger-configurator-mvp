# Faza 55 — Analytics Dashboard

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-055 |
| **Kategoria** | Advanced Features |
| **Priorytet** | Full |
| **Szacowany czas** | 4h |
| **Zaleznosci** | PHASE-028, PHASE-054 |

---

## Opis

Statystyki uzycia - popular decors, conversion funnel, activity.

---

## Stack technologiczny

- Recharts
- TanStack Query

---

## Zadania

1. Recharts library for charts
2. Metrics: configurations/day, popular decors
3. Conversion funnel: configure - export - order
4. User activity: DAU/WAU/MAU
5. Material insights: most used, avg dimensions
6. Date range picker: 7d/30d/90d/custom
7. Export stats CSV
8. Auto-refresh 5 minutes
9. Responsive charts

---

## Kryteria akceptacji

- [ ] Charts render with real data
- [ ] Funnel shows correct conversions
- [ ] Date range changes data
- [ ] Export produces valid CSV
- [ ] Charts responsive
- [ ] Auto-refresh updates data

---

## Ryzyka

- Analytics data volume
- Chart performance many data points

---

## Pliki do utworzenia/zmodyfikowania

```
src/features/admin/components/AnalyticsDashboard.tsx
src/features/admin/hooks/useAnalytics.ts
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 55/80 | Advanced Features | Full*
