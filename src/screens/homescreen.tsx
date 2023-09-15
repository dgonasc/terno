import React, { useEffect, useRef, useState } from "react";
import Footer from "@/components/Footer";
import VideoHome from "@/components/VideoHome";
import Image from "next/image";
import { motion } from "framer-motion"
// import { Spotify } from "@/components/Spotify";
import ContactForm from "@/components/Email"

export default function HomeScreen() {
    const [isHovering, setIsHovered] = useState(false);
    // const onMouseEnter = () => setIsHovered(true);
    // const onMouseLeave = () => setIsHovered(false);

    const [isHovering2, setIsHovered2] = useState(false);
    // const onMouseEnter2 = () => setIsHovered2(true);
    // const onMouseLeave2 = () => setIsHovered2(false);

    const [isHovering3, setIsHovered3] = useState(false);
    // const onMouseEnter3 = () => setIsHovered3(true);
    // const onMouseLeave3 = () => setIsHovered3(false);

    const [isHovering4, setIsHovered4] = useState(false);
    // const onMouseEnter4 = () => setIsHovered4(true);
    // const onMouseLeave4 = () => setIsHovered4(false);

    // const [isOpen, setIsOpen] = useState(false);
    // const [isOpen2, setIsOpen2] = useState(false);
    // const [isOpen3, setIsOpen3] = useState(false);
    // const [isOpen4, setIsOpen4] = useState(false);

    return (
        <>
            <div className="grid items-start justify-center m-1 bg-gray-50 bg-opacity-80 dark:bg-slate-800">
                <div className="my-8 max-sm:my-1 max-sm:mb-8 lg:mb-16 lg:mx-36 font-noto">
                    <h3 className="m-5 mx-12 text-3xl max-sm:mx-8 max-sm:mt-8 max-sm:text-xl xl:text-6xl font-xilosa drop-shadow-xl dark:text-zinc-300">Terno do Binga</h3>
                    <p className="mx-10 mb-10 text-lg opacity-60 max-sm:mx-8 max-sm:text-xs xl:text-xl xl:text-left">O Terno do Binga é fruto do encontro entre o efervescente movimento das fanfarras belorizontinas e os grupos percussivos que pesquisam as Culturas Populares Tradicionais brasileiras na cidade, resultando numa orquestra diferente, cuja maior inspiração são os Ternos de Maracatu de Baque Solto, as Cirandas da Zona da Mata Norte pernambucana e o Frevo, passando também por outras manifestações culturais, tais como o Coco Rural e o Bumba Boi Maranhense.</p>
                        {/* <Link href="/about" className="p-4 text-sm text-black border-solid rounded-md shadow-md max-sm:ml-8 max-sm:p-2 hover:opacity-60 font-xilosa hover:bg-corterceira/30 shadow-black">
                            <button>
                                Saiba mais
                            </button>
                        </Link> */}
                </div>
            </div>
            <div>{VideoHome()}</div>

            {/* <div className="flex items-center justify-between border-2 max-lg:mt-10 border-slate-50 bg-slate-50 dark:border-green-800 dark:bg-green-800 sm:p-3 xl:pt-5 xl:pb-4">
                <Image
                    src="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/ArvoreVermelha.png"
                    alt="Arvore Vermelha"
                    width={300}
                    height={180}
                    className="hidden w-24 ml-6 2xl:ml-24 lg:ml-8 sm:flex"
                />
                <Spotify wide link="https://open.spotify.com/track/5ihDGnhQgMA0F0tk9fNLlA?si=4472348a63dd4f83"
                    className="mb-1 sm:mx-6 xl:w-2/3 max-sm:my-2"
                />
                <Image
                    src="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/ArvoreRosa.png"
                    alt="Arvore Rosa"
                    width={300}
                    height={180}
                    className="hidden w-20 mr-6 2xl:mr-24 lg:mr-8 sm:flex"
                />
            </div> */}

            {/* Botões com animação */}
            <div className="">
                <div className="flex justify-between gap-8 mx-8 my-12 2xl:my-32 2xl:mx-48">
                    <motion.button
                        animate={isHovering ? { scale: [1, 1.2, 1.2, 1, 1], rotate: [270, 0, 0, 0, 0] } : { scale: [1, 1, 1, 1, 1], rotate: [0, 0, 0, 0, 0] } }
                        // onMouseEnter={onMouseEnter}
                        // onMouseLeave={onMouseLeave}
                    >
                        { isHovering ? (
                            <Image
                                src="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/Avatar_G_yellow.png"
                                alt="Art Yelow"
                                width={200}
                                height={200}
                                className="relative z-0 rounded-full w-44 xl:w-full"
                                onClick={() => setIsHovered(onMouseLeave => !onMouseLeave)}
                            /> ) :(
                                <Image
                                    src="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/Artboard_yellow_1_1.png"
                                    alt="Art Yelow"
                                    width={200}
                                    height={200}
                                    className="rounded-full w-44 xl:w-full animate-pulse"
                                    onClick={() => setIsHovered(onMouseEnter => !onMouseEnter)}
                                />)}
                    </motion.button>

                    <motion.button
                        animate={isHovering2 ? { scale: [1, 1.2, 1.2, 1, 1], rotate: [270, 0, 0, 0, 0] } : { scale: [1, 1, 1, 1, 1], rotate: [0, 0, 0, 0, 0] } }
                        // onMouseEnter={onMouseEnter2}
                        // onMouseLeave={onMouseLeave2}
                    >
                        {isHovering2 ? (
                            <Image
                                src="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/Avatar_G_blue.png"
                                alt="Art Blue"
                                width={200}
                                height={200}
                                className="rounded-full w-44 xl:w-full"
                                onClick={() => setIsHovered2(onMouseLeave2 => !onMouseLeave2)}
                            />) : (
                                <Image
                                    src="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/Artboard_blue_1_1.png"
                                    alt="Art Blue"
                                    width={200}
                                    height={200}
                                    className="rounded-full w-44 xl:w-full animate-pulse"
                                    onClick={() => setIsHovered2(onMouseEnter2 => !onMouseEnter2)}
                                />)}
                    </motion.button>

                    <motion.button
                        animate={isHovering3 ? { scale: [1, 1.2, 1.2, 1, 1], rotate: [270, 0, 0, 0, 0] } : { scale: [1, 1, 1, 1, 1], rotate: [0, 0, 0, 0, 0] } }
                        // onMouseEnter={onMouseEnter3}
                        // onMouseLeave={onMouseLeave3}
                    >
                        {isHovering3 ? (
                            <Image
                                src="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/Avatar_G_pink.png"
                                alt="Art Yellow"
                                width={200}
                                height={200}
                                className="rounded-full w-44 xl:w-full"
                                onClick={() => setIsHovered3(onMouseLeave3 => !onMouseLeave3)}
                            /> ) : (
                                <Image
                                    src="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/Artboard_pink_1_1.png"
                                    alt="Art Yellow"
                                    width={200}
                                    height={200}
                                    className="rounded-full w-44 xl:w-full animate-pulse"
                                    onClick={() => setIsHovered3(onMouseEnter3 => !onMouseEnter3)}
                                />)}
                    </motion.button>

                    <motion.button
                        animate={isHovering4 ? { scale: [1, 1.2, 1.2, 1, 1], rotate: [270, 0, 0, 0, 0] } : { scale: [1, 1, 1, 1, 1], rotate: [0, 0, 0, 0, 0] } }
                        // onMouseEnter={onMouseEnter4}
                        // onMouseLeave={onMouseLeave4}
                        >
                            {isHovering4 ? (
                                <Image
                                    src="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/Avatar_G_red.png"
                                    alt="Art Red"
                                    width={200}
                                    height={200}
                                    className="rounded-full w-44 xl:w-full"
                                    onClick={() => setIsHovered4(onMouseLeave4 => !onMouseLeave4)}
                                /> ) : (
                                        <Image
                                            src="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/Artboard_red_1_1.png"
                                            alt="Art Red"
                                            width={200}
                                            height={200}
                                            className="rounded-full w-44 xl:w-full animate-pulse"
                                            onClick={() => setIsHovered4(onMouseEnter4 => !onMouseEnter4)}
                                        />)}
                    </motion.button>
                </div>
            </div>
            <ContactForm />

            <Footer />
        </>
    )
}