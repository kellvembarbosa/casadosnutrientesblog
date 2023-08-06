import Footer from '@/components/Footer'
import Menu from '@/components/Menu'
import { indexKeywords } from '@/lib/tags'
import Texts, { historia } from '@/lib/texts'
import Head from 'next/head'
import React from 'react'

const History = ({ content }: { content: string }) => {
    return (
        <>
            <Head>
                <title className="text-white text-3xl text-center font-bold my-8">{'História'}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Na Casa dos Nutrientes, descubra como otimizar suas refeições com uma alimentação saudável, incorporando creatina, whey protein e outros nutrientes, seguindo a pirâmide alimentar. Aprenda receitas saudáveis e a dieta ideal para ganhar massa muscular com o suporte de suplementos de alta qualidade." />
                {
                    <meta name="keywords" content={indexKeywords} />
                }
            </Head>
            <Menu />
            <div className="container mx-auto flex-grow m-5 bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                <h1 className="text-white text-3xl text-center font-bold my-8">História</h1>
                <Texts page='História' text={historia}></Texts>
            </div>
            <Footer />
        </>
    )
}

export default History