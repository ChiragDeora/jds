'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set initial mobile state
    handleResize();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '/#home' },
    { name: 'Collections', href: '/collections' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/#contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: '#000',
        backdropFilter: 'none',
        transition: 'all 0.3s ease',
        borderBottom: '1px solid rgba(38, 169, 224, 0.2)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '1rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Logo */}
        <motion.a
          href="/"
          whileHover={{ scale: 1.1 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
            cursor: 'pointer',
            textDecoration: 'none'
          }}
        >
          <div style={{
            width: '120px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img 
              src="/jds_logo.jpeg" 
              alt="JDS Logo" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain'
              }}
            />
          </div>
          <img 
            src="/jds wordmark.jpg" 
            alt="JDS Blue" 
            style={{
              height: '28px',
              width: 'auto',
              objectFit: 'contain'
            }}
          />
        </motion.a>

        {/* Desktop Navigation */}
        {!isMobile && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem'
          }}>
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -2 }}
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  position: 'relative',
                  cursor: 'pointer',
                  paddingBottom: '4px',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#26A9E0';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#fff';
                }}
              >
                {item.name}
                <span style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  height: '2px',
                  width: 0,
                  backgroundColor: '#26A9E0',
                  borderRadius: '2px',
                  transition: 'width 0.3s ease'
                }} className="underline" />
              </motion.a>
            ))}
          </div>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <motion.div
            animate={{ rotate: isMobileMenuOpen ? 15 : 0 }}
            whileHover={{ rotate: 10 }}
            style={{
              cursor: 'pointer',
              padding: '0.5rem',
              color: '#fff',
              fontSize: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'none',
              border: 'none'
            }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </motion.div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ ease: 'easeOut', duration: 0.3 }}
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(10px)',
            borderTop: '1px solid rgba(38, 169, 224, 0.2)',
            padding: '1rem 2rem'
          }}
        >
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              style={{
                display: 'block',
                color: '#fff',
                textDecoration: 'none',
                padding: '0.75rem 0',
                fontSize: '1rem',
                fontWeight: 500,
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </motion.a>
          ))}
        </motion.div>
      )}

      <style>{`
        a:hover > .underline {
          width: 100% !important;
        }
      `}</style>
    </motion.nav>
  );
}
