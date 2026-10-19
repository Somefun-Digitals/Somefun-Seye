import React from 'react';
import { MARQUEE_ITEMS } from '../data/portfolioData';

export const MarqueeStrip: React.FC = () => {
  return (
    <div className="w-full bg-[#fef08a] dark:bg-yellow-400 text-black border-y-2 border-black py-3 overflow-hidden select-none">
      <div className="flex items-center gap-6 whitespace-nowrap animate-marquee font-display font-black text-sm uppercase tracking-wider">
        {[...Array(4)].map((_, loopIdx) => (
          <React.Fragment key={loopIdx}>
            {MARQUEE_ITEMS.map((item, idx) => (
              <span key={`${loopIdx}-${idx}`} className="flex items-center gap-6">
                <span>{item}</span>
                <span className="text-red-600 font-bold">●</span>
              </span>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
