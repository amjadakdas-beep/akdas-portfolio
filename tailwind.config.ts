import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#090a0f",
        foreground: "#f3f4f6",
        surface: {
          DEFAULT: "#11131f",
          border: "#1f2438",
          hover: "#181b2c",
        },
        accent: {
          DEFAULT: "#a3e635",
          hover: "#84cc16",
          muted: "rgba(163, 230, 53, 0.15)",
        },
        muted: "#9ca3af",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;