# Faza 48 — WebSocket Real-Time Updates

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-048 |
| **Kategoria** | UX Polish |
| **Priorytet** | Beta |
| **Szacowany czas** | 3h |
| **Zaleznosci** | PHASE-007, PHASE-028 |

---

## Opis

Live updates via WebSocket - order status, DXF ready.

---

## Stack technologiczny

- WebSocket API
- reconnection logic

---

## Zadania

1. WebSocket client: native API + reconnection
2. Connect on mount (if authenticated)
3. Events: order_status_changed, dxf_generated, project_updated
4. Reconnection: exponential backoff (max 30s)
5. Connection indicator: green/red dot
6. Message queue during reconnection
7. Heartbeat: ping/pong 30s
8. Fallback: HTTP polling if WS unavailable

---

## Kryteria akceptacji

- [ ] WS connects and receives events
- [ ] Reconnects after disconnect
- [ ] Status updates appear real-time
- [ ] Indicator shows connection state
- [ ] Heartbeat keeps alive
- [ ] Fallback polling works

---

## Ryzyka

- WS not supported in some networks
- Memory leak on many events

---

## Pliki do utworzenia/zmodyfikowania

```
src/shared/api/websocket.ts
src/shared/hooks/useWebSocket.ts
src/shared/components/ConnectionIndicator.tsx
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 48/80 | UX Polish | Beta*
