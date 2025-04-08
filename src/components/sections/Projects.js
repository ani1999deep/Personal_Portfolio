import "../../css/Projects.css";
import { RevealOnScroll } from "../RevealOnScroll";
export const Projects = () => {
  const projectData = [
    {
      title: "Cryptocurrency Finance Price Tracker App",
      description:
        "Developed a dynamic cryptocurrency tracker in React.js with live price updates and search functionality, providing real-time market data on page load.",
      tech: ["React.js", "ECMAScript 6", "CSS"],
    },
    {
      title: "E-Commerce Cart",
      description:
        "Developed an advanced e-commerce cart using React.js and Redux with seamless add/remove functionality and robust cart management for enhanced user experience.",
      tech: ["React.js", "Redux.js", "ECMAScript 6", "CSS"],
    },
    {
      title: "E-Commerce Web App",
      description:
        "Full-stack e-commerce with modern UI, secure payment integration, and customizable product inventory.",
      tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    },
    {
      title: "Real-Time Chat App",
      description:
        "Scalable chat platform supporting real-time messaging, presence, and group chat features.",
      tech: ["Socket.IO", "Express", "React", "Redis"],
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <RevealOnScroll>
        <div className="projects-container">
          <h2 className="projects-title">Featured Projects</h2>
          <div className="projects-grid">
            {projectData.map((project, index) => (
              <div key={index} className="project-card">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href="#" className="project-link">
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
