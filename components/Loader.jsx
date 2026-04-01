'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef, useCallback } from 'react';

/* =============================================
   🔊 Realistic Page Flip Sound Generator
   ============================================= */
function createWavBlob(sampleRate, samples) {
  const numSamples = samples.length;
  const buffer = new ArrayBuffer(44 + numSamples * 2);
  const view = new DataView(buffer);
  const w = (o, s) => { for (let i = 0; i < s.length; i++) view.setUint8(o + i, s.charCodeAt(i)); };
  w(0, 'RIFF');
  view.setUint32(4, 36 + numSamples * 2, true);
  w(8, 'WAVE'); w(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  w(36, 'data');
  view.setUint32(40, numSamples * 2, true);
  for (let i = 0; i < numSamples; i++) {
    view.setInt16(44 + i * 2, Math.max(-1, Math.min(1, samples[i])) * 0x7FFF, true);
  }
  return new Blob([buffer], { type: 'audio/wav' });
}

function generateRealisticPageFlip() {
  const sr = 44100;
  const duration = 0.6;
  const len = Math.floor(sr * duration);
  const samples = new Float32Array(len);

  // Pre-generate noise buffer
  const noise = new Float32Array(len);
  for (let i = 0; i < len; i++) noise[i] = Math.random() * 2 - 1;

  for (let i = 0; i < len; i++) {
    const t = i / sr;

    // Phase 1: Initial lift (0 - 0.08s) — soft swoosh
    const liftEnv = t < 0.08 ? Math.sin((Math.PI * t) / 0.16) * 0.3 : 0;

    // Phase 2: Main swoosh (0.05 - 0.35s) — broad rustle
    const swooshStart = 0.05;
    const swooshEnd = 0.35;
    let swooshEnv = 0;
    if (t >= swooshStart && t <= swooshEnd) {
      const st = (t - swooshStart) / (swooshEnd - swooshStart);
      swooshEnv = Math.sin(Math.PI * st) * 0.6;
    }

    // Phase 3: Flutter (0.15 - 0.4s) — rapid oscillation like paper vibrating
    let flutter = 0;
    if (t > 0.15 && t < 0.4) {
      const ft = (t - 0.15) / 0.25;
      flutter = Math.sin(2 * Math.PI * 45 * t) * Math.sin(Math.PI * ft) * 0.15;
    }

    // Phase 4: Landing snap (0.35 - 0.5s) — crisp settle
    let snap = 0;
    if (t >= 0.35 && t < 0.5) {
      const snapT = t - 0.35;
      snap = noise[i] * Math.exp(-25 * snapT) * 0.5;
      // Add a subtle low thump
      snap += Math.sin(2 * Math.PI * 80 * snapT) * Math.exp(-20 * snapT) * 0.15;
    }

    // Phase 5: Tail resonance (0.4 - 0.6s) — paper settling vibration
    let tail = 0;
    if (t > 0.4) {
      tail = noise[i] * Math.exp(-15 * (t - 0.4)) * 0.08;
    }

    // Combine all with noise modulation
    const rawNoise = noise[i];
    samples[i] = rawNoise * (liftEnv + swooshEnv) + flutter * rawNoise + snap + tail;
  }

  // Multi-pass smoothing for paper-like filtering (acts as lowpass)
  for (let pass = 0; pass < 3; pass++) {
    for (let i = 2; i < len - 2; i++) {
      samples[i] = samples[i] * 0.4 + samples[i - 1] * 0.2 + samples[i + 1] * 0.2 + samples[i - 2] * 0.1 + samples[i + 2] * 0.1;
    }
  }

  // Normalize
  let maxVal = 0;
  for (let i = 0; i < len; i++) maxVal = Math.max(maxVal, Math.abs(samples[i]));
  if (maxVal > 0) for (let i = 0; i < len; i++) samples[i] = (samples[i] / maxVal) * 0.65;

  return createWavBlob(sr, samples);
}

/* =============================================
   📖 BOOK COVER LOADER
   ============================================= */
export default function Loader({ onComplete }) {
  const [phase, setPhase] = useState('cover'); // 'cover' → 'ready' → 'flipping' → 'done'
  const flipSoundRef = useRef(null);
  const autoFlipTimerRef = useRef(null);

  // Pre-generate sound on mount
  useEffect(() => {
    try {
      const blob = generateRealisticPageFlip();
      flipSoundRef.current = URL.createObjectURL(blob);
    } catch (e) { /* fail silently */ }
    return () => {
      if (flipSoundRef.current) URL.revokeObjectURL(flipSoundRef.current);
    };
  }, []);

  // 🔒 Lock scroll while cover is open, unlock + reset on done
  useEffect(() => {
    if (phase === 'done') {
      // Re-enable scrolling & reset to top
      document.body.style.overflow = 'unset';
      window.scrollTo(0, 0);
    } else {
      // Disable scrolling while cover is active
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [phase]);

  // Show "click to open" after content appears
  useEffect(() => {
    const readyTimer = setTimeout(() => setPhase('ready'), 1800);
    // Auto-open after 7 seconds if user doesn't click
    autoFlipTimerRef.current = setTimeout(() => {
      handleOpenBook();
    }, 7000);
    return () => {
      clearTimeout(readyTimer);
      if (autoFlipTimerRef.current) clearTimeout(autoFlipTimerRef.current);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleOpenBook = useCallback(() => {
    if (phase === 'flipping' || phase === 'done') return;
    if (autoFlipTimerRef.current) clearTimeout(autoFlipTimerRef.current);

    // Play realistic page flip sound
    try {
      if (flipSoundRef.current) {
        const audio = new Audio(flipSoundRef.current);
        audio.volume = 0.7;
        audio.play().catch(() => {});
      }
    } catch (e) { /* fail silently */ }

    setPhase('flipping');

    // Total flip animation = 1.4s, then unmount + notify parent
    setTimeout(() => {
      setPhase('done');
      if (onComplete) onComplete();
    }, 1500);
  }, [phase, onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <>
          {/* Dark cinematic background — fades with the book */}
          <motion.div
            className="book-overlay"
            animate={
              phase === 'flipping'
                ? { opacity: 0 }
                : { opacity: 1 }
            }
            transition={
              phase === 'flipping'
                ? { duration: 1.2, ease: 'easeInOut', delay: 0.3 }
                : { duration: 0.3 }
            }
            onClick={handleOpenBook}
            style={{ cursor: phase === 'ready' ? 'pointer' : 'default' }}
          />

          {/* 3D Scene wrapper — provides perspective */}
          <motion.div
            className="book-scene"
            initial={{ opacity: 1 }}
            onClick={handleOpenBook}
            style={{ cursor: phase === 'ready' ? 'pointer' : 'default' }}
          >
            {/* The Book — 3D page flip with fade-out from 90° to 180° */}
            <motion.div
              className="book-cover"
              animate={
                phase === 'flipping'
                  ? {
                      rotateY: [-0.001, -90, -180],
                      opacity: [1, 1, 0],
                    }
                  : { rotateY: 0, opacity: 1 }
              }
              transition={
                phase === 'flipping'
                  ? {
                      duration: 1.4,
                      ease: [0.645, 0.045, 0.355, 1.000],
                      times: [0, 0.5, 1],
                      opacity: {
                        duration: 1.4,
                        times: [0, 0.5, 1],
                        ease: 'easeIn',
                      },
                    }
                  : { duration: 0.3 }
              }
            >
              {/* Front of the book cover — has backface-visibility hidden */}
              <div className="book-front">
                <div className="book-border-outer" />
                <div className="book-border-inner" />

                <span className="book-corner book-corner-tl">✦</span>
                <span className="book-corner book-corner-tr">✦</span>
                <span className="book-corner book-corner-bl">✦</span>
                <span className="book-corner book-corner-br">✦</span>

                <motion.div
                  className="book-ornament-line"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />

                <motion.div
                  className="book-monogram"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
                >
                  S
                </motion.div>

                <motion.h1
                  className="book-title"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  ShafaDart<span className="book-title-dot">.</span>Dev
                </motion.h1>

                <motion.p
                  className="book-subtitle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  Developer & Explorer
                </motion.p>

                <motion.div
                  className="book-ornament-line book-ornament-bottom"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />

                <motion.div
                  className="book-bottom-ornament"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  ❦
                </motion.div>

                {/* Click to Open instruction */}
                <AnimatePresence>
                  {phase === 'ready' && (
                    <motion.div
                      className="book-open-hint"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      Click here to open Shafa's diary
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="book-spine-shadow" />
              </div>
            </motion.div>

            {/* Book shadow on the surface */}
            <motion.div
              className="book-shadow"
              animate={
                phase === 'flipping'
                  ? { opacity: 0, scaleX: 0.3 }
                  : { opacity: 0.6, scaleX: 1 }
              }
              transition={{ duration: 0.8 }}
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
