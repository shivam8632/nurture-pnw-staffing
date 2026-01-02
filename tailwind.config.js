const config = {
  theme: {
    extend: {
      keyframes: {
        fadeInOut: {
          "0%": { opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        fadeInOut: "fadeInOut 1.2s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
