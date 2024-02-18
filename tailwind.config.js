/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {colors: {
      'custom-yellow': '#FFA116',
      'custom-grey': '#313131',
      // Add more custom colors as needed
    },},
  },
  plugins: [],
  
}

