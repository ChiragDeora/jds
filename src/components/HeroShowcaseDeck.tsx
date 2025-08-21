'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

interface FrameSlide {
  src: string;
  title: string;
  subtitle: string;
}

// Unique parallax card deck for premium feel
export default function HeroShowcaseDeck() {
  const slides: FrameSlide[] = useMemo(
    () => [
      { src: '/sunglasses-wayfarer.jpg', title: 'Wayfarer', subtitle: 'Signature Sunglasses' },
      { src: '/sunglasses-aviator.jpg', title: 'Aviator', subtitle: 'Iconic Metal' },
      { src: '/optical-square.jpg', title: 'Square', subtitle: 'Precision Opticals' },
    ],
    []
  );

  const [active, setActive] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  // Auto cycle for subtle motion
  useEffect(() => {
    const id = setInterval(() => setActive((p) => (p + 1) % slides.length), 4500);
    return () => clearInterval(id);
  }, [slides.length]);

  // Mouse tilt
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const ry = ((e.clientX - cx) / rect.width) * 10; // left/right
      const rx = ((cy - e.clientY) / rect.height) * 8; // up/down
      setTilt({ rx, ry });
    };
    const onLeave = () => setTilt({ rx: 0, ry: 0 });
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  // Compute card position by index relative to active
  const getCardStyle = (i: number) => {
    const pos = (i - active + slides.length) % slides.length; // 0=front, 1=right, 2=left
    const base = {
      position: 'absolute' as const,
      inset: 0,
      borderRadius: '24px',
      overflow: 'hidden',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      boxShadow: '0 30px 60px rgba(0,0,0,0.45)',
      transition:
        'transform 700ms cubic-bezier(.2,.7,.2,1), opacity 500ms ease, filter 500ms ease, box-shadow 700ms ease',
      willChange: 'transform',
    };
    const rotate = `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`;
    if (pos === 0) {
      return {
        ...base,
        zIndex: 3,
        transform: `${rotate} translateZ(60px) scale(1)`,
        opacity: 1,
        filter: 'none',
      };
    }
    if (pos === 1) {
      return {
        ...base,
        zIndex: 2,
        transform: `${rotate} translateX(42px) translateY(10px) translateZ(0) rotateY(-10deg) scale(.96)`,
        opacity: 0.9,
        filter: 'brightness(.9) blur(.2px)',
      };
    }
    // pos === 2 (left)
    return {
      ...base,
      zIndex: 1,
      transform: `${rotate} translateX(-42px) translateY(16px) translateZ(-10px) rotateY(10deg) scale(.94)`,
      opacity: 0.85,
      filter: 'brightness(.85) blur(.4px)',
    };
  };

  return (
    <div
      ref={wrapperRef}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        perspective: '1200px',
        perspectiveOrigin: '50% 40%',
        borderRadius: '28px',
        background: 'linear-gradient(135deg, rgba(38,169,224,0.08), rgba(0,0,0,0.85))',
        border: '1px solid rgba(38,169,224,0.25)'
      }}
    >
      {slides.map((s, i) => (
        <div key={s.src} style={{ ...getCardStyle(i), backgroundImage: `url(${s.src})` }}>
          {/* Overlays */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(180deg, rgba(0,0,0,0.0) 40%, rgba(0,0,0,0.55) 100%), radial-gradient(50% 70% at 75% 15%, rgba(38,169,224,0.25) 0%, rgba(0,0,0,0.0) 60%)'
            }}
          />
          {/* Caption */}
          <div style={{ position: 'absolute', left: 20, bottom: 18, color: '#fff' }}>
            <div style={{ fontSize: 12, letterSpacing: '0.12em', opacity: 0.9 }}>{s.subtitle}</div>
            <div style={{ fontSize: 22, fontWeight: 800 }}>{s.title}</div>
          </div>
        </div>
      ))}

      {/* Controls (minimal, non-overlapping) */}
      <div style={{ position: 'absolute', bottom: 14, right: 16, display: 'flex', gap: 6 }}>
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setActive(i)}
            style={{
              width: i === active ? 18 : 8,
              height: 8,
              borderRadius: 999,
              background: i === active ? '#26A9E0' : 'rgba(255,255,255,0.35)',
              cursor: 'pointer',
              transition: 'all 250ms ease'
            }}
          />
        ))}
      </div>

      <button
        aria-label="Prev"
        onClick={() => setActive((p) => (p + slides.length - 1) % slides.length)}
        style={{
          position: 'absolute',
          left: 12,
          top: '50%',
          transform: 'translateY(-50%)',
          width: 36,
          height: 36,
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
        onClick={() => setActive((p) => (p + 1) % slides.length)}
        style={{
          position: 'absolute',
          right: 12,
          top: '50%',
          transform: 'translateY(-50%)',
          width: 36,
          height: 36,
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.25)',
          background: 'rgba(0,0,0,0.35)',
          color: '#fff',
          cursor: 'pointer'
        }}
      >
        ›
      </button>
    </div>
  );
}


