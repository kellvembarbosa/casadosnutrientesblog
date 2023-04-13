import { useState } from 'react';
import Image from 'next/image';
import Modal from './Modal';
import SocialMediaLinks from './SocialMediaLinks';
import { FaPlayCircle } from 'react-icons/fa';
import Link from 'next/link';
import Head from 'next/head';
import Footer from './Footer';

interface Data {
  title: string
  created_at: string
  content: string
  ig_url: string
  kawai_url: string
  tiktok_url: string
  yt_url: string
  post_has_tag: PostHasTag[]
  imagesSTR: string
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
  imagesSTR
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
      <main className="flex flex-col m-1 sm:m-10 p-5 items-center justify-center min-h-screen bg-gray-900 rounded-lg overflow-hidden shadow-lg">
        <h1 className="text-white text-3xl text-center font-bold my-8">{title}</h1>
        <p className="text-gray-400 text-sm mt-2">Publicado em: {created_at}</p>
        <p className="text-white text-lg my-4 text-center">{content}</p>
        <div className="relative w-96 h-196 cursor-pointer" onClick={handleImageClick}>
          {/* <Image
            src={`data:image/webP;base64,${imagesSTR}`}
            style={{
              objectFit: 'cover',
              width: 600,
              height: 256
            }} 
            alt={title}
            width={600}
            height={600} /> */}
          {/* <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <FaPlayCircle size={128} color="#fff" />
          </div> */}
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

        <div className="flex flex-wrap mb-2 mt-3">
          <span className="text-gray-500 text-base mr-2">Categoria:</span>
          <Link
            href={`/categories/${category.slug}` ?? '#'}>
            <span className="text-gray-500 text-sm font-bold">{category.name}</span>
          </Link>
        </div>
        <div className="flex flex-wrap">
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
