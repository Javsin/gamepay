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
        "gradient-conic":  "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-blue-menu" : "linear-gradient(90deg, rgba(132,146,226,1) 0%, rgba(77,88,152,1) 100%)",
        "gradient-blue-light" : "linear-gradient(90deg, rgba(110,119,246,1) 0%, rgba(69,88,167,1) 100%)",
      },
      colors : {
        "dark-blue" : "#2b3252",
        "dark-blue-2" : "#313E75",
      }
    },
  },
  plugins: [],
};
export default config;
