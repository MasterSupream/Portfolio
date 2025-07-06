import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation({ theme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Interactive window dot handlers
  const handleDotClick = (color) => {
    if (color === 'red') alert('Close (Demo)');
    if (color === 'yellow') alert('Minimize (Demo)');
    if (color === 'green') alert('Maximize (Demo)');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navigation${isScrolled ? ' scrolled' : ''}`} aria-label="Main Navigation">
      <div className="nav-container">
        <div className="window-controls">
          <span className="window-dot dot-red" onClick={() => handleDotClick('red')} tabIndex={0} role="button" aria-label="Close" />
          <span className="window-dot dot-yellow" onClick={() => handleDotClick('yellow')} tabIndex={0} role="button" aria-label="Minimize" />
          <span className="window-dot dot-green" onClick={() => handleDotClick('green')} tabIndex={0} role="button" aria-label="Maximize" />
        </div>
        
        {/* Mobile hamburger menu */}
        <button 
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></span>
        </button>
        
        <div className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            Home
          </Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
            About
          </Link>
          <Link to="/skills" className={location.pathname === '/skills' ? 'active' : ''}>
            Skills
          </Link>
          <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation; 