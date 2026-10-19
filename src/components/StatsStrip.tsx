import React from 'react';
import { KEY_METRICS } from '../data/portfolioData';

export const StatsStrip: React.FC = () => {
  return (
    <div className="w-full border-y-2 border-black dark:border-zinc-800 bg-white dark:bg-[#0c0d11]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-black dark:divide-zinc-800">
          {KEY_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="p-6 md:p-8 flex flex-col justify-center transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900/50"
            >
              <div className={`font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight uppercase mb-1.5 ${metric.color}`}>
                {metric.value}
              </div>
              <div className="text-xs font-mono-code font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
