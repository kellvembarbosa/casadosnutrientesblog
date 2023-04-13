import Footer from '@/components/Footer'
import Head from 'next/head'
import React from 'react'

const History = ({ content }: { content: string }) => {
    return (
        <>
            <Head>
                <title className="text-white text-3xl text-center font-bold my-8">{'História'}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <main className="container px-6 py-10 mx-auto">
                <h1 className="text-3xl text-gray-800 font-bold mb-10">Casa dos Nutrientes: A História de um Marketplace de Produtos Orgânicos e Saudáveis</h1>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <p className="text-gray-800 text-base">{content}</p>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default History