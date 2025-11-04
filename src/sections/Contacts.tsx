import { motion } from "framer-motion";
import { useState } from "react";

export const Contacts = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for reaching out! (Form submission not connected yet)");
  };

  return (
    <section
      id="contact"
      style={{
        minHeight: "90vh",
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
        Let’s Connect
      </motion.h2>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "100%",
          maxWidth: "500px",
          background: "var(--card-bg)",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0 4px 20px var(--card-shadow)",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          style={{
            padding: "0.75rem 1rem",
            borderRadius: "8px",
            border: "1px solid #ccc",
            background: "var(--bg-light)",
            color: "var(--text)",
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          style={{
            padding: "0.75rem 1rem",
            borderRadius: "8px",
            border: "1px solid #ccc",
            background: "var(--bg-light)",
            color: "var(--text)",
          }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          style={{
            padding: "0.75rem 1rem",
            borderRadius: "8px",
            border: "1px solid #ccc",
            background: "var(--bg-light)",
            color: "var(--text)",
          }}
        ></textarea>

        <button
          type="submit"
          style={{
            background: "var(--accent)",
            color: "#fff",
            padding: "0.75rem",
            borderRadius: "8px",
            border: "none",
            fontWeight: 600,
            fontSize: "1rem",
            cursor: "pointer",
            transition: "opacity 0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Send Message
        </button>
      </motion.form>

      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <a href="mailto:your@email.com" target="_blank" style={{ color: "var(--accent)" }}>
          Email
        </a>
        <a href="https://linkedin.com/in/your-profile" target="_blank" style={{ color: "var(--accent)" }}>
          LinkedIn
        </a>
        <a href="https://github.com/yourusername" target="_blank" style={{ color: "var(--accent)" }}>
          GitHub
        </a>
      </div>
    </section>
  );
};
