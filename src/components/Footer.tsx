'use client';

import { motion } from 'framer-motion';

interface Social {
  name: string;
  symbol: string;
  href: string;
}

/**
 * Footer component.
 *
 * Contains contact information, social icons and copyright. Fades
 * individual rows into view and provides a playful rotation on
 * hover for icons. The background is dark to contrast with the
 * light sections above.
 */
export default function Footer() {
  const contactRows = [
    'JDS Blue Opticals, Vapi, Gujarat',
    'info@jdsblueopticals.com',
    '+91 9876543210'
  ];
  const socials: Social[] = [
    { name: 'instagram', symbol: '📸', href: '#' }
  ];
  return (
    <footer style={{ backgroundColor: '#000', color: '#fff', padding: '3rem 0' }}>
      <div style={{ width: '90%', maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem' }}>
        {/* JDS Blue Branding */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.75rem', 
            marginBottom: '2rem' 
          }}
        >
          <div style={{
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img 
              src="/images/brand/jds_logo.jpeg" 
              alt="JDS Logo" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain'
              }}
            />
          </div>
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0 }}>
              JDS Blue Opticals
            </h3>
            <p style={{ fontSize: '0.875rem', color: '#26A9E0', margin: 0 }}>
              Your Vision, Our Passion
            </p>
          </div>
        </motion.div>
        
        {/* Contact Section */}
        <div style={{ gridColumn: '2' }}>
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}
        >
          Contact Us
        </motion.h3>
        <motion.ul
          initial="hidden"
          whileInView="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.05 } }
          }}
          style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: '1.5rem' }}
        >
          {contactRows.map((row, idx) => (
            <motion.li
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 8 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              style={{ marginBottom: '0.5rem', fontSize: '0.875rem' }}
            >
              {row}
            </motion.li>
          ))}
        </motion.ul>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
          {socials.map((social, idx) => (
            <motion.a
              key={idx}
              href={social.href}
              initial={{ opacity: 1 }}
              whileHover={{ rotate: 6 }}
              transition={{ duration: 0.18 }}
              style={{ fontSize: '1.5rem', color: '#26A9E0', textDecoration: 'none' }}
            >
              <span className="sr-only">{social.name}</span>
              <span>{social.symbol}</span>
            </motion.a>
          ))}
        </div>
      </div>
      
      {/* Quick Links Section */}
      <div style={{ gridColumn: '3' }}>
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}
        >
          Quick Links
        </motion.h3>
        <motion.ul
          initial="hidden"
          whileInView="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.05 } }
          }}
          style={{ listStyle: 'none', padding: 0, margin: 0 }}
        >
          {[
            { name: 'Collections', href: '/collections' },
            { name: 'About Us', href: '/about' },
            { name: 'Contact', href: '/#contact' }
          ].map((link, idx) => (
            <motion.li
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 8 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              style={{ marginBottom: '0.5rem', fontSize: '0.875rem' }}
            >
              <a href={link.href} style={{ color: '#fff', textDecoration: 'none' }}>{link.name}</a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
      
      {/* Copyright */}
      <div style={{ gridColumn: '1 / -1', textAlign: 'center', marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', margin: 0 }}>
          &copy; 2025 JDS Blue Opticals. All rights reserved.
        </p>
      </div>
      </div>
    </footer>
  );
}
