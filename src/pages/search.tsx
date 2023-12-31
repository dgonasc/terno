import React from 'react';
import Tab from '../components/Tab';
import Head from 'next/head';
import Footer from '@/components/Footer';
import Menu from '@/components/Menu';

const Search = () => {

    const tabs = [
        {
            label:'Ciranda',
            resume:'Uma dança típica das praias, mais precisamente daquelas situadas ao norte de Pernambuco.',
            content:'A ciranda é uma dança típica das praias, mais precisamente daquelas situadas ao norte de Pernambuco.',
            content2:'',
            imageMain:'https://terno-do-binga.s3.us-east-2.amazonaws.com/files/ciranda.jpg',
            image:'',
            image2:''
        },
        {
            label: 'M.B.S.',
            resume:'O Maracatu Rural ou Maracatu de Baque Solto é reconhecido como um folguedo...',
            content:'O Maracatu Rural ou Maracatu de Baque Solto é reconhecido como um folguedo que ocorre durante as...',
            content2:'',
            imageMain:'https://terno-do-binga.s3.us-east-2.amazonaws.com/files/mbs.jpg',
            image:'',
            image2:''
        },
        {
            label:'Frevo',
            resume:'O frevo tem origem no século XIX na cidade de Recife, em Pernambuco.',
            content:'O frevo tem origem no século XIX na cidade de Recife, em Pernambuco.',
            content2:'',
            imageMain:'https://terno-do-binga.s3.us-east-2.amazonaws.com/files/frevo.jpg',
            image:'',
            image2:''
        },
        {
            label:'Bumba-Meu-Boi',
            resume:'Bumba meu boi é uma festa brasileira predominante no Norte e Nordeste...',
            content:'Bumba meu boi é uma festa brasileira predominante no Norte e Nordeste e encena uma narrativa popular...',
            content2:'',
            imageMain:'https://terno-do-binga.s3.us-east-2.amazonaws.com/files/boi.jpg',
            image:'',
            image2:''
        }
    ]

    return (

    <div className='bg-white dark:bg-slate-900'>
        <Head>
            <title>Pesquisa - Terno do Binga</title>
        </Head>
        <Menu />
        <Tab tabs={tabs} />
        <Footer />
    </div>
    );
};

export default Search;