import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const avatars = [
  {
    role: "CEO",
    name: "SIFRA",
    desc: "Oversees, coordinates, and aligns the collective intelligence.",
    gradient: "from-blue-300 via-blue-400 to-blue-500",
    glowColor: "rgba(59,130,246,0.5)",
    bgGlow: "bg-blue-200",
  },
  {
    role: "ARCHITECT",
    name: "BOB",
    desc: "Designs systems, strategies, and future blueprints.",
    gradient: "from-purple-300 via-purple-400 to-purple-500",
    glowColor: "rgba(168,85,247,0.5)",
    bgGlow: "bg-purple-200",
  },
  {
    role: "DEVELOPER",
    name: "CODEY",
    desc: "Builds solutions, prototypes, and brings ideas to life.",
    gradient: "from-cyan-300 via-cyan-400 to-teal-400",
    glowColor: "rgba(34,211,238,0.5)",
    bgGlow: "bg-cyan-200",
  },
  {
    role: "COUNSELOR",
    name: "SAGE",
    desc: "Listens, reflects, and helps explore possibilities and clarity.",
    gradient: "from-amber-300 via-orange-300 to-amber-400",
    glowColor: "rgba(251,191,36,0.5)",
    bgGlow: "bg-amber-200",
  }
];

function AvatarOrb({ gradient, glowColor, bgGlow, delay = 0 }) {
  return (
    <div className="relative w-12 h-12 mb-2">
      {/* Background glow */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
        className={`absolute -inset-2 rounded-full ${bgGlow} blur-[14px]`}
      />

      {/* Main orb */}
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay }}
        className={`w-full h-full rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center relative z-10 transition-transform duration-500`}
        style={{ boxShadow: `0 0 20px ${glowColor}` }}
      >
        {/* Inner highlight */}
        <div className="w-5 h-5 bg-white rounded-full blur-[3px] opacity-70" />
        
        {/* Rotating orbit ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[-3px] rounded-full border border-white/30"
          style={{ borderStyle: 'dashed' }}
        />
      </motion.div>
    </div>
  );
}

export default function Avatars() {
  return (
    <section className="w-full relative z-10 flex-shrink-0 py-1">
      {/* Section divider line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-3.5"></div>

      <div className="flex items-center justify-center space-x-4 mb-3.5">
        <h3 className="text-[11px] font-bold tracking-[0.25em] text-primary-blue uppercase text-center letter-spacing-wide">
          Chat on WhatsApp with Sifra's Avatars
        </h3>
      </div>

      <div className="flex justify-between gap-3">
        {avatars.map((avatar, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ 
              scale: 1.03, 
              y: -4, 
              boxShadow: "0 20px 50px rgba(0,0,0,0.06)",
              borderColor: "rgba(198, 156, 109, 0.3)"
            }}
            className="flex-1 bg-white rounded-xl py-4 px-4 flex flex-col items-center text-center border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300 cursor-pointer"
          >
            <AvatarOrb {...avatar} delay={idx * 0.6} />

            <h4 className="text-[#B49162] text-[10px] font-bold tracking-[0.2em] uppercase mb-0.5">{avatar.name}</h4>
            <h5 className="text-sm font-serif font-bold text-primary-blue mb-2 letter-spacing-wide">{avatar.role}</h5>
            
            <p className="text-gray-600 text-[11px] leading-relaxed mb-3 flex-1 font-medium">
              {avatar.desc}
            </p>

            <motion.button 
              whileHover={{ scale: 1.06, backgroundColor: "#f0fdf4" }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center space-x-1.5 border-2 border-gray-200 hover:border-green-500 text-gray-700 hover:text-green-600 px-3.5 py-1.5 rounded-lg text-[9px] font-bold tracking-wider transition-all duration-200 hover:shadow-md hover:shadow-green-200/30"
            >
              <FaWhatsapp className="w-3 h-3 text-green-500" />
              <span>CHAT</span>
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
