'use client';

import React from 'react';
import { ArrowRight, Building2, CalendarDays, MapPin, ExternalLink, Zap } from 'lucide-react';

export default function Experience() {
  const highlights = [
    'Built REST API endpoints to stream live sensor telemetry to a web dashboard.',
    'Enabled real-time occupancy visualization across 20 parking slots.',
    'Diagnosed and resolved I2C/UART communication faults between microcontroller and sensor modules.',
    'Improved data-packet success rate from 70% to 98%.'
  ];

  return (
    <section id="experience" className="py-16 border-t border-white/5 bg-neutral-950/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-sm font-bold tracking-widest text-blue-300 uppercase mb-2">Experience</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-gradient-blue">Internship & Practical Work</h3>
          <p className="text-neutral-400 text-sm mt-3">
            LinkedIn reference: internship details and outcomes highlighted below.
          </p>
        </div>

        <div className="rounded-3xl glass-card border border-blue-500/10 bg-neutral-950/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full filter blur-3xl" />

          <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.9fr] gap-0">
            <div className="p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-white/5">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[11px] font-semibold text-blue-200 mb-3">
                    <ExternalLink className="w-3.5 h-3.5" />
                    LinkedIn Reference
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-neutral-100">TAMIZHAN SKILLS</h4>
                  <p className="text-sm text-blue-300 font-semibold mt-1">IoT & Embedded Systems Intern</p>
                </div>

                <div className="flex flex-col items-start sm:items-end gap-2 text-xs text-neutral-400">
                  <span className="inline-flex items-center gap-1.5"><CalendarDays className="w-3.5 h-3.5" /> June 2025 - July 2025</span>
                  <span className="inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Remote</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3 p-3 rounded-2xl bg-neutral-900/35 border border-white/5">
                    <span className="mt-0.5 text-blue-300"><ArrowRight className="w-4 h-4" /></span>
                    <span className="text-sm text-neutral-300 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 sm:p-8 flex flex-col justify-between gap-5 bg-neutral-950/25">
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-blue-300 uppercase tracking-[0.24em]">Impact Snapshot</h4>
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-neutral-900/35 border border-white/5">
                    <Building2 className="w-4 h-4 text-blue-300 shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-300 leading-relaxed">Hands-on IoT and embedded systems experience, focused on live data pipelines and dashboard integration.</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-neutral-900/35 border border-white/5">
                    <Zap className="w-4 h-4 text-blue-300 shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-300 leading-relaxed">Improved communication reliability and system throughput through debugging and protocol-level fixes.</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-2 border-t border-white/5">
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Based on the internship reference from your LinkedIn profile. I can swap in a direct profile preview later if you want.
                </p>
                <a
                  href="https://www.linkedin.com/in/geethanjali-v-n-852657306/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl btn-primary text-xs font-bold w-full sm:w-fit"
                >
                  View LinkedIn Profile
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}