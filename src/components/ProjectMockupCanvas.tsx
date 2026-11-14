import { PortfolioProject } from '../data/portfolioData';

interface ProjectMockupCanvasProps {
  project: PortfolioProject;
  viewport?: 'desktop' | 'mobile';
  compact?: boolean;
}

export default function ProjectMockupCanvas({
  project,
  viewport = 'desktop',
  compact = false,
}: ProjectMockupCanvasProps) {
  const isMobile = viewport === 'mobile';

  const renderInnerWebsite = () => {
    switch (project.categoryId) {
      case 'real-estate':
        return (
          <div className="bg-[#090F1D] text-white h-full flex flex-col">
            <div className="px-4 py-2.5 border-b border-slate-800 flex items-center justify-between text-[11px]">
              <span className="font-display font-bold tracking-wide text-white">VANGUARD</span>
              {!isMobile && (
                <div className="flex items-center gap-3 text-slate-400">
                  {project.mockupNav.map((n) => (
                    <span key={n}>{n}</span>
                  ))}
                </div>
              )}
              <span className="px-2.5 py-0.5 bg-blue-600 text-white rounded text-[10px] font-medium">
                Book Tour
              </span>
            </div>

            <div className="relative overflow-hidden">
              <div className={compact ? 'h-40' : 'h-56'}>
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#090F1D] via-[#090F1D]/45 to-transparent flex items-end p-4">
                <div className="flex flex-wrap items-end justify-between gap-2 w-full">
                  <div className="max-w-[75%]">
                    <p className="text-[10px] text-blue-300 font-medium">Featured Residences</p>
                    <h4
                      className={`font-display font-bold text-white leading-tight ${
                        compact ? 'text-sm' : 'text-lg'
                      }`}
                    >
                      {project.mockupHeadline}
                    </h4>
                  </div>
                  <span className="px-2.5 py-1 bg-blue-600 text-white text-[10px] font-semibold rounded">
                    {project.mockupCta}
                  </span>
                </div>
              </div>
            </div>

            <div
              className={`p-3.5 grid ${
                isMobile ? 'grid-cols-1 gap-2' : 'grid-cols-3 gap-2.5'
              } flex-1`}
            >
              {project.mockupHighlights.map((item) => (
                <div key={item.label} className="p-2.5 rounded bg-slate-900/90 border border-slate-800">
                  <p className="text-[11px] font-semibold text-white">{item.label}</p>
                  <p className="text-[10px] text-slate-400 mt-0.5 leading-snug">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'healthcare':
        return (
          <div className="bg-[#0B1622] text-white h-full flex flex-col">
            <div className="px-4 py-2.5 bg-[#0E1C2B] border-b border-teal-500/20 flex items-center justify-between text-[11px]">
              <span className="font-display font-bold text-teal-300">Clarity Health</span>
              {!isMobile && (
                <div className="flex items-center gap-3 text-slate-300">
                  {project.mockupNav.map((n) => (
                    <span key={n}>{n}</span>
                  ))}
                </div>
              )}
              <span className="px-2.5 py-0.5 bg-teal-600 text-white rounded text-[10px] font-medium">
                Book Visit
              </span>
            </div>

            <div className="relative overflow-hidden">
              <div className={compact ? 'h-40' : 'h-56'}>
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#07131D]/90 via-[#07131D]/60 to-transparent flex items-center p-4">
                <div className="max-w-[78%] space-y-1.5">
                  <p className="text-[10px] font-medium text-teal-300">
                    Primary &amp; Specialist Care
                  </p>
                  <h4
                    className={`font-display font-bold leading-tight text-white ${
                      compact ? 'text-sm' : 'text-lg'
                    }`}
                  >
                    {project.mockupHeadline}
                  </h4>
                  <span className="inline-block mt-1 px-2.5 py-1 bg-teal-500 text-slate-950 text-[10px] font-semibold rounded">
                    {project.mockupCta}
                  </span>
                </div>
              </div>
            </div>

            <div
              className={`p-3.5 grid ${
                isMobile ? 'grid-cols-1 gap-2' : 'grid-cols-3 gap-2.5'
              } flex-1`}
            >
              {project.mockupHighlights.map((item) => (
                <div
                  key={item.label}
                  className="p-2.5 rounded bg-[#0F2030] border border-teal-500/20"
                >
                  <p className="text-[11px] font-semibold text-teal-200">{item.label}</p>
                  <p className="text-[10px] text-slate-400 mt-0.5 leading-snug">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'barber-salon':
        return (
          <div className="bg-[#120E0C] text-stone-100 h-full flex flex-col">
            <div className="px-4 py-2.5 border-b border-amber-500/20 flex items-center justify-between text-[11px]">
              <span className="font-display font-bold tracking-wider text-amber-300">
                CROWN &amp; BLADE
              </span>
              {!isMobile && (
                <div className="flex items-center gap-3 text-stone-400">
                  {project.mockupNav.map((n) => (
                    <span key={n}>{n}</span>
                  ))}
                </div>
              )}
              <span className="px-2.5 py-0.5 bg-amber-500 text-stone-950 rounded text-[10px] font-semibold">
                Reserve
              </span>
            </div>

            <div className="relative overflow-hidden">
              <div className={compact ? 'h-40' : 'h-56'}>
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#120E0C] via-[#120E0C]/50 to-transparent flex items-end p-4">
                <div className="flex flex-wrap items-end justify-between gap-2 w-full">
                  <div>
                    <p className="text-[10px] text-amber-300 font-medium">Men&apos;s Grooming Studio</p>
                    <h4
                      className={`font-display font-bold text-white leading-tight ${
                        compact ? 'text-sm' : 'text-lg'
                      }`}
                    >
                      {project.mockupHeadline}
                    </h4>
                  </div>
                  <span className="px-3 py-1 bg-amber-500 text-stone-950 text-[10px] font-semibold rounded">
                    {project.mockupCta}
                  </span>
                </div>
              </div>
            </div>

            <div
              className={`p-3.5 grid ${
                isMobile ? 'grid-cols-1 gap-2' : 'grid-cols-3 gap-2.5'
              } flex-1`}
            >
              {project.mockupHighlights.map((item) => (
                <div
                  key={item.label}
                  className="p-2.5 rounded bg-stone-900/90 border border-amber-500/20"
                >
                  <p className="text-[11px] font-semibold text-amber-200">{item.label}</p>
                  <p className="text-[10px] text-stone-400 mt-0.5 leading-snug">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'automotive': {
        const carGallery = project.gallery || [];
        return (
          <div className="bg-[#080B12] text-white h-full flex flex-col">
            <div className="px-4 py-2.5 border-b border-blue-500/20 flex items-center justify-between text-[11px]">
              <span className="font-display font-bold tracking-wider text-white">
                APEX DETAILING
              </span>
              {!isMobile && (
                <div className="flex items-center gap-3 text-slate-400">
                  {project.mockupNav.map((n) => (
                    <span key={n}>{n}</span>
                  ))}
                </div>
              )}
              <span className="px-2.5 py-0.5 bg-blue-600 text-white rounded text-[10px] font-semibold">
                Book Wash
              </span>
            </div>

            {/* Clean headline strip + 3 balanced detailing images */}
            <div className="px-4 pt-3.5 pb-2.5 flex flex-wrap items-center justify-between gap-2 bg-[#0A101D] border-b border-slate-800/80">
              <div>
                <p className="text-[10px] text-sky-400 font-medium">Car Wash &amp; Ceramic Studio</p>
                <h4
                  className={`font-display font-bold text-white leading-tight ${
                    compact ? 'text-sm' : 'text-base'
                  }`}
                >
                  {project.mockupHeadline}
                </h4>
              </div>
              <span className="px-2.5 py-1 bg-sky-500 text-slate-950 text-[10px] font-semibold rounded">
                {project.mockupCta}
              </span>
            </div>

            <div
              className={`p-3.5 grid ${
                isMobile ? 'grid-cols-1 gap-2.5' : 'grid-cols-3 gap-2.5'
              } flex-1`}
            >
              {carGallery.map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg overflow-hidden bg-slate-900/90 border border-slate-800 flex flex-col"
                >
                  <div className={compact ? 'aspect-[4/3]' : 'aspect-[4/3]'}>
                    <img
                      src={item.image}
                      alt={item.alt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="px-2.5 py-2">
                    <p className="text-[11px] font-semibold text-sky-300">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      }

      case 'ecommerce': {
        const productGallery = project.gallery || [];
        return (
          <div className="bg-[#0B0D12] text-white h-full flex flex-col">
            <div className="px-4 py-2.5 border-b border-white/10 flex items-center justify-between text-[11px]">
              <span className="font-display font-bold tracking-widest text-white">VESPERA</span>
              {!isMobile && (
                <div className="flex items-center gap-3 text-slate-400">
                  {project.mockupNav.map((n) => (
                    <span key={n}>{n}</span>
                  ))}
                </div>
              )}
              <span className="text-[10px] font-medium text-blue-300">Shop Now</span>
            </div>

            {/* Clean storefront banner bar + 4 balanced product category cards */}
            <div className="px-4 pt-3.5 pb-2.5 flex flex-wrap items-center justify-between gap-2 bg-[#0F131C] border-b border-white/10">
              <div>
                <p className="text-[10px] text-blue-300 font-medium">Featured Collections</p>
                <h4
                  className={`font-display font-bold text-white leading-tight ${
                    compact ? 'text-sm' : 'text-base'
                  }`}
                >
                  {project.mockupHeadline}
                </h4>
              </div>
              <span className="px-2.5 py-1 bg-blue-600 text-white text-[10px] font-semibold rounded">
                {project.mockupCta}
              </span>
            </div>

            <div
              className={`p-3.5 grid ${
                isMobile ? 'grid-cols-2 gap-2.5' : 'grid-cols-4 gap-2.5'
              } flex-1`}
            >
              {productGallery.map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg overflow-hidden bg-white/[0.04] border border-white/10 flex flex-col"
                >
                  <div className="aspect-[4/3] bg-slate-900 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.alt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="px-2.5 py-2">
                    <p className="text-[11px] font-semibold text-white truncate">{item.label}</p>
                    {item.priceOrTag && (
                      <p className="text-[10px] text-slate-400 truncate">{item.priceOrTag}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      }

      case 'industrial':
        return (
          <div className="bg-[#0A111E] text-white h-full flex flex-col">
            <div className="px-4 py-2.5 bg-[#0D1729] border-b border-slate-800 flex items-center justify-between text-[11px]">
              <span className="font-display font-bold tracking-tight text-white">
                AL-NOOR TEXTILES
              </span>
              {!isMobile && (
                <div className="flex items-center gap-3 text-slate-400">
                  {project.mockupNav.map((n) => (
                    <span key={n}>{n}</span>
                  ))}
                </div>
              )}
              <span className="px-2.5 py-0.5 bg-blue-600 text-white rounded text-[10px] font-medium">
                Get Quote
              </span>
            </div>

            <div
              className={`grid ${
                isMobile ? 'grid-cols-1' : 'grid-cols-12'
              } gap-3 p-4 items-center bg-[#0D1627] border-b border-slate-800`}
            >
              <div className={isMobile ? '' : 'col-span-6 space-y-1.5'}>
                <p className="text-[10px] font-semibold text-blue-400">Textile Manufacturing</p>
                <h4
                  className={`font-display font-bold text-white leading-tight ${
                    compact ? 'text-sm' : 'text-lg'
                  }`}
                >
                  {project.mockupHeadline}
                </h4>
                <p className="text-[11px] text-slate-300 leading-snug">{project.mockupSubhead}</p>
                <div className="pt-1">
                  <span className="inline-block px-2.5 py-1 bg-blue-600 text-white text-[10px] font-semibold rounded">
                    {project.mockupCta}
                  </span>
                </div>
              </div>
              <div className={isMobile ? 'mt-2' : 'col-span-6'}>
                <div className="aspect-[16/10] rounded-lg overflow-hidden border border-slate-700/80">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div
              className={`p-3.5 grid ${
                isMobile ? 'grid-cols-1 gap-2' : 'grid-cols-3 gap-2.5'
              } flex-1`}
            >
              {project.mockupHighlights.map((item) => (
                <div
                  key={item.label}
                  className="p-2.5 rounded bg-slate-900/90 border border-slate-800"
                >
                  <p className="text-[11px] font-semibold text-blue-300">{item.label}</p>
                  <p className="text-[10px] text-slate-400 mt-0.5 leading-snug">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <div
      className={`rounded-xl overflow-hidden border border-slate-700/80 shadow-xl bg-[#050811] ${
        isMobile ? 'max-w-[340px] mx-auto border-[6px] border-slate-800 rounded-[28px]' : 'w-full'
      }`}
    >
      {isMobile ? (
        <div className="bg-slate-900 px-4 py-2 flex items-center justify-between text-[10px] text-slate-400">
          <span className="font-mono">9:41</span>
          <div className="w-16 h-3 rounded-full bg-slate-800" />
          <span className="font-mono">5G</span>
        </div>
      ) : (
        <div className="bg-[#080D1A] px-3.5 py-2 border-b border-slate-800 flex items-center gap-3">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
          </div>
          <div className="flex-1 bg-slate-900 rounded px-2.5 py-0.5 text-[10px] font-mono text-slate-400 truncate">
            {project.domainUrl}
          </div>
        </div>
      )}

      <div className={isMobile ? 'min-h-[420px]' : ''}>{renderInnerWebsite()}</div>
    </div>
  );
}
