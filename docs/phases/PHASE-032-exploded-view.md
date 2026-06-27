# Faza 32 — Exploded View

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-032 |
| **Kategoria** | UX Polish |
| **Priorytet** | Beta |
| **Szacowany czas** | 3h |
| **Zaleznosci** | PHASE-017, PHASE-010 |

---

## Opis

Widok rozstrzelony - elementy odsunięte od siebie z animacja i labels.

---

## Stack technologiczny

- Three.js Group
- react-spring/three
- drei Html

---

## Zadania

1. Toggle button: Exploded View in toolbar
2. Animation: parts spread along local normals (spring)
3. Slider: 0% assembled to 100% exploded
4. Part labels visible in exploded mode
5. Click part - highlight + show in config
6. Assembly order numbers (1, 2, 3...) per part
7. Smooth transition 500ms

---

## Kryteria akceptacji

- [ ] Toggle animates parts outward
- [ ] Slider controls explosion distance
- [ ] Labels readable per part
- [ ] Click part highlights in panel
- [ ] Order numbers match assembly sequence
- [ ] Transition smooth (no pop)

---

## Ryzyka

- Spring physics unpredictable for complex assemblies
- Labels overlap at partial explosion

---

## Pliki do utworzenia/zmodyfikowania

```
src/features/viewer3d/components/ExplodedView.tsx
src/features/viewer3d/hooks/useExplodedView.ts
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 32/80 | UX Polish | Beta*
