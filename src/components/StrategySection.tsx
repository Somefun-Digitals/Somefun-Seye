import React from 'react';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Target, TrendingUp } from 'lucide-react';
import { STRATEGY_PILLARS, SITE_INFO } from '../data/portfolioData';

export const StrategySection: React.FC = () => {
  const icons = [ShieldCheck, Target, TrendingUp];

  return (
    <section id="strategy" className="w-full py-16 md:py-24 border-b-2 border-black dark:border-zinc-800 bg-[#fefce8]/30 dark:bg-[#0c0d12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2-Column Split matching the inspiration layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-5">
            <span className="inline-block px-3 py-1 bg-yellow-300 dark:bg-yellow-400 text-black border-2 border-black font-mono-code text-xs font-bold uppercase tracking-wider shadow-[2px_2px_0px_#000] mb-3">
              PROVEN PLAYBOOK
            </span>

            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-zinc-950 dark:text-white uppercase tracking-tight leading-[1] mb-6">
              Our Strategy<span className="text-red-500">.</span>
            </h2>

            <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 font-medium leading-relaxed mb-6">
              A framework built for ROI, not applause. We strip away vanity complexity and engineer interfaces designed to convert qualified traffic into paying clients.
            </p>

            <div className="p-5 bg-white dark:bg-zinc-900 border-2 border-black dark:border-zinc-700 shadow-[4px_4px_0px_#000] mb-8">
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 leading-relaxed">
                “Every element on your page should answer a prospect objection, establish trust, or direct them toward booking a call.”
              </p>
            </div>

            <div>
              <a
                href={SITE_INFO.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 bg-black dark:bg-white text-white dark:text-black font-display font-bold text-xs uppercase tracking-wider border-2 border-black dark:border-white neo-shadow-hover inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Book A Free Call</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: 3 Strategy Pillars */}
          <div className="lg:col-span-7 space-y-6">
            {STRATEGY_PILLARS.map((pillar, idx) => {
              const Icon = icons[idx % icons.length];
              return (
                <div
                  key={pillar.number}
                  className="bg-white dark:bg-zinc-900 border-2 border-black dark:border-zinc-700 p-6 sm:p-7 shadow-[6px_6px_0px_#000] dark:shadow-[6px_6px_0px_#38bdf8] flex items-start gap-5 transition-transform hover:-translate-x-1"
                >
                  <div className="w-12 h-12 bg-black dark:bg-zinc-800 text-white flex items-center justify-center font-display font-black text-lg border-2 border-black shrink-0 shadow-[2px_2px_0px_#000]">
                    {pillar.number}
                  </div>

                  <div>
                    <h3 className="font-display font-black text-2xl uppercase tracking-tight text-zinc-950 dark:text-white mb-2 flex items-center gap-2">
                      <Icon className="w-5 h-5 text-red-500" />
                      <span>{pillar.title}</span>
                    </h3>

                    <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 font-medium leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
