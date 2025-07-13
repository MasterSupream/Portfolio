import React, { useMemo } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Header.css';

// Social links data
const SOCIAL_LINKS = [
  {
    href: 'mailto:anuveshchilwal007@gmail.com',
    className: 'email',
    ariaLabel: 'Email',
    icon: <FaEnvelope />,
    label: 'Email'
  },
  {
    href: 'https://github.com/Anuvesh07',
    className: 'github',
    ariaLabel: 'GitHub',
    icon: <FaGithub />,
    label: 'GitHub'
  },
  {
    href: 'https://www.linkedin.com/in/anuvesh-chilwal-891382357',
    className: 'linkedin',
    ariaLabel: 'LinkedIn',
    icon: <FaLinkedin />,
    label: 'LinkedIn'
  }
];

function Header() {
  const socialButtons = useMemo(() => {
    return SOCIAL_LINKS.map((link, index) => (
      <a
        key={index}
        href={link.href}
        className={`header-social-btn ${link.className}`}
        aria-label={link.ariaLabel}
        target="_blank"
        rel="noopener noreferrer"
      >
        {link.icon}
        <span>{link.label}</span>
      </a>
    ));
  }, []);

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">
          <span className="colorful-name">Anuvesh Chilwal</span>
        </h1>
        <p className="header-tagline">Computer Science Student | Web & Java Developer</p>
        <div className="header-social">
          {socialButtons}
        </div>
      </div>
    </header>
  );
}

export default Header; 