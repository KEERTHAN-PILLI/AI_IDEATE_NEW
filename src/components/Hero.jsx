import React from 'react';
import { motion } from 'framer-motion';
import { FiMessageCircle, FiExternalLink, FiChevronDown } from 'react-icons/fi';

/* --- Animated Sphere Sub-Component --- */
function AnimatedSphere() {
  return (
    <div className="relative w-[420px] h-[420px]">
      {/* Outer breathing glow */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-[-30px] rounded-full bg-gradient-to-br from-blue-300 via-cyan-200 to-blue-400 blur-[80px]"
      />

      {/* Main sphere container with perspective */}
      <div className="absolute inset-0" style={{ perspective: '800px' }}>
        {/* Orbital rings */}
        {[0, 30, 60, 90, 120, 150].map((angle, i) => (
          <motion.div
            key={i}
            className="absolute inset-[10px] rounded-full"
            style={{
              border: '0.5px solid rgba(100, 160, 220, 0.35)',
              transform: `rotateX(${angle}deg) rotateY(${angle * 0.7}deg)`,
              transformStyle: 'preserve-3d',
            }}
            animate={{ rotateZ: [0, 360] }}
            transition={{ duration: 25 + i * 8, repeat: Infinity, ease: "linear" }}
          >
            {/* Dot on ring */}
            <div
              className="absolute w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.8)]"
              style={{ top: '0%', left: '50%', transform: 'translate(-50%, -50%)' }}
            />
          </motion.div>
        ))}

        {/* Inner orbital rings (tighter) */}
        {[15, 45, 75, 105, 135].map((angle, i) => (
          <motion.div
            key={`inner-${i}`}
            className="absolute inset-[60px] rounded-full"
            style={{
              border: '0.3px solid rgba(100, 160, 220, 0.2)',
              transform: `rotateX(${angle}deg) rotateY(${angle * 1.3}deg)`,
              transformStyle: 'preserve-3d',
            }}
            animate={{ rotateZ: [360, 0] }}
            transition={{ duration: 35 + i * 5, repeat: Infinity, ease: "linear" }}
          />
        ))}

        {/* Outer sphere boundary */}
        <div className="absolute inset-[5px] rounded-full border border-blue-200/30" />
      </div>

      {/* Center glow layers */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-56 h-56 bg-blue-200 rounded-full blur-[60px] absolute -translate-x-1/2 -translate-y-1/2"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="w-36 h-36 bg-cyan-100 rounded-full blur-[40px] absolute -translate-x-1/2 -translate-y-1/2"
        />
        <div className="w-16 h-16 bg-white rounded-full blur-[8px] absolute -translate-x-1/2 -translate-y-1/2 shadow-[0_0_40px_rgba(255,255,255,0.9)]" />
        <div className="w-5 h-5 bg-white rounded-full absolute -translate-x-1/2 -translate-y-1/2 shadow-[0_0_20px_#fff]" />
      </div>

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const radius = 140 + Math.random() * 60;
        const x = Math.cos(angle) * radius + 210;
        const y = Math.sin(angle) * radius + 210;
        return (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full bg-blue-300"
            style={{ left: x, top: y }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [0.8, 1.3, 0.8],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        );
      })}

      {/* Bottom ripple/reflection */}
      <div className="absolute bottom-[-35px] left-1/2 -translate-x-1/2">
        <div className="w-[350px] h-[40px] rounded-[100%] border border-blue-200/30 bg-gradient-to-b from-blue-100/10 to-transparent"
          style={{ transform: 'perspective(600px) rotateX(80deg)' }} />
        <div className="w-[250px] h-[25px] rounded-[100%] border border-blue-200/40 mt-[-15px] mx-auto"
          style={{ transform: 'perspective(600px) rotateX(80deg)' }} />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="flex items-center justify-between w-full mt-10 relative z-10">
      {/* Left Text */}
      <div className="w-[45%] pr-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="text-[#B49162] text-base font-semibold tracking-[0.25em] mb-3 uppercase">MEET</h3>
          <h1 className="text-[96px] leading-[0.9] text-primary-blue mb-5 tracking-tight" style={{ fontFamily: 'var(--font-family-serif)', fontWeight: 700 }}>
            SIFRA
          </h1>
          <h2 className="text-[#B49162] text-lg font-semibold tracking-[0.15em] mb-6 leading-snug uppercase">
            AN EMERGING ORGANIZATIONAL<br/>INTELLIGENCE
          </h2>
          
          <p className="text-gray-600 text-[15px] leading-relaxed mb-8 max-w-[420px]">
            Sifra is an evolving intelligence designed to help humans learn, work, create, and evolve together.
          </p>

          <div className="flex items-center space-x-4 mb-8">
            <motion.button 
              whileHover={{ scale: 1.04, boxShadow: "0 12px 30px rgba(198, 156, 109, 0.3)" }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center space-x-2.5 bg-[#C69C6D] hover:bg-[#b0895c] text-white px-7 py-3.5 rounded-md text-sm font-bold tracking-wider shadow-lg shadow-[#C69C6D]/20 transition-colors"
            >
              <FiMessageCircle className="w-4 h-4" />
              <span>TALK TO SIFRA</span>
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.04, borderColor: "#B49162" }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center space-x-2.5 border border-gray-300 hover:border-[#B49162] text-primary-blue hover:text-[#B49162] px-7 py-3.5 rounded-md text-sm font-bold tracking-wider transition-colors"
            >
              <span>KNOW MORE ABOUT SIFRA</span>
              <FiExternalLink className="w-4 h-4" />
            </motion.button>
          </div>

          <motion.div
            whileHover={{ color: "#B49162" }}
            className="flex items-center space-x-2 text-sm text-gray-400 font-medium cursor-pointer transition-colors w-max"
          >
            <span>or chat with Sifra's Avatars</span>
            <FiChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>

      {/* Right Sphere */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-[55%] flex justify-center items-center relative"
        style={{ minHeight: '480px' }}
      >
        <AnimatedSphere />
      </motion.div>
    </section>
  );
}
