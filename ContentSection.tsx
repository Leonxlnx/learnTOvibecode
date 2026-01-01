
import React from 'react';
import { motion } from 'framer-motion';
import { IMG_URL } from './constants';

const ContentSection = () => {
  return (
    <section className="min-h-screen w-full bg-[#050505] flex flex-col md:flex-row items-stretch border-t border-white/5">
      {/* Left Column: Massive Image Showcase (70%) */}
      <div className="w-full md:w-[70%] relative overflow-hidden flex items-center justify-center p-6 md:p-12 lg:p-20 border-r border-white/5">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="relative w-full h-full max-h-[85vh] overflow-hidden rounded-sm border border-white/10 bg-[#0a0a0a] group shadow-2xl"
        >
          <img 
            src={IMG_URL} 
            alt="Technical Architecture Visual" 
            className="w-full h-full object-cover transition-transform duration-[12s] ease-out group-hover:scale-105"
            style={{ minHeight: '400px' }}
          />
          {/* Subtle noise/texture overlay for premium finish */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.6)] pointer-events-none" />
        </motion.div>
      </div>
      
      {/* Right Column: Editorial Negative Space (30%) */}
      <div className="hidden md:flex md:w-[30%] bg-[#080808] items-center justify-center relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-16 h-px bg-white/10" />
        <div className="flex flex-col items-center gap-6 opacity-20">
          <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <div className="w-px h-32 bg-gradient-to-b from-white to-transparent" />
          <span className="text-[10px] uppercase tracking-[0.4em] font-mono text-white rotate-90 whitespace-nowrap translate-y-20">
            Structural Intelligence
          </span>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
