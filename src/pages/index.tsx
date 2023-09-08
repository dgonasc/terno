import Menu from "@/components/Menu"
import HomeScreen from "@/screens/homescreen"
import Head from "next/head"

export default function Home () {
  return (
    <>
      <Head>
        <title>Terno do Binga</title>
      </Head>
      <Menu />
      <HomeScreen />
    </>
    )
}
