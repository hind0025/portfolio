import React from 'react';
import '../Styles/Project.css';

const projects = [
  {
    title: "Journio",
    description: "A travel-booking web app for seamless hotel and flight booking.",
    liveLink: "https://journioo-travelling.netlify.app/",
    githubLink: "https://github.com/hind0025/backendjournio.git",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"]
  },
  {
    title: "Shoe Stack",
    description: "An e-commerce website for trendy sneakers and shoes.",
    liveLink: "https://shoe-stack-ez52.vercel.app/",
    githubLink: "https://github.com/HarmanDhiman371/Full_Stack.git",
    technologies: ["React", "Node.js", "MYSQL", "Express","Javascript"]
  },
  {
    title: "EmoSense",
    description: "A machine learning model to identify human emotions.",
    githubLink: "https://github.com/jaichopra0702/Emotion-detection-main.git",
    technologies: ["Python", "OpenCV", "TensorFlow", "Flask"]
  },
  {
    title: "Portfolio",
    description: "My personal developer portfolio built with React.",
    liveLink: "https://your-live-link.com/portfolio",
    githubLink: "https://github.com/hind0025/portfolio.git",
    technologies: ["React", "CSS", "Vercel"]
  }
];

function Project() {
  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            {project.technologies && (
              <ul className="tech-list">
                {project.technologies.map((tech, idx) => (
                  <li key={idx} className="tech-item">{tech}</li>
                ))}
              </ul>
            )}

            <div className="project-links">
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Site</a>
              )}
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
