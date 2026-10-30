'use client';

export default function ProductTile({ product, headline, description, href, cta, accent, accentSoft, media, className = '' }) {
  return (
    <a href={href} className={`product-tile ${className}`} style={{ '--accent': accent, '--accent-soft': accentSoft }}>
      <div className="product-tile-media">{media}</div>
      <div className="product-tile-body">
        <span style={{ fontSize: 12, fontWeight: 700, color: accent, fontFamily: 'var(--fh)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{product}</span>
        <h2 style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 34, letterSpacing: '-0.8px', lineHeight: 1.1, margin: '8px 0 10px', color: 'var(--text-1)' }}>{headline}</h2>
        <p style={{ fontSize: 15.5, color: 'var(--text-2)', lineHeight: 1.65, marginBottom: 20 }}>{description}</p>
        <span className="product-tile-cta">{cta} <span className="arrow">→</span></span>
      </div>
    </a>
  );
}
