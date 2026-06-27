# Faza 39 — Pricing Calculator

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-039 |
| **Kategoria** | UX Polish |
| **Priorytet** | Beta |
| **Szacowany czas** | 3h |
| **Zaleznosci** | PHASE-006, PHASE-014, PHASE-015, PHASE-019, PHASE-020 |

---

## Opis

Kalkulacja ceny real-time - materialy, obrzeza, okucia, CNC.

---

## Stack technologiczny

- TypeScript
- Recharts pie chart

---

## Zadania

1. Price database: PLN per m2 per dekor
2. Edge banding: price per running meter
3. Hardware: unit prices per fitting
4. CNC fee: per cut, per drilling
5. Total breakdown UI: pie chart + line items
6. Currency toggle: PLN / EUR
7. Discount field: percentage or fixed
8. VAT toggle: netto / brutto
9. Real-time updates on config change

---

## Kryteria akceptacji

- [ ] Price updates instantly on change
- [ ] Breakdown shows all categories
- [ ] Currency toggle works
- [ ] VAT calculation correct
- [ ] Discount applies correctly
- [ ] Total matches sum of parts

---

## Ryzyka

- Price data accuracy
- Currency exchange rate stale

---

## Pliki do utworzenia/zmodyfikowania

```
src/features/configurator/components/PricingPanel.tsx
src/features/configurator/utils/priceCalculator.ts
src/features/configurator/data/prices.ts
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 39/80 | UX Polish | Beta*
