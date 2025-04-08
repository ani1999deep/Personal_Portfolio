// import { useState } from "react";
// import { RevealOnScroll } from "../RevealOnScroll";
// import emailjs from "@emailjs/browser";
// import "../../css/Contact.css";

// export const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         import.meta.env.VITE_SERVICE_ID,
//         import.meta.env.VITE_TEMPLATE_ID,
//         e.target,
//         import.meta.env.VITE_PUBLIC_KEY
//       )
//       .then((result) => {
//         alert("Message Sent!");
//         setFormData({ name: "", email: "", message: "" });
//       })
//       .catch(() => alert("Oops! Something went wrong. Please try again."));
//   };

//   return (
//     <section id="contact" className="contact-section">
//       <RevealOnScroll>
//         <div className="contact-container">
//           <h2 className="contact-heading">Get In Touch</h2>
//           <form className="contact-form" onSubmit={handleSubmit}>
//             <div className="input-wrapper">
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 required
//                 value={formData.name}
//                 className="input"
//                 placeholder="Name..."
//                 onChange={(e) =>
//                   setFormData({ ...formData, name: e.target.value })
//                 }
//               />
//             </div>

//             <div className="input-wrapper">
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 required
//                 value={formData.email}
//                 className="input"
//                 placeholder="example@gmail.com"
//                 onChange={(e) =>
//                   setFormData({ ...formData, email: e.target.value })
//                 }
//               />
//             </div>

//             <div className="input-wrapper">
//               <textarea
//                 id="message"
//                 name="message"
//                 required
//                 rows={5}
//                 value={formData.message}
//                 className="textarea"
//                 placeholder="Your Message..."
//                 onChange={(e) =>
//                   setFormData({ ...formData, message: e.target.value })
//                 }
//               />
//             </div>

//             <button type="submit" className="submit-button">
//               Send Message
//             </button>
//           </form>
//         </div>
//       </RevealOnScroll>
//     </section>
//   );
// };

import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../../css/Contact.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section id="contact" className="contact-section">
      <RevealOnScroll>
        <div className="contact-container">
          <h2 className="contact-heading">Get In Touch</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="input"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="input-wrapper">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="input"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="input-wrapper">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="textarea"
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>

          {/* Social Icons */}
          <div className="social-links">
            <a
              href="https://github.com/ani1999deep"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
            >
              <FontAwesomeIcon icon={faGithub} className="social-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/anideepofficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
            >
              <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
