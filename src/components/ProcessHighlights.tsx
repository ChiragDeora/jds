'use client';

export default function ProcessHighlights() {
  const items = [
    { title: 'Design', text: 'Human‑centred forms, balanced weight and flattering proportions.', img: '/sunglasses-aviator.jpg' },
    { title: 'Craft', text: 'Hand‑polished edges, smooth hinges and carefully matched colours.', img: '/optical-square.jpg' },
    { title: 'Finish', text: 'Anti‑smudge coatings and durable plating for everyday resilience.', img: '/sunglasses-wayfarer.jpg' },
  ];

  return (
    <section style={{ background: '#0b0b0b', color: '#fff', padding: '4rem 2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', margin: 0 }}>Process Highlights</h2>
        <p style={{ color: 'rgba(255,255,255,0.75)', marginTop: 8, marginBottom: 24 }}>Our process turns thoughtful design into eyewear that performs daily.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.25rem', gridAutoFlow: 'row dense' }}>
          {items.map((i) => (
            <article key={i.title} style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: 14, overflow: 'hidden', background: 'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.00))' }}>
              <div style={{ height: 180, position: 'relative' }}>
                <img src={i.img} alt={i.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ padding: '1rem 1rem 1.25rem' }}>
                <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{i.title}</h3>
                <p style={{ margin: '0.5rem 0 0', color: 'rgba(255,255,255,0.8)' }}>{i.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


