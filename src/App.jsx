import React, { useState, useEffect } from 'react';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { TechStack } from './components/TechStack';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { OnekoCat } from './components/OnekoCat';
import { ContactModal } from './components/ContactModal';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-neutral-100 selection:bg-neutral-800 selection:text-white font-sans relative">

      <ScrollProgressBar />

      {/* Global Toast Notification */}
      {toastMessage && (
        <div className="fixed top-16 right-4 z-50">
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-white shadow-2xl backdrop-blur-md text-xs font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Retro Mouse-Tracking Cat Companion (oneko.js) — always on, kept deliberately simple */}
      <OnekoCat enabled={true} />

      {/* Navigation Header */}
      <Header theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content Area */}
      <main>
        {/* Profile & Hero Section (Inspiration: heyyswap.in) */}
        <HeroBanner
          onOpenResume={() => setIsResumeOpen(true)}
          showToast={showToast}
        />

        {/* Tech Stack & Skills Section (Inspiration: luffytaro.me) */}
        <TechStack onOpenContact={() => setIsContactOpen(true)} />

        {/* Work & Career Experience Timeline */}
        <Experience />

        {/* Projects & Featured Work Section (Inspiration: luffytaro.me) */}
        <Projects showToast={showToast} />

        {/* Certifications & Licenses Section */}
        <Certifications />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        showToast={showToast}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        showToast={showToast}
      />

    </div>
  );
}
