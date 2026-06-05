import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { FiExternalLink, FiMic } from 'react-icons/fi';

export default function BottomCTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
      className="w-full flex flex-col items-center relative z-10 flex-shrink-0 py-1.5"
    >
      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-2.5"></div>

      <p className="text-xs text-primary-blue font-semibold mb-2.5 tracking-wide">
        Sifra is evolving. Join the conversation.
      </p>

      <div className="flex items-center gap-2.5">
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(37, 211, 102, 0.2)" }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center space-x-2 bg-white border-2 border-gray-200 hover:border-green-500 px-4 py-2.5 rounded-lg text-[10px] font-bold tracking-wide text-gray-700 hover:text-green-600 transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-green-200/30"
        >
          <FaWhatsapp className="w-4 h-4 text-green-500" />
          <span>WHATSAPP</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(0,0,0,0.05)" }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center space-x-2 bg-white border-2 border-gray-200 hover:border-[#B49162] px-4 py-2.5 rounded-lg text-[10px] font-bold tracking-wide text-gray-700 hover:text-[#B49162] transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-[#B49162]/20"
        >
          <FiExternalLink className="w-4 h-4" />
          <span>AI IDEATE</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center space-x-2 bg-white border-2 border-gray-200 px-4 py-2.5 rounded-lg text-[10px] font-bold tracking-wide text-gray-400 cursor-not-allowed shadow-sm"
        >
          <FiMic className="w-4 h-4" />
          <span>VOICE</span>
        </motion.button>
      </div>
    </motion.section>
  );
}
