import { MessageCircle } from 'lucide-react';

const FOOTER_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Websites We Design', href: '#categories' },
  { label: 'Our Work', href: '#portfolio' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#03050B] text-slate-300">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 pt-12 pb-20 md:pb-14">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 border-b border-slate-800/80">
          <div className="space-y-1.5">
            <a
              href="#home"
              className="font-display text-lg font-bold tracking-tight text-white inline-block"
            >
              NEXORA <span className="text-blue-400 font-semibold">Web Solutions</span>
            </a>
            <p className="text-sm text-slate-400">
              Building Digital Experiences That Matter.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            {FOOTER_LINKS.map((link, index) => (
              <div key={link.href} className="flex items-center gap-5">
                <a
                  href={link.href}
                  className="text-slate-300 hover:text-white transition-colors whitespace-nowrap shrink-0"
                >
                  {link.label}
                </a>
                {index < FOOTER_LINKS.length - 1 && (
                  <span className="text-slate-700" aria-hidden="true">
                    |
                  </span>
                )}
              </div>
            ))}
          </nav>

          <a
            href="https://wa.me/923408417716"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp: </span>
            <span className="font-mono tabular-nums">03408417716</span>
          </a>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Nexora Web Solutions. All rights reserved.</p>
          <p>Modern Website Design &amp; Development</p>
        </div>
      </div>
    </footer>
  );
}
