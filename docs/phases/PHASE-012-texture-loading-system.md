# Faza 12 — Texture Loading System

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-012 |
| **Kategoria** | Core Configurator |
| **Priorytet** | MVP |
| **Szacowany czas** | 4h |
| **Zaleznosci** | PHASE-009, PHASE-011 |

---

## Opis

System ladowania tekstur dekorow Egger - cache, lazy loading, compression, UV mapping.

---

## Stack technologiczny

- Three.js TextureLoader
- KTX2Loader
- @react-three/drei useTexture

---

## Zadania

1. useTextureLoader.ts - custom hook z cache (Map)
2. Texture loading: async z loading state (placeholder material)
3. Cache: max 20 textures in memory, LRU eviction
4. Texture settings: RepeatWrapping, repeat based on dimensions
5. Anisotropy: maxAnisotropy for sharp textures
6. Placeholder: neutral gray material during load
7. Texture atlas: 64x64 thumbnails (sprite sheet)
8. High-res on demand: 1024x1024 only when selected
9. Normal maps per structure (ST10, ST12, ST28)
10. Dispose textures on unmount / cache eviction
11. Error handling: fallback texture if URL fails

---

## Kryteria akceptacji

- [ ] Tekstura laduje sie i wyswietla na modelu
- [ ] Repeat correct: drewno wyglada naturalnie
- [ ] Cache: ponowny wybor = instant (no reload)
- [ ] Memory stable: max 150MB textures
- [ ] Loading state: gray material to texture fade-in
- [ ] Atlas loads fast for catalog (< 200ms)

---

## Ryzyka

- Texture memory overflow mobile
- CORS issues CDN
- KTX2 not supported older devices

---

## Pliki do utworzenia/zmodyfikowania

```
src/features/viewer3d/hooks/useTextureLoader.ts
src/features/viewer3d/hooks/useTextureCache.ts
src/features/viewer3d/materials/EggerMaterial.tsx
src/features/viewer3d/utils/textureSettings.ts
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 12/80 | Core Configurator | MVP*
