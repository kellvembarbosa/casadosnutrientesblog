import React from 'react'
import Image from 'next/image';
import { author } from '@prisma/client';
import { prisma } from '@/lib/prisma';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Author from '@/components/Author';

const Equipe = ({
    authors,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <div className="container mx-auto">
            <h1 className="text-white text-3xl text-center font-bold my-8">Equipe</h1>
            {authors.updatedAuthors.map((author) => (
                <Author
                    key={author.idauthor}
                    name={author.name as string}
                    tumb={`data:image/webP;base64,${author.tumb}` as string}
                    description={author.description as string}
                />
            ))}
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