# Faza 79 — Beta Testing and Feedback

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-079 |
| **Kategoria** | Documentation and Launch |
| **Priorytet** | Full |
| **Szacowany czas** | 3h |
| **Zaleznosci** | PHASE-028, PHASE-069, PHASE-070 |

---

## Opis

User testing - feedback widget, NPS, recording.

---

## Stack technologiczny

- PostHog/Hotjar
- NPS
- Screenshot API

---

## Zadania

1. Beta flag: invite-only
2. Feedback widget: screenshot + text
3. NPS after 3rd export
4. Session recording (consent)
5. Bug report Ctrl+Shift+B
6. Changelog modal
7. Beta community link
8. Usage analytics

---

## Kryteria akceptacji

- [ ] Beta gate works
- [ ] Feedback captures screenshot
- [ ] NPS timed correctly
- [ ] Recording consent
- [ ] Bug report contextual
- [ ] Changelog shows updates

---

## Ryzyka

- GDPR recording
- Beta churn

---

## Pliki do utworzenia/zmodyfikowania

```
src/features/feedback/components/FeedbackWidget.tsx
src/features/feedback/components/NPSSurvey.tsx
src/features/feedback/components/Changelog.tsx
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 79/80 | Documentation and Launch | Full*
