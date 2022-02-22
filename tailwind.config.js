module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        pb: {
          primary: "#F5DF4D",
          secondary: "#939597",
          blue: "#5F2EEA",
          green: "#569EC2",
        },
      },
      translate: {
        "1/7": "14.2857143%",
        "2/7": "28.5714286%",
        "3/7": "42.8571429%",
        "4/7": "57.1428571%",
        "5/7": "71.4285714%",
        "6/7": "85.7142857%",
      },
      transitionDuration: {
        2000: "2000ms",
        3000: "3000ms",
        4000: "4000ms",
      },
      zIndex: {
        "-1": "-1",
      },
      backgroundImage: {
        "hero-bg": "url('/website-design.png')",
      },
    },
  },
  variants: {
    extend: {
      zIndex: ["hover"],
    },
  },
  plugins: [],
};
