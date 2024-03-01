/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0047FF',
        lightBlue: '#BBF7FF',
        lightGreen: '#83FFAD'
      },
      borderRadius: {
        box: '8px'
      }
    },
  },
  plugins: [],
};
