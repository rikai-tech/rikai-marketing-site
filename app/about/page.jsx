'use client';
import { useState, useEffect } from 'react';

import NavBar from '@/components/NavBar';
import FooterSection from '@/components/FooterSection';
import BookDemoModal from '@/components/BookDemoModal';
import SLabel from '@/components/SLabel';

const BELIEFS = [
  'Insights and answers should arrive at the speed of the question, not weeks later.',
  'Automation should never mean losing the human thread — the goal is a better handoff, not no handoff.',
  'Your data — your research, your knowledge, your transcripts — is yours.',
];

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
        <section className="section-pad" style={{ paddingTop: 140 }}>
          <div className="container fu" style={{ maxWidth: 720 }}>
            <SLabel>About rik.ai</SLabel>
            <h1 className="section-h2" style={{ fontFamily: 'var(--fh)', fontWeight: 700, letterSpacing: '-1px', marginBottom: 28, color: 'var(--text-1)' }}>
              Customer experience has two moments that matter.
            </h1>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginBottom: 40 }}>
              <div style={{ padding: '20px 24px', borderRadius: 14, border: '1px solid var(--border)', background: 'rgba(124,58,237,0.04)' }}>
                <p style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 16, color: '#c4b5fd', marginBottom: 6 }}>When you listen.</p>
                <p style={{ fontSize: 15, color: 'var(--text-2)', lineHeight: 1.7 }}>Understand what your customers think, need, and feel.</p>
              </div>
              <div style={{ padding: '20px 24px', borderRadius: 14, border: '1px solid var(--border)', background: 'rgba(79,110,247,0.05)' }}>
                <p style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 16, color: '#818cf8', marginBottom: 6 }}>When you respond.</p>
                <p style={{ fontSize: 15, color: 'var(--text-2)', lineHeight: 1.7 }}>Be there when they need an answer.</p>
              </div>
            </div>

            <p style={{ fontSize: 17, color: 'var(--text-1)', fontFamily: 'var(--fh)', fontWeight: 600, marginBottom: 48 }}>rik.ai builds AI for both.</p>

            <p style={{ fontSize: 16, color: 'var(--text-2)', lineHeight: 1.85, marginBottom: 18 }}>
              rik.ai started with a simple observation: businesses were drowning in customer signal — surveys, reviews, support tickets, calls — and starving for what to do about it. We built Market Research to turn that signal into decisions teams could act on the same day.
            </p>
            <p style={{ fontSize: 16, color: 'var(--text-2)', lineHeight: 1.85, marginBottom: 18 }}>
              The more we talked to customers, the clearer a second gap became: understanding your customers is only half the job. The other half is showing up for them, in the moment they need you — with an answer, not a queue. That&apos;s LiveAgent: an AI support agent that lives on your website, grounded in your own knowledge, that resolves what it can and hands off to a person when it should.
            </p>
            <p style={{ fontSize: 16, color: 'var(--text-2)', lineHeight: 1.85, marginBottom: 48 }}>
              Both products share the same conviction: AI should make customer understanding and customer care faster and more human, not more automated-feeling. Real conversations. Real knowledge. Decisions and resolutions your team can actually stand behind.
            </p>

            <p style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 14, color: 'var(--text-1)', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.04em' }}>What we believe</p>
            <ul style={{ margin: '0 0 48px', padding: 0, listStyle: 'none' }}>
              {BELIEFS.map(b => (
                <li key={b} style={{ display: 'flex', gap: 12, marginBottom: 12, fontSize: 15, color: 'var(--text-2)', lineHeight: 1.7 }}>
                  <span style={{ color: 'var(--purple-light)', flexShrink: 0 }}>—</span>{b}
                </li>
              ))}
            </ul>

            <p style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 14, color: 'var(--text-1)', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Our products</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 48 }}>
              <p style={{ fontSize: 15.5, color: 'var(--text-2)' }}><strong style={{ color: 'var(--text-1)' }}>Market Research</strong> — understand your customers, deeply and continuously.</p>
              <p style={{ fontSize: 15.5, color: 'var(--text-2)' }}><strong style={{ color: 'var(--text-1)' }}>LiveAgent</strong> — be there for your customers, live, the moment they ask.</p>
            </div>

            <p style={{ fontSize: 14, color: 'rgba(167,139,250,0.6)', marginBottom: 40 }}>Inspired by knowledge. Built for clarity.</p>

            <a href="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 28px', borderRadius: 12, background: 'var(--grad)', color: '#fff', fontFamily: 'var(--fh)', fontWeight: 600, fontSize: 14.5 }}>See our products →</a>
          </div>
        </section>
      </main>
      <FooterSection />

      {showBookDemo && <BookDemoModal onClose={() => setShowBookDemo(false)} />}
    </>
  );
}
