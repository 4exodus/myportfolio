import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './styles/Global.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const sections = [
    <Hero key="hero" setCurrentSection={setCurrentSection} />,
    <Skills key="skills" currentSection={currentSection} sectionIndex={1} />,
    <Projects key="projects" />,
    <Testimonials key="testimonials" />,
    <Contact key="contact" />,
  ];

  // Scroll con la rotella del mouse
  const handleScroll = (e) => {
    e.preventDefault();
    if (e.deltaY > 0 && currentSection < sections.length - 1) {
      setCurrentSection((prevSection) => prevSection + 1);
    } else if (e.deltaY < 0 && currentSection > 0) {
      setCurrentSection((prevSection) => prevSection - 1);
    }
  };

  // Gestione del touch per dispositivi mobili
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientY);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const swipeThreshold = 50; // Distanza minima per considerare lo swipe

    if (distance > swipeThreshold && currentSection < sections.length - 1) {
      setCurrentSection((prevSection) => prevSection + 1); // Swipe verso l'alto
    } else if (distance < -swipeThreshold && currentSection > 0) {
      setCurrentSection((prevSection) => prevSection - 1); // Swipe verso il basso
    }

    // Resetta le variabili di touch
    setTouchStart(null);
    setTouchEnd(null);
  };

  useEffect(() => {
    // Aggiunge il listener per il mouse
    window.addEventListener('wheel', handleScroll, { passive: false });

    // Aggiunge i listener per il touch
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      // Rimuove i listener
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentSection, touchStart, touchEnd]);

  return (
    <div className="app">
      <Header setCurrentSection={setCurrentSection} />
      <div className="sections">
        {sections.map((SectionComponent, index) => (
          <div
            key={index}
            className={`section ${index === currentSection ? 'active' : ''}`}
          >
            {SectionComponent}
          </div>
        ))}
      </div>
      <div className="slide-selection">
        {sections.map((_, index) => (
          <div
            key={index}
            className={index === currentSection ? 'active' : ''}
            onClick={() => setCurrentSection(index)}
          ></div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;
