# Faza 27 — Project Gallery

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-027 |
| **Kategoria** | Projects and Auth |
| **Priorytet** | Beta |
| **Szacowany czas** | 3h |
| **Zaleznosci** | PHASE-026, PHASE-003 |

---

## Opis

Lista zapisanych projektow z miniaturami 3D, sortowaniem i akcjami.

---

## Stack technologiczny

- React
- TanStack Table
- Three.js thumbnails

---

## Zadania

1. ProjectList.tsx - grid/list view toggle
2. ProjectCard.tsx - thumbnail, name, material, date, actions
3. 3D Thumbnail: render scene to canvas.toDataURL()
4. Generate thumbnail on save
5. Grid view: 3-4 columns
6. List view: table with columns
7. Sort: by date, name, material
8. Filter: by material, date range
9. Actions: Open, Duplicate, Rename, Delete
10. Empty state: Create your first project CTA
11. Pagination: 12 per page

---

## Kryteria akceptacji

- [ ] Projects display with 3D thumbnails
- [ ] Grid/list toggle no refetch
- [ ] Sort works immediately
- [ ] Open loads project
- [ ] Duplicate creates copy
- [ ] Empty state shown

---

## Ryzyka

- 3D thumbnail generation slow
- Many projects slow gallery

---

## Pliki do utworzenia/zmodyfikowania

```
src/features/projects/components/ProjectList.tsx
src/features/projects/components/ProjectCard.tsx
src/features/projects/components/ProjectFilters.tsx
src/features/projects/utils/thumbnailGenerator.ts
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 27/80 | Projects and Auth | Beta*
