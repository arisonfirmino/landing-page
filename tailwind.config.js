/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "bg-color": "#0d1117",
        "primary-color": "#146ebe",
        "text-color": "#e1e1e1",
      },
    },
  },
  plugins: [],
};
