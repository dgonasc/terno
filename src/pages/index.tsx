import Menu from "@/components/Menu"
import HomeScreen from "@/screens/homescreen"
import Head from "next/head"

export default function Home () {
  return (
    <>
      <Head>
        <title>Terno do Binga</title>
        <meta name="description" content="O Terno do Binga é uma orquestra diferente, cuja maior inspiração são os ternos de Maracatu de Baque Solto e as orquestras cirandeiras, do Frevo e o Coco Rural." key="desc" />
        <meta property="og:title" content="Terno do Binga" />
        <meta property="og:image" content="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/BINGA_AVATAR_RAINBOW.PNG" />
        <meta property="og:url" content="https://www.ternodobinga.com.br" />
        <meta property="twitter:image" content="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/BINGA_AVATAR_RAINBOW.PNG"/>
        <meta property="twitter:card" content="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/BINGA_AVATAR_RAINBOW.PNG"/>
        <meta property="twitter:description" content="O Terno do Binga é uma orquestra diferente, cuja maior inspiração são os ternos de Maracatu de Baque Solto e as orquestras cirandeiras, do Frevo e o Coco Rural." key="desc"/>
      </Head>
      <Menu />
      <HomeScreen />
    </>
    )
}
