// tailwind.config.js

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        graydark: '#6E6A6C'},
      backgroundImage: {
        Fondomd: 'url("public/imgs/Footer/Abajo2.jpeg")',
        Fondo: 'url("public/imgs/Footer/Abajo.jpeg")',
      },
    },
  },
  variants: {},
  plugins: [],
};
