export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "Clap-Controlled Music System",
    description:
      "An ESP32-based real-time system that detects double, triple, and quadruple claps to control volume and playback using envelope detection.",
    tech: ["ESP32", "C++", "ADC", "WiFi HTTP"],
    github: "https://github.com/hardikkhariwal/clap-music-system",
  },
  {
    title: "Active Recall Learning App",
    description:
      "A Flutter + Node.js app that stores learnings locally with image, text, and tags. Built for offline recall and multi-level categorization.",
    tech: ["Flutter", "Node.js", "SQLite", "Express"],
    github: "https://github.com/hardikkhariwal/recall-app",
    demo: "https://recall-app.vercel.app",
  },
  {
    title: "AI-Powered Chess Analyzer",
    description:
      "A post-game analyzer that evaluates mistakes, blunders, and best moves using AI-driven move evaluation.",
    tech: ["Python", "Stockfish", "Flask", "React"],
    github: "https://github.com/hardikkhariwal/chess-analyzer",
  },
];
