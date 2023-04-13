import { post } from '@prisma/client'
import { NextPage } from 'next'
import Link from 'next/link'
import useSWR, { SWRConfig } from 'swr'
import Image from 'next/image';
import { PacmanLoader } from 'react-spinners';
import { useState } from 'react';
import Menu from '@/components/Menu';
import Footer from '@/components/Footer';
import Head from 'next/head';

type Data = {
    posts: post[],
    imagesSTR: string[]
}

const Blog: NextPage = (fallback) => {

    const [isLoading, setLoading] = useState(false)
    const { data, error } = useSWR<Data>(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/posts`, fetcher)

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

    const images = data.imagesSTR.map(image => image)
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
            <main className="bg-gray-800 min-h-screen">
                <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
                    <h1 className="text-4xl text-center font-bold text-white">Blog Casa dos Nutrientes</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                        {data.posts.map((post, index) => {
                            return (
                                <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                                    <div className="h-64 bg-cover bg-center">
                                        <Image
                                            alt={''}
                                            src={`data:image/png;base64,${images[index]}`}
                                            width={100}
                                            height={100}
                                            style={{
                                                objectFit: 'cover',
                                                width: 600,
                                                height: 256
                                            }} />
                                    </div>
                                    <div className="px-6 py-4">
                                        <Link onClick={() => setLoading(true)} href={`/posts/${post.slug}`} className='block text-xl font-semibold text-white hover:text-gray-300'>
                                            {post.title}
                                        </Link>
                                        <p className="text-gray-400 mt-2">{new Date(post.created_at ?? '').toLocaleDateString()}</p>
                                        <p className="text-gray-400 mt-2 truncate">{post.content}</p>
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

// export async function getServerSideProps() {
//     const { posts } = await fetcher(API_POSTS);

//     return {
//         props: {
//             fallback: {
//                 [API_POSTS]: posts
//             }
//         }
//     };
// }


export default Blog
