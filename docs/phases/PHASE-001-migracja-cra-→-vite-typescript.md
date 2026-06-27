# Faza 01 — Migracja CRA → Vite + TypeScript

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-001 |
| **Kategoria** | Foundation |
| **Priorytet** | MVP |
| **Szacowany czas** | 2h |
| **Zaleznosci** | Brak (start point) |

---

## Opis

Zamiana react-scripts na Vite dla 10x szybszego dev experience. Migracja JSX → TSX z pelnym strict mode.

---

## Stack technologiczny

- Vite 6
- TypeScript 5.5
- React 18.3

---

## Zadania

1. Inicjalizacja npm create vite@latest z template react-ts
2. Migracja plikow .jsx na .tsx z pelnym typowaniem
3. Konfiguracja vite.config.ts (aliases, env vars, build target)
4. Setup tsconfig.json (strict: true, paths: @/)
5. Usuniecie CRA boilerplate (react-scripts, public/index.html)
6. Konfiguracja ESLint + Prettier (typescript-eslint)
7. Verify: npm run dev odpala z HMR < 100ms

---

## Kryteria akceptacji

- [ ] Projekt buduje sie bez errorow (npm run build)
- [ ] HMR dziala - zmiana w komponencie widoczna < 100ms
- [ ] TypeScript strict mode aktywny, zero any w nowym kodzie
- [ ] Path aliases dzialaja (@/features/..., @/shared/...)
- [ ] Build output < 500KB gzipped bez Three.js

---

## Ryzyka

- CRA-specific imports (process.env na import.meta.env)
- react-scripts test wymaga migracji na vitest

---

## Pliki do utworzenia/zmodyfikowania

```
vite.config.ts
tsconfig.json
tsconfig.node.json
index.html
src/vite-env.d.ts
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 1/80 | Foundation | MVP*
