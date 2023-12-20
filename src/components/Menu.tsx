import Image from "next/image";
import { CgMenuRight } from 'react-icons/cg';
import Link from 'next/link';
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SiYoutube, SiInstagram } from "react-icons/si";
import { SlSocialSpotify } from "react-icons/sl"
import { FiMail } from "react-icons/fi";

export default function Menu() {

    const [open, setOpen] = useState(false);
    const toggleMenu = () => {
        setOpen((prevOpen) => !prevOpen)
    }
    const MenuVars = {
        initial: {
            scaleY: 0,
        },
        animate: {
            scaleY: 1,
            transition: {
                duration: 0.7,
                ease: [0.12, 0, 0.39, 0],
            }
        },
        exit: {
            scaleY: 0,
            transition: {
                duration: 0.7,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
            }
        }
    };

    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);

    const [isHoveringMenu, setIsHoveredMenu] = useState(false);
    const onMouseEnterMenu = () => setIsHoveredMenu(true);
    const onMouseLeaveMenu = () => setIsHoveredMenu(false);

    const [isHoveringMenu2, setIsHoveredMenu2] = useState(false);
    const onMouseEnterMenu2 = () => setIsHoveredMenu2(true);
    const onMouseLeaveMenu2 = () => setIsHoveredMenu2(false);

    const [isHoveringMenu3, setIsHoveredMenu3] = useState(false);
    const onMouseEnterMenu3 = () => setIsHoveredMenu3(true);
    const onMouseLeaveMenu3 = () => setIsHoveredMenu3(false);

    const [isHoveringMenu4, setIsHoveredMenu4] = useState(false);
    const onMouseEnterMenu4 = () => setIsHoveredMenu4(true);
    const onMouseLeaveMenu4 = () => setIsHoveredMenu4(false);

    const MenuButtonMotion = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                delay: 0.3,
                duration: 0.7,
            }
        },
        exit: {
            opacity: 0,
            transition: {
                delay: 0.3,
                duration: 0.7,
            }
        },
    }

    return (
        <>
            <div className="flex items-center justify-between m-4 ">
                <Link href="/">
                    <Image
                        src="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/cachorro_estrela.png"
                        alt='Logo Terno do Binga'
                        className='w-32 mt-1 mb-1 ml-8 rounded-full cursor-pointer lg:w-48 opacity-80'
                        width={300}
                        height={180}
                    />
                </Link>
                <AnimatePresence>
                    <motion.button
                        className="m-10 mr-10 "
                        onClick={toggleMenu}
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <motion.div
                            className='text-7xl max-lg:text-6xl hover:text-green-500'
                            variants={MenuButtonMotion}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            whileTap={{ scale: 0.8 }}
                        >
                            <CgMenuRight />
                        </motion.div>
                    </motion.button>
                </AnimatePresence>
            </div>
            <AnimatePresence>
                { open && (
                    <motion.nav
                        variants={MenuVars}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className='z-40 origin-top'
                    >
                        <div className="grid justify-center w-screen py-10 pt-10 text-white bg-green-400 lg:pt-24 lg:h-80 rounded-b-xl">
                            <div className="grid items-start lg:flex">
                                <div
                                    onMouseEnter={onMouseEnterMenu}
                                    onMouseLeave={onMouseLeaveMenu}
                                    className=""
                                >
                                    { isHoveringMenu ? (
                                        <motion.div
                                            whileTap={{ scale: 0.8 }}
                                            onClick={toggleMenu}
                                        >
                                            <Link href="/" className='p-5 px-10 text-green-500 text-7xl' >
                                                início
                                            </Link>
                                        </motion.div>
                                    ) : (
                                        <Link href="/" className='p-5 px-10 text-7xl' onClick={toggleMenu}>
                                            início
                                        </Link>
                                    )}
                                </div>

                                <div
                                    onMouseEnter={onMouseEnterMenu2}
                                    onMouseLeave={onMouseLeaveMenu2}
                                >
                                    { isHoveringMenu2 ? (
                                        <motion.div
                                            whileTap={{ scale: 0.8 }}
                                            onClick={toggleMenu}
                                        >
                                            <Link href="/about" className='p-5 px-10 text-green-500 text-7xl' >
                                                sobre
                                            </Link>
                                        </motion.div>
                                    ) : (
                                        <Link href="/about" className='p-5 px-10 text-7xl' onClick={toggleMenu}>
                                            sobre
                                        </Link>
                                    )}
                                </div>

                                <div
                                    onMouseEnter={onMouseEnterMenu3}
                                    onMouseLeave={onMouseLeaveMenu3}
                                >
                                    { isHoveringMenu3 ? (
                                        <motion.div
                                            whileTap={{ scale: 0.8 }}
                                            onClick={toggleMenu}
                                        >
                                            <Link href="/photos" className='p-5 px-10 text-green-500 text-7xl' >
                                                fotos
                                            </Link>
                                        </motion.div>
                                    ) : (
                                        <Link href="/photos" className='p-5 px-10 text-7xl' onClick={toggleMenu}>
                                            fotos
                                        </Link>
                                    )}
                                </div>

                                <div
                                    onMouseEnter={onMouseEnterMenu4}
                                    onMouseLeave={onMouseLeaveMenu4}
                                >
                                    { isHoveringMenu4 ? (
                                        <motion.div
                                            whileTap={{ scale: 0.8 }}
                                            onClick={toggleMenu}
                                        >
                                            <Link href="/download" className='p-5 px-10 text-green-500 text-7xl' >
                                                downloads
                                            </Link>
                                        </motion.div>
                                    ) : (
                                        <Link href="/download" className='p-5 px-10 text-7xl' onClick={toggleMenu}>
                                            downloads
                                        </Link>
                                    )}
                                </div>
                            </div>
                            <div className="flex items-center justify-center max-lg:mt-12 lg:mb-8">
                                <a href='https://www.youtube.com/@TernoDoBinga' className='mx-5 text-4xl cursor-pointer hover:text-green-300 drop-shadow-xl' target='blank'><SiYoutube/></a>
                                <a href='https://instagram.com/ternodobinga' className='mx-5 text-4xl cursor-pointer hover:text-green-300 drop-shadow-xl' target='blank'><SiInstagram/></a>
                                <a href="mailto: ternodobinga@gmail.com" className='mx-5 text-4xl cursor-pointer hover:text-green-300 drop-shadow-xl'><FiMail/></a>
                                <a href="https://open.spotify.com/playlist/2zGY63Qd2wIlYDsv6Cz6kK?si=be82c06f88e04081" target="blank" className='mx-5 text-4xl cursor-pointer hover:text-green-300 drop-shadow-xl'><SlSocialSpotify /></a>
                            </div>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </>
    )
}



