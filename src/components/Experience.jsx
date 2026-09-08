import React from 'react';
import { Briefcase, Building2 } from 'lucide-react';
import { profileData } from '../data/profileData';

export function Experience() {
  return (
    <section id="experience" className="py-14 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        {/* Section watermark header – heyyswap.in style */}
        <div className="flex items-end mb-6">
          <span className="section-watermark">Work</span>
        </div>

        {/* Work Cards – heyyswap.in gradient shell style, 2-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {profileData.experiences.map((exp, idx) => (
            <div key={idx} className="work-card-shell">
              <div className="work-card-inner p-5 flex flex-col h-full">

                {/* Role + period */}
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="text-sm font-bold text-white leading-snug tracking-tight">
                    {exp.role}
                  </h3>
                  <span className="text-[10px] font-mono text-neutral-600 shrink-0 mt-0.5">
                    {exp.period}
                  </span>
                </div>

                {/* Company + location */}
                <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-mono mb-3">
                  <Building2 className="w-3 h-3 text-neutral-600 shrink-0" />
                  <span className="text-neutral-400">{exp.company}</span>
                  <span className="text-neutral-700">•</span>
                  <span className="text-[10px]">{exp.location}</span>
                </div>

                {/* Description */}
                <p className="text-neutral-400 text-xs leading-relaxed mb-3 tracking-tight">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="space-y-1.5 mb-4 flex-1">
                  {exp.achievements.map((a, i) => (
                    <div key={i} className="flex items-start gap-2 text-[11px] text-neutral-500 leading-snug">
                      <span className="text-neutral-700 mt-0.5 shrink-0">•</span>
                      <span>{a}</span>
                    </div>
                  ))}
                </div>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-900">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-500 text-[10px] font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
