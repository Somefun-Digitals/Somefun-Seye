import React, { useState } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight, MessageSquare, PhoneCall } from 'lucide-react';
import { SITE_INFO } from '../data/portfolioData';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Comparison', href: '#comparison' },
    { label: 'Strategy', href: '#strategy' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-0 z-40 w-full">
      {/* Top Notice Marquee Bar inspired by the reference site */}
      <div className="bg-[#111317] text-white border-b-2 border-black dark:border-zinc-800 text-xs py-2 px-4 overflow-hidden select-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 font-mono-code text-[11px] md:text-xs">
          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar whitespace-nowrap">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
              CLIENT SLOTS OPEN: WEBSITES · FUNNELS · AI ASSISTANTS
            </span>
            <span className="text-zinc-500">|</span>
            <span className="text-zinc-300">LAGOS & WORLDWIDE REMOTE</span>
            <span className="text-zinc-500">|</span>
            <span className="text-amber-400 font-medium">50+ PROJECTS SHIPPED · 24/7 AUTOMATION</span>
          </div>
          <div className="hidden lg:flex items-center gap-4 text-zinc-400 shrink-0">
            <a
              href={SITE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-white flex items-center gap-1 transition-colors"
            >
              <MessageSquare className="w-3 h-3 text-emerald-400" />
              <span>WhatsApp Direct</span>
            </a>
            <span className="text-zinc-600">·</span>
            <a
              href={`mailto:${SITE_INFO.email}`}
              className="text-zinc-300 hover:text-white underline underline-offset-2 transition-colors"
            >
              {SITE_INFO.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar */}
      <header className="w-full bg-white/95 dark:bg-[#0e1015]/95 backdrop-blur-md border-b-2 border-black dark:border-zinc-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
          
          {/* Brand Wordmark */}
          <a
            href="#top"
            className="flex items-center gap-2.5 text-slate-900 dark:text-white whitespace-nowrap shrink-0 group"
          >
            <div className="w-8 h-8 bg-black dark:bg-yellow-400 text-white dark:text-black flex items-center justify-center font-bold text-sm border-2 border-black dark:border-yellow-400 transition-transform group-hover:-rotate-6">
              S
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-display font-black text-xl tracking-tight uppercase">
                {SITE_INFO.name}
              </span>
              <span className="font-display font-black text-xl text-red-500 tracking-tight">
                2026
              </span>
            </div>
          </a>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold tracking-wide text-zinc-700 dark:text-zinc-300">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="hover:text-black dark:hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0 py-1 relative hover:underline underline-offset-4 decoration-2 decoration-red-500"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right actions: Theme toggle + Book a call CTA */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Theme Toggle Button in Desktop Header */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="flex items-center gap-1.5 px-3 py-2 border-2 border-black dark:border-zinc-600 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 neo-shadow-hover cursor-pointer"
              aria-label="Toggle dark and light mode"
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? (
                <>
                  <Sun className="w-4 h-4 text-yellow-400" />
                  <span className="text-[11px] font-mono-code font-bold uppercase hidden sm:inline">Light</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-zinc-800" />
                  <span className="text-[11px] font-mono-code font-bold uppercase hidden sm:inline">Dark</span>
                </>
              )}
            </button>

            {/* Book A Call CTA button with real link */}
            <a
              href={SITE_INFO.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-black dark:bg-white text-white dark:text-black font-display font-bold text-xs uppercase tracking-wider border-2 border-black dark:border-white neo-shadow-hover cursor-pointer"
            >
              <span>Book A Call</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 border-2 border-black dark:border-zinc-700 bg-white dark:bg-zinc-900 text-black dark:text-white neo-shadow-sm cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t-2 border-black dark:border-zinc-800 bg-white dark:bg-[#0e1015] px-6 py-6 space-y-4 shadow-xl">
            {/* Mobile Theme Switcher */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-full flex items-center justify-between p-3 border-2 border-black dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-mono-code text-xs font-bold uppercase"
            >
              <span className="flex items-center gap-2">
                {darkMode ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4" />}
                Theme Mode: {darkMode ? 'Dark' : 'Light'}
              </span>
              <span className="px-2 py-0.5 bg-yellow-300 dark:bg-yellow-400 text-black text-[10px] border border-black">
                Tap to toggle
              </span>
            </button>

            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left py-2.5 px-3 border border-black dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 font-semibold text-sm text-zinc-800 dark:text-zinc-200 hover:bg-yellow-300 dark:hover:bg-zinc-800 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <a
                href={SITE_INFO.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 bg-black dark:bg-white text-white dark:text-black font-display font-bold text-xs uppercase tracking-wider border-2 border-black dark:border-white neo-shadow-hover text-center flex items-center justify-center gap-1.5"
              >
                <span>Book Call</span>
                <PhoneCall className="w-3.5 h-3.5" />
              </a>
              <a
                href={SITE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 bg-emerald-600 text-white font-display font-bold text-xs uppercase tracking-wider border-2 border-black neo-shadow-hover text-center flex items-center justify-center gap-1.5"
              >
                <span>WhatsApp</span>
                <MessageSquare className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

