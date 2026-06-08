'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Compass, Download, ExternalLink, Code, User, Trophy, Briefcase, Mail, FileText, Sparkles } from 'lucide-react';

interface CommandItem {
  id: string;
  name: string;
  category: string;
  icon: React.ReactNode;
  action: () => void;
  shortcut?: string;
}

export default function CommandPalette({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, setIsOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      setIsOpen(false);
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const commands: CommandItem[] = [
    { id: 'home', name: 'Go to Home', category: 'Navigation', icon: <Compass className="w-4 h-4" />, action: () => scrollToSection('home'), shortcut: 'H' },
    { id: 'about', name: 'Go to About Me', category: 'Navigation', icon: <User className="w-4 h-4" />, action: () => scrollToSection('about'), shortcut: 'A' },
    { id: 'achievements', name: 'Go to Achievements', category: 'Navigation', icon: <Trophy className="w-4 h-4" />, action: () => scrollToSection('achievements'), shortcut: 'T' },
    { id: 'projects', name: 'Go to Projects', category: 'Navigation', icon: <Sparkles className="w-4 h-4" />, action: () => scrollToSection('projects'), shortcut: 'P' },
    { id: 'experience', name: 'Go to Experience', category: 'Navigation', icon: <Briefcase className="w-4 h-4" />, action: () => scrollToSection('experience'), shortcut: 'E' },
    { id: 'skills', name: 'Go to Technical Skills', category: 'Navigation', icon: <Code className="w-4 h-4" />, action: () => scrollToSection('skills'), shortcut: 'S' },
    { id: 'coding-profiles', name: 'Go to Coding Profiles', category: 'Navigation', icon: <FileText className="w-4 h-4" />, action: () => scrollToSection('coding-profiles'), shortcut: 'C' },
    { id: 'resume', name: 'Go to Resume Section', category: 'Navigation', icon: <FileText className="w-4 h-4" />, action: () => scrollToSection('resume'), shortcut: 'R' },
    { id: 'contact', name: 'Go to Contact Me', category: 'Navigation', icon: <Mail className="w-4 h-4" />, action: () => scrollToSection('contact'), shortcut: 'M' },
    
    { id: 'download-resume', name: 'Download Resume (PDF)', category: 'Actions', icon: <Download className="w-4 h-4 text-blue-300" />, action: () => { window.open('/resume/Geethanjali_Resume.pdf', '_blank'); setIsOpen(false); } },
    { id: 'github', name: 'View GitHub Profile', category: 'Socials', icon: <ExternalLink className="w-4 h-4" />, action: () => { window.open('https://github.com/Geethanjaliii', '_blank'); setIsOpen(false); } },
    { id: 'linkedin', name: 'View LinkedIn Profile', category: 'Socials', icon: <ExternalLink className="w-4 h-4" />, action: () => { window.open('https://www.linkedin.com/in/geethanjali-v-n-852657306/', '_blank'); setIsOpen(false); } },
    { id: 'leetcode', name: 'View LeetCode Profile', category: 'Socials', icon: <ExternalLink className="w-4 h-4" />, action: () => { window.open('https://leetcode.com/u/geetz_23/', '_blank'); setIsOpen(false); } },
    { id: 'hackerrank', name: 'View HackerRank Profile', category: 'Socials', icon: <ExternalLink className="w-4 h-4" />, action: () => { window.open('https://www.hackerrank.com/profile/geethanjaligeet6', '_blank'); setIsOpen(false); } },
    { id: 'email', name: 'Email Me', category: 'Socials', icon: <ExternalLink className="w-4 h-4" />, action: () => { window.open('mailto:geethanjalivn06@gmail.com', '_blank'); setIsOpen(false); } }
  ];

  const filteredCommands = commands.filter(cmd =>
    cmd.name.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % filteredCommands.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + filteredCommands.length) % filteredCommands.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredCommands[selectedIndex]) {
        filteredCommands[selectedIndex].action();
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-start justify-center pt-[15vh]">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-[#000]/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            ref={containerRef}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl glass-card border border-blue-500/20 bg-neutral-950/90 shadow-2xl shadow-blue-500/10"
          >
            {/* Input Wrapper */}
            <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
              <Search className="w-5 h-5 text-neutral-400" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Type a command or search..."
                value={query}
                onChange={e => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleKeyDown}
                className="w-full bg-transparent text-neutral-200 outline-none placeholder:text-neutral-500 text-base py-1"
              />
              <span className="text-xs bg-neutral-800 text-neutral-400 px-2 py-1 rounded border border-white/5">ESC</span>
            </div>

            {/* List Wrapper */}
            <div className="max-h-[350px] overflow-y-auto p-2 scrollbar-thin">
              {filteredCommands.length > 0 ? (
                Object.entries(
                  filteredCommands.reduce((groups, item) => {
                    if (!groups[item.category]) groups[item.category] = [];
                    groups[item.category].push(item);
                    return groups;
                  }, {} as Record<string, typeof filteredCommands>)
                ).map(([category, items]) => (
                  <div key={category} className="mb-2">
                    <h3 className="text-[11px] font-semibold tracking-wider text-blue-300/70 uppercase px-3 py-1.5">{category}</h3>
                    {items.map((cmd) => {
                      const absoluteIndex = filteredCommands.indexOf(cmd);
                      const isSelected = absoluteIndex === selectedIndex;
                      return (
                        <div
                          key={cmd.id}
                          onClick={() => cmd.action()}
                          onMouseEnter={() => setSelectedIndex(absoluteIndex)}
                          className={`flex items-center justify-between px-3 py-2.5 rounded-lg cursor-pointer transition-colors ${
                            isSelected
                              ? 'bg-blue-600/20 border border-blue-500/30 text-white'
                              : 'border border-transparent text-neutral-400 hover:text-white'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className={isSelected ? 'text-blue-300' : 'text-neutral-500'}>{cmd.icon}</span>
                            <span className="text-sm font-medium">{cmd.name}</span>
                          </div>
                          {cmd.shortcut && (
                            <span className="text-xs bg-neutral-900 border border-white/5 text-neutral-500 px-1.5 py-0.5 rounded">
                              {cmd.shortcut}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))
              ) : (
                <div className="p-8 text-center text-neutral-500 text-sm">
                  No commands matching <span className="text-blue-300 font-semibold">"{query}"</span> found.
                </div>
              )}
            </div>
            
            {/* Footer hints */}
            <div className="flex items-center justify-between border-t border-white/5 px-4 py-2 bg-neutral-950 text-[11px] text-neutral-500">
              <div className="flex items-center gap-1.5">
                <span>↑↓ to navigate</span>
                <span className="w-1 h-1 rounded-full bg-neutral-700"></span>
                <span>Enter to select</span>
              </div>
              <div>
                <span>Geethanjali Portfolio OS</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
