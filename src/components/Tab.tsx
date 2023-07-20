import React, { useState } from 'react';
import Image from 'next/image';

interface TabProps {
    tabs: {
        label: string;
        content: React.ReactNode;
        resume: string;
        image: string;
    }[];
    }

    const Tab: React.FC<TabProps> = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState<number>(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    return (
        <div className='grid m-2 mt-1 lg:mt-8 lg:flex'>
            <div className='grid items-center justify-center gap-2 mb-8 cursor-pointer max-lg:grid-flow-col max-lg:grid-rows-2 lg:ml-12 xl:ml-36 lg:basis-2/6'>
                {tabs.map((tab, index) => (
                <button className="flex items-center w-auto gap-2 my-1 overflow-hidden bg-white border-2 border-yellow-100 shadow-lg shadow-yellow-50 rounded-xl lg:h-36 h-14 max-lg:w-28 hover:opacity-70"
                    key={index}
                    onClick={() => handleTabClick(index)}
                    style={{backgroundColor: activeTab === index ? '#FFFACD' : 'white'}}
                    // {{ fontWeight: activeTab === index ? 'bold' : 'normal' }}
                >
                    <div className='items-center justify-center hidden w-1/3 my-2 bg-cover lg:flex rounded-xl bg-landscape'>
                        <Image
                        src={tab.image}
                        alt='Foto pesquisa'
                        width={150}
                        height={180}
                        />
                    </div>
                    <div className='grid w-2/3 m-1'>
                        <h3 className='text-xs font-bold text-gray-900 xl:text-2xl lg:text-sm'>
                            {tab.label}
                        </h3>
                        <p className='hidden mt-2 text-gray-600 xl:text-lg lg:text-xs lg:flex'>
                            {tab.resume}
                        </p>
                    </div>
                </button>
                ))}
            </div>

            <div className='flex justify-center m-3 drop-shadow-xl max-lg:mt-0 lg:mx-24 font-noto'>
                {tabs[activeTab].content}
            </div>
        </div>
    );
};

export default Tab;
