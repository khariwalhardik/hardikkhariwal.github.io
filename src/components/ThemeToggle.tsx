import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      style={{
        padding: "0.5rem 1rem",
        borderRadius: "999px",
        backgroundColor: theme === "dark" ? "#334155" : "#e2e8f0",
        color: theme === "dark" ? "#f1f5f9" : "#0f172a",
        transition: "var(--transition)"
      }}
    >
      {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
};
