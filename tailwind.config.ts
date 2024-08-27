import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme"; // Impor palet warna default

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        ...defaultTheme.colors, // Gunakan semua warna default
        primary: "#698C71", // Warna kustom Anda
        secondary: "#F7F7F8", // Warna kustom Anda
      },
    },
  },
  plugins: [],
};

export default config;
