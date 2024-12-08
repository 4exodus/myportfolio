// src/components/Contact.jsx

import React from 'react';
import '../styles/Contact.css';
import { FaEnvelope, FaGithub, FaInstagram, FaJournalWhills, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const contactItems = [
    {
      icon: <FaEnvelope className="contact-icon" />,
      title: 'Email',
      content: (
        <a href="mailto:giodevfe@proton.me">giodevfe@proton.me</a>
      ),
      href: 'mailto:giodevfe@proton.me', 
    },
    {
      icon: <FaGithub className="contact-icon" />,
      title: 'GitHub',
      content: (
        <a href="https://github.com/4exodus" target="_blank" rel="noopener noreferrer">
          github.com/4exodus
        </a>
      ),
      href: 'https://github.com/4exodus',
    },
    {
      icon: <FaInstagram className="contact-icon" />,
      title: 'Instagram',
      content: (
        <a href="https://instagram.com/giovanni.iorio00" target="_blank" rel="noopener noreferrer">
          @giovanni.iorio00
        </a>
      ),
      href: 'https://instagram.com/giovanni.iorio00',
    },
    {
      icon: <FaLinkedin className="contact-icon" />,
      title: 'LinkedIn',
      content: (
        <a href="https://it.linkedin.com/in/giovanni-iorio-88718a302" target="_blank" rel="noopener noreferrer">
          linkedin.com/in/giovanni-iorio
        </a>
      ),
      href: 'https://it.linkedin.com/in/giovanni-iorio-88718a302', 
    },
    {
      icon: <FaMapMarkerAlt className="contact-icon" />,
      title: 'Posizione',
      content: 'Foggia, Puglia, 71121',
      href: 'https://maps.app.goo.gl/UCPPRWYc5rEVuiN57', 
    },
    {
      icon: <FaJournalWhills className="contact-icon" />,
      title: 'Occupazione',
      content: 'ITS Apulia Digital Maker',
      href: 'https://www.apuliadigital.it/', 
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: false, 
    threshold: 0.1,
  });

  return (
    <section className="contact" ref={ref}>
      <h2>Contattami</h2>
      <p>Sentiti libero di contattarmi attraverso i seguenti canali:</p>
      <div className="contact-container">
        {contactItems.map((item, index) => {
          const CardContent = (
            <div
              className={`contact-item ${inView ? 'fade-in' : ''}`}
              key={index}
              style={{ '--i': index }}
            >
              {item.icon}
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </div>
          );

        
          return item.href ? (
            <a href={item.href} target="_blank" rel="noopener noreferrer" key={index} style={{ textDecoration: 'none' }}>
              {CardContent}
            </a>
          ) : (
            <div key={index}>
              {CardContent}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Contact;
