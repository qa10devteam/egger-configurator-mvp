# Faza 13 — Material Selector UI

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-013 |
| **Kategoria** | Core Configurator |
| **Priorytet** | MVP |
| **Szacowany czas** | 4h |
| **Zaleznosci** | PHASE-003, PHASE-006, PHASE-012, PHASE-014 |

---

## Opis

Panel wyboru dekoru Egger - grid miniatur, kategorie, wyszukiwanie, favorites.

---

## Stack technologiczny

- React
- Zustand
- shadcn/ui
- fuse.js

---

## Zadania

1. MaterialSelector.tsx - glowny panel wyboru materialu
2. Grid layout: 3-4 kolumny miniatur (responsive)
3. Kategorie tabs: Drewno, Uni, Kamien, Beton, Fantazja, Wszystkie
4. Search input z autocomplete (fuse.js fuzzy match)
5. Search by: kod Egger (H3303), nazwa (Dab Hamilton), kolor
6. Miniatura: 64x64 thumbnail + kod + nazwa
7. Click miniatura - apply material to model instant
8. Favorites: heart icon - save to localStorage
9. Recently used: ostatnie 5 (sticky at top)
10. Detail modal: full texture + specifications
11. Selected state: border highlight

---

## Kryteria akceptacji

- [ ] Miniaturki renderuja sie szybko (atlas)
- [ ] Klik na dekor - material zmienia sie < 500ms
- [ ] Search znajduje po kodzie i nazwie
- [ ] Kategorie filtruja poprawnie
- [ ] Favorites persist (localStorage)
- [ ] Recently used aktualizuje sie
- [ ] Mobile: grid 2 kolumny

---

## Ryzyka

- 200+ thumbnails slow render
- Fuzzy search latency

---

## Pliki do utworzenia/zmodyfikowania

```
src/features/configurator/components/MaterialSelector.tsx
src/features/configurator/components/DecorCard.tsx
src/features/configurator/components/DecorSearch.tsx
src/features/configurator/components/DecorDetail.tsx
src/features/configurator/hooks/useMaterialSearch.ts
src/features/configurator/hooks/useFavorites.ts
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 13/80 | Core Configurator | MVP*
