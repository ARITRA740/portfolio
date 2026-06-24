import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        night: "#050711",
        ink: "#090d1a",
        cyanGlow: "#22d3ee",
        violetGlow: "#a855f7",
        acid: "#8bffb3"
      },
      boxShadow: {
        neon: "0 0 22px rgba(34, 211, 238, 0.35)",
        violet: "0 0 26px rgba(168, 85, 247, 0.32)"
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at top left, rgba(34,211,238,.2), transparent 28rem), radial-gradient(circle at bottom right, rgba(168,85,247,.2), transparent 28rem)"
      },
      fontFamily: {
        display: ["var(--font-space)", "ui-sans-serif", "system-ui"],
        body: ["var(--font-inter)", "ui-sans-serif", "system-ui"]
      }
    }
  },
  plugins: []
};

export default config;
