/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(198 87% 73%)",
        secondary: "hsl(198 87% 63%)",
        "primary-foreground": "hsl(32 48% 88%)",
        "secondary-foreground": "hsl(32 48% 78%)",
        "grey-100": "hsl(206 31% 90%)",
        "grey-200": "hsl(206 31% 80%)",
        "grey-300": "hsl(206 31% 70%)",
        "grey-400": "hsl(206 31% 60%)",
        "grey-500": "hsl(206 31% 50%)",
        "grey-600": "hsl(206 31% 40%)",
        "grey-700": "hsl(206 31% 30%)",
        "grey-800": "hsl(206 31% 20%)",
        "grey-900": "hsl(206 31% 10%)",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
