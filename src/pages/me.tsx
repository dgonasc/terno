import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/Footer"

export default function me() {
    return (
        <div className="h-screen bg-gradient-to-tr to-green-400 from-black">
            <div className="grid items-center justify-center lg:ml-12">
                <Image
                src="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/BINGA_AVATAR_RAINBOW.PNG"
                alt='Logo Terno do Binga'
                className='m-2 mt-10 rounded-full ml-9 w-36 drop-shadow-2xl max-lg:w-24 max-lg:ml-14'
                width={300}
                height={180}
                id='logo'
                />
                <div className="grid items-center justify-center">
                    <h1 className="-ml-6 text-5xl text-white drop-shadow-2xl max-lg:text-3xl max-lg:ml-4">Terno do Binga</h1>
                    <h3 className="text-2xl text-white max-lg:text-xl drop-shadow-2xl">ternodobinga@gmail.com</h3>
                </div>
            </div>
            <div className="grid justify-center mt-5">
                <ul className="w-full">
                    <li className="m-4 rounded-full shadow-xl bg-gradient-to-b from-white to-yellow-500 shadow-black">
                        <Link href="https://instagram.com/ternodobinga" className='flex items-center justify-center max-lg:mx-20 mx-44' target="blank">
                            <Image
                            src="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/instagramIcon.png"
                            alt='Logo Terno do Binga'
                            className='w-8 m-3 -ml-5'
                            width={300}
                            height={180}
                            id='logo'
                            />
                            <h2 className="ml-5 text-2xl">Instagram</h2>
                        </Link>
                    </li>
                    <li className="m-4 rounded-full shadow-xl bg-gradient-to-b from-white to-yellow-500 shadow-black">
                        <Link href="https://www.youtube.com/@TernoDoBinga"className='flex items-center justify-center max-lg:mx-20 mx-44' target="blank">
                            <Image
                            src="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/youtubeIcon.png"
                            alt='Logo Terno do Binga'
                            className='w-10 m-2 -ml-6'
                            width={300}
                            height={180}
                            id='logo'
                            />
                            <h2 className="ml-10 text-2xl">Youtube</h2>
                        </Link>
                    </li>
                    <li className="m-4 rounded-full shadow-xl bg-gradient-to-b from-white to-yellow-500 shadow-black">
                        <Link href="/" className="flex items-center justify-center mx-44 max-lg:mx-20">
                            <Image
                            src="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/logo-2.png"
                            alt='Logo Terno do Binga'
                            className='w-12 m-1 rounded-full -ml-7'
                            width={300}
                            height={180}
                            id='logo'
                            />
                            <h2 className="ml-10 text-2xl">WebSite</h2>
                        </Link>
                    </li>
                    <li className="m-4 rounded-full shadow-xl bg-gradient-to-b from-white to-yellow-500 shadow-black">
                        <Link href="/" className="flex items-center justify-center mx-44 max-lg:mx-20">
                            <Image
                            src="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/downloadIcon.png"
                            alt='Logo Terno do Binga'
                            className='w-8 m-3 -ml-1'
                            width={300}
                            height={180}
                            id='logo'
                            />
                            <h2 className="text-2xl ml-9">Download</h2>
                        </Link>
                    </li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}