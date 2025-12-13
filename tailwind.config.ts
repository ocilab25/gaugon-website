import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF", // Pure White
        surface: "#F8F9FB", // Very light cool gray for cards/sections
        primary: "#6B4CFF", // Gaugon Purple
        "primary-dark": "#5236DB",
        accent: "#00E0FF", // Cyan for tech accents
        "text-primary": "#111827", // Gray 900
        "text-secondary": "#4B5563", // Gray 600
        "text-tertiary": "#9CA3AF", // Gray 400
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'subtle-glow': 'radial-gradient(circle at 50% 50%, rgba(107, 76, 255, 0.03) 0%, rgba(255, 255, 255, 0) 70%)',
      },
      boxShadow: {
        'luxury': '0 10px 40px -10px rgba(0, 0, 0, 0.05)',
        'luxury-hover': '0 20px 50px -10px rgba(107, 76, 255, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
