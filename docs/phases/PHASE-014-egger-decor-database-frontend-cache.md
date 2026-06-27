# Faza 14 — Egger Decor Database (Frontend Cache)

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-014 |
| **Kategoria** | Core Configurator |
| **Priorytet** | MVP |
| **Szacowany czas** | 3h |
| **Zaleznosci** | PHASE-001 |

---

## Opis

Lokalna baza 200+ dekorow Egger z metadanymi - kody, nazwy, struktury, grubosci, tekstury.

---

## Stack technologiczny

- TypeScript
- Static JSON
- Tree-shaking per category

---

## Zadania

1. Struktura danych: Decor { code, name, category, structure, thicknesses[], texture_thumb, texture_hires, edge_code, color_hex }
2. Kategorie: wood (80+), uni (50+), stone (20+), concrete (15+), fantasy (30+)
3. Popularne dekory: H3303 ST10 (Dab Hamilton), U999 ST2 (Czarny), W1000 ST9 (Bialy Premium)
4. Struktury: ST2 (Pearl), ST9 (Smoothtouch), ST10 (Deepskin), ST12 (Rustico), ST28 (Diamant), ST76 (Feelwood)
5. Grubosci per dekor: subset z [8, 16, 18, 19, 25, 28, 38]mm
6. Matching edge bands per dekor (ABS 23x0.4, 23x2, 43x2)
7. Static import z lazy-loading per category
8. Index: Map for O(1) lookup
9. Search index: pre-built for fuse.js

---

## Kryteria akceptacji

- [ ] 200+ dekorow z pelnymi metadanymi
- [ ] Lookup by code: O(1) instant
- [ ] Category filter returns matching
- [ ] Structure info prawidlowe
- [ ] Edge band matching poprawne
- [ ] Bundle: lazy per category (initial = 20 popular)

---

## Ryzyka

- Egger catalog changes yearly
- Texture URLs may change

---

## Pliki do utworzenia/zmodyfikowania

```
src/features/catalog/data/decors.ts
src/features/catalog/data/wood.ts
src/features/catalog/data/uni.ts
src/features/catalog/data/stone.ts
src/features/catalog/data/structures.ts
src/features/catalog/types/decor.types.ts
src/features/catalog/hooks/useCatalog.ts
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 14/80 | Core Configurator | MVP*
