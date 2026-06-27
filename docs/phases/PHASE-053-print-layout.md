# Faza 53 — Print Layout

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-053 |
| **Kategoria** | Advanced Features |
| **Priorytet** | Full |
| **Szacowany czas** | 2h |
| **Zaleznosci** | PHASE-021, PHASE-023 |

---

## Opis

Profesjonalny wydruk A4 - rysunek + wymiary + lista materialow.

---

## Stack technologiczny

- @media print CSS
- jsPDF optional

---

## Zadania

1. @media print stylesheet
2. Print view: A4 portrait layout
3. Content: 3D screenshot, dimensions, materials, cutting list
4. Header: Egger logo + project + date
5. Footer: page number + version
6. Hide: nav, controls, buttons
7. Print button: window.print()
8. Multi-page for long cutting lists

---

## Kryteria akceptacji

- [ ] Print preview clean A4
- [ ] All info readable
- [ ] No interactive elements visible
- [ ] Multi-page works
- [ ] Header/footer on each page
- [ ] Print button triggers dialog

---

## Ryzyka

- Browser print inconsistencies
- Page break in wrong places

---

## Pliki do utworzenia/zmodyfikowania

```
src/styles/print.css
src/shared/components/PrintButton.tsx
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 53/80 | Advanced Features | Full*
