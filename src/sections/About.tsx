import { motion } from "framer-motion";

export const About = () => {
  return (
    <section
      id="about"
      style={{
        minHeight: "90vh",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
        padding: "4rem 2rem",
        maxWidth: "1000px",
        margin: "0 auto",
      }}
    >
      {/* Left Side - Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          flex: "1 1 300px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src="https://avatars.githubusercontent.com/u/00000000?v=4" // replace with your real image
          alt="Hardik Khariwal"
          style={{
            width: "250px",
            height: "250px",
            borderRadius: "20px",
            objectFit: "cover",
            boxShadow: "0 6px 30px rgba(0,0,0,0.1)",
          }}
        />
      </motion.div>

      {/* Right Side - Text */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          flex: "1 1 400px",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          textAlign: "left",
        }}
      >
        <h2 style={{ fontSize: "2rem", fontWeight: 700 }}>About Me</h2>
        <p style={{ lineHeight: 1.7 }}>
          I’m <strong>Hardik Khariwal</strong>, an Electrical Engineering student passionate
          about combining <strong>AI, full-stack development, and embedded systems</strong> to
          build intelligent and interactive products.
        </p>
        <p style={{ lineHeight: 1.7 }}>
          My interests lie in developing end-to-end systems — from hardware-level integration
          with microcontrollers like <strong>ESP32</strong> to scalable backend services and
          sleek modern UIs using <strong>React & TypeScript</strong>.
        </p>
        <p style={{ lineHeight: 1.7 }}>
          When I’m not building projects, I love improving my communication skills, reading
          tech blogs, and exploring open-source communities.
        </p>
        <a
          href="#projects"
          style={{
            marginTop: "1rem",
            background: "var(--accent)",
            color: "#fff",
            padding: "0.75rem 1.5rem",
            borderRadius: "999px",
            fontWeight: 600,
            width: "fit-content",
            transition: "var(--transition)",
          }}
        >
          Explore My Work →
        </a>
      </motion.div>
    </section>
  );
};
