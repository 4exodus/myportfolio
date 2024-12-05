// src/components/Hero.jsx

import React from 'react';
import '../styles/Hero.css';
import profilePic from '../assets/profile-pic.jpg';

const Hero = ({ setCurrentSection }) => {
  const handleContactClick = () => {
    setCurrentSection(4); // Sezione Contatti
  };

  const handleProjectsClick = () => {
    setCurrentSection(2); // Sezione Progetti
  };

  return (
    <section className="hero">
      <div className="text">
        <h1>
          Giovanni <span className="highlight">Iorio</span>
        </h1>
        <p>
          Front-end developer
        </p>
        <div className="buttons">
          <button className="btn primary" onClick={handleContactClick}>Contattami</button>
          <button className="btn secondary" onClick={handleProjectsClick}>I miei progetti</button>
        </div>
        <div className="social-icons">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
      <div className="image">
        <img src={profilePic} alt="Giovanni Iorio" />
      </div>
    </section>
  );
};

export default Hero;
