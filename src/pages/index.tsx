import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import useSWR, { SWRConfig } from 'swr'
import { PacmanLoader } from 'react-spinners';
import { useState } from 'react';
import Footer from '@/components/Footer';
import Head from 'next/head';
import Menu from '@/components/Menu';
import { author, post } from '@prisma/client';
import TumbImage from '@/components/TumbImage';
import { prisma } from '@/lib/prisma';


const API_POSTS = `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/posts`

const Blog: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (fallback) => {

    const [isLoading, setLoading] = useState(false)
    const { data, error } = useSWR<InferGetStaticPropsType<typeof getStaticProps>>(API_POSTS, fetcher, {
        refreshInterval: 1800000,
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    })

    if (error) return <div>An error occured.</div>
    if (!data) return <PacmanLoader
        color='white'
        cssOverride={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }}
    ></PacmanLoader>

    if (isLoading) return <PacmanLoader
        color='white'
        cssOverride={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }}
    ></PacmanLoader>

    return (
        <SWRConfig value={{ fallback }}>
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
            <main className="bg-gray-800 min-h-screen">
                <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
                    <h1 className="text-4xl text-center font-bold text-white">🍆🥦🍅 Blog - Casa dos Nutrientes 🍉🥕🍌</h1>
                    <div className="min-h-min grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                        {data.posts.map((post: any, index: number) =>
                            <TumbImage
                                post={{ ...post, 'created_at': post.created_at }}
                                setLoading={setLoading}
                                key={index}
                            />)}
                    </div>
                </div>
            </main>
            <Footer />
        </SWRConfig>
    )
}

const fetcher = (url: string) => fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
}).then((res) => res.json());


export const getStaticProps: GetStaticProps = async () => {

    const posts = await prisma.post.findMany({
        select: {
            title: true,
            created_at: true,
            content: true,
            slug: true,
            image: true,
            author: true
        },
        take: 6,
        orderBy: {
            created_at: 'desc'
        }
    })


    const posts_serializated = posts.map(post => ({
        ...post,
        created_at: new Date(post.created_at!).toString()
    }))

    return { props: { posts_serializated } }

}


export default Blog
