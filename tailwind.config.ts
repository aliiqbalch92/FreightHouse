import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "Arial", "sans-serif"],
        display: ["var(--font-space)", "Inter", "Arial", "sans-serif"],
      },
      colors: {
        graphite: "#090b0c",
        carbon: "#111517",
        steel: "#7d8885",
        signal: "#9affc7",
      },
    },
  },
  plugins: [],
};

export default config;
