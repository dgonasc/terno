import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";


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
            <div className="mx-8 my-8 lg:mb-16 lg:mx-36">
                <h3 className="m-5 text-3xl xl:text-6xl font-xilosa">Terno do Binga</h3>
                <p className="mb-10 text-lg xl:text-xl xl:text-left">O Terno do Binga é fruto do encontro do efervescente movimento das fanfarras belorizontinas e os grupos percussivos que pesquisam as culturas populares tradicionais brasileiras na cidade. O Terno do Binga é uma orquestra diferente, cuja maior inspiração são os ternos de Maracatu de Baque Solto e as orquestras cirandeiras, do Frevo e o Coco Rural.</p>
                    <Link href="/about" className="p-4 text-black border-2 border-solid rounded-md shadow-lg hover:opacity-60 text-md font-secondary hover:bg-corterceira/30">
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
                className="flex object-cover w-screen m-0 shadow-2xl h-72 opacity-80"
                />
            </div>
        </div>
        <Footer />
        </>
    )
}




