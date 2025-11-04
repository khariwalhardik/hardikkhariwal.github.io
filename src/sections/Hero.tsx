import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section
      id="home"
      style={{
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <motion.img
        src="https://avatars.githubusercontent.com/u/00000000?v=4" // <-- replace with your real GitHub avatar or photo
        alt="Profile"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        style={{
          width: "140px",
          height: "140px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "1rem",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        }}
      />

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        style={{ fontSize: "2.5rem", fontWeight: 700 }}
      >
        Hardik Khariwal
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        style={{ color: "var(--accent)", fontWeight: 600 }}
      >
        Full-Stack Developer & AI Engineer
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        style={{
          maxWidth: "600px",
          marginTop: "1rem",
          lineHeight: 1.6,
          fontSize: "1rem",
        }}
      >
        I build intelligent and interactive systems that combine
        <strong> AI, IoT, and full-stack development</strong> to create
        impactful experiences.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}
      >
        <a
          href="#projects"
          style={{
            background: "var(--accent)",
            color: "#fff",
            padding: "0.75rem 1.5rem",
            borderRadius: "999px",
            fontWeight: 600,
            transition: "var(--transition)",
          }}
        >
          View Projects
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          style={{
            border: "2px solid var(--accent)",
            color: "var(--accent)",
            padding: "0.75rem 1.5rem",
            borderRadius: "999px",
            fontWeight: 600,
            transition: "var(--transition)",
          }}
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
};
