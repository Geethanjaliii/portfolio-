"use client";

import React, { useEffect, useState } from 'react';

type GHMeta = {
  public_repos: number;
  followers: number;
  totalStars: number;
  languages: string[];
};

export default function GitHubActivity({ username = 'Geethanjaliii' }: { username?: string }) {
  const [meta, setMeta] = useState<GHMeta | null>(null);

  useEffect(() => {
    let mounted = true;
    async function fetchData() {
      try {
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        const user = await userRes.json();
        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
        const repos = await reposRes.json();

        let totalStars = 0;
        const langSet = new Set<string>();
        if (Array.isArray(repos)) {
          repos.forEach((r: any) => {
            totalStars += r.stargazers_count || 0;
            if (r.language) langSet.add(r.language);
          });
        }

        if (!mounted) return;
        setMeta({ public_repos: user.public_repos ?? 0, followers: user.followers ?? 0, totalStars, languages: Array.from(langSet) });
      } catch (e) {
        if (!mounted) return;
        setMeta({ public_repos: 0, followers: 0, totalStars: 0, languages: [] });
      }
    }
    fetchData();
    return () => { mounted = false; };
  }, [username]);

  return (
    <div className="w-full max-w-md rounded-2xl glass-card border border-white/5 bg-neutral-950/30 p-4">
      <h4 className="text-sm font-semibold text-neutral-100 mb-2">GitHub Activity</h4>
      {!meta ? (
        <div className="text-xs text-neutral-400">Loading...</div>
      ) : (
        <div className="text-sm text-neutral-300 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-neutral-400">Contributions</span>
            <span className="font-bold text-neutral-100">See Profile</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-neutral-400">Repositories</span>
            <span className="font-bold text-neutral-100">{meta.public_repos}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-neutral-400">Stars</span>
            <span className="font-bold text-neutral-100">{meta.totalStars}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-neutral-400">Followers</span>
            <span className="font-bold text-neutral-100">{meta.followers}</span>
          </div>
          <div>
            <div className="text-xs text-neutral-400">Languages</div>
            <div className="flex flex-wrap gap-2 mt-2">
              {meta.languages.length === 0 ? (
                <span className="text-xs text-neutral-500">—</span>
              ) : (
                meta.languages.slice(0,6).map(l => (
                  <span key={l} className="text-[11px] px-2 py-0.5 rounded bg-neutral-900 border border-white/5 text-neutral-300">{l}</span>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
