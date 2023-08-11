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
        <div className="m-0 border-2 dark:border-t-black border-b-green-600 border-x-green-600 border-opacity-30 dark:border-opacity-20">
            <div className='flex flex-row items-center justify-between lg:px-14 xl:mr-24'>
                <div>
                    <Link href="/">
                        <Image
                        src="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/logo-2.png"
                        alt='Logo Terno do Binga'
                        className='w-16 m-2 rounded-full lg:ml-4 lg:w-22 dark:invert-30 dark:invert'
                        width={300}
                        height={180}
                        id='logo'
                        />
                    </Link>
                </div>
                <nav ref={navRef} onClick={showNavBar} className="text-xl dark:text-zinc-300 max-lg:z-50 font-xilosa max-lg:text-5xl max-lg:-top-2 max-lg:bg-opacity-75 max-lg:mt-24 max-lg:absolute max-lg:hidden max-lg:justify-center max-lg:items-center max-lg:bg-green-500 dark:max-lg:bg-green-800 dark:max-lg:bg-opacity-30 max-lg:w-screen max-lg:rounded-lg max-lg:h-screen lg:flex">
                    <MotionConfig transition={{ duration: 1 }}>
                        <motion.div
                            animate={{ y: 80 }}
                            transition={{ delay: 1 }}
                        >
                            <ul className="z-40 mr-8 lg:flex lg:items-center lg:-mt-16 lg:space-x-10 drop-shadow-md shadow-black max-lg:ml-6 max-lg:space-y-4">
                                <li className="max-lg:pb-3">
                                    <Link href="/" className="max-lg:p-2 max-lg:bg-yellow-50 dark:max-lg:bg-yellow-600 max-lg:bg-opacity-70 drop-shadow-lg max-lg:border-2 max-lg:border-yellow-300 dark:max-lg:border-yellow-400 max-lg:rounded-lg">
                                        início
                                    </Link>
                                </li>
                                <li  className="max-lg:pb-3">
                                    <Link prefetch={false} className="max-lg:p-2 max-lg:bg-yellow-50 dark:max-lg:bg-yellow-600 max-lg:bg-opacity-70 drop-shadow-lg max-lg:border-2 max-lg:border-yellow-300 dark:max-lg:border-yellow-400 max-lg:rounded-lg" href="/about">
                                        sobre
                                    </Link>
                                </li>
                                <li className="max-lg:pb-3">
                                    <Link prefetch={false} className="max-lg:p-2 max-lg:bg-yellow-50 dark:max-lg:bg-yellow-600 max-lg:bg-opacity-70 drop-shadow-lg max-lg:border-2 max-lg:border-yellow-300 dark:max-lg:border-yellow-400 max-lg:rounded-lg" href="/photos">
                                        fotos
                                    </Link>
                                </li>
                                <li className="max-lg:pb-3">
                                    <Link prefetch={false} className="max-lg:p-2 max-lg:bg-yellow-50 dark:max-lg:bg-yellow-600 max-lg:bg-opacity-70 drop-shadow-lg max-lg:border-2 max-lg:border-yellow-300 dark:max-lg:border-yellow-400 max-lg:rounded-lg" href="/search">
                                        pesquisa
                                    </Link>
                                </li>
                                <li className="max-lg:pb-3">
                                    <Link prefetch={false} className="max-lg:p-2 max-lg:bg-yellow-50 dark:max-lg:bg-yellow-600 max-lg:bg-opacity-70 drop-shadow-lg max-lg:border-2 max-lg:border-yellow-300 dark:max-lg:border-yellow-400 max-lg:rounded-lg" href="/download">
                                        downloads
                                    </Link>
                                </li>
                            </ul>
                        </motion.div>
                    </MotionConfig>
                    <MotionConfig transition={{ duration: 1 }}>
                        <motion.div
                            initial={{ y: -100 }}
                            animate={{ y: 3 }}
                            transition={{ delay: 1.5 }}
                            className="flex items-center space-x-3 text-2xl max-lg:bg-yellow-50 dark:max-lg:bg-yellow-600 max-lg:bg-opacity-70 max-lg:mr-44 max-lg:ml-6 max-lg:justify-center max-lg:mt-24 lg:justify-center drop-shadow-md max-lg:p-2 max-lg:border-2 max-lg:border-yellow-300 dark:dark:max-lg:border-yellow-400 max-lg:rounded-lg">
                                <a href='https://www.youtube.com/@TernoDoBinga' className='cursor-pointer drop-shadow-xl' target='blank'><SiYoutube/></a>
                                <a href='https://instagram.com/ternodobinga' className='cursor-pointer drop-shadow-xl' target='blank'><SiInstagram/></a>
                                <a href="mailto: ternodobinga@gmail.com" className='cursor-pointer drop-shadow-xl'><FiMail/></a>
                                <Image
                                    src="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/ArvoreVermelha.png"
                                    alt="Árvore com folhas vermelhas"
                                    width={40}
                                    height={15}
                                    className="pl-2 drop-shadow-xl dark:hidden "
                                />
                                <Image
                                    src="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/ArvoreVermelha_darkMode.png"
                                    alt="Árvore com folhas vermelhas"
                                    width={40}
                                    height={15}
                                    className="hidden pl-2 drop-shadow-xl dark:flex"
                                />
                        </motion.div>
                    </MotionConfig>
                </nav>
                <Image
                    onClick={showNavBar}
                    src="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/menu.png"
                    alt='Menu mobile'
                    className='static cursor-pointer w-14 top-8 lg:hidden dark:invert'
                    width={120}
                    height={90}
                />
            </div>
        </div>
    )
}

