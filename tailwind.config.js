/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(231, 69%, 60%)",
        "primary-bis": "hsl(0, 94%, 66%)",
        neutral: "hsl(229, 8%, 60%)",
        "neutral-bis": "hsl(229, 31%, 21%)",
      },
    },
    fontFamily: {
      main: ["Rubik"],
    },
  },
  plugins: [],
});
