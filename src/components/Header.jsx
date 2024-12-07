import React, { useState } from 'react';
import '../styles/Header.css';

const Header = ({ setCurrentSection }) => {
  const [menuOpen, setMenuOpen] = useState(false); // Stato per gestire il menu

  const handleNavClick = (index) => {
    setCurrentSection(index);
    setMenuOpen(false); // Chiude il menu dopo il click
  };

  return (
    <header className={menuOpen ? 'nav-open' : ''}>
      <div className="logo">GI</div>
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        &#9776; {/* Simbolo hamburger */}
      </div>
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
