
import React, { useRef, Suspense } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import WireframeWave from './WireframeWave';
import { ArrowRight } from 'lucide-react';

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
  const y2 = useTransform(smoothProgress, [0.3, 0.5], [50, -50]);

  const opacity3 = useTransform(smoothProgress, [0.55, 0.7, 0.75], [0, 1, 0]);
  const y3 = useTransform(smoothProgress, [0.55, 0.75], [50, -50]);
  
  const opacityFinal = useTransform(smoothProgress, [0.8, 0.9], [0, 1]);
  const scaleFinal = useTransform(smoothProgress, [0.8, 1], [0.95, 1]);

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
          
          {/* QUESTION 1 */}
          <motion.div style={{ opacity: opacity1, y: y1 }} className="absolute text-center">
             <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 uppercase tracking-tighter">
                Purple Gradient?
             </h2>
          </motion.div>

          {/* QUESTION 2 */}
          <motion.div style={{ opacity: opacity2, y: y2 }} className="absolute text-center">
             <h2 className="text-6xl md:text-8xl font-serif italic text-white/90">
                Wrong Alignment?
             </h2>
          </motion.div>

          {/* QUESTION 3 - REPLACED BLABLABLA */}
          <motion.div style={{ opacity: opacity3, y: y3 }} className="absolute text-center">
             <h2 className="text-6xl md:text-9xl font-black text-red-600 uppercase tracking-tighter line-through decoration-white/30">
                Too Generic?
             </h2>
          </motion.div>

          {/* FINAL PITCH - NATURAL LANGUAGE + BUTTON */}
          <motion.div style={{ opacity: opacityFinal, scale: scaleFinal }} className="absolute text-center max-w-2xl w-full pointer-events-auto">
              <div className="bg-[#0a0a0a] p-12 md:p-16 rounded-[2rem] border border-white/10 shadow-2xl backdrop-blur-md">
                <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-10">
                  This free course is perfect for you if you are new, if you have experience, or if you just want to refresh and get better.
                </p>
                
                <button className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-black text-lg font-bold uppercase tracking-widest rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95">
                   <span className="relative z-10 flex items-center gap-2">
                     Visit
                     <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                   </span>
                   <div className="absolute inset-0 bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                </button>
              </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
};

export default ProblemSection;
