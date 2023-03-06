/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/main/**/*.{js,jsx,ts,tsx}",
    "./src/modals/**/*.{js,jsx,ts,tsx}",
    "./src/styles/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    transitionDuration: {
      DEFAULT: "500ms",
    },

    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      opensans: ["Open Sans", "serif"],
    },

    extend: {
      colors: {
        mainDrk: "#1A678A",
        mainDrkOpacity: "#dcf0f9",
        mainDrkHover: "#175c7c",
        mainDrkActive: "#307695",
        mainMed: "#3583A7",
        mainMedOpacity: "#e0f3fb",
        fillDrk: "#C8C9C1",
        fillLit: "#F2F1EF",
        fillLitOpacity: "#f2f1ef85",
        accent: "#AB494C",
        accentOpacity: "#ffe5e6",
        accentHover: "#994144",
        accentActive: "#b35b5d",
        borderColor: "#6F6F6F",
        paid: "#33813B",
        paidOpacity: "#e8f3e0",
        paidHover: "#2d7435",
        late: "#AB494C",
        lateOpacity: "#ffe5e6",
        lateHover: "#994144",

        txDrk1: "#525252",
        txDrk2: "#27272a",
        txDrk3: "#71717a",
        txLit1: "#FFFFFF",
        txLit2: "#FBFAF1",
      },
    },
  },

  plugins: [],
};
