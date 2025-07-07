import React from 'react';
import './Resume.css';

function LeetCodeGraph() {
  return (
    <section className="resume-section" style={{ marginTop: '100px' }}>
      <h2><span className="icon">📈</span>LeetCode Submission Graph</h2>
      <div className="resume-graph-container">
        <img
          src="https://leetcard.jacoblin.cool/Anuvesh07?theme=light&font=baloo&ext=contest"
          alt="LeetCode Submission Graph"
          className="resume-graph-img"
        />
      </div>
    </section>
  );
}

export default LeetCodeGraph; 