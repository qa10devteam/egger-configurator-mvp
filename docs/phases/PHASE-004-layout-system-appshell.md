# Faza 04 — Layout System (AppShell)

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-004 |
| **Kategoria** | Foundation |
| **Priorytet** | MVP |
| **Szacowany czas** | 3h |
| **Zaleznosci** | PHASE-001, PHASE-002, PHASE-003 |

---

## Opis

Responsywny layout 3-panelowy z resizable panels - fundament UI konfiguratora.

---

## Stack technologiczny

- react-resizable-panels
- CSS Grid
- Tailwind

---

## Zadania

1. Instalacja react-resizable-panels
2. AppLayout.tsx - shell wrapper z header + main content
3. Sidebar.tsx - lewa kolumna (config panels), 300px default
4. Header.tsx - logo Egger, breadcrumb, theme toggle, user menu
5. ViewerPanel.tsx - centralna sekcja na Canvas 3D (flex: 1)
6. PropertiesPanel.tsx - prawa kolumna (context-dependent)
7. CSS Grid: grid-template-columns: auto 1fr auto
8. Collapse sidebar on mobile (hamburger to drawer)
9. Footer: version, status, quick links

---

## Kryteria akceptacji

- [ ] Layout renderuje 3 panele na desktop (>1280px)
- [ ] Tablet (768-1279px): 2 panele (sidebar collapses)
- [ ] Mobile (<768px): single column, bottom sheet
- [ ] Resize dividers dzialaja smooth (no jank)
- [ ] Sidebar collapse/expand z animacja (300ms ease)
- [ ] Header sticky, nie scrolluje z contentem

---

## Ryzyka

- Resizable panels + Three.js Canvas conflict
- Mobile drawer z-index issues

---

## Pliki do utworzenia/zmodyfikowania

```
src/shared/layout/AppLayout.tsx
src/shared/layout/Sidebar.tsx
src/shared/layout/Header.tsx
src/shared/layout/ViewerPanel.tsx
src/shared/layout/PropertiesPanel.tsx
src/shared/layout/Footer.tsx
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 4/80 | Foundation | MVP*
