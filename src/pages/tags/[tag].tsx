import { prisma } from '@/lib/prisma'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type PostsType = {
    serializabledPost: {
        title: string;
        image: Buffer;
        content: string;
        post_has_tag: {
            tag: {
                slug: string | null;
            };
        }[];
        slug: string;
        created_at: Date | null;
    }[],
    nameTag: string
}

const TagPage: NextPage<PostsType> = ({ serializabledPost, nameTag }) => {
    return (
        <div>
            <div className="bg-gray-800 min-h-screen">
                <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
                    <h1 className="text-4xl text-center font-bold text-white">{`#${nameTag}`}</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                        {
                            serializabledPost.map((post, index) => (
                                <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                                    <div className="h-64 bg-cover bg-center">
                                        <Image style={{
                                            objectFit: 'fill',
                                            height: '100%',
                                            width: '100%'
                                        }}
                                            alt={''}
                                            src={`data:image/png;base64,${post.image}`}
                                            width={100}
                                            height={100} />
                                    </div>
                                    <div className="px-6 py-4">
                                        <Link href={`/posts/${post.slug}`} className='block text-xl font-semibold text-white hover:text-gray-300'>
                                            {post.title}
                                        </Link>
                                        <p className="text-gray-400 mt-2">{new Date(post.created_at ?? '').toLocaleDateString()}</p>
                                        <p className="text-gray-400 mt-2 truncate">{post.content}</p>
                                    </div>
                                </div>
                            ))

                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TagPage


export const getStaticProps: GetStaticProps = async (context) => {
    const { params } = context

    const nameTag = params!.tag as string

    const posts = await prisma.post.findMany({
        select: {
            title: true,
            content: true,
            image: true,
            slug: true,
            created_at: true,
            post_has_tag: {
                select: {
                    tag: {
                        select: {
                            slug: true,
                        }
                    }
                }
            }
        },
        where: {
            post_has_tag: {
                some: {
                    tag: {
                        slug: {
                            equals: params!.tag as string
                        }
                    }
                }
            }
        }
    })

    const serializabledPost = posts.map(post => ({
        ...post,
        image: post!.image.toString('base64'),
        created_at: new Date(post.created_at!).toString()
    }));


    return {
        props: {
            serializabledPost,
            nameTag
        }
    };
}

export const getStaticPaths: GetStaticPaths = async () => {
    const getPaths = await prisma.tag.findMany({
        select: {
            tag: true,
            slug: true
        }
    })

    const paths = getPaths.map(path => ({
        params: { tag: path.slug! },
    }))

    return { paths, fallback: false };
}