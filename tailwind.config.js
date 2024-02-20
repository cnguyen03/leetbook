/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {colors: {
      'custom-yellow': '#FFA116',
      'custom-grey': '#313131',
      'note-custom-bg': '#1c1c1c',
      'custom-input': '#363636',
      // Add more custom colors as needed
    },
      fontSize: {
        'note-custom-header': '42px',
      },
    }
  },
  plugins: [],
  
}

