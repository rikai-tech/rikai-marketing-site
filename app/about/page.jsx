'use client';
import { useState, useEffect } from 'react';

import NavBar from '@/components/NavBar';
import FooterSection from '@/components/FooterSection';
import BookDemoModal from '@/components/BookDemoModal';
import SLabel from '@/components/SLabel';

export default function AboutPage() {
  const [showBookDemo, setShowBookDemo] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.fu:not(.vis)').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <NavBar onBookDemo={() => setShowBookDemo(true)} />
      <main>
        {/* Hero: headline left, listen/respond cards right */}
        <section className="section-pad" style={{ paddingTop: 140 }}>
          <div className="container not-avatar-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 64, alignItems: 'center' }}>
            <div className="fu">
              <SLabel>About rik.ai</SLabel>
              <h1 className="section-h2" style={{ fontFamily: 'var(--fh)', fontWeight: 700, letterSpacing: '-1px', marginBottom: 20, color: 'var(--text-1)' }}>
                Customer experience has two moments that matter.
              </h1>
              <p style={{ fontSize: 16.5, color: 'var(--text-2)', lineHeight: 1.8, marginBottom: 12 }}>
                rik.ai builds AI for both — understanding what customers think, and being there when they need an answer.
              </p>
            </div>

            <div className="fu d1" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ padding: '22px 26px', borderRadius: 16, border: '1px solid var(--border)', background: 'rgba(124,58,237,0.05)' }}>
                <p style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 17, color: '#c4b5fd', marginBottom: 8 }}>When you listen.</p>
                <p style={{ fontSize: 14.5, color: 'var(--text-2)', lineHeight: 1.7 }}>Understand what your customers think, need, and feel.</p>
              </div>
              <div style={{ padding: '22px 26px', borderRadius: 16, border: '1px solid var(--border)', background: 'rgba(79,110,247,0.06)' }}>
                <p style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 17, color: '#818cf8', marginBottom: 8 }}>When you respond.</p>
                <p style={{ fontSize: 14.5, color: 'var(--text-2)', lineHeight: 1.7 }}>Be there when they need an answer.</p>
              </div>
              <p style={{ fontSize: 15, color: 'var(--text-1)', fontFamily: 'var(--fh)', fontWeight: 600 }}>rik.ai builds AI for both.</p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section style={{ paddingBottom: 80 }}>
          <div className="container" style={{ maxWidth: 900 }}>
            <p className="fu" style={{ fontSize: 16, color: 'var(--text-2)', lineHeight: 1.85, marginBottom: 18 }}>
              rik.ai started with a simple observation: businesses were drowning in customer signal — surveys, reviews, support tickets, calls — and starving for what to do about it. We built Voice to turn that signal into decisions teams could act on the same day.
            </p>
            <p className="fu d1" style={{ fontSize: 16, color: 'var(--text-2)', lineHeight: 1.85, marginBottom: 18 }}>
              The more we talked to customers, the clearer a second gap became: understanding your customers is only half the job. The other half is showing up for them, in the moment they need you — with an answer, not a queue. That&apos;s LiveAgent: an AI support agent that lives on your website, grounded in your own knowledge, that resolves what it can and hands off to a person when it should.
            </p>
            <p className="fu d2" style={{ fontSize: 16, color: 'var(--text-2)', lineHeight: 1.85 }}>
              Both products share the same conviction: AI should make customer understanding and customer care faster and more human, not more automated-feeling. Real conversations. Real knowledge. Decisions and resolutions your team can actually stand behind.
            </p>
          </div>
        </section>

        {/* Closing */}
        <section style={{ padding: '0 0 120px' }}>
          <div className="container">
            <div className="fu" style={{ textAlign: 'center', paddingTop: 48, borderTop: '1px solid var(--border)' }}>
              <p style={{ fontSize: 14, color: 'rgba(167,139,250,0.6)', marginBottom: 28 }}>Inspired by knowledge. Built for clarity.</p>
              <a href="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 28px', borderRadius: 12, background: 'var(--grad)', color: '#fff', fontFamily: 'var(--fh)', fontWeight: 600, fontSize: 14.5 }}>See our products →</a>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />

      {showBookDemo && <BookDemoModal onClose={() => setShowBookDemo(false)} />}
    </>
  );
}
