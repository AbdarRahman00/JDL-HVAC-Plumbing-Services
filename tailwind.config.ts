import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#0F172A",
          dark: "#020617",
          light: "#1E293B",
        },
        secondary: {
          DEFAULT: "#1D4ED8",
          dark: "#1E40AF",
          light: "#3B82F6",
        },
        accent: {
          DEFAULT: "#F97316",
          dark: "#EA580C",
          light: "#FB923C",
        },
        mutedSlate: "#64748B",
        bgSlate: "#F8FAFC",
      },
    },
  },
  plugins: [],
} satisfies Config;

