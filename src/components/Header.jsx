import React from 'react';
import { motion } from 'framer-motion';
import { FiMessageCircle } from 'react-icons/fi';

const navItems = [
  { name: 'About Sifra', isComingSoon: false },
  { name: 'AI Ideate', isComingSoon: false },
  { name: 'Vision', isComingSoon: true },
  { name: 'Meet Sifra', isComingSoon: true },
  { name: 'Talk to Sifra', isComingSoon: true },
  { name: 'Collaborate', isComingSoon: false },
];

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex items-center justify-between w-full py-2 relative z-20 flex-shrink-0 border-b border-gray-100/50"
    >
      {/* Left: Logo */}
      <div className="flex items-center space-x-3 cursor-pointer group">
        <div className="w-10 h-10 relative flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-full h-full text-accent-gold transform group-hover:rotate-90 transition-transform duration-700 ease-in-out">
            {/* Simple representation of the logo */}
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M50 5 L95 27.5 L95 72.5 L50 95 L5 72.5 L5 27.5 Z" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M50 5 L50 95 M5 27.5 L95 72.5 M5 72.5 L95 27.5" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
            <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-serif tracking-widest text-[#B49162]">AI IDEATE</span>
          <span className="text-[8px] text-gray-500 font-medium tracking-wide leading-tight">Where Human & Artificial<br/>Intelligence Co-Evolve</span>
        </div>
      </div>

      {/* Center: Navigation */}
      <nav className="flex items-center space-x-6">
        {navItems.map((item, idx) => (
          <div key={idx} className="relative flex flex-col items-center group cursor-pointer">
            <span className={`text-[12px] font-semibold tracking-wide transition-colors duration-300 ${item.isComingSoon ? 'text-gray-400 group-hover:text-gray-600' : 'text-primary-blue hover:text-[#B49162]'}`}>
              {item.name}
            </span>
            {item.isComingSoon && (
              <span className="absolute -bottom-4 text-[7px] font-bold bg-[#FDF8F3] text-[#B49162] px-2 py-0.5 rounded-sm whitespace-nowrap opacity-80 group-hover:opacity-100 transition-opacity shadow-sm">
                Coming Soon
              </span>
            )}
            {!item.isComingSoon && (
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#B49162] transition-all duration-300 group-hover:w-full"></span>
            )}
          </div>
        ))}
      </nav>

      {/* Right: CTA Button */}
      <motion.button 
        whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(180, 145, 98, 0.15)" }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center space-x-2 border border-[#B49162] text-[#B49162] px-4 py-1.5 rounded-full text-[11px] font-semibold hover:bg-[#FDF8F3] transition-colors"
      >
        <span>Talk to Sifra</span>
        <FiMessageCircle className="w-4 h-4" />
      </motion.button>
    </motion.header>
  );
}
