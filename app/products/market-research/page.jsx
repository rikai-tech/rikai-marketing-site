'use client';
import { useState, useEffect } from 'react';

import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import ShiftSection from '@/components/ShiftSection';
import CapabilitiesSection from '@/components/CapabilitiesSection';
import AskRishiSection from '@/components/AskRishiSection';
import UnderstandingSection from '@/components/UnderstandingSection';
import PersonasSection from '@/components/PersonasSection';
import ProductPreviewSection from '@/components/ProductPreviewSection';
import TrustSection from '@/components/TrustSection';
import UseCasesSection from '@/components/UseCasesSection';
import CTASection from '@/components/CTASection';
import FooterSection from '@/components/FooterSection';
import BookDemoModal from '@/components/BookDemoModal';

// Market Research product page — content retained as-is from the original
// single-product homepage (see the redesign proposal, §5: "Retained as-is").
// Only the nav/footer around it changed to reflect the new two-product IA.
export default function MarketResearchPage() {
  const [showBookDemo, setShowBookDemo] = useState(false);
  const [demoEmail, setDemoEmail] = useState('');

  const openBookDemo = (email = '') => {
    setDemoEmail(email);
    setShowBookDemo(true);
  };

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    const attach = () => document.querySelectorAll('.fu:not(.vis)').forEach(el => obs.observe(el));
    attach();
    const t = setInterval(attach, 600);
    setTimeout(() => clearInterval(t), 8000);
    return () => { obs.disconnect(); clearInterval(t); };
  }, []);

  return (
    <>
      <NavBar onBookDemo={openBookDemo} activeProduct="market-research" />
      <main>
        <HeroSection onBookDemo={openBookDemo} />
        <ProblemSection />
        <ShiftSection />
        <CapabilitiesSection />
        <AskRishiSection />
        <UnderstandingSection />
        <PersonasSection />
        <ProductPreviewSection />
        <TrustSection />
        <UseCasesSection />
        <CTASection onBookDemo={openBookDemo} />
      </main>
      <FooterSection />

      {showBookDemo && (
        <BookDemoModal
          initialEmail={demoEmail}
          product="Market Research"
          onClose={() => setShowBookDemo(false)}
        />
      )}
    </>
  );
}
