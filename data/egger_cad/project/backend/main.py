from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import ezdxf, os, uuid

app = FastAPI()

class ConfigureRequest(BaseModel):
    product_code: str
    width_mm: int
    depth_mm: int
    height_mm: int
    material: str | None = None

@app.post('/configure')
async def configure(req: ConfigureRequest):
    # Simple validation
    if req.width_mm <= 0 or req.depth_mm <= 0 or req.height_mm <= 0:
        raise HTTPException(status_code=400, detail='Invalid dimensions')
    # Generate a minimal DXF file
    doc = ezdxf.new(dxfversion='R2010')
    msp = doc.modelspace()
    # Draw a simple rectangular prism outline (2D projection)
    w, d, h = req.width_mm/1000, req.depth_mm/1000, req.height_mm/1000
    # rectangle base
    msp.add_lwpolyline([(0,0), (w,0), (w,d), (0,d), (0,0)])
    # Save file
    filename = f"config_{uuid.uuid4().hex[:8]}.dxf"
    out_path = os.path.join('/data', filename)
    doc.saveas(out_path)
    return {
        'dxf_url': f'/static/{filename}',
        'preview_url': f'https://example.com/preview/{filename}.png',
        'message': 'DXF generated'
    }

@app.post('/submit')
async def submit(dxf_url: str):
    # In real case, forward to Homag API – here we mock response
    job_id = f"JOB-{uuid.uuid4().hex[:6].upper()}"
    return {'job_id': job_id, 'status': 'submitted'}
