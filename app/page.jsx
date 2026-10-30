'use client';
import { useState, useEffect } from 'react';

import NavBar from '@/components/NavBar';
import PortfolioHero, { PhilosophyBand } from '@/components/home/PortfolioHero';
import HomeClosingCTA from '@/components/home/HomeClosingCTA';
import FooterSection from '@/components/FooterSection';
import BookDemoModal from '@/components/BookDemoModal';

// Portfolio homepage — rik.ai has two separate product lines (Voice and
// LiveAgent). The hero leads with both product tiles, then the shared
// philosophy that binds them under the brand.
export default function HomePage() {
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
      <NavBar onBookDemo={openBookDemo} />
      <main>
        <PortfolioHero />
        <PhilosophyBand />
        <HomeClosingCTA />
      </main>
      <FooterSection />

      {showBookDemo && (
        <BookDemoModal
          initialEmail={demoEmail}
          onClose={() => setShowBookDemo(false)}
        />
      )}
    </>
  );
}
