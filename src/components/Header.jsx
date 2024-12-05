import React from 'react';
import '../styles/Header.css';

const Header = ({ setCurrentSection }) => {
  const handleNavClick = (index) => {
    setCurrentSection(index);
  };

  return (
    <header>
      <div className="logo">GI</div>
      <nav className="nav">
        <ul>
          <li onClick={() => handleNavClick(0)}>Home</li>
          <li onClick={() => handleNavClick(1)}>Competenze</li>
          <li onClick={() => handleNavClick(2)}>Progetti</li>
          <li onClick={() => handleNavClick(3)}>Testimonianze</li>
          <li onClick={() => handleNavClick(4)}>Contatti</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
