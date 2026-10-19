import React from 'react';
import { SITE_INFO } from '../data/portfolioData';
import { PhoneCall, MessageSquare, MapPin, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="w-full py-16 md:py-24 border-b-2 border-black dark:border-zinc-800 bg-[#fefce8]/30 dark:bg-[#0c0e14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Portrait Photo Container using authentic image */}
          <div className="lg:col-span-5">
            <div className="relative bg-white dark:bg-zinc-900 border-3 border-black dark:border-zinc-700 shadow-[8px_8px_0px_#000] dark:shadow-[8px_8px_0px_#facc15] p-3">
              <div className="relative aspect-square overflow-hidden border-2 border-black dark:border-zinc-700 bg-zinc-200">
                <img
                  src={SITE_INFO.avatar}
                  alt={SITE_INFO.name}
                  loading="eager"
                  className="w-full h-full object-cover filter contrast-[1.02]"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/images/seye_avatar.png';
                  }}
                />
                <div className="absolute bottom-3 left-3 bg-black text-white text-[10px] font-mono-code font-bold uppercase px-2.5 py-1">
                  SOMEFUN SEYE · DESIGNER &amp; DEVELOPER
                </div>
              </div>

              {/* Card Meta Footer */}
              <div className="pt-3 px-2 flex items-center justify-between text-xs font-mono-code text-zinc-700 dark:text-zinc-300">
                <span className="flex items-center gap-1 font-bold">
                  <MapPin className="w-3.5 h-3.5 text-red-500" />
                  LAGOS &amp; WORLDWIDE REMOTE
                </span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                  AVAILABLE
                </span>
              </div>
            </div>
          </div>

          {/* Exact Text from Somefun Seye's original website */}
          <div className="lg:col-span-7">
            <span className="inline-block px-3 py-1 bg-[#bae6fd] text-zinc-950 border-2 border-black font-mono-code text-xs font-bold uppercase tracking-wider shadow-[2px_2px_0px_#000] mb-3">
              ABOUT SOMEFUN SEYE
            </span>
            
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-zinc-950 dark:text-white leading-[1.05] mb-6">
              {SITE_INFO.aboutHeading}
            </h2>

            <div className="space-y-4 text-zinc-700 dark:text-zinc-300 text-base sm:text-lg leading-relaxed mb-8 font-medium">
              <p>
                {SITE_INFO.aboutText1}
              </p>
              <p>
                {SITE_INFO.aboutText2}
              </p>
            </div>

            {/* Invariants strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-white dark:bg-zinc-900 border-2 border-black dark:border-zinc-700 shadow-[3px_3px_0px_#000]">
                <div className="font-display font-bold text-sm text-zinc-950 dark:text-white uppercase mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Conversion-First
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">
                  Every section and button engineered to turn passive traffic into booked meetings.
                </p>
              </div>

              <div className="p-4 bg-white dark:bg-zinc-900 border-2 border-black dark:border-zinc-700 shadow-[3px_3px_0px_#000]">
                <div className="font-display font-bold text-sm text-zinc-950 dark:text-white uppercase mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  24/7 AI Automation
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">
                  Smart assistants that capture, qualify, and follow up leads while you sleep.
                </p>
              </div>
            </div>

            {/* The 2 Authentic Buttons from the site */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={SITE_INFO.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 bg-black dark:bg-white text-white dark:text-black font-display font-bold text-xs uppercase tracking-wider border-2 border-black dark:border-white neo-shadow-hover inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Let’s Talk</span>
                <PhoneCall className="w-4 h-4" />
              </a>

              <a
                href={SITE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 bg-[#25D366] text-black font-display font-bold text-xs uppercase tracking-wider border-2 border-black neo-shadow-hover inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Chat On WhatsApp</span>
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
