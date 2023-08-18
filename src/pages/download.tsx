import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import { FiDownload } from "react-icons/fi";
import Image from "next/image";
import Head from "next/head"

export default function Download() {

    function DownloadRelease() {
        const link = document.createElement("a")
        link.href = "https://terno-do-binga.s3.us-east-2.amazonaws.com/photos/1.jpg"
        link.target = "_blank"
        document.body.appendChild(link)
        link.click()
        link.parentNode?.removeChild(link)
    }

    function DownloadFotos() {
        const link = document.createElement("a")
        link.href = "https://terno-do-binga.s3.us-east-2.amazonaws.com/download/Photos.zip"
        link.target = "_blank"
        document.body.appendChild(link)
        link.click()
        link.parentNode?.removeChild(link)
    }

    return (
        <>
            <Head>
                <title>Download - Terno do Binga</title>
                <meta name="description" content="Downloads Terno do Binga" key="desc" />
                <meta property="og:title" content="Downloads Terno do Binga" />
            </Head>
            <Menu />
            <h1 className='flex justify-center m-4 mt-10 text-4xl lg:text-6xl dark:text-gray-300'>Downloads</h1>
            <div className="grid items-center justify-center m-4 sm:flex">
                <div className="flex items-center justify-between p-2 m-2 mx-6 bg-yellow-200 border-2 border-yellow-200 rounded-lg cursor-pointer" 
                    onClick={DownloadRelease}>
                    <Image
                        src="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/BINGA_AVATAR_AZUL.PNG"
                        alt="Logo em fundo azul"
                        width={100}
                        height={60}
                        className="mr-5 rounded-full"
                    />
                    <div className="grid items-center justify-center ml-2 mr-4">
                        <h2 className="text-2xl dark:text-gray-700 ">Release</h2>
                        <button className="ml-6 text-2xl dark:text-gray-700"><FiDownload /></button>
                    </div>
                </div>
                <div className="flex items-center justify-between p-2 m-2 mx-6 bg-yellow-200 border-2 border-yellow-200 rounded-lg cursor-pointer"
                    onClick={DownloadFotos}>
                    <Image
                        src="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/BINGA_AVATAR_VERDIM.PNG"
                        alt="Logo em fundo azul"
                        width={100}
                        height={60}
                        className="mr-5 rounded-full"
                    />
                    <div className="grid items-center justify-center mr-4">
                        <h2 className="text-2xl dark:text-gray-700">Fotos</h2>
                        <button className="ml-3 text-2xl dark:text-gray-700"><FiDownload /></button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
