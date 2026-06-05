import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FiMail } from 'react-icons/fi';

const socialIcons = [
  { Icon: FaLinkedinIn, label: 'LinkedIn', href: '#' },
  { Icon: FaXTwitter, label: 'X', href: '#' },
  { Icon: FaYoutube, label: 'YouTube', href: '#' },
  { Icon: FiMail, label: 'Email', href: '#' },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
      className="w-full bg-white border-t border-gray-100 px-14 py-1.5 flex items-center justify-between relative z-10 flex-shrink-0"
    >
      {/* Left: Logo */}
      <div className="flex items-center space-x-3">
        <div className="w-7 h-7 relative flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-full h-full text-[#B49162]">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M50 5 L95 27.5 L95 72.5 L50 95 L5 72.5 L5 27.5 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
        <span className="text-sm font-serif tracking-widest text-[#B49162]">AI IDEATE</span>
      </div>

      {/* Center: Copyright */}
      <p className="text-[8px] text-gray-400 tracking-wide">
        © 2024 AI Ideate. All rights reserved.
      </p>

      {/* Right: Social Icons */}
      <div className="flex items-center space-x-3">
        {socialIcons.map(({ Icon, label, href }, idx) => (
          <motion.a
            key={idx}
            href={href}
            aria-label={label}
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-6 h-6 rounded-full bg-gray-50 hover:bg-[#FDF8F3] border border-gray-100 hover:border-[#B49162] flex items-center justify-center text-gray-500 hover:text-[#B49162] transition-colors"
          >
            <Icon className="w-3 h-3" />
          </motion.a>
        ))}
      </div>
    </motion.footer>
  );
}
