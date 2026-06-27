# Faza 57 — Version History (Timeline)

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-057 |
| **Kategoria** | Advanced Features |
| **Priorytet** | Full |
| **Szacowany czas** | 3h |
| **Zaleznosci** | PHASE-026, PHASE-035 |

---

## Opis

Historia zmian - timeline, restore, diff between versions.

---

## Stack technologiczny

- React
- shadcn/ui Timeline

---

## Zadania

1. Timeline UI: vertical, newest top
2. Entry: timestamp + auto-description
3. Click entry - preview state (temp restore)
4. Restore button: make current
5. Diff view between 2 versions
6. Branch: fork from old version
7. Limit: last 50 changes

---

## Kryteria akceptacji

- [ ] Timeline shows all changes
- [ ] Preview doesnt overwrite current
- [ ] Restore makes permanent
- [ ] Diff highlights changes
- [ ] Branch creates new project
- [ ] Limit enforced

---

## Ryzyka

- Large state diffs expensive
- Preview restore confusion UX

---

## Pliki do utworzenia/zmodyfikowania

```
src/features/projects/components/VersionTimeline.tsx
src/features/projects/hooks/useVersionHistory.ts
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 57/80 | Advanced Features | Full*
