import type { Config } from "tailwindcss";

const config: Config = {
  // Aktifkan mode gelap berdasarkan class 'dark' pada tag <html>
  darkMode: "class",
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Menambahkan palet warna maroon custom
        maroon: {
          "50": "#fdf2f2",
          "100": "#fde8e8",
          "200": "#fbd5d5",
          "300": "#f8b4b4",
          "400": "#f28b8b",
          "500": "#e95d5d",
          "600": "#d93737", // Warna utama yang kita pakai
          "700": "#b92727", // Warna hover
          "800": "#991b1b", // Warna lebih gelap (sesuai referensi)
          "900": "#7f1d1d",
          "950": "#450a0a",
        },
      },
      // Atur font jika kamu ingin menggunakan font custom seperti Inter atau Poppins
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        "infinite-scroll": "infinite-scroll 40s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
