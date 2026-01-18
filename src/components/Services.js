import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: 'fas fa-laptop-code',
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Responsive Design',
      description: 'Websites that look and work perfectly on all devices and screen sizes.'
    },
    {
      icon: 'fas fa-palette',
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that provide excellent user experiences.'
    },
    {
      icon: 'fas fa-rocket',
      title: 'Performance Optimization',
      description: 'Fast, efficient websites that rank well and provide great user experiences.'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;