import React, { useEffect } from 'react';
import { Float, MeshDistortMaterial, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { IMG_URL } from '../../utils/constants';

// Fix for TypeScript not recognizing R3F elements in this file scope
declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      sphereGeometry: any;
      ambientLight: any;
    }
  }
}

const Bubble = () => {
  const texture = useTexture(IMG_URL);
  
  useEffect(() => {
    if (texture) {
      texture.anisotropy = 16;
      texture.minFilter = THREE.LinearMipmapLinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.needsUpdate = true;
    }
  }, [texture]);

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh scale={2.4}>
        <sphereGeometry args={[1, 128, 128]} />
        <MeshDistortMaterial 
          map={texture}
          distort={0.25} 
          speed={1.8} 
          roughness={0.05} 
          metalness={0.9} 
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
    </Float>
  );
};

export default Bubble;