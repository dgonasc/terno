import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import { SiYoutube, SiInstagram } from "react-icons/si";
import { FiMail } from "react-icons/fi";


export default function HomeScreen() {

    const videoEl = useRef(null);

    const attemptPlay = () => {
        videoEl &&
        videoEl.current &&
        (videoEl.current as HTMLVideoElement).play().catch(error => {
            console.error("Error attempting to play", error);
        });
    };

    useEffect(() => {
        attemptPlay();
    }, []);


    return (
        <>
        <div className="grid items-start justify-center font-noto">
        {/* mx-6 my-10 lg:mx-36 2xl:mx-52 */}
            <div className="mx-8 my-8 max-sm:my-1 max-sm:mb-8 lg:mb-16 lg:mx-36">
                <h3 className="m-5 text-3xl max-sm:m-8 max-sm:text-xl xl:text-6xl font-xilosa drop-shadow-xl">Terno do Binga</h3>
                <p className="mb-10 text-lg max-sm:m-8 max-sm:text-xs xl:text-xl xl:text-left">O Terno do Binga é fruto do encontro do efervescente movimento das fanfarras belorizontinas e os grupos percussivos que pesquisam as culturas populares tradicionais brasileiras na cidade. O Terno do Binga é uma orquestra diferente, cuja maior inspiração são os ternos de Maracatu de Baque Solto e as orquestras cirandeiras, do Frevo e o Coco Rural.</p>
                    <Link href="/about" className="p-4 text-black border-2 border-solid rounded-md shadow-lg max-sm:ml-8 max-sm:p-2 hover:opacity-60 text-md font-secondary hover:bg-corterceira/30">
                    <button>
                        Saiba mais
                    </button>
                    </Link>
            </div>

            <div>
                <video
                playsInline
                loop
                muted
                src="video_home.mov"
                ref={videoEl}
                className="flex object-cover w-full shadow-2xl lg:h-96 h-60 opacity-80"
                />
            </div>
            <div className="flex justify-center mx-16 my-16 text-center lg:mx-36">
                <div className="grid font-xilosa">
                    <h2 className="text-2xl">Contato</h2>
                    <h3>ternodobinga@gmail.com</h3>
                </div>
                <div className="hidden m-5 ml-6 space-x-3 text-2xl max-lg:flex">
                    <a href='https://www.youtube.com/@TernoDoBinga' className='cursor-pointer' target='blank'><SiYoutube/></a>
                    <a href='https://instagram.com/ternodobinga' className='cursor-pointer' target='blank'><SiInstagram/></a>
                    <a href="mailto: ternodobinga@gmail.com" className='cursor-pointer'><FiMail/></a>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}




