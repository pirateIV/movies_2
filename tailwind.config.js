/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "ui-sans-serif", "system-ui"],
      },
      aspectRatio: {
        "3/2": "3/2",
        "25/9": "25/9",
      },
    },
  },
  plugins: [],
};
