module.exports = {
  content: [
    "./dist/index.html", // The HTML file you're serving
    "./src/**/*.{js,jsx,ts,tsx}",
     'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  plugins: [
    require('flowbite/plugin'),
    require('tailwindcss-textshadow'),
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
       textShadow: {
        sm: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        DEFAULT: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        md: '5px 5px 7px rgba(0, 0, 0, 0.5)',
        lg: '7px 7px 10px rgba(0, 0, 0, 0.5)',
        black: '4px 4px 5px black',
      },
       animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'moveToBottom': 'moveToBottom 1s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '0.9', transform: 'translateY(0)' },
        },
        moveToBottom: {
          '0%': {
            transform: 'translateY(0)'
          },
          '100%': {
            transform: 'translateY(calc(50vh))' // Adjust 10rem as needed
          }
        }
      },
      // fontFamily: {
      //   sans: ["Inter", "system-ui", "sans-serif"],
      // },
    },
  },


};
