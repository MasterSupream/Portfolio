import React from 'react';
import './Resume.css';

const skills = [
  { name: 'JavaScript', level: 5 },
  { name: 'Java', level: 4 },
  { name: 'React', level: 4 },
  { name: 'HTML & CSS', level: 5 },
  { name: 'Problem Solving', level: 5 },
];

const skillIcons = {
  'JavaScript': '🟨',
  'Java': '☕',
  'React': '⚛️',
  'HTML & CSS': '🌐',
  'Problem Solving': '🧩',
};

const sectionIcons = {
  about: '🎮',
  skills: '🛡️',
  projects: '🏆',
};

function Resume() {
  return (
    <main className="resume-game-style" style={{ paddingTop: '100px' }}>
      <div className="resume-header">
        <h1>Anuvesh Chilwal</h1>
        <div className="resume-contact-info">
          <p>📱 8077627975</p>
          <p>✉️ anuveshchilwal007@gmail.com</p>
          <p>🐙 <a href="https://github.com/Anuvesh07" target="_blank" rel="noopener noreferrer">github.com/Anuvesh07</a></p>
        </div>
        <button className="resume-cta" onClick={() => alert('Download coming soon!')}>Download Resume</button>
      </div>
      <div className="resume-content-wrapper">
        <section className="resume-section">
          <h2><span className="icon">{sectionIcons.about}</span>About Me</h2>
          <p>Adventurous coder on a quest to master web and Java development. Loves solving puzzles and leveling up skills!</p>
        </section>
        <section className="resume-section">
          <h2><span className="icon">{sectionIcons.skills}</span>Skills</h2>
          <ul>
            {skills.map(skill => (
              <li key={skill.name}>
                <span className="icon">{skillIcons[skill.name]}</span>
                {skill.name}
                <div className="resume-skill-bar">
                  <div
                    className="resume-skill-bar-inner"
                    style={{ width: `${skill.level * 20}%` }}
                    aria-label={`${skill.name} skill level: ${skill.level} out of 5`}
                  />
                </div>
              </li>
            ))}
          </ul>
        </section>
        <section className="resume-section">
          <h2><span className="icon">{sectionIcons.projects}</span>Projects</h2>
          <ul>
            <li>🎯 Portfolio Website - Showcased skills and projects in a modern, interactive format.</li>
            <li>🕹️ Java Game - Built a simple RPG game in Java as a learning quest.</li>
            <li>🛠️ Web Tools - Created small web utilities to help fellow adventurers.</li>
          </ul>
        </section>
      </div>
      <footer className="resume-footer">
        <p>Contact: anuveshchilwal007@gmail.com</p>
      </footer>
    </main>
  );
}

export default Resume; 