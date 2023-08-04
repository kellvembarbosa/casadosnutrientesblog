import { prisma } from '@/lib/prisma'
import React, { useEffect, useState } from 'react'
import { GetServerSidePropsContext, NextPage } from 'next';
import TumbImage from '@/components/TumbImage';
import { author } from '@prisma/client';
import Head from 'next/head';
import Footer from '@/components/Footer';
import Menu from '@/components/Menu';
import { PacmanLoader } from 'react-spinners';

interface ISerializabledPost {
  title: string,
  created_at: string | undefined,
  content: string,
  slug: string,
  image: string,
  author: author
}

interface Posts {
  serializabledPosts: ISerializabledPost[],
  search: string
}

const Search: NextPage<Posts> = ({ serializabledPosts, search }) => {
  const [data, setData] = useState<ISerializabledPost[]>()

  useEffect(() => {
    setData(serializabledPosts)
  }, [serializabledPosts])

  if (data) {
    return (
      <>
        <Head>
          <title className="text-white text-3xl text-center font-bold my-8">{'História'}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Menu />
        <main className="bg-gray-800 min-h-screen">
          <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
            <h1 className="text-4xl text-center font-bold text-white">{`Resultados para: "${search}"`}</h1>
            <div className="min-h-min grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {data.map((post, index) =>
                <TumbImage
                  post={post}
                  setLoading={() => { }}
                  key={index}
                />)}
            </div>
          </div>
        </main>
        <Footer /></>
    )
  }
  else {
    return <PacmanLoader
      color='white'
      cssOverride={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}
    ></PacmanLoader>
  }
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { search } = context.query;
  try {
    const posts = await prisma.post.findMany({
      select: {
        title: true,
        created_at: true,
        content: true,
        slug: true,
        image: true,
        author: true
      },
      orderBy: {
        created_at: 'desc'
      },
      where: {
        title: {
          contains: search as string
        }
      }
    })
    const serializabledPosts = posts.map(post => ({
      ...post,
      created_at: post.created_at?.toLocaleString()
    }));

    return {
      props: { serializabledPosts, search },
    };
  } catch (e) {
    console.log(e);
  }
}

export default Search