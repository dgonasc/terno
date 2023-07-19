import Menu from "@/components/Menu"
import React from "react"
import Image from "next/image"
import Footer from "@/components/Footer"

export default function Home(props: { about: any; }) {
    const about = props.about;
    return (
        <>
            <Menu />
            <div className="flex flex-row mt-4 max-xl:grid xl:flex drop-shadow-xl">
                <div className="my-2 ml-12 md:mx-24 xl:mr-0 xl:ml-36 xl:basis-2/6">
                {about.map((post: { id: Key | null | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; content: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; }) =>
                    <div key={post.id}>
                        <h2 className="m-3 text-4xl lg:text-6xl font-xilosa">{post.title}</h2>
                        <p className="text-xl lg:text-2xl font-noto max-lg:mr-8">{post.content}</p>
                    </div>)}
                </div>
                <div className="lg:-right-36 basis-3/6">
                    <Image
                    src='https://terno-do-binga.s3.us-east-2.amazonaws.com/files/sobre.jpg'
                    alt='Foto sobre'
                    width={300}
                    height={180}
                    className="relative w-full mt-16 mb-4 border-2 border-yellow-400 rounded-lg opacity-70 lg:ml-24"
                    />
                    <h3 className="mb-10 mr-4 text-xs text-right text-gray-600 lg:text-sm lg:mr-4">Foto: @quem.e.matheus</h3>
                </div>
            </div>
            <Footer />
        </>
    )
}

// Fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path'
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), '/src/styles/JsonFiles/about.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData.toString());

    return {
    props: objectData
    }
}


