
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SHOWCASE_IMAGES, AI_TOOLS } from './constants';

const ContentSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax visual effect for the stacked images
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  // Split tools list for the marquee rails
  const tools1 = AI_TOOLS.slice(0, 6);
  const tools2 = AI_TOOLS.slice(6, 12);
  const tools3 = AI_TOOLS.slice(12, AI_TOOLS.length);

  return (
    <section ref={containerRef} className="relative w-full bg-[#050505] py-32 flex flex-col items-center overflow-hidden border-t border-white/5">
      
      {/* Intro */}
      <div className="text-center mb-32 z-20 px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-9xl font-black text-white tracking-tighter uppercase"
        >
          Tool Agnostic
        </motion.h2>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "100px" }}
          transition={{ delay: 0.5, duration: 1 }}
          className="h-1 bg-accent mx-auto mt-6"
        />
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-gray-400 font-mono text-sm tracking-widest uppercase"
        >
          We got you covered. No matter the model.
        </motion.p>
      </div>

      <div className="w-full max-w-[95vw] md:max-w-[85vw] flex flex-col gap-0 relative">
        
        {/* --- STACK ITEM 1 --- */}
        <div className="relative group perspective-[1000px]">
          {/* Marquee Rail Behind */}
          <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 -z-10 opacity-30 group-hover:opacity-50 transition-opacity duration-700">
             <Marquee direction="left" speed={20} items={tools1} />
          </div>

          <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }} className="relative z-10 w-full aspect-[4/1] md:aspect-[5/1] overflow-hidden rounded-sm border border-white/10 bg-[#0a0a0a]">
            <img 
              src={SHOWCASE_IMAGES.left} 
              alt="Visual 1" 
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000 ease-out"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </div>

        {/* Spacer / Connector */}
        <div className="h-24 md:h-32 w-px bg-white/10 mx-auto relative overflow-hidden">
             <motion.div style={{ top: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }} className="absolute w-full h-1/2 bg-accent blur-[2px]" />
        </div>

        {/* --- STACK ITEM 2 --- */}
        <div className="relative group perspective-[1000px]">
           {/* Marquee Rail Behind */}
           <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 -z-10 opacity-30 group-hover:opacity-50 transition-opacity duration-700">
             <Marquee direction="right" speed={25} items={tools2} />
          </div>

          <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [100, -100]) }} className="relative z-10 w-full aspect-[4/1] md:aspect-[5/1] overflow-hidden rounded-sm border border-white/10 bg-[#0a0a0a] shadow-2xl shadow-purple-900/5">
            <img 
              src={SHOWCASE_IMAGES.center} 
              alt="Visual 2" 
              className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90 pointer-events-none" />
          </motion.div>
        </div>

        {/* Spacer / Connector */}
        <div className="h-24 md:h-32 w-px bg-white/10 mx-auto relative overflow-hidden">
            <motion.div style={{ top: useTransform(scrollYProgress, [0, 1], ["-20%", "120%"]) }} className="absolute w-full h-1/2 bg-accent blur-[2px]" />
        </div>

        {/* --- STACK ITEM 3 --- */}
        <div className="relative group perspective-[1000px]">
           {/* Marquee Rail Behind */}
           <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 -z-10 opacity-30 group-hover:opacity-50 transition-opacity duration-700">
             <Marquee direction="left" speed={15} items={tools3} />
          </div>

          <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [150, -150]) }} className="relative z-10 w-full aspect-[4/1] md:aspect-[5/1] overflow-hidden rounded-sm border border-white/10 bg-[#0a0a0a]">
            <img 
              src={SHOWCASE_IMAGES.right} 
              alt="Visual 3" 
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

// Reusable Marquee Component for the "Rails"
const Marquee = ({ items, direction = "left", speed = 20 }: { items: string[], direction?: "left" | "right", speed?: number }) => {
  return (
    <div className="flex overflow-hidden whitespace-nowrap select-none mask-image-gradient">
      <motion.div 
        initial={{ x: direction === "left" ? 0 : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : 0 }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        className="flex gap-12 md:gap-32 items-center"
      >
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span key={i} className="text-4xl md:text-8xl font-black text-transparent stroke-text opacity-20 hover:opacity-100 hover:text-white transition-all duration-300 cursor-default">
            {item}
          </span>
        ))}
      </motion.div>
      <style>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  )
}

export default ContentSection;
