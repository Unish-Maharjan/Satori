import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#21352e",
        secondary: "#d4af37",
        green: { DEFAULT: "#152C25", 2: "#1F4437" },
        gold: "#C08A3E",
        offwhite: "#F2EFE6",
        grey: "#7E8579",
        charcoal: "#17181A",
        line: "rgba(242,239,230,0.18)",
        "line-dark": "rgba(23,24,26,0.14)",
      },
      fontFamily: {
        display: ["var(--font-archivo)", "sans-serif"],
        body: ["var(--font-archivo)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      letterSpacing: {
        wide2: "0.12em",
        wide3: "0.14em",
      },
    },
  },
  plugins: [],
};
export default config;
