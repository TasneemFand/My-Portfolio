import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
        "xl": '1200px',
        "sm": '640px',
        "md": '768px',
        "xs": "480px",
        "lg": '960px',
      },
    },
    clipPath: {
      mypolygon: "polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%)",
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
    },
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
}
export default config
