import React, { Suspense } from 'react';
import { motion, Variants } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import Bubble from './Bubble';

// Fix for TypeScript not recognizing R3F elements in this file scope
declare global {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: any;
      mesh: any;
      sphereGeometry: any;
    }
  }
}

const Hero = () => {
  // Explicitly typing Variants to ensure nested transition properties are correctly validated
  const containerVars: Variants = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Casting ease arrays to a 4-number tuple to satisfy Framer Motion's Easing type requirement
  const itemVars: Variants = {
    hidden: { y: 40, opacity: 0, filter: 'blur(10px)' },
    visible: { 
      y: 0, 
      opacity: 1, 
      filter: 'blur(0px)',
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    },
  };

  const letterVars: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 + i * 0.05,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number],
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
        <h1 className="leading-[0.85] font-black tracking-tighter flex flex-col items-center uppercase text-white">
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
            transition={{ duration: 2, delay: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="font-sans text-[5vw] font-light mt-4"
          >
            PROPERLY
          </motion.div>
        </h1>
      </motion.div>
    </section>
  );
};

export default Hero;