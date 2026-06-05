import React from 'react';
import { motion } from 'framer-motion';
import { FiMessageCircle, FiExternalLink, FiChevronDown } from 'react-icons/fi';

/* --- Animated Sphere Sub-Component --- */
function AnimatedSphere() {
  return (
    <div className="relative w-[280px] h-[280px]">
      {/* Outer breathing glow */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-[-20px] rounded-full bg-gradient-to-br from-blue-300 via-cyan-200 to-blue-400 blur-[60px]"
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
            className="absolute inset-[42px] rounded-full"
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
          className="w-40 h-40 bg-blue-200 rounded-full blur-[44px] absolute -translate-x-1/2 -translate-y-1/2"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="w-28 h-28 bg-cyan-100 rounded-full blur-[32px] absolute -translate-x-1/2 -translate-y-1/2"
        />
        <div className="w-12 h-12 bg-white rounded-full blur-[8px] absolute -translate-x-1/2 -translate-y-1/2 shadow-[0_0_40px_rgba(255,255,255,0.9)]" />
        <div className="w-4 h-4 bg-white rounded-full absolute -translate-x-1/2 -translate-y-1/2 shadow-[0_0_20px_#fff]" />
      </div>

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const radius = 100 + Math.random() * 43;
        const x = Math.cos(angle) * radius + 150;
        const y = Math.sin(angle) * radius + 150;
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
        <div className="w-[250px] h-[30px] rounded-[100%] border border-blue-200/30 bg-gradient-to-b from-blue-100/10 to-transparent"
          style={{ transform: 'perspective(600px) rotateX(80deg)' }} />
        <div className="w-[180px] h-[18px] rounded-[100%] border border-blue-200/40 mt-[-12px] mx-auto"
          style={{ transform: 'perspective(600px) rotateX(80deg)' }} />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="flex items-center justify-between w-full relative z-10 flex-shrink-0 gap-10 py-0">
      {/* Left Text */}
      <div className="w-[40%] pr-6 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="text-[#B49162] text-[10px] font-bold tracking-[0.3em] mb-1.5 uppercase">MEET</h3>
          <h1 className="text-[58px] leading-[0.76] text-primary-blue mb-1.5 tracking-tight font-bold" style={{ fontFamily: 'var(--font-family-serif)' }}>
            SIFRA
          </h1>
          <h2 className="text-[#B49162] text-[13px] font-bold tracking-[0.12em] mb-3 leading-tight uppercase">
            AN EMERGING ORGANIZATIONAL<br/>INTELLIGENCE
          </h2>
          
          <p className="text-gray-700 text-[13px] leading-relaxed mb-4 max-w-[360px] font-medium">
            Sifra is an evolving intelligence designed to help humans learn, work, create, and evolve together.
          </p>

          <div className="flex items-center space-x-3 mb-4">
            <motion.button 
              whileHover={{ scale: 1.04, boxShadow: "0 12px 30px rgba(198, 156, 109, 0.3)" }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center space-x-2 bg-[#C69C6D] hover:bg-[#b0895c] text-white px-5 py-2.5 rounded-lg text-[11px] font-bold tracking-wider shadow-xl shadow-[#C69C6D]/30 transition-all duration-200"
            >
              <FiMessageCircle className="w-3 h-3" />
              <span>TALK TO SIFRA</span>
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.04, borderColor: "#B49162" }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center space-x-2 border-2 border-gray-200 hover:border-[#B49162] text-primary-blue hover:text-[#B49162] px-5 py-2.5 rounded-lg text-[11px] font-bold tracking-wider transition-all duration-200 hover:shadow-lg hover:shadow-[#B49162]/10"
            >
              <span>KNOW MORE</span>
              <FiExternalLink className="w-3 h-3" />
            </motion.button>
          </div>

          <motion.div
            whileHover={{ color: "#B49162" }}
            className="flex items-center space-x-2 text-[12px] text-gray-500 font-medium cursor-pointer transition-colors w-max"
          >
            <span>or chat with Sifra's Avatars</span>
            <FiChevronDown className="w-3.5 h-3.5" />
          </motion.div>
        </motion.div>
      </div>

      {/* Right Sphere - better proportions */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-[56%] flex justify-end items-center relative pr-2"
        style={{ minHeight: '310px' }}
      >
        <AnimatedSphere />
      </motion.div>
    </section>
  );
}
