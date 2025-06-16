/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6B8B", // Soft pink
        secondary: "#9F6BA0", // Muted lavender
        accent: "#FFD166", // Warm yellow
        dark: "#4A4E69", // Deep purple-gray
        light: "#F8F9FA", // Off-white
        pinkLight: "#FFB7C5", // Light pink
        purpleLight: "#D4B2D8", // Light lavender
      },
      animation: {
        "fade-in": "fadeIn 1s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
