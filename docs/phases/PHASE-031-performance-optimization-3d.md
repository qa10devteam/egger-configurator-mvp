# Faza 31 — Performance Optimization (3D)

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-031 |
| **Kategoria** | UX Polish |
| **Priorytet** | Beta |
| **Szacowany czas** | 4h |
| **Zaleznosci** | PHASE-009, PHASE-011, PHASE-012, PHASE-017 |

---

## Opis

60 FPS na mid-range devices - instancing, LOD, texture compression, culling.

---

## Stack technologiczny

- Three.js InstancedMesh
- drei Detailed (LOD)
- KTX2/Basis

---

## Zadania

1. Instanced meshes for repeated elements
2. LOD: simplified geo at distance
3. Texture compression: KTX2/Basis Universal
4. Frustum culling verification
5. frameloop demand + manual invalidate
6. Web Worker for heavy geometry calcs
7. GPU memory monitoring (warn > 256MB)
8. Performance overlay toggle (FPS, draw calls, triangles)

---

## Kryteria akceptacji

- [ ] 60 FPS during orbit on mid-range phone
- [ ] Draw calls < 50 for typical cabinet
- [ ] Texture memory < 150MB
- [ ] No jank during material swap
- [ ] Worker calcs dont block main thread

---

## Ryzyka

- KTX2 browser support
- Worker communication overhead

---

## Pliki do utworzenia/zmodyfikowania

```
src/features/viewer3d/utils/instanceManager.ts
src/features/viewer3d/utils/lodSystem.ts
src/features/viewer3d/workers/geometry.worker.ts
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 31/80 | UX Polish | Beta*
