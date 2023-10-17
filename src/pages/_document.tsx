import Menu from '@/components/Menu'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel='shortcurt icon' href='https://terno-do-binga.s3.us-east-2.amazonaws.com/files/favicon.ico' />
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
