import Footer from '@/components/Footer'
import Menu from '@/components/Menu'
import { indexKeywords } from '@/lib/tags'
import Texts, { termosDeServico } from '@/lib/texts'
import Head from 'next/head'
import React from 'react'


const Termos = () => {
  return (
    <>
      <Head>
        <title className="text-white text-3xl text-center font-bold my-8">{'Termos de serviço'}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Na Casa dos Nutrientes, descubra como otimizar suas refeições com uma alimentação saudável, incorporando creatina, whey protein e outros nutrientes, seguindo a pirâmide alimentar. Aprenda receitas saudáveis e a dieta ideal para ganhar massa muscular com o suporte de suplementos de alta qualidade." />
        {
          <meta name="keywords" content={indexKeywords} />
        }
      </Head>
      <Menu />
      <Texts page='Termos de Serviço' text={termosDeServico}></Texts>

      <Footer />
    </>
  )
}

export default Termos