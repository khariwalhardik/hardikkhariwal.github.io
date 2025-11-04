import { motion } from "framer-motion";
import { experiences } from "../data/experiences";

export const Experiences = () => {
  return (
    <section
      id="experience"
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
        Experience
      </motion.h2>

      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            style={{
              background: "var(--card-bg)",
              borderLeft: "4px solid var(--accent)",
              padding: "1.5rem",
              borderRadius: "10px",
              boxShadow: `0 4px 12px var(--card-shadow)`,
            }}
          >
            <h3 style={{ marginBottom: "0.3rem", fontSize: "1.25rem" }}>
              {exp.role}
            </h3>
            <p
              style={{
                fontWeight: 600,
                color: "var(--accent)",
                marginBottom: "0.2rem",
              }}
            >
              {exp.company}
            </p>
            <p
              style={{
                fontSize: "0.9rem",
                opacity: 0.8,
                marginBottom: "0.8rem",
              }}
            >
              {exp.period}
            </p>
            <p style={{ lineHeight: 1.6 }}>{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
