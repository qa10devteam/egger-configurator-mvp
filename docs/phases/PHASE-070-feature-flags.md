# Faza 70 — Feature Flags

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-070 |
| **Kategoria** | Optimization and Ops |
| **Priorytet** | Full |
| **Szacowany czas** | 2h |
| **Zaleznosci** | PHASE-001 |

---

## Opis

Gradual rollout - feature flags z env vars.

---

## Stack technologiczny

- VITE_FF_* env vars
- React context

---

## Zadania

1. Simple system: VITE_FF_* environment variables
2. Flags: ROOM_VISUALIZER, COLLABORATION, AR_MODE, NESTING
3. useFeatureFlag hook
4. Conditional rendering based on flags
5. Admin toggle (advanced, optional)
6. A/B testing prep
7. Default: experimental OFF in prod

---

## Kryteria akceptacji

- [ ] Flags control visibility
- [ ] Env var change shows feature
- [ ] Hook API typed
- [ ] No dead code when OFF
- [ ] Admin toggle works
- [ ] Defaults safe

---

## Ryzyka

- Flag state sync with deploy
- Dead code not shaken

---

## Pliki do utworzenia/zmodyfikowania

```
src/shared/hooks/useFeatureFlag.ts
src/shared/context/FeatureFlagProvider.tsx
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 70/80 | Optimization and Ops | Full*
