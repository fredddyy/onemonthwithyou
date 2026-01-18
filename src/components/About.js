import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        <div className="about-grid">
          <div className="about-content">
            <p>We are a team of passionate developers and designers dedicated to creating exceptional web experiences. Our focus is on modern, responsive design that works seamlessly across all devices.</p>
            <div className="about-stats">
              <div className="stat">
                <h3>50+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>100%</h3>
                <p>Client Satisfaction</p>
              </div>
              <div className="stat">
                <h3>5+</h3>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="about-graphic"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;