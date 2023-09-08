import React from 'react';
import Tab from '../components/Tab';
import Menu from '@/components/Menu';
import Head from 'next/head';
import Footer from '@/components/Footer';

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

    <div>
        <Head>
            <title>Pesquisa - Terno do Binga</title>
            <meta name="description" content="Uma orquestra diferente, inspirada nos ternos de Maracatu de Baque Solto e nas orquestras de Frevo." key="desc" />
            <meta property="og:title" content="Terno do Binga" />
            <meta property="og:image" content="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/BINGA_AVATAR_RAINBOW.PNG" />
            <meta property="og:url" content="https://www.ternodobinga.com.br" />
            <meta property="twitter:image" content="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/BINGA_AVATAR_RAINBOW.PNG"/>
            <meta property="twitter:card" content="https://terno-do-binga.s3.us-east-2.amazonaws.com/files/BINGA_AVATAR_RAINBOW.PNG"/>
            <meta property="twitter:description" content="Uma orquestra diferente, inspirada nos ternos de Maracatu de Baque Solto e nas orquestras de Frevo." key="desc"/>
            <meta property="twitter:title" content="Terno do Binga"/>
        </Head>
        <Menu />
        <Tab tabs={tabs} />
        <Footer />
    </div>
    );
};

export default Search;