import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primeira: "#2391E6",
        segunda: "#2491E4",
        terceira: "#71ACD8",
        quarta: "#89C81F",
        quinta: "#B7E022"
      },
    },
  },
  plugins: [],
};
export default config;
