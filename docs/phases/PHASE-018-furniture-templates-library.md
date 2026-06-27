# Faza 18 — Furniture Templates Library

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-018 |
| **Kategoria** | Furniture System |
| **Priorytet** | MVP |
| **Szacowany czas** | 4h |
| **Zaleznosci** | PHASE-017, PHASE-003 |

---

## Opis

Predefiniowane szablony mebli z parametrycznymi wymiarami.

---

## Stack technologiczny

- TypeScript
- Static JSON templates

---

## Zadania

1. Template: Szafka kuchenna gorna (W:600, D:350, H:720, polki: 1)
2. Template: Szafka kuchenna dolna (W:600, D:560, H:870)
3. Template: Biurko proste (W:1200, D:600, H:750, nogi: 4)
4. Template: Regal otwarty (W:800, D:300, H:2000, polki: 5)
5. Template: Komoda (W:1000, D:450, H:800, szuflady: 3)
6. Template: Szafka wisząca lazienkowa (W:600, D:250, H:500)
7. Template: Slupek wysoki (W:400, D:350, H:2100, polki: 4)
8. Template picker UI: grid z 3D thumbnails
9. Template customization: po wyborze edytuj parametry
10. Template preview on hover

---

## Kryteria akceptacji

- [ ] 7 templates zdefiniowanych poprawnie
- [ ] Wybor template - model generuje sie immediately
- [ ] Template to custom: mozna edytowac kazdy wymiar
- [ ] Template picker UX: visual, clear categories
- [ ] Correct part count and assembly per template
- [ ] Templates match 32mm system

---

## Ryzyka

- Templates too rigid
- Dimension standards differ by market

---

## Pliki do utworzenia/zmodyfikowania

```
src/features/configurator/data/templates/index.ts
src/features/configurator/data/templates/kitchen-upper.ts
src/features/configurator/data/templates/kitchen-lower.ts
src/features/configurator/data/templates/desk.ts
src/features/configurator/data/templates/bookshelf.ts
src/features/configurator/data/templates/dresser.ts
src/features/configurator/components/TemplatePicker.tsx
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 18/80 | Furniture System | MVP*
