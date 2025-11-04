import { motion } from "framer-motion";
import { projects } from "../data/projects";

export const Projects = () => {
  return (
    <section
      id="projects"
      style={{
        minHeight: "100vh",
        padding: "4rem 2rem",
        background: "var(--bg)",
        color: "var(--text)",
        transition: "background 0.3s, color 0.3s",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: 700,
          marginBottom: "2rem",
        }}
      >
        Featured Projects
      </motion.h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            style={{
              background: "var(--card-bg)",
              borderRadius: "12px",
              padding: "1.5rem",
              boxShadow: `0 6px 20px var(--card-shadow)`,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "transform var(--transition), background 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-5px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700 }}>
                {project.title}
              </h3>
              <p style={{ marginTop: "0.5rem", lineHeight: 1.6 }}>
                {project.description}
              </p>
              <div
                style={{
                  marginTop: "1rem",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                }}
              >
                {project.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      background: "var(--accent)",
                      color: "#fff",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "999px",
                      fontSize: "0.8rem",
                      fontWeight: 500,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div
              style={{ marginTop: "1.5rem", display: "flex", gap: "1rem" }}
            >
              <a
                href={project.github}
                target="_blank"
                style={{
                  background: "var(--accent)",
                  color: "#fff",
                  padding: "0.5rem 1rem",
                  borderRadius: "999px",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                }}
              >
                GitHub
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  style={{
                    border: "2px solid var(--accent)",
                    color: "var(--accent)",
                    padding: "0.5rem 1rem",
                    borderRadius: "999px",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                  }}
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
