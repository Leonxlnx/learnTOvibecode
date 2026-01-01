
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { SHOWCASE_IMAGES, AI_TOOLS } from './constants';

const ContentSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });

  // Transforms for the "Orchestration"
  const yRail1 = useTransform(smoothProgress, [0, 1], [0, -400]);
  const yRail2 = useTransform(smoothProgress, [0, 1], [0, 400]);
  const scaleImg = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const rotateImg = useTransform(smoothProgress, [0, 1], [-2, 2]);

  return (
    <section ref={containerRef} className="relative w-full min-h-[200vh] bg-[#050505] flex flex-col items-center border-t border-white/5 overflow-hidden">
      
      {/* Intro Header */}
      <div className="pt-32 pb-12 text-center z-20 px-4 sticky top-0 mix-blend-difference">
        <h2 className="text-6xl md:text-[10vw] font-black text-white tracking-tighter uppercase leading-[0.8]">
          Total<br/>Orchestration
        </h2>
      </div>

      {/* The "Combines" Layout */}
      <div className="relative w-full max-w-[95vw] mt-24 flex flex-col items-center gap-32 pb-40">
        
        {/* === CLUSTER 1: LEFT === */}
        <div className="relative w-full flex flex-col md:flex-row items-center md:justify-start pl-0 md:pl-[5vw]">
           {/* Kinetic Rail Background */}
           <motion.div style={{ x: yRail1 }} className="absolute left-[-20%] top-1/2 -translate-y-1/2 whitespace-nowrap opacity-10 font-black text-[15vw] text-white pointer-events-none z-0">
             {AI_TOOLS.slice(0, 5).join(" — ")}
           </motion.div>

           <motion.div 
             style={{ rotate: -2, scale: scaleImg }} 
             className="relative z-10 w-full md:w-[70vw] aspect-[21/9] bg-[#0a0a0a] border border-white/10 overflow-hidden group"
           >
             <img src={SHOWCASE_IMAGES.left} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" alt="Workflow 1" />
             <div className="absolute bottom-4 left-4 font-mono text-xs text-accent bg-black/50 backdrop-blur px-2 py-1">
               GENERATION PHASE
             </div>
           </motion.div>
        </div>

        {/* === CLUSTER 2: CENTER (Hero) === */}
        <div className="relative w-full flex flex-col items-center justify-center">
           {/* Vertical Data Stream */}
           <div className="absolute h-[150%] w-px bg-gradient-to-b from-transparent via-accent to-transparent left-1/2 -translate-x-1/2 z-20 opacity-50" />
           
           <motion.div 
             style={{ rotateX: rotateImg, y: useTransform(smoothProgress, [0, 1], [100, -100]) }}
             className="relative z-30 w-full md:w-[85vw] aspect-[21/9] bg-[#0a0a0a] border border-accent/20 shadow-[0_0_100px_-50px_rgba(255,51,0,0.3)] overflow-hidden group"
           >
             <img src={SHOWCASE_IMAGES.center} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700" alt="Workflow 2" />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
             
             {/* Overlay Text */}
             <div className="absolute bottom-8 left-8 md:left-12">
               <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
                 The Core<br/>Engine
               </h3>
               <div className="flex gap-4 mt-4 text-xs font-mono text-gray-400">
                 {AI_TOOLS.slice(5, 9).map(t => <span key={t} className="border border-white/10 px-2 py-1 rounded-full">{t}</span>)}
               </div>
             </div>
           </motion.div>

           {/* Kinetic Rail Behind */}
           <motion.div style={{ x: yRail2 }} className="absolute right-[-20%] bottom-[-20%] whitespace-nowrap opacity-10 font-serif italic text-[12vw] text-white pointer-events-none z-0">
             {AI_TOOLS.slice(9, 15).join(" + ")}
           </motion.div>
        </div>

        {/* === CLUSTER 3: RIGHT === */}
        <div className="relative w-full flex flex-col md:flex-row items-center md:justify-end pr-0 md:pr-[5vw]">
           <motion.div 
             style={{ rotate: 2, scale: scaleImg }} 
             className="relative z-10 w-full md:w-[70vw] aspect-[21/9] bg-[#0a0a0a] border border-white/10 overflow-hidden group"
           >
             <img src={SHOWCASE_IMAGES.right} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" alt="Workflow 3" />
             <div className="absolute top-4 right-4 font-mono text-xs text-white bg-black/50 backdrop-blur px-2 py-1">
               REFINEMENT PHASE
             </div>
           </motion.div>
        </div>

      </div>

      {/* Footer Marquee */}
      <div className="w-full py-12 border-y border-white/5 bg-black z-20">
        <Marquee items={AI_TOOLS} />
      </div>

    </section>
  );
};

const Marquee = ({ items }: { items: string[] }) => (
  <div className="flex overflow-hidden whitespace-nowrap">
    <motion.div 
      initial={{ x: 0 }}
      animate={{ x: "-50%" }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      className="flex gap-16 items-center"
    >
      {[...items, ...items].map((item, i) => (
        <span key={i} className="text-xl md:text-2xl font-mono text-gray-500 uppercase">
          {item}
        </span>
      ))}
    </motion.div>
  </div>
);

export default ContentSection;
