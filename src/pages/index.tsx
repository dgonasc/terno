import ContactForm from "@/components/Email"
import Menu from "@/components/Menu"
import HomeScreen from "@/screens/homescreen"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Terno do Binga</title>
        <meta name="description" content="Terno do Binga" key="desc" />
        <meta property="og:title" content="Terno do Binga" />
      </Head>
      <Menu />
      <HomeScreen />
      <ContactForm />
    </>
    )
}
