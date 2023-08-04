import { author } from '@prisma/client';
import React, { SetStateAction } from 'react'
import Image from 'next/image';
import Link from 'next/link';


interface Iprops {
    post: {
        slug: string;
        title: string;
        content: string;
        created_at: Date | null;
        image: string;
        author: author;
    },
    setLoading: (value: SetStateAction<boolean>) => void
}

const TumbImage = (props: Iprops) => {
    const {post, setLoading} = props

    return (
        <div className="relative w-full h-80 bg-gray-900 rounded-lg overflow-hidden shadow-lg">
            <div style={{ width: '100%', height: '50%', position: 'relative' }}>
                <Image
                    alt={''}
                    src={post.image}
                    fill={true}
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    style={{
                        objectFit: "cover",
                        objectPosition: "center center"
                    }}
                    placeholder='blur'
                    blurDataURL={post.image}
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
}

export default TumbImage