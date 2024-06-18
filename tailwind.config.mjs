/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "ng-primary-darker": "#717D73",
        "ng-primary": "#8c947d",
        "ng-primary-content": "#2d2c2a",
        "ng-text-content": "#333338",
        "ng-secondary": "#ded8c6",
        "ng-secondary-content": "#edede6",
      },
    },
  },
  plugins: [],
};
