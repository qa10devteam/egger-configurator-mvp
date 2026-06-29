import React, { useState, useEffect, lazy, Suspense } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Skeleton } from './Skeleton';
import { Pagination } from './Pagination';
import { Grid } from './components/Grid';
import { motion } from 'framer-motion';
import { cacheProducts, getCachedProducts } from './offlineCache';

const ARViewer = lazy(() => import('./ARViewer'));
import ThreeViewer from './ThreeViewer';

// Simple material options – in a real app this could be fetched from an API
const MATERIALS = [
  { id: 'm1', name: 'Sklejka' },
  { id: 'm2', name: 'MDF' },
  { id: 'm3', name: 'Stal' },
];

function Wizard() {
  const [step, setStep] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [dimensions, setDimensions] = useState({ width: '', height: '', depth: '' });
  const [cachedProducts, setCachedProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Load products using react-query (caching, background refetch, etc.)
  const { data: products = [], isLoading, error } = useQuery(['products'], () =>
    axios.get('/products.json').then(res => res.data)
  );

  // Cache products for offline use
  useEffect(() => {
    if (products && products.length) {
      cacheProducts(products);
    }
  }, [products]);

  // Load cached products on error
  useEffect(() => {
    if (error) {
      getCachedProducts().then(setCachedProducts);
    }
  }, [error]);

  const paginatedProducts = products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleNext = () => setStep(prev => Math.min(prev + 1, 4));
  const handleBack = () => setStep(prev => Math.max(prev - 1, 1));

  const handleDimensionChange = (e) => {
    const { name, value } = e.target;
    setDimensions(prev => ({ ...prev, [name]: value }));
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>

            <h2>Wybierz produkt</h2>
            {isLoading && <p>Ładowanie produktów…</p>}
            {error && <p style={{ color: 'red' }}>Błąd ładowania: {error.message}</p>}
            <Grid aria-label="product list">
              {(error ? cachedProducts : paginatedProducts).map(p => (
                <li key={p.id} role="button" style={{ cursor: 'pointer', marginBottom: '0.5rem' }}
                    onClick={() => { setSelectedProduct(p); handleNext(); }}>
                  {p.name}
                </li>
              ))}
            </Grid>
            <Pagination
              totalItems={error ? cachedProducts.length : products.length}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </motion.div>
        );
      case 2:
        return (
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
            <h2>Wybierz materiał</h2>
            <ul aria-label="material list">
              {MATERIALS.map(m => (
                <li key={m.id} role="button" style={{ cursor: 'pointer', marginBottom: '0.5rem' }}
                    onClick={() => { setSelectedMaterial(m); handleNext(); }}>
                  {m.name}
                </li>
              ))}
            </ul>
            <button onClick={handleBack}>← Wstecz</button>
          </motion.div>
        );
      case 3:
        return (
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
            <h2>Podaj wymiary (mm)</h2>
            <label>
              Szerokość:
              <input type="number" name="width" value={dimensions.width} onChange={handleDimensionChange} />
            </label>
            <br />
            <label>
              Wysokość:
              <input type="number" name="height" value={dimensions.height} onChange={handleDimensionChange} />
            </label>
            <br />
            <label>
              Głębokość:
              <input type="number" name="depth" value={dimensions.depth} onChange={handleDimensionChange} />
            </label>
            <br />
            <button onClick={handleBack}>← Wstecz</button>
            <button onClick={handleNext} disabled={!dimensions.width || !dimensions.height || !dimensions.depth}>Dalej →</button>
          </motion.div>
        );
      case 4:
        return (
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
            <h2>Podgląd 3D</h2>
            <Suspense fallback={<Skeleton height="300px" />}> 
              <ThreeViewer modelUrl={selectedProduct?.modelUrl || ''} />
            </Suspense>
            <button onClick={handleBack}>← Wstecz</button>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ padding: '1rem', fontFamily: 'Inter, sans-serif' }}>
      {renderStep()}
    </div>
  );
}

export default Wizard;
