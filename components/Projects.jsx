'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';
import Link from 'next/link';
import { getProjects } from '@/lib/projectsData';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(getProjects());
  }, []);

  return (
    <section id="work" className="section bg-light">
      <div className="container">
        <ScrollReveal className="section-header">
          <span className="tag">Portfolio</span>
          <h2>Featured Projects</h2>
        </ScrollReveal>

        <div className="projects-list">
          {projects.map((project, index) => {
            // Zig-zag: even index = image left, odd = image right
            const isReversed = index % 2 !== 0;

            const cardStyle = project.isSpecialGradient
              ? {
                  background: project.gradientBg,
                  border: `1px solid ${project.gradientBorder}`,
                }
              : {};

            const textColor = project.isSpecialGradient ? '#fff' : undefined;
            const descColor = project.isSpecialGradient ? 'rgba(224, 247, 250, 0.8)' : undefined;

            return (
              <ScrollReveal key={project.id} direction="up" delay={0.1}>
                <motion.div
                  className={`compact-card ${isReversed ? 'reverse' : ''}`}
                  style={cardStyle}
                  whileHover={{ y: -8, boxShadow: project.isSpecialGradient ? '0 20px 60px rgba(200, 164, 94, 0.2)' : '0 20px 60px rgba(200, 164, 94, 0.12)' }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Image / Visual Side */}
                  <div
                    className="compact-visual"
                    style={{ background: project.isSpecialGradient ? 'transparent' : (project.visualBg || 'rgba(200, 164, 94, 0.04)') }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="phone-mockup"
                      style={project.isSpecialGradient ? { filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.6))' } : {}}
                    />
                  </div>

                  {/* Content Side */}
                  <div className="compact-content">
                    <span
                      className={`p-tag ${project.tagColor === '#ff9800' ? 'private-tag' : ''}`}
                      style={{
                        background: `${project.tagColor}15`,
                        color: project.tagColor,
                        borderColor: `${project.tagColor}33`,
                      }}
                    >
                      {project.tag}
                    </span>

                    <h3 style={textColor ? { color: textColor } : {}}>{project.title}</h3>
                    <p style={descColor ? { color: descColor } : {}}>{project.description}</p>

                    <div className="tech-row">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          style={project.isSpecialGradient ? { border: '1px solid rgba(255,255,255,0.2)', color: '#fff', background: 'rgba(255,255,255,0.05)' } : {}}
                        >
                          <i className={t.icon}></i> {t.name}
                        </span>
                      ))}
                    </div>

                    <div className="compact-actions">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-compact"
                          style={project.isSpecialGradient ? { background: 'var(--primary)', color: '#1a0f06', border: 'none', boxShadow: '0 5px 20px rgba(200,164,94,0.3)' } : { background: 'linear-gradient(135deg, var(--primary), #a87d3e)', color: 'var(--bg-dark)' }}
                        >
                          View Live Demo →
                        </a>
                      )}
                      {project.codeUrl && (
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-compact outline"
                          style={project.isSpecialGradient ? { borderColor: 'rgba(255,255,255,0.4)', color: '#fff' } : {}}
                        >
                          <i className="fa-brands fa-github"></i> Code
                        </a>
                      )}
                      {project.caseStudyUrl && (
                        <Link href={project.caseStudyUrl} className="btn-compact primary">
                          View Case Study →
                        </Link>
                      )}
                      {project.apkUrl && (
                        <a href={project.apkUrl} className="btn-compact outline" download>
                          <i className="fa-brands fa-android"></i> APK
                        </a>
                      )}
                      {project.videoId && (
                        <motion.button
                          onClick={() => window.open(`https://www.youtube.com/watch?v=${project.videoId}`, '_blank')}
                          className="btn-compact outline full"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <i className="fa-solid fa-film"></i> Watch Our Story
                        </motion.button>
                      )}
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
