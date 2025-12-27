import React, { Suspense, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Environment, useTexture } from '@react-three/drei';
import * as THREE from 'three';

// Fix for JSX IntrinsicElements errors
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

const IMG_URL = 'https://i.postimg.cc/0MCyHM7K/Gemini-Generated-Image-r6d4jjr6d4jjr6d4.png';

const Bubble = () => {
  const texture = useTexture(IMG_URL);
  
  // Maximale Schärfe für die 4K Textur aktivieren
  useEffect(() => {
    if (texture) {
      texture.anisotropy = 16;
      texture.minFilter = THREE.LinearMipmapLinearFilter;
      texture.magFilter = THREE.LinearFilter;
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
        />
      </mesh>
    </Float>
  );
};

const Hero = () => {
  const containerVars = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVars = {
    hidden: { y: 40, opacity: 0, filter: 'blur(10px)' },
    visible: { 
      y: 0, 
      opacity: 1, 
      filter: 'blur(0px)',
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    },
  };

  const letterVars = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 + i * 0.05,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center bg-[#050505] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 45 }}>
          <Suspense fallback={null}>
            <Bubble />
            <Environment preset="night" />
            <ambientLight intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
      
      <motion.div 
        variants={containerVars}
        initial="hidden"
        animate="visible"
        className="z-10 text-center mix-blend-exclusion pointer-events-none select-none px-4"
      >
        <h1 className="leading-[0.85] font-black tracking-tighter flex flex-col items-center uppercase">
          <div className="flex items-baseline mb-[-1vw]">
            <motion.span variants={itemVars} className="text-[12vw] font-sans">
              LEARN
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.3 }}
              className="font-serif italic font-normal lowercase text-[8vw] px-4"
            >
              to
            </motion.span>
          </div>
          
          <div className="text-[14vw] flex">
            {"VIBECODE".split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVars}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, letterSpacing: "1em" }}
            animate={{ opacity: 0.6, letterSpacing: "0.3em" }}
            transition={{ duration: 2, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-[5vw] font-light mt-4"
          >
            PROPERLY
          </motion.div>
        </h1>
      </motion.div>
    </section>
  );
};

const ContentSection = () => {
  return (
    <section className="min-h-screen w-full bg-[#050505] flex flex-col md:flex-row items-center border-t border-white/5">
      <div className="w-full md:w-1/2 p-12 md:p-24 space-y-8">
        <motion.h2 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-sans font-bold tracking-tighter leading-none uppercase"
        >
          Sharp <br /> Clarity.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-xl font-light leading-relaxed max-w-md"
        >
          Experience visual precision with 4K textures mapped onto dynamic geometries. 
          The intersection of technical performance and high-end design.
        </motion.p>
      </div>
      
      <div className="w-full md:w-1/2 h-[70vh] md:h-screen p-8 md:p-20">
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full overflow-hidden rounded-sm bg-neutral-900 shadow-2xl relative"
        >
          <img 
            src={IMG_URL} 
            alt="Gemini-Generated-Image-r6d4jjr6d4jjr6d4" 
            className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
            style={{ 
              imageRendering: 'high-quality',
              display: 'block'
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <main className="bg-[#050505] text-primary selection:bg-white selection:text-black antialiased">
      <Hero />
      <ContentSection />
    </main>
  );
};

export default App;