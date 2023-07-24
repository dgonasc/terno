import Footer from "@/components/Footer"
import Menu from "@/components/Menu"
import Link from "next/link"

export default function Custom404() {
    return (
        <>
            <Menu />
            <div className="grid items-center justify-center mt-10 text-4xl">
                <h1>404 - Page Not Found</h1>
                <Link href="/" className="p-5 m-5 bg-gray-400 border-2 rounded-2xl">
                    Retorne ao Início!
                </Link>
                <Footer />
            </div>
        </>
    )
}