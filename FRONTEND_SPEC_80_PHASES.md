# 🏗️ EGGER CONFIGURATOR — Frontend Specification
## Kompletna specyfikacja frontendu w 80 fazach realizacji

---

## 📋 PODSUMOWANIE PROJEKTU

**Produkt:** Konfigurator mebli korporacyjnych z materiałami EGGER  
**Cel:** Użytkownik konfiguruje mebel (wymiary, dekory, obrzeża, okucia), widzi podgląd 3D w czasie rzeczywistym, generuje plik DXF/CNC i wysyła zlecenie do maszyny Homag  
**Stack technologiczny:**
- **Framework:** React 18 + Vite (migracja z CRA)
- **3D Engine:** Three.js via @react-three/fiber + @react-three/drei
- **State Management:** Zustand (lekki, idealny do konfiguratorów)
- **Styling:** Tailwind CSS 4 + shadcn/ui components
- **Routing:** React Router v7
- **API:** REST (FastAPI backend) + WebSocket (live preview updates)
- **Deploy:** Vercel (frontend) + Railway/Fly.io (backend)
- **Testy:** Vitest + React Testing Library + Playwright (E2E)

**Live URL:** https://egger-configurator-mvp.vercel.app/

---

## 🏛️ ARCHITEKTURA FRONTENDU

```
src/
├── app/                          # App shell, routing, providers
│   ├── App.tsx
│   ├── Router.tsx
│   └── providers/
│       ├── ThemeProvider.tsx
│       ├── AuthProvider.tsx
│       └── ConfiguratorProvider.tsx
├── features/                     # Feature-based modules
│   ├── configurator/             # ⭐ Core — panel konfiguracji
│   │   ├── components/
│   │   │   ├── DimensionsPanel.tsx
│   │   │   ├── MaterialSelector.tsx
│   │   │   ├── EdgeBandingPanel.tsx
│   │   │   ├── HardwarePanel.tsx
│   │   │   ├── JointPanel.tsx
│   │   │   └── SummaryPanel.tsx
│   │   ├── hooks/
│   │   │   ├── useConfigurator.ts
│   │   │   ├── useDimensions.ts
│   │   │   └── useMaterialSearch.ts
│   │   ├── store/
│   │   │   └── configuratorStore.ts
│   │   └── types/
│   │       └── configurator.types.ts
│   ├── viewer3d/                 # ⭐ Core — podgląd 3D
│   │   ├── components/
│   │   │   ├── Scene.tsx
│   │   │   ├── FurnitureModel.tsx
│   │   │   ├── MaterialPreview.tsx
│   │   │   ├── DimensionAnnotations.tsx
│   │   │   ├── ExplodedView.tsx
│   │   │   └── CameraControls.tsx
│   │   ├── hooks/
│   │   │   ├── useModelGeometry.ts
│   │   │   └── useTextureLoader.ts
│   │   ├── materials/
│   │   │   └── EggerMaterialLibrary.ts
│   │   └── utils/
│   │       ├── geometryBuilder.ts
│   │       └── dxfPreview.ts
│   ├── catalog/                  # Katalog dekorów EGGER
│   │   ├── components/
│   │   │   ├── DecorGrid.tsx
│   │   │   ├── DecorCard.tsx
│   │   │   ├── DecorFilter.tsx
│   │   │   └── DecorDetail.tsx
│   │   └── hooks/
│   │       └── useCatalog.ts
│   ├── projects/                 # Zarządzanie projektami
│   │   ├── components/
│   │   │   ├── ProjectList.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   └── ProjectSaveModal.tsx
│   │   └── hooks/
│   │       └── useProjects.ts
│   ├── export/                   # Export DXF / PDF / zamówienie
│   │   ├── components/
│   │   │   ├── ExportPanel.tsx
│   │   │   ├── DxfPreview.tsx
│   │   │   ├── CuttingListTable.tsx
│   │   │   └── OrderSubmitForm.tsx
│   │   └── hooks/
│   │       └── useExport.ts
│   ├── auth/                     # Logowanie / rejestracja
│   │   ├── components/
│   │   │   ├── LoginForm.tsx
│   │   │   ├── RegisterForm.tsx
│   │   │   └── ProfileMenu.tsx
│   │   └── hooks/
│   │       └── useAuth.ts
│   └── dashboard/                # Panel użytkownika
│       ├── components/
│       │   ├── DashboardHome.tsx
│       │   ├── OrderHistory.tsx
│       │   └── StatsWidget.tsx
│       └── hooks/
│           └── useDashboard.ts
├── shared/                       # Shared components & utilities
│   ├── ui/                       # shadcn/ui wrappers
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Select.tsx
│   │   ├── Slider.tsx
│   │   ├── Toast.tsx
│   │   ├── Modal.tsx
│   │   ├── Tabs.tsx
│   │   └── Card.tsx
│   ├── layout/
│   │   ├── AppLayout.tsx
│   │   ├── Sidebar.tsx
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── hooks/
│   │   ├── useMediaQuery.ts
│   │   ├── useDebounce.ts
│   │   └── useLocalStorage.ts
│   └── utils/
│       ├── api.ts
│       ├── formatters.ts
│       └── validators.ts
├── assets/
│   ├── textures/                 # Tekstury dekorów Egger (webp, compressed)
│   ├── icons/
│   └── fonts/
└── types/
    └── global.d.ts
```

---

## 🎨 DESIGN SYSTEM

**Paleta kolorów (Egger corporate):**
- Primary: `#1B365D` (Egger Navy)
- Secondary: `#E8830C` (Egger Orange)
- Surface: `#FAFAFA` / `#1A1A1A` (light/dark)
- Accent: `#4A90D9` (interactive elements)
- Success: `#2ECC71`
- Error: `#E74C3C`

**Typography:**
- Headings: Inter (700, 600)
- Body: Inter (400, 500)
- Mono (wymiary): JetBrains Mono

**Layout:**
- Desktop: 3-panel layout (Sidebar Config | 3D Viewer | Properties Panel)
- Tablet: 2-panel (Config overlays + 3D Viewer)
- Mobile: Stack z bottom sheet configurator

---

## 📐 80 FAZ REALIZACJI

---

### 🔹 FAZA 1 — Migracja CRA → Vite + TypeScript
**Cel:** Zamiana react-scripts na Vite dla 10x szybszego dev experience  
**Zadania:**
1. Inicjalizacja `npm create vite@latest` z template react-ts
2. Migracja plików `.jsx` → `.tsx`
3. Konfiguracja `vite.config.ts` (aliases, env vars)
4. Setup `tsconfig.json` (strict mode, path aliases)
5. Usunięcie CRA boilerplate (public/index.html → Vite format)

**Deliverable:** Projekt odpala się na Vite, HMR < 100ms  
**Czas:** 2h

---

### 🔹 FAZA 2 — Tailwind CSS 4 + Design Tokens
**Cel:** System designu oparty o Tailwind z tokenami Egger  
**Zadania:**
1. Instalacja Tailwind CSS 4 + PostCSS
2. Konfiguracja `tailwind.config.ts` z kolorami Egger
3. Definicja CSS variables (--egger-navy, --egger-orange itd.)
4. Bazowy reset + typography scale
5. Dark mode support via class strategy

**Deliverable:** Tailwind działa, tokeny Egger dostępne  
**Czas:** 1.5h

---

### 🔹 FAZA 3 — shadcn/ui Component Library Setup
**Cel:** Baza komponentów UI (Button, Input, Select, Card, Modal)  
**Zadania:**
1. Inicjalizacja shadcn/ui (`npx shadcn-ui@latest init`)
2. Import bazowych komponentów: Button, Input, Label, Select
3. Customizacja themes pod palety Egger
4. Setup komponentu Toast (notyfikacje)
5. Storybook dla komponentów (opcjonalnie)

**Deliverable:** 10+ bazowych komponentów gotowych  
**Czas:** 3h

---

### 🔹 FAZA 4 — Layout System (AppShell)
**Cel:** Responsywny layout 3-panelowy  
**Zadania:**
1. `AppLayout.tsx` — shell z resizable panels
2. `Sidebar.tsx` — nawigacja + config panel (300px default)
3. `Header.tsx` — logo, breadcrumb, user menu
4. CSS Grid layout z `grid-template-columns: auto 1fr auto`
5. Resizable dividers (react-resizable-panels)

**Deliverable:** Layout renderuje się na desktop/tablet/mobile  
**Czas:** 3h

---

### 🔹 FAZA 5 — React Router v7 + Route Structure
**Cel:** Routing z lazy loading  
**Zadania:**
1. Instalacja React Router v7
2. Definicja routes: `/`, `/configurator`, `/catalog`, `/projects`, `/orders`
3. Lazy loading per-route (`React.lazy`)
4. 404 fallback + error boundary per route
5. Navigation guards (auth check)

**Deliverable:** Nawigacja działa, code splitting aktywny  
**Czas:** 2h

---

### 🔹 FAZA 6 — Zustand Store Architecture
**Cel:** Centralny state management dla konfiguratora  
**Zadania:**
1. Instalacja Zustand
2. `configuratorStore.ts` — wymiary, materiał, obrzeża, okucia
3. `uiStore.ts` — sidebar state, modals, toasts
4. `projectStore.ts` — zapisane projekty
5. Middleware: `persist` (localStorage), `devtools`
6. Selektory z shallow compare

**Deliverable:** Store z pełnym typowaniem, persist do localStorage  
**Czas:** 3h

---

### 🔹 FAZA 7 — API Client Layer
**Cel:** Typowany klient HTTP z interceptorami  
**Zadania:**
1. Bazowy `api.ts` z fetch wrapper (no axios — tree shaking)
2. Request/response interceptory (auth token, error handling)
3. Typowane endpointy: `/configure`, `/submit`, `/catalog`
4. Environment-based URL (`VITE_API_URL`)
5. Retry logic (exponential backoff, max 3)

**Deliverable:** API client z pełnym typowaniem, error handling  
**Czas:** 2h

---

### 🔹 FAZA 8 — Dimensions Panel (Wymiary)
**Cel:** UI do wprowadzania wymiarów mebla  
**Zadania:**
1. `DimensionsPanel.tsx` — width, depth, height inputs
2. Sliders + number inputs (dual control)
3. Presets: "Szafka kuchenna", "Biurko", "Regał", "Custom"
4. Walidacja min/max (Egger limits: 100mm–2800mm)
5. Live update do Zustand store → re-render 3D

**Deliverable:** Panel wymiarów z walidacją i presetami  
**Czas:** 3h

---

### 🔹 FAZA 9 — Three.js Scene Setup
**Cel:** Bazowa scena 3D z oświetleniem i kamerą  
**Zadania:**
1. `Scene.tsx` — Canvas z antialiasing, shadows, tone mapping
2. Environment map (studio HDRI dla realistycznego odbicia)
3. Oświetlenie: ambient + 3x directional (key/fill/rim)
4. Ground plane z shadow catcher
5. Grid helper (toggle)
6. Performance: `frameloop="demand"` (render only on change)

**Deliverable:** Scena 3D z profesjonalnym oświetleniem  
**Czas:** 3h

---

### 🔹 FAZA 10 — Camera Controls & Navigation
**Cel:** Intuicyjna nawigacja kamery w 3D  
**Zadania:**
1. OrbitControls z damping (smooth rotation)
2. Preset views: Front, Top, Right, Isometric (buttons)
3. Zoom to fit (auto-frame object)
4. Pan limits (nie pozwól zgubić obiektu)
5. Double-click to focus on face
6. Touch gestures (pinch zoom, 2-finger rotate)

**Deliverable:** Nawigacja 3D intuicyjna na desktop i mobile  
**Czas:** 2.5h

---

### 🔹 FAZA 11 — Parametric Box Geometry
**Cel:** Dynamiczna geometria prostopadłościanu z wymiarów  
**Zadania:**
1. `FurnitureModel.tsx` — generuje mesh z store dimensions
2. BufferGeometry z prawidłowymi UV (dla tekstur)
3. Podział na 6 ścian (osobne materiały per face)
4. Grubość płyty: 18mm / 25mm / 38mm (parametr)
5. Reakcja na zmiany wymiarów w real-time (< 16ms)

**Deliverable:** Box 3D reaguje na wymiary z panelu  
**Czas:** 3h

---

### 🔹 FAZA 12 — Texture Loading System
**Cel:** Ładowanie tekstur dekorów Egger na model 3D  
**Zadania:**
1. `useTextureLoader.ts` — async texture loading z cache
2. Texture atlas (sprite sheet) dla miniatur katalogu
3. High-res textures on demand (lazy load po wyborze)
4. Repeat/wrap settings per materiał (drewno = repeat X)
5. Normal maps dla głębi (opcjonalnie roughness)

**Deliverable:** Tekstury Egger renderują się na modelu  
**Czas:** 4h

---

### 🔹 FAZA 13 — Material Selector UI
**Cel:** Panel wyboru dekoru Egger  
**Zadania:**
1. `MaterialSelector.tsx` — grid miniatur dekorów
2. Kategorie: Drewno, Uni, Kamień, Beton, Fantazja
3. Search z autocomplete (kod Egger: "H3303 ST10")
4. Favorite materials (localStorage)
5. Recently used (ostatnie 5)
6. Click → apply to model instant

**Deliverable:** Użytkownik wybiera dekor, model się aktualizuje  
**Czas:** 4h

---

### 🔹 FAZA 14 — Egger Decor Database (Frontend Cache)
**Cel:** Lokalna baza 200+ dekorów Egger z metadanymi  
**Zadania:**
1. JSON catalog: code, name, category, texture_url, structure
2. Structures: ST10, ST12, ST28, ST76 (Egger surface textures)
3. Grubości dostępne per dekor (16, 18, 25, 38mm)
4. Kolorystyka obrzeży dopasowana do dekoru
5. Static import → tree-shaken per category

**Deliverable:** Baza dekorów z wyszukiwaniem < 50ms  
**Czas:** 3h

---

### 🔹 FAZA 15 — Edge Banding Panel
**Cel:** Konfiguracja obrzeży (krawędzi) płyty  
**Zadania:**
1. `EdgeBandingPanel.tsx` — 4 krawędzie (top, bottom, left, right)
2. Per-edge toggle: on/off + wybór grubości (0.4mm, 1mm, 2mm)
3. Per-edge material (domyślnie = same as face, lub custom)
4. Visual indicator na modelu 3D (podświetlenie krawędzi)
5. Kolorowe linie na modelu = edge banding preview

**Deliverable:** Konfiguracja obrzeży z wizualizacją 3D  
**Czas:** 4h

---

### 🔹 FAZA 16 — Dimension Annotations (3D)
**Cel:** Wymiarowanie bezpośrednio na modelu 3D  
**Zadania:**
1. `DimensionAnnotations.tsx` — linie wymiarowe w 3D
2. HTML overlay (drei `Html`) — etykiety mm
3. Auto-pozycjonowanie (nie nachodzą na model)
4. Toggle visibility (przycisk "Show dimensions")
5. Animacja przy zmianie wymiaru (lerp)

**Deliverable:** Wymiary wyświetlają się obok modelu 3D  
**Czas:** 3h

---

### 🔹 FAZA 17 — Multi-Part Furniture (Szafka)
**Cel:** Kompozycja z wielu płyt = mebel (nie single box)  
**Zadania:**
1. Furniture template system: `{ parts: Part[], joints: Joint[] }`
2. Template: "Szafka" = 2 boki + góra + dół + tył + półki
3. Parametric: wysokość → auto-adjust wewnętrznych półek
4. Assembly constraints (part A.top = part B.bottom)
5. Każda część = osobny MaterialSelector

**Deliverable:** Renderuje się szafka z 6+ elementów  
**Czas:** 6h

---

### 🔹 FAZA 18 — Furniture Templates Library
**Cel:** Predefiniowane szablony mebli  
**Zadania:**
1. Template: Szafka kuchenna górna (600×350×720mm)
2. Template: Szafka kuchenna dolna (600×560×870mm)
3. Template: Biurko proste (1200×600×750mm)
4. Template: Regał otwarty (800×300×2000mm, 5 półek)
5. Template: Komoda z szufladami (1000×450×800mm)
6. Template picker UI z miniaturami

**Deliverable:** 5 gotowych template'ów do wyboru  
**Czas:** 4h

---

### 🔹 FAZA 19 — Hardware/Fittings Panel (Okucia)
**Cel:** Konfiguracja okuć (zawiasy, prowadnice, nóżki)  
**Zadania:**
1. `HardwarePanel.tsx` — kategorie okuć
2. Zawiasy: typ (standard, push-to-open, soft-close), ilość
3. Prowadnice szuflad: typ (rolkowe, kulkowe, full-extension)
4. Nóżki/cokół: typ, wysokość
5. Uchwyty: pozycja, model
6. Wizualizacja na modelu 3D (basic shapes)

**Deliverable:** Panel okuć z wpływem na model  
**Czas:** 5h

---

### 🔹 FAZA 20 — Joint System (Połączenia)
**Cel:** Typy połączeń między płytami  
**Zadania:**
1. `JointPanel.tsx` — wybór typu łączenia
2. Typy: konfirmat, kołek, minifix, lamello
3. Auto-placement (co 320mm standard)
4. Wizualizacja pozycji łączeń na modelu (dots)
5. Wpływ na DXF output (otwory wiertarskie)

**Deliverable:** System połączeń z auto-rozmieszczeniem  
**Czas:** 4h

---

### 🔹 FAZA 21 — Cutting List Generator (Lista rozkroju)
**Cel:** Automatyczna lista elementów do rozkroju  
**Zadania:**
1. `CuttingListTable.tsx` — tabela z wymiarami netto/brutto
2. Kalkulacja: wymiar netto + grubość obrzeża = brutto
3. Kierunek usłojenia (grain direction) per element
4. Ilość sztuk per element
5. Export tabeli do CSV/PDF
6. Sortowanie: po materiale, po wymiarze

**Deliverable:** Automatyczna lista rozkroju z kalkulacjami  
**Czas:** 4h

---

### 🔹 FAZA 22 — DXF Preview Panel
**Cel:** Podgląd wygenerowanego DXF w przeglądarce  
**Zadania:**
1. `DxfPreview.tsx` — parser DXF → SVG/Canvas
2. Biblioteka: `dxf-parser` (JS) → custom renderer
3. Zoom/pan na rysunku 2D
4. Warstwy: kontury, wiercenia, obrzeża (kolorowane)
5. Download button (plik .dxf)

**Deliverable:** DXF renderuje się w przeglądarce  
**Czas:** 5h

---

### 🔹 FAZA 23 — Export System (DXF + PDF + CSV)
**Cel:** Multi-format export konfiguracji  
**Zadania:**
1. `ExportPanel.tsx` — przyciski exportu
2. DXF export via backend API
3. PDF summary (jsPDF): wymiary + materiały + rysunek
4. CSV cutting list
5. Progress indicator podczas generowania
6. Email wysyłka (opcja)

**Deliverable:** 3 formaty exportu działają  
**Czas:** 4h

---

### 🔹 FAZA 24 — Order Submission Flow
**Cel:** Wysłanie zamówienia do Homag/CNC  
**Zadania:**
1. `OrderSubmitForm.tsx` — multi-step form
2. Step 1: Review configuration
3. Step 2: Delivery details
4. Step 3: Confirmation + submit
5. POST to `/submit` → job_id tracking
6. Success/error states z retry

**Deliverable:** Flow zamówienia end-to-end  
**Czas:** 3h

---

### 🔹 FAZA 25 — Order Status Tracking
**Cel:** Śledzenie statusu zamówienia  
**Zadania:**
1. Status polling: pending → processing → cutting → ready
2. Timeline UI (stepper component)
3. WebSocket live updates (opcja)
4. Push notification przy zmianie statusu
5. Order history list

**Deliverable:** User widzi status zamówienia real-time  
**Czas:** 3h

---

### 🔹 FAZA 26 — Project Save/Load System
**Cel:** Zapisywanie i wczytywanie projektów  
**Zadania:**
1. `ProjectSaveModal.tsx` — nazwa + opis
2. Serialize configurator state → JSON
3. Save to backend (POST `/projects`)
4. Load project → restore full state
5. Auto-save draft (co 30s do localStorage)
6. Project versioning (last 5 versions)

**Deliverable:** Projekty zapisują się i ładują  
**Czas:** 3h

---

### 🔹 FAZA 27 — Project Gallery
**Cel:** Lista zapisanych projektów z podglądem  
**Zadania:**
1. `ProjectList.tsx` — grid/list view toggle
2. `ProjectCard.tsx` — thumbnail (3D screenshot), nazwa, data
3. 3D thumbnail: render to canvas → toDataURL
4. Sortowanie: data, nazwa, materiał
5. Usuwanie + duplikowanie projektu

**Deliverable:** Galeria projektów z miniaturami 3D  
**Czas:** 3h

---

### 🔹 FAZA 28 — Authentication System
**Cel:** Login/register/session  
**Zadania:**
1. `LoginForm.tsx` + `RegisterForm.tsx`
2. JWT token handling (httpOnly cookie preferred)
3. Auth context (AuthProvider)
4. Protected routes
5. Password reset flow
6. Session refresh logic

**Deliverable:** Auth system działający end-to-end  
**Czas:** 4h

---

### 🔹 FAZA 29 — User Dashboard
**Cel:** Panel główny po zalogowaniu  
**Zadania:**
1. `DashboardHome.tsx` — overview
2. Recent projects (ostatnie 5)
3. Active orders widget
4. Quick stats (ile projektów, ile zamówień)
5. Quick actions: "Nowy projekt", "Kontynuuj ostatni"

**Deliverable:** Dashboard z kluczowymi info  
**Czas:** 2.5h

---

### 🔹 FAZA 30 — Responsive Design (Mobile First)
**Cel:** Pełne UX na mobile i tablet  
**Zadania:**
1. Mobile layout: 3D viewer full-width + bottom sheet config
2. Tablet: side panel z collapse
3. Touch-optimized controls (larger hit areas)
4. Bottom navigation bar (mobile)
5. Gesture support (swipe between panels)
6. Breakpoints: 640/768/1024/1280px

**Deliverable:** App działa perfekcyjnie na iPhone/iPad  
**Czas:** 5h

---

### 🔹 FAZA 31 — Performance Optimization (3D)
**Cel:** 60 FPS na mid-range devices  
**Zadania:**
1. Instanced meshes (wiele identycznych elementów)
2. LOD (Level of Detail) — simplified geometry z daleka
3. Texture compression (basis/ktx2)
4. Frustum culling
5. `useFrame` throttling (render on change only)
6. Web Workers dla heavy geometry calculations

**Deliverable:** Lighthouse Performance > 90  
**Czas:** 4h

---

### 🔹 FAZA 32 — Exploded View
**Cel:** Widok rozstrzelony — elementy odsunięte od siebie  
**Zadania:**
1. `ExplodedView.tsx` — toggle button
2. Animacja: parts spread along local axes
3. Slider: 0% (assembled) → 100% (fully exploded)
4. Labels per part visible in exploded mode
5. Click part in exploded → highlight in config panel

**Deliverable:** Widok rozstrzelony z animacją  
**Czas:** 3h

---

### 🔹 FAZA 33 — Section View (Przekrój)
**Cel:** Przekrój mebla — widać wnętrze  
**Zadania:**
1. Clipping plane (Three.js `clipPlane`)
2. Axis selector: X, Y, Z
3. Slider: pozycja płaszczyzny tnącej
4. Cross-section fill (hatch pattern)
5. Toggle on/off

**Deliverable:** Przekrój mebla w dowolnej osi  
**Czas:** 3h

---

### 🔹 FAZA 34 — Measurement Tool
**Cel:** Narzędzie pomiaru odległości w 3D  
**Zadania:**
1. Click point A → click point B → show distance
2. Snap to vertices/edges/faces
3. Multiple measurements (list)
4. Clear all measurements button
5. Units toggle: mm / cm / m

**Deliverable:** Pomiar odległości w viewerze 3D  
**Czas:** 3h

---

### 🔹 FAZA 35 — Undo/Redo System
**Cel:** Cofanie i ponawianie zmian  
**Zadania:**
1. Zustand middleware: history (temporal)
2. `zustand-temporal` lub custom stack
3. Keyboard shortcuts: Ctrl+Z / Ctrl+Shift+Z
4. Toolbar buttons: Undo/Redo z tooltip
5. Max history: 50 states

**Deliverable:** Undo/redo działa na każdej zmianie  
**Czas:** 2.5h

---

### 🔹 FAZA 36 — Keyboard Shortcuts System
**Cel:** Power-user shortcuts  
**Zadania:**
1. Hotkey library (`react-hotkeys-hook`)
2. Shortcuts: `1-4` = camera presets, `E` = explode, `D` = dimensions
3. `?` = shortcuts modal (cheatsheet)
4. `Ctrl+S` = save project
5. `Ctrl+E` = export
6. Customizable shortcuts (settings)

**Deliverable:** 15+ shortcuts zdefiniowanych  
**Czas:** 2h

---

### 🔹 FAZA 37 — Drag & Drop Parts
**Cel:** Przeciąganie elementów z katalogu na scenę  
**Zadania:**
1. Draggable catalog items (HTML5 DnD)
2. Drop zone = 3D canvas
3. Ghost preview during drag
4. Snap-to-grid on drop
5. Snap-to-existing-parts (magnetic)

**Deliverable:** Drag & drop elementów na scenę  
**Czas:** 4h

---

### 🔹 FAZA 38 — Color/Material Picker (Advanced)
**Cel:** Zaawansowany picker materiałów  
**Zadania:**
1. Material compare mode (side by side)
2. Color harmony suggestions
3. Real-time material swap (click face → pick material)
4. Zoom-in texture preview (actual grain at 1:1)
5. Structure preview (ST10 vs ST12 relief)

**Deliverable:** Zaawansowane narzędzie doboru materiałów  
**Czas:** 3h

---

### 🔹 FAZA 39 — Pricing Calculator
**Cel:** Kalkulacja ceny materiałów i usług  
**Zadania:**
1. Price per m² per dekor (lookup table)
2. Edge banding per meter
3. Hardware per piece
4. CNC processing fee
5. Total cost breakdown UI
6. Currency: PLN/EUR toggle

**Deliverable:** Wycena w czasie rzeczywistym  
**Czas:** 3h

---

### 🔹 FAZA 40 — Nesting Preview (Rozkrój na płycie)
**Cel:** Wizualizacja rozkroju elementów na płycie  
**Zadania:**
1. 2D canvas: płyta 2800×2070mm
2. Auto-placement algorytm (bin packing)
3. Waste calculation (% odpadu)
4. Grain direction constraint
5. Color-coded parts
6. Zoom/pan na rozkroju

**Deliverable:** Wizualizacja rozkroju z kalkulacją odpadu  
**Czas:** 5h

---

### 🔹 FAZA 41 — Multi-Language (i18n)
**Cel:** Internacjonalizacja (PL, EN, DE)  
**Zadania:**
1. `react-i18next` setup
2. Namespace per feature (configurator, catalog, export)
3. PL translations (primary)
4. EN translations
5. DE translations (Egger is Austrian)
6. Language switcher in header

**Deliverable:** App w 3 językach  
**Czas:** 4h

---

### 🔹 FAZA 42 — Dark Mode
**Cel:** Tryb ciemny  
**Zadania:**
1. Theme toggle (header)
2. CSS variables swap (Tailwind dark:)
3. 3D scene background adapt
4. Persistent preference (localStorage)
5. System preference detection

**Deliverable:** Pełny dark mode  
**Czas:** 2h

---

### 🔹 FAZA 43 — Toast & Notification System
**Cel:** System powiadomień in-app  
**Zadania:**
1. Toast component (success, error, info, warning)
2. Auto-dismiss (5s) + manual close
3. Stack (max 3 visible)
4. Sound on important (order status change)
5. Position: bottom-right

**Deliverable:** Toast system z animacjami  
**Czas:** 1.5h

---

### 🔹 FAZA 44 — Loading States & Skeletons
**Cel:** UX podczas ładowania  
**Zadania:**
1. Skeleton components (card, table, viewer)
2. Suspense boundaries per route
3. 3D loading: progress bar + spinner
4. API loading states (per query)
5. Optimistic updates where possible

**Deliverable:** Zero "blank screens" — zawsze skeleton  
**Czas:** 2.5h

---

### 🔹 FAZA 45 — Error Handling & Boundaries
**Cel:** Graceful error recovery  
**Zadania:**
1. Global ErrorBoundary z retry
2. Per-feature error boundaries (3D crash ≠ app crash)
3. API error display (user-friendly messages)
4. Offline detection + banner
5. Sentry integration (error tracking)

**Deliverable:** App nie crashuje — graceful degradation  
**Czas:** 3h

---

### 🔹 FAZA 46 — Onboarding Tour
**Cel:** Tutorial dla nowych użytkowników  
**Zadania:**
1. Step-by-step tour (react-joyride / custom)
2. Highlight: dimensions → materials → 3D → export
3. Skip option + "Don't show again"
4. Trigger: first visit OR manual (Help → Tour)
5. Contextual tooltips on hover

**Deliverable:** Interactive onboarding tour  
**Czas:** 3h

---

### 🔹 FAZA 47 — Search (Global)
**Cel:** Wyszukiwanie globalne (dekory, projekty, zamówienia)  
**Zadania:**
1. Command palette (Ctrl+K) — cmdk style
2. Fuzzy search (fuse.js)
3. Categories: Dekory, Projekty, Akcje
4. Recent searches
5. Keyboard navigation (arrows + enter)

**Deliverable:** Command palette jak VS Code / Linear  
**Czas:** 3h

---

### 🔹 FAZA 48 — WebSocket Real-Time Updates
**Cel:** Live updates z backendu  
**Zadania:**
1. WebSocket client (native WS)
2. Events: order_status_changed, dxf_generated
3. Reconnection logic (exponential backoff)
4. Connection status indicator (green dot)
5. Multiplexing (one connection, many channels)

**Deliverable:** Real-time updates bez pollingu  
**Czas:** 3h

---

### 🔹 FAZA 49 — Screenshot & Share
**Cel:** Zrzut ekranu 3D + share link  
**Zadania:**
1. Screenshot button → canvas.toDataURL()
2. High-res export (2x, 4x resolution)
3. Share link (project URL with state encoded)
4. Social share (email, WhatsApp link)
5. QR code for share link

**Deliverable:** Screenshot + shareable link  
**Czas:** 2.5h

---

### 🔹 FAZA 50 — Animation System (Transitions)
**Cel:** Smooth transitions między stanami 3D  
**Zadania:**
1. Framer Motion for UI animations
2. Three.js lerp for model transitions
3. Material swap = fade transition
4. Dimension change = smooth morph
5. Page transitions (route change)
6. Micro-interactions (hover, click feedback)

**Deliverable:** Fluid, polished animations  
**Czas:** 4h

---

### 🔹 FAZA 51 — Accessibility (a11y)
**Cel:** WCAG 2.1 AA compliance  
**Zadania:**
1. ARIA labels na interaktywnych elementach
2. Keyboard navigation (Tab order)
3. Focus indicators (visible ring)
4. Screen reader support (3D alt descriptions)
5. Color contrast ratio ≥ 4.5:1
6. Reduced motion preference

**Deliverable:** Accessibility audit pass  
**Czas:** 3h

---

### 🔹 FAZA 52 — PWA (Progressive Web App)
**Cel:** Installable app + offline support  
**Zadania:**
1. Service Worker (Workbox)
2. Manifest.json (icons, theme_color)
3. Offline fallback page
4. Cache strategy: network-first for API, cache-first for assets
5. Install prompt (Add to Home Screen)

**Deliverable:** App instalowalna jako PWA  
**Czas:** 3h

---

### 🔹 FAZA 53 — Print Layout
**Cel:** Drukowanie konfiguracji  
**Zadania:**
1. Print stylesheet (`@media print`)
2. Print view: rysunek + wymiary + lista materiałów
3. Header z logo Egger + data
4. Footer z kodem projektu
5. Print button + browser Ctrl+P

**Deliverable:** Profesjonalny wydruk A4  
**Czas:** 2h

---

### 🔹 FAZA 54 — Admin Panel (Catalog Management)
**Cel:** Zarządzanie katalogiem dekorów (admin only)  
**Zadania:**
1. Admin route (role-based access)
2. CRUD dekory (add/edit/delete)
3. Texture upload (drag & drop)
4. Price management per dekor
5. Bulk import (CSV)
6. Audit log

**Deliverable:** Panel admina do zarządzania katalogiem  
**Czas:** 5h

---

### 🔹 FAZA 55 — Analytics Dashboard
**Cel:** Statystyki użycia konfiguratora  
**Zadania:**
1. Chart library (Recharts)
2. Metrics: konfigurations/day, popular decors, avg dimensions
3. Conversion funnel: config → export → order
4. User activity heatmap
5. Date range filter

**Deliverable:** Dashboard z metrykami biznesowymi  
**Czas:** 4h

---

### 🔹 FAZA 56 — Comparison Mode
**Cel:** Porównanie 2 konfiguracji side-by-side  
**Zadania:**
1. Split view: 2 x Canvas
2. Sync camera (orbit jednego = orbit drugiego)
3. Diff table: wymiary, materiały, cena
4. "Use this one" button
5. Compare from project gallery

**Deliverable:** Porównanie dwóch wariantów  
**Czas:** 3h

---

### 🔹 FAZA 57 — Version History (Timeline)
**Cel:** Historia zmian w projekcie  
**Zadania:**
1. Timeline UI (vertical)
2. Each change = entry (timestamp + description)
3. Click entry → restore to that state
4. Diff view between versions
5. Branch (fork from old version)

**Deliverable:** Historia z możliwością rollback  
**Czas:** 3h

---

### 🔹 FAZA 58 — Collaboration (Multi-User)
**Cel:** Współpraca nad projektem w real-time  
**Zadania:**
1. Shared project link
2. Cursors of other users (awareness)
3. Conflict resolution (last-write-wins for MVP)
4. Chat/comments per project
5. Role: owner, editor, viewer

**Deliverable:** Podstawowa real-time collaboration  
**Czas:** 6h

---

### 🔹 FAZA 59 — Room Visualizer (AR-lite)
**Cel:** Mebel w kontekście pomieszczenia  
**Zadania:**
1. Room template (customizable wall/floor)
2. Floor material picker
3. Wall color picker
4. Place furniture in room (drag)
5. Multiple furniture items
6. Lighting simulation (window position)

**Deliverable:** Meble w kontekście pokoju  
**Czas:** 5h

---

### 🔹 FAZA 60 — Photo Overlay (AR)
**Cel:** Nałożenie mebla na zdjęcie pomieszczenia  
**Zadania:**
1. Upload photo of room
2. Perspective matching (manual vanishing points)
3. 3D model overlay on photo
4. Scale adjustment
5. Shadow on floor plane
6. Save composition as image

**Deliverable:** Mebel nałożony na zdjęcie klienta  
**Czas:** 5h

---

### 🔹 FAZA 61 — Component Library Documentation
**Cel:** Wewnętrzna dokumentacja komponentów  
**Zadania:**
1. Storybook 8 setup
2. Stories per component (variants, states)
3. Auto-generated props table
4. Design tokens page
5. Interaction tests in Storybook

**Deliverable:** Storybook z 30+ komponentami  
**Czas:** 4h

---

### 🔹 FAZA 62 — Unit Tests (Vitest)
**Cel:** Pokrycie testami logiki biznesowej  
**Zadania:**
1. Vitest setup (config, coverage)
2. Tests: configurator store (state transitions)
3. Tests: geometry builder (correct dimensions)
4. Tests: cutting list calculation
5. Tests: price calculator
6. Coverage target: 80% business logic

**Deliverable:** 50+ unit tests, coverage report  
**Czas:** 5h

---

### 🔹 FAZA 63 — Integration Tests (React Testing Library)
**Cel:** Testy interakcji komponentów  
**Zadania:**
1. RTL setup z custom render (providers)
2. Test: DimensionsPanel → store update → 3D re-render
3. Test: MaterialSelector → texture change
4. Test: Export flow (mock API)
5. Test: Auth flow (login → dashboard)

**Deliverable:** 30+ integration tests  
**Czas:** 4h

---

### 🔹 FAZA 64 — E2E Tests (Playwright)
**Cel:** End-to-end testy krytycznych flow  
**Zadania:**
1. Playwright setup (config, fixtures)
2. E2E: Full configurator flow (dimensions → material → export)
3. E2E: Save project → load project
4. E2E: Order submission
5. E2E: Mobile viewport tests
6. CI integration (GitHub Actions)

**Deliverable:** 10+ E2E scenarios passing  
**Czas:** 5h

---

### 🔹 FAZA 65 — CI/CD Pipeline
**Cel:** Automated quality gates  
**Zadania:**
1. GitHub Actions workflow
2. Steps: lint → type-check → unit test → build → e2e
3. Preview deployments (Vercel per-PR)
4. Bundle size check (fail if > 500KB gzipped)
5. Lighthouse CI (performance > 90)

**Deliverable:** CI pipeline green on every push  
**Czas:** 3h

---

### 🔹 FAZA 66 — Bundle Optimization
**Cel:** Minimal bundle size  
**Zadania:**
1. Tree shaking audit (bundle analyzer)
2. Code splitting per route
3. Three.js selective imports (no full bundle)
4. Dynamic imports for heavy features (nesting, DXF parser)
5. Preload critical chunks
6. Target: < 200KB initial JS (gzipped)

**Deliverable:** Bundle analyzer report, optimized splits  
**Czas:** 3h

---

### 🔹 FAZA 67 — Image & Asset Optimization
**Cel:** Optimalne ładowanie tekstur i assets  
**Zadania:**
1. WebP/AVIF for textures (fallback PNG)
2. Responsive images (srcset)
3. Lazy loading below fold
4. CDN for static assets (Vercel Edge)
5. Texture atlas (sprite sheets for catalog)
6. Preload above-fold critical images

**Deliverable:** LCP < 2.5s, no layout shift  
**Czas:** 2.5h

---

### 🔹 FAZA 68 — SEO & Meta
**Cel:** Search engine optimization  
**Zadania:**
1. React Helmet (meta tags per page)
2. Open Graph tags (share previews)
3. Structured data (Product schema)
4. Sitemap generation
5. robots.txt
6. Canonical URLs

**Deliverable:** SEO audit pass  
**Czas:** 2h

---

### 🔹 FAZA 69 — Error Monitoring (Sentry)
**Cel:** Real-time error tracking w produkcji  
**Zadania:**
1. Sentry SDK integration
2. Source maps upload (Vite plugin)
3. Error boundaries → Sentry.captureException
4. Performance monitoring (transactions)
5. User context (who experienced the error)
6. Alert rules (Slack/email)

**Deliverable:** Sentry dashboard z alertami  
**Czas:** 2h

---

### 🔹 FAZA 70 — Feature Flags
**Cel:** Gradual rollout nowych features  
**Zadania:**
1. Feature flag system (simple: env vars, advanced: LaunchDarkly)
2. Flags: room_visualizer, collaboration, ar_mode
3. Conditional rendering per flag
4. Admin toggle panel
5. A/B testing support

**Deliverable:** 5+ feature flags active  
**Czas:** 2h

---

### 🔹 FAZA 71 — Haptic Feedback & Sound Design
**Cel:** Micro-feedback sensoryczny  
**Zadania:**
1. Click sounds (subtle, muted)
2. Success sound (order submitted)
3. Haptic on mobile (navigator.vibrate)
4. Sound toggle (settings)
5. Volume control

**Deliverable:** Subtle audio/haptic feedback  
**Czas:** 2h

---

### 🔹 FAZA 72 — Offline Mode
**Cel:** Działanie bez internetu  
**Zadania:**
1. IndexedDB for project storage
2. Offline indicator banner
3. Queue mutations (sync when online)
4. Texture cache (SW precache top 50 decors)
5. Conflict resolution on reconnect

**Deliverable:** App funkcjonuje offline (config + save)  
**Czas:** 4h

---

### 🔹 FAZA 73 — Import from External Formats
**Cel:** Import projektów z innych narzędzi  
**Zadania:**
1. Import DXF → parse → populate configurator
2. Import CSV cutting list → build project
3. Import JSON (own format backup)
4. Drag & drop file import
5. Validation + error report per import

**Deliverable:** Import z 3 formatów  
**Czas:** 4h

---

### 🔹 FAZA 74 — Plugin System (Extensibility)
**Cel:** Architektura pod rozszerzenia  
**Zadania:**
1. Plugin interface: `{ name, init, components, hooks }`
2. Plugin: "Blum Hardware" (custom fittings catalog)
3. Plugin: "Hettich Hardware" (alternative)
4. Plugin loader (dynamic import)
5. Plugin settings page

**Deliverable:** 2 pluginy demonstracyjne działają  
**Czas:** 5h

---

### 🔹 FAZA 75 — Performance Monitoring (Web Vitals)
**Cel:** Continuous performance tracking  
**Zadania:**
1. web-vitals library integration
2. Report: LCP, FID, CLS, INP, TTFB
3. Dashboard (custom or Vercel Analytics)
4. Alerts on regression
5. RUM (Real User Monitoring)

**Deliverable:** Web Vitals dashboard  
**Czas:** 2h

---

### 🔹 FAZA 76 — Security Hardening
**Cel:** Frontend security best practices  
**Zadania:**
1. CSP headers (Content Security Policy)
2. XSS protection (DOMPurify for user content)
3. CSRF tokens
4. Secure cookie flags
5. Dependency audit (npm audit)
6. Rate limiting awareness (UI feedback on 429)

**Deliverable:** Security checklist passed  
**Czas:** 2.5h

---

### 🔹 FAZA 77 — Documentation (Developer)
**Cel:** Onboarding nowych devów  
**Zadania:**
1. README.md (setup, architecture, conventions)
2. CONTRIBUTING.md (PR process, code style)
3. Architecture Decision Records (ADRs)
4. Component naming conventions
5. State management patterns doc
6. API integration guide

**Deliverable:** Dev docs kompletne  
**Czas:** 3h

---

### 🔹 FAZA 78 — User Documentation / Help Center
**Cel:** Pomoc dla end-userów  
**Zadania:**
1. Help center route (`/help`)
2. FAQ accordion
3. Video tutorials (embed)
4. Contextual help (? icons → tooltip/modal)
5. Search in help content
6. Feedback form ("Was this helpful?")

**Deliverable:** Help center z 20+ artykułami  
**Czas:** 3h

---

### 🔹 FAZA 79 — Beta Testing & Feedback
**Cel:** User testing + zbieranie feedbacku  
**Zadania:**
1. Beta flag (invite-only access)
2. In-app feedback widget (screenshot + text)
3. NPS survey (after order complete)
4. Hotjar/Session recording consent
5. Bug report shortcut (Ctrl+Shift+B)
6. Changelog modal (what's new)

**Deliverable:** System feedbacku aktywny  
**Czas:** 3h

---

### 🔹 FAZA 80 — Production Launch & Monitoring
**Cel:** Go-live z pełnym monitoringiem  
**Zadania:**
1. Production Vercel deployment (custom domain)
2. DNS: configurator.egger.com (lub subdomain klienta)
3. SSL certificate verification
4. Uptime monitoring (Better Stack)
5. Performance baseline snapshot
6. Launch announcement (email to beta users)
7. Post-launch war room (24h monitoring)
8. Rollback plan documented

**Deliverable:** 🚀 PRODUCTION LIVE  
**Czas:** 2h

---

## 📊 PODSUMOWANIE CZASOWE

| Blok | Fazy | Szacowany czas |
|------|------|----------------|
| Foundation (Vite, Tailwind, Layout) | 1–7 | 16.5h |
| Core Configurator | 8–16 | 28h |
| Furniture System | 17–21 | 22h |
| Export & Orders | 22–25 | 15h |
| Projects & Auth | 26–29 | 12.5h |
| UX Polish | 30–50 | 65h |
| Advanced Features | 51–60 | 37h |
| Quality & Testing | 61–66 | 24h |
| Optimization & Ops | 67–76 | 24h |
| Documentation & Launch | 77–80 | 11h |
| **TOTAL** | **1–80** | **~255h** |

---

## 🎯 PRIORYTETY (MVP vs Full)

### MVP (Fazy 1–25) — Demo-ready w ~80h
Konfigurator z wymiarami, materiałami, 3D preview, export DXF, basic order flow.

### Beta (Fazy 26–50) — Production-ready w ~145h  
Projects, auth, responsive, performance, animations, advanced UX.

### Full Product (Fazy 51–80) — Enterprise w ~255h  
Collaboration, AR, plugins, offline, docs, monitoring, launch.

---

## 🔧 TECH DECISIONS & RATIONALE

| Decision | Rationale |
|----------|-----------|
| Vite over CRA | 10x faster HMR, ESM native, better tree shaking |
| Zustand over Redux | Less boilerplate, perfect for configurator pattern |
| shadcn/ui over MUI | Copy-paste ownership, Tailwind native, smaller bundle |
| react-three-fiber over raw Three | Declarative, React lifecycle, easier state sync |
| Vitest over Jest | Native ESM, Vite-compatible, faster |
| No SSR (SPA) | Configurator is interactive-first, no SEO need for app |
| TypeScript strict | Catch dimension/material type errors at compile time |

---

## 🚨 RYZYKA & MITIGATION

| Risk | Impact | Mitigation |
|------|--------|------------|
| Three.js bundle size | LCP | Selective imports, code splitting |
| Texture memory (200+ decors) | OOM on mobile | Lazy load, atlas, dispose unused |
| DXF generation complexity | Backend bottleneck | Queue + progress indicator |
| Egger decor data licensing | Legal | Confirm usage rights with Egger |
| Mobile 3D performance | UX | LOD, reduced geometry, fallback 2D |
| Real-time collab complexity | Scope creep | Start with async (save/load), add RT later |

---

*Specyfikacja przygotowana: 27.06.2026*  
*Wersja: 1.0*  
*Autor: Hermes Agent (QA10)*
