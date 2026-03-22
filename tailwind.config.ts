import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        roko: {
          bg: "#020617",
          surface: "#020617",
          surfaceAlt: "#020617",
          primary: "#22d3ee",
          primarySoft: "#0f172a",
          accent: "#a855f7",
          danger: "#f97373",
          text: "#e5e7eb",
          muted: "#64748b",
        },
      },
      boxShadow: {
        "roko-glow": "0 0 40px rgba(34, 211, 238, 0.35)",
      },
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
