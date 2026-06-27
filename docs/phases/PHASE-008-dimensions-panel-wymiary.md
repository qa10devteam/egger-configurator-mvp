# Faza 08 — Dimensions Panel (Wymiary)

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-008 |
| **Kategoria** | Core Configurator |
| **Priorytet** | MVP |
| **Szacowany czas** | 3h |
| **Zaleznosci** | PHASE-003, PHASE-006 |

---

## Opis

Panel UI do wprowadzania wymiarow mebla - dual control (slider + input), presets, walidacja.

---

## Stack technologiczny

- React
- Zustand
- shadcn/ui Slider + Input

---

## Zadania

1. DimensionsPanel.tsx - glowny komponent panelu wymiarow
2. Trzy wymiary: Width, Depth, Height z slider + number input
3. Dual control sync: zmiana slidera - update input i odwrotnie
4. Walidacja range: min 100mm, max 2800mm
5. Step: 1mm (input), 10mm (slider)
6. Presets: Szafka kuchenna gorna (600x350x720), Dolna (600x560x870), Biurko (1200x600x750)
7. Thickness selector: 16mm, 18mm, 25mm, 38mm
8. Live update do configuratorStore - immediate 3D re-render
9. Unit display: mm (z opcja przelaczenia na cm)
10. Visual feedback: input border red jesli out of range

---

## Kryteria akceptacji

- [ ] Slider i input zsynchronizowane bidirectionally
- [ ] Zmiana wymiaru - model 3D zmienia sie < 16ms
- [ ] Preset wybor - wypelnia wszystkie 3 wymiary
- [ ] Walidacja blokuje wartosci poza 100-2800mm
- [ ] Keyboard: Tab between inputs, Enter to confirm
- [ ] Mobile: slider touch-friendly (min 44px hit area)

---

## Ryzyka

- Slider jank during rapid changes
- Floating point precision

---

## Pliki do utworzenia/zmodyfikowania

```
src/features/configurator/components/DimensionsPanel.tsx
src/features/configurator/components/DimensionInput.tsx
src/features/configurator/hooks/useDimensions.ts
src/features/configurator/data/presets.ts
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 8/80 | Core Configurator | MVP*
