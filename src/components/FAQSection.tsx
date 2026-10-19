import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS, SITE_INFO } from '../data/portfolioData';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="w-full py-16 md:py-24 border-b-2 border-black dark:border-zinc-800 bg-white dark:bg-[#0c0d12]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-yellow-300 dark:bg-yellow-400 text-black border-2 border-black font-mono-code text-xs font-bold uppercase tracking-wider shadow-[2px_2px_0px_#000] mb-3">
            CLEAR ANSWERS
          </div>

          <h2 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight text-zinc-950 dark:text-white">
            Frequently Asked Questions<span className="text-red-500">.</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-medium max-w-lg mx-auto mt-2">
            Everything you need to know about website conversion, automated sales funnels, and AI virtual assistants.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-zinc-50 dark:bg-zinc-900 border-2 border-black dark:border-zinc-700 shadow-[4px_4px_0px_#000] dark:shadow-[4px_4px_0px_#38bdf8] transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-base sm:text-lg text-zinc-950 dark:text-white leading-snug">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 bg-black dark:bg-zinc-800 text-white flex items-center justify-center border border-black shrink-0 transition-transform">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed border-t border-black/10 dark:border-zinc-800 font-medium animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct question prompt */}
        <div className="mt-12 text-center p-6 bg-[#e0f2fe] dark:bg-zinc-800/80 border-2 border-black dark:border-zinc-700 shadow-[4px_4px_0px_#000]">
          <p className="font-display font-bold text-base text-zinc-950 dark:text-white mb-2">
            Have a specific question about your website or funnels?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-3">
            <a
              href={SITE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#25D366] text-black font-display font-bold text-xs uppercase tracking-wider border-2 border-black neo-shadow-sm inline-flex items-center gap-1.5"
            >
              <span>Ask Directly On WhatsApp</span>
            </a>
            <a
              href={SITE_INFO.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-black text-white dark:bg-white dark:text-black font-display font-bold text-xs uppercase tracking-wider border-2 border-black dark:border-white neo-shadow-sm inline-flex items-center gap-1.5"
            >
              <span>Book A 15-Min Chat</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
