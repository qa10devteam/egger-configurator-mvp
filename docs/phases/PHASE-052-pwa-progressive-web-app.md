# Faza 52 — PWA (Progressive Web App)

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-052 |
| **Kategoria** | Advanced Features |
| **Priorytet** | Full |
| **Szacowany czas** | 3h |
| **Zaleznosci** | PHASE-001, PHASE-007, PHASE-067 |

---

## Opis

Installable app + offline support - Service Worker, manifest, cache.

---

## Stack technologiczny

- vite-plugin-pwa
- Workbox
- Web App Manifest

---

## Zadania

1. vite-plugin-pwa integration
2. manifest.json: name, icons (192/512), theme_color, standalone
3. Service Worker: Workbox strategies
4. Cache: network-first API, cache-first assets
5. Offline fallback page
6. Install prompt: custom banner
7. Update prompt: Nowa wersja dostepna
8. Background sync: queue failed API calls

---

## Kryteria akceptacji

- [ ] App installable (A2HS prompt)
- [ ] Offline fallback page shows
- [ ] Cached assets load offline
- [ ] Update prompt on new version
- [ ] Background sync retries on reconnect
- [ ] Lighthouse PWA score: pass

---

## Ryzyka

- SW cache invalidation complexity
- iOS PWA limitations

---

## Pliki do utworzenia/zmodyfikowania

```
vite.config.ts (pwa plugin)
public/manifest.json
src/sw.ts
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 52/80 | Advanced Features | Full*
