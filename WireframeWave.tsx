
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const WireframeWave = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * 0.2;
    meshRef.current.rotation.y = time * 0.3;
  });

  return (
    <>
      <ambientLight intensity={2} />
      <pointLight position={[10, 10, 10]} intensity={3} color="#fff" />
      <pointLight position={[-10, -10, -10]} intensity={3} color="#00ffff" />
      
      <Sphere args={[1, 128, 128]} scale={2.5} ref={meshRef}>
        <MeshDistortMaterial
          color="#ffffff"
          attach="material"
          distort={0.5} 
          speed={2} 
          roughness={0}
          metalness={0.1}
          wireframe={true}
          emissive="#444444"
          emissiveIntensity={0.5}
        />
      </Sphere>
      
      {/* Inner Core for glow */}
       <Sphere args={[1, 32, 32]} scale={1.8}>
        <meshBasicMaterial
          color="#00ffff"
          wireframe={true}
          transparent={true}
          opacity={0.1}
        />
      </Sphere>
    </>
  );
};

export default WireframeWave;
