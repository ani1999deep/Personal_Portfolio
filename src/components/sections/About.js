import { RevealOnScroll } from "../RevealOnScroll";
import "../../css/About.css";

export const About = () => {
  const frontendSkills = ["React", "JavaScript", "ECMAScript 6"];
  const backendSkills = ["Node.js", "Express.js", "MongoDB"];

  return (
    <section id="about" className="about-section">
      <RevealOnScroll>
        <div className="about-container">
          <h2 className="about-title">About Me</h2>

          <div className="about-card">
            <p className="about-description">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="skills-grid">
              <div className="skills-section">
                <h3 className="skills-title">Frontend</h3>
                <div className="skills-tags">
                  {frontendSkills.map((tech, key) => (
                    <span key={key} className="skill-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="skills-section">
                <h3 className="skills-title">Backend</h3>
                <div className="skills-tags">
                  {backendSkills.map((tech, key) => (
                    <span key={key} className="skill-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="info-grid">
            <div className="info-card">
              <h3 className="info-title">🏫 Education</h3>
              <ul className="info-list">
                <li>
                  <strong>
                    B.Tech in Applied Electronics and Instrumentation
                    Engineering
                  </strong>{" "}
                  -Future Institute of Engineering and Management(August 2017 –
                  July 2021)
                </li>
                <li>
                  Relevant Coursework: Digital Electronics, Microprocessors,
                  Control Systems, DBMS,C Programming...
                </li>
              </ul>
            </div>
            <div className="info-card">
              <h3 className="info-title">💼 Work Experience</h3>
              <div className="info-text">
                <div>
                  <h4 className="info-role">
                    Full-Stack Developer at Oxford House ( June 2023– Present)
                  </h4>
                  <p>
                    Developed and maintained a school management web app using
                    React.js, Node.js, Express.js, and MongoDB, with secure
                    JWT-based login, role-based access, RESTful APIs,
                    third-party integrations, and performance optimizations to
                    improve speed, data flow, and user experience.
                  </p>
                </div>
                <div>
                  <h4 className="info-role">
                    React.js Developer at Esolz Technologies Pvt. Ltd. (Nov 2022
                    – May 2023)
                  </h4>
                  <p>
                    Developed a React-based admin dashboard with single-page
                    design, used Redux for state management, added drag-and-drop
                    features, and connected APIs to improve performance and
                    reduce development time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
