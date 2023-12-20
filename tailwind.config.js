/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home-mobile": "url(/tailwindcss/sample5/images/headerBgMobile.webp)",
        "home-desktop": "url(/tailwindcss/sample5/images/headerBgDesktop.webp)",
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *")
      addVariant("child-hover", "& > *:hover")
    }
  ],
}

