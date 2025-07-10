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
    <main className="resume-game-style" style={{ paddingTop: '20px', position: 'relative', overflow: 'hidden' }}>
      {/* Unified YouTube video background (copied from Home.js) */}
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
            display: 'block',
          }}
          title="Resume Background Video"
        />
      </div>
      {/* Content above background */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div className="resume-content-wrapper" style={{ marginTop: 0, padding: '24px 16px 16px 16px', gap: '24px' }}>
          <section className="resume-section" style={{ marginTop: 0 }}>
            <h2><span className="icon">{sectionIcons.about}</span>About Me</h2>
            <p>Adventurous coder on a quest to master web and Java development. Loves solving puzzles and leveling up skills!</p>
          </section>
          <section className="resume-section" style={{ marginTop: 0 }}>
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
          <section className="resume-section" style={{ marginTop: 0 }}>
            <h2><span className="icon">{sectionIcons.projects}</span>Projects</h2>
            <ul>
              <li>🎯 Portfolio Website - Showcased skills and projects in a modern, interactive format.</li>
              <li>🕹️ Java Game - Built a simple RPG game in Java as a learning quest.</li>
              <li>🛠️ Web Tools - Created small web utilities to help fellow adventurers.</li>
            </ul>
          </section>
        </div>
        {/* Download Resume button */}
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '24px 0 0 0', position: 'relative', zIndex: 1 }}>
          <button 
            className="resume-cta"
            style={{
              position: 'relative',
              padding: '16px 32px',
              fontSize: '1.2rem',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
              border: 'none',
              borderRadius: '50px',
              color: 'white',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 32px rgba(102, 126, 234, 0.3)',
              overflow: 'hidden',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              transform: 'translateY(0)',
              animation: 'pulse 2s infinite',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px) scale(1.05)';
              e.target.style.boxShadow = '0 12px 40px rgba(102, 126, 234, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = '0 8px 32px rgba(102, 126, 234, 0.3)';
            }}
          >
            {/* Revolving light effect - Enhanced */}
            <div style={{
              position: 'absolute',
              top: '-3px',
              left: '-3px',
              right: '-3px',
              bottom: '-3px',
              background: 'conic-gradient(from 0deg, transparent, #00ff00, #00ff88, #00ff00, transparent)',
              borderRadius: '53px',
              animation: 'rotate 2s linear infinite',
              pointerEvents: 'none',
              zIndex: -2,
              filter: 'blur(1px)',
            }} />
            <div style={{
              position: 'absolute',
              top: '-2px',
              left: '-2px',
              right: '-2px',
              bottom: '-2px',
              background: 'conic-gradient(from 180deg, transparent, #00ff00, #00ff88, #00ff00, transparent)',
              borderRadius: '52px',
              animation: 'rotate 3s linear infinite reverse',
              pointerEvents: 'none',
              zIndex: -1,
            }} />
            <div style={{
              position: 'absolute',
              top: '0',
              left: '0',
              right: '0',
              bottom: '0',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
              borderRadius: '50px',
              zIndex: 0,
            }} />
            <a 
              href="/Resume.pdf" 
              download 
              style={{ 
                color: 'inherit', 
                textDecoration: 'none',
                position: 'relative',
                zIndex: 1,
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              📄 Download Resume
            </a>
          </button>
        </div>
        <style jsx>{`
          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes pulse {
            0%, 100% { 
              box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3), 0 0 20px rgba(0, 255, 0, 0.2);
            }
            50% { 
              box-shadow: 0 8px 32px rgba(102, 126, 234, 0.5), 0 0 30px rgba(0, 255, 0, 0.4), 0 0 40px rgba(0, 255, 0, 0.2);
            }
          }
        `}</style>
      </div>
    </main>
  );
}

export default Resume; 