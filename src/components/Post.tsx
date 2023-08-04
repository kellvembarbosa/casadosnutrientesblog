import { useState } from 'react';
import Image from 'next/image';
import Modal from './Modal';
import SocialMediaLinks from './SocialMediaLinks';
import { FaPlayCircle } from 'react-icons/fa';
import Link from 'next/link';
import Head from 'next/head';
import Footer from './Footer';
import Menu from './Menu';
import { author } from '@prisma/client';
import Related from './Related';

interface Data {
  title: string
  created_at: string
  content: string
  ig_url: string
  kawai_url: string
  tiktok_url: string
  yt_url: string
  author: author
  post_has_tag: PostHasTag[]
  imagesSTR: string
  relatedPosts: {
    title: string;
    content: string;
    slug: string;
    image: string;
  }[] | undefined
  category: {
    name: string,
    slug: string
  }
}
interface PostHasTag {
  tag: Tag
}
interface Tag {
  tag: string
  slug: string
}

const Post: React.FC<Data> = ({
  title,
  content,
  created_at,
  ig_url,
  kawai_url,
  tiktok_url,
  yt_url,
  category,
  post_has_tag,
  imagesSTR,
  author,
  relatedPosts
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const keywords = post_has_tag.map(tag => tag.tag.tag)

  const handleImageClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {/* <Link href={`/`} className='fixed top-0 right-0 m-4 p-2 rounded-full bg-gray-400 text-base font-semibold text-gray-800 hover:text-gray-300'>Voltar</Link> */}
      <Head>
        <title className="text-white text-3xl text-center font-bold my-8">{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {
          <meta name="keywords" content={keywords.join(', ')}></meta>
        }
      </Head>
      <Menu />
      <main className="flex flex-col m-1 sm:m-10 p-5 items-center justify-center min-h-screen bg-gray-900 rounded-lg overflow-hidden shadow-lg">
        <h1 className="text-white text-3xl text-center font-bold my-8">{title}</h1>
        <p className="text-gray-400 text-sm mt-2">Publicado em: {created_at}</p>
        <p className="text-gray-400 text-sm mt-2">Autor: {author.name}</p>
        <p className="text-white text-lg my-4 text-center">{content}</p>
        <div className="relative w-360 h-740 cursor-pointer" onClick={handleImageClick}>
          <Image
            src={imagesSTR}
            style={{
              objectFit: 'cover',
              width: 252,
              height: 518
            }}
            placeholder='blur'
            blurDataURL={imagesSTR}
            alt={title}
            width={252}
            height={518} />
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <FaPlayCircle size={128} color="#fff" />
          </div>
          {isModalOpen && (
            <Modal>
              <div className="flex justify-center items-center h-56">
                <SocialMediaLinks
                  instagramLink={ig_url}
                  kawaiLink={kawai_url}
                  tiktokLink={tiktok_url}
                  youtubeLink={yt_url}
                />
              </div>
            </Modal>
          )}
        </div>

        <Related title={title} relatedPosts={relatedPosts} />

        <div className="flex flex-wrap mb-2 justify-center mt-12">
          <span className="text-gray-500 text-base mr-2">Categoria:</span>
          <Link
            href={`/categories/${category.slug}` ?? '#'}>
            <span className="text-gray-500 text-sm font-bold">{category.name}</span>
          </Link>
        </div>
        <div className="flex flex-wrap justify-center">
          <span className="text-gray-500 text-base mr-2">Tags:</span>
          {
            post_has_tag?.map((tag, index) => (
              <Link
                key={index}
                href={`/tags/${tag.tag.slug}` ?? '#'}>
                <span className="text-gray-500 text-sm font-bold mr-2">
                  {tag.tag.tag}
                </span>
              </Link>
            ))
          }
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Post;
