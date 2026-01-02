
import React, { useRef, Suspense } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import WireframeWave from './WireframeWave';
import { ArrowRight, Sparkles } from 'lucide-react';

const ProblemSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 80 });
  
  // Animation Sequence
  const opacity1 = useTransform(smoothProgress, [0.05, 0.2, 0.25], [0, 1, 0]);
  const y1 = useTransform(smoothProgress, [0.05, 0.25], [50, -50]);

  const opacity2 = useTransform(smoothProgress, [0.3, 0.45, 0.5], [0, 1, 0]);
  // Move y2 randomly to enhance "wrong alignment"
  const y2 = useTransform(smoothProgress, [0.3, 0.5], [20, 100]); 

  const opacity3 = useTransform(smoothProgress, [0.55, 0.7, 0.75], [0, 1, 0]);
  const y3 = useTransform(smoothProgress, [0.55, 0.75], [50, -50]);
  
  const opacityFinal = useTransform(smoothProgress, [0.8, 0.9], [0, 1]);
  const scaleFinal = useTransform(smoothProgress, [0.8, 1], [0.9, 1]);

  return (
    <section ref={containerRef} className="relative w-full h-[400vh] bg-[#050505] z-10">
      
      {/* --- STICKY BACKGROUND --- */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* Three.js Layer */}
        <div className="absolute inset-0 z-10">
           <Canvas camera={{ position: [0, 0, 5], fov: 60 }} gl={{ alpha: true }}>
            <Suspense fallback={null}>
              <WireframeWave />
            </Suspense>
          </Canvas>
        </div>

        {/* Content Container */}
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none px-6">
          
          {/* QUESTION 1: ACTUAL PURPLE GRADIENT */}
          <motion.div style={{ opacity: opacity1, y: y1 }} className="absolute text-center">
             <h2 className="text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#7c3aed] via-[#d946ef] to-[#c026d3] uppercase tracking-tighter drop-shadow-2xl">
                Purple Gradient?
             </h2>
          </motion.div>

          {/* QUESTION 2: WRONG ALIGNMENT (Rotated, off-center) */}
          <motion.div 
            style={{ opacity: opacity2, y: y2 }} 
            className="absolute left-10 md:left-[20%] rotate-12"
          >
             <h2 className="text-5xl md:text-8xl font-serif italic text-white/90 translate-x-12 skew-y-6">
                Wrong Alignment?
             </h2>
          </motion.div>

          {/* QUESTION 3: TOO GENERIC (Standard Inter font, boring grey) */}
          <motion.div style={{ opacity: opacity3, y: y3 }} className="absolute text-center">
             <h2 className="text-6xl md:text-8xl font-sans font-normal text-[#666666] tracking-normal">
                Too Generic?
             </h2>
          </motion.div>

          {/* FINAL PITCH - PREMIUM LIQUID GLASS */}
          <motion.div style={{ opacity: opacityFinal, scale: scaleFinal }} className="absolute text-center max-w-3xl w-full pointer-events-auto px-4">
              
              <div className="group relative rounded-[2.5rem] bg-black/40 backdrop-blur-2xl border border-white/10 overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-[0_0_80px_-20px_rgba(255,255,255,0.15)]">
                
                {/* Liquid Metal Border Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] animate-[spin_4s_linear_infinite] opacity-30" />
                </div>
                
                {/* Inner Content Layer */}
                <div className="relative z-10 p-12 md:p-20 bg-[#0a0a0a]/80 m-[1px] rounded-[2.4rem]">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    
                    <h3 className="text-2xl md:text-4xl text-white font-medium leading-relaxed mb-12 tracking-tight">
                      This free course is perfect for you if you are new, if you have experience, or if you just want to refresh and get better.
                    </h3>
                    
                    <button className="relative inline-flex items-center justify-center px-10 py-5 bg-white text-black text-lg font-bold uppercase tracking-widest rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]">
                       <span className="relative z-10 flex items-center gap-3">
                         Visit
                         <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                       </span>
                       <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-white to-gray-100 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                    </button>
                    
                    {/* Decorative Sparkle */}
                    <Sparkles className="absolute top-8 right-8 text-white/20 w-8 h-8 group-hover:text-white/60 group-hover:rotate-180 transition-all duration-700" />
                </div>
              </div>

          </motion.div>

        </div>
      </div>

    </section>
  );
};

export default ProblemSection;
