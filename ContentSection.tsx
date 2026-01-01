
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useVelocity } from 'framer-motion';
import { SHOWCASE_IMAGES, AI_TOOLS } from './constants';

const ContentSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress, scrollY } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scrollVelocity = useVelocity(scrollY);
  // Dynamic skew based on scroll speed
  const skewVelocity = useTransform(scrollVelocity, [-1000, 1000], [-5, 5]);
  const smoothSkew = useSpring(skewVelocity, { damping: 30, stiffness: 200 });

  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });

  // Transforms
  const yRail1 = useTransform(smoothProgress, [0, 1], [0, -600]);
  const yRail2 = useTransform(smoothProgress, [0, 1], [0, 600]);
  
  // Subtle parallax for images
  const yImg1 = useTransform(smoothProgress, [0, 1], [100, -100]);
  const yImg2 = useTransform(smoothProgress, [0, 1], [50, -50]);
  const yImg3 = useTransform(smoothProgress, [0, 1], [150, -150]);

  return (
    <section ref={containerRef} className="relative w-full bg-[#050505] flex flex-col items-center border-t border-white/5 overflow-hidden py-40">
      
      {/* Background Decor - Left Rail */}
      <motion.div style={{ y: yRail1, opacity: 0.03 }} className="absolute left-[2vw] top-[-20%] w-[10vw] flex flex-col gap-12 text-2xl font-mono text-white text-right z-0 pointer-events-none">
        {[...AI_TOOLS, ...AI_TOOLS].map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </motion.div>

      {/* Background Decor - Right Rail */}
      <motion.div style={{ y: yRail2, opacity: 0.03 }} className="absolute right-[2vw] top-[-50%] w-[10vw] flex flex-col gap-12 text-2xl font-mono text-white text-left z-0 pointer-events-none">
         {[...AI_TOOLS, ...AI_TOOLS].reverse().map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </motion.div>


      {/* --- CONTENT STACK --- */}
      <div className="relative z-10 w-full max-w-[90vw] flex flex-col gap-24 md:gap-40 items-center">
        
        {/* ITEM 1 */}
        <motion.div 
          style={{ skewY: smoothSkew, y: yImg1 }}
          className="w-full aspect-[5/1] overflow-hidden bg-[#0a0a0a] border border-white/5 shadow-2xl shadow-black"
        >
          <img 
            src={SHOWCASE_IMAGES.left} 
            className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-[1.02] transition-all duration-1000 ease-out" 
            alt="" 
          />
        </motion.div>

        {/* ITEM 2 */}
        <motion.div 
          style={{ skewY: smoothSkew, y: yImg2 }}
          className="w-full aspect-[5/1] overflow-hidden bg-[#0a0a0a] border border-white/5 shadow-2xl shadow-black"
        >
          <img 
            src={SHOWCASE_IMAGES.center} 
            className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-[1.02] transition-all duration-1000 ease-out" 
            alt="" 
          />
        </motion.div>

        {/* ITEM 3 */}
        <motion.div 
          style={{ skewY: smoothSkew, y: yImg3 }}
          className="w-full aspect-[5/1] overflow-hidden bg-[#0a0a0a] border border-white/5 shadow-2xl shadow-black"
        >
          <img 
            src={SHOWCASE_IMAGES.right} 
            className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-[1.02] transition-all duration-1000 ease-out" 
            alt="" 
          />
        </motion.div>

      </div>

      {/* Footer Text */}
      <div className="mt-40 z-20 mix-blend-difference">
         <h2 className="text-[12vw] font-black text-white leading-none tracking-tighter opacity-10 select-none">
           UNLIMITED
         </h2>
      </div>

    </section>
  );
};

export default ContentSection;
