'use client';

import { motion } from 'framer-motion';
import { useState, useCallback } from 'react';
import Loader from './Loader';

export default function PageReveal({ children }) {
  const [coverDone, setCoverDone] = useState(false);

  const handleCoverComplete = useCallback(() => {
    setCoverDone(true);
  }, []);

  return (
    <>
      <Loader onComplete={handleCoverComplete} />
      <motion.div
        className="page-reveal-wrapper"
        initial={{ scale: 0.92, opacity: 0 }}
        animate={
          coverDone
            ? { scale: 1, opacity: 1 }
            : { scale: 0.92, opacity: 0 }
        }
        transition={{
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        {children}
      </motion.div>
    </>
  );
}
