/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0C0C0D",
        bone: "#EAE6DD",
        bonemute: "#8B8880",
        brass: "#B8934A",
        brassdim: "#8A6E38",
        rust: "#C4491F",
        line: "#2A2A2A",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
