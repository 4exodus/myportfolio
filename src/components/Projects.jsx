// src/components/Projects.jsx

import React from 'react';
import '../styles/Projects.css';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import Slider from 'react-slick';
import { useInView } from 'react-intersection-observer';

import galacticclock from '../assets/galacticclock.jpg';
import musichandler from '../assets/musichandler.jpg';
import ItalianGame from '../assets/italiangame.jpg';
import noattraction from '../assets/0attraction.jpg';
import particellemagnetiche from '../assets/particellemagnetiche.jpg';
import donquitech from '../assets/donquitech.jpg';
import ricercamedica from '../assets/ricercamedica.jpg';

const Projects = () => {
  const projectsData = [
      {
      title: 'Ricerca Medica',
      description: 'Tutti i miei lavori basati sulla ricerca medica',
      image: ricercamedica,
      technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'React' ],
      liveDemo: 'https://cmomedicalresearch.netlify.app/',
      },
      {
      title: 'Donquitech',
      description: 'Un esempio di e-commerce',
      image: donquitech,
      technologies: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'React' ],
      liveDemo: 'https://donquitech.com/',
    },
    {
      title: 'Galactic-Clock',
      description: 'Orologio basato su un sistema solare',
      image: galacticclock,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveDemo: 'https://codepen.io/Simon-Story/pen/PwYZRZV',
      sourceCode: 'https://github.com/4exodus/galactic-clock',
    },
    {
      title: 'Gestore Musica',
      description: 'Un\'applicazione per dare una "vita" all\'immagine',
      image: musichandler,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveDemo: 'https://codepen.io/Simon-Story/pen/yyBeKMJ',
      sourceCode: 'https://github.com/4exodus/MusicHandler',
    },
    {
      title: 'Italian Game - Chess',
      description: 'Impara a giocare a scacchi un LLM',
      image: ItalianGame,
      technologies: ['React+Vite', 'CSS', 'TypeScript'],
      liveDemo: 'https://regal-zuccutto-f4204c.netlify.app/',
      sourceCode: 'https://github.com/4exodus/ItalianGame-Chess',
    },
    {
      title: 'Particelle Anti-Attrazione',
      description: 'Idea di background dinamico',
      image: noattraction,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveDemo: 'https://codepen.io/Simon-Story/pen/YPKwvOE',
      sourceCode: 'https://github.com/4exodus/no-gravity',
    },
    {
      title: 'Particelle Magnetiche',
      description: 'Idea di background dinamico',
      image: particellemagnetiche,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveDemo: 'https://codepen.io/Simon-Story/pen/raBxKox',
      sourceCode: 'https://github.com/4exodus/particelle-magnetiche',
    },
    // Aggiungi altri progetti se vuoi
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: '40px',
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: '0px',
        },
      },
    ],
  };

  const { ref, inView } = useInView({
    triggerOnce: false, // Animazione ogni volta che rientri nello viewport
    threshold: 0.1,
  });

  return (
    <section className="projects" ref={ref}>
      <h2>Progetti</h2>
      <p>Ecco alcuni dei miei progetti recenti:</p>
      <div className={`slider-container ${inView ? 'fade-in' : ''}`}>
        <Slider {...settings}>
          {projectsData.map((project, index) => (
            <div className="project-card-wrapper" key={index}>
              <div className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.liveDemo && (
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                    {project.sourceCode && (
                      <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                        <FaGithub /> Codice Sorgente
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;


