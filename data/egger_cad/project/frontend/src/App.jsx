import React, { useState } from 'react';

// Backend URL – Vercel will inject REACT_APP_API_URL at build time.
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8002';

function App() {
  // Minimal state – only the fields the configurator needs.
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
    <main className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Egger Configurator</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="product_code">
            Product code
          </label>
          <input
            id="product_code"
            name="product_code"
            value={form.product_code}
            onChange={handleChange}
            required
            className="w-full border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="width_mm">
              Width (mm)
            </label>
            <input
              id="width_mm"
              name="width_mm"
              type="number"
              value={form.width_mm}
              onChange={handleChange}
              required
              className="w-full border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="depth_mm">
              Depth (mm)
            </label>
            <input
              id="depth_mm"
              name="depth_mm"
              type="number"
              value={form.depth_mm}
              onChange={handleChange}
              required
              className="w-full border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="height_mm">
            Height (mm)
          </label>
          <input
            id="height_mm"
            name="height_mm"
            type="number"
            value={form.height_mm}
            onChange={handleChange}
            required
            className="w-full border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="material">
            Material (optional)
          </label>
          <input
            id="material"
            name="material"
            value={form.material}
            onChange={handleChange}
            className="w-full border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Generate DXF
        </button>
      </form>
      {error && <p className="text-red-600 mt-4">{error}</p>}
      {result && (
        <section className="mt-6 p-4 border rounded bg-gray-50">
          <p className="font-medium mb-2">{result.message}</p>
          <p className="break-all">
            DXF:{' '}
            <a
              href={result.dxf_url.startsWith('http') ? result.dxf_url : `${API_URL}${result.dxf_url}`}
              target="_blank"
              rel="noreferrer"
              className="text-indigo-600 underline"
            >
              {result.dxf_url}
            </a>
          </p>
          {result.preview_url && (
            <div className="mt-4">
              <img
                src={result.preview_url.startsWith('http') ? result.preview_url : `${API_URL}${result.preview_url}`}
                alt="Preview"
                className="max-w-full h-auto border rounded"
              />
            </div>
          )}
        </section>
      )}
    </main>
  );
}

export default App;
