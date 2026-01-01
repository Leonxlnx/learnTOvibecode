
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SHOWCASE_IMAGES, AI_TOOLS } from './constants';

const ContentSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Split tools list for the kinetic rails
  // Duplicating the list to ensure we have enough content for the rails
  const allTools = [...AI_TOOLS, ...AI_TOOLS];
  const tools1 = allTools.slice(0, 10);
  const tools2 = allTools.slice(10, 20);
  const tools3 = allTools.slice(5, 15);

  return (
    <section ref={containerRef} className="relative w-full bg-[#050505] py-20 flex flex-col items-center overflow-hidden border-t border-white/5">
      
      <div className="w-full max-w-[98vw] md:max-w-[90vw] flex flex-col gap-16 md:gap-32 relative py-20">
        
        {/* --- STACK ITEM 1 --- */}
        <div className="relative group perspective-[1200px]">
          {/* Angled Kinetic Rail */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] -rotate-2 z-0 opacity-40 mix-blend-screen pointer-events-none">
             <Marquee direction="left" speed={25} items={tools1} />
          </div>

          <motion.div 
            style={{ 
              y: useTransform(scrollYProgress, [0, 1], [100, -100]),
              rotateX: useTransform(scrollYProgress, [0.2, 0.5], [5, 0]) 
            }} 
            className="relative z-10 w-full aspect-[21/9] md:aspect-[5/1] overflow-hidden rounded-sm border border-white/10 bg-[#0a0a0a] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]"
          >
            <img 
              src={SHOWCASE_IMAGES.left} 
              alt="Visual 1" 
              className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000 ease-out"
            />
             <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </div>

        {/* --- STACK ITEM 2 --- */}
        <div className="relative group perspective-[1200px]">
           {/* Angled Kinetic Rail (Reverse) */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] rotate-1 z-0 opacity-60 mix-blend-overlay pointer-events-none">
             <Marquee direction="right" speed={35} items={tools2} />
          </div>

          <motion.div 
            style={{ 
              y: useTransform(scrollYProgress, [0, 1], [200, -200]),
              scale: useTransform(scrollYProgress, [0.2, 0.6], [0.95, 1])
            }} 
            className="relative z-10 w-full aspect-[21/9] md:aspect-[5/1] overflow-hidden rounded-sm border border-white/20 bg-[#0a0a0a] shadow-[0_0_100px_-30px_rgba(255,51,0,0.1)]"
          >
            <img 
              src={SHOWCASE_IMAGES.center} 
              alt="Visual 2" 
              className="w-full h-full object-cover opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
            />
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
          </motion.div>
        </div>

        {/* --- STACK ITEM 3 --- */}
        <div className="relative group perspective-[1200px]">
           {/* Angled Kinetic Rail */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] -rotate-3 z-0 opacity-40 mix-blend-screen pointer-events-none">
             <Marquee direction="left" speed={20} items={tools3} />
          </div>

          <motion.div 
            style={{ 
              y: useTransform(scrollYProgress, [0, 1], [300, -300]),
              rotateX: useTransform(scrollYProgress, [0.5, 0.8], [-5, 0])
            }} 
            className="relative z-10 w-full aspect-[21/9] md:aspect-[5/1] overflow-hidden rounded-sm border border-white/10 bg-[#0a0a0a] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]"
          >
            <img 
              src={SHOWCASE_IMAGES.right} 
              alt="Visual 3" 
              className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-tl from-black/80 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

// Reusable Marquee Component
const Marquee = ({ items, direction = "left", speed = 20 }: { items: string[], direction?: "left" | "right", speed?: number }) => {
  return (
    <div className="flex overflow-hidden whitespace-nowrap select-none mask-image-edges">
      <motion.div 
        initial={{ x: direction === "left" ? 0 : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : 0 }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        className="flex gap-8 md:gap-24 items-center"
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="text-6xl md:text-9xl font-black text-transparent stroke-text-heavy opacity-30 hover:opacity-100 hover:text-white hover:stroke-0 transition-all duration-300 cursor-default uppercase italic">
            {item}
          </span>
        ))}
      </motion.div>
      <style>{`
        .stroke-text-heavy {
          -webkit-text-stroke: 2px rgba(255, 255, 255, 0.15);
        }
        .mask-image-edges {
           mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
        }
      `}</style>
    </div>
  )
}

export default ContentSection;
