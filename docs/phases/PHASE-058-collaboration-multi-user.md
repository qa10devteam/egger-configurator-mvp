# Faza 58 — Collaboration (Multi-User)

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-058 |
| **Kategoria** | Advanced Features |
| **Priorytet** | Full |
| **Szacowany czas** | 6h |
| **Zaleznosci** | PHASE-026, PHASE-048, PHASE-028 |

---

## Opis

Real-time collaboration - shared editing, cursors, chat, roles.

---

## Stack technologiczny

- WebSocket
- CRDT/OT simple
- Zustand

---

## Zadania

1. Share project link with permissions
2. Real-time sync: WS broadcasts changes
3. Cursor presence: avatar dots per user
4. Conflict resolution: last-write-wins
5. User avatars showing viewers
6. Chat: in-project comment thread
7. Roles: owner, editor, viewer
8. Lock: owner can lock config

---

## Kryteria akceptacji

- [ ] Share link works with permissions
- [ ] Changes sync in real-time
- [ ] Cursors visible for other users
- [ ] No data loss on conflicts
- [ ] Chat messages persist
- [ ] Viewer cannot edit

---

## Ryzyka

- Conflict resolution complexity
- Many users = many WS messages

---

## Pliki do utworzenia/zmodyfikowania

```
src/features/collaboration/components/CollabProvider.tsx
src/features/collaboration/components/UserPresence.tsx
src/features/collaboration/components/ProjectChat.tsx
src/features/collaboration/hooks/useCollaboration.ts
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 58/80 | Advanced Features | Full*
