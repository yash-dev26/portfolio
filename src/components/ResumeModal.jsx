import React from 'react';
import { X, FileText, Download } from 'lucide-react';
import { profileData } from '../data/profileData';

// Compact PDF viewer — embeds the actual resume file in a small window
// instead of a paraphrased summary, with a Download button in the header.
export function ResumeModal({ isOpen, onClose, showToast }) {
  if (!isOpen) return null;

  const resumeUrl = profileData.personal.resumeUrl;

  const handleDownload = () => {
    showToast('Resume download started!');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="bg-neutral-950 border border-neutral-800 rounded-2xl w-full max-w-md h-[75vh] max-h-[640px] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-3 p-3.5 border-b border-neutral-800 shrink-0">
          <div className="flex items-center gap-2 min-w-0">
            <div className="p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 shrink-0">
              <FileText className="w-3.5 h-3.5" />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold text-white truncate">
                {profileData.personal.name} — Resume
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <a
              href={resumeUrl}
              download
              onClick={handleDownload}
              title="Download PDF"
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white text-neutral-950 font-bold text-[11px] shadow hover:bg-neutral-200 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* PDF viewer */}
        <div className="flex-1 bg-neutral-900 min-h-0">
          <iframe
            src={resumeUrl}
            title="Resume PDF"
            className="w-full h-full border-0"
          />
        </div>
      </div>
    </div>
  );
}
