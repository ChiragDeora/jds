'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Try to play programmatically on mount to avoid some mobile autplay quirks
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const play = async () => {
      try { await v.play(); } catch { /* ignore */ }
    };
    play();
  }, []);

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        color: '#111',
        overflow: 'hidden'
      }}
    >
      {/* Background video */}
      <video
        ref={videoRef}
        src="/videos/herovideo.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'saturate(1.05) contrast(1.02)'
        }}
      />

      {/* Readability overlays */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(90deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.35) 35%, rgba(0,0,0,0.15) 55%, rgba(0,0,0,0.0) 100%)'
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(60% 80% at 10% 20%, rgba(38,169,224,0.14) 0%, rgba(255,255,255,0) 60%)',
          pointerEvents: 'none'
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: 1200,
          margin: '0 auto',
          padding: '6rem 2rem 4rem',
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          alignItems: 'center',
          gap: '2.5rem'
        }}
      >
        {/* Headline block (left) */}
        <div style={{ maxWidth: 680, color: '#fff' }}>
          <div style={{
            fontSize: '0.9rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            marginBottom: '1rem',
            opacity: 0.9
          }}>Change The Way You See</div>

          <h1
            style={{
              fontSize: 'clamp(2.6rem, 5vw, 4.2rem)',
              lineHeight: 1.08,
              fontWeight: 800,
              margin: '0 0 1.25rem',
              background: 'linear-gradient(135deg, #fff, #26A9E0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            EFFORTLESSLY
            <br />
            STYLISH
          </h1>

          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.9)', marginBottom: '1.75rem' }}>
            Not just fashion, but design.
          </p>

          
        </div>

        {/* Right column becomes a framed video focus window for desktop; hidden on small screens to avoid duplication */}
        <div
          style={{
            display: 'none',
            borderRadius: 28,
            overflow: 'hidden',
            boxShadow: '0 30px 80px rgba(0,0,0,0.55)',
            border: '1px solid rgba(255,255,255,0.25)'
          }}
          className="hero-video-window"
        />
      </div>

      {/* Responsive tweaks */}
      <style jsx>{`
        @media (min-width: 980px) {
          .hero-video-window { display: block; height: 520px; }
        }
        @media (max-width: 979px) {
          section { min-height: 90vh; }
        }
      `}</style>
    </section>
  );
}
