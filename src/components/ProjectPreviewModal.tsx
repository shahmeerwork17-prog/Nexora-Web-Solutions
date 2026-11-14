import { useEffect, useState } from 'react';
import { Monitor, Smartphone, X, ArrowRight } from 'lucide-react';
import { PortfolioProject } from '../data/portfolioData';
import ProjectMockupCanvas from './ProjectMockupCanvas';

interface ProjectPreviewModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onInquireSimilar: (projectTitle: string, category: string) => void;
}

export default function ProjectPreviewModal({
  project,
  onClose,
  onInquireSimilar,
}: ProjectPreviewModalProps) {
  const [viewport, setViewport] = useState<'desktop' | 'mobile'>('desktop');

  useEffect(() => {
    setViewport('desktop');
  }, [project?.id]);

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="preview-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#03050B]/90 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl rounded-2xl bg-[#0B1222] border border-slate-800 text-white shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-5 sm:px-7 py-4 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
              <span>{project.category}</span>
              <span aria-hidden="true">·</span>
              <span className="text-blue-400 font-medium">{project.statusLabel}</span>
            </div>
            <h3 id="preview-modal-title" className="font-display text-lg sm:text-xl font-bold text-white truncate">
              {project.title}
            </h3>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="inline-flex items-center p-1 rounded-lg bg-[#050811] border border-slate-800">
              <button
                type="button"
                onClick={() => setViewport('desktop')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                  viewport === 'desktop'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                Desktop
              </button>
              <button
                type="button"
                onClick={() => setViewport('mobile')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                  viewport === 'mobile'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                Mobile
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close website preview"
              className="w-10 h-10 inline-flex items-center justify-center rounded-lg bg-[#050811] hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Interactive Mockup Canvas */}
        <div className="p-5 sm:p-8 overflow-y-auto bg-[#050811] flex-1">
          <ProjectMockupCanvas project={project} viewport={viewport} />

          <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-300">
              {project.deliverables.map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="px-5 sm:px-7 py-4 border-t border-slate-800 bg-[#0B1222] flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            Agency {project.statusLabel.toLowerCase()} showcasing responsive layout &amp; design.
          </p>
          <button
            type="button"
            onClick={() => onInquireSimilar(project.title, project.category)}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            Build a Similar Website
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
