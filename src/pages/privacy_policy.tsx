import Footer from '@/components/Footer'
import Head from 'next/head'
import React from 'react'

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title className="text-white text-3xl text-center font-bold my-8">{'Página de Privacidade'}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="bg-gray-800 min-h-screen">
        <div>Política de Privacidade</div>
      </main>
      <Footer />
    </>
  )
}

export default PrivacyPolicy