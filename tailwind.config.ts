import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInAndScale: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        glow: {
          "0%, 100%": {
            boxShadow: "0 0 10px rgba(59, 130, 246, 0.8)",
          },
          "50%": {
            boxShadow: "0 0 20px rgba(59, 130, 246, 1)",
          },
        },
      },
      animation: {
        fadeInAndScale: "fadeInAndScale 0.5s ease-in-out",
        glow: "glow 1.5s infinite ease-in-out",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
