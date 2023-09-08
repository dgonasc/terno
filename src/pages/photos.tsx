import Image from 'next/image'
import React, { useState, useRef } from 'react'
import fsPromises from 'fs/promises';
import path from 'path'
import { Key } from "react";
import Menu from '@/components/Menu';
import Footer from '@/components/Footer';
import Head from "next/head"
import { MotionConfig, motion } from 'framer-motion';
import { AiOutlineArrowDown } from 'react-icons/ai'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), '/src/JsonFiles/photos.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData.toString());

    return {
    props: objectData
    }
}

export default function ModalPhotos(props: { photos: any }) {
    const photos = props.photos;
    const [isOpen, setIsOpen] = useState("");

    function closeModal() {
        setIsOpen("");
    }

    const navRef = useRef<HTMLElement | null>(null);
    const [selectedAlbum, setSelectedAlbum] = useState("1");
    const [clickedButtonId, setClickedButtonId] = useState("1");


        //  Albums
        // 1 - Humaitá
        // 2 - Mestre Anderson Miguel
        // 3 - Fanfarrice
        // 4 - Avenidinha
        // 5 - Outros
        // 6 - Honks

    const showPhotos = (albumId: string, buttonId: string) => {
        navRef.current?.classList.add('hidden');
        navRef.current?.classList.toggle('hidden');
        setClickedButtonId(buttonId);
        setSelectedAlbum(albumId);
    }


    const filteredPhotos = photos.filter((photo: { id: Key | null | undefined; image: string; description: string, author: string, album: any }) => {
        return photo.album === selectedAlbum;
    });

    return (
        <div>
            <Head>
                <title>Fotos - Terno do Binga</title>
                <meta name="description" content="O Terno do Binga é uma orquestra diferente, inspirada nos ternos de Maracatu de Baque Solto e nas orquestras de Frevo." key="desc" />
                <meta property="og:title" content="Terno do Binga" />
                <meta property="og:image" content="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/BINGA_AVATAR_RAINBOW.PNG" />
                <meta property="og:url" content="https://www.ternodobinga.com.br" />
                <meta property="twitter:image" content="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/BINGA_AVATAR_RAINBOW.PNG"/>
                <meta property="twitter:card" content="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/BINGA_AVATAR_RAINBOW.PNG"/>
                <meta property="twitter:description" content="O Terno do Binga é uma orquestra diferente, inspirada nos ternos de Maracatu de Baque Solto e nas orquestras de Frevo." key="desc"/>
                <meta property="twitter:title" content="Terno do Binga"/>
            </Head>
            <Menu />
            <div>
                <h1 className='flex justify-center m-4 mt-8 text-4xl 2xl:m-12 lg:text-6xl dark:text-zinc-300'>Fotos</h1>
                <nav className='grid items-center justify-center grid-cols-2 mx-10 xl:mb-14 max-sm:mx-2 lg:grid-cols-3 2xl:grid-cols-4'>
                    <button onClick={() => showPhotos("1", "1")} id='1' className={`flex border-2 dark:border-slate-600 border-green-50 items-center justify-center p-1 2xl:p-5 mx-2 mb-4 rounded-lg  ${clickedButtonId === "1" ? 'dark:bg-green-700 bg-green-400' : "dark:bg-slate-600 bg-white"}`}>
                        <h3 className='lg:text-sm xl:text-2xl 2xl:text-2xl max-sm:text-xs lg:ml-4 dark:text-zinc-300'>Humaitá - Carnaval</h3>
                        <AiOutlineArrowDown className='ml-2 lg:ml-12 lg:text-sm xl:text-2xl 2xl:text-2xl max-sm:text-xs sm:ml-3 animate-bounce dark:text-zinc-300' />
                    </button>
                    <button onClick={() => showPhotos("2", "2")} id='2' className={`flex border-2 dark:border-slate-600 border-green-50 items-center justify-center p-1 2xl:p-5 mx-2 mb-4 rounded-lg  ${clickedButtonId === "2" ? 'dark:bg-green-700 bg-green-400' : "dark:bg-slate-600 bg-white"}`}>
                        <h3 className='lg:text-sm xl:text-2xl 2xl:text-2xl max-sm:text-xs lg:ml-4 dark:text-zinc-300'>Mestre Anderson Miguel</h3>
                        <AiOutlineArrowDown className='ml-2 lg:ml-12 lg:text-sm xl:text-2xl 2xl:text-2xl max-sm:text-xs sm:ml-3 animate-bounce dark:text-zinc-300' />
                    </button>
                    <button onClick={() => showPhotos("3", "3")} id='3' className={`flex border-2 dark:border-slate-600 border-green-50 items-center justify-center p-1 2xl:p-5 mx-2 mb-4 rounded-lg  ${clickedButtonId === "3" ? 'dark:bg-green-700 bg-green-400' : "dark:bg-slate-600 bg-white"}`}>
                        <h3 className='lg:text-sm xl:text-2xl 2xl:text-2xl max-sm:text-xs lg:ml-4 dark:text-zinc-300'>Fanfarrice</h3>
                        <AiOutlineArrowDown className='ml-2 lg:ml-12 lg:text-sm xl:text-2xl 2xl:text-2xl max-sm:text-xs sm:ml-3 animate-bounce dark:text-zinc-300' />
                    </button>
                    {/* <button onClick={() => showPhotos("4", "4")} id='4' className={`flex border-2 dark:border-slate-600 border-green-50 items-center justify-center p-1 2xl:p-5 mx-2 mb-4 rounded-lg  ${clickedButtonId === "4" ? 'dark:bg-green-700 bg-green-400' : "dark:bg-slate-600 bg-white"}`}>
                        <h3 className='lg:text-sm xl:text-2xl 2xl:text-2xl max-sm:text-xs lg:ml-4 dark:text-zinc-300'>Avenidinha</h3>
                        <AiOutlineArrowDown className='ml-2 lg:ml-12 lg:text-sm xl:text-2xl 2xl:text-2xl max-sm:text-xs sm:ml-3 animate-bounce dark:text-zinc-300' />
                    </button> */}
                    <button onClick={() => showPhotos("6", "6")} id='6' className={`flex border-2 dark:border-slate-600 border-green-50 items-center justify-center p-1 2xl:p-5 mx-2 mb-4 rounded-lg  ${clickedButtonId === "6" ? 'dark:bg-green-700 bg-green-400' : "dark:bg-slate-600 bg-white"}`}>
                        <h3 className='lg:text-sm xl:text-2xl 2xl:text-2xl max-sm:text-xs lg:ml-4 dark:text-zinc-300'>Honk's</h3>
                        <AiOutlineArrowDown className='ml-2 lg:ml-12 lg:text-sm xl:text-2xl 2xl:text-2xl max-sm:text-xs sm:ml-3 animate-bounce dark:text-zinc-300' />
                    </button>
                    <button onClick={() => showPhotos("7", "7")} id='7' className={`flex border-2 dark:border-slate-600 border-green-50 items-center justify-center p-1 2xl:p-5 mx-2 mb-4 rounded-lg  ${clickedButtonId === "7" ? 'dark:bg-green-700 bg-green-400' : "dark:bg-slate-600 bg-white"}`}>
                        <h3 className='lg:text-sm xl:text-2xl 2xl:text-2xl max-sm:text-xs lg:ml-4 dark:text-zinc-300'>Flyers Eventos</h3>
                        <AiOutlineArrowDown className='ml-2 lg:ml-12 lg:text-sm xl:text-2xl 2xl:text-2xl max-sm:text-xs sm:ml-3 animate-bounce dark:text-zinc-300' />
                    </button>
                    <button onClick={() => showPhotos("8", "8")} id='8' className={`flex border-2 dark:border-slate-600 border-green-50 items-center justify-center p-1 2xl:p-5 mx-2 mb-4 rounded-lg  ${clickedButtonId === "8" ? 'dark:bg-green-700 bg-green-400' : "dark:bg-slate-600 bg-white"}`}>
                        <h3 className='lg:text-sm xl:text-2xl 2xl:text-2xl max-sm:text-xs lg:ml-4 dark:text-zinc-300'>Buteco D'Avenidinha</h3>
                        <AiOutlineArrowDown className='ml-2 lg:ml-12 lg:text-sm xl:text-2xl 2xl:text-2xl max-sm:text-xs sm:ml-3 animate-bounce dark:text-zinc-300' />
                    </button>
                    <button onClick={() => showPhotos("5", "5")} id='5' className={`flex border-2 dark:border-slate-600 border-green-50 items-center justify-center p-1 2xl:p-5 mx-2 mb-4 rounded-lg  ${clickedButtonId === "5" ? 'dark:bg-green-700 bg-green-400' : "dark:bg-slate-600 bg-white"}`}>
                        <h3 className='lg:text-sm xl:text-2xl 2xl:text-2xl max-sm:text-xs lg:ml-4 dark:text-zinc-300'>Outros</h3>
                        <AiOutlineArrowDown className='ml-2 lg:ml-12 lg:text-sm xl:text-2xl 2xl:text-2xl max-sm:text-xs sm:ml-3 animate-bounce dark:text-zinc-300' />
                    </button>
                </nav>

                <div className='border-separate '>
                    <div>
                        <nav ref={navRef} className="mb-24 ">
                            <div className="cursor-pointer columns-2 sm:columns-4 lg:columns-5">
                                {filteredPhotos.map((photo: { id: Key | null | undefined; image: string; description: string, author: string, album: any }) => (
                                    <div key={photo.id}>
                                        <MotionConfig>
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                key={photo.id}
                                                className="m-3">
                                                <div className='relative'>
                                                    <Image
                                                    key={photo.id}
                                                    src={photo.image}
                                                    alt={photo.author}
                                                    width={300}
                                                    height={180}
                                                    className="z-40 w-full rounded-lg"
                                                    />
                                                    <a className='absolute inset-0 z-0 duration-300 rounded-lg opacity-0 hover:opacity-100 hover:cursor-pointer '
                                                        onClick={() => setIsOpen(photo.image)}>
                                                        <h3 className='z-10 mt-2 text-sm text-center bg-opacity-50 dark:bg-opacity-70 text-slate-200 xl:mt-2 bg-slate-500 dark:bg-slate-400 lg:text-sm 2xl:text-lg dark:text-slate-200'>{photo.description}</h3>
                                                        <h4 className='z-10 mt-2 text-xs text-center bg-opacity-50 dark:bg-opacity-70 xl:mt-2 text-slate-200 bg-slate-500 dark:bg-slate-400 lg:text-xs 2xl:text-base dark:text-slate-200'>foto: {photo.author}</h4>
                                                    </a>
                                                </div>
                                            </motion.div>
                                        </MotionConfig>
                                    </div>
                                ))}
                            </div>
                        </nav>
                    </div>
                </div>
                <div>
                    <Transition appear show={!!isOpen} as={Fragment}>
                        <Dialog as="div" className="relative z-10" onClose={closeModal}>
                            <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                            >
                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                            </Transition.Child>
                            <div className="fixed inset-0 overflow-y-auto">
                                <div className="z-20 flex items-center justify-center min-h-full p-4 text-center bg-gray-100 dark:bg-slate-500 dark:bg-opacity-40 bg-opacity-40">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 scale-95"
                                        enterTo="opacity-100 scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-95"
                                        >
                                        <Dialog.Panel className="w-full max-w-xl align-middle transition-all shadow-xl shadow-yellow-50 dark:shadow-slate-600 rounded-2xl">
                                            <Image
                                                onClick={closeModal}
                                                className="z-50 w-screen rounded-md"
                                                src={isOpen}
                                                height={720}
                                                width={480}
                                                alt={isOpen}
                                            />
                                        </Dialog.Panel>
                                    </Transition.Child>
                            </div>
                        </div>
                        </Dialog>
                    </Transition>
                </div>
            </div>
            <Footer />
        </div>
    )
}