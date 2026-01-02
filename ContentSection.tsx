
import React from 'react';
import { motion } from 'framer-motion';
import { SHOWCASE_IMAGES, AI_TOOLS } from './constants';

const ContentSection = () => {
  return (
    <section className="relative w-full bg-[#080808] py-40 px-4 md:px-12">
      
      <div className="max-w-[1400px] mx-auto flex flex-col gap-24">

        {/* IMAGE 1 - HORIZONTAL 5:1 */}
        <div className="relative w-full group">
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full aspect-[5/1] rounded-full overflow-hidden relative shadow-[0_20px_50px_-12px_rgba(255,255,255,0.05)] border border-white/5"
            >
                <img 
                  src={SHOWCASE_IMAGES.left} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0" 
                  alt="Part 1" 
                />
            </motion.div>
            
            {/* Tag Cloud 1 */}
            <div className="flex flex-wrap gap-2 mt-6 justify-start px-2">
                {AI_TOOLS.slice(0, 7).map((tool, i) => (
                    <Tag key={i} delay={i}>{tool}</Tag>
                ))}
            </div>
        </div>

        {/* IMAGE 2 - HORIZONTAL 5:1 */}
        <div className="relative w-full group">
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                className="w-full aspect-[5/1] rounded-full overflow-hidden relative shadow-[0_20px_50px_-12px_rgba(255,255,255,0.05)] border border-white/5"
            >
                <img 
                  src={SHOWCASE_IMAGES.center} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0" 
                  alt="Part 2" 
                />
            </motion.div>

             {/* Tag Cloud 2 */}
            <div className="flex flex-wrap gap-2 mt-6 justify-center px-2">
                {AI_TOOLS.slice(7, 14).map((tool, i) => (
                    <Tag key={i} delay={i}>{tool}</Tag>
                ))}
            </div>
        </div>

        {/* IMAGE 3 - HORIZONTAL 5:1 */}
        <div className="relative w-full group">
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="w-full aspect-[5/1] rounded-full overflow-hidden relative shadow-[0_20px_50px_-12px_rgba(255,255,255,0.05)] border border-white/5"
            >
                <img 
                  src={SHOWCASE_IMAGES.right} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0" 
                  alt="Part 3" 
                />
            </motion.div>

             {/* Tag Cloud 3 */}
            <div className="flex flex-wrap gap-2 mt-6 justify-end px-2">
                {AI_TOOLS.slice(14).map((tool, i) => (
                    <Tag key={i} delay={i}>{tool}</Tag>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

const Tag = ({ children, delay }: { children: React.ReactNode, delay: number }) => (
    <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 + (delay * 0.05) }}
        viewport={{ once: true }}
        className="px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-gray-400 text-xs font-mono uppercase tracking-wider backdrop-blur-sm hover:bg-white hover:text-black hover:border-white transition-all duration-300 cursor-none"
    >
        {children}
    </motion.span>
);

export default ContentSection;
