import {
  Building2,
  HeartPulse,
  Scissors,
  Car,
  ShoppingBag,
  Factory,
  ArrowUpRight,
} from 'lucide-react';
import {
  WEBSITE_CATEGORIES,
  WebsiteCategory,
  WebsiteCategoryId,
} from '../data/portfolioData';

interface CategoriesSectionProps {
  onSelectCategory: (categoryId: WebsiteCategoryId) => void;
}

function renderCategoryIcon(name: WebsiteCategory['iconName']) {
  const cls = 'w-5 h-5 text-blue-400';
  switch (name) {
    case 'building':
      return <Building2 className={cls} />;
    case 'heart-pulse':
      return <HeartPulse className={cls} />;
    case 'scissors':
      return <Scissors className={cls} />;
    case 'car':
      return <Car className={cls} />;
    case 'shopping-bag':
      return <ShoppingBag className={cls} />;
    case 'factory':
      return <Factory className={cls} />;
  }
}

export default function CategoriesSection({ onSelectCategory }: CategoriesSectionProps) {
  return (
    <section
      id="categories"
      className="scroll-mt-16 relative bg-[#070B14] text-white border-b border-slate-800/80 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[720px] h-[280px] bg-blue-600/10 blur-3xl rounded-full"
      />

      <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8 py-16 sm:py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-sm font-semibold text-blue-400 mb-2">Industries We Serve</p>
            <h2
              className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white"
              style={{ textWrap: 'balance' }}
            >
              Websites We Design
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-400 max-w-md">
            Select a category to view tailored website designs for your industry.
          </p>
        </div>

        {/* 6 Boxed Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WEBSITE_CATEGORIES.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => onSelectCategory(category.id)}
              className="group text-left rounded-2xl bg-[#0B1222] border border-slate-800/90 hover:border-blue-500/60 overflow-hidden transition-all duration-200 hover:-translate-y-1 flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              {/* Visual Preview: Multi-image grid for E-commerce (4) & Car Wash (3), clean single shot for others */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#060A13]">
                {category.gallery && category.gallery.length === 4 ? (
                  <div className="grid grid-cols-2 grid-rows-2 gap-1.5 p-1.5 w-full h-full">
                    {category.gallery.map((item) => (
                      <div
                        key={item.label}
                        className="relative overflow-hidden rounded-lg bg-slate-900"
                      >
                        <img
                          src={item.image}
                          alt={item.alt}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 bg-gradient-to-t from-[#060A13]/75 via-transparent to-transparent"
                        />
                        <span className="absolute bottom-1.5 right-2 text-[10px] font-medium text-slate-200">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : category.gallery && category.gallery.length === 3 ? (
                  <div className="grid grid-cols-12 grid-rows-2 gap-1.5 p-1.5 w-full h-full">
                    <div className="col-span-7 row-span-2 relative overflow-hidden rounded-lg bg-slate-900">
                      <img
                        src={category.gallery[0].image}
                        alt={category.gallery[0].alt}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="col-span-5 row-span-1 relative overflow-hidden rounded-lg bg-slate-900">
                      <img
                        src={category.gallery[1].image}
                        alt={category.gallery[1].alt}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="col-span-5 row-span-1 relative overflow-hidden rounded-lg bg-slate-900">
                      <img
                        src={category.gallery[2].image}
                        alt={category.gallery[2].alt}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                ) : (
                  <img
                    src={category.image}
                    alt={category.imageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                )}

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1222]/80 via-transparent to-transparent"
                />
                <div className="absolute bottom-3 left-4 w-10 h-10 rounded-lg bg-[#050811]/90 border border-slate-700/80 flex items-center justify-center backdrop-blur-sm">
                  {renderCategoryIcon(category.iconName)}
                </div>
              </div>

              {/* Card Title & Simple Description */}
              <div className="p-6 flex-1 flex flex-col justify-between gap-4 w-full">
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg sm:text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {category.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 shrink-0 mt-1 transition-colors" />
                  </div>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
