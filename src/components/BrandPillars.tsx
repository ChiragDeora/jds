'use client';

export default function BrandPillars() {
  const pillars = [
    {
      icon: '/file.svg',
      title: 'Design',
      text: 'Timeless silhouettes refined with modern ergonomics. Balanced bridge heights, gentle pantoscopic angles and flattering lens shapes for every face.'
    },
    {
      icon: '/window.svg',
      title: 'Quality',
      text: 'Italian acetates, surgical‑grade stainless steel and robust spring hinges. Frames are stress‑tested, salt‑spray tested and hand‑polished for lasting shine.'
    },
    {
      icon: '/globe.svg',
      title: 'Innovation',
      text: 'Blue‑light management, AR coatings and high‑index options for thin, lightweight vision—engineered to protect and perform across devices and daylight.'
    }
  ];

  return (
    <section style={{ background: '#ffffff', color: '#111', padding: '6rem 0' }}>
      <div style={{ width: '92%', maxWidth: 1200, margin: '0 auto' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', margin: 0 }}>Our Pillars</h2>
        <p style={{ color: 'rgba(0,0,0,0.72)', marginTop: 10, marginBottom: 32 }}>
          Built on design rigour, materials science and optical expertise—so your frames feel as
          good as they look.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          gridAutoFlow: 'row dense'
        }}>
          {pillars.map((p) => (
            <div
              key={p.title}
              style={{
                position: 'relative',
                border: '1px solid rgba(0,0,0,0.08)',
                borderRadius: 16,
                padding: '1.5rem',
                background: 'linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.00) 100%)',
                boxShadow: '0 14px 28px rgba(0,0,0,0.10)',
                minHeight: 220,
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease'
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 18px 36px rgba(0,0,0,0.12)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(38,169,224,0.25)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 14px 28px rgba(0,0,0,0.10)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,0,0,0.08)';
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg, #26A9E0, #000000)' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 4 }}>
                <div style={{
                  width: 40,
                  height: 40,
                  borderRadius: 999,
                  display: 'grid',
                  placeItems: 'center',
                  background: 'radial-gradient(circle at 30% 30%, rgba(38,169,224,0.22), rgba(38,169,224,0.06))',
                  border: '1px solid rgba(38,169,224,0.25)'
                }}>
                  <img src={p.icon} alt="icon" width={22} height={22} />
                </div>
                <h3 style={{ margin: 0, fontSize: '1.15rem' }}>{p.title}</h3>
              </div>
              <p style={{ margin: 0, color: 'rgba(0,0,0,0.72)', lineHeight: 1.5 }}>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


