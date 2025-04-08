import "../../css/Home.css";
import { RevealOnScroll } from "../RevealOnScroll";
export const Home = () => {
  return (
    <section id="home" className="home-section">
      <RevealOnScroll>
        <div className="home-content">
          <h1 className="home-title">Hi, I'm Anideep Bhowmick</h1>

          <p className="home-description">
            I’m a full-stack developer who loves crafting clean, scalable web
            applications. My goal is to build solutions that offer both
            exceptional performance and a delightful user experience.
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
