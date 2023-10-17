import Menu from "@/components/Menu";
import HomeScreen from "@/screens/homescreen";
import Head from "next/head";
import Script from 'next/script'

export default function Home () {
  return (
    <div className="bg-white dark:bg-slate-900">
      <Head>
        <title>Terno do Binga</title>
      </Head>
      <div className="container">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-0V5X4EV531" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-0V5X4EV531');
          `}
        </Script>
      </div>
      <Menu />
      <HomeScreen />
    </div>
    )
}
