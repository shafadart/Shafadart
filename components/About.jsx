'use client';

import ScrollReveal from './ScrollReveal';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <ScrollReveal className="section-header">
          <span className="tag">My Journey</span>
          <h2>Who is ShafaUr?</h2>
        </ScrollReveal>

        <div className="about-content">
          <ScrollReveal direction="left" className="about-img">
            <Image
              src="/assets/shafa_dart.png"
              alt="Shafa Coding"
              width={500}
              height={500}
              quality={70}
              loading="lazy"
              style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)', border: '2px solid var(--border-ornate)' }}
            />
          </ScrollReveal>

          <ScrollReveal direction="right" className="about-text">
            <p>Assalamu Alaikum,</p>
            <p>My name is <strong>Shafaur</strong>. I am a student from Bangladesh, currently studying in the Department of Zoology at Kushtia Government College, where I am in my second year. Alongside my academic journey, I am constantly driven by a deep desire to understand myself better, develop my skills, and do something meaningful with my life.</p>

            <p>My life is not limited to academic studies alone. I have a strong passion and deep interest in <strong>programming</strong> and various technical fields. In many ways, these subjects truly excite me. Learning new things, understanding the logic behind technology, and building myself in the digital world genuinely motivate me. I strongly believe that in today’s era, technical skills do not only prepare a person for a career, but also make their thinking more independent and structured.</p>

            <p>At the same time, I am a sensitive and reflective person. I have a deep love for <strong>nature</strong>, and I enjoy capturing its beauty whether it is the sky, the moon, the play of light and shadow, or a quiet, silent moment. Nature brings me peace, teaches me how to observe deeply, and gives me a break from the noise within. Through this love, I have learned to feel beauty not only with my eyes, but also with my heart.</p>

            <p>Writing is another important medium through which I express myself. I try to learn something from every mistake, struggle, pain, and realization in my life, and I want those lessons to be useful for others as well. Especially for those who feel lost, broken, or alone in their lives I hope my words can offer even a small sense of comfort and courage.</p>

            <p>A significant part of my life is spiritual awareness. I want every action of mine to be guided by good intentions, and I strive to live in a way that pleases Allah. During difficult times, this belief gives me strength and stability. The verse that I hold closest to my heart during hardship is: <strong><em>“Indeed, with hardship comes ease.” [Surah Ash-Sharh 94:5-6]</em></strong></p>

            <p>When it comes to the future, I am realistic yet hopeful. I understand that nothing meaningful is achieved overnight. That is why I choose to move forward step by step learning continuously, building my skills, and creating my own path. Becoming financially independent, establishing my own identity, and contributing positively to my family and society are the goals that keep me moving forward.</p>

            <p>In the end, I see myself as a simple human being someone who wants to learn, rise after falling, and make an honest effort to be a good person. My journey is still ongoing, but I firmly believe that with sincere intention and perseverance, the path eventually finds its destination.</p>

            <div className="about-buttons">
              <a href="/assets/Shafaur_Rahman_Flutter_Developer.pdf" download="Shafaur_Rahman_Flutter_Developer_CV" className="download-cv btn outline-btn">
                Download CV <i className="fas fa-download"></i>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
