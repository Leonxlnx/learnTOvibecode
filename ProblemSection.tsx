
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

  const smoothProgress = useSpring(scrollYProgress, { damping: 15, stiffness: 80 });
  
  // Parallax for background elements
  const yBg = useTransform(smoothProgress, [0, 1], [0, -300]);
  const yBg2 = useTransform(smoothProgress, [0, 1], [0, -500]);
  
  const words = ["LEGACY", "BLOAT", "JQUERY", "SPAGHETTI", "LOADING...", "404", "DIV SOUP", "TEMPLATES"];

  return (
    <section ref={containerRef} className="relative w-full min-h-[120vh] bg-[#0e0e0e] flex flex-col items-center justify-center overflow-hidden border-t border-white/10 py-32 z-10">
      
      {/* --- LAYER 0: 3D BACKGROUND (Brighter) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-100">
        <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
          <Suspense fallback={null}>
            <WireframeWave />
          </Suspense>
        </Canvas>
      </div>

      {/* --- LAYER 1: ATMOSPHERE --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e0e] via-transparent to-[#0e0e0e]" />
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* --- LAYER 2: FLOATING DEBRIS (More Words) --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none font-black text-[#222]">
        
        {words.map((word, i) => (
             <motion.div 
             key={i}
             style={{ 
                 y: i % 2 === 0 ? yBg : yBg2, 
                 x: Math.random() * 100 - 50,
                 rotate: Math.random() * 20 - 10 
             }} 
             className="absolute"
             initial={{ 
                 top: `${Math.random() * 80 + 10}%`, 
                 left: `${Math.random() * 80 + 10}%`,
                 scale: Math.random() * 1.5 + 0.5
             }}
           >
              <h3 className="text-[8vw] md:text-[10vw] leading-none tracking-tighter opacity-20 hover:opacity-100 transition-opacity duration-300">
                {word}
              </h3>
           </motion.div>
        ))}

      </div>

      {/* --- LAYER 3: FOREGROUND CONTENT --- */}
      <div className="relative z-20 text-center px-4 mix-blend-screen max-w-4xl mx-auto">
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="text-7xl md:text-[8rem] font-black text-white mb-8 tracking-tighter uppercase leading-[0.85]">
              <span className="block text-[#444]">STATIC</span>
              <span className="block text-[#888]">IS</span>
              <span className="block text-white">BROKEN.</span>
            </h2>

            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent my-12" />

            <p className="text-xl md:text-3xl text-gray-300 font-light leading-relaxed">
              We don't build websites. We architect <span className="text-white font-bold border-b border-white">digital organisms</span>.
            </p>
        </motion.div>
      </div>

    </section>
  );
};

export default ProblemSection;
