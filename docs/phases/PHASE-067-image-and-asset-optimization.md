# Faza 67 — Image and Asset Optimization

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-067 |
| **Kategoria** | Optimization and Ops |
| **Priorytet** | Full |
| **Szacowany czas** | 2.5h |
| **Zaleznosci** | PHASE-012, PHASE-014 |

---

## Opis

Optimalne ladowanie tekstur - WebP, lazy load, CDN.

---

## Stack technologiczny

- WebP/AVIF
- IntersectionObserver
- Vercel Edge

---

## Zadania

1. Textures: convert to WebP (90% quality)
2. AVIF with WebP fallback
3. Thumbnails: 64x64 sprite atlas
4. Lazy loading: IntersectionObserver below-fold
5. CDN: Vercel Edge global cache
6. Preload: hero decor texture
7. Font: Inter subset woff2 only
8. Responsive: srcset for DPR

---

## Kryteria akceptacji

- [ ] Textures 60% smaller than PNG
- [ ] Lazy images dont block initial load
- [ ] CDN headers correct (Cache-Control)
- [ ] Font loads without CLS
- [ ] LCP < 2.5s on 3G
- [ ] No layout shift from images

---

## Ryzyka

- AVIF browser support gaps
- CDN cache invalidation

---

## Pliki do utworzenia/zmodyfikowania

```
scripts/optimize-textures.sh
src/shared/components/LazyImage.tsx
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 67/80 | Optimization and Ops | Full*
