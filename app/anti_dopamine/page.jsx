'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function AntiDopaminePage() {
  const [legalOpen, setLegalOpen] = useState(false);

  const customCSS = `
    @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap');

    .ad-page {
      font-family: 'Hind Siliguri', sans-serif;
      background: #07040f;
      color: #e8e0f0;
      overflow-x: hidden;
      min-height: 100vh;
    }

    /* ===== NAVBAR ===== */
    .ad-nav {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      padding: 18px 5%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 100;
      background: rgba(7, 4, 15, 0.85);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(124, 77, 255, 0.12);
    }
    .ad-nav-logo {
      font-size: 1.2rem;
      font-weight: 700;
      color: #e8e0f0;
      text-decoration: none;
      letter-spacing: 2px;
    }
    .ad-nav-logo span { color: #7c4dff; }
    .ad-back {
      text-decoration: none;
      color: #b8a0d8;
      font-weight: 500;
      padding: 8px 20px;
      border-radius: 30px;
      border: 1px solid rgba(124, 77, 255, 0.25);
      background: rgba(124, 77, 255, 0.06);
      transition: all 0.3s ease;
      font-size: 0.9rem;
    }
    .ad-back:hover {
      background: rgba(124, 77, 255, 0.15);
      border-color: rgba(124, 77, 255, 0.5);
      color: #fff;
    }

    /* ===== HERO ===== */
    .ad-hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 140px 5% 80px;
      position: relative;
      overflow: hidden;
    }

    /* Animated gradient orbs */
    .ad-hero::before {
      content: '';
      position: absolute;
      top: -20%;
      right: -10%;
      width: 600px;
      height: 600px;
      background: radial-gradient(circle, rgba(124, 77, 255, 0.15) 0%, transparent 70%);
      border-radius: 50%;
      filter: blur(80px);
      animation: ad-float 10s ease-in-out infinite;
    }
    .ad-hero::after {
      content: '';
      position: absolute;
      bottom: -15%;
      left: -10%;
      width: 500px;
      height: 500px;
      background: radial-gradient(circle, rgba(99, 50, 200, 0.12) 0%, transparent 70%);
      border-radius: 50%;
      filter: blur(80px);
      animation: ad-float 10s ease-in-out infinite reverse;
    }

    @keyframes ad-float {
      0%, 100% { transform: translate(0, 0) scale(1); }
      33% { transform: translate(30px, -30px) scale(1.08); }
      66% { transform: translate(-25px, 25px) scale(0.95); }
    }

    .ad-hero-inner {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      gap: 60px;
      position: relative;
      z-index: 2;
    }

    .ad-hero-text {
      flex: 1.3;
    }
    .ad-hero-text h1 {
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 700;
      line-height: 1.35;
      margin-bottom: 20px;
      color: #fff;
    }
    .ad-hero-text h1 span {
      background: linear-gradient(135deg, #7c4dff, #b388ff, #7c4dff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .ad-hero-text .ad-sub {
      font-size: 1.15rem;
      line-height: 1.85;
      color: #a090b8;
      margin-bottom: 35px;
      max-width: 560px;
      font-weight: 400;
    }

    /* CTA button */
    .ad-cta-row {
      display: flex;
      gap: 15px;
      flex-wrap: wrap;
    }
    .ad-cta-btn {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 16px 38px;
      font-size: 1.05rem;
      font-weight: 600;
      font-family: 'Hind Siliguri', sans-serif;
      border: none;
      border-radius: 50px;
      cursor: pointer;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      text-decoration: none;
    }
    .ad-cta-primary {
      background: linear-gradient(135deg, #7c4dff, #651fff);
      color: #fff;
      box-shadow: 0 8px 30px rgba(124, 77, 255, 0.35);
    }
    .ad-cta-primary:hover {
      transform: translateY(-4px) scale(1.02);
      box-shadow: 0 15px 45px rgba(124, 77, 255, 0.5);
    }
    .ad-cta-outline {
      background: transparent;
      color: #b388ff;
      border: 2px solid rgba(124, 77, 255, 0.35);
    }
    .ad-cta-outline:hover {
      background: rgba(124, 77, 255, 0.1);
      border-color: #7c4dff;
      color: #fff;
      transform: translateY(-4px);
    }

    /* Phone mockups */
    .ad-hero-phones {
      flex: 1;
      display: flex;
      justify-content: center;
      gap: 20px;
      perspective: 1200px;
    }
    .ad-phone {
      width: 220px;
      border-radius: 24px;
      overflow: hidden;
      border: 3px solid rgba(124, 77, 255, 0.2);
      box-shadow:
        0 25px 60px rgba(0, 0, 0, 0.6),
        0 0 40px rgba(124, 77, 255, 0.08),
        inset 0 0 0 1px rgba(255, 255, 255, 0.05);
      transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      background: #0d0820;
    }
    .ad-phone:nth-child(1) {
      transform: perspective(1000px) rotateY(8deg) rotateX(2deg) translateY(-15px);
    }
    .ad-phone:nth-child(2) {
      transform: perspective(1000px) rotateY(-8deg) rotateX(-2deg) translateY(15px);
    }
    .ad-phone:hover {
      transform: perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(-8px) scale(1.04) !important;
      border-color: rgba(124, 77, 255, 0.5);
      box-shadow:
        0 35px 80px rgba(0, 0, 0, 0.7),
        0 0 60px rgba(124, 77, 255, 0.15);
    }
    .ad-phone img {
      width: 100%;
      display: block;
    }

    /* ===== FEATURES SECTION ===== */
    .ad-features {
      padding: 100px 5%;
      position: relative;
    }
    .ad-features::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 200px;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(124, 77, 255, 0.4), transparent);
    }
    .ad-section-title {
      text-align: center;
      font-size: clamp(1.8rem, 3vw, 2.5rem);
      font-weight: 700;
      margin-bottom: 16px;
      color: #fff;
    }
    .ad-section-sub {
      text-align: center;
      color: #8878a0;
      margin-bottom: 60px;
      font-size: 1.05rem;
    }

    .ad-feature-grid {
      max-width: 1100px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 28px;
    }

    .ad-feature-card {
      background: linear-gradient(160deg, rgba(124, 77, 255, 0.06), rgba(20, 12, 40, 0.6));
      border: 1px solid rgba(124, 77, 255, 0.1);
      border-radius: 20px;
      padding: 36px 28px;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;
    }
    .ad-feature-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, transparent, #7c4dff, transparent);
      opacity: 0;
      transition: opacity 0.4s;
    }
    .ad-feature-card:hover::before {
      opacity: 1;
    }
    .ad-feature-card:hover {
      transform: translateY(-8px);
      border-color: rgba(124, 77, 255, 0.3);
      box-shadow: 0 20px 50px rgba(124, 77, 255, 0.1);
      background: linear-gradient(160deg, rgba(124, 77, 255, 0.1), rgba(20, 12, 40, 0.8));
    }

    .ad-feature-icon {
      width: 60px;
      height: 60px;
      border-radius: 16px;
      background: linear-gradient(135deg, rgba(124, 77, 255, 0.15), rgba(124, 77, 255, 0.05));
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      color: #b388ff;
      margin-bottom: 20px;
      border: 1px solid rgba(124, 77, 255, 0.15);
    }

    .ad-feature-card h3 {
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 12px;
      color: #e0d4f0;
    }
    .ad-feature-card p {
      font-size: 0.95rem;
      line-height: 1.8;
      color: #9585ad;
      font-weight: 400;
    }

    /* ===== LEGAL / PRIVACY SECTION ===== */
    .ad-legal {
      padding: 80px 5% 100px;
      max-width: 900px;
      margin: 0 auto;
    }
    .ad-legal-box {
      background: linear-gradient(160deg, rgba(124, 77, 255, 0.04), rgba(10, 6, 20, 0.7));
      border: 1px solid rgba(124, 77, 255, 0.12);
      border-radius: 20px;
      overflow: hidden;
    }
    .ad-legal-header {
      padding: 24px 32px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      transition: background 0.3s;
      user-select: none;
    }
    .ad-legal-header:hover {
      background: rgba(124, 77, 255, 0.06);
    }
    .ad-legal-header h3 {
      font-size: 1.15rem;
      font-weight: 600;
      color: #d0c0e8;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .ad-legal-toggle {
      font-size: 1.5rem;
      color: #7c4dff;
      transition: transform 0.3s;
      line-height: 1;
    }
    .ad-legal-toggle.open {
      transform: rotate(180deg);
    }
    .ad-legal-body {
      padding: 0 32px 28px;
      font-size: 0.95rem;
      line-height: 2;
      color: #9585ad;
      border-top: 1px solid rgba(124, 77, 255, 0.08);
      margin-top: 0;
    }

    /* ===== FOOTER ===== */
    .ad-footer {
      text-align: center;
      padding: 30px 20px;
      border-top: 1px solid rgba(124, 77, 255, 0.08);
      color: #5a4a72;
      font-size: 0.9rem;
    }
    .ad-footer a {
      color: #7c4dff;
      text-decoration: none;
    }

    /* ===== RESPONSIVE ===== */
    @media (max-width: 900px) {
      .ad-hero-inner {
        flex-direction: column-reverse;
        text-align: center;
        gap: 40px;
      }
      .ad-hero-text .ad-sub {
        max-width: 100%;
      }
      .ad-cta-row {
        justify-content: center;
      }
      .ad-phone {
        width: 180px;
      }
      .ad-phone:nth-child(1) {
        transform: perspective(1000px) rotateY(5deg) translateY(-10px);
      }
      .ad-phone:nth-child(2) {
        transform: perspective(1000px) rotateY(-5deg) translateY(10px);
      }
    }

    @media (max-width: 480px) {
      .ad-hero {
        padding: 120px 4% 60px;
      }
      .ad-phone {
        width: 150px;
        border-radius: 18px;
      }
      .ad-hero-text h1 {
        font-size: 1.6rem;
      }
      .ad-hero-text .ad-sub {
        font-size: 1rem;
      }
      .ad-cta-btn {
        padding: 14px 28px;
        font-size: 0.95rem;
      }
      .ad-feature-grid {
        grid-template-columns: 1fr;
      }
      .ad-legal-header {
        padding: 20px 20px;
      }
      .ad-legal-body {
        padding: 0 20px 24px;
      }
    }
  `;

  const features = [
    {
      icon: 'fa-solid fa-lock',
      title: 'আন-বাইপাসেবল হার্ড লক',
      desc: 'একবার লক চালু হলে কোনো ব্যাক, হোম বা রিসেন্ট বাটন কাজ করবে না। ফোন রিস্টার্ট দিলেও লক খুলবে না।',
    },
    {
      icon: 'fa-solid fa-key',
      title: 'অফলাইন কমিউনিটি কী',
      desc: 'ইন্টারনেট ছাড়াই অন্য ডিভাইসের অ্যাপ থেকে জেনারেট করা ক্রিপ্টোগ্রাফিক কোড দিয়ে আনলক করার সুবিধা।',
    },
    {
      icon: 'fa-solid fa-phone-volume',
      title: 'ইমার্জেন্সি SOS',
      desc: 'জরুরি মুহূর্তে সরাসরি অ্যাডমিনের কাছে কল দেওয়ার অপশন, যা কল শেষ হওয়া মাত্রই ফোন আবার লক করে দেবে।',
    },
    {
      icon: 'fa-solid fa-shield-halved',
      title: '১০০% প্রাইভেসি',
      desc: 'অ্যাপটি সম্পূর্ণ অফলাইনে কাজ করে এবং ইউজারের কোনো ব্যক্তিগত ডেটা সংগ্রহ করে না।',
    },
  ];

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.7, ease: [0.4, 0, 0.2, 1] },
    }),
  };

  return (
    <div className="ad-page">
      <style>{customCSS}</style>

      {/* ===== NAVBAR ===== */}
      <nav className="ad-nav">
        <Link href="/" className="ad-nav-logo">
          Shafa<span>.Dart</span>
        </Link>
        <Link href="/" className="ad-back">← পোর্টফোলিওতে ফিরুন</Link>
      </nav>

      {/* ===== HERO ===== */}
      <section className="ad-hero">
        <div className="ad-hero-inner">
          <motion.div
            className="ad-hero-text"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <motion.h1 variants={fadeUp} custom={0}>
              <span>Anti Dopamine</span> — ডিজিটাল আসক্তি থেকে মুক্তির চূড়ান্ত হাতিয়ার।
            </motion.h1>
            <motion.p className="ad-sub" variants={fadeUp} custom={1}>
              সাধারণ কোনো &lsquo;স্ক্রিন টাইম&rsquo; অ্যাপ নয়। এটি একটি আন-বাইপাসেবল হার্ড-লক সিস্টেম, যা নির্দিষ্ট সময়ের জন্য আপনার ফোনকে সম্পূর্ণ লক করে দেয়।
            </motion.p>
            <motion.div className="ad-cta-row" variants={fadeUp} custom={2}>
              <a href="/assets/Anti_Dopamine.apk" download className="ad-cta-btn ad-cta-primary">
                <i className="fa-brands fa-android"></i>
                অ্যাপটি ডাউনলোড করুন
              </a>
              <Link href="/#work" className="ad-cta-btn ad-cta-outline">
                <i className="fa-solid fa-arrow-left"></i>
                অন্যান্য প্রজেক্ট
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="ad-hero-phones"
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="ad-phone">
              <img src="/assets/dopamine.png" alt="Anti Dopamine — Main Screen" />
            </div>
            <div className="ad-phone">
              <img src="/assets/dopamine2.png" alt="Anti Dopamine — Lock Screen" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="ad-features">
        <motion.h2
          className="ad-section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          বৈশিষ্ট্যসমূহ
        </motion.h2>
        <motion.p
          className="ad-section-sub"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          কেন Anti Dopamine অন্যদের থেকে আলাদা?
        </motion.p>

        <div className="ad-feature-grid">
          {features.map((f, i) => (
            <motion.div
              className="ad-feature-card"
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <div className="ad-feature-icon">
                <i className={f.icon}></i>
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== LEGAL & PRIVACY ===== */}
      <section className="ad-legal">
        <motion.div
          className="ad-legal-box"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="ad-legal-header"
            onClick={() => setLegalOpen(!legalOpen)}
          >
            <h3>
              <i className="fa-solid fa-scale-balanced"></i>
              শর্তাবলী ও প্রাইভেসি পলিসি
            </h3>
            <span className={`ad-legal-toggle ${legalOpen ? 'open' : ''}`}>
              ▼
            </span>
          </div>
          {legalOpen && (
            <motion.div
              className="ad-legal-body"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.4 }}
            >
              <p style={{ marginTop: '20px' }}>
                Anti Dopamine অ্যাপটি আপনার ডিজিটাল ওয়েলবিং নিশ্চিত করার জন্য &lsquo;Device Administrator&rsquo; পারমিশন ব্যবহার করে, যাতে লক চলাকালীন অ্যাপটি আনইনস্টল করা না যায়। অ্যাপটি কোনো ব্যক্তিগত ডেটা (যেমন: কন্টাক্টস, মেসেজ বা ছবি) পড়ে না বা থার্ড-পার্টির সাথে শেয়ার করে না। এটি একটি হার্ড-লক টুল, তাই লক করা অবস্থায় কোনো ইমার্জেন্সি সমস্যার জন্য ডেভেলপার বা অ্যাডমিন প্যানেল সরাসরি দায়ী থাকবে না। তবে ইমার্জেন্সি মুহূর্তে আনলক করার জন্য &lsquo;কমিউনিটি কী&rsquo; এবং &lsquo;SOS কলিং&rsquo; ফিচার যুক্ত করা হয়েছে।
              </p>
            </motion.div>
          )}
        </motion.div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="ad-footer">
        <p>&copy; {new Date().getFullYear()} Anti Dopamine — তৈরি করেছেন <a href="/">ShafaDart</a> ❤️</p>
      </footer>
    </div>
  );
}
