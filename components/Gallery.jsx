'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';
import Image from 'next/image';
import { getGallery } from '@/lib/galleryData';

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(getGallery());
  }, []);

  return (
    <section id="gallery" className="section bg-light">
      <div className="container">
        <ScrollReveal className="section-header">
          <span className="tag">Photography</span>
          <h2>Nature&apos;s Canvas</h2>
        </ScrollReveal>

        <div className="gallery-grid" ref={ref}>
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="g-item"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={img}
                alt={`Nature ${i + 1}`}
                width={600}
                height={400}
                quality={70}
                loading="lazy"
                sizes="(max-width: 480px) 100vw, (max-width: 900px) 50vw, 33vw"
                style={{ width: '100%', height: 'auto', display: 'block' }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
