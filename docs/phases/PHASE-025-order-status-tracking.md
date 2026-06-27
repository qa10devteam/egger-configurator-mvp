# Faza 25 — Order Status Tracking

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-025 |
| **Kategoria** | Export and Orders |
| **Priorytet** | MVP |
| **Szacowany czas** | 3h |
| **Zaleznosci** | PHASE-007, PHASE-024 |

---

## Opis

Sledzenie statusu zamowienia - stepper UI, polling/WebSocket.

---

## Stack technologiczny

- React
- shadcn/ui
- WebSocket
- polling fallback

---

## Zadania

1. OrderTracking.tsx - status page per order
2. Stepper: Zlozone - W obrobce - Ciecie - Kontrola - Gotowe
3. Each step: timestamp + note
4. Polling: GET /orders/:id/status every 30s
5. WebSocket: order_status_changed event
6. Push notification: browser Notification API
7. Order list: /orders page
8. Filter: by status, by date
9. Order detail: full config snapshot
10. Re-order: load config back to configurator
11. Cancel: if pending (confirmation dialog)

---

## Kryteria akceptacji

- [ ] Status updates on stepper
- [ ] Polling works every 30s
- [ ] Order list correct statuses
- [ ] Re-order loads config
- [ ] Cancel only for pending
- [ ] Notification on status change

---

## Ryzyka

- WebSocket drops
- Status stuck

---

## Pliki do utworzenia/zmodyfikowania

```
src/features/export/components/OrderTracking.tsx
src/features/export/components/OrderStepper.tsx
src/features/export/components/OrderList.tsx
src/features/export/hooks/useOrderStatus.ts
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 25/80 | Export and Orders | MVP*
