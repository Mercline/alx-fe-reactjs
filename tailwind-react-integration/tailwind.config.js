module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // Specify files for tree-shaking unused styles
  darkMode: 'class', // Use 'media' for system preference or 'class' for toggling
  theme: {
    extend: {}, // Extend the default theme if necessary
  },
  variants: {
    extend: {}, // Enable additional variants (like hover, focus)
  },
  plugins: [], // Add plugins if required
};
