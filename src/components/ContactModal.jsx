import React from 'react';
import { X, Mail, ExternalLink, PhoneCall } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './BrandIcons';
import { profileData } from '../data/profileData';
import { getGmailComposeUrl } from '../utils/mail';

// Minimal "here's how to reach me" panel — mirrors the reference site's
// social-pill approach instead of a long contact form.
export function ContactModal({ isOpen, onClose }) {
  const calLink = profileData.personal.calLink;

  if (!isOpen) return null;

  const socials = [
    { label: 'GitHub', href: profileData.socialLinks.github, Icon: GithubIcon },
    { label: 'Twitter', href: profileData.socialLinks.twitter, Icon: TwitterIcon },
    { label: 'LinkedIn', href: profileData.socialLinks.linkedin, Icon: LinkedinIcon },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="bg-neutral-950 border border-neutral-800 rounded-3xl max-w-sm w-full p-6 sm:p-7 relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Avatar + heading, same tone as the footer's "let's chat" closer */}
        <div className="flex flex-col items-center text-center pt-2">
          <img
            src={profileData.personal.avatar}
            alt={profileData.personal.name}
            className="w-14 h-14 rounded-2xl object-cover bg-neutral-800 border-2 border-neutral-900 shadow-lg"
          />
          <h3 className="mt-4 text-lg font-bold text-white tracking-tight">
            Heyy, let's connect
          </h3>
          <p className="text-xs text-neutral-500 font-mono mt-1 max-w-xs">
            {profileData.personal.statusDetail || 'Open to new opportunities'}
          </p>
        </div>

        {/* Direct email — opens Gmail compose with this address pre-filled */}
        <a
          href={getGmailComposeUrl(profileData.personal.email)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 w-full flex items-center justify-between gap-3 px-4 py-3 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 transition-colors text-left"
        >
          <span className="flex items-center gap-2.5 min-w-0">
            <Mail className="w-4 h-4 text-neutral-400 shrink-0" />
            <span className="text-sm text-white font-mono truncate">
              {profileData.personal.email}
            </span>
          </span>
          <ExternalLink className="w-4 h-4 text-neutral-500 shrink-0" />
        </a>

        {/* Social pills — same btn-shell/btn-surface treatment as the hero */}
        <div className="mt-3 flex flex-wrap gap-2 justify-center">
          {socials.map(({ label, href, Icon }) => (
            <div key={label} className="btn-shell">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-surface"
              >
                <Icon className="w-4 h-4 opacity-80" />
                <span>{label}</span>
              </a>
            </div>
          ))}
        </div>

        {/* Book a call — same white pill as the footer CTA */}
        <a
          href={calLink || undefined}
          target="_blank"
          rel="noopener noreferrer"
          aria-disabled={!calLink}
          className={`mt-5 w-full flex items-center justify-center gap-2 py-3 rounded-full bg-white text-neutral-950 font-sans font-semibold text-sm shadow-md transition-all ${
            calLink ? 'hover:bg-neutral-200 cursor-pointer' : 'opacity-50 pointer-events-none'
          }`}
        >
          <PhoneCall className="w-3.5 h-3.5" />
          Book a Free Call
        </a>
      </div>
    </div>
  );
}
