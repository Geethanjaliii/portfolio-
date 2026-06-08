"use client";

import React from 'react';

export default function Skills() {
  const primary = ['Java', 'Python', 'SQL'];
  const working = ['Node.js', 'MongoDB', 'Firebase'];
  const learning = ['AWS', 'System Design', 'Advanced Cloud Concepts'];

  return (
    <section id="skills" className="py-16 border-t border-white/5 bg-neutral-950/6">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <h3 className="text-sm font-bold tracking-widest text-blue-300 uppercase">Skills</h3>
          <h2 className="text-2xl font-extrabold text-neutral-100">Technical Proficiency</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl glass-card border border-white/5 bg-neutral-950/30">
            <h4 className="text-sm font-semibold text-neutral-200 mb-2">Primary Technologies</h4>
            <div className="flex flex-col gap-2">
              {primary.map(p => <span key={p} className="text-sm text-neutral-300">{p}</span>)}
            </div>
          </div>

          <div className="p-4 rounded-2xl glass-card border border-white/5 bg-neutral-950/30">
            <h4 className="text-sm font-semibold text-neutral-200 mb-2">Working Knowledge</h4>
            <div className="flex flex-col gap-2">
              {working.map(p => <span key={p} className="text-sm text-neutral-300">{p}</span>)}
            </div>
          </div>

          <div className="p-4 rounded-2xl glass-card border border-white/5 bg-neutral-950/30">
            <h4 className="text-sm font-semibold text-neutral-200 mb-2">Currently Learning</h4>
            <div className="flex flex-col gap-2">
              {learning.map(p => <span key={p} className="text-sm text-neutral-300">{p}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
