
import React from 'react';
import { motion } from 'framer-motion';
import { SHOWCASE_IMAGES, AI_TOOLS } from './constants';
import { ArrowDown } from 'lucide-react';

const ContentSection = () => {
  return (
    <section className="relative w-full bg-[#050505] border-t border-white/10 py-24 md:py-40">
      
      <div className="max-w-[1920px] mx-auto px-4 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-start mb-32">
             <div>
                <h2 className="text-[10vw] leading-[0.8] font-black text-white uppercase tracking-tighter">
                    THE<br/>INDEX
                </h2>
             </div>
             <div className="mt-12 md:mt-0 flex flex-col items-end">
                <span className="text-xl font-mono text-white/50 mb-4">ASPECT RATIO: 1:5 (VERTICAL)</span>
                <ArrowDown className="text-white animate-bounce" size={48} />
             </div>
        </div>

        {/* --- 1:5 VERTICAL GRID LAYOUT --- */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 items-start">

            {/* COLUMN 1: INTRO TEXT */}
            <div className="md:sticky md:top-40 min-h-[50vh] flex flex-col justify-between">
                <p className="text-2xl font-light text-gray-400 leading-relaxed">
                    Verticality is the new horizon. We stretch the canvas to break the scroll fatigue. 
                    <br/><br/>
                    <strong className="text-white">Pure. Uncut. Height.</strong>
                </p>
                
                <div className="mt-12 hidden md:block">
                    {AI_TOOLS.slice(0, 10).map((t, i) => (
                        <div key={i} className="border-b border-white/10 py-2 text-xs font-mono text-gray-500 uppercase flex justify-between">
                            <span>{t}</span>
                            <span>0{i}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* COLUMN 2: TALL IMAGE 1 (1:5) */}
            <motion.div 
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="w-full relative group"
            >
                <div className="w-full aspect-[1/5] bg-[#111] overflow-hidden relative">
                     <img 
                        src={SHOWCASE_IMAGES.left} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                        alt="Vertical 1"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50" />
                    <div className="absolute bottom-8 left-0 -rotate-90 origin-bottom-left text-4xl font-black text-white tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                        FIGURE_01
                    </div>
                </div>
            </motion.div>


            {/* COLUMN 3: TALL IMAGE 2 (1:5) */}
             <motion.div 
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="w-full relative group mt-0 md:mt-32" // Staggered start
            >
                <div className="w-full aspect-[1/5] bg-[#111] overflow-hidden relative">
                     <img 
                        src={SHOWCASE_IMAGES.center} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                        alt="Vertical 2"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50" />
                     <div className="absolute bottom-8 left-0 -rotate-90 origin-bottom-left text-4xl font-black text-white tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                        FIGURE_02
                    </div>
                </div>
            </motion.div>

             {/* COLUMN 4: TALL IMAGE 3 (1:5) */}
             <motion.div 
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
                className="w-full relative group"
            >
                <div className="w-full aspect-[1/5] bg-[#111] overflow-hidden relative">
                     <img 
                        src={SHOWCASE_IMAGES.right} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                        alt="Vertical 3"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50" />
                     <div className="absolute bottom-8 left-0 -rotate-90 origin-bottom-left text-4xl font-black text-white tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                        FIGURE_03
                    </div>
                </div>
            </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContentSection;
