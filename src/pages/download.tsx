import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import { FiDownload } from "react-icons/fi";
import Image from "next/image";

export default function Download() {

function onDownloadClickRelease() {
    const link = document.createElement("a")
    link.href = "https://terno-do-binga.s3.us-east-2.amazonaws.com/photos/1.jpg"
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    link.parentNode?.removeChild(link)
}

function onDownloadClickFotos() {
    const link = document.createElement("a")
    link.href = "https://terno-do-binga.s3.us-east-2.amazonaws.com/download/Photos.zip"
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    link.parentNode?.removeChild(link)
}

    return (
        <>
            <Menu />
            <div className="grid items-center justify-center m-4 lg:flex">
                <div className="flex items-center justify-between p-2 px-6 m-2 bg-yellow-200 border-2 border-yellow-200 rounded-lg cursor-pointer" onClick={onDownloadClickRelease}>
                    <Image
                        src="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/BINGA_AVATAR_AZUL.PNG"
                        alt="Logo em fundo azul"
                        width={100}
                        height={60}
                        className="mr-5 rounded-full"
                    />
                    <div className="grid items-center justify-center ml-2 mr-4">
                        <h2 className="text-2xl ">Release</h2>
                        <button className="ml-6 text-2xl"><FiDownload /></button>
                    </div>
                </div>
                <div className="flex items-center justify-between p-2 px-6 m-2 bg-yellow-200 border-2 border-yellow-200 rounded-lg cursor-pointer" onClick={onDownloadClickFotos}>
                    <Image
                        src="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/BINGA_AVATAR_VERDIM.PNG"
                        alt="Logo em fundo azul"
                        width={100}
                        height={60}
                        className="mr-5 rounded-full"
                    />
                    <div className="grid items-center justify-center mr-4">
                        <h2 className="text-2xl">Fotos</h2>
                        <button className="ml-3 text-2xl"><FiDownload /></button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
