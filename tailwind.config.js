/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
        xl: "1200px",
        sm: "640px",
        md: "768px",
        xs: "480px",
        lg: "960px",
      },
    },
    clipPath: {
      mypolygon: "polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%)",
      polygonSkills: "polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%)",
      polygonProjects: "polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%)",
      polygonContact: "polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%)",
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
    },
  },
  plugins: [require("tailwind-clip-path"), require("flowbite/plugin")],
};
