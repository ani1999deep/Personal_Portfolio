import "../../css/Projects.css";
import { RevealOnScroll } from "../RevealOnScroll";
export const Projects = () => {
  const projectData = [
    {
      title: "Cryptocurrency Finance Price Tracker App",
      description:
        "Scalable cloud infrastructure management with real-time monitoring and automated scaling.",
      tech: ["React", "Node.js", "AWS", "Docker"],
    },
    {
      title: "AI Analytics Dashboard",
      description:
        "ML-powered data visualization platform with predictive analytics and interactive reports.",
      tech: ["Python", "TensorFlow", "D3.js", "Flask"],
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
