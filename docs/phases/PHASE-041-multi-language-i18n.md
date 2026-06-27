# Faza 41 — Multi-Language (i18n)

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-041 |
| **Kategoria** | UX Polish |
| **Priorytet** | Beta |
| **Szacowany czas** | 4h |
| **Zaleznosci** | PHASE-004 |

---

## Opis

Internacjonalizacja PL, EN, DE - react-i18next z namespace per feature.

---

## Stack technologiczny

- react-i18next
- i18next

---

## Zadania

1. react-i18next + i18next setup
2. Namespaces: common, configurator, catalog, export, auth
3. PL translations (primary, full)
4. EN translations (full)
5. DE translations (full - Austrian market)
6. Language switcher in header
7. Persist language preference
8. Date/number formatting per locale (Intl)

---

## Kryteria akceptacji

- [ ] All text translated in 3 languages
- [ ] Language switch instant (no reload)
- [ ] Numbers formatted per locale
- [ ] Dates formatted per locale
- [ ] Persist across sessions
- [ ] No untranslated strings in production

---

## Ryzyka

- Missing translations in edge cases
- RTL support (future, Arabic)

---

## Pliki do utworzenia/zmodyfikowania

```
src/i18n/index.ts
src/i18n/locales/pl/
src/i18n/locales/en/
src/i18n/locales/de/
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 41/80 | UX Polish | Beta*
