import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';

const API_URL = 'http://localhost:8000'; // backend URL (adjust for Vercel env)

function App() {
  const [form, setForm] = useState({
    product_code: '',
    width_mm: '',
    depth_mm: '',
    height_mm: '',
    material: ''
  });
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError(null);
    try {
      const resp = await fetch(`${API_URL}/configure`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          product_code: form.product_code,
          width_mm: Number(form.width_mm),
          depth_mm: Number(form.depth_mm),
          height_mm: Number(form.height_mm),
          material: form.material || undefined
        })
      });
      if (!resp.ok) throw new Error('Invalid request');
      const data = await resp.json();
      setResult(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Egger Configurator</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
        <label>
          Product code:
          <input name="product_code" value={form.product_code} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Width (mm):
          <input name="width_mm" type="number" value={form.width_mm} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Depth (mm):
          <input name="depth_mm" type="number" value={form.depth_mm} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Height (mm):
          <input name="height_mm" type="number" value={form.height_mm} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Material:
          <input name="material" value={form.material} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Generate DXF</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {result && (
        <div>
          <p>{result.message}</p>
          <p>DXF: <a href={result.dxf_url} target="_blank" rel="noreferrer">{result.dxf_url}</a></p>
          {/* Simple 3‑D preview – rotating cube as placeholder */}
          <Canvas style={{ height: 300, background: '#f0f0f0' }}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box args={[1, 1, 1]}>
              <meshStandardMaterial color="orange" />
            </Box>
            <OrbitControls />
          </Canvas>
        </div>
      )}
    </div>
  );
}

export default App;
