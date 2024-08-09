/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      // Custom screen breakpoints for responsive design
      screens: {
        "Large_Mobile_Design": { "max": "426px", "min": "374px" }, // Styles for large mobile view
        "Small_Mobile_Design": { "max": "374px" } // Styles for small mobile view
      },
      // Custom colors for use in the project
      colors: {
        "Green": "hsl(75, 94%, 57%)", //Lemon Green color
        "White": "hsl(0, 0%, 100%)", //Pure white color
        "Grey": "hsl(0, 0%, 20%)",  //Pure Grey color
        "Dark_Grey": "hsl(0, 0%, 12%)", //Darker grey color
        "Off_Black": "hsl(0, 0%, 8%)" //very dark grey shade color
      },
      // Custom font family to be used in the project
      fontFamily: {
        "Inter": ["Inter", "sans-serif"] // Outfit font with fallback to sans-serif
      }
    },
  },
  plugins: [],
}

