import ContactForm from "@/components/Email";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import VideoHome from "@/components/VideoHome";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion"

export default function HomeScreen() {

    const [isHovering, setIsHovered] = useState(false);
    const [isHovering2, setIsHovered2] = useState(false);
    const [isHovering3, setIsHovered3] = useState(false);
    const [isHovering4, setIsHovered4] = useState(false);

    return (
        <>
            <Menu />
            <div className="grid items-center justify-center text-center">
                <h3 className="my-4 mt-8 text-5xl xl:my-8 xl:mt-16 xl:text-7xl font-xilosa drop-shadow-xl dark:text-gray-300 lg:text-6xl">Terno do Binga</h3>
                <p className="mx-8 mb-10 text-xl xl:mx-56 opacity-60 xl:text-3xl">O Terno do Binga é fruto do encontro entre o efervescente movimento das fanfarras belorizontinas e os grupos percussivos que pesquisam as Culturas Populares Tradicionais brasileiras na cidade, resultando numa orquestra diferente, cuja maior inspiração são os Ternos de Maracatu de Baque Solto, as Cirandas da Zona da Mata Norte pernambucana e o Frevo, passando também por outras manifestações culturais, tais como o Coco Rural e o Bumba Boi Maranhense.</p>
            </div>
            <div className="my-2">{VideoHome()}</div>
            {/* Botões com Animação */}

            <div className="">
                <div className="flex justify-between gap-8 mx-8 my-12 2xl:my-32 2xl:mx-48">
                    <motion.button
                        animate={isHovering ? { scale: [1, 1.2, 1.2, 1, 1], rotate: [270, 0, 0, 0, 0] } : { scale: [1, 1, 1, 1, 1], rotate: [0, 0, 0, 0, 0] } }
                        // onMouseEnter={onMouseEnter}
                        // onMouseLeave={onMouseLeave}
                    >
                        { isHovering ? (
                            <Image
                                // src="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/Avatar_G_yellow.png"
                                src="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/cover_tazo/1X1A0066.png"
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
                                // src="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/Avatar_G_blue.png"
                                src="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/cover_tazo/1X1A0070.png"
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
                                // src="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/Avatar_G_pink.png"
                                src="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/cover_tazo/1X1A0201.png"
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
                                    // src="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/Avatar_G_red.png"
                                    src="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/cover_tazo/1X1A0265.png"
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