"use client";

import React, { useState } from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Projects from '../components/Projects';
import GitHubActivity from '../components/GitHubActivity';
import Experience from '../components/Experience';
import FloatingResume from '../components/FloatingResume';
import CommandPalette from '../components/CommandPalette';
import Skills from '../components/Skills';
import ConnectWithMe from '../components/ConnectWithMe';
import Footer from '../components/Footer';

export default function Home() {
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  return (
    <div className="relative overflow-hidden">
      <Navbar onOpenCommandPalette={() => setIsCommandOpen(true)} />
      <CommandPalette isOpen={isCommandOpen} setIsOpen={setIsCommandOpen} />
      <main className="pt-24 pb-8">
        <Hero />

        <div className="max-w-6xl mx-auto px-6 mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-start">
            <div className="lg:col-span-2">
              <Projects />
            </div>
            <div className="lg:col-span-1">
              <GitHubActivity />
            </div>
          </div>
        </div>

        <About />
        <Experience />
        <Skills />
        <ConnectWithMe />
      </main>
      <FloatingResume />
      <Footer />
    </div>
  );
}
