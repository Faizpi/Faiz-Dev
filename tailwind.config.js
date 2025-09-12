// tailwind.config.js
module.exports = {
  darkMode: "class", // ✅ tambahkan ini
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shine: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      animation: {
        shine: "shine 1.2s ease-out forwards",
      },
    },
  },
  plugins: [],
};
