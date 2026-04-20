'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ShohojBebshaPage() {
  const [techOpen, setTechOpen] = useState(false);

  const customCSS = `
    @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap');

    .sb-page {
      font-family: 'Hind Siliguri', sans-serif;
      background: #0a0704;
      color: #e8ddd0;
      overflow-x: hidden;
      min-height: 100vh;
    }

    /* ===== NAVBAR ===== */
    .sb-nav {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      padding: 18px 5%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 100;
      background: rgba(10, 7, 4, 0.88);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(200, 164, 94, 0.12);
    }
    .sb-nav-logo {
      font-size: 1.2rem;
      font-weight: 700;
      color: #e8ddd0;
      text-decoration: none;
      letter-spacing: 2px;
    }
    .sb-nav-logo span { color: #c8a45e; }
    .sb-back {
      text-decoration: none;
      color: #c8a45e;
      font-weight: 500;
      padding: 8px 20px;
      border-radius: 30px;
      border: 1px solid rgba(200, 164, 94, 0.25);
      background: rgba(200, 164, 94, 0.06);
      transition: all 0.3s ease;
      font-size: 0.9rem;
    }
    .sb-back:hover {
      background: rgba(200, 164, 94, 0.15);
      border-color: rgba(200, 164, 94, 0.5);
      color: #fff;
    }

    /* ===== HERO ===== */
    .sb-hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 140px 5% 80px;
      position: relative;
      overflow: hidden;
    }
    .sb-hero::before {
      content: '';
      position: absolute;
      top: -20%;
      right: -10%;
      width: 650px;
      height: 650px;
      background: radial-gradient(circle, rgba(200, 164, 94, 0.12) 0%, transparent 70%);
      border-radius: 50%;
      filter: blur(80px);
      animation: sb-float 12s ease-in-out infinite;
    }
    .sb-hero::after {
      content: '';
      position: absolute;
      bottom: -15%;
      left: -10%;
      width: 500px;
      height: 500px;
      background: radial-gradient(circle, rgba(180, 130, 60, 0.1) 0%, transparent 70%);
      border-radius: 50%;
      filter: blur(80px);
      animation: sb-float 12s ease-in-out infinite reverse;
    }
    @keyframes sb-float {
      0%, 100% { transform: translate(0, 0) scale(1); }
      33% { transform: translate(30px, -30px) scale(1.08); }
      66% { transform: translate(-25px, 25px) scale(0.95); }
    }

    .sb-hero-inner {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      gap: 60px;
      position: relative;
      z-index: 2;
    }
    .sb-hero-text {
      flex: 1.3;
    }
    .sb-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 6px 18px;
      border-radius: 30px;
      background: rgba(200, 164, 94, 0.08);
      border: 1px solid rgba(200, 164, 94, 0.2);
      color: #c8a45e;
      font-size: 0.85rem;
      font-weight: 600;
      margin-bottom: 22px;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
    .sb-badge-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #c8a45e;
      animation: sb-pulse 2s ease-in-out infinite;
    }
    @keyframes sb-pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(0.8); }
    }
    .sb-hero-text h1 {
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 700;
      line-height: 1.35;
      margin-bottom: 20px;
      color: #fff;
    }
    .sb-hero-text h1 span {
      background: linear-gradient(135deg, #c8a45e, #f0d88a, #c8a45e);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .sb-hero-text .sb-sub {
      font-size: 1.12rem;
      line-height: 1.9;
      color: #a09080;
      margin-bottom: 35px;
      max-width: 560px;
      font-weight: 400;
    }
    .sb-cta-row {
      display: flex;
      gap: 15px;
      flex-wrap: wrap;
    }
    .sb-cta-btn {
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
    .sb-cta-primary {
      background: linear-gradient(135deg, #c8a45e, #a07830);
      color: #fff;
      box-shadow: 0 8px 30px rgba(200, 164, 94, 0.3);
    }
    .sb-cta-primary:hover {
      transform: translateY(-4px) scale(1.02);
      box-shadow: 0 15px 45px rgba(200, 164, 94, 0.45);
    }
    .sb-cta-outline {
      background: transparent;
      color: #c8a45e;
      border: 2px solid rgba(200, 164, 94, 0.35);
    }
    .sb-cta-outline:hover {
      background: rgba(200, 164, 94, 0.1);
      border-color: #c8a45e;
      color: #fff;
      transform: translateY(-4px);
    }

    /* ===== HERO MOCKUP ===== */
    .sb-hero-visual {
      flex: 1;
      display: flex;
      justify-content: center;
      perspective: 1200px;
    }
    .sb-mockup {
      width: 100%;
      max-width: 480px;
      border-radius: 16px;
      overflow: hidden;
      border: 2px solid rgba(200, 164, 94, 0.2);
      box-shadow:
        0 30px 70px rgba(0, 0, 0, 0.6),
        0 0 50px rgba(200, 164, 94, 0.06),
        inset 0 0 0 1px rgba(255, 255, 255, 0.04);
      transform: perspective(1000px) rotateY(-6deg) rotateX(3deg);
      transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
      background: #110d05;
    }
    .sb-mockup:hover {
      transform: perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(-10px) scale(1.02);
      border-color: rgba(200, 164, 94, 0.45);
      box-shadow:
        0 40px 90px rgba(0, 0, 0, 0.7),
        0 0 70px rgba(200, 164, 94, 0.12);
    }
    .sb-mockup img {
      width: 100%;
      display: block;
    }

    /* ===== OVERVIEW STATS BAR ===== */
    .sb-stats {
      padding: 0 5%;
      position: relative;
      z-index: 2;
      margin-top: -40px;
    }
    .sb-stats-inner {
      max-width: 1000px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2px;
      background: rgba(200, 164, 94, 0.1);
      border: 1px solid rgba(200, 164, 94, 0.15);
      border-radius: 20px;
      overflow: hidden;
      backdrop-filter: blur(20px);
    }
    .sb-stat {
      padding: 32px 20px;
      text-align: center;
      background: rgba(10, 7, 4, 0.85);
      transition: background 0.3s;
    }
    .sb-stat:hover {
      background: rgba(200, 164, 94, 0.06);
    }
    .sb-stat-num {
      font-size: 1.8rem;
      font-weight: 700;
      color: #c8a45e;
      line-height: 1.2;
    }
    .sb-stat-label {
      font-size: 0.85rem;
      color: #887860;
      margin-top: 6px;
      font-weight: 500;
    }

    /* ===== SECTION SHARED ===== */
    .sb-section {
      padding: 100px 5%;
      position: relative;
    }
    .sb-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 200px;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(200, 164, 94, 0.35), transparent);
    }
    .sb-section-title {
      text-align: center;
      font-size: clamp(1.8rem, 3vw, 2.5rem);
      font-weight: 700;
      margin-bottom: 16px;
      color: #fff;
    }
    .sb-section-sub {
      text-align: center;
      color: #887860;
      margin-bottom: 60px;
      font-size: 1.05rem;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.8;
    }

    /* ===== PROBLEM / SOLUTION ===== */
    .sb-problem-grid {
      max-width: 1100px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
    }
    .sb-problem-card {
      background: linear-gradient(160deg, rgba(200, 80, 80, 0.06), rgba(20, 12, 8, 0.7));
      border: 1px solid rgba(200, 80, 80, 0.12);
      border-radius: 20px;
      padding: 40px 32px;
      position: relative;
      overflow: hidden;
    }
    .sb-solution-card {
      background: linear-gradient(160deg, rgba(200, 164, 94, 0.06), rgba(20, 12, 8, 0.7));
      border: 1px solid rgba(200, 164, 94, 0.12);
      border-radius: 20px;
      padding: 40px 32px;
      position: relative;
      overflow: hidden;
    }
    .sb-problem-card h3,
    .sb-solution-card h3 {
      font-size: 1.3rem;
      font-weight: 700;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .sb-problem-card h3 { color: #e8a0a0; }
    .sb-solution-card h3 { color: #e0d0a0; }
    .sb-problem-card ul,
    .sb-solution-card ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .sb-problem-card li,
    .sb-solution-card li {
      padding: 10px 0;
      font-size: 0.98rem;
      line-height: 1.8;
      color: #9a8a78;
      display: flex;
      align-items: flex-start;
      gap: 10px;
    }
    .sb-problem-card li::before {
      content: '✗';
      color: #c86060;
      font-weight: 700;
      flex-shrink: 0;
      margin-top: 2px;
    }
    .sb-solution-card li::before {
      content: '✓';
      color: #c8a45e;
      font-weight: 700;
      flex-shrink: 0;
      margin-top: 2px;
    }

    /* ===== FEATURES GRID ===== */
    .sb-feature-grid {
      max-width: 1100px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 28px;
    }
    .sb-feature-card {
      background: linear-gradient(160deg, rgba(200, 164, 94, 0.04), rgba(15, 10, 5, 0.7));
      border: 1px solid rgba(200, 164, 94, 0.1);
      border-radius: 20px;
      padding: 36px 28px;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;
    }
    .sb-feature-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 2px;
      background: linear-gradient(90deg, transparent, #c8a45e, transparent);
      opacity: 0;
      transition: opacity 0.4s;
    }
    .sb-feature-card:hover::before { opacity: 1; }
    .sb-feature-card:hover {
      transform: translateY(-8px);
      border-color: rgba(200, 164, 94, 0.3);
      box-shadow: 0 20px 50px rgba(200, 164, 94, 0.08);
      background: linear-gradient(160deg, rgba(200, 164, 94, 0.08), rgba(15, 10, 5, 0.8));
    }
    .sb-feature-icon {
      width: 60px;
      height: 60px;
      border-radius: 16px;
      background: linear-gradient(135deg, rgba(200, 164, 94, 0.15), rgba(200, 164, 94, 0.05));
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      color: #c8a45e;
      margin-bottom: 20px;
      border: 1px solid rgba(200, 164, 94, 0.15);
    }
    .sb-feature-card h3 {
      font-size: 1.15rem;
      font-weight: 600;
      margin-bottom: 12px;
      color: #e0d4c0;
    }
    .sb-feature-card p {
      font-size: 0.95rem;
      line-height: 1.85;
      color: #9a8a78;
      font-weight: 400;
    }

    /* ===== TECH STACK ===== */
    .sb-tech-section {
      padding: 80px 5% 100px;
      max-width: 1000px;
      margin: 0 auto;
    }
    .sb-tech-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 20px;
      max-width: 900px;
      margin: 0 auto;
    }
    .sb-tech-item {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 20px 22px;
      border-radius: 16px;
      background: rgba(200, 164, 94, 0.04);
      border: 1px solid rgba(200, 164, 94, 0.1);
      transition: all 0.3s ease;
    }
    .sb-tech-item:hover {
      background: rgba(200, 164, 94, 0.08);
      border-color: rgba(200, 164, 94, 0.25);
      transform: translateY(-3px);
    }
    .sb-tech-item i {
      font-size: 1.5rem;
      color: #c8a45e;
    }
    .sb-tech-item span {
      font-size: 0.95rem;
      font-weight: 500;
      color: #b8a890;
    }

    /* ===== ARCHITECTURE / FLOW ===== */
    .sb-arch-box {
      max-width: 900px;
      margin: 0 auto;
      background: linear-gradient(160deg, rgba(200, 164, 94, 0.04), rgba(10, 7, 4, 0.7));
      border: 1px solid rgba(200, 164, 94, 0.12);
      border-radius: 24px;
      padding: 48px 40px;
      position: relative;
      overflow: hidden;
    }
    .sb-arch-box::after {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 3px;
      background: linear-gradient(90deg, transparent, #c8a45e, transparent);
    }
    .sb-arch-flow {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
      align-items: center;
    }
    .sb-arch-step {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      padding: 24px 20px;
      border-radius: 16px;
      background: rgba(200, 164, 94, 0.06);
      border: 1px solid rgba(200, 164, 94, 0.1);
      min-width: 140px;
      text-align: center;
      transition: all 0.3s ease;
    }
    .sb-arch-step:hover {
      background: rgba(200, 164, 94, 0.1);
      transform: translateY(-4px);
      border-color: rgba(200, 164, 94, 0.25);
    }
    .sb-arch-step i {
      font-size: 1.8rem;
      color: #c8a45e;
    }
    .sb-arch-step span {
      font-size: 0.85rem;
      color: #9a8a78;
      font-weight: 500;
    }
    .sb-arch-arrow {
      font-size: 1.5rem;
      color: rgba(200, 164, 94, 0.35);
    }

    /* ===== EXPANDABLE TECH DETAILS ===== */
    .sb-expand-box {
      max-width: 900px;
      margin: 40px auto 0;
      background: linear-gradient(160deg, rgba(200, 164, 94, 0.03), rgba(10, 7, 4, 0.6));
      border: 1px solid rgba(200, 164, 94, 0.1);
      border-radius: 20px;
      overflow: hidden;
    }
    .sb-expand-header {
      padding: 24px 32px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      transition: background 0.3s;
      user-select: none;
    }
    .sb-expand-header:hover {
      background: rgba(200, 164, 94, 0.05);
    }
    .sb-expand-header h3 {
      font-size: 1.1rem;
      font-weight: 600;
      color: #d0c0a8;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .sb-expand-toggle {
      font-size: 1.5rem;
      color: #c8a45e;
      transition: transform 0.3s;
      line-height: 1;
    }
    .sb-expand-toggle.open { transform: rotate(180deg); }
    .sb-expand-body {
      padding: 0 32px 28px;
      font-size: 0.95rem;
      line-height: 2;
      color: #9a8a78;
      border-top: 1px solid rgba(200, 164, 94, 0.08);
    }

    /* ===== CTA SECTION ===== */
    .sb-final-cta {
      padding: 100px 5%;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    .sb-final-cta::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 500px;
      height: 500px;
      background: radial-gradient(circle, rgba(200, 164, 94, 0.06) 0%, transparent 70%);
      border-radius: 50%;
      pointer-events: none;
    }
    .sb-final-cta::after {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 250px;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(200, 164, 94, 0.3), transparent);
    }
    .sb-icon-wrap {
      position: relative;
      display: inline-block;
      margin-bottom: 30px;
    }
    .sb-icon-wrap::before {
      content: '';
      position: absolute;
      inset: -18px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(200, 164, 94, 0.2) 0%, transparent 70%);
      filter: blur(20px);
      animation: sb-icon-glow 3s ease-in-out infinite;
    }
    @keyframes sb-icon-glow {
      0%, 100% { opacity: 0.5; transform: scale(1); }
      50% { opacity: 1; transform: scale(1.08); }
    }
    .sb-cta-icon {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 42px;
      background: linear-gradient(135deg, rgba(200, 164, 94, 0.15), rgba(200, 164, 94, 0.05));
      border: 2px solid rgba(200, 164, 94, 0.25);
      color: #c8a45e;
      position: relative;
      z-index: 1;
    }
    .sb-cta-title {
      font-size: clamp(1.6rem, 3vw, 2.2rem);
      font-weight: 700;
      color: #fff;
      margin-bottom: 12px;
      position: relative;
      z-index: 1;
    }
    .sb-cta-desc {
      font-size: 1.05rem;
      color: #887860;
      max-width: 500px;
      margin: 0 auto 35px;
      line-height: 1.8;
      position: relative;
      z-index: 1;
    }
    .sb-live-btn {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      padding: 18px 48px;
      font-size: 1.15rem;
      font-weight: 700;
      font-family: 'Hind Siliguri', sans-serif;
      border: none;
      border-radius: 60px;
      cursor: pointer;
      text-decoration: none;
      background: linear-gradient(135deg, #c8a45e 0%, #a07830 50%, #d4b06a 100%);
      color: #fff;
      box-shadow:
        0 10px 35px rgba(200, 164, 94, 0.35),
        0 0 0 1px rgba(200, 164, 94, 0.2);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      z-index: 1;
      overflow: hidden;
    }
    .sb-live-btn::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      background: linear-gradient(135deg, #e0c070 0%, #c8a45e 50%, #d4b06a 100%);
      opacity: 0;
      transition: opacity 0.4s;
    }
    .sb-live-btn:hover::before { opacity: 1; }
    .sb-live-btn:hover {
      transform: translateY(-5px) scale(1.03);
      box-shadow:
        0 18px 50px rgba(200, 164, 94, 0.5),
        0 0 0 1px rgba(200, 164, 94, 0.3);
    }
    .sb-live-btn i,
    .sb-live-btn span {
      position: relative;
      z-index: 1;
    }
    .sb-version-tag {
      margin-top: 18px;
      font-size: 0.8rem;
      color: #5a4a38;
      position: relative;
      z-index: 1;
    }

    /* ===== FOOTER ===== */
    .sb-footer {
      text-align: center;
      padding: 30px 20px;
      border-top: 1px solid rgba(200, 164, 94, 0.08);
      color: #5a4a38;
      font-size: 0.9rem;
    }
    .sb-footer a { color: #c8a45e; text-decoration: none; }

    /* ===== RESPONSIVE ===== */
    @media (max-width: 900px) {
      .sb-hero-inner {
        flex-direction: column-reverse;
        text-align: center;
        gap: 40px;
      }
      .sb-hero-text .sb-sub { max-width: 100%; }
      .sb-cta-row, .sb-badge { justify-content: center; }
      .sb-mockup {
        max-width: 360px;
        transform: perspective(1000px) rotateY(0deg) rotateX(0deg);
      }
      .sb-stats-inner {
        grid-template-columns: repeat(2, 1fr);
      }
      .sb-problem-grid {
        grid-template-columns: 1fr;
      }
      .sb-arch-arrow { display: none; }
    }

    @media (max-width: 480px) {
      .sb-hero { padding: 120px 4% 60px; }
      .sb-hero-text h1 { font-size: 1.6rem; }
      .sb-hero-text .sb-sub { font-size: 1rem; }
      .sb-cta-btn { padding: 14px 28px; font-size: 0.95rem; }
      .sb-feature-grid { grid-template-columns: 1fr; }
      .sb-stats-inner { grid-template-columns: 1fr 1fr; }
      .sb-stat { padding: 24px 16px; }
      .sb-stat-num { font-size: 1.4rem; }
      .sb-tech-grid { grid-template-columns: 1fr 1fr; }
      .sb-arch-box { padding: 32px 20px; }
      .sb-arch-step { min-width: 100px; padding: 18px 14px; }
      .sb-expand-header { padding: 20px 20px; }
      .sb-expand-body { padding: 0 20px 24px; }
      .sb-live-btn { padding: 16px 36px; font-size: 1.05rem; }
    }
  `;

  const features = [
    {
      icon: 'fa-solid fa-chart-line',
      title: 'ইন্টেলিজেন্ট ড্যাশবোর্ড',
      desc: 'রিয়েল-টাইম বিক্রয়, বিজ্ঞাপন খরচ, এবং মুনাফা ক্যালকুলেশন — সব তথ্য এক নজরে দেখুন স্বয়ংক্রিয়ভাবে।',
    },
    {
      icon: 'fa-brands fa-facebook',
      title: 'ফেসবুক বিজ্ঞাপন ট্র্যাকিং',
      desc: 'USD থেকে BDT-তে অটো কনভার্সন সহ বিজ্ঞাপন খরচ এবং প্রকৃত নেট মুনাফার বিশ্লেষণ।',
    },
    {
      icon: 'fa-solid fa-robot',
      title: 'AI বিজনেস এনালিস্ট',
      desc: 'টার্নওভার, মুনাফার ট্রেন্ড বিশ্লেষণ করে ব্যবসায়িক সিদ্ধান্তে সহায়তা প্রদান করে আর্টিফিশিয়াল ইন্টেলিজেন্স।',
    },
    {
      icon: 'fa-solid fa-phone-volume',
      title: 'অটো কলিং AI',
      desc: 'অর্ডার কনফার্মেশন এবং ডেলিভারি স্ট্যাটাস আপডেটের জন্য হিউম্যান-লাইক ভয়েসে স্বয়ংক্রিয় কল ফিচার।',
    },
    {
      icon: 'fa-solid fa-handshake',
      title: 'পার্টনার প্রফিট শেয়ারিং',
      desc: 'বিনিয়োগকারী ও পার্টনারদের মধ্যে মুনাফা ভাগ স্বয়ংক্রিয়ভাবে ক্যালকুলেট ও সেটেল করুন।',
    },
    {
      icon: 'fa-brands fa-whatsapp',
      title: 'হোয়াটসঅ্যাপ CRM',
      desc: 'কাস্টমার ইন্টার‌্যাকশন সরাসরি হোয়াটসঅ্যাপের সাথে কানেক্ট করুন — বেটার কনভার্সনের জন্য।',
    },
  ];

  const techStack = [
    { icon: 'fa-brands fa-react', name: 'Next.js 14' },
    { icon: 'fa-solid fa-fire', name: 'Firebase' },
    { icon: 'fa-brands fa-css3-alt', name: 'Tailwind CSS' },
    { icon: 'fa-solid fa-brain', name: 'Gemini AI' },
    { icon: 'fa-solid fa-shield-halved', name: 'Auth System' },
    { icon: 'fa-solid fa-cloud', name: 'Vercel' },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.7, ease: [0.4, 0, 0.2, 1] },
    }),
  };

  return (
    <div className="sb-page">
      <style>{customCSS}</style>

      {/* ===== NAVBAR ===== */}
      <nav className="sb-nav">
        <Link href="/" className="sb-nav-logo">
          Shafa<span>.Dart</span>
        </Link>
        <Link href="/" className="sb-back">← পোর্টফোলিওতে ফিরুন</Link>
      </nav>

      {/* ===== HERO ===== */}
      <section className="sb-hero">
        <div className="sb-hero-inner">
          <motion.div
            className="sb-hero-text"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <motion.div className="sb-badge" variants={fadeUp} custom={0}>
              <span className="sb-badge-dot" />
              FULL-STACK SAAS PLATFORM
            </motion.div>

            <motion.h1 variants={fadeUp} custom={0.5}>
              <span>সহজব্যবসা</span> — আপনার ব্যবসার সম্পূর্ণ ডিজিটাল সমাধান।
            </motion.h1>
            <motion.p className="sb-sub" variants={fadeUp} custom={1}>
              ইনভেন্টরি ম্যানেজমেন্ট, কুরিয়ার ডিসপ্যাচ, কর্মী বেতন, বিনিয়োগকারী সেটেলমেন্ট — সবকিছু এক প্ল্যাটফর্মে। AI-চালিত বিজনেস এনালিটিক্সসহ।
            </motion.p>
            <motion.div className="sb-cta-row" variants={fadeUp} custom={2}>
              <a
                href="https://shohojbebsha-gamma.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="sb-cta-btn sb-cta-primary"
              >
                <i className="fa-solid fa-arrow-up-right-from-square" />
                লাইভ ডেমো দেখুন
              </a>
              <Link href="/#work" className="sb-cta-btn sb-cta-outline">
                <i className="fa-solid fa-arrow-left" />
                অন্যান্য প্রজেক্ট
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="sb-hero-visual"
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="sb-mockup">
              <img src="/assets/shohoj_mocup.png" alt="ShohojBebsha — Dashboard Preview" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="sb-stats">
        <motion.div
          className="sb-stats-inner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
        >
          <div className="sb-stat">
            <div className="sb-stat-num">৬+</div>
            <div className="sb-stat-label">কোর মডিউল</div>
          </div>
          <div className="sb-stat">
            <div className="sb-stat-num">AI</div>
            <div className="sb-stat-label">বিজনেস এনালিস্ট</div>
          </div>
          <div className="sb-stat">
            <div className="sb-stat-num">PWA</div>
            <div className="sb-stat-label">মোবাইল রেডি</div>
          </div>
          <div className="sb-stat">
            <div className="sb-stat-num">২৪/৭</div>
            <div className="sb-stat-label">ক্লাউড সিঙ্ক</div>
          </div>
        </motion.div>
      </section>

      {/* ===== PROBLEM & SOLUTION ===== */}
      <section className="sb-section" style={{ paddingTop: '120px' }}>
        <motion.h2
          className="sb-section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          সমস্যা ও সমাধান
        </motion.h2>
        <motion.p
          className="sb-section-sub"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          বাংলাদেশের ক্ষুদ্র ও মাঝারি ব্যবসায়ীরা প্রতিদিন যে সমস্যার মুখোমুখি হন — সহজব্যবসা তার সমাধান।
        </motion.p>

        <div className="sb-problem-grid">
          <motion.div
            className="sb-problem-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <h3><i className="fa-solid fa-triangle-exclamation" /> সমস্যা</h3>
            <ul>
              <li>খাতায় হিসাব রেখে বিক্রি ও খরচ ট্র্যাক করা অসম্ভব হয়ে যায়</li>
              <li>ফেসবুক বিজ্ঞাপন খরচ USD থেকে BDT-এ ম্যানুয়ালি হিসাব করা ভুল হয়</li>
              <li>পার্টনারদের লাভ-লোকসান হিসাব নিয়ে বিবাদ তৈরি হয়</li>
              <li>অর্ডার কনফার্মেশনের জন্য একেকটা করে ফোন দিতে ঘণ্টা লেগে যায়</li>
              <li>কোনো সেন্ট্রালাইজড সিস্টেম না থাকায় সবকিছু এলোমেলো</li>
            </ul>
          </motion.div>

          <motion.div
            className="sb-solution-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3><i className="fa-solid fa-lightbulb" /> সমাধান</h3>
            <ul>
              <li>অটোমেটেড ড্যাশবোর্ডে রিয়েল-টাইম বিক্রি, খরচ ও মুনাফা এক নজরে</li>
              <li>Meta Ads API ইন্টিগ্রেশনে বিজ্ঞাপন খরচ অটো কনভার্ট ও ট্র্যাক</li>
              <li>পার্টনার প্রফিট শেয়ারিং সিস্টেমে স্বয়ংক্রিয় হিসাব ও সেটেলমেন্ট</li>
              <li>AI অটো কলিং ফিচারে ১ ক্লিকে সকল অর্ডার কনফার্ম</li>
              <li>একটি মাত্র প্ল্যাটফর্মে সম্পূর্ণ ব্যবসা পরিচালনা</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="sb-section">
        <motion.h2
          className="sb-section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          প্রধান ফিচারসমূহ
        </motion.h2>
        <motion.p
          className="sb-section-sub"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          সহজব্যবসা কেন আপনার ব্যবসার জন্য পারফেক্ট?
        </motion.p>

        <div className="sb-feature-grid">
          {features.map((f, i) => (
            <motion.div
              className="sb-feature-card"
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="sb-feature-icon">
                <i className={f.icon} />
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== ARCHITECTURE FLOW ===== */}
      <section className="sb-section">
        <motion.h2
          className="sb-section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          সিস্টেম আর্কিটেকচার
        </motion.h2>
        <motion.p
          className="sb-section-sub"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          ডেটা ফ্লো: ইউজার থেকে ইনসাইট পর্যন্ত
        </motion.p>

        <motion.div
          className="sb-arch-box"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
        >
          <div className="sb-arch-flow">
            <div className="sb-arch-step">
              <i className="fa-solid fa-user" />
              <span>ইউজার ইনপুট</span>
            </div>
            <span className="sb-arch-arrow">→</span>
            <div className="sb-arch-step">
              <i className="fa-brands fa-react" />
              <span>Next.js Frontend</span>
            </div>
            <span className="sb-arch-arrow">→</span>
            <div className="sb-arch-step">
              <i className="fa-solid fa-fire" />
              <span>Firebase Backend</span>
            </div>
            <span className="sb-arch-arrow">→</span>
            <div className="sb-arch-step">
              <i className="fa-solid fa-brain" />
              <span>AI Processing</span>
            </div>
            <span className="sb-arch-arrow">→</span>
            <div className="sb-arch-step">
              <i className="fa-solid fa-chart-pie" />
              <span>ইনসাইট ও রিপোর্ট</span>
            </div>
          </div>
        </motion.div>

        {/* Expandable Tech Details */}
        <div className="sb-expand-box">
          <div
            className="sb-expand-header"
            onClick={() => setTechOpen(!techOpen)}
          >
            <h3>
              <i className="fa-solid fa-code" />
              টেকনিক্যাল ডিটেইলস
            </h3>
            <span className={`sb-expand-toggle ${techOpen ? 'open' : ''}`}>▼</span>
          </div>
          {techOpen && (
            <motion.div
              className="sb-expand-body"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.4 }}
            >
              <p style={{ marginTop: '20px' }}>
                সহজব্যবসা তৈরি হয়েছে <strong>Next.js 14 (App Router)</strong> ফ্রেমওয়ার্কে, যেখানে <strong>Firebase Firestore</strong> ডেটাবেজ হিসাবে ব্যবহৃত হয়েছে রিয়েল-টাইম ডেটা সিঙ্ক্রোনাইজেশনের জন্য। ইউজার অথেন্টিকেশন <strong>Firebase Authentication</strong> দিয়ে সিকিউর করা হয়েছে। UI ডিজাইন করা হয়েছে <strong>Tailwind CSS</strong> এবং <strong>shadcn/ui</strong> কম্পোনেন্ট লাইব্রেরি দিয়ে, যা ডার্ক/লাইট থিম সাপোর্ট করে। AI ফিচারগুলো <strong>Google Gemini API</strong>-এর মাধ্যমে চালিত। প্ল্যাটফর্মটি PWA (Progressive Web App) হিসেবে ডিপ্লয় করা হয়েছে <strong>Vercel</strong>-এ, ফলে মোবাইল থেকেও নেটিভ অ্যাপের মতো ব্যবহার করা যায়।
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* ===== TECH STACK ===== */}
      <section className="sb-tech-section">
        <motion.h2
          className="sb-section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          টেক স্ট্যাক
        </motion.h2>
        <motion.p
          className="sb-section-sub"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          এই প্রজেক্টে ব্যবহৃত প্রযুক্তি
        </motion.p>

        <div className="sb-tech-grid">
          {techStack.map((tech, i) => (
            <motion.div
              className="sb-tech-item"
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <i className={tech.icon} />
              <span>{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="sb-final-cta">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <div className="sb-icon-wrap">
            <div className="sb-cta-icon">
              <i className="fa-solid fa-rocket" />
            </div>
          </div>
          <h2 className="sb-cta-title">লাইভ প্ল্যাটফর্ম দেখুন</h2>
          <p className="sb-cta-desc">
            সহজব্যবসার সম্পূর্ণ প্ল্যাটফর্ম এখনই এক্সপ্লোর করুন। রেজিস্ট্রেশন করে ফ্রি ট্রায়াল শুরু করুন।
          </p>
          <a
            href="https://shohojbebsha-gamma.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="sb-live-btn"
          >
            <i className="fa-solid fa-arrow-up-right-from-square" />
            <span>লাইভ ডেমো ওপেন করুন</span>
          </a>
          <p className="sb-version-tag">Next.js 14 • Firebase • PWA • Vercel Hosted</p>
        </motion.div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="sb-footer">
        <p>&copy; {new Date().getFullYear()} সহজব্যবসা — তৈরি করেছেন <a href="/">ShafaDart</a> ❤️</p>
      </footer>
    </div>
  );
}
