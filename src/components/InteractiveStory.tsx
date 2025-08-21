'use client';

import { useRef, useEffect } from 'react';

// Dynamic import for GSAP to avoid SSR issues
let gsap: typeof import('gsap').gsap, ScrollTrigger: typeof import('gsap/ScrollTrigger').ScrollTrigger;

interface Scene {
  title: string;
  description: string;
  image: string;
}

/**
 * InteractiveStory component.
 *
 * Presents three scenes that highlight the design, craft and finishing
 * processes behind the eyewear. Each scene pins to the viewport while
 * scroll‑scrubbed animations rotate the frame and reveal hotspots. Copy
 * elements fade into view as you scroll.
 */
export default function InteractiveStory() {
  const sceneRefs = useRef<HTMLElement[]>([]);

  // Helper to collect multiple refs into an array
  const addRef = (el: HTMLElement | null) => {
    if (el && !sceneRefs.current.includes(el)) {
      sceneRefs.current.push(el);
    }
  };

  useEffect(() => {
    // Dynamically import GSAP and ScrollTrigger to avoid SSR issues
    const initGSAP = async () => {
      const gsapModule = await import('gsap');
      const scrollTriggerModule = await import('gsap/ScrollTrigger');
      
      gsap = gsapModule.gsap;
      ScrollTrigger = scrollTriggerModule.ScrollTrigger;
      
      // Register ScrollTrigger for this component.
      gsap.registerPlugin(ScrollTrigger);
      
      const ctx = gsap.context(() => {
      sceneRefs.current.forEach((section) => {
        const frame = section.querySelector('.frame') as HTMLElement;
        const hotspots = section.querySelectorAll('.hotspot');
        const copyBlocks = section.querySelectorAll('.copy > *');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top top+=10%',
            end: 'bottom top+=10%',
            scrub: 0.4,
            pin: true
          }
        });
        tl.fromTo(frame, { rotateY: 0 }, { rotateY: 18 });
        tl.fromTo(
          hotspots,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, stagger: 0.12 },
          '<'
        );

        // Ripple effect on hotspots
        hotspots.forEach((dot) => {
          gsap.to(dot, {
            scale: 1.12,
            opacity: 0.7,
            duration: 1.8,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true
          });
        });

        // Fade in copy paragraphs when they enter the viewport
        gsap.from(copyBlocks, {
          scrollTrigger: {
            trigger: section,
            start: 'top center',
            toggleActions: 'play none none none'
          },
          opacity: 0,
          y: 16,
          duration: 0.6,
          stagger: 0.06
        });
      });
      }, sceneRefs.current);
      return () => ctx.revert();
    };
    
    initGSAP();
  }, []);

  // Content for each scene
  const scenes: Scene[] = [
    {
      title: 'Design',
      description: 'Blueprinting each curve and line to perfection.',
      image: '/images/collections/sunglasses-aviator.jpg'
    },
    {
      title: 'Craft',
      description: 'Handcrafted acetate and precision finishing.',
      image: '/images/collections/optical-square.jpg'
    },
    {
      title: 'Finish',
      description: 'Polished to optical perfection for your eyes.',
      image: '/images/collections/sunglasses-wayfarer.jpg'
    }
  ];

  return (
    <section style={{ backgroundColor: '#fff', color: '#111' }}>
      {scenes.map((scene, idx) => (
        <div
          ref={addRef}
          key={idx}
          className="scene"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            minHeight: '100vh',
            padding: '4rem 2rem'
          }}
        >
          <div className="copy" style={{ maxWidth: '600px', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>{scene.title}</h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.5 }}>{scene.description}</p>
          </div>
          <div
            style={{ position: 'relative', width: '320px', height: '320px' }}
          >
            <div
              className="frame"
              style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden'
              }}
            >
              <img
                src={scene.image}
                alt={scene.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              {/* Hotspots positioned roughly on the frame */}
              <div
                className="hotspot"
                style={{
                  position: 'absolute',
                  width: '8px',
                  height: '8px',
                  backgroundColor: '#26A9E0',
                  borderRadius: '50%',
                  left: '50%',
                  top: '35%',
                  transform: 'translate(-50%, -50%)'
                }}
              />
              <div
                className="hotspot"
                style={{
                  position: 'absolute',
                  width: '8px',
                  height: '8px',
                  backgroundColor: '#26A9E0',
                  borderRadius: '50%',
                  left: '70%',
                  top: '65%',
                  transform: 'translate(-50%, -50%)'
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
