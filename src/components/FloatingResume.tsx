'use client';

import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingResume() {
  // Always visible floating resume button (visible on all sections)
  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.18 }}
        className="fixed bottom-6 right-6 z-[990]"
      >
        <a
          href="/resume/Geethanjali_Resume.pdf"
          download
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-blue-600/90 text-white font-bold text-xs uppercase tracking-wider backdrop-blur-md shadow-lg shadow-blue-500/20 border border-blue-500/30 hover:bg-blue-500 transition-all hover:scale-105 active:scale-95 group cursor-pointer"
          title="Download PDF Resume"
        >
          <Download className="w-4 h-4 group-hover:animate-bounce" />
          <span>⬇ Resume</span>
        </a>
      </motion.div>
    </AnimatePresence>
  );
}
