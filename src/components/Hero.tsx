'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Compass, Mail, MapPin, Award, BookOpen, Clock, Zap, Cpu } from 'lucide-react';
import ResumeCard from './ResumeCard';

export default function Hero() {
  const titles = ['Software Engineer', 'Cloud Engineer', 'Full Stack Developer', 'AI Enthusiast'];
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Decorative gradient light orb */}
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full filter blur-[100px] pointer-events-none z-0" />

      <div className="max-w-6xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Headline & Bio */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 font-bold text-[10px] tracking-widest uppercase mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
            <span>Open to Software Engineering, Cloud & Full Stack Roles</span>
          </motion.div>

          {/* Resume card with dynamic metadata */}
          <ResumeCard />

          {/* Name Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-2"
          >
            <span className="text-gradient-blue">Geethanjali</span>
          </motion.h1>

          {/* Animated Subtitle loop */}
          <div className="h-12 flex items-center mb-6 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={titleIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-2xl sm:text-3xl font-bold text-gradient-blue-neon"
              >
                {titles[titleIndex]}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-neutral-400 text-base sm:text-lg max-w-xl mb-8 leading-relaxed"
          >
            Building scalable software pipelines, cloud-powered applications, and agentic AI solutions. Specialized in FastAPI, AWS development, and LLM orchestration.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 items-center mb-10 w-full"
          >
            <a
              href="/resume/Geethanjali_Resume.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-blue-500 shadow-lg shadow-blue-500/25 transition-all cursor-pointer border border-blue-500/20"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
            
            <button
              onClick={() => handleScrollTo('projects')}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 text-neutral-300 font-bold text-xs uppercase tracking-wider border border-white/10 hover:bg-white/10 hover:text-white transition-all cursor-pointer"
            >
              <Compass className="w-4 h-4" />
              <span>View Projects</span>
            </button>
            
            <button
              onClick={() => handleScrollTo('contact')}
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-neutral-400 hover:text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer hover:bg-white/5 rounded-xl"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
            </button>
          </motion.div>

          {/* Featured Achievements Trust Banner */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full border-t border-white/5 pt-6 flex flex-col sm:flex-row gap-6 text-xs text-neutral-400"
          >
            <div className="flex items-center gap-2.5">
              <span className="text-lg">🏆</span>
              <div>
                <p className="font-bold text-neutral-200">Top 1% Global</p>
                <p className="text-[10px] text-neutral-500">Google Solution Challenge</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="text-lg">🥇</span>
              <div>
                <p className="font-bold text-neutral-200">First Prize Winner</p>
                <p className="text-[10px] text-neutral-500">Blockathon'24 Hackathon</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="text-lg">☁️</span>
              <div>
                <p className="font-bold text-neutral-200">AWS Developer</p>
                <p className="text-[10px] text-neutral-500">Cloud-Native Architectures</p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Right Side: Recruiter Quick Facts Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 w-full flex justify-center"
        >
          <div className="w-full max-w-sm rounded-2xl glass-card border border-white/10 p-6 bg-neutral-950/40 relative group overflow-hidden">
            
            {/* Hover decorative border neon glow */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full filter blur-2xl group-hover:bg-blue-500/20 transition-all duration-500" />
            
            <h3 className="text-sm font-bold tracking-widest text-blue-300 uppercase mb-4 flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              <span>Recruiter Quick Facts</span>
            </h3>

            {/* Facts Grid */}
            <div className="space-y-4 mb-6">
              
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-xs text-neutral-500 font-medium">CGPA</span>
                <span className="text-xs font-bold text-neutral-200">7.87 / 10.0</span>
              </div>
              
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-xs text-neutral-500 font-medium flex items-center gap-1"><MapPin className="w-3 h-3" /> Location</span>
                <span className="text-xs font-bold text-neutral-200">Chennai, India</span>
              </div>
              
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-xs text-neutral-500 font-medium flex items-center gap-1"><BookOpen className="w-3 h-3" /> Degree</span>
                <span className="text-xs font-bold text-neutral-200">B.E. Computer Science</span>
              </div>
              
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-xs text-neutral-500 font-medium flex items-center gap-1"><Clock className="w-3 h-3" /> Graduation</span>
                <span className="text-xs font-bold text-neutral-200">May 2027</span>
              </div>
              
              <div className="flex flex-col gap-1 border-b border-white/5 pb-2">
                <span className="text-xs text-neutral-500 font-medium flex items-center gap-1"><Award className="w-3 h-3" /> Education Hub</span>
                <span className="text-xs font-bold text-neutral-200">Velammal Engineering College</span>
              </div>
              
              <div className="flex flex-col gap-2 pt-1">
                <span className="text-xs text-neutral-500 font-medium flex items-center gap-1"><Zap className="w-3 h-3" /> Open To</span>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-[10px] text-blue-300 font-bold">INTERNSHIPS</span>
                  <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-[10px] text-cyan-300 font-bold">SDE ROLES</span>
                  <span className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-[10px] text-blue-300 font-bold">CLOUD ROLES</span>
                </div>
              </div>

            </div>

            {/* Ctrl + K Shortcut tip */}
            <div className="p-3 rounded-xl bg-neutral-900 border border-white/5 text-center flex items-center justify-center gap-2">
              <span className="text-[10px] text-neutral-500">Press</span>
              <kbd className="px-1.5 py-0.5 text-[9px] bg-neutral-950 border border-white/10 rounded text-neutral-400 font-mono shadow">Ctrl</kbd>
              <span className="text-[10px] text-neutral-500">+</span>
              <kbd className="px-1.5 py-0.5 text-[9px] bg-neutral-950 border border-white/10 rounded text-neutral-400 font-mono shadow">K</kbd>
              <span className="text-[10px] text-neutral-500">to navigate instantly</span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
