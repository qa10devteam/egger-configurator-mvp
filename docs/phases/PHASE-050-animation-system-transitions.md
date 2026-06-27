# Faza 50 — Animation System (Transitions)

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-050 |
| **Kategoria** | UX Polish |
| **Priorytet** | Beta |
| **Szacowany czas** | 4h |
| **Zaleznosci** | PHASE-004, PHASE-009, PHASE-011, PHASE-032 |

---

## Opis

Smooth transitions - Framer Motion UI, lerp 3D, micro-interactions.

---

## Stack technologiczny

- Framer Motion
- Three.js lerp
- react-spring

---

## Zadania

1. Framer Motion: page transitions, panel open/close
2. 3D: dimension change = smooth morph (lerp 300ms)
3. Material swap: crossfade textures
4. Exploded view: spring physics
5. Camera presets: smooth orbit
6. Micro-interactions: button scale, hover lift, focus glow
7. List: stagger children enter
8. Loading to content: fade-in + slide up
9. Respect prefers-reduced-motion

---

## Kryteria akceptacji

- [ ] Page transitions smooth
- [ ] 3D morph visually pleasant
- [ ] Material crossfade (no pop)
- [ ] All animations < 300ms
- [ ] Reduced motion: no animations
- [ ] No jank during transitions

---

## Ryzyka

- Animation performance on low-end
- Framer Motion bundle size

---

## Pliki do utworzenia/zmodyfikowania

```
src/shared/components/PageTransition.tsx
src/features/viewer3d/hooks/useModelTransition.ts
src/shared/utils/motionConfig.ts
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 50/80 | UX Polish | Beta*
