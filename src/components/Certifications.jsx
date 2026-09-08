import React from 'react';
import { ExternalLink, ShieldCheck } from 'lucide-react';
import { profileData } from '../data/profileData';

export function Certifications() {
  // Hide the whole section until real certifications are added to profileData.js
  if (!profileData.certifications || profileData.certifications.length === 0) {
    return null;
  }

  return (
    <section id="certifications" className="py-14 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Section watermark header */}
        <div className="flex items-end mb-6">
          <span className="section-watermark">Certs</span>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {profileData.certifications.map((cert, idx) => (
            <div
              key={idx}
              className="bento-card rounded-xl p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-neutral-400 bg-white/5 px-2.5 py-1 rounded border border-white/10">
                    {cert.issueDate}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mt-4">
                  {cert.title}
                </h3>

                <p className="text-xs text-neutral-500 font-mono mt-1">
                  Issued by <span className="text-neutral-300">{cert.issuer}</span>
                </p>

                <p className="text-neutral-400 text-xs leading-relaxed mt-3">
                  {cert.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] text-neutral-500 font-mono">
                  ID: {cert.credentialId}
                </span>

                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs font-mono text-neutral-300 hover:text-white transition-colors"
                >
                  Verify <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
