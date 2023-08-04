import Link from 'next/link';
import React from 'react'
import Image from 'next/image';


interface IProps {
    relatedPosts: {
        title: string;
        content: string;
        slug: string;
        image: string;
    }[] | undefined,
    title: string

}

const Related = (props: IProps) => {
    const { relatedPosts, title } = props
    //bg-gray-900
    // Filtrar os relatedPosts que têm um título diferente do título passado via props
    const filteredPosts = relatedPosts?.filter((post) => post.title !== title);

    return (
        <div className="min-h-min grid grid-cols-1 sm:grid-cols-3 gap-4 mt-32">
            {filteredPosts?.map((post, index) => {
                return (
                    <div key={index} className="h-48 w-64 bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                        <div style={{ width: '100%', height: '40%', position: 'relative' }}>
                            <Image
                                alt={''}
                                src={post.image}
                                fill={true}
                                style={{
                                    objectFit: "cover",
                                    objectPosition: "center center"
                                }}
                                placeholder='blur'
                                blurDataURL={post.image}
                            />
                        </div>

                        <div className="py-2 px-2">
                            <Link onClick={() =>
                                // setLoading(true)
                                () => { }
                            }
                                href={`/posts/${post.slug}`}
                                className='block text-sm font-semibold text-white hover:text-gray-300'>
                                {post.title}
                            </Link>
                            <p className="text-gray-400 text-sm mt-1 text-clip">{post.content}</p>

                        </div>

                    </div>
                )
            })
            }
        </div>
    )
}

export default Related