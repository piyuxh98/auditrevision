import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#F8FAFC",
        ink: "#1F2937",
        accent: {
          DEFAULT: "#C8102E",
          soft: "#FDECEE",
          deep: "#A30D25"
        },
        panel: "#F4F7FB",
        surface: "#FFFFFF",
        line: "#E5E7EB",
        success: "#166534",
        muted: "#5F6B7A"
      },
      fontFamily: {
        sans: ["var(--font-sans)"]
      },
      boxShadow: {
        card: "0 14px 34px -24px rgba(31, 41, 55, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;
