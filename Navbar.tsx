
import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-8 left-0 right-0 flex justify-center z-50 pointer-events-none"
    >
      <div className="pointer-events-auto backdrop-blur-xl bg-[#0a0a0a]/60 border border-white/10 rounded-full p-1.5 pl-6 flex items-center shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]">
        
        {/* Logo Area */}
        <div className="mr-6 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="font-bold tracking-tight text-white text-sm">VIBECODE</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 mr-2">
          {['Vision', 'Works', 'Studio', 'Pricing'].map((item, i) => (
            <a 
              key={i}
              href="#" 
              className="relative px-4 py-2 text-xs font-medium text-gray-400 hover:text-white transition-colors duration-300 group rounded-full"
            >
              <span className="relative z-10">{item}</span>
              <div className="absolute inset-0 bg-white/10 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 rounded-full" />
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <button className="relative group px-6 py-2.5 bg-white rounded-full overflow-hidden ml-2 transition-transform active:scale-95">
            <span className="relative z-10 text-black text-xs font-bold tracking-widest uppercase group-hover:text-black transition-colors">
                Start
            </span>
            <div className="absolute inset-0 bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
        </button>

      </div>
    </motion.div>
  );
};

export default Navbar;
