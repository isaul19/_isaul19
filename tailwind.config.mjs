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
  },
  plugins: [],
};
