import React from 'react';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import LeetCodeGraph from './LeetCodeGraph';
import { FaGithub } from 'react-icons/fa';

function Home() {
  return (
    <div className="route-content-wrapper" style={{ position: 'relative', overflow: 'hidden' }}>
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