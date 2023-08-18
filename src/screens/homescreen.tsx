import React, { useEffect, useRef, useState } from "react";
import Footer from "@/components/Footer";
import VideoHome from "@/components/VideoHome";
import Image from "next/image";
import { motion } from "framer-motion"

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
            <div className="grid items-start justify-center ">
                <div className="my-8 max-sm:my-1 max-sm:mb-8 lg:mb-16 lg:mx-36 font-noto">
                    <h3 className="m-5 mx-12 text-3xl max-sm:m-8 max-sm:text-xl xl:text-6xl font-xilosa drop-shadow-xl dark:text-zinc-300">Terno do Binga</h3>
                    <p className="mx-10 mb-10 text-lg opacity-60 max-sm:m-8 max-sm:text-xs xl:text-xl xl:text-left">O Terno do Binga é fruto do encontro do efervescente movimento das fanfarras belorizontinas e os grupos percussivos que pesquisam as culturas populares tradicionais brasileiras na cidade. O Terno do Binga é uma orquestra diferente, cuja maior inspiração são os ternos de Maracatu de Baque Solto e as orquestras cirandeiras, do Frevo e o Coco Rural.</p>
                        {/* <Link href="/about" className="p-4 text-sm text-black border-solid rounded-md shadow-md max-sm:ml-8 max-sm:p-2 hover:opacity-60 font-xilosa hover:bg-corterceira/30 shadow-black">
                            <button>
                                Saiba mais
                            </button>
                        </Link> */}
                </div>
                <div>{VideoHome()}</div>
            </div>
            <div className="flex justify-between gap-8 mx-8 mb-8 2xl:my-32 2xl:mx-48">
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
                            className="relative z-0 w-full rounded-full"
                            onClick={() => setIsHovered(onMouseLeave => !onMouseLeave)}
                        /> ) :(
                            <Image
                                src="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/Artboard_yellow_1_1.png"
                                alt="Art Yelow"
                                width={200}
                                height={200}
                                className="w-full rounded-full animate-pulse"
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
                            className="w-full rounded-full"
                            onClick={() => setIsHovered2(onMouseLeave2 => !onMouseLeave2)}
                        />) : (
                            <Image
                                src="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/Artboard_blue_1_1.png"
                                alt="Art Blue"
                                width={200}
                                height={200}
                                className="w-full rounded-full animate-pulse"
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
                            className="w-full rounded-full"
                            onClick={() => setIsHovered3(onMouseLeave3 => !onMouseLeave3)}
                        /> ) : (
                            <Image
                                src="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/Artboard_pink_1_1.png"
                                alt="Art Yellow"
                                width={200}
                                height={200}
                                className="w-full rounded-full animate-pulse"
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
                                className="w-full rounded-full"
                                onClick={() => setIsHovered4(onMouseLeave4 => !onMouseLeave4)}
                            /> ) : (
                                    <Image
                                        src="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/Artboard_red_1_1.png"
                                        alt="Art Red"
                                        width={200}
                                        height={200}
                                        className="w-full rounded-full animate-pulse"
                                        onClick={() => setIsHovered4(onMouseEnter4 => !onMouseEnter4)}
                                    />)}
                </motion.button>
            </div>
            <Footer />
        </>
    )
}
