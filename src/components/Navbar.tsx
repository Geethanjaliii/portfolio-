'use client';

import React, { useState, useEffect } from 'react';
import { Download, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar({ onOpenCommandPalette }: { onOpenCommandPalette: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['home', 'about', 'achievements', 'projects', 'experience', 'skills', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 ${
        scrolled ? 'pt-2 px-4' : 'pt-4 px-6'
      }`}
    >
      <div 
        className={`mx-auto max-w-6xl rounded-2xl glass-navbar flex items-center justify-between px-6 py-3 transition-all ${
          scrolled ? 'bg-neutral-950/80 shadow-lg border border-white/5' : 'bg-transparent border-transparent'
        }`}
      >
        {/* Monogram "G" logo */}
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="relative w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 font-extrabold text-white text-lg tracking-tighter shadow-md shadow-blue-500/20 overflow-hidden">
            <span className="relative z-10">G</span>
            <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-[1px] bg-neutral-950 rounded-[7px] flex items-center justify-center z-5">
              <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">G</span>
            </div>
          </div>
          <span className="font-semibold text-sm tracking-wider uppercase text-neutral-400 group-hover:text-white transition-colors">
            GEETHANJALI
          </span>
        </div>

        {/* Navigation links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`relative text-xs font-semibold uppercase tracking-widest transition-colors py-1 ${
                activeSection === link.id ? 'text-white' : 'text-neutral-500 hover:text-neutral-300'
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute bottom-[-6px] left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Actions (Cmd+K and Resume) */}
        <div className="flex items-center gap-4">
          {/* Cmd+K trigger */}
          <button
            onClick={onOpenCommandPalette}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 border border-white/5 text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800 transition-all text-xs font-medium cursor-pointer"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Cmd K</span>
          </button>

          {/* Primary CTA */}
          <a
            href="/resume/Geethanjali_Resume.pdf"
            download
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-all text-xs font-bold shadow-md shadow-blue-500/10 cursor-pointer border border-blue-500/30"
          >
            <Download className="w-3.5 h-3.5" />
            <span>RESUME</span>
          </a>
        </div>
      </div>
    </motion.header>
  );
}
