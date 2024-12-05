import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './styles/Global.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
  const [currentSection, setCurrentSection] = useState(0);
  
  const sections = [
    <Hero key="hero" setCurrentSection={setCurrentSection} />, // Passiamo setCurrentSection a Hero
    <Skills key="skills" currentSection={currentSection} sectionIndex={1} />, // Passiamo currentSection e sectionIndex a Skills
    <Projects key="projects" />,
    <Testimonials key="testimonials" />,
    <Contact key="contact" />
  ];

  const handleScroll = (e) => {
    e.preventDefault();
    if (e.deltaY > 0 && currentSection < sections.length - 1) {
      setCurrentSection((prevSection) => prevSection + 1);
    } else if (e.deltaY < 0 && currentSection > 0) {
      setCurrentSection((prevSection) => prevSection - 1);
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [currentSection]);

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
