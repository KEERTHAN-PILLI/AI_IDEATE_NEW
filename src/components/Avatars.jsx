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
    <div className="relative w-20 h-20 mb-5">
      {/* Background glow */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
        className={`absolute -inset-3 rounded-full ${bgGlow} blur-[18px]`}
      />

      {/* Main orb */}
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay }}
        className={`w-full h-full rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center relative z-10 transition-transform duration-500`}
        style={{ boxShadow: `0 0 25px ${glowColor}` }}
      >
        {/* Inner highlight */}
        <div className="w-7 h-7 bg-white rounded-full blur-[4px] opacity-70" />
        
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
    <section className="w-full mt-10 relative z-10">
      {/* Section divider line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-6"></div>

      <div className="flex items-center justify-center space-x-4 mb-7">
        <h3 className="text-sm font-bold tracking-[0.2em] text-primary-blue uppercase text-center">
          CHAT ON WHATSAPP WITH SIFRA'S AVATARS
        </h3>
      </div>

      <div className="flex justify-between space-x-5">
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
            className="flex-1 bg-white rounded-2xl py-7 px-5 flex flex-col items-center text-center border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all cursor-pointer"
          >
            <AvatarOrb {...avatar} delay={idx * 0.6} />

            <h4 className="text-[#B49162] text-xs font-bold tracking-[0.2em] uppercase mb-0.5">{avatar.name}</h4>
            <h5 className="text-lg font-serif font-bold text-primary-blue mb-3">{avatar.role}</h5>
            
            <p className="text-gray-500 text-[13px] leading-relaxed mb-6 flex-1">
              {avatar.desc}
            </p>

            <motion.button 
              whileHover={{ scale: 1.06, backgroundColor: "#f0fdf4" }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center space-x-2 border border-gray-200 hover:border-green-400 text-gray-600 hover:text-green-600 px-4 py-2 rounded-md text-[11px] font-bold tracking-wider transition-colors"
            >
              <FaWhatsapp className="w-3.5 h-3.5 text-green-500" />
              <span>CHAT WITH {avatar.role}</span>
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
