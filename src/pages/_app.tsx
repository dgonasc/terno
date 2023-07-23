import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Noto_Sans } from 'next/font/google'
import localFont from 'next/font/local'
import { Toaster } from 'react-hot-toast'

const xilosa = localFont({
  src: '../styles/fonts/xilosa_.woff2',
  display: 'swap',
  variable: '--font-xilosa'
})

const noto = Noto_Sans({
  weight: '200',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto'
})

export default function App({ Component, pageProps }: AppProps) {
  return(
  <main className={`${noto.variable} font-noto ${xilosa.variable} font-xilosa`}>
    <Toaster
      position="bottom-center"
      reverseOrder={false}/>
    <Component {...pageProps} />
  </main>
  )
}
