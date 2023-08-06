import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { SWRConfig } from 'swr'
import Footer from '@/components/Footer';
import Head from 'next/head';
import Menu from '@/components/Menu';
import { prisma } from '@/lib/prisma';
import MainPageComponent from '@/components/MainPageComponent';
import { indexKeywords } from '@/lib/tags';

interface IProps {
    fallback: {
        [key: string]: any;
    } | undefined
}

const Blog: NextPage<IProps> = ({ fallback }) => {
    return (
        <>
            <Head>
                <title className="text-white text-3xl text-center font-bold my-8">{'Casa dos Nutrientes'}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Na Casa dos Nutrientes, descubra como otimizar suas refeições com uma alimentação saudável, incorporando creatina, whey protein e outros nutrientes, seguindo a pirâmide alimentar. Aprenda receitas saudáveis e a dieta ideal para ganhar massa muscular com o suporte de suplementos de alta qualidade" />
                {
                     <meta name="keywords" content={indexKeywords} />
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
                '/api/posts': JSON.stringify(posts_serializated)
            }
        }
    }
}


export default Blog
