/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-cover": "url('/hero-cover.png')",
      },
      colors: {
        primary: "#FF7B47",
        secondary: "#0D5C63",
        "gray-soft": "#737373",
        normal: "#252B42",
      },
      fontFamily: {
        sans: ["Montserrat Variable", "sans-serif"],
      },
    },
  },
  plugins: [],
};
