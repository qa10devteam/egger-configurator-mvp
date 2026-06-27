# Faza 09 — Three.js Scene Setup

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-009 |
| **Kategoria** | Core Configurator |
| **Priorytet** | MVP |
| **Szacowany czas** | 3h |
| **Zaleznosci** | PHASE-001, PHASE-004 |

---

## Opis

Bazowa scena 3D z profesjonalnym oswietleniem, environment maps i performance optimization.

---

## Stack technologiczny

- @react-three/fiber 8
- @react-three/drei
- Three.js 0.164+
- HDRI

---

## Zadania

1. Scene.tsx - Canvas wrapper z konfiguracja renderera
2. Renderer: antialias, shadows, toneMapping ACESFilmic, sRGB
3. Camera: PerspectiveCamera, FOV 50, near 0.1, far 100
4. Environment: Studio HDRI (drei Environment preset=studio)
5. Lighting: ambient (0.4) + directional key (1.0) + fill (0.3) + rim (0.2)
6. Shadow: PCFSoftShadowMap, shadow map 2048
7. Ground plane: receiveShadow (shadow catcher)
8. Grid helper: toggle (10x10, subtle)
9. Performance: frameloop=demand - render only on change
10. invalidate() from store subscription
11. Pixel ratio: Math.min(devicePixelRatio, 2)
12. Resize observer: Canvas adapts to container

---

## Kryteria akceptacji

- [ ] Scene renderuje sie bez errorow
- [ ] Oswietlenie wyglada profesjonalnie (studio-quality)
- [ ] Shadows na ground plane
- [ ] Idle = 0 FPS (demand mode), interaction = 60 FPS
- [ ] No memory leaks (dispose on unmount)
- [ ] Canvas resizes cleanly

---

## Ryzyka

- WebGL context lost on mobile
- HDRI loading time
- Shadow performance on low-end GPUs

---

## Pliki do utworzenia/zmodyfikowania

```
src/features/viewer3d/components/Scene.tsx
src/features/viewer3d/components/Lighting.tsx
src/features/viewer3d/components/Ground.tsx
src/features/viewer3d/components/GridHelper.tsx
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 9/80 | Core Configurator | MVP*
