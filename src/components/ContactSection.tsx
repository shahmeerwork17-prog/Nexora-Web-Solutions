import { useEffect, useState, FormEvent } from 'react';
import { MessageCircle, CheckCircle2, ArrowRight, Phone } from 'lucide-react';

interface ContactSectionProps {
  prefillSubject?: string;
}

interface FormState {
  name: string;
  email: string;
  businessName: string;
  message: string;
}

export default function ContactSection({ prefillSubject }: ContactSectionProps) {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    businessName: '',
    message: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefillSubject) {
      setForm((prev) => ({
        ...prev,
        message: `Hi Nexora Web Solutions, I want a website similar to "${prefillSubject}".`,
      }));
      setSubmitted(false);
    }
  }, [prefillSubject]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const trimmedName = form.name.trim();
    const trimmedEmail = form.email.trim();
    const trimmedMessage = form.message.trim();

    if (!trimmedName) {
      setError('Please enter your name.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!trimmedMessage || trimmedMessage.length < 8) {
      setError('Please enter a brief message about your business website.');
      return;
    }

    setSubmitted(true);
  };

  const buildWhatsAppInquiryUrl = () => {
    const lines = [
      `Hello Nexora Web Solutions,`,
      `Name: ${form.name.trim() || 'Client'}`,
      form.businessName.trim() ? `Business: ${form.businessName.trim()}` : '',
      form.email.trim() ? `Email: ${form.email.trim()}` : '',
      form.message.trim() ? `Details: ${form.message.trim()}` : '',
    ].filter(Boolean);
    return `https://wa.me/923408417716?text=${encodeURIComponent(lines.join('\n'))}`;
  };

  return (
    <section
      id="contact"
      className="scroll-mt-16 relative bg-gradient-to-b from-[#050811] to-[#070D1C] text-white border-b border-slate-800/80 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 right-0 w-[520px] h-[520px] rounded-full bg-blue-600/15 blur-3xl"
      />

      <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Heading & Prominent WhatsApp CTA */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-sm font-semibold text-blue-400 mb-2">Get Started</p>
              <h2
                className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight mb-4"
                style={{ textWrap: 'balance' }}
              >
                Let&apos;s Build Your Website
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Have a business? Let&apos;s create a professional online presence for it.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0B1222] border border-slate-800 space-y-5">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-400">WhatsApp &amp; Direct Call</p>
                  <a
                    href="https://wa.me/923408417716"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xl font-semibold text-white hover:text-emerald-400 transition-colors tabular-nums"
                  >
                    03408417716
                  </a>
                </div>
              </div>

              <a
                href="https://wa.me/923408417716"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-lg shadow-emerald-950/40 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column: Compact Dark Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0B1222] border border-slate-800">
              {submitted ? (
                <div className="py-8 text-center space-y-5">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div className="space-y-2 max-w-md mx-auto">
                    <h3 className="font-display text-2xl font-bold text-white">
                      Message Ready
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Thank you, <span className="text-white font-semibold">{form.name}</span>. Click
                      below to send your project inquiry directly to us on WhatsApp.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <a
                      href={buildWhatsAppInquiryUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Send on WhatsApp
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: '', email: '', businessName: '', message: '' });
                      }}
                      className="px-4 py-3 text-sm font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors"
                    >
                      Edit Details
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-slate-200 mb-2">
                        Name <span className="text-blue-400">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-4 py-3 text-sm text-white placeholder-slate-500 bg-[#050811] border border-slate-700/90 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium text-slate-200 mb-2">
                        Email <span className="text-blue-400">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@business.com"
                        className="w-full px-4 py-3 text-sm text-white placeholder-slate-500 bg-[#050811] border border-slate-700/90 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-business" className="block text-sm font-medium text-slate-200 mb-2">
                      Business Name
                    </label>
                    <input
                      id="contact-business"
                      type="text"
                      value={form.businessName}
                      onChange={(e) => setForm({ ...form, businessName: e.target.value })}
                      placeholder="Your company or brand name"
                      className="w-full px-4 py-3 text-sm text-white placeholder-slate-500 bg-[#050811] border border-slate-700/90 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-slate-200 mb-2">
                      Message <span className="text-blue-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={3}
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us what kind of website you want to build..."
                      className="w-full px-4 py-3 text-sm text-white placeholder-slate-500 bg-[#050811] border border-slate-700/90 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-y"
                    />
                  </div>

                  {error && (
                    <div
                      role="alert"
                      className="px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/30 text-sm text-red-300"
                    >
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                  >
                    Send Inquiry
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
