// components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-grid">
        {/* Left side - Text content */}
        <div className="hero-content">
          <h2>AI-Driven Behavioral Assessment and Intervention for ADHD</h2>
          <p>A gamified, AI-powered system to assess and support ADHD treatment in children aged 5-10, with 84.3% accuracy and strong usability feedback.</p>
          <a href="#domain" className="hero-btn">Learn More</a>
        </div>
        
        {/* Right side - Image */}
        <div className="hero-image">
          <img src={`${process.env.PUBLIC_URL}/img/c.jpg`} alt="ADHD Assessment Tool" />

        </div>
      </div>
    </section>
  );
};

export default Hero;
