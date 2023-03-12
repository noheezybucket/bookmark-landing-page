/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(231, 69%, 60%)",
        "primary-bis": "hsl(0, 94%, 66%)",
        neutral: "hsl(229, 8%, 60%)",
        "neutral-bis": "hsl(229, 31%, 21%)",
      },
    },
  },
  plugins: [],
};
