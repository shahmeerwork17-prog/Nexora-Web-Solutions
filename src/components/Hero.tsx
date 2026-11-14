import { ArrowRight, MessageCircle } from 'lucide-react';
import heroMockupsImg from '../assets/images/hero_agency_mockups_1794661356449.jpg';

export default function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-16 relative bg-gradient-to-b from-[#050811] via-[#070D1B] to-[#050811] text-white overflow-hidden border-b border-slate-800/80"
    >
      {/* Subtle blue ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 w-[620px] h-[620px] rounded-full bg-blue-600/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-24 w-[460px] h-[460px] rounded-full bg-indigo-600/10 blur-3xl"
      />

      <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8 py-14 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Typographic Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="mb-5">
              <p className="font-display text-lg sm:text-xl font-bold tracking-wide text-white">
                NEXORA <span className="text-blue-400 font-medium">/ Web Solutions</span>
              </p>
            </div>

            <h1
              className="font-display font-bold tracking-tight text-white leading-[1.08] mb-6"
              style={{ fontSize: 'clamp(2.25rem, 4.1vw, 3.75rem)', textWrap: 'balance' }}
            >
              Websites That Make Your Business Stand Out.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mb-8">
              We create modern, professional and responsive websites for businesses of every size.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-lg shadow-lg shadow-blue-950/50 transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                Explore Our Work
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-100 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/90 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                <MessageCircle className="w-4 h-4 text-blue-400" />
                Contact Us
              </a>
            </div>
          </div>

          {/* Right Visual Mockup Column */}
          <div className="lg:col-span-6 flex items-stretch">
            <div className="relative w-full rounded-2xl overflow-hidden border border-slate-800 bg-[#0B1222] shadow-2xl shadow-blue-950/30 flex flex-col">
              <div className="relative flex-1 min-h-[280px] sm:min-h-[360px] lg:min-h-full">
                <img
                  src={heroMockupsImg}
                  alt="Desktop laptop and smartphone showcasing dark navy responsive website designs by Nexora Web Solutions"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#050811]/90 via-[#050811]/20 to-transparent"
                />
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-medium text-blue-300">
                      Responsive Web Design
                    </p>
                    <p className="text-sm sm:text-base font-display font-semibold text-white">
                      Built for Desktop, Tablet &amp; Mobile
                    </p>
                  </div>
                  <a
                    href="#categories"
                    className="text-xs font-semibold text-blue-300 hover:text-white transition-colors whitespace-nowrap shrink-0 underline underline-offset-4"
                  >
                    Explore Categories
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
