export const Footer = () => {
  return (
    <footer
      style={{
        background: "var(--bg-light)",
        color: "var(--text)",
        padding: "1.5rem 0",
        textAlign: "center",
        borderTop: "1px solid rgba(0,0,0,0.1)",
      }}
    >
      <p style={{ marginBottom: "0.5rem", fontWeight: 500 }}>
        © {new Date().getFullYear()} Hardik Khariwal
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem" }}>
        <a href="#home" style={{ color: "var(--accent)" }}>Home</a>
        <a href="#projects" style={{ color: "var(--accent)" }}>Projects</a>
        <a href="#contact" style={{ color: "var(--accent)" }}>Contact</a>
      </div>
    </footer>
  );
};
