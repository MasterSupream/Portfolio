import React, { useMemo } from 'react';

// About content
const ABOUT_CONTENT = {
  title: 'About Me',
  description: 'I\'m a 2rd year CS engineering student who loves building cool things with code. Whether it\'s web development or exploring Java, I enjoy using tech to create whatever I imagine.'
};

function About() {
  const content = useMemo(() => (
    <div className="route-content-wrapper">
      <section id="about">
        <h2>{ABOUT_CONTENT.title}</h2>
        <p>{ABOUT_CONTENT.description}</p>
      </section>
    </div>
  ), []);

  return content;
}

export default About; 