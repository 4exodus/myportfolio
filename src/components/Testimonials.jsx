import React from 'react';
import '../styles/Testimonials.css';
import { useInView } from 'react-intersection-observer';
import rosario from '../assets/rosario.jpg';


const Testimonials = () => {
  const testimonialsData = [
    {
      name: 'Rosario Giraldi',
      position: 'Level-Designer',
      image: rosario,
      quote: 'Il suo aiuto è stato fondamentale...',
    },
    // Aggiungi altre testimonianze se necessario
  ];

  const [ref, inView] = useInView({
    triggerOnce: false, // L'animazione si attiva ogni volta che la sezione entra in viewport
    threshold: 0.1,
  });

  return (
    <section className="testimonials" ref={ref}>
      <h2>Testimonianze</h2>
      <p>Cosa dicono di me:</p>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial, index) => (
          <div
            className={`testimonial-card ${inView ? 'fade-in' : ''}`}
            key={index}
            style={{ '--i': index }}
          >
            <div className="testimonial-content">
              <img src={testimonial.image} alt={testimonial.name} />
              <p className="quote">"{testimonial.quote}"</p>
              <h3>{testimonial.name}</h3>
              <p className="position">{testimonial.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
