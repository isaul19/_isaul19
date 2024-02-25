/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "c-esmerald": "#4EE1A0",
        "c-black": "#151515",
        "c-ligthblack": "#242424",
        "c-gray": "#d9d9d9",
        "c-white": "#FFFFFF",
      },
    },
    screens: {
      xsm: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
