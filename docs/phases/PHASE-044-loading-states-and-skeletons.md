# Faza 44 — Loading States and Skeletons

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-044 |
| **Kategoria** | UX Polish |
| **Priorytet** | Beta |
| **Szacowany czas** | 2.5h |
| **Zaleznosci** | PHASE-003, PHASE-005, PHASE-009 |

---

## Opis

UX podczas ladowania - skeletony, Suspense, progress, optimistic updates.

---

## Stack technologiczny

- React Suspense
- shadcn Skeleton
- CSS animations

---

## Zadania

1. Skeleton components: Card, Table row, Viewer, List item
2. Suspense boundaries per route
3. 3D loading: circular progress + text
4. API loading: per-query independent
5. Optimistic updates: material instant, API async
6. Image loading: blur-up (low to high res)
7. First load: splash screen Egger logo (max 2s)

---

## Kryteria akceptacji

- [ ] No blank screens ever
- [ ] Skeletons match final layout
- [ ] 3D shows progress during texture load
- [ ] Optimistic feel instant
- [ ] Splash disappears < 2s
- [ ] Blur-up smooth transition

---

## Ryzyka

- Skeleton mismatch with real layout
- Suspense waterfall between boundaries

---

## Pliki do utworzenia/zmodyfikowania

```
src/shared/ui/skeleton.tsx
src/shared/components/SplashScreen.tsx
src/shared/components/ViewerLoader.tsx
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 44/80 | UX Polish | Beta*
