import "../../css/Home.css";
import { RevealOnScroll } from "../RevealOnScroll";
export const Home = () => {
  return (
    <section id="home" className="home-section">
      <RevealOnScroll>
        <div className="home-content">
          <h1 className="home-title">Hi, I'm Anideep Bhowmick</h1>

          <p className="home-description">
            I am a full-stack developer with a background in Electronics and
            Instrumentation Engineering and experience in industrial automation.
            My expertise combines system-level problem-solving with modern web
            technologies. I focus on building clean, scalable applications that
            deliver exceptional performance and user experience. Whether backend
            or frontend, I create high-performance solutions that bridge
            industrial systems and software development.
          </p>

          <div className="home-buttons">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
