export const Footer = () => {
  return (
    <footer
      style={{
        padding: "1.5rem",
        background: "var(--bg-light)",
        color: "var(--text)",
        textAlign: "center",
        borderTop: "1px solid var(--card-shadow)",
      }}
    >
      <p style={{ fontSize: "0.9rem", opacity: 0.7 }}>
        © {new Date().getFullYear()} Hardik Khariwal. All Rights Reserved.
      </p>
    </footer>
  );
};
