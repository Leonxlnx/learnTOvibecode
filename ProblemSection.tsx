
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ProblemSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const words = [
    { text: "STUCK ON", style: "font-sans font-bold" },
    { text: "PURPLE GRADIENTS?", style: "font-serif italic text-accent" },
    { text: "BAD ALIGNMENT?", style: "font-mono text-gray-400" },
    { text: "GENERIC UI?", style: "font-sans font-black" },
  ];

  return (
    <section ref={containerRef} className="relative w-full py-32 md:py-48 bg-[#080808] text-white overflow-hidden flex flex-col items-center justify-center z-10 border-t border-white/5">
      
      {/* Background Noise */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        
        <motion.div style={{ y, opacity }} className="flex flex-col items-center gap-4 md:gap-8">
          <p className="text-xs md:text-sm font-mono tracking-[0.5em] text-gray-500 uppercase mb-8">
            The Reality Check
          </p>

          {words.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, rotateX: 45 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ 
                duration: 0.8, 
                delay: i * 0.1, 
                ease: [0.215, 0.61, 0.355, 1] 
              }}
              className={`text-4xl md:text-6xl lg:text-8xl leading-tight ${item.style}`}
            >
              {item.text}
            </motion.div>
          ))}

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "circOut" }}
            className="w-24 h-1 bg-accent my-12"
          />

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="max-w-2xl text-lg md:text-xl text-gray-400 leading-relaxed font-light"
          >
            You don't know how to <span className="text-white font-medium">vibecode</span> yet. 
            That's okay. This free course is the antidote to boring websites.
          </motion.p>
        </motion.div>

      </div>
    </section>
  );
};

export default ProblemSection;
