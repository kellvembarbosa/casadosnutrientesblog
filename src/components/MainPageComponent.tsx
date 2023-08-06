import React, { useState } from 'react';
import TumbImage from './TumbImage';
import { PacmanLoader } from 'react-spinners';
import useSWRInfinite from 'swr/infinite';
import { author } from '@prisma/client';
import { useSWRConfig } from 'swr';
import useSWR from 'swr'

interface Post {
    idpost: number;
    title: string;
    created_at: string;
    content: string;
    slug: string;
    image: string;
    author: author;
}

interface Data {
    posts: Post[];
    myCursor: number;
}

const fetcher = async (url: string) => await fetch(url).then((res) => res.json());

const MainPageComponent: React.FC = () => {
    const { fallback } = useSWRConfig()

    const getKey = (pageIndex: number, previousPageData: Data) => {
        if (previousPageData && previousPageData.posts.length === 0) {
            {
                return null; // Alcançou o fim

            }
        }

        if (pageIndex === 0) {

            return '/api/posts'; // Primeira página
        }

        return `/api/posts?cursor=${previousPageData.myCursor}`; // Próximas páginas
    };
    // const { data, error, isLoading, isValidating, size, setSize } =
    //     useSWRInfinite<Data>(getKey, fetcher, {
    //         refreshInterval: 1800000,
    //         revalidateOnFocus: false,
    //         revalidateOnReconnect: false,
    //         revalidateIfStale: false,
    //         fallback: fallback,
    //     });
    const { data, error, isLoading, isValidating } = useSWR('/api/posts', fetcher, {
        fallback: fallback
    })
    if (error) return <div className='bg-white'>An error occurred.</div>;
    if (!data) return <div className='min-h-screen'>
        {/* <PacmanLoader color="white" cssOverride={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        }}></PacmanLoader> */}
    </div>;
    if (isLoading) return <div className='min-h-screen'>
        {/* <PacmanLoader color="white" cssOverride={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        }}></PacmanLoader> */}
    </div>;

    // const allPosts = data.flatMap((page: any) => page.posts);

    return (
        <div className='bg-white'>{JSON.parse(fallback['/api/posts'])[0].title}</div>
        // <main className="bg-gray-800 min-h-screen">
        //     <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
        //         <h1 className="text-4xl text-center font-bold text-white">
        //             🍆🥦🍅 Casa dos Nutrientes 🍉🥕🍌
        //         </h1>
        //         <div className="min-h-min grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        //             {data[0].map((post: Post, index: number) => (
        //                 <TumbImage post={{ ...post, 'created_at': post.created_at }} key={index} />
        //             ))}
        //         </div>
        //         <div className="flex justify-center items-center">
        //             {/* <button
        //                 onClick={() => setSize(size + 1)}
        //                 disabled={isLoading || isValidating || data[data.length - 1].myCursor === 0}
        //                 className='hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out'>
        //                 {isLoading || isValidating ? 'Carregando...' : 'Ver mais'}
        //             </button> */}
        //         </div>
        //     </div>
        // </main>
    );
};

export default MainPageComponent;
