import { Listbox } from '@headlessui/react'
import { useState } from 'react'
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
    const [selectedPhoto, setSelectedPhoto] = useState(photos[0]);
    const [selectedPhoto2, setSelectedPhoto2] = useState(photos[0]);

    return (
        <>
            <Head>
                <title>Fotos - Terno do Binga</title>
                <meta name="description" content="Fotos Terno do Binga" key="desc" />
                <meta property="og:title" content="Fotos Terno do Binga" />
            </Head>
            <Menu />
            <h1 className='flex justify-center m-4 mt-8 text-4xl lg:text-6xl'>Fotos</h1>
            <div className='grid justify-center'>
                <div>
                    <Listbox value={selectedPhoto} onChange={setSelectedPhoto}>
                        <Listbox.Button className="flex items-center justify-center p-5 m-2 mb-10 border-2 border-green-700 rounded-lg px-14 max-sm:px-12 ">
                            <h3 className='sm:ml-2 lg:text-4xl'>Apresentações</h3>
                            <AiOutlineArrowDown className='mr-10 lg:text-4xl sm:ml-3 animate-bounce' />
                        </Listbox.Button>
                        <Listbox.Options>
                            <div  className="w-full mb-10 h-fit">
                                <div  className="grid grid-cols-2 cursor-pointer lg:grid-cols-4">
                                    {photos.map((photo: { id: Key | null | undefined; image: string; description: string, author: string }) => (
                                        <MotionConfig>
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}

                                                key={photo.id} className="grid items-center justify-center m-3 overflow-hidden shadow-xl bg-yellow-50 shadow-yellow-50 rounded-xl">
                                                <div className="m-1 bg-cover">
                                                    <Image
                                                    src={photo.image}
                                                    alt="Fotos"
                                                    width={300}
                                                    height={180}
                                                    className="w-auto rounded-lg bg-landscape hover:opacity-70"
                                                    />
                                                </div>
                                                <div className='mt-2 text-xs text-center text-gray-600 lg:text-sm'>
                                                    <p>{photo.description}</p>
                                                    <p>Foto: {photo.author}</p>
                                                </div>
                                            </motion.div>
                                        </MotionConfig>
                                    ))}
                                </div>
                            </div>
                        </Listbox.Options>
                    </Listbox>
                </div>
                <div className='mb-12'>
                    <Listbox value={selectedPhoto2} onChange={setSelectedPhoto2}>
                        <Listbox.Button className="flex items-center justify-center p-5 m-2 border-2 border-green-700 rounded-lg max-sm:px-10 mb-14">
                            <h3 className='sm:ml-2 lg:text-4xl lg:ml-4'>Eventos Passados</h3>
                            <AiOutlineArrowDown className='ml-2 mr-7 lg:ml-12 lg:text-4xl sm:ml-3 animate-bounce' />
                        </Listbox.Button>
                        <Listbox.Options>
                            <div  className="w-full h-fit">
                                <div  className="grid grid-cols-2 cursor-pointer lg:grid-cols-4">
                                    {flyers.map((photo: { id: Key | null | undefined; image: string; description: string, author: string }) => (
                                        <MotionConfig>
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}

                                                key={photo.id} className="grid items-center justify-center m-3 overflow-hidden shadow-xl bg-yellow-50 shadow-yellow-50 rounded-xl">
                                                <div className="m-1 bg-cover">
                                                    <Image
                                                    src={photo.image}
                                                    alt="Fotos"
                                                    width={300}
                                                    height={180}
                                                    className="w-auto rounded-lg bg-landscape hover:opacity-70"
                                                    />
                                                </div>
                                                <div className='mt-2 text-xs text-center text-gray-600 lg:text-sm'>
                                                    <p>{photo.description}</p>
                                                </div>
                                            </motion.div>
                                        </MotionConfig>
                                    ))}
                                </div>
                            </div>
                        </Listbox.Options>
                    </Listbox>
                </div>
            </div>
            <Footer />
        </>
    )
}