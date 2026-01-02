
import React from 'react';
import { motion } from 'framer-motion';
import { SHOWCASE_IMAGES, AI_TOOLS } from './constants';

const ContentSection = () => {
  return (
    <section className="relative w-full bg-[#080808] py-40 px-4 md:px-12 overflow-hidden">
      
      <div className="max-w-[1400px] mx-auto flex flex-col gap-32">

        {/* BLOCK 1 */}
        <div className="relative w-full flex flex-col gap-4">
            {/* 5:1 Image */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full aspect-[5/1] rounded-[2rem] overflow-hidden relative shadow-2xl border border-white/10 group"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-transparent mix-blend-overlay z-10" />
                <img 
                  src={SHOWCASE_IMAGES.left} 
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700 ease-out" 
                  alt="Foundation" 
                />
            </motion.div>
            
            {/* Bento Grid Tags */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
                {AI_TOOLS.slice(0, 7).map((tool, i) => (
                    <BentoTag key={i} index={i}>{tool}</BentoTag>
                ))}
            </div>
        </div>

        {/* BLOCK 2 */}
        <div className="relative w-full flex flex-col gap-4">
            {/* 5:1 Image */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full aspect-[5/1] rounded-[2rem] overflow-hidden relative shadow-2xl border border-white/10 group"
            >
                 <div className="absolute inset-0 bg-gradient-to-l from-blue-900/20 to-transparent mix-blend-overlay z-10" />
                <img 
                  src={SHOWCASE_IMAGES.center} 
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700 ease-out" 
                  alt="Motion" 
                />
            </motion.div>

             {/* Bento Grid Tags */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
                {AI_TOOLS.slice(7, 14).map((tool, i) => (
                    <BentoTag key={i} index={i}>{tool}</BentoTag>
                ))}
            </div>
        </div>

        {/* BLOCK 3 */}
        <div className="relative w-full flex flex-col gap-4">
            {/* 5:1 Image */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full aspect-[5/1] rounded-[2rem] overflow-hidden relative shadow-2xl border border-white/10 group"
            >
                 <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 to-transparent mix-blend-overlay z-10" />
                <img 
                  src={SHOWCASE_IMAGES.right} 
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700 ease-out" 
                  alt="WebGL" 
                />
            </motion.div>

             {/* Bento Grid Tags */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
                {AI_TOOLS.slice(14).map((tool, i) => (
                    <BentoTag key={i} index={i}>{tool}</BentoTag>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

// New "Bento" Style Tag Component
const BentoTag = ({ children, index }: { children: React.ReactNode, index: number }) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.05, duration: 0.5 }}
        viewport={{ once: true }}
        className="
            relative overflow-hidden
            h-16 rounded-xl 
            bg-[#111] border border-white/5 
            flex items-center justify-center 
            group cursor-default
            hover:border-white/20 hover:bg-[#161616]
            transition-colors duration-300
        "
    >
        <span className="text-gray-500 font-mono text-sm tracking-widest uppercase group-hover:text-white transition-colors duration-300 z-10 relative">
            {children}
        </span>
        
        {/* Subtle hover gradient wash */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Tech decorative line */}
        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-500 ease-out" />
    </motion.div>
);

export default ContentSection;
