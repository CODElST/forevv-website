module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "forevv-blue": "#4896EF",
      },
      // screens: {
      //   lg: "950px",
      //   // => @media (min-width: 992px) { ... }
      // },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
