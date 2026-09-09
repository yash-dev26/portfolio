import React from 'react';
import { Terminal, MapPin, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './BrandIcons';
import { profileData } from '../data/profileData';
import { getGmailComposeUrl } from '../utils/mail';
import { getTechIconUrl } from '../utils/badges';

export function TechStack({ onOpenContact }) {
  return (
    <section id="tech-stack" className="py-14 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        {/* Section watermark heading – heyyswap.in style */}
        <div className="flex items-end mb-6 gap-3">
          <span className="section-watermark">About</span>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">

          {/* Card 1: About Me (2/3 width) */}
          <div className="bento-card rounded-xl p-6 md:col-span-2 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3.5">
                <img
                  src={profileData.personal.avatar}
                  alt={profileData.personal.name}
                  className="w-14 h-14 rounded-xl object-cover bg-neutral-900 border border-neutral-800"
                />
                <div>
                  <h2 className="text-lg font-bold text-white tracking-tight">About me.</h2>
                  <p className="text-xs font-mono text-neutral-500 mt-0.5 tracking-tight">
                    {profileData.personal.role}
                  </p>
                </div>
              </div>

              <div className="text-neutral-400 text-sm leading-relaxed tracking-tight space-y-3">
                <p>
                  I build production-oriented{' '}
                  <span className="font-mono font-medium text-neutral-200">backend systems</span>{' '}
                  and{' '}
                  <span className="font-mono font-medium text-neutral-200">Applied AI applications</span>{' '}
                  using Python, Node.js, LangChain/LangGraph, and Qdrant — rather than just functional prototypes.
                </p>
                <ul className="space-y-1.5 text-xs text-neutral-500">
                  {profileData.personal.extendedBio.slice(1).map((line, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-neutral-600 mt-1.5 shrink-0" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-neutral-900 flex items-center justify-end gap-2">
              <div className="btn-shell">
                <button onClick={onOpenContact} className="btn-surface">
                  <span>Let's Connect</span>
                  <Send className="w-3 h-3 opacity-70" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Skills & Stack (1/3 width, 2 rows tall) */}
          <div className="bento-card rounded-xl p-5 md:col-span-1 md:row-span-2 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="w-3.5 h-3.5 text-neutral-500" />
              <h3 className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-500">
                Skills & Stack
              </h3>
            </div>

            <div className="space-y-4 flex-1">
              {/*
              {[
                { label: 'Languages', items: ['Python', 'TypeScript', 'JavaScript'] },
                { label: 'Backend', items: ['Node.js', 'Express', 'Fastify', 'FastAPI'] },
                { label: 'Applied AI', items: ['LangChain', 'LangGraph', 'Qdrant', 'OpenAI API', 'LangSmith', 'Ragas Eval'] },
                { label: 'Frontend', items: ['React', 'TailwindCSS'] },
                { label: 'Databases & Infra', items: ['MongoDB', 'Redis', 'Docker', 'PostgreSQL'] },
                { label: 'DevOps & Tooling', items: ['GitHub Actions'] },
              ].map(({ label, items }) => (
                <div key={label}>
                  <div className="text-[9px] font-bold uppercase tracking-widest text-neutral-600 font-mono mb-1.5">
                    {label}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((s) => (
                      <span
                        key={s}
                        className="text-[11px] font-mono bg-white/4 border border-neutral-800 px-2 py-0.5 rounded-md text-neutral-400"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              */}

              {[
                { label: 'Languages', items: ['Python', 'TypeScript', 'JavaScript'] },
                { label: 'Backend', items: ['Node.js', 'Express', 'Fastify', 'FastAPI'] },
                { label: 'Applied AI', items: ['LangChain', 'LangGraph', 'Qdrant', 'OpenAI API', 'LangSmith', 'Ragas Eval'] },
                { label: 'Frontend', items: ['React', 'TailwindCSS'] },
                { label: 'Databases & Infra', items: ['MongoDB', 'Redis', 'Docker', 'PostgreSQL'] },
                { label: 'DevOps & Tooling', items: ['GitHub Actions'] },
              ].map(({ label, items }) => (
                <div key={label}>
                  <div className="text-[9px] font-bold uppercase tracking-widest text-neutral-600 font-mono mb-1.5">
                    {label}
                  </div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    {items.map((s) => {
                      const iconUrl = getTechIconUrl(s);
                      return (
                        <span key={s} title={s} className="inline-flex items-center gap-1.5 text-[11px] font-mono text-neutral-500">
                          {iconUrl ? (
                            <img
                              src={iconUrl}
                              alt=""
                              className={`w-4 h-4 object-contain ${iconUrl.startsWith('/assets/') ? 'local-tech-icon brightness-0 invert opacity-60' : 'opacity-70'}`}
                            />
                          ) : (
                            <span className="w-4 h-4 flex items-center justify-center text-[8px] font-bold text-neutral-500 border border-neutral-700 rounded-sm">
                              {s.slice(0, 2).toUpperCase()}
                            </span>
                          )}
                          <span>{s}</span>
                        </span>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-3 mt-3 border-t border-neutral-900 text-[10px] text-neutral-600 font-mono tracking-tight">
              Applied AI & backend engineering stack
            </div>
          </div>

          {/* Card 3: Location */}
          <div className="bento-card rounded-xl p-5 md:col-span-1 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-bold font-mono text-neutral-500 uppercase tracking-widest">Location</span>
              <MapPin className="w-3.5 h-3.5 text-neutral-600" />
            </div>
            <div>
              <div className="text-base font-bold text-white tracking-tight">{profileData.personal.location}</div>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-mono mt-3">
              <span>Open to internships & collabs</span>
            </div>
          </div>

          {/* Card 4: Social Grid */}
          <div className="bento-card rounded-xl p-5 md:col-span-1 flex flex-col">
            <div className="text-[10px] font-bold font-mono text-neutral-500 uppercase tracking-widest mb-3">
              Find me online
            </div>
            <div className="grid grid-cols-2 gap-2 flex-1">
              {[
                { href: profileData.socialLinks.github, icon: <GithubIcon className="w-3.5 h-3.5" />, label: 'GitHub' },
                { href: profileData.socialLinks.linkedin, icon: <LinkedinIcon className="w-3.5 h-3.5" />, label: 'LinkedIn' },
                { href: profileData.socialLinks.twitter, icon: <TwitterIcon className="w-3.5 h-3.5" />, label: 'Twitter' },
                { href: getGmailComposeUrl(profileData.socialLinks.email), icon: <Send className="w-3.5 h-3.5" />, label: 'Email' },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 p-2.5 rounded-lg bg-white/3 border border-neutral-800 text-neutral-500 hover:text-neutral-200 hover:bg-neutral-800 text-xs font-mono tracking-tight transition-all"
                >
                  {icon}
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
