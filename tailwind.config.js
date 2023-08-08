/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // 'gradient-conic':
        //   'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      aspectRatio: {
        '36/9': '36 / 9',
      },
      fontFamily: {
        xilosa: ['var(--font-xilosa)'],
        noto: ['var(--font-noto)']
      },
      backgroundImage: {
        bingaAzul: "url('https://terno-do-binga.s3.us-east-2.amazonaws.com/files/BINGA_AVATAR_AZUL.PNG')"
      }
    },
  },
  plugins: [],
}