import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'Food Ordering Website',
      description: 'A responsive website to browse and order food items. Built using HTML, CSS, and JavaScript.'
    },
    {
      title: 'Anime Website',
      description: 'Created a fan-based anime info site using React and basic APIs. Includes character profiles, episode info, and more.'
    },
    {
      title: 'Other Projects',
      description: 'Small utilities and learning projects in C/C++ and Java. Check out my GitHub for more.'
    }
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h3>{project.title}</h3>
          <p>
            {project.description}
            {index === 2 && (
              <span>
                {' '}Check out my <a href="https://github.com/Anuvesh07" target="_blank" rel="noopener noreferrer">GitHub</a> for more.
              </span>
            )}
          </p>
        </div>
      ))}
    </section>
  );
}

export default Projects; 