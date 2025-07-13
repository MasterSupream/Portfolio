import React, { useState, useMemo, useCallback } from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaJava, FaDatabase } from 'react-icons/fa';
import { SiC, SiCplusplus, SiTypescript, SiNextdotjs, SiAiohttp } from 'react-icons/si';

// Constants
const CONTAINER_SIZE = 500;
const CENTER = CONTAINER_SIZE / 2;
const MIN_RING = 120;
const MAX_RING = 220;
const ICON_SIZE = 32;

// Skills data structure
const SKILLS_DATA = [
  ['C'], // center
  ['HTML', 'CSS', 'Python', 'Java'], // first ring
  ['JavaScript', 'React', 'Node.js', 'SQL', 'C++', 'AI', 'Next.js', 'TypeScript'], // second ring
];

// Skill colors mapping
const SKILL_COLORS = {
  'C': '#1976d2',
  'HTML': '#e44d26',
  'CSS': '#2965f1',
  'JavaScript': '#f7df1e',
  'React': '#61dafb',
  'Node.js': '#8cc84b',
  'Python': '#3776ab',
  'Java': '#ea2d2e',
  'SQL': '#e38c00',
  'C++': '#00599c',
  'AI': '#9c27b0',
  'Next.js': '#000',
  'TypeScript': '#3178c6',
};

// Skills that need dark text color
const DARK_TEXT_SKILLS = ['JavaScript', 'SQL', 'React', 'TypeScript'];

// Icon mapping
const SKILL_ICONS = {
  'C': <SiC size={ICON_SIZE} />,
  'HTML': <FaHtml5 size={ICON_SIZE} />,
  'CSS': <FaCss3Alt size={ICON_SIZE} />,
  'JavaScript': <FaJs size={ICON_SIZE} />,
  'React': <FaReact size={ICON_SIZE} />,
  'Node.js': <FaNodeJs size={ICON_SIZE} />,
  'Python': <FaPython size={ICON_SIZE} />,
  'Java': <FaJava size={ICON_SIZE} />,
  'SQL': <FaDatabase size={ICON_SIZE} />,
  'C++': <SiCplusplus size={ICON_SIZE} />,
  'AI': <SiAiohttp size={ICON_SIZE} />,
  'Next.js': <SiNextdotjs size={ICON_SIZE} />,
  'TypeScript': <SiTypescript size={ICON_SIZE} />,
};

// Utility functions
const getRingRadius = (ringIdx, totalRings) => {
  if (totalRings === 1) return MIN_RING;
  return MIN_RING + ((MAX_RING - MIN_RING) * ringIdx) / (totalRings - 1);
};

const getCirclePosition = (index, total, radius, revealed) => {
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
  
  const angle = (2 * Math.PI * index) / total - Math.PI / 2;
  const x = CENTER + radius * Math.cos(angle);
  const y = CENTER + radius * Math.sin(angle);
  
  return {
    left: `${x}px`,
    top: `${y}px`,
    transform: 'translate(-50%, -50%) scale(1)',
    opacity: 1,
    position: 'absolute',
    transition: 'all 0.7s cubic-bezier(.68,-0.55,.27,1.55)',
    zIndex: 5,
  };
};

const getSkillStyle = (skill, revealed, index, total, radius) => {
  const basePosition = getCirclePosition(index, total, radius, revealed);
  const color = SKILL_COLORS[skill] || '#2196f3';
  const textColor = DARK_TEXT_SKILLS.includes(skill) ? '#222' : '#fff';
  const border = skill === 'Next.js' ? '2px solid #fff' : undefined;
  
  return {
    ...basePosition,
    background: color,
    color: textColor,
    border,
  };
};

function Skills() {
  const [revealed, setRevealed] = useState(false);
  
  const totalRings = useMemo(() => SKILLS_DATA.length - 1, []);
  
  const handleMouseEnter = useCallback(() => setRevealed(true), []);
  const handleMouseLeave = useCallback(() => setRevealed(false), []);
  
  const containerStyle = useMemo(() => ({
    width: CONTAINER_SIZE,
    height: CONTAINER_SIZE,
    position: 'relative'
  }), []);
  
  const coreStyle = useMemo(() => ({
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    zIndex: 20,
    background: SKILL_COLORS['C'],
    color: '#fff',
  }), []);
  
  const sectionStyle = useMemo(() => ({
    textAlign: 'center',
    marginTop: '2rem'
  }), []);
  
  const instructionStyle = useMemo(() => ({
    color: '#888',
    fontSize: '0.95rem',
    marginTop: '1rem'
  }), []);

  return (
    <div className="route-content-wrapper">
      <section id="skills" style={sectionStyle}>
        <h2>Skills</h2>
        <div className="skills-circles-container">
          <div
            className={`skills-circles${revealed ? ' revealed' : ''}`}
            style={containerStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Core C skill */}
            <div className="skill-circle core" style={coreStyle}>
              {SKILL_ICONS['C'] || 'C'}
            </div>
            
            {/* Render skill rings */}
            {SKILLS_DATA.slice(1).map((ring, ringIdx) =>
              ring.map((skill, i) => {
                const radius = getRingRadius(ringIdx, totalRings);
                const skillStyle = getSkillStyle(skill, revealed, i, ring.length, radius);
                
                return (
                  <div
                    className="skill-circle"
                    key={`ring${ringIdx + 1}-skill${i}`}
                    style={skillStyle}
                  >
                    {SKILL_ICONS[skill] || skill}
                  </div>
                );
              })
            )}
          </div>
        </div>
        <p style={instructionStyle}>
          Hover over the C to reveal all skills!
        </p>
      </section>
    </div>
  );
}

export default Skills; 