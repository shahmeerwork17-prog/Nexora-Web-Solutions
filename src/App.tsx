import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoriesSection from './components/CategoriesSection';
import PortfolioSection from './components/PortfolioSection';
import WhyChooseSection from './components/WhyChooseSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectPreviewModal from './components/ProjectPreviewModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { PortfolioProject, WebsiteCategoryId } from './data/portfolioData';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<WebsiteCategoryId>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [inquirySubject, setInquirySubject] = useState<string>('');

  const handleSelectCategory = (categoryId: WebsiteCategoryId) => {
    setActiveCategory(categoryId);
    const portfolioEl = document.getElementById('portfolio');
    if (portfolioEl) {
      portfolioEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInquireSimilar = (projectTitle: string, category: string) => {
    setSelectedProject(null);
    setInquirySubject(`${projectTitle} (${category})`);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#050811] text-slate-100">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <CategoriesSection onSelectCategory={handleSelectCategory} />
        <PortfolioSection
          activeCategory={activeCategory}
          onChangeCategory={setActiveCategory}
          onSelectProject={setSelectedProject}
        />
        <WhyChooseSection />
        <ContactSection prefillSubject={inquirySubject} />
      </main>

      <Footer />

      <FloatingWhatsApp />

      <ProjectPreviewModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquireSimilar={handleInquireSimilar}
      />
    </div>
  );
}
