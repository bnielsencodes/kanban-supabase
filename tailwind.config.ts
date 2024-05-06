import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      neutral: {
        100: "#000112",
        200: "#20212c",
        300: "#2b2c37",
        400: "#3e3f4e",
        500: "#828fa3",
        600: "#e4ebfa",
        700: "#f4f7fd",
        800: "#fff",
      },
      primary: "#635fc7",
      "primary-hover": "#a8a4ff",
      warning: "#ea5555",
      "warning-hover": "#ff9898",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
