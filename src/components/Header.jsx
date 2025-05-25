// components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="container header-content">
        <div className="logo">
          <h1>Pulse<span>Mind</span></h1>
        </div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#domain">Domain</a></li>
            <li><a href="#milestones">Milestones</a></li>
            <li><a href="#documents">Documents</a></li>
            <li><a href="#presentations">Presentations</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;