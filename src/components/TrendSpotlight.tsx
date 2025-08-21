'use client';

import { motion } from 'framer-motion';

interface Card {
  tag: string;
  heading: string;
  text: string;
  img: string;
}

/**
 * TrendSpotlight component.
 *
 * Displays a horizontal carousel of trend cards. Each card fades in
 * sequentially as it enters the viewport and includes a small tag,
 * headline, summary and link. Hover states gently scale the image and
 * colour the overlay. A simple progress bar at the top reflects the
 * number of cards, though actual interaction is left as future work.
 */
export default function TrendSpotlight() {
  const cards: Card[] = [
    {
      tag: 'Oversized cat‑eye',
      heading: 'Rise of the Cat',
      text: 'Explore the oversized cat‑eye trend dominating 2025 fashion.',
      img: '/images/collections/sunglasses-cat-eye.jpg'
    },
    {
      tag: 'Minimal Rimless',
      heading: 'Barely There',
      text: 'Sleek rimless frames for a weightless modern look.',
      img: '/images/collections/optical-rimless.jpg'
    },
    {
      tag: 'Chromatic Acetate',
      heading: 'Colour Pop',
      text: 'Vivid hues and marbled acetates to express yourself.',
      img: '/images/collections/sunglasses-round.jpg'
    }
  ];

  return (
    <section style={{ position: 'relative', background: 'linear-gradient(180deg, #ffffff 0%, #fafafa 60%, #ffffff 100%)', color: '#111', padding: '4.5rem 0' }}>
      <div style={{ width: '90%', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
              style={{ fontSize: '2.1rem', fontWeight: 800, margin: 0, color: '#111111' }}
            >
              Trend Spotlight
            </motion.h2>
            <div style={{ height: 2, width: 260, background: 'linear-gradient(90deg, #26A9E0, rgba(38,169,224,0))', marginTop: 8 }} />
          </div>
          <a href="#" style={{ color: '#26A9E0', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }} onMouseEnter={(e) => { e.currentTarget.style.textDecoration = 'underline'; }} onMouseLeave={(e) => { e.currentTarget.style.textDecoration = 'none'; }}>View all stories</a>
        </div>

        <div
          style={{
            display: 'grid',
            gap: '1.25rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'
          }}
        >
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.5, delay: idx * 0.06, ease: [0.2, 0.8, 0.2, 1] }}
              style={{
                background: 'rgba(0,0,0,0.03)',
                borderRadius: 16,
                overflow: 'hidden',
                boxShadow: '0 12px 28px rgba(0,0,0,0.12)',
                border: '1px solid rgba(0,0,0,0.06)'
              }}
            >
              <div style={{ position: 'relative', height: 180 }}>
                <img
                  src={card.img}
                  alt={card.heading}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.25s ease' }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.06)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(255,255,255,0) 55%, rgba(255,255,255,0.6) 100%)' }} />
                <span style={{ position: 'absolute', left: 12, top: 12, padding: '6px 10px', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#0b0b0b', fontWeight: 700, borderRadius: 999, background: '#26A9E0' }}>{card.tag}</span>
              </div>
              <div style={{ padding: '1rem 1rem 1.1rem', color: '#111' }}>
                <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.1rem', fontWeight: 800 }}>{card.heading}</h3>
                <p style={{ margin: '0 0 0.75rem', fontSize: '0.95rem', color: 'rgba(0,0,0,0.72)' }}>{card.text}</p>
                <a href="#" style={{ color: '#26A9E0', fontWeight: 600, textDecoration: 'none' }} onMouseEnter={(e) => { e.currentTarget.style.textDecoration = 'underline'; }} onMouseLeave={(e) => { e.currentTarget.style.textDecoration = 'none'; }}>View Looks</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
