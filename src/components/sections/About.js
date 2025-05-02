import { RevealOnScroll } from "../RevealOnScroll";
import "../../css/About.css";

export const About = () => {
  const frontendSkills = ["React", "JavaScript", "ECMAScript 6"];
  const backendSkills = ["Node.js", "Express.js", "MongoDB"];
  const otherSkills = [
    "PLC (CJ2M Series, CP1E)",
    "HMI (NB Series and RENU-FP2070TN-V2)",
    "AutoCAD",
    "Git and GitHub",
  ];

  const subjects = ["Industrial Instrumentation", "Sensors and Transducers"];

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

            <div className="skills-section">
              <h3 className="skills-title">Other Skills</h3>
              <div className="skills-tags">
                {otherSkills.map((skill, key) => (
                  <span key={key} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="skills-section">
              <h3 className="skills-title">Subjects</h3>
              <div className="skills-tags">
                {subjects.map((subject, key) => (
                  <span key={key} className="skill-tag">
                    {subject}
                  </span>
                ))}
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
                    Node.js Developer Intern at Excellis IT Pvt. Ltd (July 2024
                    – Sept 2024)
                  </h4>
                  <p>
                    Developed a full-fledged e-commerce platform using React.js
                    for the frontend and Node.js with Express for the backend.
                    Designed RESTful APIs for user account management including
                    edit, delete, password recovery, reset, and verification
                    functionalities. Maintained a robust MongoDB database to
                    ensure data integrity. Ensured seamless integration between
                    frontend and backend to deliver a smooth and
                    high-performance experience.
                  </p>
                </div>

                <div>
                  <h4 className="info-role">
                    Backend Developer Intern at Specstem Digital Pvt. Ltd. (Jan
                    2023 – July 2024)
                  </h4>
                  <p>
                    Built and maintained scalable server-side applications using
                    Node.js and Express.js. Implemented strong security measures
                    to safeguard user data and uphold system integrity.
                    Leveraged MongoDB and Mongoose to optimize database
                    performance. Contributed to backend architecture and
                    enhanced overall application reliability and efficiency.
                  </p>
                </div>

                <div>
                  <h4 className="info-role">
                    React.js Developer at Esolz Technologies Pvt. Ltd. (Nov 2022
                    – May 2023)
                  </h4>
                  <p>
                    Led the development of a dynamic React-based admin dashboard
                    featuring a single-page application design. Integrated
                    RESTful APIs to improve responsiveness and reduced
                    development time significantly. Utilized Redux for efficient
                    state management, streamlining data handling and improving
                    UI interactions. Focused on building maintainable and
                    scalable front-end codebases.
                  </p>
                </div>

                <div>
                  <h4 className="info-role">
                    Service Engineer at Penta Automation (Dec 2021 – June 2022)
                  </h4>
                  <p>
                    Delivered industrial automation solutions involving PLC
                    (CJ2M/CP1E) and HMI (NB Series) programming for major
                    clients. Worked on vision system setup for Dabur India Ltd.,
                    including sensor integration and camera configuration.
                    Conducted AutoCAD-based I/O mapping and performed electrical
                    panel testing. Commissioned MCC, PCC, and PLC panels across
                    various industrial sites.
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
