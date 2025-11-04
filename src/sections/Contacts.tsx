import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export const Contacts = () => {
  return (
    <section
      id="contact"
      style={{
        minHeight: "80vh",
        padding: "4rem 2rem",
        background: "var(--bg)",
        color: "var(--text)",
        transition: "background 0.3s, color 0.3s",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          marginBottom: "2rem",
          textAlign: "center",
        }}
      >
        Connect With Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          display: "flex",
          gap: "2rem",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <a
          href="mailto:your@email.com"
          target="_blank"
          style={{
            color: "var(--accent)",
            transition: "transform 0.3s",
          }}
        >
          <Mail size={48} />
        </a>

        <a
          href="https://linkedin.com/in/your-profile"
          target="_blank"
          style={{
            color: "var(--accent)",
            transition: "transform 0.3s",
          }}
        >
          <Linkedin size={48} />
        </a>

        <a
          href="https://github.com/yourusername"
          target="_blank"
          style={{
            color: "var(--accent)",
            transition: "transform 0.3s",
          }}
        >
          <Github size={48} />
        </a>
      </motion.div>
    </section>
  );
};
