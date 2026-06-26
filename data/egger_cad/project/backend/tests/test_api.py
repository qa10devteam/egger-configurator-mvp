import pytest
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_configure_success():
    payload = {
        "product_code": "EGG-DECOR-001",
        "width_mm": 800,
        "depth_mm": 600,
        "height_mm": 400,
        "material": "Egger Decorative"
    }
    response = client.post("/configure", json=payload)
    assert response.status_code == 200
    data = response.json()
    assert "dxf_url" in data
    assert data["message"] == "DXF generated"

def test_configure_invalid_dimensions():
    payload = {
        "product_code": "EGG-DECOR-001",
        "width_mm": -10,
        "depth_mm": 0,
        "height_mm": 0,
        "material": "Egger Decorative"
    }
    response = client.post("/configure", json=payload)
    assert response.status_code == 400
    assert response.json()["detail"] == "Invalid dimensions"
