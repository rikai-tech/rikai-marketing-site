'use client';
import { useState, useEffect } from 'react';

import NavBar from '@/components/NavBar';
import FooterSection from '@/components/FooterSection';
import BookDemoModal from '@/components/BookDemoModal';

import LAHero from '@/components/liveagent/LAHero';
import LAProblem from '@/components/liveagent/LAProblem';
import LAOneBrain from '@/components/liveagent/LAOneBrain';
import LANotAvatar from '@/components/liveagent/LANotAvatar';
import LAPillars from '@/components/liveagent/LAPillars';
import LAAction from '@/components/liveagent/LAAction';
import LAEscalation from '@/components/liveagent/LAEscalation';
import LAKnowledge from '@/components/liveagent/LAKnowledge';
import LAWhoFor from '@/components/liveagent/LAWhoFor';
import LACTA from '@/components/liveagent/LACTA';

// LiveAgent product page — storyline v5: the live demo now sits in the
// hero (no scrolling to reach it) with Problem -> One Agent/Multi-Channel/
// One Brain -> Not an Avatar -> Grounded -> Governed -> Traceable ->
// Action (Order Capture) -> Escalation -> Knowledge -> Who It's For -> CTA
// explaining what visitors just saw.
export default function LiveAgentPage() {
  const [showBookDemo, setShowBookDemo] = useState(false);

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

  const openBookDemo = () => setShowBookDemo(true);

  return (
    <>
      <NavBar onBookDemo={openBookDemo} activeProduct="liveagent" />
      <main>
        <LAHero onBookDemo={openBookDemo} />
        <LAProblem />
        <LAOneBrain />
        <LANotAvatar />
        <LAPillars />
        <LAAction />
        <LAEscalation />
        <LAKnowledge />
        <LAWhoFor />
        <LACTA onBookDemo={openBookDemo} />
      </main>
      <FooterSection />

      {showBookDemo && (
        <BookDemoModal
          product="LiveAgent"
          onClose={() => setShowBookDemo(false)}
        />
      )}
    </>
  );
}
