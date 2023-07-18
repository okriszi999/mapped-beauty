/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#641ae6",
          focus: "#310d6e",
          content: "#ffffff",
          dark: "#4c1d95",
        },
        secondary: {
          DEFAULT: "#d926a9",
          focus: "#b21f8a",
          content: "#ffffff",
          dark: "#9d174d",
        },
        accent: {
          DEFAULT: "#1fb2a6",
          focus: "#0e9c8d",
          content: "#ffffff",
          dark: "#7c133d",
        },
        neutral: {
          DEFAULT: "#2a323c",
          focus: "#1d232a",
          content: "#ffffff",
          dark: "#3c1676",
        },
        base: {
          100: {
            DEFAULT: "#ede9fe",
            dark: "#8c7da8",
          },

          200: {
            DEFAULT: "#d5befe",
            dark: "#7f6aa6",
          },
          300: {
            DEFAULT: "#bda0fe",
            dark: "#735aa3",
          },
          content: "#ffffff",
        },
        info: {
          DEFAULT: "#3abff8",
          focus: "#2aa8e0",
          content: "#ffffff",
          // dark info (blueish)
          dark: "#3c1676",
        },
        success: {
          DEFAULT: "#36d399",
          focus: "#2dbf8e",
          content: "#ffffff",
          dark: "#3c1676",
        },
        warning: {
          DEFAULT: "#fbbd23",
          focus: "#fbbd23",
          content: "#ffffff",
          dark: "#3c1676",
        },
        danger: {
          DEFAULT: "#f44336",
          focus: "#e53935",
          content: "#ffffff",
          dark: "#3c1676",
        },
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
