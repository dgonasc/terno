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
        <div className="m-0 border-2 border-b-green-600">
            <div className='flex flex-row items-center justify-between lg:px-14 xl:mr-24'>
                <div>
                    <Link href="/">
                        <Image
                        src="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/logo.png"
                        alt='Logo Terno do Binga'
                        className='w-16 m-2 rounded-full lg:ml-5 lg:w-22'
                        width={300}
                        height={180}
                        id='logo'
                        />
                    </Link>
                </div>
                <nav ref={navRef} className="text-xl max-lg:z-50 font-xilosa max-lg:text-5xl max-lg:-top-2 max-lg:mt-24 max-lg:absolute max-lg:hidden max-lg:justify-center max-lg:items-center max-lg:bg-gray-100 max-lg:w-screen max-lg:rounded-lg max-lg:h-screen lg:flex">
                    <ul className="lg:flex lg:items-center lg:mt-2 lg:uppercase lg:space-x-10 drop-shadow-md shadow-black max-lg:m-6 max-lg:space-y-6">
                        <li>
                            <Link href="/">
                                Início
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                Sobre
                            </Link>
                        </li>
                        <li>
                            <Link href="/photos">
                                Fotos
                            </Link>
                        </li>
                        <li>
                            <Link href="/search">
                                Pesquisa
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                Download
                            </Link>
                        </li>
                    </ul>
                    <div className="flex items-center ml-12 space-x-3 text-2xl max-lg:ml-12 max-lg:mt-12 lg:justify-center drop-shadow-md">
                        <a href='https://www.youtube.com/@TernoDoBinga' className='cursor-pointer' target='blank'><SiYoutube/></a>
                        <a href='https://instagram.com/ternodobinga' className='cursor-pointer' target='blank'><SiInstagram/></a>
                        <a href="mailto: ternodobinga@gmail.com" className='cursor-pointer'><FiMail/></a>
                    </div>
                </nav>
                <Image
                onClick={showNavBar}
                src="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/menu.svg"
                alt='Menu mobile'
                className='static cursor-pointer w-14 top-8 lg:hidden'
                width={120}
                height={90}
                />
            </div>
        </div>
    )
}

