import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
        cyan: {
          400: "#22d3ee",
          500: "#06b6d4",
        },
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "sans-serif"],
        body: ["var(--font-jakarta)", "sans-serif"],
      },
      animation: {
        "fade-in":       "fadeIn 0.6s ease forwards",
        "slide-up":      "slideUp 0.6s ease forwards",
        "ticker":        "ticker 30s linear infinite",
        "float":         "float 6s ease-in-out infinite",
        "pulse-slow":    "pulse 3s ease-in-out infinite",
        "gradient-x":   "gradientX 8s ease infinite",
        "spin-slow":     "spin 8s linear infinite",
      },
      keyframes: {
        fadeIn:    { from: { opacity: "0" }, to: { opacity: "1" } },
        slideUp:   { from: { opacity: "0", transform: "translateY(32px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        ticker:    { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        float:     { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-12px)" } },
        gradientX: { "0%,100%": { backgroundPosition: "0% 50%" }, "50%": { backgroundPosition: "100% 50%" } },
      },
      backgroundSize: {
        "300%": "300%",
      },
    },
  },
  plugins: [],
};

export default config;
