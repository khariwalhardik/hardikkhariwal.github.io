import { motion } from "framer-motion";
import "./About.css";

export const About = () => {
  return (
    <section id="about" className="about">
      {/* Left Side - Image */}
      <motion.div
        className="about__image-container"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src="https://avatars.githubusercontent.com/u/00000000?v=4" // replace with your real image
          alt="Hardik Khariwal"
          className="about__image"
        />
      </motion.div>

      {/* Right Side - Text */}
      <motion.div
        className="about__content"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="about__title">About Me</h2>

        <p className="about__text">
          I’m <strong>Hardik Khariwal</strong>, an Electrical Engineering student passionate about combining{" "}
          <strong>AI, full-stack development, and embedded systems</strong> to build intelligent and interactive products.
        </p>

        <p className="about__text">
          My interests lie in developing end-to-end systems — from hardware-level integration with microcontrollers like{" "}
          <strong>ESP32</strong> to scalable backend services and sleek modern UIs using{" "}
          <strong>React & TypeScript</strong>.
        </p>

        <p className="about__text">
          When I’m not building projects, I love improving my communication skills, reading tech blogs, and exploring
          open-source communities.
        </p>

        <a href="#projects" className="about__btn">
          Explore My Work →
        </a>
      </motion.div>
    </section>
  );
};
