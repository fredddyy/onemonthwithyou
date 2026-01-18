import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Of all the lives that exist, I’m so happy you exist in mine</h1>
        {/* <p className="hero-subtitle">Of all the lives that exist, I’m so happy you exist in mine</p> */}
        {/* <div className="hero-buttons"> */}
          {/* <button className="btn btn-primary" onClick={() => document.getElementById('our-story').scrollIntoView({behavior: 'smooth'})}>
            Start Our Journey
          </button> */}
          {/* <button className="btn btn-secondary" onClick={() => document.getElementById('letters').scrollIntoView({behavior: 'smooth'})}> */}
            {/* Read My Letters */}
          {/* </button> */}
        {/* </div> */}
      </div>
      <div className="hero-image">
        <img src={process.env.PUBLIC_URL + "/Picture1.png"} alt="Hero" className="hero-img" />
        <div className="hero-hearts">
          <div className="heart heart-1">❤️</div>
          <div className="heart heart-2">💕</div>
          <div className="heart heart-3">💖</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;