import Footer from '@/components/Footer'
import Menu from '@/components/Menu'
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
            </Head>
            <Menu />
            <Texts page='História' text={historia}></Texts>

            <Footer />
        </>
    )
}

export default History