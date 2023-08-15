import { Listbox } from '@headlessui/react'
import Image from 'next/image'
import React from 'react'
import fsPromises from 'fs/promises';
import path from 'path'
import { Key } from "react";
import Menu from '@/components/Menu';
import Footer from '@/components/Footer';
import Head from "next/head"
import { MotionConfig, motion } from 'framer-motion';
import { AiOutlineArrowDown } from 'react-icons/ai'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useRef } from 'react'
import Headroom from 'react-headroom';

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), '/src/JsonFiles/photos.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData.toString());

    return {
    props: objectData
    }
}


export default function ModalPhotos(props: { photos: any; flyers: any }) {
    const photos = props.photos;
    const flyers = props.flyers;

    const [isOpen, setIsOpen] = useState("")

    function closeModal() {
        setIsOpen("")
    }

    const navRef = useRef<HTMLElement | null>(null);
    const navRef2 = useRef<HTMLElement | null>(null);

    const showPhotos = () => {
        navRef.current?.classList.toggle('hidden');
    }
    const showPhotos2 = () => {
        navRef2.current?.classList.toggle('hidden');
    }

    return (
        <div>
            <Head>
                <title>Fotos - Terno do Binga</title>
                <meta name="description" content="Fotos Terno do Binga" key="desc" />
                <meta property="og:title" content="Fotos Terno do Binga" />
            </Head>
            <Menu />
            <div>
                <h1 className='flex justify-center m-4 mt-4 text-4xl lg:text-6xl dark:text-zinc-300'>Fotos</h1>
                <Headroom

                >
                    <nav className='grid items-center justify-center sm:flex'>
                        <button onClick={showPhotos} className="flex items-center justify-center p-2 mx-2 mb-4 bg-white border-2 border-green-700 rounded-lg dark:bg-slate-600 max-sm:px-10">
                            <h3 className='sm:ml-2 lg:text-4xl lg:ml-4 dark:text-zinc-300'>Apresentações</h3>
                            <AiOutlineArrowDown className='ml-2 mr-7 lg:ml-12 lg:text-4xl sm:ml-3 animate-bounce dark:text-zinc-300' />
                        </button>
                        <button onClick={showPhotos2} className="flex items-center justify-center p-2 mx-2 mb-4 bg-white border-2 border-green-700 rounded-lg dark:bg-slate-600 max-sm:px-10">
                            <h3 className='sm:ml-2 lg:text-4xl lg:ml-4 dark:text-zinc-300'>Eventos Passados</h3>
                            <AiOutlineArrowDown className='ml-2 mr-7 lg:ml-12 lg:text-4xl sm:ml-3 animate-bounce dark:text-zinc-300' />
                        </button>
                    </nav>
                </Headroom>

                <div className='grid justify-center'>
                    <div>
                        <nav ref={navRef} className="hidden w-full mb-10 h-fit">
                            <div className="grid grid-cols-2 cursor-pointer lg:grid-cols-4">
                                {photos.map((photo: { id: Key | null | undefined; image: string; description: string, author: string }) => (
                                    <MotionConfig>
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}

                                            key={photo.id} className="grid items-center justify-center m-3 overflow-hidden shadow-xl bg-yellow-50 shadow-yellow-50 dark:shadow-gray-600 dark:bg-zinc-700 rounded-xl">
                                            <div key={photo.id} className="m-1 bg-cover">
                                                <Image
                                                key={photo.id}
                                                src={photo.image}
                                                alt="Fotos"
                                                width={300}
                                                height={180}
                                                className="w-auto rounded-lg bg-landscape hover:opacity-70"
                                                onClick={() => setIsOpen(photo.image)}
                                                />
                                            </div>
                                            <div className='mt-2 text-xs text-center text-gray-600 dark:text-zinc-300 lg:text-sm'>
                                                <p key={photo.id}>{photo.description}</p>
                                                <p key={photo.id}>Foto: {photo.author}</p>
                                            </div>
                                        </motion.div>
                                    </MotionConfig>
                                ))}
                            </div>
                        </nav>
                    </div>

                    <div className='mb-12'>
                        <nav ref={navRef2} className="hidden w-full h-fit">
                            <div  className="grid grid-cols-2 cursor-pointer lg:grid-cols-4">
                                {flyers.map((photo: { id: Key | null | undefined; image: string; description: string, author: string }) => (
                                    <MotionConfig>
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}

                                            key={photo.id} className="grid items-center justify-center m-3 overflow-hidden shadow-xl dark:shadow-gray-600 dark:bg-zinc-700 bg-yellow-50 shadow-yellow-50 rounded-xl">
                                            <div key={photo.id} className="m-1 bg-cover">
                                                <Image
                                                key={photo.id}
                                                src={photo.image}
                                                alt="Fotos"
                                                width={300}
                                                height={180}
                                                className="w-auto rounded-lg bg-landscape hover:opacity-70"
                                                onClick={() => setIsOpen(photo.image)}
                                                />
                                            </div>
                                            <div key={photo.id} className='mt-2 text-xs text-center text-gray-600 dark:text-zinc-300 lg:text-sm'>
                                                <p key={photo.id}>{photo.description}</p>
                                            </div>
                                        </motion.div>
                                    </MotionConfig>
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
                                <div className="z-40 flex items-center justify-center min-h-full p-4 text-center bg-gray-100 bg-opacity-60">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 scale-95"
                                        enterTo="opacity-100 scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-95"
                                        >
                                        <Dialog.Panel className="w-full max-w-xl align-middle transition-all shadow-xl shadow-yellow-50 rounded-2xl">
                                            <Image
                                                onClick={closeModal}
                                                className="z-50 w-screen rounded-md"
                                                src={isOpen}
                                                height={480}
                                                width={300}
                                                alt=""
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