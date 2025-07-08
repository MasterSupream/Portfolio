import React from 'react';
import './Resume.css';
import { FaGithub } from 'react-icons/fa';

function GitHubGraph() {
  return (
    <section className="resume-section" style={{ marginTop: '100px' }}>
      <h2><span className="icon"><FaGithub style={{ color: '#333' }} /></span>GitHub Contributions</h2>
      <div className="resume-graph-container">
        <img
          src="https://ghchart.rshah.org/Anuvesh07"
          alt="GitHub Contributions Graph"
          className="resume-graph-img"
        />
      </div>
    </section>
  );
}

export default GitHubGraph; 