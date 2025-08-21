'use client';

// Simplified Lookbook with strict bounds and no animation frameworks
export default function Lookbook() {
  const blocks = [
      { src: '/images/lookbook/lookbook-1.jpg', caption: 'Cat Eye Collection - Elegant & Bold' },
  { src: '/images/lookbook/lookbook-2.jpg', caption: 'Round Frame Collection - Classic & Timeless' }
  ];

  return (
    <section style={{ backgroundColor: '#000', padding: '4rem 0' }}>
      <div
        style={{
          width: '100%',
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 2rem'
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {blocks.map((b) => (
            <div
              key={b.src}
              style={{
                position: 'relative',
                borderRadius: 14,
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.08)',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.00))'
              }}
            >
              <div style={{ width: '100%', aspectRatio: '16 / 9' }}>
                <img
                  src={b.src}
                  alt={b.caption}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: 12,
                  bottom: 12,
                  backgroundColor: 'rgba(0,0,0,0.6)',
                  color: '#fff',
                  padding: '8px 12px',
                  borderRadius: 6,
                  fontSize: 14,
                  maxWidth: '90%'
                }}
              >
                {b.caption}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
