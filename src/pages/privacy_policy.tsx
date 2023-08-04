import Footer from '@/components/Footer'
import Menu from '@/components/Menu'
import Texts, { politicaPrivacidade } from '@/lib/texts'
import Head from 'next/head'
import React from 'react'

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title className="text-white text-3xl text-center font-bold my-8">{'Política de Privacidade'}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Menu />
      <div className="container mx-auto flex-grow m-5 bg-gray-900 rounded-lg overflow-hidden shadow-lg">
        <h1 className="text-white text-3xl text-center font-bold my-8">Política de Privacidade</h1>
        <Texts page='Política de Privacidade' text={politicaPrivacidade}></Texts>
      </div>
      <Footer />
    </>
  )
}

export default PrivacyPolicy