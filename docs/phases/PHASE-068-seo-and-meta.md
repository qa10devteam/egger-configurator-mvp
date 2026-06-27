# Faza 68 — SEO and Meta

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-068 |
| **Kategoria** | Optimization and Ops |
| **Priorytet** | Full |
| **Szacowany czas** | 2h |
| **Zaleznosci** | PHASE-005, PHASE-014 |

---

## Opis

Meta tags, OG, structured data, sitemap.

---

## Stack technologiczny

- react-helmet-async
- JSON-LD
- sitemap generator

---

## Zadania

1. react-helmet-async per-page title + description
2. Open Graph: og:title, og:image
3. Twitter Card: summary_large_image
4. Structured data: Product schema catalog pages
5. Sitemap /sitemap.xml build-time
6. robots.txt allow all
7. Canonical URLs
8. Meta per route

---

## Kryteria akceptacji

- [ ] Each page unique title/description
- [ ] OG preview when shared
- [ ] Structured data valid
- [ ] Sitemap accessible
- [ ] robots.txt correct
- [ ] No duplicate content

---

## Ryzyka

- SPA SEO limitations
- OG image generation

---

## Pliki do utworzenia/zmodyfikowania

```
src/shared/components/SEOHead.tsx
public/robots.txt
scripts/generate-sitemap.ts
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 68/80 | Optimization and Ops | Full*
