import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import PageReveal from '@/components/PageReveal';

export default function Home() {
  return (
    <PageReveal>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Gallery />
      <Contact />
    </PageReveal>
  );
}
