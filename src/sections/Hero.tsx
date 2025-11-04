import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "3rem 1.5rem",
        background: "linear-gradient(180deg, var(--bg), var(--bg-light))",
        color: "var(--text)",
        transition: "background 0.3s, color 0.3s",
      }}
    >
      {/* Profile Image */}
      <motion.img
        src="https://avatars.githubusercontent.com/u/00000000?v=4" // replace with your GitHub photo or local image
        alt="Hardik Khariwal"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        style={{
          width: "160px",
          height: "160px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "1.5rem",
          boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
          border: "3px solid var(--accent)",
        }}
      />

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        style={{
          fontSize: "2.8rem",
          fontWeight: 800,
          marginBottom: "0.5rem",
          letterSpacing: "-0.5px",
        }}
      >
        Hardik Khariwal
      </motion.h1>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        style={{
          color: "var(--accent)",
          fontWeight: 600,
          fontSize: "1.25rem",
          marginBottom: "1rem",
        }}
      >
        Full-Stack Developer • AI Engineer • IoT Innovator
      </motion.h2>

      {/* Bio */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        style={{
          maxWidth: "650px",
          lineHeight: 1.7,
          fontSize: "1.05rem",
          opacity: 0.9,
        }}
      >
        Passionate about blending <strong>AI, embedded systems, and web technologies</strong> 
        to create intelligent, human-centered solutions. 
        I love turning ideas into impactful, real-world products.
      </motion.p>

      {/* Call to Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        style={{
          display: "flex",
          gap: "1rem",
          marginTop: "2.5rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <a
          href="#projects"
          style={{
            background: "var(--accent)",
            color: "#fff",
            padding: "0.8rem 1.6rem",
            borderRadius: "999px",
            fontWeight: 600,
            transition: "transform 0.2s, opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          View Projects
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          style={{
            border: "2px solid var(--accent)",
            color: "var(--accent)",
            padding: "0.8rem 1.6rem",
            borderRadius: "999px",
            fontWeight: 600,
            transition: "transform 0.2s, opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          Download Resume
        </a>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{
          display: "flex",
          gap: "1.5rem",
          marginTop: "2.5rem",
          justifyContent: "center",
        }}
      >
        <a
          href="https://github.com/khariwalhardik"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--text)", transition: "color 0.2s" }}
        >
          <Github size={28} />
        </a>
        <a
          href="https://linkedin.com/in/in/hardikkhariwal"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--text)", transition: "color 0.2s" }}
        >
          <Linkedin size={28} />
        </a>
        <a
          href="mailto:hardikkhariwal@gmail.com"
          style={{ color: "var(--text)", transition: "color 0.2s" }}
        >
          <Mail size={28} />
        </a>
      </motion.div>
    </section>
  );
};
