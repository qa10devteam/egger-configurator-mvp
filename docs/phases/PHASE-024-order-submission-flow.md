# Faza 24 — Order Submission Flow

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-024 |
| **Kategoria** | Export and Orders |
| **Priorytet** | MVP |
| **Szacowany czas** | 3h |
| **Zaleznosci** | PHASE-007, PHASE-006, PHASE-039 |

---

## Opis

Multi-step flow wysylania zamowienia do Homag/CNC - review, delivery, confirmation.

---

## Stack technologiczny

- React
- shadcn/ui Steps
- Zustand
- API

---

## Zadania

1. OrderSubmitForm.tsx - multi-step wizard
2. Step 1 Review: summary configuration
3. Step 2 Delivery: address, date picker, notes
4. Step 3 Confirmation: final review + terms + submit
5. Submit: POST /submit with full payload
6. Response: success - order page, error - retry
7. Order ID display: Zamowienie #JOB-XXXXXX
8. Email confirmation (backend)
9. Loading state during submit
10. Validation per step

---

## Kryteria akceptacji

- [ ] 3-step wizard navigates correctly
- [ ] Validation prevents empty submissions
- [ ] Submit sends correct payload
- [ ] Success shows order ID
- [ ] Error allows retry
- [ ] Mobile: steps vertical, full-width

---

## Ryzyka

- Payment integration (future)
- Backend timeout

---

## Pliki do utworzenia/zmodyfikowania

```
src/features/export/components/OrderSubmitForm.tsx
src/features/export/components/OrderReviewStep.tsx
src/features/export/components/DeliveryStep.tsx
src/features/export/components/ConfirmationStep.tsx
src/features/export/hooks/useOrderSubmit.ts
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 24/80 | Export and Orders | MVP*
