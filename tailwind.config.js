/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    fontFamily: {
      "inter-light": ["Inter_300Light", "sans-serif"],
      "inter": ["Inter_400Regular", "sans-serif"],
      "inter-bold": ["Inter_700Bold", "sans-serif"],
      "inter-black": ["Inter_900Black", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
