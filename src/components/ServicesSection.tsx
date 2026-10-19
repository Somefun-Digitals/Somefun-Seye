import React from 'react';
import { ArrowUpRight, CheckCircle2, Globe, Layers, Bot, MessageSquare } from 'lucide-react';
import { SERVICES, SITE_INFO } from '../data/portfolioData';

export const ServicesSection: React.FC = () => {
  const icons = [Globe, Layers, Bot, MessageSquare];

  return (
    <section id="services" className="w-full py-16 md:py-24 border-b-2 border-black dark:border-zinc-800 bg-white dark:bg-[#0c0d12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="mb-3">
              <span className="inline-block px-3 py-1 bg-yellow-300 dark:bg-yellow-400 text-black border-2 border-black font-mono-code text-xs font-bold uppercase tracking-wider shadow-[2px_2px_0px_#000]">
                CORE CAPABILITIES
              </span>
            </div>

            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-zinc-950 dark:text-white uppercase tracking-tight">
              My Services<span className="text-red-500">.</span>
            </h2>
            <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 font-medium max-w-xl mt-2">
              Everything you need to turn traffic into revenue. Four services, one outcome — a system that sells while you sleep.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={SITE_INFO.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-black dark:bg-white text-white dark:text-black font-display font-bold text-xs uppercase tracking-wider border-2 border-black dark:border-white neo-shadow-hover inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Get Started Now</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 4 Neo-Brutalist Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={service.number}
                className="bg-zinc-50 dark:bg-zinc-900 border-2 border-black dark:border-zinc-700 p-6 sm:p-8 shadow-[6px_6px_0px_#000] dark:shadow-[6px_6px_0px_#38bdf8] flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-[9px_9px_0px_#000] dark:hover:shadow-[9px_9px_0px_#38bdf8]"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b-2 border-black/10 dark:border-zinc-800">
                    <span className="font-mono-code font-bold text-xs uppercase text-red-500 dark:text-red-400 bg-red-100 dark:bg-red-950/50 px-2 py-0.5 border border-red-500">
                      SERVICE {service.number}
                    </span>
                    <div className="w-9 h-9 bg-black dark:bg-zinc-800 text-white flex items-center justify-center border border-black shadow-[2px_2px_0px_#000]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-display font-black text-2xl sm:text-3xl text-zinc-950 dark:text-white uppercase tracking-tight mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6 font-medium">
                    {service.description}
                  </p>

                  <div className="space-y-2 py-3 border-t border-black/10 dark:border-zinc-800">
                    {service.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-800 dark:text-zinc-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-black/10 dark:border-zinc-800 flex items-center justify-between">
                  <span className="text-xs font-mono-code font-bold text-zinc-500 uppercase">
                    ROI-FOCUSED DELIVERY
                  </span>
                  <a
                    href={SITE_INFO.calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display font-bold text-xs uppercase tracking-wider text-black dark:text-white hover:text-red-500 dark:hover:text-yellow-400 flex items-center gap-1.5 transition-colors"
                  >
                    <span>Discuss Scope</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
