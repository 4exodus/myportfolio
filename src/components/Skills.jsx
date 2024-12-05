import React from 'react';
import '../styles/Skills.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaJava } from 'react-icons/fa';
import { SiTypescript, SiMysql } from 'react-icons/si';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const skillsData = [
    { name: 'HTML', icon: <FaHtml5 />, level: 100 },
    { name: 'CSS', icon: <FaCss3Alt />, level: 90 },
    { name: 'JavaScript', icon: <FaJs />, level: 85 },
    { name: 'TypeScript', icon: <SiTypescript />, level: 85 },
    { name: 'React', icon: <FaReact />, level: 90 },
    { name: 'Python', icon: <FaPython />, level: 65 },
    { name: 'MySQL', icon: <SiMysql />, level: 65 },
    { name: 'Java', icon: <FaJava />, level: 45 },
  ];

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section className="skills" ref={ref}>
      <h2>Competenze</h2>
      <p>Ecco le tecnologie con cui ho esperienza:</p>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div className={`skill-card ${inView ? 'visible' : ''}`} key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
            <div className="skill-bar">
              <div
                className="skill-level"
                style={{ width: inView ? `${skill.level}%` : '0%' }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
