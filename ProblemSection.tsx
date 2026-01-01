
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

  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });
  
  // Parallax for background elements (strictly behind)
  const yBg = useTransform(smoothProgress, [0, 1], [0, -200]);
  const opacityText = useTransform(smoothProgress, [0.2, 0.5, 0.8], [0, 1, 0]);

  return (
    <section ref={containerRef} className="relative w-full min-h-[110vh] bg-[#030303] flex flex-col items-center justify-center overflow-hidden border-t border-white/5 py-32 z-10">
      
      {/* --- LAYER 0: 3D BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <Suspense fallback={null}>
            <WireframeWave />
          </Suspense>
        </Canvas>
      </div>

      {/* --- LAYER 1: ATMOSPHERE --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* --- LAYER 2: FLOATING DEBRIS (Strictly Background) --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        
        {/* Huge Ghost Text 1 */}
        <motion.div 
          style={{ y: yBg, x: -100, rotate: -5 }} 
          className="absolute top-[10%] left-[-10%] opacity-[0.04]"
        >
           <h3 className="text-[15vw] font-black text-white leading-none tracking-tighter">
             LEGACY
           </h3>
        </motion.div>

        {/* Huge Ghost Text 2 */}
        <motion.div 
          style={{ y: useTransform(smoothProgress, [0, 1], [100, -100]), rotate: 5 }} 
          className="absolute bottom-[10%] right-[-10%] opacity-[0.04] text-right"
        >
           <h3 className="text-[15vw] font-serif italic text-white leading-none">
             BLOAT
           </h3>
        </motion.div>

      </div>

      {/* --- LAYER 3: FOREGROUND CONTENT --- */}
      <div className="relative z-20 text-center px-4 mix-blend-screen">
        <motion.div style={{ opacity: opacityText }}>
            
            <h2 className="text-6xl md:text-9xl font-black text-white mb-6 tracking-tighter uppercase leading-[0.85]">
              <span className="block text-gray-600 blur-[1px]">STATIC</span>
              <span className="block text-gray-400">IS</span>
              <span className="block text-white" style={{ textShadow: "0 0 30px rgba(255,255,255,0.4)" }}>BROKEN.</span>
            </h2>

            <div className="w-[2px] h-24 bg-gradient-to-b from-white to-transparent mx-auto my-12 opacity-30" />

            <p className="max-w-xl mx-auto text-lg md:text-xl text-gray-400 font-mono font-light leading-relaxed tracking-wide">
              The old web is dying. <br/>
              <span className="text-white font-bold">Vibecoding</span> breathes life back into the machine.
            </p>
        </motion.div>
      </div>

    </section>
  );
};

export default ProblemSection;
