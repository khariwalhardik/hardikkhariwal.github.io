import { motion } from "framer-motion";
import { skills } from "../data/skills";

export const Skills = () => {
  return (
    <section
      id="skills"
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
        Technical Skills
      </motion.h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "1.5rem",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            style={{
              background: "var(--card-bg)",
              borderRadius: "12px",
              padding: "1.5rem",
              textAlign: "center",
              boxShadow: "0 4px 20px var(--card-shadow)",
              transition: "transform var(--transition)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-5px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <div style={{ fontSize: "2rem", color: "var(--accent)" }}>
              {<skill.icon />}
            </div>
            <p
              style={{
                marginTop: "0.75rem",
                fontWeight: 600,
                fontSize: "1rem",
              }}
            >
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
