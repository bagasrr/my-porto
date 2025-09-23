import type { Config } from "tailwindcss";

const config: Config = {
  // Aktifkan mode gelap berdasarkan class 'dark' pada tag <html>
  darkMode: "class",
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        // Nama 'poppins' akan menjadi class `font-poppins`
        // Variabel '--font-poppins' diambil dari layout.tsx
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
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
