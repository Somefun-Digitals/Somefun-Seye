import React from 'react';
import { ArrowUp, PhoneCall, MessageSquare, ExternalLink } from 'lucide-react';
import { SITE_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#111317] text-white border-t-2 border-black dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10 border-b border-zinc-800">
          
          {/* Brand & Subtext */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-white text-black flex items-center justify-center font-bold text-xs border border-white">
                S
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-display font-black text-xl tracking-tight uppercase text-white">
                  {SITE_INFO.name}
                </span>
                <span className="font-display font-black text-xl text-red-500 tracking-tight">
                  2026
                </span>
              </div>
            </div>
            <p className="text-xs font-mono-code text-zinc-400 max-w-sm">
              {SITE_INFO.tagline} — High-converting websites, automated sales funnels, and 24/7 AI assistants.
            </p>
          </div>

          {/* Social & Booking Links from original site */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono-code font-bold uppercase tracking-wider text-zinc-300">
            <a
              href={SITE_INFO.behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors flex items-center gap-1"
            >
              <span>BEHANCE</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href={SITE_INFO.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors flex items-center gap-1"
            >
              <span>CALENDLY</span>
              <PhoneCall className="w-3 h-3" />
            </a>
            <a
              href={SITE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors flex items-center gap-1"
            >
              <span>WHATSAPP</span>
              <MessageSquare className="w-3 h-3" />
            </a>
            <a
              href={`mailto:${SITE_INFO.email}`}
              className="hover:text-yellow-400 transition-colors"
            >
              {SITE_INFO.email.toUpperCase()}
            </a>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-zinc-500">
          <div>
            © 2026 {SITE_INFO.name.toUpperCase()}. ALL RIGHTS RESERVED.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
