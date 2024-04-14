/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: "320px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        layout: "repeat(12, 78px)",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      orange: {
        50: "#fff0eb",
        100: "#ffe8df",
        200: "#fec4af",
        300: "#fea686",
        400: "#fd895e",
        500: "#fd6b36",
        600: "#ca562b",
        700: "#984020",
      },
      black: {
        50: "#d0cfcf",
        100: "#d0cfcf",
        200: "#a0a09f",
        300: "#717070",
        400: "#414140",
        500: "#121110",
        600: "#0e0e0d",
        700: "#0b0a0a",
      },
      background: {
        primary: "#ededed",
        primary50: "#f8f8f8",
        secondary: "#fff6f2",
      },
      line: {
        normal: "#e1e2e4",
        alternative: "#f4f4f5",
      },

      secondary: {
        red: "#ffc1bd",
        yellow: "#ffe99b",
        green: "#a7f9b4",
        blue: "#aad6ff",
        purple: "#eeb9ff",
      },
    },
    textStyle: {
      headLine02: {
        fontSize: "24px",
        lineHeight: "32px",
      },
      title11: {
        fontSize: "22px",
        lineHeight: "26px",
      },
      title01: {
        fontSize: "20px",
        lineHeight: "26px",
      },
      title02: {
        fontSize: "17px",
        lineHeight: "24px",
      },
      body01: {
        fontSize: "16px",
        lineHeight: "26px",
      },
      body02: {
        fontSize: "15px",
        lineHeight: "24px",
      },
      label02: {
        fontSize: "15px",
        lineHeight: "24px",
      },
      label03: {
        fontSize: "14px",
        lineHeight: "20px",
      },
      caption01: {
        fontSize: "12px",
        lineHeight: "16px",
      },
      caption02: {
        fontSize: "11px",
        lineHeight: "14px",
      },
    },
    boxShadow: {
      inner: "inset 0 0 0 1px #a0a09f",
    },
  },
  plugins: [],
};
