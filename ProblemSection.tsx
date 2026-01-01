
import React, { useRef, Suspense } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import WireframeWave from './WireframeWave';

const ProblemSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 80 });
  
  // Animation Sequence
  const opacity1 = useTransform(smoothProgress, [0.05, 0.2, 0.3], [0, 1, 0]);
  const y1 = useTransform(smoothProgress, [0.05, 0.3], [100, -100]);

  const opacity2 = useTransform(smoothProgress, [0.35, 0.5, 0.6], [0, 1, 0]);
  const y2 = useTransform(smoothProgress, [0.35, 0.6], [100, -100]);

  const opacity3 = useTransform(smoothProgress, [0.65, 0.75, 0.85], [0, 1, 0]);
  const y3 = useTransform(smoothProgress, [0.65, 0.85], [100, -100]);
  
  const opacityFinal = useTransform(smoothProgress, [0.85, 0.95], [0, 1]);
  const scaleFinal = useTransform(smoothProgress, [0.85, 1], [0.8, 1]);

  return (
    <section ref={containerRef} className="relative w-full h-[400vh] bg-[#000] z-10">
      
      {/* --- STICKY BACKGROUND --- */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* Three.js Layer */}
        <div className="absolute inset-0 z-10">
           <Canvas camera={{ position: [0, 0, 6], fov: 40 }} gl={{ alpha: true }}>
            <Suspense fallback={null}>
              <WireframeWave />
            </Suspense>
          </Canvas>
        </div>

        {/* Content Container */}
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          
          {/* STEP 1 */}
          <motion.div style={{ opacity: opacity1, y: y1 }} className="absolute text-center">
             <h2 className="text-7xl md:text-9xl font-black text-white uppercase tracking-tighter leading-none stroke-text">
                Purple<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-500 to-white">Gradient?</span>
             </h2>
          </motion.div>

          {/* STEP 2 */}
          <motion.div style={{ opacity: opacity2, y: y2 }} className="absolute text-center">
             <h2 className="text-7xl md:text-9xl font-serif italic text-white/80">
                "Too Generic"
             </h2>
          </motion.div>

          {/* STEP 3 */}
          <motion.div style={{ opacity: opacity3, y: y3 }} className="absolute text-center">
             <h2 className="text-8xl md:text-[12rem] font-black text-red-600 uppercase tracking-tighter line-through">
                BORING
             </h2>
          </motion.div>

          {/* FINAL */}
          <motion.div style={{ opacity: opacityFinal, scale: scaleFinal }} className="absolute text-center bg-black/80 backdrop-blur-xl p-12 border border-white/10 rounded-3xl">
              <p className="text-2xl font-mono text-gray-400 mb-8">System Status: <span className="text-green-500">ONLINE</span></p>
              <h2 className="text-6xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter">
                WELCOME TO<br/>VIBECODE
              </h2>
          </motion.div>

        </div>
      </div>

    </section>
  );
};

export default ProblemSection;
