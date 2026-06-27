# Faza 72 — Offline Mode

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-072 |
| **Kategoria** | Optimization and Ops |
| **Priorytet** | Full |
| **Szacowany czas** | 4h |
| **Zaleznosci** | PHASE-052, PHASE-026, PHASE-014 |

---

## Opis

Pelne dzialanie offline - IndexedDB, mutation queue, sync.

---

## Stack technologiczny

- idb
- Service Worker
- Background Sync

---

## Zadania

1. IndexedDB: projects, catalog, preferences
2. Offline indicator banner
3. Mutation queue: buffer API calls offline
4. Sync on reconnect: process queue
5. Texture cache: SW precaches top 50
6. Catalog JSON cached IndexedDB
7. Conflict resolution: server wins + notify
8. Queue retry exponential backoff

---

## Kryteria akceptacji

- [ ] Config works offline
- [ ] Queue processes on reconnect
- [ ] Banner shows correctly
- [ ] Textures available offline
- [ ] No data loss
- [ ] Conflicts resolved

---

## Ryzyka

- IndexedDB storage limits
- Conflict edge cases

---

## Pliki do utworzenia/zmodyfikowania

```
src/shared/utils/offlineStorage.ts
src/shared/hooks/useOffline.ts
src/shared/utils/mutationQueue.ts
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 72/80 | Optimization and Ops | Full*
