import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation({ navState, setNavState }) {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
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

  const handleDotClick = (color) => {
    if (color === 'red') setNavState('hidden');
    if (color === 'yellow') setNavState(navState === 'minimized' ? 'normal' : 'minimized');
    if (color === 'green') setNavState(navState === 'maximized' ? 'normal' : 'maximized');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Restore button for hidden nav
  if (navState === 'hidden') {
    return (
      <button
        className="nav-restore-btn"
        onClick={() => setNavState('normal')}
        style={{ position: 'fixed', top: 24, left: 24, zIndex: 2002 }}
        aria-label="Restore navigation bar"
      >
        Show Nav
      </button>
    );
  }

  // Nav bar classes
  let navClass = `navigation${isScrolled ? ' scrolled' : ''}`;
  if (navState === 'maximized') navClass += ' nav-maximized';
  if (navState === 'minimized') navClass += ' nav-bottom';

  return (
    <nav className={navClass} aria-label="Main Navigation">
      <div className="nav-container">
        <div className="window-controls">
          <span className="window-dot dot-red" onClick={() => handleDotClick('red')} tabIndex={0} role="button" aria-label="Close" />
          <span className="window-dot dot-yellow" onClick={() => handleDotClick('yellow')} tabIndex={0} role="button" aria-label="Minimize/Restore to bottom/top" />
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
          <Link to="/" className={`tab-home${location.pathname === '/' ? ' active' : ''}`}>Home</Link>
          <Link to="/about" className={`tab-about${location.pathname === '/about' ? ' active' : ''}`}>About</Link>
          <Link to="/skills" className={`tab-skills${location.pathname === '/skills' ? ' active' : ''}`}>Skills</Link>
          <Link to="/projects" className={`tab-projects${location.pathname === '/projects' ? ' active' : ''}`}>Projects</Link>
          <Link to="/resume" className={`tab-resume${location.pathname === '/resume' ? ' active' : ''}`}>Resume</Link>
          <Link to="/leetcode" className={`tab-leetcode${location.pathname === '/leetcode' ? ' active' : ''}`}>LeetCode</Link>
          <Link to="/github" className={`tab-github${location.pathname === '/github' ? ' active' : ''}`}>GitHub</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation; 