import { Sparkles, Smartphone, BadgeDollarSign, Users } from 'lucide-react';
import { WHY_CHOOSE_CARDS, WhyChooseCard } from '../data/portfolioData';

function renderWhyIcon(name: WhyChooseCard['iconName']) {
  const cls = 'w-5 h-5 text-blue-400';
  switch (name) {
    case 'sparkles':
      return <Sparkles className={cls} />;
    case 'smartphone':
      return <Smartphone className={cls} />;
    case 'badge-dollar':
      return <BadgeDollarSign className={cls} />;
    case 'users':
      return <Users className={cls} />;
  }
}

export default function WhyChooseSection() {
  return (
    <section
      id="why-us"
      className="scroll-mt-16 bg-[#070B14] text-white border-b border-slate-800/80"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 py-16 sm:py-20">
        <div className="mb-10">
          <p className="text-sm font-semibold text-blue-400 mb-2">Agency Standard</p>
          <h2
            className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white"
            style={{ textWrap: 'balance' }}
          >
            Why Choose Us?
          </h2>
        </div>

        {/* Strictly 4 Small Icon-Based Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY_CHOOSE_CARDS.map((card) => (
            <div
              key={card.title}
              className="p-6 rounded-xl bg-[#0B1222] border border-slate-800/90 hover:border-blue-500/50 transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                {renderWhyIcon(card.iconName)}
              </div>
              <h3 className="font-display text-base font-semibold text-white mb-1.5">
                {card.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
