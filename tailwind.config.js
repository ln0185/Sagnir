/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable class-based dark mode
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        glare: ["PPFragment-GlareRegular", "sans-serif"],
        serifExtra: ["PPFragment-SerifExtrabold", "serif"],
      },
    },
  },
  plugins: [],
};
