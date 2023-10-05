import React, { useState } from 'react';
import Image from 'next/image';
import { MotionConfig, motion } from 'framer-motion';

interface TabProps {
    tabs: {
        label: string;
        content: React.ReactNode;
        content2: React.ReactNode;
        resume: string;
        imageMain: string;
        image: string;
        image2: string;
    }[];
}

    const Tab: React.FC<TabProps> = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState<number>(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    const container = {
        hidden: { opacity: 0 },
        show: {
        opacity: 1,
        transition: {
            delayChildren: 0.5
            }
        }
    }

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    }

    return (
        <>
            <h1 className='flex justify-center m-4 mt-10 text-4xl lg:text-6xl dark:text-gray-300'>Pesquisa</h1>
            <div className='grid m-2 mt-8 xl:flex'>
                <div className='grid items-center justify-center gap-2 mb-8 cursor-pointer max-xl:grid-flow-col max-lg:grid-rows-2 lg:mx-8 xl:ml-24 xl:basis-2/5 2xl:basis-1/6 basis-3/5'>
                    {tabs.map((tab, index) => (
                    <button className="flex items-center justify-center w-auto h-20 gap-2 my-1 overflow-hidden bg-white border-2 border-green-500 border-opacity-20 rounded-xl lg:h-36 max-sm:w-36 max-lg:w-48"
                        key={index}
                        onClick={() => handleTabClick(index)}
                        style={{backgroundColor: activeTab === index ? '#4ade80' : 'white'}}
                    >
                        <div className='items-center justify-center hidden w-1/3 my-2 bg-cover xl:flex rounded-xl bg-landscape'>
                            <Image
                            src={tab.imageMain}
                            alt='Foto pesquisa'
                            width={150}
                            height={180}
                            />
                        </div>
                            <div className='grid w-2/3'>
                                <h3 className='text-sm font-bold text-gray-900 text-centermt-2 xl:text-lg lg:text-base'>
                                    {tab.label}
                                </h3>
                                <p className='hidden mt-1 text-xs text-gray-600 xl:text-base lg:text-sm lg:flex'>
                                    {tab.resume}
                                </p>
                            </div>
                    </button>
                    ))}
                </div>

                <MotionConfig>
                    <motion.div
                    initial="hidden"
                    animate="show"
                    variants={container}

                    className='flex justify-center mx-10 mt-3 max-lg:mt-0 xl:mx-36 font-noto'>
                        <motion.p className='text-gray200 font-noto' variants={item}>{tabs[activeTab].content}</motion.p>
                    </motion.div>
                </MotionConfig>
            </div>
        </>
    );
};

export default Tab;
