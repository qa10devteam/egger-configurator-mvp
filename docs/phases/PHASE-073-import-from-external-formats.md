# Faza 73 — Import from External Formats

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-073 |
| **Kategoria** | Optimization and Ops |
| **Priorytet** | Full |
| **Szacowany czas** | 4h |
| **Zaleznosci** | PHASE-022, PHASE-021, PHASE-026 |

---

## Opis

Import DXF, CSV cutting list, JSON backup.

---

## Stack technologiczny

- dxf-parser
- Papa Parse
- Zod validation

---

## Zadania

1. Import DXF: parse - extract - populate configurator
2. Import CSV: CutList format - build parts
3. Import JSON: own format direct restore
4. Drag-drop file zone
5. Validation: format check, errors
6. Preview before confirm
7. Error report per line
8. Supported formats badge

---

## Kryteria akceptacji

- [ ] DXF import works
- [ ] CSV import creates project
- [ ] JSON restores exactly
- [ ] Validation catches bad files
- [ ] Preview shows import
- [ ] Errors actionable

---

## Ryzyka

- DXF format diversity
- CSV encoding issues

---

## Pliki do utworzenia/zmodyfikowania

```
src/features/import/components/ImportDialog.tsx
src/features/import/utils/dxfImporter.ts
src/features/import/utils/csvImporter.ts
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 73/80 | Optimization and Ops | Full*
