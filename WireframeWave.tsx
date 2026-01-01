
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const WireframeWave = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    
    // Gentle undulation logic
    const positionAttribute = meshRef.current.geometry.attributes.position;
    for (let i = 0; i < positionAttribute.count; i++) {
      const x = positionAttribute.getX(i);
      const y = positionAttribute.getY(i);
      
      // Calculate wave
      const z = Math.sin(x * 0.5 + time * 0.5) * Math.cos(y * 0.5 + time * 0.3) * 0.5;
      
      positionAttribute.setZ(i, z);
    }
    positionAttribute.needsUpdate = true;
    
    // Slow rotation
    meshRef.current.rotation.z = time * 0.05;
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2.5, 0, 0]} position={[0, 0, -2]}>
      <planeGeometry args={[15, 15, 32, 32]} />
      <meshBasicMaterial 
        color="#333" 
        wireframe 
        transparent 
        opacity={0.15} 
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

export default WireframeWave;
