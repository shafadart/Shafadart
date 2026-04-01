'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from './ThemeProvider';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggle } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <motion.nav
        className="navbar"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 1.5, ease: 'easeOut' }}
        style={{
          boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none',
        }}
      >
        <Link href="/" className="logo" style={{ textDecoration: 'none' }}>
          ShafaDart<span className="highlight">.com</span>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <ul className="nav-links">
            <li><Link href="#home">Home</Link></li>
            <li><Link href="#work">Projects</Link></li>
            <li><Link href="#about">About</Link></li>
            <li><Link href="#gallery">Nature</Link></li>
            <li><Link href="#contact" className="btn-nav">Contact</Link></li>
          </ul>

          {/* 🌙☀️ Dark/Light Toggle */}
          <motion.button
            className="theme-toggle"
            onClick={toggle}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            <AnimatePresence mode="wait">
              <motion.i
                key={isDark ? 'moon' : 'sun'}
                className={isDark ? 'fa-solid fa-moon' : 'fa-solid fa-sun'}
                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>
          </motion.button>

          <div className="menu-icon" onClick={toggleMenu}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)',
                zIndex: 1000, backdropFilter: 'blur(5px)',
              }}
              onClick={toggleMenu}
            />
            <motion.div
              className="mobile-menu active"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <span className="close-menu" onClick={toggleMenu}>&times;</span>

              {/* Mobile theme toggle */}
              <motion.button
                className="theme-toggle"
                onClick={toggle}
                whileTap={{ scale: 0.9 }}
                style={{ marginBottom: '10px' }}
              >
                <i className={isDark ? 'fa-solid fa-moon' : 'fa-solid fa-sun'}></i>
                <span style={{ marginLeft: '8px', fontSize: '14px' }}>
                  {isDark ? 'Light Mode' : 'Dark Mode'}
                </span>
              </motion.button>

              {['Home', 'Projects', 'About', 'Nature', 'Contact'].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.15 }}
                >
                  <Link
                    href={`#${item === 'Projects' ? 'work' : item === 'Nature' ? 'gallery' : item.toLowerCase()}`}
                    onClick={toggleMenu}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
