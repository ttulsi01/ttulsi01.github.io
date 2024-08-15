import React from 'react';

interface Project {
  title: string;
  overview: string;
  techStack: string[];
  link?: string;
}

const projectsData: Project[] = [
  {
    title: 'BookTalk',
    overview: 'A mobile app for book enthusiasts to share thoughts and connect with readers.',
    techStack: ['React Native', 'Expo', 'Firebase'],
    link: 'https://github.com/ttulsi01/BookTalk',
  },
  {
    title: 'ChatPI',
    overview: 'A multi-lingual chatbot for querying novel plots and summarizing key points.',
    techStack: ['Google Colab', 'Python'],
    link: 'https://github.com/ttulsi01/ChatPI',
  },
  {
    title: 'ChatRegex for Detective Novels',
    overview: 'A REGEX-based chatbot for text analysis of crime novels.',
    techStack: ['Python', 'Regex'],
    link: 'https://github.com/ttulsi01/ChatRegex',
  },
  {
    title: 'Suggestify',
    overview: 'An app to find movies or TV shows based on user mood and choice.',
    techStack: ['HTML', 'CSS', 'JS', 'Tailwind CSS', 'Firebase', 'TMDB API'],
    link: 'https://github.com/ttulsi01/Suggestify',
  },
];

const Projects: React.FC = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-section-title">Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div key={project.title} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-overview">{project.overview}</p>
            <div className="project-tech-stack">
              {project.techStack.map((tech) => (
                <span key={tech} className="project-tech">{tech}</span>
              ))}
            </div>
            {project.link && (
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;