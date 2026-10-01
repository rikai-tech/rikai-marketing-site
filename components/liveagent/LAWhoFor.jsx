import SLabel from '@/components/SLabel';

const VERTICALS = [
  { title: 'E-commerce', tagline: 'Answer order questions before they become refund requests.', color: '#818cf8' },
  { title: 'SaaS Support', tagline: 'Deflect the tickets your docs already answer.', color: '#a78bfa' },
  { title: 'Travel & Local Services', tagline: "Someone's always awake and asking a question. Now someone's always answering.", color: '#34d399' },
  { title: 'Education & Real Estate', tagline: "The first conversation shouldn't wait for office hours.", color: '#f59e0b' },
];

export default function LAWhoFor() {
  return (
    <section id="who-for" className="section-pad">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <SLabel>Who It&apos;s For</SLabel>
          <h2 className="fu section-h2" style={{ fontFamily: 'var(--fh)', fontWeight: 700, letterSpacing: '-1px', lineHeight: 1.15 }}>
            Built for any business<br /><span className="gt">whose customers ask questions online</span>
          </h2>
        </div>
        <div className="problem-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {VERTICALS.map((v, i) => (
            <div key={v.title} className={`fu d${i + 1}`} style={{ padding: '26px 22px', borderRadius: 16, background: 'var(--card)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 15.5, marginBottom: 10, color: v.color }}>{v.title}</h3>
              <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.7 }}>{v.tagline}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
