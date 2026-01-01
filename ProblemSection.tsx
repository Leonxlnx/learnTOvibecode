
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const ProblemSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { damping: 15, stiffness: 100 });
  
  // Chaotic movement for the "Bad Habits"
  const x1 = useTransform(smoothProgress, [0, 1], [-100, 100]);
  const x2 = useTransform(smoothProgress, [0, 1], [100, -100]);
  const rotate = useTransform(smoothProgress, [0, 1], [-5, 5]);
  const opacity = useTransform(smoothProgress, [0.2, 0.5, 0.8], [0, 1, 0]);

  return (
    <section ref={containerRef} className="relative w-full min-h-[100vh] bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden border-t border-white/5 py-32 z-10">
      
      {/* Background Noise & Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* The "Bad Design" Critique Elements */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none mix-blend-difference overflow-hidden">
        
        {/* Element 1: The Generic Gradient */}
        <motion.div 
          style={{ x: x1, rotate: -10 }} 
          className="absolute top-[15%] left-[-10%] md:left-[5%]"
        >
           <h3 className="text-[10vw] font-black font-sans text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 opacity-40 blur-sm uppercase leading-none">
             Generic<br/>Gradient
           </h3>
        </motion.div>

        {/* Element 2: The Bad Alignment */}
        <motion.div 
          style={{ x: x2, rotate: 5 }} 
          className="absolute bottom-[20%] right-[-10%] md:right-[5%] text-right"
        >
           <h3 className="text-[8vw] font-serif italic text-white/20 uppercase leading-none tracking-widest">
             Bad<br/>&nbsp;&nbsp;Alignment
           </h3>
        </motion.div>

        {/* Element 3: Template Hell */}
        <motion.div 
          style={{ scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]) }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[1px] bg-red-500 blur-[2px] opacity-50"
        />
      </div>

      {/* The Core Message */}
      <div className="relative z-20 text-center px-6">
        <motion.div style={{ opacity }}>
            <span className="inline-block border border-red-500/50 text-red-500 font-mono text-xs px-3 py-1 rounded-full bg-red-900/10 mb-8 backdrop-blur-md">
                ERROR: CREATIVITY_NOT_FOUND
            </span>
            
            <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase">
              Stop Building<br />
              <span className="text-transparent bg-clip-text bg-white/20" style={{ textShadow: "0 0 20px rgba(255,255,255,0.1)" }}>Dead Websites.</span>
            </h2>

            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-500 font-light leading-relaxed">
              The web is drowning in templates. <br/>
              <span className="text-white">Vibecoding</span> is the resurrection.
            </p>
        </motion.div>
      </div>

    </section>
  );
};

export default ProblemSection;
