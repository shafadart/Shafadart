'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import Image from 'next/image';

/* --- Gold Dust Particle Data --- */
const goldDustParticles = [
  { char: '✦', size: 14, left: '8%', top: '15%', dur: 7, delay: 0 },
  { char: '·', size: 10, left: '15%', top: '70%', dur: 5, delay: 1 },
  { char: '✦', size: 12, left: '25%', top: '30%', dur: 8, delay: 0.5 },
  { char: '·', size: 8, left: '35%', top: '80%', dur: 6, delay: 2 },
  { char: '✧', size: 16, left: '50%', top: '20%', dur: 9, delay: 0.3 },
  { char: '·', size: 7, left: '60%', top: '60%', dur: 5.5, delay: 1.5 },
  { char: '✦', size: 11, left: '70%', top: '35%', dur: 7.5, delay: 0.8 },
  { char: '·', size: 9, left: '80%', top: '75%', dur: 6.5, delay: 2.5 },
  { char: '✧', size: 13, left: '88%', top: '25%', dur: 8.5, delay: 0.2 },
  { char: '·', size: 6, left: '92%', top: '55%', dur: 5, delay: 3 },
  { char: '✦', size: 10, left: '45%', top: '50%', dur: 6, delay: 1.2 },
  { char: '·', size: 8, left: '18%', top: '45%', dur: 7, delay: 0.7 },
  { char: '✧', size: 12, left: '75%', top: '15%', dur: 8, delay: 1.8 },
  { char: '·', size: 7, left: '55%', top: '85%', dur: 5.5, delay: 2.2 },
  { char: '✦', size: 9, left: '5%', top: '90%', dur: 7.5, delay: 0.4 },
  { char: '·', size: 6, left: '40%', top: '10%', dur: 6, delay: 3.5 },
];

/* --- Floating Code Symbols Data --- */
const floatingCodeSymbols = [
  { char: '</>', left: '12%', top: '22%', size: 20, dur: 10, delay: 0.5 },
  { char: '{ }', left: '82%', top: '68%', size: 18, dur: 8, delay: 1.2 },
  { char: '</', left: '38%', top: '78%', size: 17, dur: 9, delay: 0.8 },
  { char: '/>', left: '68%', top: '18%', size: 19, dur: 11, delay: 2 },
  { char: '( )', left: '22%', top: '58%', size: 16, dur: 7.5, delay: 1.5 },
  { char: '[ ]', left: '78%', top: '42%', size: 18, dur: 9.5, delay: 0.3 },
  { char: '{ }', left: '55%', top: '88%', size: 15, dur: 8.5, delay: 2.5 },
  { char: '</>', left: '90%', top: '12%', size: 17, dur: 10.5, delay: 1 },
];

/* --- Animation Variants --- */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 3.8 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, x: 60 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.9, delay: 4, ease: [0.4, 0, 0.2, 1] },
  },
};

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* ===== VIGNETTE OVERLAY ===== */}
      <div className="hero-vignette" />

      {/* ===== PARCHMENT TEXTURE ===== */}
      <div className="hero-parchment" />

      {/* ===== WARM GLOW BLOBS ===== */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>

      {/* ===== BACKGROUND WATERMARK — Giant "S" Monogram ===== */}
      <div className="hero-watermark" aria-hidden="true">S</div>

      {/* ===== FLOATING GOLD DUST PARTICLES ===== */}
      {goldDustParticles.map((p, i) => (
        <motion.span
          key={`dust-${i}`}
          className="gold-dust"
          style={{
            position: 'absolute',
            left: p.left,
            top: p.top,
            fontSize: `${p.size}px`,
            color: 'rgba(200, 164, 94, 0.55)',
            zIndex: 0,
            pointerEvents: 'none',
          }}
          animate={{
            y: [0, -40, 0, 30, 0],
            x: [0, i % 2 ? 20 : -20, 0, i % 2 ? -10 : 10, 0],
            opacity: [0.3, 0.7, 0.4, 0.65, 0.3],
            rotate: [0, 45, 0, -45, 0],
            scale: [1, 1.3, 0.9, 1.2, 1],
          }}
          transition={{
            duration: p.dur,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: p.delay,
          }}
        >
          {p.char}
        </motion.span>
      ))}

      {/* ===== FLOATING CODE SYMBOLS ===== */}
      {floatingCodeSymbols.map((s, i) => (
        <motion.span
          key={`code-${i}`}
          className="floating-code-symbol"
          style={{
            position: 'absolute',
            left: s.left,
            top: s.top,
            fontSize: `${s.size}px`,
          }}
          animate={{
            y: [0, -25, 0, 20, 0],
            x: [0, i % 2 ? 15 : -15, 0],
            opacity: [0.1, 0.22, 0.14, 0.2, 0.1],
            rotate: [0, i % 2 ? 8 : -8, 0],
          }}
          transition={{
            duration: s.dur,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: s.delay,
          }}
        >
          {s.char}
        </motion.span>
      ))}

      <div className="hero-container">
        <motion.div
          className="hero-text"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* ===== DECORATIVE MONOGRAM INITIAL ===== */}
          <motion.div className="hero-monogram" variants={itemVariants}>
            <span className="monogram-letter">S</span>
            <div className="monogram-line monogram-line-left" />
            <div className="monogram-line monogram-line-right" />
          </motion.div>

          <motion.span className="greeting" variants={itemVariants}>
            <i className="fa-solid fa-feather-pointed"></i> Assalamu Alaikum, I&apos;m
          </motion.span>

          {/* ===== GOLD FOIL SHIMMER NAME ===== */}
          <motion.h1 className="full-name gold-shimmer" variants={itemVariants}>
            Md. Shafaur Rahman
          </motion.h1>

          <motion.h3 className="typewriter-container" variants={itemVariants}>
            I am a{' '}
            <TypeAnimation
              sequence={[
                'Flutter Developer',
                2500,
                'Tech Enthusiast',
                2500,
                'Nature Lover',
                2500,
                'Problem Solver',
                2500,
              ]}
              wrapper="span"
              speed={40}
              className="typing"
              repeat={Infinity}
            />
          </motion.h3>

          <motion.p className="bio" variants={itemVariants}>
            My journey moves between two worlds,, the <strong>science of life</strong> and the <strong>world of code</strong>. I build SaaS platforms and mobile apps that solve real problems, while biology teaches me how systems grow, adapt, and survive. When I&apos;m not coding, I explore the quiet stories of nature through my lens, where ideas begin in silence.
          </motion.p>

          <motion.div className="cta-group" variants={itemVariants}>
            <Link href="#work" className="btn primary-btn">
              View Projects
            </Link>
            <Link href="#contact" className="btn outline-btn">
              Hire Me
            </Link>
          </motion.div>

          <motion.div className="socials" variants={itemVariants}>
            {[
              { href: 'https://github.com/shafadart', icon: 'fa-github' },
              { href: 'https://wa.me/8801861838825?text=Hello%20shafa...', icon: 'fa-whatsapp' },
              { href: 'https://www.facebook.com/shafadartdotcom/', icon: 'fa-facebook-f' },
              { href: 'https://www.instagram.com/shafa.dart/', icon: 'fa-instagram' },
            ].map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className={`fa-brands ${s.icon}`}></i>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* ===== ORNATE GOLD PORTRAIT FRAME ===== */}
        <motion.div
          className="hero-image"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="ornate-frame">
            {/* Ornate corner decorations */}
            <span className="frame-corner frame-tl">❧</span>
            <span className="frame-corner frame-tr">❧</span>
            <span className="frame-corner frame-bl">❧</span>
            <span className="frame-corner frame-br">❧</span>

            <div className="img-box">
              <Image
                src="/assets/shafa.png"
                alt="Shafa Profile"
                width={360}
                height={360}
                priority
                quality={75}
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px', filter: 'sepia(0.3) contrast(1.1) brightness(0.9) saturate(0.85)' }}
              />
              {/* Warm antique overlay on photo */}
              <div className="img-warm-overlay" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
