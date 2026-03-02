import { useEffect, useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScallopDivider from './components/ui/ScallopDivider';
import Hero from './sections/Hero';
import Stats from './sections/Stats';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Process from './sections/Process';
import Comparison from './sections/Comparison';
import Testimonials from './sections/Testimonials';
import Pricing from './sections/Pricing';
import Contact from './sections/Contact';

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <div
      className="scroll-progress"
      style={{ width: `${progress}%` }}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
    />
  );
}

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Header />

      <main>
        {/* Hero – cream */}
        <Hero />

        {/* cream → mint */}
        <ScallopDivider fromColor="#FFF8F2" toColor="#D4F1E4" />

        {/* Stats – mint */}
        <Stats />

        {/* mint → cream */}
        <ScallopDivider fromColor="#D4F1E4" toColor="#FFF8F2" />

        {/* Services – cream */}
        <Services />

        {/* cream → blush */}
        <ScallopDivider fromColor="#FFF8F2" toColor="#FFE4E4" />

        {/* Projects – blush */}
        <Projects />

        {/* blush → butter */}
        <ScallopDivider fromColor="#FFE4E4" toColor="#FEF3C7" />

        {/* Process – butter */}
        <Process />

        {/* butter → lilac */}
        <ScallopDivider fromColor="#FEF3C7" toColor="#EDE9FE" />

        {/* Comparison – lilac */}
        <Comparison />

        {/* lilac → blush */}
        <ScallopDivider fromColor="#EDE9FE" toColor="#FFE4E4" />

        {/* Testimonials – blush */}
        <Testimonials />

        {/* blush → cream */}
        <ScallopDivider fromColor="#FFE4E4" toColor="#FFF8F2" />

        {/* Pricing – cream */}
        <Pricing />

        {/* cream → mint */}
        <ScallopDivider fromColor="#FFF8F2" toColor="#D4F1E4" />

        {/* Contact – mint */}
        <Contact />

        {/* mint → dark */}
        <ScallopDivider fromColor="#D4F1E4" toColor="#1C1C2E" />
      </main>

      <Footer />
    </>
  );
}
