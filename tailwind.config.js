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
        lightGreen: '#83FFAD',
        lightYellow: '#E9F9CD'
      },
      borderRadius: {
        box: '8px'
      },
      fontSize: {
        titleChat: "24px"
      }
    },
  },
  plugins: [],
};
