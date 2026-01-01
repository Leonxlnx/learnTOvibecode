
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const WireframeWave = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    // Complex organic rotation
    meshRef.current.rotation.x = time * 0.1;
    meshRef.current.rotation.y = time * 0.15;
  });

  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#555" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#222" />
      
      <Sphere args={[1, 128, 128]} scale={2.2} ref={meshRef}>
        <MeshDistortMaterial
          color="#1a1a1a"
          attach="material"
          distort={0.6} // Heavy distortion
          speed={1.5} // Fast movement
          roughness={0.2}
          metalness={0.8}
          wireframe={true} // Tech look
          emissive="#000000"
        />
      </Sphere>
      
      {/* Secondary inner core for depth */}
      <Sphere args={[1, 64, 64]} scale={1.2}>
         <meshBasicMaterial color="#333" wireframe transparent opacity={0.05} />
      </Sphere>
    </>
  );
};

export default WireframeWave;
