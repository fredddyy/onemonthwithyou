import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-brand">
          <h1>One Month With You❤️</h1>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'nav-menu-active' : ''}`}>
          <li><a href="#home" onClick={() => scrollToSection('home')} className="nav-link">Home</a></li>
          <li><a href="#our-story" onClick={() => scrollToSection('our-story')} className="nav-link">Poem</a></li>
          <li><a href="#gallery" onClick={() => scrollToSection('gallery')} className="nav-link">Photos</a></li>
          <li><a href="#puzzle" onClick={() => scrollToSection('puzzle')} className="nav-link">Puzzles</a></li>
          <li><a href="#letters" onClick={() => scrollToSection('letters')} className="nav-link">Love Letters</a></li>
        </ul>
        <div className={`nav-toggle ${isMenuOpen ? 'nav-toggle-active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;