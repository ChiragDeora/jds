'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface Item {
  id: number;
  gender: string;
  type: string;
  style: string;
  img: string;
}

/**
 * Collections component.
 *
 * Renders a responsive grid of eyewear items. A simple filter bar allows
 * visitors to toggle between categories. Each item card displays an
 * image, the gender/type/style, and a hidden spec row that appears on
 * hover. Animations are triggered on scroll and filter changes using
 * Framer Motion.
 */
export default function Collections() {
  // Example item data with proper placeholder images for JDS Blue Opticals
  const items: Item[] = [
    { id: 1, gender: 'Men', type: 'Sunglass', style: 'Aviator', img: '/sunglasses-aviator.jpg' },
    { id: 2, gender: 'Women', type: 'Optical', style: 'Cat Eye', img: '/sunglasses-cat-eye.jpg' },
    { id: 3, gender: 'Unisex', type: 'Sunglass', style: 'Round', img: '/sunglasses-round.jpg' },
    { id: 4, gender: 'Men', type: 'Optical', style: 'Square', img: '/optical-square.jpg' },
    { id: 5, gender: 'Women', type: 'Sunglass', style: 'Wayfarer', img: '/sunglasses-wayfarer.jpg' },
    { id: 6, gender: 'Unisex', type: 'Optical', style: 'Rimless', img: '/optical-rimless.jpg' }
  ];
  const [filter, setFilter] = useState('All');

  const filtered = items.filter((item) => filter === 'All' || item.type === filter);

  const filters = ['All', 'Sunglass', 'Optical'];

  // Uniform grid — no bento spans. This keeps rows consistent and avoids holes.

  return (
    <section style={{ 
      background: 'linear-gradient(135deg, #ffffff 0%, #f7f8fa 50%, #ffffff 100%)', 
      color: '#111', 
      padding: '6rem 0',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div style={{ width: '90%', maxWidth: '1200px', margin: '0 auto' }}>
        <style>{`
          .collections-grid {
            display: grid;
            grid-auto-flow: row dense;
            gap: 1.5rem;
            justify-content: center;
            grid-template-columns: repeat(1, minmax(0, 1fr));
          }
          @media (min-width: 640px) {
            .collections-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          }
          @media (min-width: 1024px) {
            .collections-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
          }
        `}</style>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            style={{ 
              fontSize: '3.5rem',
              fontWeight: 700,
              marginBottom: '1rem',
              color: '#111111'
            }}
          >
            Curated Collections
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
            style={{ 
              fontSize: '1.25rem', 
              color: 'rgba(0,0,0,0.72)',
              maxWidth: '600px',
              margin: '0 auto'
            }}
          >
            Discover sunglasses and optical frames crafted for clarity, comfort and character—
            from bold acetates to feather‑light rimless and timeless metals.
          </motion.p>
        </div>
        {/* Enhanced Filter Buttons */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center',
          gap: '1rem', 
          marginBottom: '3rem',
          flexWrap: 'wrap'
        }}>
          {filters.map((f) => (
            <motion.button
              key={f}
              onClick={() => setFilter(f)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '0.75rem 2rem',
                border: filter === f ? '2px solid #26A9E0' : '2px solid rgba(0,0,0,0.15)',
                background: filter === f 
                  ? 'linear-gradient(135deg, #26A9E0, #1e90ff)' 
                  : '#ffffff',
                color: filter === f ? '#000' : '#111',
                borderRadius: '50px',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '0.9rem',
                backdropFilter: 'none',
                boxShadow: filter === f 
                  ? '0 8px 25px rgba(38,169,224,0.3)' 
                  : '0 6px 16px rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease'
              }}
            >
              {f}
            </motion.button>
          ))}
        </div>

        <div id="styles" className="collections-grid">
          {filtered.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
              style={{
                background: '#ffffff',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 10px 24px rgba(0,0,0,0.08)',
                position: 'relative',
                border: '1px solid rgba(0,0,0,0.06)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                // Show the spec row when hovering over the entire card
                const spec = e.currentTarget.querySelector('.spec-row') as HTMLElement;
                if (spec) spec.style.opacity = '1';
                // Add glow effect
                (e.currentTarget as HTMLElement).style.boxShadow = '0 15px 40px rgba(38,169,224,0.25)';
              }}
              onMouseLeave={(e) => {
                const spec = e.currentTarget.querySelector('.spec-row') as HTMLElement;
                if (spec) spec.style.opacity = '0';
                // Remove glow effect
                (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 24px rgba(0,0,0,0.08)';
              }}
            >
              <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={item.img}
                  alt={item.style}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.15s ease-in-out' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <p style={{ 
                  fontSize: '0.75rem', 
                  textTransform: 'uppercase', 
                  color: '#26A9E0', 
                  marginBottom: '0.5rem',
                  letterSpacing: '0.1em',
                  fontWeight: '600'
                }}>{item.style}</p>
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: 700, 
                  marginBottom: '0.75rem',
                  color: '#111'
                }}>{item.gender} {item.type}</h3>
                <div
                  className="spec-row"
                  style={{
                    display: 'flex',
                    gap: '0.75rem',
                    opacity: 0,
                    transition: 'opacity 0.2s',
                    fontSize: '0.75rem'
                  }}
                >
                  <span>Lens: 52mm</span>
                  <span>Bridge: 18mm</span>
                  <span>Temple: 140mm</span>
                </div>
              </div>
            
            </motion.div>
          ))}
        </div>
        {/* Single CTA below the grid (section footer) */}
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <motion.a
            href="/collections#styles"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
            style={{
              display: 'inline-block',
              padding: '0.9rem 2rem',
              background: 'linear-gradient(135deg, #26A9E0, #1e90ff)',
              color: '#000',
              fontWeight: 700,
              textDecoration: 'none',
              borderRadius: 999,
              boxShadow: '0 8px 22px rgba(38,169,224,0.25)'
            }}
          >
            Check Styles
          </motion.a>
        </div>
      </div>
    </section>
  );
}
