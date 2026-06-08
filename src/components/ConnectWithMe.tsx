"use client";

import React from 'react';

const platforms = [
  { id: 'github', name: 'GitHub', icon: <span className="text-xl">🐙</span>, desc: 'Explore repositories, projects, and contributions.', href: 'https://github.com/Geethanjaliii' },
  { id: 'linkedin', name: 'LinkedIn', icon: <span className="text-xl">🔗</span>, desc: 'Professional journey, achievements, and networking.', href: 'https://www.linkedin.com/in/geethanjali-v-n-852657306/' },
  { id: 'leetcode', name: 'LeetCode', icon: <span className="text-xl">💻</span>, desc: 'Problem-solving progress and coding practice.', href: 'https://leetcode.com/u/geetz_23/' },
  { id: 'hackerrank', name: 'HackerRank', icon: <span className="text-xl">🛡️</span>, desc: 'Certifications and coding assessments.', href: 'https://www.hackerrank.com/profile/geethanjaligeet6' },
  { id: 'email', name: 'Email', icon: <span className="text-xl">✉️</span>, desc: 'Direct communication channel.', detail: 'geethanjalivn06@gmail.com', href: 'mailto:geethanjalivn06@gmail.com' }
];

export default function ConnectWithMe() {
  return (
    <section id="contact" className="py-16 border-t border-white/6">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <h3 className="text-sm font-bold tracking-widest text-blue-300 uppercase">Connect With Me</h3>
          <h2 className="text-2xl font-extrabold text-gradient-blue">Professional Presence</h2>
          <p className="text-sm muted mt-2">Quick links to my code, profiles, and contact channels.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {platforms.map(p => (
            <a key={p.id} href={p.href} target="_blank" rel="noreferrer" className="p-4 rounded-2xl glass-card flex flex-col items-start gap-3 hover:scale-102 transition-transform">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-700 to-blue-400 flex items-center justify-center text-white shadow-md">{p.icon}</div>
              <div>
                <div className="text-sm font-semibold">{p.name}</div>
                <div className="text-xs muted mt-1">{p.desc}</div>
                {'detail' in p ? <div className="text-[11px] text-blue-200/90 mt-2 break-all">{p.detail}</div> : null}
              </div>
              <div className="mt-auto text-[11px] text-blue-100 font-medium">Open in new tab ↗</div>
            </a>
          ))}
        </div>

        {/* dashboard removed per request */}

      </div>
    </section>
  );
}
