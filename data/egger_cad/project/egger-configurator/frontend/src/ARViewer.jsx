import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { XR } from '@react-three/xr';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

function ARViewer({ modelUrl }) {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath('/draco/'); // adjust path as needed
  loader.setDRACOLoader(dracoLoader);
  const gltf = useLoader(() => loader, modelUrl);
  return (
    <Canvas>
      <XR>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <primitive object={gltf.scene} />
      </XR>
    </Canvas>
  );
}

export default ARViewer;
