import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatsStrip } from './components/StatsStrip';
import { MarqueeStrip } from './components/MarqueeStrip';
import { ServicesSection } from './components/ServicesSection';
import { ComparisonSection } from './components/ComparisonSection';
import { StrategySection } from './components/StrategySection';
import { PastProjectsSection } from './components/PastProjectsSection';
import { AboutSection } from './components/AboutSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('somefun-seye-theme');
      if (stored) return stored === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
      root.style.colorScheme = 'dark';
      document.body.classList.add('dark');
      localStorage.setItem('somefun-seye-theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
      root.style.colorScheme = 'light';
      document.body.classList.remove('dark');
      localStorage.setItem('somefun-seye-theme', 'light');
    }
  }, [darkMode]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`${darkMode ? 'dark' : ''} min-h-screen bg-[#fcfbfa] dark:bg-[#090a0d] text-zinc-950 dark:text-zinc-50 bg-dot-pattern transition-colors duration-200`}>
      {/* Navigation Header */}
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main>
        {/* Hero Section */}
        <Hero onExploreWork={() => scrollToSection('work')} />

        {/* 4-Column Stats Ribbon */}
        <StatsStrip />

        {/* High-Impact Keyword Marquee Ticker */}
        <MarqueeStrip />

        {/* The 4 Core Services */}
        <ServicesSection />

        {/* The Outdated Approach: The Liability vs The Asset */}
        <ComparisonSection />

        {/* Our Strategy: Clever Approach, Upscale Branding, Growth-Focused */}
        <StrategySection />

        {/* Past Projects with Behance links */}
        <PastProjectsSection />

        {/* About Somefun Seye */}
        <AboutSection />

        {/* All 7 Frequently Asked Questions */}
        <FAQSection />

        {/* Ready When You Are CTA Banner */}
        <FinalCTASection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Theme Quick-Toggle Widget */}
      <div className="fixed bottom-5 left-5 z-40">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="flex items-center gap-2 px-3.5 py-2 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 font-mono-code text-xs font-bold uppercase border-2 border-black dark:border-zinc-500 shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#facc15] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000] dark:hover:shadow-[6px_6px_0px_#facc15] transition-all cursor-pointer"
          aria-label="Toggle theme mode"
          title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {darkMode ? (
            <>
              <Sun className="w-4 h-4 text-yellow-400" />
              <span>Light Mode</span>
            </>
          ) : (
            <>
              <Moon className="w-4 h-4 text-zinc-800" />
              <span>Dark Mode</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
