import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const portfolioItems = [
    {
      title: 'E-Commerce Platform',
      description: 'Modern online shopping experience with seamless checkout.'
    },
    {
      title: 'Business Website',
      description: 'Professional corporate site with advanced features.'
    },
    {
      title: 'Portfolio Site',
      description: 'Creative portfolio showcasing design and development work.'
    }
  ];

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2 className="section-title">Our Portfolio</h2>
        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            <div key={index} className="portfolio-item">
              <div className="portfolio-image">
                <div className="portfolio-placeholder"></div>
              </div>
              <div className="portfolio-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;