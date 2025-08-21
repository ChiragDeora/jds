'use client';

import { useEffect, useMemo, useState } from 'react';

interface Slide {
  src: string;
  title: string;
  subtitle: string;
}

export default function HeroCarousel() {
  const slides: Slide[] = useMemo(
    () => [
        { src: '/images/collections/sunglasses-wayfarer.jpg', title: 'Wayfarer', subtitle: 'Premium Sunglasses' },
  { src: '/images/collections/sunglasses-aviator.jpg', title: 'Aviator', subtitle: 'Iconic Metal Frames' },
  { src: '/images/collections/sunglasses-round.jpg', title: 'Round', subtitle: 'Vintage Revival' },
  { src: '/images/collections/optical-square.jpg', title: 'Square', subtitle: 'Precision Opticals' },
  { src: '/images/collections/optical-rimless.jpg', title: 'Rimless', subtitle: 'Featherweight Comfort' }
    ],
    []
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const go = (dir: -1 | 1) => setIndex((prev) => (prev + dir + slides.length) % slides.length);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        borderRadius: '28px',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, rgba(38,169,224,0.08), rgba(0,0,0,0.85))',
        border: '1px solid rgba(38,169,224,0.25)',
        boxShadow: '0 25px 50px rgba(0,0,0,0.5)'
      }}
    >
      {/* Slides */}
      {slides.map((s, i) => (
        <div
          key={s.src}
          style={{
            position: 'absolute',
            inset: 0,
            opacity: i === index ? 1 : 0,
            transform: `scale(${i === index ? 1 : 1.05})`,
            transition: 'opacity 700ms ease, transform 900ms ease',
            backgroundImage: `url(${s.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      ))}

      {/* Luxury overlays */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(60% 80% at 70% 20%, rgba(38,169,224,0.25) 0%, rgba(0,0,0,0.0) 60%), linear-gradient(180deg, rgba(0,0,0,0.0) 40%, rgba(0,0,0,0.6) 100%)'
        }}
      />

      {/* Caption */}
      <div
        style={{
          position: 'absolute',
          left: '20px',
          bottom: '20px',
          color: '#fff',
          textShadow: '0 6px 16px rgba(0,0,0,0.5)'
        }}
      >
        <div style={{ fontSize: '0.75rem', letterSpacing: '0.15em', opacity: 0.9 }}>{slides[index].subtitle}</div>
        <div style={{ fontSize: '1.75rem', fontWeight: 800 }}>{slides[index].title}</div>
      </div>

      {/* Controls */}
      <button
        aria-label="Previous"
        onClick={() => go(-1)}
        style={{
          position: 'absolute',
          left: '12px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.25)',
          background: 'rgba(0,0,0,0.35)',
          color: '#fff',
          cursor: 'pointer'
        }}
      >
        ‹
      </button>
      <button
        aria-label="Next"
        onClick={() => go(1)}
        style={{
          position: 'absolute',
          right: '12px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.25)',
          background: 'rgba(0,0,0,0.35)',
          color: '#fff',
          cursor: 'pointer'
        }}
      >
        ›
      </button>

      {/* Dots */}
      <div
        style={{
          position: 'absolute',
          bottom: '14px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '8px'
        }}
      >
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            style={{
              width: i === index ? '18px' : '8px',
              height: '8px',
              borderRadius: '9999px',
              background: i === index ? '#26A9E0' : 'rgba(255,255,255,0.35)',
              cursor: 'pointer',
              transition: 'all 250ms ease'
            }}
          />
        ))}
      </div>
    </div>
  );
}


