"use client";

import React from 'react';

export default function Footer() {
  const quick = [
    { name: 'GitHub', href: 'https://github.com/Geethanjaliii', icon: <span className="text-base">🐙</span> },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/geethanjali-v-n-852657306/', icon: <span className="text-base">🔗</span> },
    { name: 'LeetCode', href: 'https://leetcode.com/u/geetz_23/', icon: <span className="text-base">💻</span> },
    { name: 'HackerRank', href: 'https://www.hackerrank.com/profile/geethanjaligeet6', icon: <span className="text-base">🛡️</span> },
    { name: 'Email: geethanjalivn06@gmail.com', href: 'mailto:geethanjalivn06@gmail.com', icon: <span className="text-base">✉️</span> }
  ];

  return (
    <footer className="footer mt-12 py-8">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <div>
          <h4 className="text-lg font-bold">Quick Links</h4>
          <div className="flex flex-wrap gap-2 mt-3">
            {quick.map(q => (
              <a key={q.name} href={q.href} target="_blank" rel="noreferrer" className="px-3 py-2 rounded bg-neutral-900/30 glass-card text-sm flex items-center gap-2">{q.icon}<span>{q.name}</span></a>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h4 className="text-lg font-bold">Resume</h4>
          <a href="/resume/Geethanjali_Resume.pdf" download className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded btn-primary">Download Resume</a>
        </div>

        <div className="flex justify-end items-center gap-4">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="px-3 py-2 rounded btn-secondary flex items-center gap-2">
            <span className="text-sm">⬆️</span> Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
