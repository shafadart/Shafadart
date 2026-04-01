'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ScrollReveal({ children, direction = 'up', className, style, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const directionMap = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { x: -60, y: 0 },
    right: { x: 60, y: 0 },
  };

  const offset = directionMap[direction] || directionMap.up;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offset, filter: 'blur(4px)' }}
      animate={isInView ? { opacity: 1, y: 0, x: 0, filter: 'blur(0px)' } : {}}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className || ''}
      style={style}
    >
      {children}
    </motion.div>
  );
}
