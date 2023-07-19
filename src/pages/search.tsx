import React from 'react';
import Tab from '../components/Tab';
import Menu from '@/components/Menu';
import Head from 'next/head';
import Footer from '@/components/Footer';

const Search = () => {

    const tabs = [
                {
                label:'Ciranda',
                resume:'A ciranda é uma dança típica das praias, mais precisamente daquelas situadas ao norte de Pernambuco.',
                content:'A ciranda é uma dança típica das praias, mais precisamente daquelas situadas ao norte de Pernambuco.',
                image:'https://terno-do-binga.s3.us-east-2.amazonaws.com/files/ciranda.jpg'
                },
                {
                    label: 'Maracatu de Baque Solto',
                    resume:'O Maracatu Rural ou Maracatu de Baque Solto é reconhecido como um folguedo...',
                    content:'O Maracatu Rural ou Maracatu de Baque Solto é reconhecido como um folguedo que ocorre durante as...',
                    image:'https://terno-do-binga.s3.us-east-2.amazonaws.com/files/mbs.jpg'
                },
                {
                    label:'Frevo',
                    resume:'O frevo tem origem no século XIX na cidade de Recife, em Pernambuco.',
                    content:'O frevo tem origem no século XIX na cidade de Recife, em Pernambuco.',
                    image:'https://terno-do-binga.s3.us-east-2.amazonaws.com/files/frevo.jpg'
                },
                {
                    label:'Bumba-Meu-Boi',
                    resume:'Bumba meu boi é uma festa brasileira predominante no Norte e Nordeste e encena uma narrativa popular...',
                    content:'Bumba meu boi é uma festa brasileira predominante no Norte e Nordeste e encena uma narrativa popular...',
                    image:'https://terno-do-binga.s3.us-east-2.amazonaws.com/files/boi.jpg'
                }
            ];

    return (

    <div>
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