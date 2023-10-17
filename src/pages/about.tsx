import Menu from "@/components/Menu"
import React from "react"
import Image from "next/image"
import Footer from "@/components/Footer"

// Fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path'
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";
import Head from "next/head"

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), '/src/JsonFiles/about.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData.toString());

    return {
    props: objectData
    }
}

export default function About(props: { about: any; }) {
    const about = props.about;
    return (
        <div className="bg-white dark:bg-slate-900">
            <Head>
                <title>Sobre - Terno do Binga</title>
            </Head>
            <Menu />
            <div className="flex flex-row mt-10 mb-24 max-xl:grid xl:flex drop-shadow-xl">
                <div className="my-2 ml-10 md:mx-24 xl:mr-0 xl:ml-36 xl:basis-2/6">
                {about.map((post: { id: Key | null | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; content: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; content2: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined;
                content3: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined;
                content4: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined;
            }) =>
                    <div key={post.id}>
                        <h2 className="m-3 text-4xl dark:text-gray-300 lg:text-6xl font-xilosa">{post.title}</h2>
                        <p className="mb-4 text-xl opacity-50 lg:text-2xl font-noto max-lg:mr-8">{post.content}</p>
                        <p className="mb-4 text-xl opacity-50 lg:text-2xl font-noto max-lg:mr-8">{post.content2}</p>
                        <p className="mb-4 text-xl opacity-50 lg:text-2xl font-noto max-lg:mr-8">{post.content3}</p>
                        <p className="text-xl opacity-50 lg:text-2xl font-noto max-lg:mr-8">{post.content4}</p>
                    </div>)}
                </div>
                <div className="ml-10 basis-3/6 lg:ml-40">
                    <Image
                        src='https://terno-do-binga.s3.us-east-2.amazonaws.com/files/terno_do_bing_05fev2023-54%400.5x.png'
                        alt='Foto sobre'
                        width={720}
                        height={480}
                        className="relative w-full mt-16 border-2 border-yellow-400 rounded-lg shadow-md opacity-90 shadow-black"
                    />
                    <h3 className="mt-2 mb-10 ml-4 text-xs text-gray-600 lg:text-sm lg:mr-4 dark:text-gray-300">Foto: @luciano.baeta</h3>
                </div>
            </div>

            <Footer />
        </div>
    )
}
