'use client';

import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

export default function Contact() {
  return (
    <section id="contact" className="section footer-section">
      <div className="container">
        <ScrollReveal direction="up">
          <div className="contact-box">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Let&apos;s Build Something Great!
            </motion.h2>
            <p>Have a project in mind? Drop me a line at: 🔗 shafaur@shafadart.com — My inbox is always open.</p>

            <div className="contact-links">
              <motion.a
                href="mailto:shafaur@shafadart.com"
                target="_blank"
                rel="noreferrer"
                className="contact-pill"
                whileHover={{ y: -4, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <i className="fa-solid fa-envelope"></i> Email me
              </motion.a>
              <motion.a
                href="https://wa.me/8801861838825?text=Hello%20shafa..."
                target="_blank"
                rel="noreferrer"
                className="contact-pill"
                whileHover={{ y: -4, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <i className="fa-brands fa-whatsapp"></i> WhatsApp
              </motion.a>
            </div>

            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} Md. Shafaur Rahman. All rights reserved.</p>
              <div className="footer-socials">
                <a href="https://github.com/shafadart" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
                <a href="https://www.instagram.com/shafa.dart/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://www.facebook.com/shafadartdotcom/" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook"></i></a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
