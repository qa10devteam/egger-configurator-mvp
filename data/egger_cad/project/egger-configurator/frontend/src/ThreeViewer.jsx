import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function ThreeViewer({ modelUrl }) {
  // If no model URL is provided, show a simple placeholder box.
  if (!modelUrl) {
    return (
      <Canvas camera={{ position: [2, 2, 2] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <OrbitControls />
        <Box args={[1, 1, 1]}>
          <meshStandardMaterial color="#2196f3" />
        </Box>
      </Canvas>
    );
  }

  const gltf = useLoader(GLTFLoader, modelUrl);
  return (
    <Canvas camera={{ position: [2, 2, 2] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <OrbitControls />
      <primitive object={gltf.scene} />
    </Canvas>
  );
}

export default ThreeViewer;
