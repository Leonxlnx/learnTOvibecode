
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { SHOWCASE_IMAGES, AI_TOOLS } from './constants';
import { ArrowUpRight } from 'lucide-react';

const ContentSection = () => {
  const containerRef = useRef(null);
  
  return (
    <section ref={containerRef} className="relative w-full bg-[#111] border-t border-white/10 py-24 md:py-40 px-4 md:px-8">
      
      <div className="max-w-[1600px] mx-auto">
        
        {/* Header */}
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end border-b border-white/20 pb-8">
            <h2 className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter leading-[0.8]">
                The<br/>Stack
            </h2>
            <p className="text-gray-400 max-w-md text-right mt-8 md:mt-0 font-mono">
                // 03. ARCHITECTURE<br/>
                Orchestrating the world's most powerful models into a single workflow.
            </p>
        </div>

        {/* --- BENTO GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[minmax(300px,auto)]">

            {/* CELL 1: Main Visual Left (Span 7) */}
            <BentoItem className="md:col-span-7 md:row-span-2 min-h-[400px]">
                <img 
                    src={SHOWCASE_IMAGES.left} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    alt="Work"
                />
                <div className="absolute top-6 left-6 z-10 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    <span className="text-xs font-mono text-white">GENERATION_01</span>
                </div>
            </BentoItem>

            {/* CELL 2: The "Words" - High Contrast List (Span 5) */}
            <BentoItem className="md:col-span-5 bg-white text-black p-8 flex flex-col justify-between group overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight size={32} />
                </div>
                <h3 className="text-sm font-mono tracking-widest uppercase border-b border-black/10 pb-4 mb-4">Core Models</h3>
                <div className="flex flex-wrap gap-2 md:gap-3 content-start">
                    {AI_TOOLS.slice(0, 10).map((tool, i) => (
                        <span key={i} className="text-2xl md:text-4xl font-black tracking-tight hover:text-accent cursor-pointer transition-colors">
                            {tool}
                        </span>
                    ))}
                </div>
            </BentoItem>

            {/* CELL 3: Kinetic Marquee (Span 5) */}
            <BentoItem className="md:col-span-5 bg-[#222] overflow-hidden flex items-center">
                 <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                 <div className="w-full -rotate-6 scale-110">
                    <Marquee items={AI_TOOLS.slice(10, 20)} speed={15} />
                    <Marquee items={AI_TOOLS.slice(5, 15)} speed={25} reverse />
                 </div>
            </BentoItem>


            {/* CELL 4: Visual Center (Span 4) */}
            <BentoItem className="md:col-span-4 min-h-[300px]">
                 <img 
                    src={SHOWCASE_IMAGES.center} 
                    className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    alt="Work"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                    <h4 className="text-3xl font-bold text-white">Neural<br/>Symphony</h4>
                </div>
            </BentoItem>

            {/* CELL 5: Big Number/Data (Span 4) */}
            <BentoItem className="md:col-span-4 bg-[#1a1a1a] flex flex-col justify-center items-center p-6 border border-white/5 relative group">
                <div className="text-[8rem] md:text-[10rem] font-black text-[#333] group-hover:text-white transition-colors duration-500 leading-none">
                    99%
                </div>
                <p className="text-gray-500 font-mono text-sm uppercase tracking-[0.5em]">Efficiency</p>
            </BentoItem>

             {/* CELL 6: Visual Center (Span 4) */}
             <BentoItem className="md:col-span-4 min-h-[300px]">
                 <img 
                    src={SHOWCASE_IMAGES.right} 
                    className="absolute inset-0 w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                    alt="Work"
                />
            </BentoItem>

            {/* CELL 7: Wide Visual Bottom (Span 12) */}
            <BentoItem className="md:col-span-12 min-h-[400px] bg-[#0f0f0f] relative overflow-hidden group">
                 {/* Background Typography */}
                 <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity duration-700 scale-150">
                    <span className="text-[20vw] font-black text-white whitespace-nowrap">VIBECODE</span>
                 </div>
                 
                 <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-12">
                    <h3 className="text-4xl md:text-6xl font-bold text-white mb-6">Ready to Ship?</h3>
                    <button className="px-8 py-4 bg-white text-black font-bold tracking-widest hover:bg-accent hover:text-white transition-colors duration-300 rounded-sm">
                        INITIALIZE SEQUENCE
                    </button>
                 </div>
            </BentoItem>

        </div>
      </div>
    </section>
  );
};

const BentoItem = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`relative rounded-xl overflow-hidden ${className}`}
        >
            {children}
        </motion.div>
    )
}

const Marquee = ({ items, speed = 20, reverse = false }: { items: string[], speed?: number, reverse?: boolean }) => (
  <div className="flex overflow-hidden whitespace-nowrap py-2">
    <motion.div 
      initial={{ x: reverse ? "-50%" : 0 }}
      animate={{ x: reverse ? 0 : "-50%" }}
      transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      className="flex gap-4 md:gap-8 items-center"
    >
      {[...items, ...items, ...items].map((item, i) => (
        <span key={i} className="text-4xl md:text-5xl font-black text-white/20 uppercase">
          {item}
        </span>
      ))}
    </motion.div>
  </div>
);

export default ContentSection;
