import React from 'react';
import './Footer.css';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>One Month With You</h3>
            <p>Deeply ❤️ Madly ❤️ Truly ❤️</p>
          </div>
          <div className="footer-links">
            <ul>
              <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
              <li><a href="#our-story" onClick={() => scrollToSection('our-story')}>Poem</a></li>
              <li><a href="#gallery" onClick={() => scrollToSection('gallery')}>Photos</a></li>
              <li><a href="#puzzle" onClick={() => scrollToSection('puzzle')}>Puzzles</a></li>
              <li><a href="#letters" onClick={() => scrollToSection('letters')}>Love Letters</a></li>
            </ul>
          </div>
          <div className="footer-hearts">
            <span className="heart-animation">❤️</span>
            <span className="heart-animation">💕</span>
            <span className="heart-animation">💖</span>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Created with endless love for you 💕 • Forever & Always</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;