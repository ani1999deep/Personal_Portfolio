import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tilt from "react-parallax-tilt";
import coderGif from "../../assets/coder.gif";
import "../../css/Home.css";

gsap.registerPlugin(ScrollTrigger);

export const Home = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      tl.from(contentRef.current, {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power4.out",
      })
        .from(".home-title", { x: -60, opacity: 0, duration: 1 }, "-=0.8")
        .from(".home-description", { x: 60, opacity: 0, duration: 1 }, "-=0.8")
        .from(".home-buttons .btn", {
          opacity: 0,
          y: 30,
          stagger: 0.2,
          duration: 0.8,
          ease: "back.out(1.7)",
        });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const canvas = document.getElementById("stars-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();

    const stars = Array.from({ length: 100 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.2,
      speed: Math.random() * 0.5 + 0.2,
    }));

    function animateStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        star.y += star.speed;
        if (star.y > canvas.height) star.y = 0;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
      });
      requestAnimationFrame(animateStars);
    }

    animateStars();
    window.addEventListener("resize", setCanvasSize);

    return () => window.removeEventListener("resize", setCanvasSize);
  }, []);

  return (
    <section id="home" className="home-section" ref={sectionRef}>
      <canvas id="stars-canvas" />

      <div className="home-container" ref={contentRef}>
        <div className="home-left">
          <img src={coderGif} alt="Coder" className="gif-animation" />
        </div>

        <div className="home-right">
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
            <div className="tilt-wrapper">
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                <div>
                  <a href="#projects" className="btn btn-primary">
                    View Projects
                  </a>
                </div>
              </Tilt>
            </div>
            <div className="tilt-wrapper">
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                <div>
                  <a href="#contact" className="btn btn-secondary">
                    Contact Me
                  </a>
                </div>
              </Tilt>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
