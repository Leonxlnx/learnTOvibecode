
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const ProblemSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Smooth scroll physics
  const smoothProgress = useSpring(scrollYProgress, { damping: 15, stiffness: 100 });

  // Parallax layers for the chaos
  const y1 = useTransform(smoothProgress, [0, 1], [200, -200]);
  const y2 = useTransform(smoothProgress, [0, 1], [400, -400]);
  const y3 = useTransform(smoothProgress, [0, 1], [100, -300]);
  const rotate1 = useTransform(smoothProgress, [0, 1], [-10, 10]);
  const rotate2 = useTransform(smoothProgress, [0, 1], [5, -5]);

  return (
    <section ref={containerRef} className="relative w-full min-h-[120vh] bg-[#080808] flex flex-col items-center justify-center overflow-hidden border-t border-white/5 py-40">
      
      {/* Dynamic Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* The Chaos Layers - "Bad Design" terms floating immersively */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden">
        
        {/* Layer 1: Huge background text */}
        <motion.div style={{ y: y1, rotate: rotate1 }} className="absolute top-[10%] -left-[10%] opacity-[0.03] whitespace-nowrap">
          <span className="text-[20vw] font-black font-sans text-white uppercase tracking-tighter">
            PURPLE GRADIENTS
          </span>
        </motion.div>

        {/* Layer 2: Mid-ground text */}
        <motion.div style={{ y: y2, x: 100 }} className="absolute top-[40%] right-[-20%] opacity-[0.08] whitespace-nowrap z-0">
          <span className="text-[15vw] font-serif italic text-white uppercase tracking-widest">
            Bad Alignment
          </span>
        </motion.div>

        {/* Layer 3: Foreground distorted text */}
        <motion.div style={{ y: y3, rotate: rotate2 }} className="absolute bottom-[10%] left-[10%] opacity-[0.05] whitespace-nowrap z-0">
          <span className="text-[18vw] font-mono font-bold text-accent uppercase tracking-tight mix-blend-difference">
            GENERIC UI
          </span>
        </motion.div>
      </div>

      {/* Center Focus Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        
        <motion.div
          initial={{ opacity: 0, filter: "blur(20px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <span className="text-accent font-mono text-sm tracking-[0.5em] mb-8 uppercase">
            System Failure
          </span>
          
          <h2 className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800 tracking-tighter leading-[0.9] mb-12">
            DESIGN<br/>WITHOUT<br/>SOUL?
          </h2>

          <div className="w-px h-24 bg-gradient-to-b from-accent to-transparent my-8" />

          <p className="max-w-xl text-lg md:text-xl text-gray-400 font-light leading-relaxed">
            You are stuck in the loop of templates. <br/>
            <span className="text-white font-medium">Vibecoding</span> is the way out.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default ProblemSection;
