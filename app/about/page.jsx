'use client';
import { useState, useEffect } from 'react';

import NavBar from '@/components/NavBar';
import FooterSection from '@/components/FooterSection';
import BookDemoModal from '@/components/BookDemoModal';
import SLabel from '@/components/SLabel';

const BELIEFS = [
  { title: 'Speed of the question', body: 'Insights and answers should arrive at the speed of the question, not weeks later.', color: '#c4b5fd' },
  { title: 'A better hand-off', body: 'Automation should never mean losing the human thread — the goal is a better hand-off, not no hand-off.', color: '#818cf8' },
  { title: 'Your data is yours', body: 'Your research, your knowledge, your transcripts — always yours.', color: '#34d399' },
];

const PRODUCTS = [
  { name: 'Voice', tagline: 'Understand your customers, deeply and continuously.', href: '/products/voice', color: '#c4b5fd' },
  { name: 'LiveAgent', tagline: 'Be there for your customers, live, the moment they ask.', href: '/products/liveagent', color: '#818cf8' },
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

        {/* What we believe — grid */}
        <section className="section-pad" style={{ borderTop: '1px solid var(--border)', background: 'rgba(255,255,255,0.012)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <SLabel>What We Believe</SLabel>
              <h2 className="fu section-h2" style={{ fontFamily: 'var(--fh)', fontWeight: 700, letterSpacing: '-1px' }}>The principles behind both products</h2>
            </div>
            <div className="problem-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
              {BELIEFS.map((b, i) => (
                <div key={b.title} className={`fu d${i + 1}`} style={{ padding: '28px 24px', background: 'var(--card)', borderRadius: 'var(--r)', border: '1px solid var(--border)' }}>
                  <h3 style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 16, marginBottom: 10, color: b.color }}>{b.title}</h3>
                  <p style={{ fontSize: 13.5, color: 'var(--text-2)', lineHeight: 1.75 }}>{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our products */}
        <section className="section-pad">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <SLabel>Our Products</SLabel>
              <h2 className="fu section-h2" style={{ fontFamily: 'var(--fh)', fontWeight: 700, letterSpacing: '-1px' }}>Two products, one conviction</h2>
            </div>
            <div className="product-paths-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 56 }}>
              {PRODUCTS.map((p, i) => (
                <a key={p.name} href={p.href} className={`fu d${i + 1}`} style={{
                  display: 'block', padding: '32px 30px', borderRadius: 20, border: '1px solid var(--border)',
                  background: 'linear-gradient(160deg, rgba(255,255,255,0.03), rgba(255,255,255,0.005))',
                  textDecoration: 'none', transition: 'transform 0.2s, border-color 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = p.color + '50'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
                >
                  <h3 style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 20, marginBottom: 10, color: p.color }}>{p.name}</h3>
                  <p style={{ fontSize: 14.5, color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 16 }}>{p.tagline}</p>
                  <span style={{ fontSize: 13.5, fontFamily: 'var(--fh)', fontWeight: 600, color: 'var(--text-1)' }}>Learn more →</span>
                </a>
              ))}
            </div>

            <div className="fu" style={{ textAlign: 'center' }}>
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
