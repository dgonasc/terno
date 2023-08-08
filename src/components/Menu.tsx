import { MotionConfig, motion } from "framer-motion"
import Image from 'next/image'
import React, { useRef } from "react"
import Link from "next/link"
import { SiYoutube, SiInstagram } from "react-icons/si";
import { FiMail } from "react-icons/fi";

export default function Menu() {
    const navRef = useRef<HTMLElement | null>(null);
    const showNavBar = () => {
        navRef.current?.classList.toggle('max-lg:hidden');
    }

    return (
        <div className="m-0 border-2 border-b-green-600 border-opacity-30">
            <div className='flex flex-row items-center justify-between lg:px-14 xl:mr-24'>
                <div>
                    <Link href="/">
                        <Image
                        src="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/logo-2.png"
                        alt='Logo Terno do Binga'
                        className='w-16 m-2 rounded-full lg:ml-4 lg:w-22'
                        width={300}
                        height={180}
                        id='logo'
                        />
                    </Link>
                </div>
                <nav ref={navRef} className="text-xl max-lg:m-2 max-lg:z-50 font-xilosa max-lg:text-5xl max-lg:-top-2 max-lg:mt-24 max-lg:absolute max-lg:hidden max-lg:justify-center max-lg:items-center max-lg:bg-gray-100 max-lg:w-screen max-lg:rounded-lg max-lg:h-screen lg:flex">
                    <MotionConfig transition={{ duration: 1 }}>
                        <motion.div
                            animate={{ y: 80 }}
                            transition={{ delay: 1 }}
                        >
                            <ul className="z-40 lg:flex lg:items-center lg:-mt-16 lg:uppercase lg:space-x-10 drop-shadow-md shadow-black max-lg:m-6 max-lg:mt-0 max-lg:space-y-6">
                                    <Link href="/">
                                        Início
                                    </Link>
                                <li>
                                    <Link prefetch={false} href="/about">
                                        Sobre
                                    </Link>
                                </li>
                                <li>
                                    <Link prefetch={false} href="/photos">
                                        Fotos
                                    </Link>
                                </li>
                                <li>
                                    <Link prefetch={false} href="/search">
                                        Pesquisa
                                    </Link>
                                </li>
                                <li>
                                    <Link prefetch={false} href="/download">
                                        Download
                                    </Link>
                                </li>
                            </ul>
                        </motion.div>
                    </MotionConfig>
                    <MotionConfig transition={{ duration: 2 }}>
                        <motion.div
                            animate={{ x: 50 }}
                            transition={{ delay: 0.5 }}
                        className="flex items-center space-x-3 text-2xl max-lg:ml-12 max-lg:mt-24 lg:justify-center drop-shadow-md">
                            <a href='https://www.youtube.com/@TernoDoBinga' className='cursor-pointer' target='blank'><SiYoutube/></a>
                            <a href='https://instagram.com/ternodobinga' className='cursor-pointer' target='blank'><SiInstagram/></a>
                            <a href="mailto: ternodobinga@gmail.com" className='cursor-pointer'><FiMail/></a>
                            <Image
                                src="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/ArvoreVermelha.png"
                                alt="Árvore com folhas vermelhas"
                                width={40}
                                height={15}
                                className="pl-2 drop-shadow-xl"
                            />
                        </motion.div>
                    </MotionConfig>
                </nav>
                <Image
                    onClick={showNavBar}
                    src="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/menu.png"
                    alt='Menu mobile'
                    className='static cursor-pointer w-14 top-8 lg:hidden'
                    width={120}
                    height={90}
                />
            </div>
        </div>
    )
}

