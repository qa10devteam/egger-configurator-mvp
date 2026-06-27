# Faza 26 — Project Save/Load System

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-026 |
| **Kategoria** | Projects and Auth |
| **Priorytet** | Beta |
| **Szacowany czas** | 3h |
| **Zaleznosci** | PHASE-006, PHASE-007 |

---

## Opis

Zapisywanie i wczytywanie projektow - serialize state, auto-save, versioning.

---

## Stack technologiczny

- Zustand persist
- API backend
- localStorage drafts

---

## Zadania

1. ProjectSaveModal.tsx - name + description
2. Serialize: configuratorStore state to JSON
3. Save: POST /projects with JSON + metadata
4. Load: GET /projects/:id - restore store state
5. Auto-save draft: debounced 30s to localStorage
6. Draft indicator: Unsaved changes badge
7. Save-as: duplicate under new name
8. Version history: last 5 versions
9. Restore version: load specific version
10. Delete: with confirmation dialog
11. Metadata: name, description, timestamps, thumbnail

---

## Kryteria akceptacji

- [ ] Save creates project in backend
- [ ] Load restores exact state
- [ ] Auto-save works silently
- [ ] Draft recovery on page reload
- [ ] Version history shows 5 saves
- [ ] Delete with undo toast (5s)

---

## Ryzyka

- State schema changes break old projects
- localStorage quota

---

## Pliki do utworzenia/zmodyfikowania

```
src/features/projects/components/ProjectSaveModal.tsx
src/features/projects/hooks/useProjects.ts
src/features/projects/hooks/useAutoSave.ts
src/features/projects/utils/serializer.ts
src/features/projects/utils/migrator.ts
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 26/80 | Projects and Auth | Beta*
