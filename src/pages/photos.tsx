import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Image from 'next/image'
import React from 'react'
import fsPromises from 'fs/promises';
import path from 'path'
import { Key, useRef } from "react";
import Menu from '@/components/Menu';
import Footer from '@/components/Footer';

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), '/src/styles/JsonFiles/photos.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData.toString());

    return {
    props: objectData
    }
}

export default function ModalPhotos(props: { photos: any; }) {
    const photos = props.photos;
    const [isOpen, setIsOpen] = useState("")

    function closeModal() {
    setIsOpen("")
    }

    return (
        <>
            <Menu />
            <div>
                <div className="grid items-center justify-center h-fit">
                        <div className="grid grid-cols-4 cursor-pointer">
                            {photos.map((photo: { id: Key | null | undefined; image: string; }) =>
                            <div key={photo.id} className="m-2 overflow-hidden bg-gray-100 shadow-2xl rounded-xl">
                                    <div className="py-2 ml-1 bg-cover">
                                        <Image
                                        src={photo.image}
                                        alt="Fotos"
                                        width={300}
                                        height={180}
                                        className="rounded-lg bg-landscape"
                                        onClick={() => setIsOpen(photo.image)}
                                        />
                                    </div>
                            </div>
                            )}
                        </div>
                </div>

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
                                <Dialog.Panel className="w-full max-w-xl align-middle transition-all shadow-xl rounded-2xl">
                                    <Image
                                        onClick={closeModal}
                                        className="z-50 w-screen rounded-md"
                                        src={isOpen}
                                        height={500}
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
            <Footer />
        </>
    )
}