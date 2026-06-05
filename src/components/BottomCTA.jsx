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
      className="w-full mt-12 flex flex-col items-center relative z-10"
    >
      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-8"></div>

      <p className="text-lg text-primary-blue font-medium mb-6 tracking-wide">
        Sifra is evolving. Join the conversation.
      </p>

      <div className="flex items-center space-x-6">
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(37, 211, 102, 0.2)" }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center space-x-2 bg-white border border-gray-200 hover:border-green-400 px-6 py-3 rounded-lg text-sm font-bold tracking-wide text-gray-700 hover:text-green-600 transition-colors shadow-sm"
        >
          <FaWhatsapp className="w-5 h-5 text-green-500" />
          <span>CHAT ON WHATSAPP</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(0,0,0,0.05)" }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center space-x-2 bg-white border border-gray-200 hover:border-[#B49162] px-6 py-3 rounded-lg text-sm font-bold tracking-wide text-gray-700 hover:text-[#B49162] transition-colors shadow-sm"
        >
          <FiExternalLink className="w-5 h-5" />
          <span>VISIT AI IDEATE</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center space-x-2 bg-white border border-gray-200 px-6 py-3 rounded-lg text-sm font-bold tracking-wide text-gray-400 cursor-not-allowed shadow-sm"
        >
          <FiMic className="w-5 h-5" />
          <span>VOICE (COMING SOON)</span>
        </motion.button>
      </div>
    </motion.section>
  );
}
