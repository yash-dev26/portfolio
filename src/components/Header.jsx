import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { profileData } from '../data/profileData';

export function Header({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);

      const sections = ['hero', 'tech-stack', 'experience', 'projects', 'certifications'];
      const scrollPos = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'tech-stack', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    // Only show Certs once real certifications are added to profileData.js
    ...(profileData.certifications?.length ? [{ id: 'certifications', label: 'Certs' }] : []),
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    // Edge-to-edge, top-attached dark bar — flat text nav links, no pill grouping,
    // no logo/name, no CTA button. Matches the reference site's minimal navbar.
    <header
      className={`fixed top-0 left-0 right-0 z-40 border-b border-neutral-900 bg-neutral-950/90 backdrop-blur-xl transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_4px_24px_rgba(0,0,0,0.35)]' : ''
      }`}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">

        {/* Theme toggle — small, borderless, now on the left */}
        <button
          onClick={toggleTheme}
          title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          className="w-7 h-7 shrink-0 flex items-center justify-center text-neutral-500 hover:text-white transition-colors"
        >
          {theme === 'dark' ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
        </button>

        {/* Flat nav links — now on the right */}
        <nav className="flex items-center gap-4 sm:gap-7 overflow-x-auto">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`nav-heading-font text-[11px] sm:text-xs uppercase tracking-tight whitespace-nowrap transition-colors duration-200 ${
                activeSection === link.id
                  ? 'text-white'
                  : 'text-neutral-500 hover:text-neutral-200'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

      </div>
    </header>
  );
}
