# Faza 21 — Cutting List Generator

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-021 |
| **Kategoria** | Furniture System |
| **Priorytet** | MVP |
| **Szacowany czas** | 4h |
| **Zaleznosci** | PHASE-017, PHASE-015 |

---

## Opis

Automatyczna lista elementow do rozkroju z kalkulacja netto/brutto, kierunkiem uslojenia.

---

## Stack technologiczny

- TanStack Table
- TypeScript

---

## Zadania

1. CuttingListTable.tsx - tabela wszystkich elementow
2. Kolumny: Lp, Nazwa, Material, Dl brutto, Szer brutto, Dl netto, Szer netto, Ilosc, Obrzeza, Kierunek
3. Kalkulacja netto to brutto: dodaj grubosc obrzeza per krawedz
4. Grain direction indicator: strzalka per element
5. Auto-generate from furniture assembly
6. Grupowanie po materiale
7. Sortowanie: po materiale, wymiarze, nazwie
8. Summary row: total m2 per material
9. Export: CSV download, Copy to clipboard
10. Editable: manual override possible
11. Highlight: click row - highlight part in 3D

---

## Kryteria akceptacji

- [ ] Lista generuje sie automatycznie
- [ ] Kalkulacja netto/brutto poprawna
- [ ] Grain direction configurable
- [ ] CSV export dziala (format CutList/OptimCut)
- [ ] Click row - 3D part highlights
- [ ] Total m2 per material correct

---

## Ryzyka

- Cutting list format compatibility CNC
- Rounding errors mm

---

## Pliki do utworzenia/zmodyfikowania

```
src/features/export/components/CuttingListTable.tsx
src/features/export/utils/cuttingListGenerator.ts
src/features/export/utils/dimensionCalculator.ts
src/features/export/hooks/useCuttingList.ts
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 21/80 | Furniture System | MVP*
