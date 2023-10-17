/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        '36/9': '36 / 9',
      },
      fontFamily: {
        xilosa: ['var(--font-xilosa)'],
        noto: ['var(--font-noto)']
      },
      backgroundImage: {
        bingabg: "url('https://terno-do-binga.s3.us-east-2.amazonaws.com/files/fanfarrice%40alexandrebiciati-33.jpg')"
      }
    },
  },
  plugins: [],
};