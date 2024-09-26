/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  // These paths are just examples, customize them to match your project structure
  purge: [
    './**/*.html',
    './**/*.{js,jsx,ts,tsx,vue}',
  ],
  content: [],
  theme: {
    container: {
      center: true, 
    },
  },
  plugins: [],
}

