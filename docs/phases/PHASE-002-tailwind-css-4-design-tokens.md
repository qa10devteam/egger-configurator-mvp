# Faza 02 — Tailwind CSS 4 + Design Tokens

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-002 |
| **Kategoria** | Foundation |
| **Priorytet** | MVP |
| **Szacowany czas** | 1.5h |
| **Zaleznosci** | PHASE-001 |

---

## Opis

System designu oparty o Tailwind CSS 4 z tokenami kolorow i typografii Egger.

---

## Stack technologiczny

- Tailwind CSS 4
- PostCSS
- CSS Custom Properties

---

## Zadania

1. Instalacja Tailwind CSS 4 + @tailwindcss/vite
2. Konfiguracja tailwind.config.ts z rozszerzeniem kolorow Egger
3. Definicja CSS Custom Properties (--color-egger-navy: #1B365D, --color-egger-orange: #E8830C)
4. Typography scale: heading (Inter 700/600), body (Inter 400/500), mono (JetBrains Mono)
5. Spacing scale dopasowany do grid 8px
6. Dark mode support via class strategy
7. Bazowy globals.css z reset + custom utilities

---

## Kryteria akceptacji

- [ ] Tailwind classes renderuja sie poprawnie
- [ ] Kolory Egger dostepne jako bg-egger-navy, text-egger-orange
- [ ] Dark mode toggle zmienia theme bez FOUC
- [ ] Font Inter zaladowany z Google Fonts (display: swap)
- [ ] Brak unused CSS w production build

---

## Ryzyka

- Tailwind 4 breaking changes vs 3.x plugins
- Font loading CLS

---

## Pliki do utworzenia/zmodyfikowania

```
tailwind.config.ts
postcss.config.js
src/styles/globals.css
src/styles/tokens.css
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 2/80 | Foundation | MVP*
