# Egger + Homag Konfigurator MVP

## Cel projektu
Stworzyć minimalny konfigurator mebli na wymiar, który:
- wykorzystuje bazę danych **Egger** (`egger.db`),
- mapuje `product_code` → parametry CNC (`cnc_params`),
- generuje plik **DXF** i podgląd 3‑D,
- integruje się z **mockowanym API Homag** (Flask).

## Struktura repozytorium
```
project/
├─ backend/          # FastAPI + endpointy /configure, /submit
│   ├─ Dockerfile
│   ├─ requirements.txt
│   ├─ main.py
│   └─ tests/
│       └─ test_api.py
├─ frontend/         # React + Three.js (placeholder)
│   ├─ Dockerfile
│   └─ package.json
├─ mock_homag/       # Flask mock API (jobs, status)
│   ├─ Dockerfile
│   └─ app.py
├─ docker-compose.yml
└─ .github/workflows/ci.yml
```

## Instalacja i uruchomienie (lokalnie)
```bash
cd ~/data/egger_cad/project
# budujemy i uruchamiamy wszystkie serwisy
docker compose up --build
```
- **Backend** – http://localhost:8000
- **Frontend** – http://localhost:3000 (placeholder UI)
- **Mock Homag API** – http://localhost:5001

## API FastAPI
### POST `/configure`
```json
{
  "product_code": "EGG-DECOR-001",
  "width_mm": 800,
  "depth_mm": 600,
  "height_mm": 400,
  "material": "Egger Decorative"
}
```
**Response** (200):
```json
{
  "dxf_url": "/static/config_1a2b3c4d.dxf",
  "preview_url": "https://example.com/preview/config_1a2b3c4d.png",
  "message": "DXF generated"
}
```
### POST `/submit`
```json
{ "dxf_url": "/static/config_1a2b3c4d.dxf" }
```
**Response** (200):
```json
{ "job_id": "JOB-ABC123", "status": "submitted" }
```

## Mock Homag API (Flask)
- `POST /jobs` – przyjmuje JSON, zwraca `job_id` i status `queued`.
- `GET /jobs/<job_id>` – zwraca status `completed` (symulacja).

## CI/CD (GitHub Actions)
- Lintowanie kodu Python (`ruff`).
- Testy (`pytest`).
- Budowanie obrazów Docker (`docker compose build`).

## TODO (do zrealizowania)
1. Uzupełnić tabelę `cnc_params` rzeczywistymi wartościami z dokumentacji Homag (wstępnie dodano przykładowe wiersze).
2. Rozbudować frontend – formularz wyboru, podgląd 3‑D (Three.js).
3. Rozszerzyć mock Homag – obsługa tokenu auth, symulacja postępu jobu.
4. Dodać więcej testów jednostkowych i integracyjnych.
5. Publikacja obrazów Docker do rejestru.
6. Przygotować demo‑video i dokumentację użytkownika.

---
*Projekt przygotowany w ramach researchu Mateusza Jakimowa (QA10 sp. z o.o.).*