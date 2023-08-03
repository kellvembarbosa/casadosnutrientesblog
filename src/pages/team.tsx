import React from 'react'
import Image from 'next/image';
import { author } from '@prisma/client';
import { prisma } from '@/lib/prisma';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Author from '@/components/Author';
import Head from 'next/head';
import Menu from '@/components/Menu';
import Footer from '@/components/Footer';

const Equipe = ({
    authors,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Head>
                <title className="text-white text-3xl text-center font-bold my-8">{'Blog Casa dos Nutrientes'}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Este é um exemplo de uma meta descrição para uma página." />
                {
                    //Aqui é lista de tags fornecidas pelo google keywords
                }
            </Head>
            <Menu />
            <div className="container mx-auto flex-grow">
                <h1 className="text-white text-3xl text-center font-bold my-8">Equipe</h1>
                {authors.updatedAuthors.map((author) => (
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

export const getServerSideProps: GetServerSideProps<{
    authors: {
        updatedAuthors: {
            tumb: string | undefined;
            idauthor: number;
            name: string | null;
            description: string | null;
        }[]
    };
}> = async () => {
    const authors = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/author`).then((res) => res.json());
    return { props: { authors } };
};


export default Equipe