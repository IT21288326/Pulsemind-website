// components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div>
            <h3 className="footer-logo">Pulse<span>Mind</span></h3>
            <p className="footer-desc">AI-Driven Behavioral Assessment and Intervention for ADHD - A research project by the SLIIT IT4010 team.</p>
          </div>
          
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#domain">Domain</a></li>
              <li><a href="#milestones">Milestones</a></li>
              <li><a href="#documents">Documents</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h3>Resources</h3>
            <ul>
              <li><a href="#presentations">Presentations</a></li>
              <li><a href="#about">Team</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} PulseMind Project. All rights reserved. Faculty of Computing - SLIIT.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;