import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const outerNodes = [
  { label: 'PEOPLE', x: 0.28, y: 0.08 },
  { label: 'KNOWLEDGE', x: 0.72, y: 0.08 },
  { label: 'PROJECTS', x: 0.28, y: 0.92 },
  { label: 'ORGANIZATIONS', x: 0.72, y: 0.92 },
];

function PeopleIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="10" cy="9" r="3.5" stroke="#B49162" strokeWidth="1.2" />
      <circle cx="18" cy="9" r="3.5" stroke="#B49162" strokeWidth="1.2" />
      <path d="M4 24c0-3.5 2.5-6 5.5-6h1c1.2 0 2.3.4 3.2 1.1.9-.7 2-1.1 3.2-1.1h1c3 0 5.5 2.5 5.5 6" stroke="#B49162" strokeWidth="1.2" fill="none" />
    </svg>
  );
}

function KnowledgeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="5" y="3" width="12" height="16" rx="1.5" stroke="#B49162" strokeWidth="1.2" />
      <rect x="11" y="9" width="12" height="16" rx="1.5" stroke="#B49162" strokeWidth="1.2" />
      <line x1="14" y1="14" x2="20" y2="14" stroke="#B49162" strokeWidth="0.8" />
      <line x1="14" y1="17.5" x2="20" y2="17.5" stroke="#B49162" strokeWidth="0.8" />
      <line x1="14" y1="21" x2="18" y2="21" stroke="#B49162" strokeWidth="0.8" />
    </svg>
  );
}

function ProjectsIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="3" y="7" width="22" height="15" rx="2" stroke="#B49162" strokeWidth="1.2" />
      <path d="M9 7V5.5A1.5 1.5 0 0110.5 4h7A1.5 1.5 0 0119 5.5V7" stroke="#B49162" strokeWidth="1.2" fill="none" />
      <circle cx="14" cy="14.5" r="2.5" stroke="#B49162" strokeWidth="1.2" />
    </svg>
  );
}

function OrganizationsIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="6" y="3" width="16" height="22" rx="1.5" stroke="#B49162" strokeWidth="1.2" />
      <rect x="10" y="7" width="3" height="2.5" rx="0.5" stroke="#B49162" strokeWidth="0.8" />
      <rect x="15" y="7" width="3" height="2.5" rx="0.5" stroke="#B49162" strokeWidth="0.8" />
      <rect x="10" y="12" width="3" height="2.5" rx="0.5" stroke="#B49162" strokeWidth="0.8" />
      <rect x="15" y="12" width="3" height="2.5" rx="0.5" stroke="#B49162" strokeWidth="0.8" />
      <rect x="11" y="19" width="6" height="6" rx="1" stroke="#B49162" strokeWidth="0.8" />
    </svg>
  );
}

const iconMap = {
  PEOPLE: PeopleIcon,
  KNOWLEDGE: KnowledgeIcon,
  PROJECTS: ProjectsIcon,
  ORGANIZATIONS: OrganizationsIcon,
};

function NetworkCanvas({ width, height }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = width;
    const H = height;
    const centerX = W / 2;
    const centerY = H / 2;

    const nodePositions = outerNodes.map(n => ({ x: n.x * W, y: n.y * H }));

    const particles = [];
    for (let i = 0; i < nodePositions.length; i++) {
      for (let j = 0; j < 4; j++) {
        particles.push({
          fromIdx: i,
          progress: Math.random(),
          speed: 0.0008 + Math.random() * 0.0015,
        });
      }
    }

    let frame;
    function draw() {
      ctx.clearRect(0, 0, W, H);

      // Connection lines
      nodePositions.forEach((node) => {
        const grad = ctx.createLinearGradient(node.x, node.y, centerX, centerY);
        grad.addColorStop(0, 'rgba(180, 145, 98, 0.12)');
        grad.addColorStop(0.5, 'rgba(180, 145, 98, 0.25)');
        grad.addColorStop(1, 'rgba(180, 145, 98, 0.12)');

        ctx.beginPath();
        ctx.moveTo(node.x, node.y);
        ctx.lineTo(centerX, centerY);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Moving particles along connections
      particles.forEach((p) => {
        p.progress += p.speed;
        if (p.progress > 1) p.progress = 0;

        const from = nodePositions[p.fromIdx];
        const x = from.x + (centerX - from.x) * p.progress;
        const y = from.y + (centerY - from.y) * p.progress;

        // Glow
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180, 145, 98, ${0.1})`;
        ctx.fill();

        // Particle
        ctx.beginPath();
        ctx.arc(x, y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180, 145, 98, ${0.5 + (1 - p.progress) * 0.3})`;
        ctx.fill();
      });

      frame = requestAnimationFrame(draw);
    }

    draw();
    return () => cancelAnimationFrame(frame);
  }, [width, height]);

  return <canvas ref={canvasRef} width={width} height={height} className="absolute inset-0" />;
}

export default function WhatIsSifra() {
  const netW = 520;
  const netH = 320;

  return (
    <section className="w-full mt-10 relative z-10">
      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-8"></div>

      <div className="flex items-center justify-between">
        {/* Left text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-[38%] flex flex-col justify-center pr-6"
        >
          <h2 className="text-3xl font-serif text-primary-blue mb-5 leading-tight font-bold">WHAT IS SIFRA?</h2>
          <p className="text-[#B49162] text-[15px] font-medium mb-4 leading-relaxed">
            Sifra is a persistent AI organizational intelligence.
          </p>
          <p className="text-gray-500 text-[13px] leading-[1.7] mb-7">
            She learns through conversations, experiences, projects, and collective inquiry—across people, knowledge, and systems. Sifra grows with us, remembers with us, and evolves for all of us.
          </p>
          <motion.a
            href="#"
            whileHover={{ x: 4 }}
            className="flex items-center space-x-2 text-[#B49162] font-bold text-[13px] tracking-wider hover:underline w-max uppercase"
          >
            <span>KNOW MORE ABOUT SIFRA</span>
            <FiExternalLink className="w-3.5 h-3.5" />
          </motion.a>
        </motion.div>

        {/* Right network diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="w-[58%] relative"
          style={{ height: `${netH}px` }}
        >
          <NetworkCanvas width={netW} height={netH} />

          {/* Center SIFRA node */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
            <motion.div
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500 flex items-center justify-center mb-2"
              style={{ boxShadow: '0 0 30px rgba(59,130,246,0.35)' }}
            >
              <div className="w-5 h-5 bg-white rounded-full blur-[3px] opacity-80" />
            </motion.div>
            <span className="text-primary-blue font-serif text-base font-bold tracking-wider">SIFRA</span>
          </div>

          {/* Outer nodes */}
          {outerNodes.map((node, idx) => {
            const IconComp = iconMap[node.label];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.08 }}
                className="absolute flex flex-col items-center z-10"
                style={{
                  left: `${node.x * 100}%`,
                  top: `${node.y * 100}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#FDF8F3] border border-[#EAD9C2] flex items-center justify-center mb-1.5 shadow-sm">
                  <IconComp />
                </div>
                <span className="text-[9px] font-bold tracking-[0.15em] text-[#B49162] uppercase">{node.label}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
