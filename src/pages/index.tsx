import { NextPage } from 'next'
import Link from 'next/link'
import useSWR, { SWRConfig, Cache } from 'swr'
import Image from 'next/image';
import { PacmanLoader } from 'react-spinners';
import { useState } from 'react';
import Footer from '@/components/Footer';
import Head from 'next/head';
import Menu from '@/components/Menu';
import { author } from '@prisma/client';


type Data = {
    posts: {
        slug: string;
        title: string;
        content: string;
        created_at: Date | null;
        image: string;
        author: author
    }[],
}
const API_POSTS = `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/posts`

const Blog: NextPage = (fallback) => {

    const [isLoading, setLoading] = useState(false)
    const { data, error } = useSWR<Data>(API_POSTS, fetcher)

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
                    <h1 className="text-4xl text-center font-bold text-white">Blog Casa dos Nutrientes</h1>
                    <div className="min-h-min grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                        {data.posts.map((post, index) => {
                            return (
                                <div key={index} className="relative w-full h-80 bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                                    <div style={{ width: '100%', height: '50%', position: 'relative' }}>
                                        <Image
                                            alt={''}
                                            src={post.image}
                                            fill={true}
                                            style={{
                                                objectFit: "cover",
                                                objectPosition: "center center"
                                            }}
                                        />
                                    </div>

                                    <div className="absolute bottom-0 left-0 w-full h-1/2">
                                        <Link onClick={() =>
                                            setLoading(true)}
                                            href={`/posts/${post.slug}`}
                                            className='block px-2 text-lg font-semibold text-white hover:text-gray-300 truncate'>
                                            {post.title}
                                        </Link>
                                        <div className='px-2'>
                                            <p className="text-gray-400">{new Date(post.created_at ?? '').toLocaleDateString() + ` por ${post.author.name}`}</p>
                                        </div>
                                        <div className='absolute bottom-0 left-0 py-5 px-2'>
                                            <p className="text-gray-400 line-clamp-3">{post.content}</p>
                                        </div>

                                    </div>




                                </div>
                            )
                        })}
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

export async function getServerSideProps() {
    const { posts } = await fetcher(API_POSTS);

    return {
        props: {
            fallback: {
                [API_POSTS]: posts
            },
            revalidade: 180
        },
    };
}


export default Blog
