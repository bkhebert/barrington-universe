module.exports = {
  content: [
    "./dist/index.html", // The HTML file you're serving
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          raccoon: {
            primary: "#800080",
          },

      //   blue: {
      //     primary: "#0047AB",
      //   },
      //   neutral: {
      //     light: "#F5F5F5",
      //     dark: "#1A1A1A",
      //   },
      //   accent: {
      //     gold: "#FFD700",
      //   },
      //   gray: {
      //     secondary: "#888888",
      //   },
       },
       animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '0.9', transform: 'translateY(0)' },
        },
      },
      // fontFamily: {
      //   sans: ["Inter", "system-ui", "sans-serif"],
      // },
    },
  },
};
