# Faza 23 — Export System (DXF + PDF + CSV)

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-023 |
| **Kategoria** | Export and Orders |
| **Priorytet** | MVP |
| **Szacowany czas** | 4h |
| **Zaleznosci** | PHASE-021, PHASE-022, PHASE-007 |

---

## Opis

Multi-format export - DXF techniczny, PDF summary, CSV lista rozkroju.

---

## Stack technologiczny

- jsPDF
- html2canvas
- Papa Parse
- FileSaver.js

---

## Zadania

1. ExportPanel.tsx - przyciski export
2. DXF Export: POST to /configure - download response
3. PDF Export: jsPDF - page 1: 3D screenshot + wymiary, page 2: cutting list, page 3: BOM
4. Header: Egger logo + project name + date
5. Footer: page numbers + version
6. CSV Export: cutting list format CutList Optimizer
7. Progress indicator during generation
8. Batch export: all formats at once
9. Email option: send PDF via backend
10. File naming: {project}_{date}_{format}.ext

---

## Kryteria akceptacji

- [ ] DXF downloads (valid in AutoCAD/FreeCAD)
- [ ] PDF generates A4 readable
- [ ] CSV imports in CutList Optimizer
- [ ] Progress bar shows
- [ ] All 3 formats correct data
- [ ] Email delivery works

---

## Ryzyka

- PDF layout breaking long lists
- DXF generation timeout

---

## Pliki do utworzenia/zmodyfikowania

```
src/features/export/components/ExportPanel.tsx
src/features/export/utils/pdfGenerator.ts
src/features/export/utils/csvExporter.ts
src/features/export/hooks/useExport.ts
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 23/80 | Export and Orders | MVP*
