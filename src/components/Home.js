import React from 'react';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import LeetCodeGraph from './LeetCodeGraph';
import { FaGithub } from 'react-icons/fa';

function Home() {
  return (
    <div className="route-content-wrapper" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Unified YouTube video background */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
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
          title="Home Background Video"
        />
      </div>
      {/* Other sections on top of background */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <About />
        <Skills />
        <Projects />
        <LeetCodeGraph />
        <section className="resume-section">
          <h2><span className="icon"><FaGithub style={{ color: '#333' }} /></span>GitHub Contributions</h2>
          <div className="resume-graph-container">
            <img
              src="https://ghchart.rshah.org/Anuvesh07"
              alt="GitHub Contributions Graph"
              className="resume-graph-img"
              style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px', background: '#fff', boxShadow: '0 2px 12px rgba(102,126,234,0.07)' }}
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home; 