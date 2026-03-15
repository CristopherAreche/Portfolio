/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xsPhone: "370px",
        phone: "380px",
        tablet: "768px",
        tabletLandscape: "1024px",
        laptop: "1440px",
      },
      fontFamily: {
        "main-font": ["var(--font-main)", "sans-serif"],
      },
      colors: {
        dark_mode_text: "#e5eef8",
        green_text: "#16a34a",
        grey_text: "#0f172a",
        dark_bg: "#020617",
        light_text: "#f8fafc",
        light_bg: "#f8fafc",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
