'use client';

import { motion, type Variants, easeOut } from 'framer-motion';
import BrandPillars from '@/components/BrandPillars';

/**
 * About (Essilor-style layout)
 *
 * Clean corporate storytelling page inspired by EssilorLuxottica.
 * Sections:
 * 1) Hero heading + quote
 * 2) Split: large brand image (left) / text (right)
 * 3) Strategy section (full width text)
 * 4) Circular imagery + R&D section
 *
 * Image placeholders are referenced under `/images/about/*`. Swap with
 * real files or a CMS. Animations use framer-motion whileInView.
 */
export default function About() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } }
  };

  return (
    <section style={{ backgroundColor: '#fff', color: '#111' }}>
      {/* Wrapper */}
      <div style={{ width: '92%', maxWidth: 1200, margin: '0 auto', padding: '7rem 0 6rem' }}>
        {/* HERO */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          style={{ textAlign: 'left', maxWidth: 980, margin: '0 0 3.25rem' }}>
          <div style={{
            fontSize: '1rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.16em',
            marginBottom: '0.5rem',
            color: '#26A9E0'
          }}>About JDS Blue Opticals</div>

          <h1 style={{
            fontSize: 'clamp(1.9rem, 3.6vw, 2.5rem)',
            lineHeight: 1.2,
            fontWeight: 900,
            margin: 0,
            color: '#111'
          }}>
            JDS Blue Opticals is building the future of premium eyewear—
            design, manufacturing and distribution in one.
          </h1>
          <div style={{ height: 3, width: 220, margin: '0.75rem 0 1rem', background: '#26A9E0' }} />

          <p style={{ fontSize: '0.95rem', color: '#444', maxWidth: 820, margin: 0, fontStyle: 'italic' }}>
            “With iconic design and precision optics, we earn loyalty and accelerate innovation.”
          </p>
          <div style={{ fontSize: '0.85rem', color: '#26A9E0', marginTop: '0.4rem', fontWeight: 700 }}>
            — JDS Blue Opticals
          </div>
        </motion.div>

        {/* SPLIT: IMAGE LEFT / TEXT RIGHT */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '2rem',
            alignItems: 'center',
          }}
        >
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 12 }}>
              <img
                src="/images/hero/hero-glasses.jpg"
                alt="Lifestyle eyewear visual"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>

          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.75rem' }}>
              Home to iconic eyewear brands
            </h2>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#333' }}>
              With a pan‑India footprint and growing global presence, JDS Blue Opticals
              designs and curates collections that set new standards in desirability and
              optical precision. Our vertically integrated model—from design to retail—lets
              us move fast, deliver quality, and keep prices honest.
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#333', marginTop: '0.75rem' }}>
              We partner with best‑in‑class labs and retailers to bring personalized fitting,
              lens tech and style guidance to every customer.
            </p>
            
          </motion.div>
        </div>

        {/* OUR PILLARS */}
        <div style={{ marginTop: '3rem' }}>
          <BrandPillars />
        </div>

        {/* STRATEGY */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          style={{ marginTop: '4rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.75rem' }}>
            An open, vertical model to address evolving vision needs
          </h2>
          <p style={{ maxWidth: 900, fontSize: '0.95rem', lineHeight: 1.6, color: '#333' }}>
            We work on a collaborative business model—partnering with labs, designers,
            and retailers across regions. By combining superior product, digital services,
            and life‑enhancing technologies, our integrated value chain positions us to
            serve the evolving vision needs of a growing population.
          </p>
          
        </motion.div>

        {/* R&D / CIRCULAR IMAGERY SECTION */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            alignItems: 'center',
            marginTop: '4rem'
          }}
        >
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '400px', height: '300px', borderRadius: '12px', overflow: 'hidden' }}>
              <img src="/images/about/texture.jpg" alt="Material texture" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.75rem' }}>
              A strong investor in the future of eyecare and eyewear
            </h2>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#333' }}>
              From creative thinking to distribution, we cover every step of the value chain,
              supported by a growing R&D platform and design facilities. Our scientific
              partnerships and data‑driven fitting tools unlock better outcomes and
              delightful experiences.
            </p>
            
          </motion.div>
        </div>
      </div>

      {/* LIGHT GREY FOOT NOTE STRIP */}
      <div style={{ background: '#f6f7f8', padding: '1.25rem 0', borderTop: '1px solid #eee' }}>
        <div style={{ width: '92%', maxWidth: 1200, margin: '0 auto' }}>
          <p style={{ fontSize: '0.85rem', color: '#666', margin: 0 }}>
            Empowered by robust research capabilities, distinctive expertise and a top‑quality
            asset portfolio, JDS Blue Opticals continually reimagines eyewear.
          </p>
        </div>
      </div>

      {/* RESPONSIVE STYLES */}
      <style jsx>{`
        @media (max-width: 980px) {
          section div[style*='grid-template-columns: 1.2fr 1fr'] { grid-template-columns: 1fr; }
          section div[style*='grid-template-columns: 1fr 1fr'] { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
