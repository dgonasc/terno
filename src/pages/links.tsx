import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/Footer"
import Head from "next/head"

export default function links() {
    return (
        <>
            <Head>
                <title>Links - Terno do Binga</title>
                <meta name="description" content="O Terno do Binga é uma orquestra diferente, inspirada nos ternos de Maracatu de Baque Solto e nas orquestras cirandeiras, do Frevo e o Coco Rural." key="frevo maracatu orquestra ciranda" />
                <meta property="og:title" content="Terno do Binga" />
                <meta property="og:image" content="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/BINGA_AVATAR_RAINBOW.PNG" />
                <meta property="og:url" content="https://www.ternodobinga.com.br" />
                <meta property="twitter:image" content="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/BINGA_AVATAR_RAINBOW.PNG"/>
                <meta property="twitter:card" content="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/BINGA_AVATAR_RAINBOW.PNG"/>
                <meta property="twitter:description" content="O Terno do Binga é uma orquestra diferente, inspirada nos ternos de Maracatu de Baque Solto e nas orquestras cirandeiras, do Frevo e o Coco Rural." key="frevo maracatu orquestra ciranda"/>
                <meta property="twitter:title" content="Terno do Binga"/>
                <meta property="language" content="Portuguese"/>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>



            </Head>
            <div className="h-screen bg-blue-950">
                <div className="grid items-center justify-center max-sm:ml-6 lg:ml-12">
                    <Image
                    src="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/BINGA_AVATAR_RAINBOW.PNG"
                    alt='Logo Terno do Binga'
                    className='m-2 mt-10 ml-20 rounded-full lg:ml-6 w-36 drop-shadow-2xl max-lg:w-24 max-sm:ml-14'
                    width={300}
                    height={180}
                    id='logo'
                    />
                    <div className="grid items-center justify-center">
                        <h1 className="text-5xl text-white ml-9 lg:-ml-9 max-sm:ml-4 drop-shadow-2xl max-lg:text-3xl">Terno do Binga</h1>
                        <h3 className="mt-4 ml-2 text-2xl text-white lg:-ml-10 max-sm:-ml-4 max-lg:text-xl drop-shadow-2xl">contato@ternodobinga.com.br</h3>
                    </div>
                </div>
                <div className="grid justify-center mt-1">
                    <ul className="w-full">
                        <li>
                            <Link href="/" className="flex items-center justify-center px-32 m-4 cursor-pointer bg-slate-200 max-lg:mx-20 max-lg:px-16 rounded-xl">
                                <Image
                                src="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/logo-2.png"
                                alt='Logo Terno do Binga'
                                className='w-12 mb-2 rounded-full -ml-9 opacity-80'
                                width={300}
                                height={180}
                                id='logo'
                                />
                                <h2 className="mt-1 ml-10 text-2xl text-blue-950">WebSite</h2>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://open.spotify.com/playlist/2zGY63Qd2wIlYDsv6Cz6kK?si=1c722750c40f400d" className="flex items-center justify-center px-32 m-4 cursor-pointer bg-slate-200 max-lg:mx-20 max-lg:px-16 rounded-xl">
                                <Image
                                src="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/spotify.png"
                                alt='Logo Terno do Binga'
                                className='w-10 my-2 rounded-full -ml-9 opacity-80'
                                width={300}
                                height={180}
                                id='logo'
                                />
                                <h2 className="mt-1 ml-10 text-2xl text-blue-950">Spotify</h2>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://instagram.com/ternodobinga" className='flex items-center justify-center px-32 m-4 cursor-pointer bg-slate-200 max-lg:mx-20 max-lg:px-16 rounded-xl' target="blank">
                                <Image
                                src="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/instagramIcon.png"
                                alt='Logo Terno do Binga'
                                className='w-8 m-3 -ml-4 opacity-80'
                                width={300}
                                height={180}
                                id='logo'
                                />
                                <h2 className="ml-6 text-2xl text-blue-950">Instagram</h2>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.youtube.com/@TernoDoBinga"className='flex items-center justify-center px-32 m-4 cursor-pointer bg-slate-200 max-lg:mx-20 max-lg:px-16 rounded-xl' target="blank">
                                <Image
                                src="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/youtubeIcon.png"
                                alt='Logo Terno do Binga'
                                className='w-10 m-2 -ml-8 opacity-80'
                                width={300}
                                height={180}
                                id='logo'
                                />
                                <h2 className="ml-8 text-2xl text-blue-950">Youtube</h2>
                            </Link>
                        </li>
                        <li>
                            <Link href="/download" className="flex items-center justify-center px-32 m-4 cursor-pointer bg-slate-200 max-lg:mx-20 max-lg:px-16 rounded-xl">
                                <Image
                                src="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/downloadIcon.png"
                                alt='Logo Terno do Binga'
                                className='w-8 m-3 -ml-3 opacity-80'
                                width={300}
                                height={180}
                                id='logo'
                                />
                                <h2 className="text-2xl ml-7 text-blue-950">Download</h2>
                            </Link>
                        </li>
                    </ul>
                </div>
                <Footer />
            </div>
        </>
    )
}