import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        purpleStart: "#8457E4", // Color inicial del gradiente
        purpleEnd: "#AF98E1",   // Color final del gradiente
      },
      fontFamily: {
        minecraft: ['Minecraft', 'sans-serif']
      }
    },
  },
  plugins: [],
} satisfies Config;
