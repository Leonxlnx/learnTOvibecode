
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
      const z = Math.sin(x * 0.4 + time * 0.6) * Math.cos(y * 0.3 + time * 0.4) * 0.8;
      
      positionAttribute.setZ(i, z);
    }
    positionAttribute.needsUpdate = true;
    
    // Slow rotation
    meshRef.current.rotation.z = time * 0.02;
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2.2, 0, 0]} position={[0, 0, -1]}>
      <planeGeometry args={[20, 20, 40, 40]} />
      <meshBasicMaterial 
        color="#888888" 
        wireframe 
        transparent 
        opacity={0.25} 
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

export default WireframeWave;
