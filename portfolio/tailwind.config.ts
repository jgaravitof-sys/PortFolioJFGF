import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { bg: "var(--bg)", fg: "var(--fg)", mut: "var(--mut)", line: "var(--line)", card: "var(--card)" },
    fontFamily: { sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"], mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"] },
  } },
  plugins: [],
};
export default config;
