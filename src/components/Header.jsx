// // components/Header.jsx
// import React from 'react';

// const Header = () => {
//   return (
//     <header>
//       <div className="container header-content">
//         <div className="logo">
//           <h1>Pulse<span>Mind</span></h1>
//         </div>
//         <nav>
//           <ul>
//             <li><a href="#home">Home</a></li>
//             <li><a href="#domain">Domain</a></li>
//             <li><a href="#milestones">Milestones</a></li>
//             <li><a href="#documents">Documents</a></li>
//             <li><a href="#presentations">Presentations</a></li>
//             <li><a href="#about">About Us</a></li>
//             <li><a href="#contact">Contact</a></li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;

// components/Header.jsx
import React, { useState, useEffect } from 'react';
// import './Header.css'; // Make sure to import your CSS file for header styles

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Optional: Close menu if window is resized to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    // Cleanup function to remove the event listener when the component unmounts
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]); // Re-run effect if isMobileMenuOpen changes

  // Function to close mobile menu when a link is clicked
  const handleNavLinkClick = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header>
      {/* The className="container" was on header-content, moved to outer div for clarity if needed */}
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>Pulse<span>Mind</span></h1>
          </div>

          <button
            className={`hamburger-menu ${isMobileMenuOpen ? 'open' : ''}`}
            aria-label="Toggle navigation"
            aria-expanded={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          >
            <span className="hamburger-menu__line"></span>
            <span className="hamburger-menu__line"></span>
            <span className="hamburger-menu__line"></span>
          </button>

          <nav>
            {/* Apply 'nav-active' class based on state to show/hide on mobile */}
            <ul className={isMobileMenuOpen ? 'nav-active' : ''}>
              <li><a href="#home" onClick={handleNavLinkClick}>Home</a></li>
              <li><a href="#domain" onClick={handleNavLinkClick}>Domain</a></li>
              <li><a href="#milestones" onClick={handleNavLinkClick}>Milestones</a></li>
              <li><a href="#documents" onClick={handleNavLinkClick}>Documents</a></li>
              <li><a href="#presentations" onClick={handleNavLinkClick}>Presentations</a></li>
              <li><a href="#about" onClick={handleNavLinkClick}>About Us</a></li>
              <li><a href="#contact" onClick={handleNavLinkClick}>Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;