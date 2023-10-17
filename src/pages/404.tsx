import Footer from "@/components/Footer"
import Menu from "@/components/Menu"
import Head from "next/head"
import Link from "next/link"

export default function Custom404() {
    return (
        <>
            <Head>
                <title>404 Error</title>
            </Head>
            <Menu />
            <div className="grid items-center justify-center mt-10 text-4xl bg-white dark:bg-slate-900">
                <h1>404 - Page Not Found</h1>
                <Link href="/" className="p-5 m-5 bg-gray-400 border-2 rounded-2xl">
                    Retorne ao Início!
                </Link>
                <Footer />
            </div>
        </>
    )
}