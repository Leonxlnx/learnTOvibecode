
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { AI_TOOLS } from './constants';

const ProblemSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Smooth scroll physics for the floating elements
  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });

  // Create multiple parallax layers for the "Cloud" of tools
  const yBack = useTransform(smoothProgress, [0, 1], [0, -600]);
  const yMid = useTransform(smoothProgress, [0, 1], [0, -1000]);
  const yFront = useTransform(smoothProgress, [0, 1], [0, -1500]);
  
  const rotate = useTransform(smoothProgress, [0, 1], [0, 15]);

  return (
    <section ref={containerRef} className="relative w-full min-h-[140vh] bg-[#030303] flex flex-col items-center justify-center overflow-hidden border-t border-white/5 py-40">
      
      {/* Background Ambience - A deep pulsing glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-black to-black pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.1] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

      {/* --- THE TOOL VORTEX --- */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        
        {/* Layer 1: Background Blur (Slow) */}
        <motion.div style={{ y: yBack }} className="absolute inset-0 flex flex-wrap content-center justify-center gap-24 opacity-20 blur-[2px]">
          {AI_TOOLS.slice(0, 8).map((tool, i) => (
            <span key={i} className="text-6xl md:text-8xl font-black text-white/10 uppercase"
              style={{ 
                transform: `rotate(${Math.random() * 30 - 15}deg) translateX(${Math.random() * 200 - 100}px)` 
              }}>
              {tool}
            </span>
          ))}
        </motion.div>

        {/* Layer 2: Midground (Medium Speed) */}
        <motion.div style={{ y: yMid, rotate }} className="absolute inset-0 flex flex-wrap content-center justify-center gap-32 opacity-40 mix-blend-screen z-0">
          {AI_TOOLS.slice(8, 14).map((tool, i) => (
            <span key={i} className="text-5xl md:text-7xl font-serif italic text-white/30"
               style={{ 
                position: 'absolute',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 80 + 10}%`,
              }}>
              {tool}
            </span>
          ))}
        </motion.div>

        {/* Layer 3: Foreground Stagger (Fast & Sharp) */}
        <motion.div style={{ y: yFront }} className="absolute inset-0 z-10">
          {AI_TOOLS.slice(14, AI_TOOLS.length).map((tool, i) => (
            <span key={i} className="absolute text-7xl md:text-9xl font-mono font-bold text-white/5 uppercase tracking-tighter"
              style={{
                top: `${i * 25 + 10}%`,
                right: `${i % 2 === 0 ? '10%' : 'auto'}`,
                left: `${i % 2 !== 0 ? '10%' : 'auto'}`,
                filter: 'blur(1px)'
              }}>
              {tool}
            </span>
          ))}
        </motion.div>
      </div>

      {/* --- CENTER COPY --- */}
      <div className="relative z-20 container mx-auto px-6 text-center mix-blend-luminosity">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1, ease: "circOut" }}
          className="flex flex-col items-center"
        >
          <div className="backdrop-blur-sm bg-black/30 border border-white/10 px-6 py-2 rounded-full mb-12">
            <span className="text-gray-300 font-mono text-xs md:text-sm tracking-[0.3em] uppercase">
              The Landscape is changing
            </span>
          </div>
          
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.95] mb-8">
            <span className="block text-gray-500">WHATEVER</span>
            <span className="block text-gray-300">YOU USE.</span>
            <span className="block text-accent mt-4 glitch-text">WE GOT YOU.</span>
          </h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="max-w-2xl text-lg md:text-2xl text-gray-400 font-light leading-relaxed mt-8"
          >
            Don't get lost in the noise of <span className="text-white border-b border-white/20 pb-1">models</span>. 
            Master the <span className="text-white border-b border-white/20 pb-1">vibe</span>.
          </motion.p>
        </motion.div>

      </div>
    </section>
  );
};

export default ProblemSection;
