import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import { SiYoutube, SiInstagram } from "react-icons/si";
import { FiMail } from "react-icons/fi";
import ContactForm from "@/components/Email";


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
        <div className="grid items-start justify-center">
            <div className="my-8 max-sm:my-1 max-sm:mb-8 lg:mb-16 lg:mx-36 font-noto">
                <h3 className="m-5 text-3xl max-sm:m-8 max-sm:text-xl xl:text-6xl font-xilosa drop-shadow-xl">Terno do Binga</h3>
                <p className="mb-10 text-lg max-sm:m-8 max-sm:text-xs xl:text-xl xl:text-left">O Terno do Binga é fruto do encontro do efervescente movimento das fanfarras belorizontinas e os grupos percussivos que pesquisam as culturas populares tradicionais brasileiras na cidade. O Terno do Binga é uma orquestra diferente, cuja maior inspiração são os ternos de Maracatu de Baque Solto e as orquestras cirandeiras, do Frevo e o Coco Rural.</p>
                    <Link href="/about" className="p-4 text-sm text-black border-2 border-solid rounded-md shadow-lg max-sm:ml-8 max-sm:p-2 hover:opacity-60 font-xilosa hover:bg-corterceira/30">
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
                src="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/video_home.mov"
                ref={videoEl}
                className="flex object-cover w-full shadow-2xl lg:h-96 h-60 opacity-80"
                />
            </div>
            <div className="grid justify-center my-16 text-center sm:mx-16 lg:mx-36">
                <div className="grid font-xilosa">
                    <h2 className="text-2xl">Contato</h2>
                    <h3>ternodobinga@gmail.com</h3>
                </div>
                <div className="hidden m-5 ml-6 space-x-3 text-2xl max-lg:flex max-lg:justify-center">
                    <a href='https://www.youtube.com/@TernoDoBinga' className='cursor-pointer' target='blank'><SiYoutube/></a>
                    <a href='https://instagram.com/ternodobinga' className='cursor-pointer' target='blank'><SiInstagram/></a>
                    <a href="mailto: ternodobinga@gmail.com" className='cursor-pointer'><FiMail/></a>
                </div>
                <ContactForm />
            </div>
        </div>
        <Footer />
        </>
    )
}




function setBody(arg0: string) {
    throw new Error("Function not implemented.");
}

