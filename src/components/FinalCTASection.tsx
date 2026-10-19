import React from 'react';
import { PhoneCall, MessageSquare, ArrowUpRight, Sparkles } from 'lucide-react';
import { SITE_INFO } from '../data/portfolioData';

export const FinalCTASection: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-24 border-b-2 border-black dark:border-zinc-800 bg-[#fef08a] dark:bg-yellow-400 text-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-block px-3 py-1 bg-black text-white font-mono-code text-xs font-bold uppercase tracking-wider mb-4 shadow-[2px_2px_0px_#fff]">
          LET’S TALK REVENUE
        </div>

        <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-black mb-4">
          Ready When You Are<span className="text-red-600">.</span>
        </h2>

        <p className="font-display font-bold text-xl sm:text-2xl text-zinc-900 max-w-2xl mx-auto mb-2">
          Your competitors have websites that don’t stand out at all.
        </p>

        <p className="text-base sm:text-lg text-zinc-800 font-medium max-w-xl mx-auto mb-8">
          Leave them behind with a system engineered for real ROI — websites, funnels, and AI assistants, built to convert.
        </p>

        {/* Buttons with authentic links */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={SITE_INFO.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-black text-white font-display font-black text-xs sm:text-sm uppercase tracking-wider border-2 border-black shadow-[4px_4px_0px_#fff] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#fff] transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Book A Free Call</span>
            <PhoneCall className="w-4 h-4" />
          </a>

          <a
            href={SITE_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#25D366] text-black font-display font-black text-xs sm:text-sm uppercase tracking-wider border-2 border-black shadow-[4px_4px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000] transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Chat On WhatsApp</span>
            <MessageSquare className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
