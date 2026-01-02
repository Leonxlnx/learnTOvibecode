
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoArrowUpRight, GoChevronDown } from 'react-icons/go';
import { Menu, X } from 'lucide-react';

// --- Types ---
interface Link {
  label: string;
  ariaLabel?: string;
  href?: string;
  description?: string; // Added for richer dropdowns
}

interface Item {
  label: string;
  links: Link[];
  bgColor?: string; // Optional override
  textColor?: string;
}

interface CardNavProps {
  logo?: string;
  logoAlt?: string;
  items: Item[];
  baseColor?: string; // Unused but kept for prop compat
  menuColor?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
  ease?: string;
}

// --- Components ---

const CardNav: React.FC<CardNavProps> = ({
  logo,
  logoAlt = 'Logo',
  items,
}) => {
  const [activeIndices, setActiveIndices] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* --- DESKTOP NAV --- */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-2 p-2 pl-6 pr-2 rounded-full border border-white/10 bg-[#050505]/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
      >
        {/* Logo */}
        <div className="flex items-center gap-2 mr-8 cursor-pointer group">
           {logo ? (
             <img src={logo} alt={logoAlt} className="h-6 w-auto" />
           ) : (
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-white group-hover:scale-125 transition-transform duration-300" />
                <span className="font-bold tracking-tight text-white text-sm">VIBECODE</span>
             </div>
           )}
        </div>

        {/* Links with Individual Dropdowns */}
        <ul className="flex items-center gap-1">
          {items.map((item, index) => (
            <li 
              key={index} 
              className="relative"
              onMouseEnter={() => setActiveIndices(index)}
              onMouseLeave={() => setActiveIndices(null)}
            >
              <button 
                className={`
                  relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full flex items-center gap-1
                  ${activeIndices === index ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white'}
                `}
              >
                {item.label}
                <motion.span animate={{ rotate: activeIndices === index ? 180 : 0 }}>
                    <GoChevronDown size={12} />
                </motion.span>
              </button>

              {/* The "Klappfenster" (Dropdown Window) */}
              <AnimatePresence>
                {activeIndices === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: 5, scale: 0.98, filter: "blur(5px)", transition: { duration: 0.2 } }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 p-2 rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-2xl overflow-hidden"
                  >
                     {/* Glossy shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

                    <div className="relative flex flex-col gap-1">
                      {item.links.map((link, i) => (
                        <a 
                          key={i} 
                          href={link.href || '#'}
                          className="group flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors duration-200"
                        >
                          <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{link.label}</span>
                          <GoArrowUpRight className="text-gray-600 group-hover:text-white transition-colors" size={14} />
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="ml-8 pl-4 border-l border-white/10">
           <button className="px-5 py-2 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors">
              Start
           </button>
        </div>
      </motion.nav>

      {/* --- MOBILE NAV (Hamburger) --- */}
      <div className="md:hidden fixed top-4 left-4 right-4 z-50 flex justify-between items-center p-4 rounded-full border border-white/10 bg-[#050505]/80 backdrop-blur-xl">
         <span className="font-bold text-white text-sm ml-2">VIBECODE</span>
         <button 
           onClick={() => setIsMobileMenuOpen(true)}
           className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
         >
           <Menu size={20} />
         </button>
      </div>

      {/* Mobile Fullscreen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-[60] bg-[#050505] flex flex-col p-6"
          >
            <div className="flex justify-end mb-8">
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-3 bg-white/10 rounded-full text-white hover:bg-white/20"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-8 mt-10">
              {items.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-4">
                  <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest">{item.label}</h3>
                  <div className="flex flex-col gap-3 ml-4 border-l border-white/10 pl-6">
                    {item.links.map((link, i) => (
                      <a key={i} href="#" className="text-2xl font-light text-white hover:text-gray-300">
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-auto w-full py-4 bg-white text-black font-bold rounded-xl uppercase tracking-widest">
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CardNav;