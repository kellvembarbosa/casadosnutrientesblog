import Footer from '@/components/Footer'
import Menu from '@/components/Menu'
import Texts, { sobreNos } from '@/lib/texts'
import Head from 'next/head'
import React from 'react'

const About = () => {
  return (
    <>
      <Head>
        <title className="text-white text-3xl text-center font-bold my-8">{'Sobre nós'}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Menu />
      <Texts page='Sobre nós' text={sobreNos}></Texts>

      <Footer />
    </>
  )
}

export default About