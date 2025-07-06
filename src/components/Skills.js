import React, { useState } from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaJava, FaDatabase } from 'react-icons/fa';
import { SiC, SiCplusplus, SiTypescript, SiNextdotjs, SiAiohttp } from 'react-icons/si';

// Each array is a ring, innermost to outermost
const skills = [
  ['C'], // center
  ['HTML', 'CSS', 'Python', 'Java'], // first ring
  ['JavaScript', 'React', 'Node.js', 'SQL', 'C++', 'AI', 'Next.js', 'TypeScript'], // second ring
];

// Map each skill to a color as perceived in real life
const skillColors = {
  'C': '#1976d2', // blue
  'HTML': '#e44d26', // orange
  'CSS': '#2965f1', // blue
  'JavaScript': '#f7df1e', // yellow
  'React': '#61dafb', // cyan
  'Node.js': '#8cc84b', // green
  'Python': '#3776ab', // blue
  'Java': '#ea2d2e', // red
  'SQL': '#e38c00', // orange/gold
  'C++': '#00599c', // blue
  'AI': '#9c27b0', // purple
  'Next.js': '#000', // black
  'TypeScript': '#3178c6', // blue
};

// Map each skill to its icon component
const skillIcons = {
  'C': <SiC size={32} />, // C icon
  'HTML': <FaHtml5 size={32} />,
  'CSS': <FaCss3Alt size={32} />,
  'JavaScript': <FaJs size={32} />,
  'React': <FaReact size={32} />,
  'Node.js': <FaNodeJs size={32} />,
  'Python': <FaPython size={32} />,
  'Java': <FaJava size={32} />,
  'SQL': <FaDatabase size={32} />,
  'C++': <SiCplusplus size={32} />,
  'AI': <SiAiohttp size={32} />, // using aiohttp as a generic AI icon
  'Next.js': <SiNextdotjs size={32} />,
  'TypeScript': <SiTypescript size={32} />,
};

const containerSize = 500; // px
const center = containerSize / 2;
const minRing = 120; // px, minimum distance from center for first ring
const maxRing = 220; // px, maximum distance for outermost ring

// Dynamically calculate radii for each ring to fill the space
function getRingRadius(ringIdx, totalRings) {
  if (totalRings === 1) return minRing;
  return minRing + ((maxRing - minRing) * ringIdx) / (totalRings - 1);
}

function getCirclePosition(index, total, radius, revealed) {
  // If not revealed, keep at center
  if (!revealed) {
    return {
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%) scale(0.2)',
      opacity: 0,
      position: 'absolute',
      pointerEvents: 'none',
    };
  }
  // Revealed: animate to ring position
  const angle = (2 * Math.PI * index) / total - Math.PI / 2;
  const x = center + radius * Math.cos(angle);
  const y = center + radius * Math.sin(angle);
  return {
    left: `${x}px`,
    top: `${y}px`,
    transform: 'translate(-50%, -50%) scale(1)',
    opacity: 1,
    position: 'absolute',
    transition: 'all 0.7s cubic-bezier(.68,-0.55,.27,1.55)',
    zIndex: 5,
  };
}

function Skills() {
  const [revealed, setRevealed] = useState(false);
  const totalRings = skills.length - 1;

  return (
    <section id="skills" style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2>Skills</h2>
      <div className="skills-circles-container">
        <div
          className={`skills-circles${revealed ? ' revealed' : ''}`}
          style={{ width: containerSize, height: containerSize, position: 'relative' }}
          onMouseEnter={() => setRevealed(true)}
          onMouseLeave={() => setRevealed(false)}
        >
          {/* Render the core C always at center */}
          <div
            className="skill-circle core"
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              position: 'absolute',
              zIndex: 20,
              background: skillColors['C'],
              color: '#fff',
            }}
          >
            {skillIcons['C'] || 'C'}
          </div>
          {/* Render all other rings dynamically, spaced out */}
          {skills.slice(1).map((ring, ringIdx) =>
            ring.map((skill, i) => (
              <div
                className="skill-circle"
                key={`ring${ringIdx + 1}-skill${i}`}
                style={{
                  ...getCirclePosition(i, ring.length, getRingRadius(ringIdx, totalRings), revealed),
                  background: skillColors[skill] || '#2196f3',
                  color: ['JavaScript', 'SQL', 'React', 'TypeScript'].includes(skill) ? '#222' : '#fff',
                  border: skill === 'Next.js' ? '2px solid #fff' : undefined,
                }}
              >
                {skillIcons[skill] || skill}
              </div>
            ))
          )}
        </div>
      </div>
      <p style={{ color: '#888', fontSize: '0.95rem', marginTop: '1rem' }}>
        Hover over the C to reveal all skills!
      </p>
    </section>
  );
}

export default Skills; 