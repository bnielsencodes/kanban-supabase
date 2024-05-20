import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#635fc7",
      "primary-hover": "#a8a4ff",
      "primary-pale": "rgba(99, 95, 199, 0.1)",
      warning: "#ea5555",
      "warning-hover": "#ff9898",
      black: "#000112",
      white: "#fff",
      grey: {
        dark: "#2b2c37",
        medium: "#828fa3",
      },
      background: {
        dark: "#20212c",
        light: "#f4f7fd",
      },
      lines: {
        dark: "#3e3f4e",
        light: "#e4ebfa",
      },
      overlay: "rgba(0, 0, 0, 0.5)",
    },
    screens: {
      // => @media (min-width: 640px) { ... }
      sm: "640px",
      // => @media (min-width: 768px) { ... }
      md: "768px",
      // => @media (min-width: 1024px) { ... }
      lg: "1024px",
      // => @media (min-width: 1440px) { ... }
      xl: "1440px",
    },
    extend: {
      animation: {
        wave: "wave 5s linear infinite",
      },
      borderColor: {
        input: "rgba(130, 143, 163, 0.25)",
      },
      boxShadow: {
        boardsModal: "0 10px 20px 0px rgba(54, 78, 126, 0.25)",
        loader: "0 5px 12px rgba(0, 0, 0, 0.15)",
        loaderInset: "0 0 30px 4px rgba(0, 0, 0, 0.5) inset",
      },
      backgroundImage: {
        cross: "url('/assets/icon-cross.svg')",
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta-sans)"],
      },
      placeholderColor: {
        dark: "rgba(0, 1, 18, 0.25)",
        light: "rgba(255, 255, 255, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
