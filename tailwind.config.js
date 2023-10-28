/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
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
    },
    colors: {
      slate: "#0f172a",
      slatelight: "#cbd5e1",
      slatelight2: "#7E88A5",
      teal: "#2dd4bf",
      teallight: "#CCD6F6",
      teallight2: "#8892B0",
      black: "#0000",
      background: "#0f172a",
    },
  },
  plugins: [],
};
