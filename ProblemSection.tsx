
import React, { useRef, Suspense } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import WireframeWave from './WireframeWave';

const ProblemSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 80 });
  
  // Opacity transitions for the text sequence
  const opacity1 = useTransform(smoothProgress, [0.1, 0.25, 0.3], [0, 1, 0]);
  const opacity2 = useTransform(smoothProgress, [0.3, 0.45, 0.5], [0, 1, 0]);
  const opacity3 = useTransform(smoothProgress, [0.5, 0.65, 0.7], [0, 1, 0]);
  const opacityFinal = useTransform(smoothProgress, [0.75, 0.9], [0, 1]);

  const scaleFinal = useTransform(smoothProgress, [0.75, 1], [0.9, 1]);

  return (
    <section ref={containerRef} className="relative w-full h-[250vh] bg-[#050505] flex flex-col items-center justify-start overflow-hidden border-t border-white/5 z-10">
      
      {/* --- LAYER 0: 3D BACKGROUND (Darker, Premium) --- */}
      <div className="sticky top-0 h-screen w-full inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <Suspense fallback={null}>
            <WireframeWave />
          </Suspense>
        </Canvas>
        
        {/* Vignette & Noise */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_90%)]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* --- LAYER 1: SCROLL INTERROGATION --- */}
      <div className="relative z-20 w-full max-w-4xl mx-auto px-6 h-full flex flex-col items-center">
        
        {/* Question 1 */}
        <div className="absolute top-[20vh] w-full text-center">
             <motion.h2 style={{ opacity: opacity1, y: useTransform(smoothProgress, [0.1, 0.3], [50, -50]) }} className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-purple-500 to-purple-900 uppercase tracking-tighter">
                Purple<br/>Gradient?
             </motion.h2>
        </div>

        {/* Question 2 */}
        <div className="absolute top-[20vh] w-full text-center">
             <motion.h2 style={{ opacity: opacity2, rotate: 2, y: useTransform(smoothProgress, [0.3, 0.5], [50, -50]) }} className="text-6xl md:text-8xl font-serif italic text-white/40 tracking-widest">
                Wrong<br/>Alignment?
             </motion.h2>
        </div>

        {/* Question 3 */}
        <div className="absolute top-[20vh] w-full text-center">
             <motion.h2 style={{ opacity: opacity3, scale: 0.8, y: useTransform(smoothProgress, [0.5, 0.7], [50, -50]) }} className="text-6xl md:text-8xl font-black text-gray-600 uppercase tracking-tighter line-through decoration-red-500/50">
                TOO<br/>GENERIC?
             </motion.h2>
        </div>

        {/* FINAL STATE */}
        <div className="absolute top-[30vh] w-full text-center mix-blend-screen">
             <motion.div style={{ opacity: opacityFinal, scale: scaleFinal }}>
                <p className="text-xl md:text-2xl font-mono text-gray-400 mb-6">
                    Or just want to explore...
                </p>
                <h2 className="text-7xl md:text-[9vw] font-black text-white leading-none tracking-tighter">
                    THE VIBECODE<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-800">WORLD</span>
                </h2>
             </motion.div>
        </div>

      </div>

    </section>
  );
};

export default ProblemSection;
