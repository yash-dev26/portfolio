import React from 'react';
import { profileData } from '../data/profileData';

export function Footer() {
  const calLink = profileData.personal.calLink;

  return (
    <footer className="pt-24 pb-8 text-neutral-500 text-xs font-mono">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        {/* "Heyy, if you made it this far, let's chat." — heyyswap.in style closer.
            "Let's Connect" (the full contact panel) already lives in the About
            section — this closer is just the direct booking CTA. */}
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

        <div className="mt-16 pt-6 border-t border-neutral-900 text-center text-[11px]">
          Design & Developed by {profileData.personal.name} © {new Date().getFullYear()}. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
