import React, { useEffect, useState } from 'react';
import { ArrowDown, ArrowUpRight, MessageSquare, PhoneCall, CheckCircle2, Clock } from 'lucide-react';
import { SITE_INFO } from '../data/portfolioData';

interface HeroProps {
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork }) => {
  const [lagosTime, setLagosTime] = useState({
    hours: '16',
    minutes: '30',
    seconds: '00',
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const lagosDate = new Date(utc + 3600000);
      setLagosTime({
        hours: lagosDate.getHours().toString().padStart(2, '0'),
        minutes: lagosDate.getMinutes().toString().padStart(2, '0'),
        seconds: lagosDate.getSeconds().toString().padStart(2, '0'),
      });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="top" className="relative w-full pt-10 pb-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Split directly echoing the reference layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Badges & High-Converting Typography */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            
            {/* Tag Badges with rectangular borders and pastel fills */}
            <div className="flex flex-wrap items-center gap-2.5 mb-6 text-xs font-mono-code font-bold uppercase tracking-wider">
              <span className="px-3 py-1.5 bg-[#fef08a] text-zinc-900 border-2 border-black dark:border-zinc-800 shadow-[2px_2px_0px_#000]">
                WEBSITES · FUNNELS
              </span>
              <span className="px-3 py-1.5 bg-[#ef4444] text-white border-2 border-black dark:border-zinc-800 shadow-[2px_2px_0px_#000]">
                AI ASSISTANTS
              </span>
              <span className="px-3 py-1.5 bg-[#38bdf8] text-zinc-900 border-2 border-black dark:border-zinc-800 shadow-[2px_2px_0px_#000]">
                LAGOS &amp; REMOTE
              </span>
            </div>

            {/* Oversized Neo-Brutalist Headline */}
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.98] text-zinc-950 dark:text-white uppercase mb-6">
              Turn Clicks Into Clients With A Website That Actually <span className="text-red-500 underline decoration-black dark:decoration-white decoration-4 underline-offset-8">Converts.</span>
            </h1>

            {/* Exact Copy from original website */}
            <p className="text-base sm:text-lg md:text-xl text-zinc-700 dark:text-zinc-300 font-medium leading-relaxed max-w-2xl mb-8">
              {SITE_INFO.heroDescription}
            </p>

            {/* Action Buttons with real links */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={SITE_INFO.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-black dark:bg-white text-white dark:text-black font-display font-bold text-xs uppercase tracking-wider border-2 border-black dark:border-white neo-shadow-hover inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Book A Free Call</span>
                <PhoneCall className="w-4 h-4" />
              </a>

              <button
                onClick={onExploreWork}
                className="px-6 py-3.5 bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 font-display font-bold text-xs uppercase tracking-wider border-2 border-black dark:border-zinc-700 neo-shadow-hover inline-flex items-center gap-2 cursor-pointer"
              >
                <span>View Past Projects</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <a
                href={SITE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 bg-[#25D366] text-black font-display font-bold text-xs uppercase tracking-wider border-2 border-black neo-shadow-hover inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Chat On WhatsApp</span>
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Neo-Brutalist Alert Card & Real-Time Status Radar */}
          <div className="lg:col-span-5 flex flex-col gap-6 w-full">
            
            {/* Neo-brutalist Yellow Alert Card */}
            <div className="relative bg-[#fef08a] dark:bg-[#eab308] text-zinc-950 border-2 border-black p-6 md:p-7 shadow-[6px_6px_0px_#000] dark:shadow-[6px_6px_0px_#fef08a]">
              
              {/* Corner Tag */}
              <div className="absolute top-0 right-0 bg-[#ef4444] text-white text-[10px] font-mono-code font-bold uppercase tracking-widest px-2.5 py-1 border-b-2 border-l-2 border-black">
                ROI FOCUSED
              </div>

              {/* Sub-kicker with dot indicator */}
              <div className="flex items-center gap-2 text-xs font-mono-code font-bold uppercase tracking-wider text-red-700 mb-2">
                <span className="w-2 h-2 rounded-full bg-red-600 inline-block animate-ping"></span>
                <span>CONVERSION RADAR</span>
              </div>

              {/* Title */}
              <h2 className="font-display font-black text-2xl sm:text-3xl text-zinc-950 uppercase tracking-tight mb-2">
                Stop Losing Leads
              </h2>

              {/* Description */}
              <p className="text-sm font-medium text-zinc-800 leading-normal mb-6">
                Most agencies build websites that look decent but don’t generate booked calls. Let’s turn your traffic into paying clients with high-converting funnels &amp; 24/7 AI assistants.
              </p>

              {/* Button */}
              <a
                href={SITE_INFO.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 bg-black text-white font-display font-bold text-xs uppercase tracking-wider border-2 border-black hover:bg-zinc-800 transition-colors inline-flex items-center justify-center gap-2 cursor-pointer shadow-[2px_2px_0px_#fff]"
              >
                <span>Schedule Strategy Call</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Countdown / Metrics Card */}
            <div className="bg-[#e0f2fe] dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border-2 border-black dark:border-zinc-700 p-5 md:p-6 shadow-[6px_6px_0px_#000] dark:shadow-[6px_6px_0px_#38bdf8]">
              
              <div className="flex items-center justify-between text-xs font-mono-code font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-400 mb-4 pb-2 border-b border-black/20 dark:border-zinc-800">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
                  LAGOS (WAT UTC+1) STUDIO CLOCK
                </span>
                <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
                  ONLINE
                </span>
              </div>

              {/* 4-Box Metric Display */}
              <div className="grid grid-cols-4 gap-2.5 text-center">
                <div className="bg-white dark:bg-zinc-800 border-2 border-black dark:border-zinc-700 py-3 px-1 shadow-[2px_2px_0px_#000]">
                  <div className="font-display font-black text-2xl sm:text-3xl tabular-nums text-zinc-950 dark:text-white">
                    50+
                  </div>
                  <div className="text-[9px] font-mono-code font-bold uppercase text-zinc-500 dark:text-zinc-400">
                    SHIPPED
                  </div>
                </div>

                <div className="bg-white dark:bg-zinc-800 border-2 border-black dark:border-zinc-700 py-3 px-1 shadow-[2px_2px_0px_#000]">
                  <div className="font-display font-black text-2xl sm:text-3xl tabular-nums text-zinc-950 dark:text-white">
                    24/7
                  </div>
                  <div className="text-[9px] font-mono-code font-bold uppercase text-zinc-500 dark:text-zinc-400">
                    AI AGENT
                  </div>
                </div>

                <div className="bg-white dark:bg-zinc-800 border-2 border-black dark:border-zinc-700 py-3 px-1 shadow-[2px_2px_0px_#000]">
                  <div className="font-display font-black text-2xl sm:text-3xl tabular-nums text-zinc-950 dark:text-white">
                    +40%
                  </div>
                  <div className="text-[9px] font-mono-code font-bold uppercase text-zinc-500 dark:text-zinc-400">
                    AVG LIFT
                  </div>
                </div>

                <div className="bg-white dark:bg-zinc-800 border-2 border-black dark:border-zinc-700 py-3 px-1 shadow-[2px_2px_0px_#000]">
                  <div className="font-display font-black text-2xl sm:text-3xl tabular-nums text-red-500 dark:text-red-400">
                    {lagosTime.hours}:{lagosTime.minutes}
                  </div>
                  <div className="text-[9px] font-mono-code font-bold uppercase text-zinc-500 dark:text-zinc-400">
                    LOCAL TIME
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-black/10 dark:border-zinc-800 flex items-center justify-between text-xs font-mono-code text-zinc-600 dark:text-zinc-400">
                <span className="flex items-center gap-1 font-bold text-zinc-900 dark:text-zinc-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  Systems Built For Revenue, Not Just Looks
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
