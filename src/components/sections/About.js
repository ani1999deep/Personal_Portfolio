import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lottie from "lottie-react";
import Tilt from "react-parallax-tilt";
import aboutAnimation from "../../assets/about-lottie.json";
import { Starfield } from "../Starfield";
import "../../css/About.css";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    gsap.fromTo(
      el.querySelectorAll(".fade-in"),
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

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
    <section id="about" className="about-section" ref={sectionRef}>
      <Starfield />
      <div className="about-container fade-in">
        <h2 className="about-title">About Me</h2>

        <div className="lottie-wrapper fade-in zoom-on-scroll">
          <Lottie animationData={aboutAnimation} loop={true} />
        </div>

        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          glareEnable
          glareColor="#ffffff"
          className="fade-in"
        >
          <div className="about-card">
            <p className="about-description">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="skills-grid">
              <Tilt className="skills-section fade-in" tiltReverse>
                <h3 className="skills-title">Frontend</h3>
                <div className="skills-tags">
                  {frontendSkills.map((tech, key) => (
                    <span key={key} className="skill-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </Tilt>

              <Tilt className="skills-section fade-in" tiltReverse>
                <h3 className="skills-title">Backend</h3>
                <div className="skills-tags">
                  {backendSkills.map((tech, key) => (
                    <span key={key} className="skill-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </Tilt>
            </div>

            <Tilt className="skills-section fade-in">
              <h3 className="skills-title">Other Skills</h3>
              <div className="skills-tags">
                {otherSkills.map((skill, key) => (
                  <span key={key} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </Tilt>

            <Tilt className="skills-section fade-in">
              <h3 className="skills-title">Subjects</h3>
              <div className="skills-tags">
                {subjects.map((subject, key) => (
                  <span key={key} className="skill-tag">
                    {subject}
                  </span>
                ))}
              </div>
            </Tilt>
          </div>
        </Tilt>

        <div className="info-grid">
          <Tilt className="info-card fade-in">
            <h3 className="info-title">🏫 Education</h3>
            <ul className="info-list">
              <li>
                <strong>
                  B.Tech in Applied Electronics and Instrumentation Engineering
                </strong>{" "}
                - Future Institute of Engineering and Management (Aug 2017 – Jul
                2021)
              </li>
              <li>
                Relevant Coursework: Digital Electronics, Microprocessors,
                Control Systems, DBMS, C Programming...
              </li>
            </ul>
          </Tilt>

          <Tilt className="info-card fade-in">
            <h3 className="info-title">💼 Work Experience</h3>
            <div className="info-text">
              <div>
                <h4 className="info-role">
                  Node.js Developer Intern at Excellis IT Pvt. Ltd (July 2024 –
                  Sept 2024)
                </h4>
                <p>
                  Developed full-stack e-commerce app using React and Node.js
                  with secure API and MongoDB integration.
                </p>
              </div>
              <div>
                <h4 className="info-role">
                  Backend Developer Intern at Specstem (Jan 2023 – July 2024)
                </h4>
                <p>
                  Created server-side systems using Express.js and MongoDB,
                  improving security and performance.
                </p>
              </div>
              <div>
                <h4 className="info-role">
                  React.js Developer at Esolz Technologies (Nov 2022 – May 2023)
                </h4>
                <p>
                  Led dashboard SPA using Redux & APIs, boosting maintainability
                  and dev speed.
                </p>
              </div>
              <div>
                <h4 className="info-role">
                  Service Engineer at Penta Automation (Dec 2021 – June 2022)
                </h4>
                <p>
                  Delivered PLC & HMI systems to clients like Dabur India Ltd,
                  including AutoCAD and field commissioning.
                </p>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};
