"use client";

import React from 'react';
import { Check } from 'lucide-react';

export default function Projects() {
  const featured = [
    {
      title: 'Research Paper Agent',
      summary: 'Architected a multi-step LangGraph agentic pipeline that autonomously retrieves, ranks, and synthesizes academic papers from arXiv and Semantic Scholar, cutting manual literature review time by ~70%.',
      problem: 'Manual literature reviews are slow and error-prone when surveying large research areas.',
      features: [
        'RAG pipeline with ChromaDB vector store and sentence-transformer embeddings',
        'Autonomous retrieval, ranking and synthesis of 20+ papers per query',
        'Grounded answers with cited sources to avoid hallucinations',
        'FastAPI REST API for async agent queries and concurrent sessions'
      ],
      tech: ['LangGraph', 'Gemini', 'ChromaDB', 'FastAPI', 'Sentence Transformers'],
      impact: ['70% reduction in literature review time', 'Structured outputs (summaries, outlines) in <60s'],
      repo: '#',
      demo: '#'
    },
    {
      title: 'DocuMind AI',
      summary: 'AI document intelligence platform converting unstructured PDFs/images into validated JSON records with high extraction accuracy and audit trails.',
      problem: 'Manual extraction from heterogeneous documents (invoices, receipts, scanned PDFs) is slow and error-prone.',
      features: [
        'Gemini multimodal LLM + Tesseract OCR for multimodal extraction',
        'Confidence-score-based human-review routing to reduce manual verification',
        'Persisted raw docs and structured results with audit trail and reprocessing',
        'REST APIs via FastAPI for ingestion and retrieval'
      ],
      tech: ['FastAPI', 'Gemini', 'Tesseract OCR', 'PostgreSQL', 'AWS S3'],
      impact: ['90%+ extraction accuracy', '60% reduction in manual verification workload'],
      repo: '#',
      demo: '#'
    },
    {
      title: 'URL Shortener',
      summary: 'High-throughput URL shortening service with analytics and caching for low-latency redirects.',
      problem: 'Need for fast, reliable URL short links with analytics and custom aliases.',
      features: [
        'Custom alias support and expiry management',
        'Analytics tracking with per-URL click metrics and geo data',
        'Redis TTL-based caching layer to speed hot lookups',
        'Containerized via Docker for portable deployment'
      ],
      tech: ['FastAPI', 'Redis', 'MySQL', 'Docker'],
      impact: ['Handles 10k+ daily redirects', '40% reduction in p99 lookup latency via caching'],
      repo: '#',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="py-16 bg-neutral-950/10 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-sm font-bold tracking-widest text-blue-300 uppercase mb-2">Projects</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-gradient-blue">Featured Projects</h3>
          <p className="text-neutral-400 text-sm mt-3">Selected projects with concise metrics and outcomes.</p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-4">
          {featured.map((p) => (
            <div key={p.title} className="p-5 rounded-2xl glass-card border border-white/5 bg-neutral-950/40">
              <h4 className="text-lg font-bold text-neutral-100 mb-2 tracking-tight">{p.title}</h4>
              <p className="text-sm text-neutral-400 mb-3 leading-relaxed">{p.summary}</p>

              {p.problem && (
                <div className="mb-3">
                  <div className="text-xs text-blue-200 font-medium">Problem</div>
                  <div className="text-sm muted">{p.problem}</div>
                </div>
              )}

              {p.features && (
                <div className="mb-3">
                  <div className="text-xs text-blue-200 font-medium">Key Features</div>
                  <div className="mt-2 space-y-1.5">
                    {p.features.map((f) => (
                      <div key={f} className="flex items-start gap-2 text-sm text-neutral-300">
                        <span className="text-blue-300"><Check className="w-4 h-4" /></span>
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {p.tech && (
                <div className="mb-3">
                  <div className="text-xs text-blue-200 font-medium">Tech Stack</div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {p.tech.map(t => (
                      <span key={t} className="text-[12px] px-2 py-1 rounded-full bg-neutral-900/30 text-neutral-200 border border-white/5">{t}</span>
                    ))}
                  </div>
                </div>
              )}

              {p.impact && (
                <div className="mb-3">
                  <div className="text-xs text-blue-200 font-medium">Impact</div>
                  <ul className="list-disc ml-5 text-sm muted mt-2 space-y-1">
                    {p.impact.map(i => <li key={i}>{i}</li>)}
                  </ul>
                </div>
              )}

              <div className="mt-4 flex items-center gap-3">
                <a href={p.repo || '#'} target="_blank" rel="noreferrer" className="px-3 py-2 rounded-lg btn-secondary text-xs">Repository</a>
                <a href={p.demo || '#'} target="_blank" rel="noreferrer" className="px-3 py-2 rounded-lg btn-primary text-xs">Live Demo</a>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects intentionally removed per user request */}
      </div>
    </section>
  );
}
