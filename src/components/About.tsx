'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, BookOpen, Trophy, Users, GraduationCap, ArrowRight } from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  icon: React.ReactNode;
}

export default function About() {
  const [activeEventIndex, setActiveEventIndex] = useState(0);

  const timelineEvents: TimelineEvent[] = [
    {
      year: '2023',
      title: 'Joined Velammal Engineering College',
      subtitle: 'B.E. Computer Science & Engineering',
      description: 'Began Bachelor of Engineering degree in Chennai. Focused on core computer science subjects and foundational algorithms.',
      details: [
        'CGPA: 7.87/10.0',
        'Relevant Courses: Data Structures & Algorithms, Database Management Systems (DBMS), Operating Systems',
        'Active member of technical student clubs and coding groups'
      ],
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      year: '2024',
      title: 'Winner — Blockathon\'24',
      subtitle: 'First Prize Hackathon Winner',
      description: 'Won First Prize in Blockathon\'24 organized by the Blockchain Club at Velammal Engineering College. Designed and prototyped a decentralized app solution.',
      details: [
        'First place out of multiple competing college teams',
        'Implemented blockchain principles and smart contracts flow',
        'Pitched technical architecture directly to industry judges'
      ],
      icon: <Trophy className="w-5 h-5" />
    },
    {
      year: '2025',
      title: 'Google Challenge & Ozmenta\'25 Coordinator',
      subtitle: 'Top 1% Global & Event Coordination',
      description: 'Shortlisted among the top 105 global teams (out of 10,000+ entries) in the Google GDG On Campus Solution Challenge. Also selected as Student Coordinator for Ozmenta\'25.',
      details: [
        'GDG Solution Challenge: Developed full-stack cloud and AI pipeline to address UN Sustainable Goals',
        'Ozmenta\'25 Coordinator: Handled registrations and technical execution for 200+ participants',
        'Managed volunteer groups and coordinated technical workshops'
      ],
      icon: <AwardIcon className="w-5 h-5" /> // Custom Award Icon or SVG
    },
    {
      year: '2026',
      title: 'Ozmenta\'26 Coordinator & Final Year',
      subtitle: 'Operational Management & Advanced Projects',
      description: 'Elected Student Coordinator for Ozmenta\'26 (Non-Technical Symposium). Began engineering final-year thesis projects incorporating Agentic AI and Cloud workflows.',
      details: [
        'Led operations, volunteer coordination, and participant engagement activities',
        'Designed RAG pipelines (Research Paper Agent) and document intelligence systems (DocuMind AI)',
        'Secured HackerRank Software Engineer Intern & Infosys AI Primer certifications'
      ],
      icon: <Users className="w-5 h-5" />
    }
  ];

  return (
    <section id="about" className="py-16 relative overflow-hidden border-t border-white/5 bg-neutral-950/20">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-sm font-bold tracking-widest text-blue-300 uppercase mb-2">About Me</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-gradient-blue">Academic & Creative Journey</h3>
          <p className="text-neutral-400 text-sm sm:text-base mt-4 leading-relaxed">
            I am a final-year Computer Science Engineering student passionate about backend architectures, cloud systems, and generative AI agents. I combine academic theory with project building to solve real-world problems.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Summary & Details */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-2xl glass-card border border-white/5 bg-neutral-950/40 relative">
              <h4 className="text-neutral-200 font-bold text-lg mb-3">Professional Bio</h4>
              <p className="text-sm text-neutral-400 leading-relaxed">
                As an aspiring product engineer, I focus on system efficiency and developer workflows. My background includes building full-stack applications, optimizing databases, and deploying microservices on AWS and Google Cloud. I thrive in competitive environments and leadership coordination roles.
              </p>
            </div>
            
            <div className="p-5 rounded-2xl glass-card border border-white/5 bg-neutral-950/40 relative">
              <h4 className="text-neutral-200 font-bold text-lg mb-4">Core Strengths</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span className="text-xs font-semibold text-neutral-300">Backend APIs</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span className="text-xs font-semibold text-neutral-300">Agentic AI (RAG)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span className="text-xs font-semibold text-neutral-300">Cloud Architectures</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span className="text-xs font-semibold text-neutral-300">System Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span className="text-xs font-semibold text-neutral-300">Team Management</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span className="text-xs font-semibold text-neutral-300">Event Execution</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Interactive Timeline */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Timeline selector tabs */}
            <div className="flex justify-between items-center gap-2 p-1 rounded-xl bg-neutral-900 border border-white/5 overflow-x-auto">
              {timelineEvents.map((event, index) => (
                <button
                  key={event.year}
                  onClick={() => setActiveEventIndex(index)}
                  className={`flex-1 min-w-[70px] text-center py-2 rounded-lg text-xs font-bold transition-all uppercase cursor-pointer ${
                    activeEventIndex === index
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                      : 'text-neutral-500 hover:text-neutral-300 hover:bg-white/5'
                  }`}
                >
                  {event.year}
                </button>
              ))}
            </div>

            {/* Active Event Card */}
            <div className="min-h-[280px]">
              <motion.div
                key={activeEventIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="p-5 rounded-2xl glass-card border border-blue-500/10 bg-neutral-950/60 relative overflow-hidden"
              >
                {/* Background watermarked year */}
                <div className="absolute right-[-20px] bottom-[-20px] font-black text-9xl text-white/[0.02] tracking-tighter select-none pointer-events-none">
                  {timelineEvents[activeEventIndex].year}
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-300">
                    {timelineEvents[activeEventIndex].icon}
                  </div>
                  <div>
                    <h4 className="text-neutral-100 font-bold text-lg leading-tight">
                      {timelineEvents[activeEventIndex].title}
                    </h4>
                    <p className="text-xs text-blue-300 font-semibold mt-0.5">
                      {timelineEvents[activeEventIndex].subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-neutral-400 mb-6 leading-relaxed">
                  {timelineEvents[activeEventIndex].description}
                </p>

                <div className="space-y-2.5 border-t border-white/5 pt-4">
                  {timelineEvents[activeEventIndex].details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-400">
                      <ArrowRight className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

              </motion.div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

// Simple Helper Icon component
function AwardIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  );
}
