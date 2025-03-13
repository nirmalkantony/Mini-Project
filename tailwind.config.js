module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./*.{js,jsx,ts,tsx}", // include root files.
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#2E6F40",
        secondary: "#CFFFDC",
        light: {
          100: "#4FAC6A",
          200: "#4FAC6A",
          300: "#4FAC6A",
        },
        dark: {
          100: "#1E6A33",
          200: "#162A1C",
        },
        accent: "#68BA7F",
      },
    },
  },
  plugins: [],
};
