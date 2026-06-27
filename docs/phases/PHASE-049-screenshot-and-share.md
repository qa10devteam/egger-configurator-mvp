# Faza 49 — Screenshot and Share

## Metadane

| Pole | Wartosc |
|------|---------|
| **ID** | PHASE-049 |
| **Kategoria** | UX Polish |
| **Priorytet** | Beta |
| **Szacowany czas** | 2.5h |
| **Zaleznosci** | PHASE-009, PHASE-006, PHASE-026 |

---

## Opis

Zrzut ekranu 3D + shareable link.

---

## Stack technologiczny

- Canvas API
- qrcode.react
- URL state encoding

---

## Zadania

1. Screenshot button in viewer toolbar
2. Capture: renderer.domElement.toDataURL(png)
3. High-res: render at 2x/4x (offscreen)
4. Download as PNG
5. Share link: encode config in URL params (compressed)
6. Copy link button
7. Share: email, WhatsApp
8. QR code for share link
9. Open Graph preview on shared link

---

## Kryteria akceptacji

- [ ] Screenshot captures current view
- [ ] High-res produces crisp image
- [ ] Download saves correct file
- [ ] Share link loads exact config
- [ ] QR code scannable
- [ ] OG preview shows thumbnail

---

## Ryzyka

- URL length limit for encoded state
- OG image generation complexity

---

## Pliki do utworzenia/zmodyfikowania

```
src/features/viewer3d/hooks/useScreenshot.ts
src/shared/components/ShareDialog.tsx
```

---

*Egger Configurator MVP — Frontend Specification*  
*Faza 49/80 | UX Polish | Beta*
