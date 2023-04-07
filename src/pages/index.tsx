import { post } from '@prisma/client'
import { NextPage } from 'next'
import Link from 'next/link'
import useSWR, { SWRConfig } from 'swr'
import Image from 'next/image';

type Data = {
    posts: post[]
  }

const Blog: NextPage = (fallback) => {

    const { data, error } = useSWR<Data>('/api/posts', fetcher)
    if (error) return <div>An error occured.</div>
    if (!data) return <div>Loading ...</div>

    if(data) console.log();

    return (
        <SWRConfig value={{ fallback }}>
            <div className="bg-gray-800 min-h-screen">
                <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold text-white">Blog Casa dos Nutrientes</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                        {data.posts.map((post, index) => (
                            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                                <div className="h-64 bg-cover bg-center">
                                    <Image style={{
                                        objectFit: 'fill',
                                        height: '100%',
                                        width: '100%'
                                    }}
                                    alt={''}
                                    src={`data:image/png;base64,${post.image.toString()}`}
                                    width={100}
                                    height={100} />
                                </div>
                                <div className="px-6 py-4">
                                    <Link href={`/posts/${index + 1}`} className='block text-xl font-semibold text-white hover:text-gray-300'>
                                        {post.title}
                                    </Link>
                                    <p className="text-gray-400 mt-2">{new Date(post.created_at?? '').toLocaleDateString()}</p>
                                    <p className="text-gray-400 mt-2 truncate">{post.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SWRConfig>
    )
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const API = 'http://localhost:3000/api/posts'

export async function getServerSideProps() {
    const posts = await fetcher(API);
    return {
        props: {
            fallback: {
                [API]: posts
            }
        }
    };
}

export default Blog
