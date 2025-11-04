import { motion } from "framer-motion";
import { projects } from "../data/projects";
import "./Projects.css";

export const Projects = () => {
  return (
    <section id="projects" className="projects">
      <motion.h2
        className="projects__title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Featured Projects
      </motion.h2>

      <div className="projects__grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="project-card__content">
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.description}</p>

              <div className="project-card__tech">
                {project.tech.map((t) => (
                  <span key={t} className="project-card__tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-card__buttons">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__btn project-card__btn--primary"
              >
                GitHub
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__btn project-card__btn--outline"
                >
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
