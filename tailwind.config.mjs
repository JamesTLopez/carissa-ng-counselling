/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to bottom, #f7f3ee 30%, rgba(247, 243, 238, 0.1) 100%)",
        "footer-gradient":
          "linear-gradient(to bottom, white 0%, rgba(140, 148, 125, 0.8) 100%)",
      },
      colors: {
        "ng-primary-darker": "#7E876E",
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
