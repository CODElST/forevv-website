module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "forevv-blue": "#4896EF",
        "footer-black": "#303030",
      },
      spacing: {
        135: "68.5rem",
      },
      // screens: {
      //   lg: "950px",
      //   // => @media (min-width: 992px) { ... }
      // },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
