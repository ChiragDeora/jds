'use client';

export default function MissionBanner() {
  return (
    <section
      style={{
        position: 'relative',
        background: 'linear-gradient(135deg, #ffffff 0%, #f5f7f9 60%, #ffffff 100%)',
        color: '#111',
        padding: '5rem 2rem',
        borderTop: '1px solid rgba(0,0,0,0.06)',
        borderBottom: '1px solid rgba(0,0,0,0.06)'
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '3rem' }}>
        <div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.15, margin: 0 }}>
            See more. Be more.
          </h2>
          <p style={{ marginTop: '1rem', color: 'rgba(0,0,0,0.72)', fontSize: '1.1rem' }}>
          From everyday comfort to precise optics, our frames are crafted with premium materials and a focus on fit. Lenses are cut to prescription with UV400 protection, anti-glare, and smudge-resistant coatings. Adjustable nose pads and temple tips ensure even weight distribution, reducing pressure points during long wear. Each pair is carefully assembled, aligned, and optically centred to deliver crisp clarity all day.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: '1rem 0 0', display: 'grid', gap: '0.5rem' }}>
            <li style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
              <span style={{ color: '#26A9E0', fontWeight: 700 }}>•</span>
              <span>Premium acetates and aerospace‑grade metals, hand‑polished for a lasting finish.</span>
            </li>
            <li style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
              <span style={{ color: '#26A9E0', fontWeight: 700 }}>•</span>
              <span>UV400, anti‑glare and oleophobic lens coatings for protection and clarity.</span>
            </li>
            <li style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
              <span style={{ color: '#26A9E0', fontWeight: 700 }}>•</span>
              <span>Balanced geometry, adjustable pads and temples for pressure‑free all‑day wear.</span>
            </li>
            <li style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
              <span style={{ color: '#26A9E0', fontWeight: 700 }}>•</span>
              <span>Assembled and optically centred to your prescription for precise vision.</span>
            </li>
          </ul>
        </div>
        <div style={{ alignSelf: 'center' }}>
          <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 14px 32px rgba(0,0,0,0.10)' }}>
            <img src="/images/hero/hero-glasses.jpg" alt="Precision‑fit eyewear" style={{ width: '100%', height: 260, objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
      </div>
    </section>
  );
}


