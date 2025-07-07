import React from 'react';

function Header() {
  return (
    <header id="header" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* YouTube video background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}>
        <iframe
          src="https://www.youtube.com/embed/zhDwjnYZiCo?autoplay=1&mute=1&controls=0&loop=1&playlist=zhDwjnYZiCo&modestbranding=1&showinfo=0&rel=0"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{
            width: '100vw',
            height: '100vh',
            minWidth: '100%',
            minHeight: '100%',
            objectFit: 'cover',
            pointerEvents: 'none',
          }}
          title="Header Background Video"
        />
      </div>
      <div className="header-content" style={{ position: 'relative', zIndex: 1 }}>
        <h1>Anuvesh Chilwal</h1>
        <p>Computer Science Student | Web & Java Developer</p>
        <div className="social">
          <a href="mailto:anuveshchilwal007@gmail.com">
            <span>📧</span> Email
          </a>
          <a href="https://github.com/Anuvesh07" target="_blank" rel="noopener noreferrer">
            <span>🐙</span> GitHub
          </a>
          <a href="https://linkedin.com/in/anuvesh-chilwal" target="_blank" rel="noopener noreferrer">
            <span>💼</span> LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header; 