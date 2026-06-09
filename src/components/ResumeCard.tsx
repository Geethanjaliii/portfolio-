"use client";

import React, { useEffect, useState } from 'react';
import { Download, Eye } from 'lucide-react';

export default function ResumeCard() {
  const [meta, setMeta] = useState<{ sizeKB: number | null; lastUpdated: string | null; fileName: string | null } | null>(null);

  useEffect(() => {
    let mounted = true;
    fetch('/api/resume-metadata')
      .then(res => res.json())
      .then((data) => {
        if (!mounted) return;
        setMeta({ sizeKB: data.sizeKB ?? null, lastUpdated: data.lastUpdated ?? null, fileName: data.fileName ?? 'Resume.pdf' });
      })
      .catch(() => {
        if (!mounted) return;
        setMeta({ sizeKB: null, lastUpdated: null, fileName: 'Resume.pdf' });
      });
    return () => { mounted = false; };
  }, []);
  
  <div>
    const displaySize = meta?.sizeKB ? `${meta.sizeKB} KB` : '—';
    const fileName = meta?.fileName ?? 'Resume.pdf';
</div>

  return (
    <div className="mt-4 w-full max-w-md rounded-2xl glass-card border border-white/5 bg-neutral-950/30 p-4">
      <div className="flex items-center justify-between">
        <div>
          <div>
         <div className="text-sm font-semibold text-neutral-200">{fileName}</div>
         <div className="text-xs text-neutral-400">Latest Resume</div>
</div>
        </div>

        <div className="flex gap-2">
          <a
            href="/resume/Geethanjali_Resume.pdf"
            download
            className="px-3 py-2 rounded-md bg-blue-600 text-white text-xs font-bold flex items-center gap-2 border border-blue-500/20"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download</span>
          </a>

          <a
            href="/resume/Geethanjali_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-3 py-2 rounded-md bg-transparent border border-white/5 text-xs font-medium text-neutral-300 flex items-center gap-2"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>View</span>
          </a>
        </div>
      </div>
    </div>
  );
}
