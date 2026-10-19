import React from 'react';
import { XCircle, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { COMPARISON_DATA, SITE_INFO } from '../data/portfolioData';

export const ComparisonSection: React.FC = () => {
  return (
    <section id="comparison" className="w-full py-16 md:py-24 border-b-2 border-black dark:border-zinc-800 bg-[#fff1f2]/30 dark:bg-[#0e1017]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block px-3 py-1 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border-2 border-black dark:border-zinc-700 font-mono-code text-xs font-bold uppercase tracking-wider shadow-[2px_2px_0px_#000] mb-3">
            CONVERSION PHILOSOPHY
          </div>

          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-zinc-950 dark:text-white">
            {COMPARISON_DATA.title}<span className="text-red-500">.</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 font-medium mt-3">
            {COMPARISON_DATA.subtitle}
          </p>
        </div>

        {/* 2-Column Side-by-Side Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          
          {/* The Liability Card */}
          <div className="bg-[#fff1f2] dark:bg-rose-950/20 border-3 border-black dark:border-rose-900 p-6 sm:p-8 shadow-[7px_7px_0px_#000] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-red-200 dark:border-rose-900">
                <span className="font-mono-code font-bold text-xs uppercase px-2.5 py-1 bg-red-500 text-white border border-black shadow-[1px_1px_0px_#000]">
                  {COMPARISON_DATA.liability.badge}
                </span>
                <span className="text-xs font-mono-code font-bold text-red-600 dark:text-red-400">
                  MONEY PIT
                </span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-zinc-950 dark:text-white uppercase tracking-tight mb-3">
                {COMPARISON_DATA.liability.title}
              </h3>

              <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 font-medium leading-relaxed mb-6">
                {COMPARISON_DATA.liability.description}
              </p>

              <div className="space-y-3 pt-4 border-t-2 border-red-200 dark:border-rose-900">
                {COMPARISON_DATA.liability.points.map((pt, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm font-bold text-red-900 dark:text-rose-300">
                    <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-red-200 dark:border-rose-900 text-xs font-mono-code text-zinc-500">
              ❌ High traffic with zero conversion follow-up
            </div>
          </div>

          {/* The Asset Card */}
          <div className="bg-[#f0fdf4] dark:bg-emerald-950/20 border-3 border-black dark:border-emerald-800 p-6 sm:p-8 shadow-[7px_7px_0px_#000] dark:shadow-[7px_7px_0px_#34d399] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-emerald-200 dark:border-emerald-900">
                <span className="font-mono-code font-bold text-xs uppercase px-2.5 py-1 bg-emerald-600 text-white border border-black shadow-[1px_1px_0px_#000]">
                  {COMPARISON_DATA.asset.badge}
                </span>
                <span className="text-xs font-mono-code font-bold text-emerald-600 dark:text-emerald-400">
                  REVENUE ENGINE
                </span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-zinc-950 dark:text-white uppercase tracking-tight mb-3">
                {COMPARISON_DATA.asset.title}
              </h3>

              <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 font-medium leading-relaxed mb-6">
                {COMPARISON_DATA.asset.description}
              </p>

              <div className="space-y-3 pt-4 border-t-2 border-emerald-200 dark:border-emerald-900">
                {COMPARISON_DATA.asset.points.map((pt, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm font-bold text-emerald-950 dark:text-emerald-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-emerald-200 dark:border-emerald-900">
              <a
                href={SITE_INFO.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-black dark:bg-white text-white dark:text-black font-display font-bold text-xs uppercase tracking-wider border-2 border-black dark:border-white neo-shadow-hover inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Build Your Revenue Engine</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
