/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        Fondomd: 'url("public/imgs/Footer/Abajo2.jpeg")',
        Fondo: 'url("public/imgs/Footer/Abajo.jpeg")',
      },
    },
  },
  plugins: [],
};
