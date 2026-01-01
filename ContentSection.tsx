
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { SHOWCASE_IMAGES, AI_TOOLS } from './constants';
import { ArrowUpRight } from 'lucide-react';

const ContentSection = () => {
  const containerRef = useRef(null);
  
  return (
    <section ref={containerRef} className="relative w-full bg-[#080808] border-t border-white/10 py-24 md:py-40 px-4 md:px-8">
      
      <div className="max-w-[1800px] mx-auto">
        
        {/* Header */}
        <div className="mb-24">
            <h2 className="text-6xl md:text-[8vw] font-black text-white uppercase tracking-tighter leading-[0.8] mb-8">
                Visual<br/>Architecture
            </h2>
            <div className="w-full h-[1px] bg-white/20" />
        </div>

        {/* --- BENTO GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

            {/* ROW 1: ULTRA WIDE IMAGE (Strict 5:1) */}
            <BentoItem className="md:col-span-12">
                <div className="w-full aspect-[5/1] relative overflow-hidden bg-[#111] group">
                    <img 
                        src={SHOWCASE_IMAGES.left} 
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
                        alt="Ultra Wide 1"
                    />
                     <div className="absolute bottom-4 left-4 font-mono text-xs text-white/60 bg-black/50 px-2 py-1">RATIO: 5:1</div>
                </div>
            </BentoItem>


            {/* ROW 2: DATA & TOOLS */}
            <BentoItem className="md:col-span-4 bg-white text-black p-8 min-h-[300px] flex flex-col justify-between group relative overflow-hidden">
                <div className="absolute top-4 right-4"><ArrowUpRight className="group-hover:rotate-45 transition-transform duration-300" /></div>
                <div>
                     <h3 className="text-lg font-bold uppercase tracking-tight mb-2">Neural Stack</h3>
                     <p className="text-sm font-mono text-gray-500">Optimized for high-throughput creative generation.</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-8">
                     {AI_TOOLS.slice(0,8).map((t,i) => (
                         <span key={i} className="px-2 py-1 border border-black/20 text-xs font-bold uppercase hover:bg-black hover:text-white transition-colors cursor-default">{t}</span>
                     ))}
                </div>
            </BentoItem>

            <BentoItem className="md:col-span-8 bg-[#151515] flex items-center justify-center overflow-hidden min-h-[300px]">
                 <Marquee items={AI_TOOLS} />
            </BentoItem>


            {/* ROW 3: ULTRA WIDE IMAGE (Strict 5:1) */}
            <BentoItem className="md:col-span-12">
                 <div className="w-full aspect-[5/1] relative overflow-hidden bg-[#111] group">
                    <img 
                        src={SHOWCASE_IMAGES.center} 
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
                        alt="Ultra Wide 2"
                    />
                </div>
            </BentoItem>

            
             {/* ROW 4: INFO & BIG NUMBER */}
            <BentoItem className="md:col-span-8 bg-[#111] border border-white/5 p-8 flex flex-col justify-center">
                 <h3 className="text-4xl md:text-6xl font-black text-white mb-4">
                     SYSTEM<br/>ONLINE
                 </h3>
                 <p className="text-gray-400 max-w-md">
                     Our proprietary rendering engine ensures every pixel is perfectly aligned with the creative intent.
                 </p>
            </BentoItem>

            <BentoItem className="md:col-span-4 bg-[#acc] text-[#002222] p-8 flex flex-col items-center justify-center min-h-[300px]">
                 <span className="text-8xl font-black tracking-tighter">5:1</span>
                 <span className="font-mono text-sm uppercase tracking-widest mt-2">Cinematic Ratio</span>
            </BentoItem>


            {/* ROW 5: ULTRA WIDE IMAGE (Strict 5:1) */}
             <BentoItem className="md:col-span-12">
                 <div className="w-full aspect-[5/1] relative overflow-hidden bg-[#111] group">
                    <img 
                        src={SHOWCASE_IMAGES.right} 
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
                        alt="Ultra Wide 3"
                    />
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`relative rounded-sm overflow-hidden ${className}`}
        >
            {children}
        </motion.div>
    )
}

const Marquee = ({ items }: { items: string[] }) => (
  <div className="flex overflow-hidden whitespace-nowrap w-full mix-blend-overlay opacity-50">
    <motion.div 
      initial={{ x: 0 }}
      animate={{ x: "-50%" }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      className="flex gap-16 items-center"
    >
      {[...items, ...items].map((item, i) => (
        <span key={i} className="text-6xl md:text-8xl font-black text-white uppercase">
          {item}
        </span>
      ))}
    </motion.div>
  </div>
);

export default ContentSection;
