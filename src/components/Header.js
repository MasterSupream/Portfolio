import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Anuvesh Chilwal</h1>
        <p className="header-tagline">Computer Science Student | Web & Java Developer</p>
        <div className="header-social">
          <a
            href="mailto:anuveshchilwal007@gmail.com"
            className="header-social-btn email"
            aria-label="Email"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
            <span>Email</span>
          </a>
          <a
            href="https://github.com/Anuvesh07"
            className="header-social-btn github"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/anuvesh-chilwal"
            className="header-social-btn linkedin"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header; 