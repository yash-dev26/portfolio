import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Mail, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './BrandIcons';
import { profileData } from '../data/profileData';
import { getGmailComposeUrl } from '../utils/mail';

// Rotating role/title slideshow — cycles through profileData.personal.roles.
// Falls back to the single static `role` string if no roles array is provided.
function RoleRotator({ roles, className, interval = 2200 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!roles || roles.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % roles.length);
    }, interval);
    return () => clearInterval(id);
  }, [roles, interval]);

  if (!roles || roles.length === 0) return null;

  return (
    <span className="relative inline-flex h-[1.4em] overflow-hidden align-middle">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
          className={`inline-block whitespace-nowrap ${className || ''}`}
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function HeroBanner({ onOpenResume }) {

  return (
    <section id="hero" className="pt-24 pb-6">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        {/* ── Banner Cover ── */}
        <div className="w-full relative">

          {/* Banner header: grid + glow pattern + status badge */}
          <div className="w-full h-[160px] sm:h-[200px] relative overflow-hidden rounded-t-2xl border border-b-0 border-neutral-900 banner-grid bg-neutral-950">

            {/* Status badge – top right */}
            <div className="absolute top-4 right-4 z-10">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-950/90 border border-neutral-800 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-mono text-neutral-300 tracking-tight">
                  {profileData.personal.status}
                </span>
              </div>
            </div>
          </div>

          {/* ── Avatar + Name Row (overlapping banner) ── */}
          <div className="bg-neutral-950 border border-t-0 border-neutral-900 rounded-b-2xl px-5 sm:px-7 pb-7">

            {/* Avatar overlapping banner bottom by ~40px */}
            <div className="flex items-end gap-3 -mt-10 sm:-mt-12">

              {/* Avatar — locked to its own size, never allowed to shrink */}
              <div className="relative inline-block shrink-0 z-10">
                <div className="relative overflow-hidden rounded-2xl border-4 border-neutral-950 shadow-xl">
                  <img
                    src={profileData.personal.avatar}
                    alt={profileData.personal.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 object-cover bg-neutral-800"
                  />
                </div>
                <div
                  className="absolute -bottom-1 -right-1 p-1 rounded-full bg-neutral-900 border border-neutral-700 text-amber-400 shadow"
                  title="Verified Architect"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Name + role (visible on md+, inline with avatar) */}
              <div className="hidden sm:flex flex-1 min-w-0 items-center gap-3 pb-1 pl-3">
                <h1 className="text-2xl font-bold text-white tracking-tight leading-none shrink-0">
                  {profileData.personal.name}
                </h1>
                <div className="w-5 h-px bg-neutral-600 shrink-0" />
                <RoleRotator
                  roles={profileData.personal.roles}
                  className="text-sm text-neutral-400 font-mono tracking-tight"
                />
              </div>
            </div>

            {/* Mobile name + role (below avatar row) */}
            <div className="sm:hidden mt-4">
              <h1 className="text-xl font-bold text-white tracking-tight">
                {profileData.personal.name}
              </h1>
              <p className="mt-0.5">
                <RoleRotator
                  roles={profileData.personal.roles}
                  className="text-sm text-neutral-400 font-mono tracking-tight"
                />
              </p>
            </div>

            {/* ── Bio ── */}
            <p className="mt-5 text-neutral-400 text-sm leading-relaxed tracking-tight max-w-xl">
              Building{' '}
              <span className="font-mono font-medium text-neutral-200">scalable distributed systems</span>
              , LangGraph orchestration, and{' '}
              <span className="font-mono font-medium text-neutral-200">production-ready RAG pipelines</span>
              {' '}with careful attention to real-world constraints.
            </p>

            {/* ── Primary Action — Resume only; Connect now lives in the "Let's Connect" footer CTA ── */}
            <div className="flex items-center gap-2 mt-5">
              <div className="btn-primary-shell">
                <button onClick={onOpenResume} className="btn-primary-surface">
                  <span>Resume</span>
                  <FileText className="w-3.5 h-3.5 opacity-70" />
                </button>
              </div>
            </div>

            {/* ── Social Links ── */}
            <div className="mt-5">
              <p className="text-[10px] font-mono text-neutral-500 mb-2 tracking-tight">
                Here are my <span className="text-[12px] font-medium text-neutral-400">socials</span>
              </p>

              <div className="flex flex-wrap gap-2 items-center">
                {/* GitHub */}
                <div className="btn-shell">
                  <a
                    href={profileData.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-surface"
                  >
                    <GithubIcon className="w-4 h-4 opacity-80" />
                    <span className="hidden sm:inline">GitHub</span>
                  </a>
                </div>

                {/* Twitter */}
                <div className="btn-shell">
                  <a
                    href={profileData.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-surface"
                  >
                    <TwitterIcon className="w-4 h-4 opacity-80" />
                    <span className="hidden sm:inline">Twitter</span>
                  </a>
                </div>

                {/* LinkedIn */}
                <div className="btn-shell">
                  <a
                    href={profileData.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-surface"
                  >
                    <LinkedinIcon className="w-4 h-4 opacity-80" />
                    <span className="hidden sm:inline">LinkedIn</span>
                  </a>
                </div>

                {/* Email — opens Gmail compose with this address pre-filled */}
                <div className="btn-shell">
                  <a
                    href={getGmailComposeUrl(profileData.personal.email)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-surface"
                  >
                    <Mail className="w-4 h-4 opacity-80" />
                    <span className="hidden sm:inline">Email</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
