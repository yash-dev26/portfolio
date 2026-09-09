import React from 'react';
import { profileData } from '../data/profileData';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './BrandIcons';

export function Footer() {
  const calLink = profileData.personal.calLink;

  return (
    <footer className="pt-24 pb-8 text-neutral-500 text-xs font-mono">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-sans text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug max-w-md">
            Heyy, if you made it this far, let's chat.
          </h2>

          <a
            href={calLink || undefined}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={!calLink}
            title={calLink ? 'Book a call' : 'Add your Cal.com link in profileData.js'}
            className={`mt-6 flex items-center gap-2.5 pl-1.5 pr-5 py-1.5 rounded-full bg-white text-neutral-950 font-sans font-semibold text-sm transition-all shadow-md ${
              calLink ? 'hover:bg-neutral-200 cursor-pointer' : 'opacity-60 pointer-events-none'
            }`}
          >
            <img
              src={profileData.personal.avatar}
              alt={profileData.personal.name}
              className="w-7 h-7 rounded-full object-cover bg-neutral-800"
            />
            Book a Call
          </a>
        </div>

        <div className="mt-16 pt-6 border-t border-neutral-900 flex items-center justify-between gap-6">
          <span className="text-sm font-sans text-neutral-400">
            Built by {profileData.personal.name}
          </span>

          <nav className="flex items-center gap-5 text-neutral-500" aria-label="Social links">
            <a
              href={profileData.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="hover:text-white transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={profileData.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              title="X / Twitter"
              className="hover:text-white transition-colors"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
            <a
              href={profileData.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="hover:text-white transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </nav>
        </div>

      </div>
    </footer>
  );
}
