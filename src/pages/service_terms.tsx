import Footer from '@/components/Footer'
import Menu from '@/components/Menu'
import Texts, { termosDeServico } from '@/lib/texts'
import Head from 'next/head'
import React from 'react'


const Termos = () => {
  return (
    <>
      <Head>
        <title className="text-white text-3xl text-center font-bold my-8">{'Termos de Serviço'}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Menu />
      <Texts page='Termos de Serviço' text={termosDeServico}></Texts>

      <Footer />
    </>
  )
}

export default Termos