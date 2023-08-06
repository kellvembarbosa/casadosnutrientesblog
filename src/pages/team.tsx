import React from 'react'
import { prisma } from '@/lib/prisma';
import { InferGetStaticPropsType } from 'next';
import Author from '@/components/Author';
import Head from 'next/head';
import Menu from '@/components/Menu';
import Footer from '@/components/Footer';
import { indexKeywords } from '@/lib/tags';

const Equipe = ({
    authors,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    if (Array.isArray(authors)) {
        return (
            <div className="flex flex-col min-h-screen">
                <Head>
                    <title className="text-white text-3xl text-center font-bold my-8">{'Equipe'}</title>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta name="description" content="Na Casa dos Nutrientes, descubra como otimizar suas refeições com uma alimentação saudável, incorporando creatina, whey protein e outros nutrientes, seguindo a pirâmide alimentar. Aprenda receitas saudáveis e a dieta ideal para ganhar massa muscular com o suporte de suplementos de alta qualidade" />
                    {
                        <meta name="keywords" content={indexKeywords} />
                    }
                </Head>
                <Menu />
                <div className="container mx-auto flex-grow m-5 bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                    <h1 className="text-white text-3xl text-center font-bold my-8">Equipe</h1>
                    {
                        authors.map((author) => (
                            <Author
                                key={author.idauthor}
                                name={author.name as string}
                                tumb={author.tumb as string}
                                description={author.description as string}
                            />
                        ))}
                </div>
                <Footer />
            </div>
        )
    }
}

export const getStaticProps = async () => {
    const authors = await prisma.author.findMany();
    return { props: { authors } };
};


export default Equipe