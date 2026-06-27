# Faza 16 — Dimension Annotations (3D)

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-016 |
| **Kategoria** | Core Configurator |
| **Priorytet** | MVP |
| **Szacowany czas** | 3h |
| **Zaleznosci** | PHASE-009, PHASE-010, PHASE-011 |

---

## Opis

Wymiarowanie bezposrednio na modelu 3D - linie wymiarowe z etykietami mm.

---

## Stack technologiczny

- @react-three/drei Html
- Three.js Line
- CSS

---

## Zadania

1. DimensionAnnotations.tsx - overlay wymiarowy
2. Width annotation: linia + strzalki + label XXX mm (os X)
3. Depth annotation: os Z, z boku
4. Height annotation: os Y, z prawej
5. Label: drei Html component (DOM overlay w pozycji 3D)
6. Styl: bg-white/80, rounded, font-mono, text-sm
7. Auto-positioning: linie nie nachodza na model
8. Toggle visibility: przycisk Show/Hide dimensions
9. Animation: dimension value change - number ticker
10. Arrow heads na koncach linii
11. Responsive: labels scale z zoom level

---

## Kryteria akceptacji

- [ ] 3 wymiary wyswietlaja sie wokol modelu
- [ ] Labels czytelne z kazdego kata (billboarding)
- [ ] Wartosci aktualizuja sie real-time
- [ ] Toggle ukrywa/pokazuje z fade
- [ ] Labels nie przeszkadzaja w interakcji
- [ ] Poprawne przy roznych proporcjach

---

## Ryzyka

- Html overlays performance
- Label positioning edge cases

---

## Pliki do utworzenia/zmodyfikowania

```
src/features/viewer3d/components/DimensionAnnotations.tsx
src/features/viewer3d/components/DimensionLine.tsx
src/features/viewer3d/components/DimensionLabel.tsx
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 16/80 | Core Configurator | MVP*
