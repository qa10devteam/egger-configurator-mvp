# Faza 71 — Haptic Feedback and Sound Design

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-071 |
| **Kategoria** | Optimization and Ops |
| **Priorytet** | Full |
| **Szacowany czas** | 2h |
| **Zaleznosci** | PHASE-003, PHASE-043 |

---

## Opis

Micro-feedback - subtle sounds i haptic.

---

## Stack technologiczny

- Web Audio API
- navigator.vibrate

---

## Zadania

1. Sound library: 5 synthesized sounds
2. Play on: click, success, error
3. Haptic: vibrate(10) mobile
4. Volume control settings
5. Master mute toggle (default muted)
6. Web Audio synthesis (no files)
7. Respect prefers-reduced-motion

---

## Kryteria akceptacji

- [ ] Sounds play when enabled
- [ ] Haptic works on mobile
- [ ] Mute toggle global
- [ ] Volume adjustable
- [ ] Reduced motion disables
- [ ] No autoplay

---

## Ryzyka

- Audio context user gesture required
- Haptic API limited

---

## Pliki do utworzenia/zmodyfikowania

```
src/shared/hooks/useSound.ts
src/shared/hooks/useHaptic.ts
src/shared/utils/audioSynth.ts
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 71/80 | Optimization and Ops | Full*
