
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SHOWCASE_IMAGES, AI_TOOLS } from './constants';

const ContentSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax speeds for images
  const yLeft = useTransform(scrollYProgress, [0, 1], [100, -150]);
  const yCenter = useTransform(scrollYProgress, [0, 1], [300, -300]); // Moves fastest
  const yRight = useTransform(scrollYProgress, [0, 1], [150, -100]);

  // Text movement
  const textY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section ref={containerRef} className="relative w-full min-h-[150vh] bg-[#050505] overflow-hidden flex flex-col items-center py-20 border-t border-white/5">
      
      {/* Background Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Header Text */}
      <div className="relative z-20 text-center mb-20 px-6">
        <motion.h2 
          style={{ y: textY }}
          className="text-5xl md:text-7xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800 tracking-tighter"
        >
          TOOL AGNOSTIC
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-6 text-gray-400 font-mono text-sm tracking-widest uppercase"
        >
          We got you covered. No matter the model.
        </motion.p>
      </div>

      {/* Main Content Grid */}
      <div className="w-full max-w-[90vw] h-[80vh] relative flex justify-center items-center perspective-[1000px]">
        
        {/* Floating Tool Keywords - Background Layer */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
             {AI_TOOLS.map((tool, i) => (
                <motion.div
                  key={i}
                  className="absolute text-white/10 font-black uppercase text-4xl md:text-6xl whitespace-nowrap"
                  style={{
                    left: `${Math.random() * 90}%`,
                    top: `${Math.random() * 100}%`,
                    rotate: Math.random() * 20 - 10,
                  }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: [0.05, 0.2, 0.05], x: [0, Math.random() * 100 - 50] }}
                  transition={{ 
                    duration: Math.random() * 5 + 5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  {tool}
                </motion.div>
             ))}
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full max-w-7xl z-10 px-4">
          
          {/* Image 1 */}
          <motion.div style={{ y: yLeft }} className="relative aspect-[3/4] md:translate-y-12">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
            <img 
              src={SHOWCASE_IMAGES.left} 
              alt="AI Workflow 1" 
              className="w-full h-full object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700 opacity-80 hover:opacity-100"
            />
            <div className="absolute bottom-4 left-4 z-20">
              <span className="text-xs font-mono border border-white/30 px-2 py-1 rounded-full bg-black/50 backdrop-blur-md">
                GENERATIVE
              </span>
            </div>
          </motion.div>

          {/* Image 2 (Center - Featured) */}
          <motion.div style={{ y: yCenter }} className="relative aspect-[3/4] z-20 md:-translate-y-20 shadow-2xl shadow-purple-900/10">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black z-10" />
             <img 
              src={SHOWCASE_IMAGES.center} 
              alt="AI Workflow 2" 
              className="w-full h-full object-cover rounded-sm border border-white/10"
            />
             <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full text-center z-20 px-4">
              <p className="text-xs font-mono mb-2 text-accent">THE CORE</p>
              <div className="flex flex-wrap justify-center gap-2">
                {AI_TOOLS.slice(0, 4).map(t => (
                   <span key={t} className="text-[10px] uppercase bg-white/10 backdrop-blur px-2 py-0.5 rounded text-white/80">
                     {t}
                   </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Image 3 */}
          <motion.div style={{ y: yRight }} className="relative aspect-[3/4] md:translate-y-24">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
            <img 
              src={SHOWCASE_IMAGES.right} 
              alt="AI Workflow 3" 
              className="w-full h-full object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700 opacity-80 hover:opacity-100"
            />
            <div className="absolute top-4 right-4 z-20">
              <span className="text-xs font-mono border border-white/30 px-2 py-1 rounded-full bg-black/50 backdrop-blur-md">
                ASSISTED
              </span>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Infinite Marquee at bottom */}
      <div className="absolute bottom-12 w-full overflow-hidden whitespace-nowrap py-4 border-y border-white/5 bg-black/50 backdrop-blur-sm z-30">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-12"
        >
          {[...AI_TOOLS, ...AI_TOOLS, ...AI_TOOLS].map((tool, i) => (
            <span key={i} className="text-lg font-serif italic text-white/40">
              {tool} <span className="font-sans font-bold text-accent mx-2">.</span>
            </span>
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default ContentSection;
