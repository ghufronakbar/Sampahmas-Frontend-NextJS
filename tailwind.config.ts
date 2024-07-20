import type { Config } from "tailwindcss";

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
          "parallax": "url('/wallpaper/sky.png')",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        bebas: ["Bebas Neue", "serif"],
      },
      colors: {
        primary: "#71CFB9",
        secondary: "#FAC441",
        tertiary: "#556080",
        background: "#F6F6F6",

        // GRADIENT 1
        gradient1: "#323265",
        gradient2: "#494783",

        // GRADIENT 2
        gradient3: "#3A6FAB",
        gradient4: "#3286C2",
        gradient5: "#2C96D2",
      },
    },
  },
  plugins: [],
};
export default config;
