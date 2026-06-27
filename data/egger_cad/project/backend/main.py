from fastapi import FastAPI, HTTPException
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
import ezdxf, os, uuid, json
from pathlib import Path

# Ensure the data directory exists
DATA_DIR = Path(os.getenv('DATA_DIR', './data'))
os.makedirs(DATA_DIR, exist_ok=True)
app = FastAPI()
app.mount("/static", StaticFiles(directory=str(DATA_DIR)), name="static")

# Load CNC parameters once at startup
CNC_PARAMS_PATH = Path(__file__).parent / "cnc_params.json"
try:
    with open(CNC_PARAMS_PATH, "r", encoding="utf-8") as f:
        CNC_PARAMS = json.load(f)
except Exception as e:
    CNC_PARAMS = []
    # Log the error – in production use proper logging
    print(f"Failed to load CNC params: {e}")

class ConfigureRequest(BaseModel):
    product_code: str
    width_mm: int
    depth_mm: int
    height_mm: int
    material: str | None = None

def get_cnc_params(product_code: str):
    # Return first matching entry (could be extended to choose variant)
    for entry in CNC_PARAMS:
        if entry.get("product_code") == product_code:
            return entry
    return None

@app.post('/configure')
async def configure(req: ConfigureRequest):
    # Simple validation
    if req.width_mm <= 0 or req.depth_mm <= 0 or req.height_mm <= 0:
        raise HTTPException(status_code=400, detail='Invalid dimensions')
    # Lookup CNC parameters
    cnc = get_cnc_params(req.product_code)
    if not cnc:
        raise HTTPException(status_code=404, detail='CNC parameters not found for product')
    # Generate a minimal DXF file (2D rectangle as placeholder)
    doc = ezdxf.new(dxfversion='R2010')
    msp = doc.modelspace()
    w, d, h = req.width_mm / 1000, req.depth_mm / 1000, req.height_mm / 1000
    # rectangle base
    msp.add_lwpolyline([(0,0), (w,0), (w,d), (0,d), (0,0)])
    # Save DXF to the mounted /data directory so it is served statically
    filename = f"config_{uuid.uuid4().hex[:8]}.dxf"
    dxf_path = os.path.join(str(DATA_DIR), filename)
    doc.saveas(dxf_path)
    # Generate PNG preview using ezdxf's matplotlib addon
    # Generate PNG preview using ezdxf's matplotlib addon (qsave)
    try:
        from ezdxf.addons.drawing import matplotlib as ezdxf_matplotlib
        png_filename = f"{filename}.png"
        png_path = os.path.join(str(DATA_DIR), png_filename)
        ezdxf_matplotlib.qsave(msp, png_path)
    except Exception as e:
        # If preview generation fails, log and continue without preview
        print(f"Failed to generate preview PNG: {e}")
        png_filename = None
    # Return URLs (DXF always available, preview optional)
    preview_url = f"/static/{png_filename}" if png_filename else None
    return {
        'dxf_url': f'/static/{filename}',
        'preview_url': preview_url,
        'message': 'DXF generated',
        'cnc_params': cnc
    }

@app.post('/submit')
async def submit(payload: dict):
    """Handle DXF submission.
    Returns a mock job identifier and status without contacting an external Homag API.
    """
    dxf_url = payload.get('dxf_url')
    if not dxf_url:
        raise HTTPException(status_code=400, detail='dxf_url required')
    # Generate a mock job ID locally
    job_id = f"JOB-{uuid.uuid4().hex[:6].upper()}"
    return {'job_id': job_id, 'status': 'queued'}
