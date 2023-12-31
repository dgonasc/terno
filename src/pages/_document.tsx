import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="google-site-verification" content="sImydNS1uqjQWkfWg9iABvhIVoZasOe9ohx_VL4l1is" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-0V5X4EV531');
          `}
        </Script>
        <link rel='shortcut icon' href='https://terno-do-binga.s3.us-east-2.amazonaws.com/files/favicon.ico' />
        <link rel="icon" href="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/favicon.ico" />
        <meta name="og:locale" content="pt_BR"/>
        <meta name="theme-color" content="#4ade80"/>
        <meta name="description" content="O Terno do Binga é uma orquestra diferente, inspirada nos ternos de Maracatu de Baque Solto e nas orquestras cirandeiras, do Frevo e o Coco Rural." />
        <meta property="description" content="O Terno do Binga é uma orquestra diferente, inspirada nos ternos de Maracatu de Baque Solto e nas orquestras cirandeiras, do Frevo e o Coco Rural." />
        <meta property="og:title" content="Terno do Binga" />
        <meta property="og:image" content="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/BINGA_AVATAR_RAINBOW.PNG" />
        <meta property="og:url" content="https://www.ternodobinga.com.br" />
        <meta property="og:description" content="O Terno do Binga é uma orquestra diferente, inspirada nos ternos de Maracatu de Baque Solto e nas orquestras cirandeiras, do Frevo e o Coco Rural." />
        <meta property="twitter:image" content="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/BINGA_AVATAR_RAINBOW.PNG"/>
        <meta property="twitter:card" content="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/BINGA_AVATAR_RAINBOW.PNG"/>
        <meta property="twitter:description" content="O Terno do Binga é uma orquestra diferente, inspirada nos ternos de Maracatu de Baque Solto e nas orquestras cirandeiras, do Frevo e o Coco Rural." key="frevo maracatu orquestra ciranda"/>
        <meta property="twitter:title" content="Terno do Binga"/>
        <meta property="language" content="Portuguese"/>
        <meta charSet="UTF-8"/>
      </Head>
      <body className='bg-white dark:bg-slate-900'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
