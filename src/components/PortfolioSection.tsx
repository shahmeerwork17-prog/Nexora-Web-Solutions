import { ArrowUpRight } from 'lucide-react';
import {
  PORTFOLIO_PROJECTS,
  PortfolioProject,
  WEBSITE_CATEGORIES,
  WebsiteCategoryId,
} from '../data/portfolioData';
import ProjectMockupCanvas from './ProjectMockupCanvas';

interface PortfolioSectionProps {
  activeCategory: WebsiteCategoryId;
  onChangeCategory: (categoryId: WebsiteCategoryId) => void;
  onSelectProject: (project: PortfolioProject) => void;
}

export default function PortfolioSection({
  activeCategory,
  onChangeCategory,
  onSelectProject,
}: PortfolioSectionProps) {
  const filteredProjects =
    activeCategory === 'all'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((project) => project.categoryId === activeCategory);

  return (
    <section
      id="portfolio"
      className="scroll-mt-16 bg-[#050811] text-white border-b border-slate-800/80"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 py-16 sm:py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-sm font-semibold text-blue-400 mb-2">Our Portfolio</p>
            <h2
              className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white"
              style={{ textWrap: 'balance' }}
            >
              Our Recent Work
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-400 max-w-md">
            Interactive concept designs and demo websites crafted across industries.
          </p>
        </div>

        {/* Category Filter Bar */}
        <div
          role="tablist"
          aria-label="Filter recent work by category"
          className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-10 border-b border-slate-800/80"
        >
          <button
            role="tab"
            type="button"
            aria-selected={activeCategory === 'all'}
            onClick={() => onChangeCategory('all')}
            className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
              activeCategory === 'all'
                ? 'bg-blue-600 text-white'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            All Designs
          </button>

          {WEBSITE_CATEGORIES.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                role="tab"
                type="button"
                aria-selected={isActive}
                onClick={() => onChangeCategory(category.id)}
                className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                {category.shortLabel}
              </button>
            );
          })}
        </div>

        {/* Visual Website Design Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group rounded-2xl bg-[#0B1222] border border-slate-800/90 hover:border-blue-500/50 overflow-hidden transition-all duration-200 hover:-translate-y-0.5 flex flex-col"
            >
              {/* Website Preview Frame */}
              <div className="p-4 sm:p-5 bg-[#070B14] border-b border-slate-800/80">
                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  aria-label={`View ${project.title} website preview`}
                  className="w-full text-left cursor-pointer transition-transform duration-200 group-hover:scale-[1.01] rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <ProjectMockupCanvas project={project} viewport="desktop" compact />
                </button>
              </div>

              {/* Concise Footer: Project Name, Category & View Website CTA */}
              <div className="p-5 sm:p-6 flex flex-wrap items-center justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                    <span>{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-blue-400 font-medium">{project.statusLabel}</span>
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white truncate">
                    {project.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  View Website
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
