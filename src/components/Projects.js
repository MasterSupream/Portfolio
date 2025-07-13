import React, { useMemo } from 'react';

// Projects data
const PROJECTS_DATA = [
  {
    title: 'Food Ordering Website',
    description: 'A responsive website to browse and order food items. Built using HTML, CSS, and JavaScript.',
    link: 'https://github.com/Anuvesh07'
  },
  {
    title: 'Anime Website',
    description: 'Created a fan-based anime info site using React and basic APIs. Includes character profiles, episode info, and more.',
    link: 'https://github.com/Anuvesh07'
  },
  {
    title: 'Other Projects',
    description: 'Small utilities and learning projects in C/C++ and Java. Check out my GitHub for more.',
    link: 'https://github.com/Anuvesh07',
    showGitHubLink: true
  }
];

function Projects() {
  const renderProjects = useMemo(() => {
    return PROJECTS_DATA.map((project, index) => (
      <div key={index} className="project">
        <h3>{project.title}</h3>
        <p>
          {project.description}
          {project.showGitHubLink && (
            <span>
              {' '}Check out my <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                GitHub
              </a> for more.
            </span>
          )}
        </p>
      </div>
    ));
  }, []);

  return (
    <div className="route-content-wrapper">
      <section id="projects">
        <h2>Projects</h2>
        {renderProjects}
      </section>
    </div>
  );
}

export default Projects; 