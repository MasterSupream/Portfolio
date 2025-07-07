import React from 'react';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';

function Home() {
  return (
    <div className="route-content-wrapper">
      <Header />
      <About />
      <Skills />
      <Projects />
      <section className="resume-section">
        <h2><span className="icon">📈</span>LeetCode Submission Graph</h2>
        <div className="resume-graph-container">
          <img
            src="https://leetcard.jacoblin.cool/Anuvesh07?theme=light&font=baloo&ext=contest"
            alt="LeetCode Submission Graph"
            className="resume-graph-img"
            style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 2px 12px rgba(102,126,234,0.07)' }}
          />
        </div>
      </section>
      <section className="resume-section">
        <h2><span className="icon">🌱</span>GitHub Contributions</h2>
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
  );
}

export default Home; 