import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, X, Eye } from 'lucide-react';
import { PAST_PROJECTS, SITE_INFO } from '../data/portfolioData';
import { ProjectItem } from '../types/portfolio';

export const PastProjectsSection: React.FC = () => {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  return (
    <section id="work" className="w-full py-16 md:py-24 border-b-2 border-black dark:border-zinc-800 bg-white dark:bg-[#0c0d12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="mb-3">
              <span className="inline-block px-3 py-1 bg-yellow-300 dark:bg-yellow-400 text-black border-2 border-black font-mono-code text-xs font-bold uppercase tracking-wider shadow-[2px_2px_0px_#000]">
                PROVEN TRACK RECORD
              </span>
            </div>

            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-zinc-950 dark:text-white uppercase tracking-tight">
              Past Projects<span className="text-red-500">.</span>
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 font-medium max-w-xl mt-2">
              Premium design that demands attention. Case studies engineered to maximize conversions and elevate brand authority.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={SITE_INFO.behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-black dark:bg-white text-white dark:text-black font-display font-bold text-xs uppercase tracking-wider border-2 border-black dark:border-white neo-shadow-hover inline-flex items-center gap-2 cursor-pointer"
            >
              <span>View All On Behance</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 2x2 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PAST_PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className="group bg-white dark:bg-[#12141c] border-2 border-black dark:border-zinc-700 shadow-[6px_6px_0px_#000] dark:shadow-[6px_6px_0px_#38bdf8] flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-[9px_9px_0px_#000] dark:hover:shadow-[9px_9px_0px_#38bdf8]"
            >
              <div>
                {/* Media frame */}
                <div
                  className="relative aspect-video w-full overflow-hidden border-b-2 border-black dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 cursor-pointer"
                  onClick={() => setActiveProject(proj)}
                >
                  <img
                    src={proj.image}
                    alt={proj.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `/assets/images/${proj.id === 'landing-page' ? 'project_landing_page.png' : proj.id === 'sales-funnel' ? 'project_sales_funnel.webp' : proj.id === 'brand-site' ? 'project_brand_site.png' : 'project_conversion_page.webp'}`;
                    }}
                  />
                  <div className="absolute top-3 left-3 bg-yellow-300 text-black text-[10px] font-mono-code font-bold uppercase px-2.5 py-1 border border-black shadow-[2px_2px_0px_#000]">
                    {proj.tag}
                  </div>
                  <div className="absolute top-3 right-3 bg-black text-white text-[10px] font-mono-code font-bold uppercase px-2.5 py-1">
                    {proj.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className="font-display font-black text-2xl sm:text-3xl text-zinc-950 dark:text-white uppercase tracking-tight mb-2 group-hover:text-red-500 transition-colors cursor-pointer"
                    onClick={() => setActiveProject(proj)}
                  >
                    {proj.title}
                  </h3>

                  <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-medium mb-4">
                    {proj.description}
                  </p>
                </div>
              </div>

              {/* Card Footer with Behance and Preview buttons */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between gap-3 border-t border-black/10 dark:border-zinc-800">
                <button
                  onClick={() => setActiveProject(proj)}
                  className="py-2.5 px-4 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white font-display font-bold text-xs uppercase border border-black dark:border-zinc-600 hover:bg-yellow-300 hover:text-black transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Quick View</span>
                </button>

                <a
                  href={proj.behanceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 bg-black dark:bg-white text-white dark:text-black font-display font-bold text-xs uppercase tracking-wider border-2 border-black dark:border-white neo-shadow-hover inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Behance Case Study</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-white dark:bg-zinc-900 border-3 border-black dark:border-zinc-700 shadow-[10px_10px_0px_#000] p-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 mb-4 border-b-2 border-black dark:border-zinc-800">
              <div>
                <span className="text-xs font-mono-code font-bold uppercase text-red-500">
                  {activeProject.category} · {activeProject.tag}
                </span>
                <h3 className="font-display font-black text-2xl uppercase text-zinc-950 dark:text-white">
                  {activeProject.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveProject(null)}
                className="p-1.5 border-2 border-black bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white hover:bg-red-500 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

              <img
                src={activeProject.image}
                alt={activeProject.title}
                loading="eager"
                className="w-full h-auto max-h-[600px] object-contain mx-auto"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `/assets/images/${activeProject.id === 'landing-page' ? 'project_landing_page.png' : activeProject.id === 'sales-funnel' ? 'project_sales_funnel.webp' : activeProject.id === 'brand-site' ? 'project_brand_site.png' : 'project_conversion_page.webp'}`;
                }}
              />

            <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed mb-6">
              {activeProject.description}
            </p>

            <div className="flex items-center justify-between gap-4 pt-4 border-t border-black/10 dark:border-zinc-800">
              <a
                href={activeProject.behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-black text-white font-display font-bold text-xs uppercase tracking-wider border-2 border-black neo-shadow-hover inline-flex items-center gap-2"
              >
                <span>Open Full Case Study On Behance</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={SITE_INFO.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-yellow-300 text-black font-display font-bold text-xs uppercase tracking-wider border-2 border-black neo-shadow-hover inline-flex items-center gap-2"
              >
                <span>Build Similar Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
