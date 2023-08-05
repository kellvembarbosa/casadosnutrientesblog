import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { SWRConfig } from 'swr'
import Footer from '@/components/Footer';
import Head from 'next/head';
import Menu from '@/components/Menu';
import { prisma } from '@/lib/prisma';
import MainPageComponent from '@/components/MainPageComponent';

// const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/posts?page=${pageIndex}`

const Blog: NextPage = (fallback) => {
    return (
        <>
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
            <SWRConfig value={{ fallback }}>
                <MainPageComponent />
            </SWRConfig>
            <Footer />
        </>
    )
}

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
    return {
        props: {
            fallback: {
                '/api/posts': posts_serializated
            }
        }
    }
}


export default Blog
